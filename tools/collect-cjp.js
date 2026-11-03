// 日本 (Claudeセレクト) の地点を自動で集めるスクリプト
// 使い方: node tools/collect-cjp.js <集めたい件数> [同時タブ数]
// 結果は tools/cjp-found.json に少しずつ追記されるので、途中で止めても続きから再開できる
// 画面には件数だけ出す (地名は出さない)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const FOUND = path.join(__dirname, 'cjp-found.json');
const TARGET = Number(process.argv[2] || 10);
const TABS = Number(process.argv[3] || 3);

// 地方ごとの範囲 [南, 西, 北, 東] と、集める割合 (重み)
// 範囲は大きめの四角なので海も含むが、海なら地点が見つからず次へ進むだけ
const REGIONS = [
    { name: '北海道', box: [41.4, 139.9, 45.4, 145.5], w: 12 },
    { name: '東北', box: [37.0, 139.2, 41.5, 142.0], w: 13 },
    { name: '関東', box: [34.9, 138.5, 37.0, 140.8], w: 12 },
    { name: '中部', box: [34.6, 136.0, 38.5, 139.5], w: 15 },
    { name: '近畿', box: [33.4, 134.3, 35.8, 136.8], w: 11 },
    { name: '中国', box: [33.9, 130.9, 35.6, 134.4], w: 10 },
    { name: '四国', box: [32.7, 132.0, 34.4, 134.8], w: 8 },
    { name: '九州', box: [31.0, 129.6, 34.0, 132.0], w: 14 },
    { name: '沖縄', box: [24.0, 123.6, 26.9, 128.4], w: 5 },
];

// 都会っぽい地点用の中心座標 (ここからランダムに少しずらす)
const CITIES = [
    [43.062, 141.354], [38.268, 140.870], [35.690, 139.700], [35.659, 139.701], [35.466, 139.622],
    [35.861, 139.646], [35.607, 140.106], [35.170, 136.882], [34.976, 138.383], [36.561, 136.656],
    [37.916, 139.036], [36.651, 138.181], [35.011, 135.768], [34.702, 135.496], [34.690, 135.196],
    [34.685, 135.805], [34.396, 132.459], [34.662, 133.935], [35.468, 133.049], [34.340, 134.043],
    [33.839, 132.765], [33.559, 133.531], [33.590, 130.401], [32.790, 129.873], [32.803, 130.708],
    [31.596, 130.557], [33.239, 131.609], [26.212, 127.681], [40.822, 140.747], [39.702, 141.154],
];

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
    if (Math.random() < 0.3) {
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
        for (let i = 0; i < 24; i++) {
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

    // インストール済みの Edge を使う (ブラウザのダウンロード不要)
    // Edge がなければ Chrome を試す
    const browser = await chromium.launch({ channel: 'msedge', headless: true })
        .catch(() => chromium.launch({ channel: 'chrome', headless: true }));
    const context = await browser.newContext({ locale: 'ja-JP' });

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
            // 近すぎる地点 (3km以内) は似た景色になるので除外
            if (found.some(f => distKm([f.lat, f.lng], [r.lat, r.lng]) < 3)) { stats.near++; continue; }
            if (found.length >= TARGET) break;
            seen.add(r.id);
            found.push(r);
            stats.ok++;
            fs.writeFileSync(FOUND, JSON.stringify(found, null, 1));
            if (stats.ok % 10 === 0) console.log(`採用 ${found.length}/${TARGET} (試行 ${stats.tried})`);
            // Googleに負荷をかけすぎないよう少し待つ
            await new Promise(r => setTimeout(r, 1000 + Math.random() * 1000));
        }
    };
    await Promise.all(Array.from({ length: TABS }, worker));
    await browser.close();
    console.log('結果', JSON.stringify({ ...stats, total: found.length }));
}

main();
