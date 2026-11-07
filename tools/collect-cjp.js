// 日本 (Claudeセレクト) の地点を自動で集めるスクリプト
// 使い方: node tools/collect-cjp.js <集めたい件数> [同時タブ数] [msedge|chrome] [show] [--only=..|--except=..] [--town=0.5]
// 主なオプション: --city=0.5 (都会の割合) --town=1 (町の割合) --km=1 (最低距離) --until=11:30 (止める時刻) --balance (少ない県を多めに) --except=離島
// 範囲の四角は tools/cjp-regions.js、町の一覧は tools/cjp-towns.json (tools/build-cjp-towns.js で作る)
// 結果は tools/cjp-found.json に少しずつ追記されるので、途中で止めても続きから再開できる
// 画面には件数だけ出す (地名は出さない)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const FOUND = path.join(__dirname, 'cjp-found.json');
// "--" で始まる引数はオプション、それ以外は順番どおりの引数として扱う
const POS = process.argv.slice(2).filter(a => !a.startsWith('--'));
const OPT = Object.fromEntries(process.argv.slice(2).filter(a => a.startsWith('--')).map(a => a.slice(2).split('=')));
const TARGET = Number(POS[0] || 10);
const TABS = Number(POS[1] || 3);
const BROWSER = POS[2] || 'msedge';
const SHOW = POS[3] === 'show';
// --only=北海道,沖縄 で指定した地方だけ、--except=関東 で指定した地方以外を集める
const ONLY = OPT.only ? OPT.only.split(',') : null;
const EXCEPT = OPT.except ? OPT.except.split(',') : [];

// 範囲の四角 (name: 地方、sub: 四角の呼び名、box: [南, 西, 北, 東]、w: 重み、tag: 離島など) は tools/cjp-regions.js にある
const ALL_REGIONS = require('./cjp-regions.js');

// --only / --except で地方を絞り込む
// 地方名・四角の呼び名・tag (離島) のどれかが指定に合うかどうか
const matches = (list, r) => list.includes(r.name) || list.includes(r.sub) || (r.tag && list.includes(r.tag));
const REGIONS = ALL_REGIONS.filter(r => (!ONLY || matches(ONLY, r)) && !matches(EXCEPT, r));
if (!REGIONS.length) { console.log('地方の指定が正しくありません:', [...new Set(ALL_REGIONS.map(r => r.name))].join(','), '/ 離島'); process.exit(1); }
// 座標が入っている四角を探す (見つからなければ undefined)
const boxOf = ([lat, lng], list = REGIONS) => list.find(({ box: [s, w, n, e] }) => lat >= s && lat <= n && lng >= w && lng <= e);
const inRegions = p => !!boxOf(p);

// 四角ごとの町の一覧 (tools/build-cjp-towns.js で作る。なければ町は使わない)
const TOWNS_FILE = path.join(__dirname, 'cjp-towns.json');
const TOWNS = fs.existsSync(TOWNS_FILE) ? JSON.parse(fs.readFileSync(TOWNS_FILE, 'utf8')) : {};
// 町の近くを狙う割合 (--town=0.4 のように変えられる)。世界版より少し低めにして、田舎や山道も残す
const TOWN_RATE = Number(OPT.town ?? 0.5);

// Ctrl+C が押されたら true になる
let stopping = false;

const rand = (a, b) => a + Math.random() * (b - a);

// 重みに従って地方を1つ選ぶ
function pickRegion() {
    const total = REGIONS.reduce((s, r) => s + r.w, 0);
    let x = Math.random() * total;
    for (const r of REGIONS) { if ((x -= r.w) < 0) return r; }
    return REGIONS[0];
}

// 都会の一覧 [緯度, 経度, 人口] (tools/build-cjp-towns.js で作る。人口5万人以上)
// --city=0.7 のように指定すると、その割合で都会の近くを狙う (山道や島が出すぎるのを防ぐ)
const CITIES_FILE = path.join(__dirname, 'cjp-cities.json');
const CITIES = (fs.existsSync(CITIES_FILE) ? JSON.parse(fs.readFileSync(CITIES_FILE, 'utf8')) : []).filter(c => inRegions(c));
const CITY_RATE = Number(OPT.city ?? 0);
// 都会の中心からどれだけ離れた点まで狙うか (度)。--spread=0.02 で約±2km。小さくすると街中に絞れる
const CITY_SPREAD = Number(OPT.spread ?? 0.04);

