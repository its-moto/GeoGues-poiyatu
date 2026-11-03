// 日本 (Claudeセレクト) の地点を自動で集めるスクリプト
// 使い方: node tools/collect-cjp.js <集めたい件数> [同時タブ数] [msedge|chrome] [show]
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

// 範囲の四角 [南, 西, 北, 東] と、集める割合 (重み)
// 海を狙う外れを減らすため、地方をさらに小さい四角に分けて陸地に合わせている
// name: 地方 (--only / --except で使う)、sub: 四角の呼び名
// 地方ごとの重みの合計: 北海道17 東北13 関東12 中部15 近畿13 中国11 四国8 九州18 沖縄5
const ALL_REGIONS = [
    // 北海道
    { name: '北海道', sub: '道南', box: [41.4, 139.9, 42.6, 141.2], w: 3 },
    { name: '北海道', sub: '道央', box: [42.5, 140.9, 43.4, 142.3], w: 5 },
    { name: '北海道', sub: '日高', box: [41.95, 142.3, 42.6, 143.4], w: 1 },
    { name: '北海道', sub: '道北', box: [43.4, 141.6, 45.5, 142.9], w: 4 },
    { name: '北海道', sub: '道東', box: [42.6, 142.9, 44.4, 145.6], w: 4 },
    // 東北
    { name: '東北', sub: '青森', box: [40.2, 139.9, 41.6, 141.7], w: 2 },
    { name: '東北', sub: '秋田', box: [38.9, 139.8, 40.2, 140.8], w: 2 },
    { name: '東北', sub: '岩手', box: [38.9, 140.8, 40.2, 142.0], w: 3 },
    { name: '東北', sub: '山形', box: [37.7, 139.6, 38.9, 140.5], w: 2 },
    { name: '東北', sub: '宮城', box: [37.8, 140.5, 38.9, 141.6], w: 2 },
    { name: '東北', sub: '福島', box: [36.8, 139.7, 37.8, 141.0], w: 2 },
    // 関東
    { name: '関東', sub: '東京・神奈川', box: [35.2, 139.0, 35.9, 139.9], w: 5 },
    { name: '関東', sub: '北関東・埼玉', box: [35.9, 138.8, 37.0, 140.6], w: 4 },
    { name: '関東', sub: '千葉', box: [34.9, 139.9, 35.95, 140.85], w: 3 },
    // 中部
    { name: '中部', sub: '新潟', box: [36.8, 137.6, 38.3, 139.7], w: 3 },
    { name: '中部', sub: '富山・石川', box: [36.0, 136.2, 37.0, 137.6], w: 2 },
    { name: '中部', sub: '能登', box: [37.0, 136.6, 37.5, 137.3], w: 1 },
    { name: '中部', sub: '福井', box: [35.4, 135.5, 36.3, 136.5], w: 1 },
    { name: '中部', sub: '長野', box: [35.2, 137.6, 36.8, 138.5], w: 3 },
    { name: '中部', sub: '山梨', box: [35.2, 138.5, 35.9, 139.0], w: 1 },
    { name: '中部', sub: '静岡', box: [34.6, 137.5, 35.2, 139.0], w: 2 },
    { name: '中部', sub: '愛知・岐阜', box: [34.6, 136.5, 36.0, 137.6], w: 2 },
    // 近畿
    { name: '近畿', sub: '大阪・京都・奈良', box: [34.3, 135.0, 35.1, 136.0], w: 4 },
    { name: '近畿', sub: '兵庫西部', box: [34.6, 134.3, 35.1, 135.0], w: 1 },
    { name: '近畿', sub: '兵庫北部・京都北部', box: [35.1, 134.3, 35.7, 135.5], w: 2 },
    { name: '近畿', sub: '三重', box: [33.7, 136.0, 35.2, 136.5], w: 2 },
    { name: '近畿', sub: '和歌山', box: [33.4, 135.0, 34.3, 136.0], w: 2 },
    { name: '近畿', sub: '滋賀', box: [35.1, 135.9, 35.6, 136.45], w: 1 },
    { name: '近畿', sub: '淡路島', box: [34.2, 134.75, 34.65, 135.05], w: 1 },
    // 中国
    { name: '中国', sub: '岡山・広島', box: [34.1, 132.0, 34.65, 134.3], w: 4 },
    { name: '中国', sub: '中国山地', box: [34.65, 132.0, 35.0, 134.3], w: 2 },
    { name: '中国', sub: '山陰', box: [35.0, 131.8, 35.6, 134.3], w: 2 },
    { name: '中国', sub: '山口', box: [33.9, 130.9, 34.6, 132.0], w: 2 },
    { name: '中国', sub: '隠岐', box: [36.0, 133.0, 36.35, 133.4], w: 1 },
    // 四国
    { name: '四国', sub: '香川・徳島', box: [33.8, 133.3, 34.4, 134.8], w: 3 },
    { name: '四国', sub: '愛媛', box: [33.3, 132.3, 34.1, 133.3], w: 3 },
    { name: '四国', sub: '高知東部', box: [33.2, 133.3, 33.8, 134.3], w: 1 },
    { name: '四国', sub: '高知西部', box: [32.7, 132.5, 33.3, 133.3], w: 1 },
    // 九州
    { name: '九州', sub: '福岡', box: [33.3, 130.3, 34.0, 131.2], w: 4 },
    { name: '九州', sub: '佐賀・長崎', box: [32.6, 129.6, 33.6, 130.3], w: 2 },
    { name: '九州', sub: '熊本', box: [32.2, 130.3, 33.2, 131.2], w: 2 },
    { name: '九州', sub: '大分・宮崎', box: [31.4, 131.2, 33.6, 131.9], w: 3 },
    { name: '九州', sub: '鹿児島', box: [31.0, 130.1, 32.0, 131.2], w: 2 },
    { name: '九州', sub: '天草', box: [32.1, 129.9, 32.6, 130.3], w: 1 },
    { name: '九州', sub: '対馬', box: [34.1, 129.15, 34.7, 129.5], w: 1 },
    { name: '九州', sub: '壱岐', box: [33.7, 129.65, 33.85, 129.8], w: 1 },
    { name: '九州', sub: '五島', box: [32.55, 128.6, 33.1, 129.2], w: 1 },
    { name: '九州', sub: '種子島', box: [30.35, 130.85, 30.85, 131.1], w: 1 },
    // 沖縄
    { name: '沖縄', sub: '沖縄本島', box: [26.05, 127.6, 26.9, 128.35], w: 3 },
    { name: '沖縄', sub: '宮古', box: [24.7, 125.2, 24.95, 125.5], w: 1 },
    { name: '沖縄', sub: '八重山', box: [24.2, 123.7, 24.6, 124.35], w: 1 },
];

// 都会っぽい地点用の中心座標 (ここからランダムに少しずらす)
// --only / --except で地方を絞り込む
const REGIONS = ALL_REGIONS.filter(r => (!ONLY || ONLY.includes(r.name)) && !EXCEPT.includes(r.name));
if (!REGIONS.length) { console.log('地方の指定が正しくありません:', ALL_REGIONS.map(r => r.name).join(',')); process.exit(1); }
const inRegions = ([lat, lng]) => REGIONS.some(({ box: [s, w, n, e] }) => lat >= s && lat <= n && lng >= w && lng <= e);

const ALL_CITIES = [
    [43.062, 141.354], [38.268, 140.870], [35.690, 139.700], [35.659, 139.701], [35.466, 139.622],
    [35.861, 139.646], [35.607, 140.106], [35.170, 136.882], [34.976, 138.383], [36.561, 136.656],
    [37.916, 139.036], [36.651, 138.181], [35.011, 135.768], [34.702, 135.496], [34.690, 135.196],
    [34.685, 135.805], [34.396, 132.459], [34.662, 133.935], [35.468, 133.049], [34.340, 134.043],
    [33.839, 132.765], [33.559, 133.531], [33.590, 130.401], [32.790, 129.873], [32.803, 130.708],
    [31.596, 130.557], [33.239, 131.609], [26.212, 127.681], [40.822, 140.747], [39.702, 141.154],
];
// 選んだ地方の中にある都市だけ使う
const CITIES = ALL_CITIES.filter(inRegions);

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

// 次に試す座標を作る (3割は都市の近く、7割は地方のどこか)
function nextPoint() {
    if (CITIES.length && Math.random() < 0.3) {
        const c = CITIES[Math.floor(Math.random() * CITIES.length)];
        return [c[0] + rand(-0.03, 0.03), c[1] + rand(-0.03, 0.03)];
    }
    const [s, w, n, e] = pickRegion().box;
    return [rand(s, n), rand(w, e)];
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

    // 最初に WebGL が使えるか確認して表示する (使えないと公式の地点が見つからない)
    const check = await context.newPage();
    const gl = await check.evaluate(() => !!document.createElement('canvas').getContext('webgl'));
    await check.close();
    console.log(`ブラウザ: ${browser.browserType().name()} ${browser.version()} / WebGL: ${gl ? 'OK' : 'NG'}`);

    // Ctrl+C で止めたら、ブラウザを閉じてきれいに終わる (集めた分は保存済み)
    process.on('SIGINT', async () => {
        stopping = true;
        console.log(`\n停止しました。採用 ${found.length} 件は保存済み`);
        await browser.close().catch(() => {});
        process.exit(0);
    });

    // 同時に TABS 本ずつ調べる
    const worker = async () => {
        while (found.length < TARGET) {
            const [lat, lng] = nextPoint();
            stats.tried++;
            const r = await probe(context, lat, lng);
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
            // 近すぎる地点 (2km以内) は似た景色になるので除外
            if (found.some(f => distKm([f.lat, f.lng], [r.lat, r.lng]) < 2)) { stats.near++; continue; }
            if (found.length >= TARGET) break;
            seen.add(r.id);
            found.push(r);
            stats.ok++;
            save(found);
            if (stats.ok % 10 === 0) console.log(`採用 ${found.length}/${TARGET} (試行 ${stats.tried})`);
            // Googleに負荷をかけすぎないよう少し待つ
            await new Promise(r => setTimeout(r, 1000 + Math.random() * 1000));
        }
    };
    await Promise.all(Array.from({ length: TABS }, worker));
    // 最後にもう一度保存 (途中の保存に失敗していた分も書く)
    save(found);
    await browser.close();
    console.log('結果', JSON.stringify({ ...stats, total: found.length }));
}

main();