// --balance を付けると、地点が少ない都道府県を多めに狙う
// CJPlinks.js の pref を数えて、四角ごとに「中で一番多い県」の件数から倍率を決める (中央値の県が1倍、少ない県ほど大きい)
// 倍率は 0.3〜3倍 にとどめて、ほかの県が出なくなるのを防ぐ
const boxRate = new Map();
if ('balance' in OPT) {
    const ctx = {};
    require('vm').runInNewContext(fs.readFileSync(path.join(ROOT, 'Resource/maplink/CJPlinks.js'), 'utf8'), ctx);
    const spots = ctx.streetViews.filter(s => s.pref).map(s => ({
        pref: s.pref,
        lat: Number(s.embedUrl.match(/!1d(-?[\d.]+)/)[1]),
        lng: Number(s.embedUrl.match(/!2d(-?[\d.]+)/)[1]),
    }));
    const prefCount = {};
    spots.forEach(s => prefCount[s.pref] = (prefCount[s.pref] || 0) + 1);
    const sorted = Object.values(prefCount).sort((a, b) => a - b);
    const median = sorted[sorted.length >> 1];
    for (const r of ALL_REGIONS) {
        const [s, w, n, e] = r.box;
        const c = {};
        spots.filter(p => p.lat >= s && p.lat <= n && p.lng >= w && p.lng <= e).forEach(p => c[p.pref] = (c[p.pref] || 0) + 1);
        const top = Object.entries(c).sort((a, b) => b[1] - a[1])[0];
        // 地点がまだない四角は倍率1のままにする
        const rate = top ? Math.min(3, Math.max(0.3, median / prefCount[top[0]])) : 1;
        boxRate.set(r, rate);
        r.w *= rate;
    }
}

// 人口の平方根を重みにする (人口そのままだと東京ばかりになるので、少しならす)。--balance の倍率もかける
const cityWeight = c => Math.sqrt(c[2]) * (boxRate.get(boxOf(c)) ?? 1);
const CITY_TOTAL = CITIES.reduce((s, c) => s + cityWeight(c), 0);
function pickCity() {
    let x = Math.random() * CITY_TOTAL;
    for (const c of CITIES) { if ((x -= cityWeight(c)) < 0) return c; }
    return CITIES[0];
}

// 地点どうしの最低距離 (km)。--km=1 のように変えられる (都会は2kmだとすぐ埋まって入らなくなる)
const MIN_KM = Number(OPT.km || 2);

// 収集を止める時刻 (--until=11:30 のように指定)。件数に届いていなくても、この時刻で終わる
let DEADLINE = Infinity;
if (OPT.until) {
    const [h, m] = OPT.until.split(':').map(Number);
    const d = new Date(); d.setHours(h, m, 0, 0);
    DEADLINE = d.getTime();
}

// 次に試す座標を作る
// CITY_RATE の割合で都会の近く (約±4km)
// それ以外は四角を重みで選んでから、TOWN_RATE の割合でその四角の中の町の近く (約±2km)、残りは四角の中のどこか
function nextPoint() {
    if (CITIES.length && Math.random() < CITY_RATE) {
        const [lat, lng] = pickCity();
        const p = [lat + rand(-CITY_SPREAD, CITY_SPREAD), lng + rand(-CITY_SPREAD, CITY_SPREAD)];
        return { lat: p[0], lng: p[1], region: boxOf([lat, lng]), town: true };
    }
    const r = pickRegion();
    const t = TOWNS[r.sub] || [];
    if (t.length && Math.random() < TOWN_RATE) {
        const [lat, lng] = t[Math.floor(Math.random() * t.length)];
        return { lat: lat + rand(-0.02, 0.02), lng: lng + rand(-0.02, 0.02), region: r, town: true };
    }
    const [s, w, n, e] = r.box;
    return { lat: rand(s, n), lng: rand(w, e), region: r, town: false };
}

// ---------- 青い線に吸い付ける (--snap=0 で使わない。世界版 collect-cpw.js と同じ仕組み) ----------
// 決めた点のあたりの「ズーム SNAP_Z のカバレッジタイル」を読んで、青い線の上のピクセルを1つ選び、そこを試す
// 青がないタイルなら Googleマップを開かずに次へ進むので、外れの時間がほぼなくなる
const SNAP = OPT.snap !== '0';
const SNAP_Z = Number(OPT.snapz || 14);
// 投稿写真の丸い点が出ない形のカバレッジタイル (線だけ)
const tileUrl = (x, y, z) => `https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i${z}!2i${x}!3i${y}!4i256!2m8!1e2!2ssvv!4m2!1scb_client!2sapiv3!4m2!1scc!2s*211m3*211e2*212b1*213e2!3m3!3sUS!12m1!1e68!4e0`;
// 緯度経度 ⇔ ズームzの世界ピクセル座標 (Webメルカトル)
const toPx = (lat, lng, z) => {
    const n = 256 * 2 ** z, r = lat * Math.PI / 180;
    return [(lng + 180) / 360 * n, (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * n];
};
const fromPx = (X, Y, z) => {
    const n = 256 * 2 ** z;
    return [Math.atan(Math.sinh(Math.PI * (1 - 2 * Y / n))) * 180 / Math.PI, X / n * 360 - 180];
};
// タイル読み込み用のページ (画像を止めている context とは別にする)
let tilePage = null;
// 吸い付けの成績 (タイルを読んだ数 / 青があった数)
const snapStat = { tiles: 0, hit: 0 };
// 点 p を青い線の上に動かす。青がなければ null
async function snap(p) {
    const [X, Y] = toPx(p.lat, p.lng, SNAP_Z);
    const tx = Math.floor(X / 256), ty = Math.floor(Y / 256);
    snapStat.tiles++;
    // ブラウザの中でタイルを読んで、青いピクセルを1つランダムに選ぶ
    const pick = await tilePage.evaluate(url => new Promise(res => {
        const img = new Image(); img.crossOrigin = 'anonymous';
        img.onload = () => {
            const cv = document.createElement('canvas'); cv.width = cv.height = 256;
            const ctx = cv.getContext('2d'); ctx.drawImage(img, 0, 0);
            const d = ctx.getImageData(0, 0, 256, 256).data;
            const blue = [];
            for (let i = 0; i < 65536; i++) if (d[i * 4 + 3] > 60) blue.push(i);
            res(blue.length ? blue[Math.floor(Math.random() * blue.length)] : null);
        };
        img.onerror = () => res(null);
        img.src = url;
    }), tileUrl(tx, ty, SNAP_Z)).catch(() => null);
    if (pick === null) return null;
    snapStat.hit++;
    const [lat, lng] = fromPx(tx * 256 + (pick % 256) + 0.5, ty * 256 + Math.floor(pick / 256) + 0.5, SNAP_Z);
    return { ...p, lat, lng };
}

// 地方ごとの件数と割合を1行にする (地名は出さない、地方の名前だけ。地方が記録されていない古い地点は数えない)
function distribution(found) {
    const c = {};
    const f2 = found.filter(f => f.name);
    f2.forEach(f => c[f.name] = (c[f.name] || 0) + 1);
    return Object.entries(c).sort((a, b) => b[1] - a[1])
        .map(([k, v]) => `${k} ${v}`).join(' / ') + ` (地方の記録あり ${f2.length} 件)`;
}

// 2点間のおおよその距離 (km)
function distKm(a, b) {
    const dy = (a[0] - b[0]) * 111;
    const dx = (a[1] - b[1]) * 111 * Math.cos(a[0] * Math.PI / 180);
    return Math.hypot(dx, dy);
}

// 既存の地点 (JPlinks.js と CJPlinks.js) のパノラマIDを集める
function existingIds() {
    const ids = new Set();
    for (const f of ['JPlinks.js', 'CJPlinks.js']) {
        const p = path.join(ROOT, 'Resource/maplink', f);
        if (!fs.existsSync(p)) continue;
        for (const m of fs.readFileSync(p, 'utf8').matchAll(/!1s([^!]+)!2m2/g)) ids.add(m[1]);
    }
    return ids;
}

// 1か所を調べる: 新しいページで開き、URLにパノラマIDが出るまで待つ
// 集めた地点を保存する
// ほかのプログラムがファイルを開いていると Windows で書き込みに失敗することがあるので、
// 少し待って何回かやり直す。それでもだめなら次の保存に任せて収集は続ける (中身は毎回全部書くので失われない)
function save(found) {
    for (let i = 0; i < 5; i++) {
        try {
            fs.writeFileSync(FOUND, JSON.stringify(found, null, 1));
            return;
        } catch (e) {
            const until = Date.now() + 300;
            while (Date.now() < until) { /* 少し待つ */ }
        }
    }
    console.log('  保存に失敗しました (次の保存でまとめて書きます)');
}

// 失敗の理由を数える (原因を調べるため)
const fails = { err: 0, aborted: 0, consent: 0, other: 0 };
let lastErr = '';

async function probe(context, lat, lng) {
    let page;
    try {
        page = await context.newPage();
        // ページ側が読み込み途中で自分のURLを書き換えると ERR_ABORTED になることがあるが、
        // そのままページは開き続けるので無視して下のURLチェックへ進む
        await page.goto(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat.toFixed(5)},${lng.toFixed(5)}&hl=ja`, { timeout: 30000, waitUntil: 'commit' })
            .catch(e => { if (!/ERR_ABORTED/.test(e.message)) throw e; fails.aborted++; });
        // 同意画面かどうか判定できるよう、HTMLが読み込まれるまでは待つ
        await page.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
        // Cookieの同意画面が出たら「すべて拒否」を押して先へ進む
        if (page.url().includes('consent.google')) {
            fails.consent++;
            await page.locator('button:has-text("すべて拒否"), button:has-text("Reject all")').first().click({ timeout: 10000 });
            await page.waitForURL(/google\.[a-z.]+\/maps/, { timeout: 20000 });
        }
        // 最大12秒、URLに "!1s<ID>!2e<種類>" が出るのを待つ
        // 近くに地点がないときは URL が「panoid が空」の形 (panoid%26yaw) になるので、
        // その形が4秒続いたら外れと判断して次へ進む (待ち時間の節約、夜の遅い回線も考えて少し長め)
        let emptyCount = 0;
        for (let i = 0; i < 24; i++) {
            if (/panoid%26yaw/.test(page.url())) {
                if (++emptyCount >= 8) return null;
            } else {
                emptyCount = 0;
            }
            const m = page.url().match(/@(-?[\d.]+),(-?[\d.]+).*?!1s([^!]+)!2e(\d+)/);
            if (m) {
                const title = (await page.title()).replace(/\s*-\s*Google マップ$/, '');
                return { lat: Number(m[1]), lng: Number(m[2]), id: m[3], type: m[4], title };
            }
            await page.waitForTimeout(500);
        }
        // マップ以外のページで止まっていたら、そのURLの先頭だけ覚えておく (地名は含まれない)
        if (!/google\.[a-z.]+\/maps\/@/.test(page.url())) { fails.other++; lastErr = 'url: ' + page.url().slice(0, 40); }
        return null;
    } catch (e) {
        fails.err++;
        // 座標を含むURLは出さず、エラーの種類だけ残す
        lastErr = String(e.message).split('\n')[0].replace(/ at https?:\S+/, '').slice(0, 120);
        return null;
    } finally {
        if (page) await page.close().catch(() => {});
    }
}

async function main() {
    const found = fs.existsSync(FOUND) ? JSON.parse(fs.readFileSync(FOUND, 'utf8')) : [];
    const seen = existingIds();
    found.forEach(f => seen.add(f.id));
    const stats = { tried: 0, ok: 0, none: 0, user: 0, dup: 0, near: 0 };
    // 町の近く / ランダム それぞれの試行数と採用数 (効率を比べるため)
    const eff = { townTry: 0, townOk: 0, randTry: 0, randOk: 0 };
    const startAt = Date.now();
    const pct = (a, b) => b ? (a / b * 100).toFixed(1) + '%' : '-';
    const effLine = () => `町の近く ${pct(eff.townOk, eff.townTry)} (${eff.townOk}/${eff.townTry}) / ランダム ${pct(eff.randOk, eff.randTry)} (${eff.randOk}/${eff.randTry})`
        + ` / 1件あたり ${stats.ok ? ((Date.now() - startAt) / 1000 / stats.ok).toFixed(1) : '-'}秒`;

    // インストール済みのブラウザを使う (ダウンロード不要)
    // 3つ目の引数で選べる: msedge (既定) か chrome。選んだ方がなければもう片方を試す
    const first = BROWSER === 'chrome' ? 'chrome' : 'msedge';
    const second = first === 'chrome' ? 'msedge' : 'chrome';
    // 公式ストリートビューの表示には WebGL が要る。GPUが使えない環境でも動くよう、
    // ソフトウェア描画 (SwiftShader) を許可する。4つ目の引数に show を付けると画面を出して動かす
    const opts = {
        headless: !SHOW,
        args: ['--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'],
    };
    const browser = await chromium.launch({ channel: first, ...opts })
        .catch(() => chromium.launch({ channel: second, ...opts }));
    const context = await browser.newContext({ locale: 'ja-JP' });
    // 速くするため、画像・フォント・動画は読み込まない (パノラマIDはURLに出るので景色の画像は要らない)
    await context.route('**/*', route => {
        const t = route.request().resourceType();
        return (t === 'image' || t === 'font' || t === 'media') ? route.abort() : route.continue();
    });

    // 最初に WebGL が使えるか確認して表示する (使えないと公式の地点が見つからない)
    const check = await context.newPage();
    const gl = await check.evaluate(() => !!document.createElement('canvas').getContext('webgl'));
    await check.close();
    console.log(`ブラウザ: ${browser.browserType().name()} ${browser.version()} / WebGL: ${gl ? 'OK' : 'NG'}`);
    // 吸い付け用に、画像を止めていない別の context でページを1つ開いておく
    if (SNAP) {
        tilePage = await (await browser.newContext()).newPage();
        console.log(`青い線に吸い付け: ON (ズーム ${SNAP_Z}) / 都会 ${CITIES.length} 件 (割合 ${CITY_RATE})`);
    }

    // Ctrl+C で止めたら、ブラウザを閉じてきれいに終わる (集めた分は保存済み)
    process.on('SIGINT', async () => {
        stopping = true;
        console.log(`\n停止しました。採用 ${found.length} 件は保存済み`);
        await browser.close().catch(() => {});
        process.exit(0);
    });

    // 同時に TABS 本ずつ調べる
    const worker = async () => {
        while (found.length < TARGET && Date.now() < DEADLINE) {
            let p = nextPoint();
            // 吸い付けがONなら、青い線が見つかるまで (最大30回) 点を作り直す。見つからなければ最後の点のまま試す
            if (SNAP) {
                for (let k = 0; k < 30 && !stopping; k++) {
                    const s = await snap(p);
                    if (s) { p = s; break; }
                    p = nextPoint();
                }
            }
            stats.tried++;
            if (p.town) eff.townTry++; else eff.randTry++;
            const r = await probe(context, p.lat, p.lng);
            if (stopping) break;
            // 20回ごとに途中経過を出す (件数だけ、地名は出さない)
            if (stats.tried % 20 === 0) {
                console.log(`試行 ${stats.tried} / 採用 ${found.length} / 内訳 ${JSON.stringify({ ...stats, ...fails })}`);
                if (lastErr) console.log('  直近の失敗:', lastErr);
            }
            if (!r) { stats.none++; continue; }
            // 公式 (!2e0) かつIDが22文字のものだけ採用 (投稿写真は除外)
            if (r.type !== '0' || r.id.length !== 22) { stats.user++; continue; }
            if (seen.has(r.id)) { stats.dup++; continue; }
            // 地方を絞っているときは、見つかった地点もその範囲内のものだけ採用
            if ((ONLY || EXCEPT.length) && !inRegions([r.lat, r.lng])) { stats.near++; continue; }
            // 近すぎる地点 (MIN_KM 以内) は似た景色になるので除外
            if (found.some(f => distKm([f.lat, f.lng], [r.lat, r.lng]) < MIN_KM)) { stats.near++; continue; }
            if (found.length >= TARGET) break;
            seen.add(r.id);
            // どの地方・四角の地点かも記録する (四角の外なら、点を落とした四角とみなす)
            const box = boxOf([r.lat, r.lng]) || p.region;
            found.push({ ...r, name: box.name, sub: box.sub });
            stats.ok++;
            if (p.town) eff.townOk++; else eff.randOk++;
            save(found);
            // 10件ごとに件数・地方ごとの数・効率を出す (地名は出さない)
            if (stats.ok % 10 === 0) console.log(`採用 ${found.length}/${TARGET} (試行 ${stats.tried})\n  分布: ${distribution(found)}\n  効率: ${effLine()}`);
            // Googleに負荷をかけすぎないよう少し待つ
            await new Promise(r => setTimeout(r, 1000 + Math.random() * 1000));
        }
    };
    await Promise.all(Array.from({ length: TABS }, worker));
    // 最後にもう一度保存 (途中の保存に失敗していた分も書く)
    save(found);
    await browser.close();
    console.log('結果', JSON.stringify({ ...stats, total: found.length }));
    console.log('効率', effLine());
}

main();
