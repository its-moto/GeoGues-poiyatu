// 世界CPWの四角 (cpw-regions.js) を小さなマス目に分けて、ストリートビューの「青いところ」の多さで重みをつけるスクリプト
// 使い方: node tools/cpw-coverage.js [ズーム=6] [マスの大きさ(度)=0.5] [count]
//   count を付けると、必要なタイルの枚数を数えるだけで終わる
// Googleマップでペグマンを持ったときに出る青いカバレッジのタイル画像を読み込んで、
// マスごとに「青いピクセルの割合」を数える。青がほとんどないマス (海・砂漠・山奥など) は捨てる
// 結果は tools/cpw-cells.json に { 四角のsub: [[南, 西, マスの大きさ, 青の割合], ...] } の形で書き出す
// (収集スクリプトはランダムな点をこのマスの中にだけ落とすので、外れが減る)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const regions = require('./cpw-regions.js');

const Z = Number(process.argv[2] || 6);
const CELL = Number(process.argv[3] || 0.5);
const COUNT_ONLY = process.argv.includes('count');
// 青の割合がこれより小さいマスは捨てる
const MIN_FRAC = 0.03;

// 緯度経度 → ズームZの世界ピクセル座標 (Webメルカトル)
const N = 256 * 2 ** Z;
const px = lng => (lng + 180) / 360 * N;
const py = lat => { const r = lat * Math.PI / 180; return (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * N; };

// 全部の四角にかかるタイル番号を集める (重複なし)
const tiles = new Set();
for (const { box: [s, w, n, e] } of regions) {
    for (let x = Math.floor(px(w) / 256); x <= Math.floor(px(e) / 256); x++)
        for (let y = Math.floor(py(n) / 256); y <= Math.floor(py(s) / 256); y++) tiles.add(`${x},${y}`);
}
console.log(`ズーム ${Z} / タイル ${tiles.size} 枚 / マス ${CELL}度`);
if (COUNT_ONLY) process.exit(0);

// 四角ごとにマスを作る。マスの範囲をピクセル座標でも持っておく
const cells = [];
for (const r of regions) {
    const [s, w, n, e] = r.box;
    for (let la = s; la < n - 1e-9; la += CELL)
        for (let lo = w; lo < e - 1e-9; lo += CELL) {
            const la2 = Math.min(la + CELL, n), lo2 = Math.min(lo + CELL, e);
            cells.push({ sub: r.sub, s: +la.toFixed(3), w: +lo.toFixed(3), size: CELL, rect: [px(lo), py(la2), px(lo2), py(la)] });
        }
}

(async () => {
    const browser = await chromium.launch({ channel: 'msedge' });
    const page = await browser.newPage();
    // ブラウザの中でタイルを読み込んで、青いピクセルを数える (タイルは CORS OK なので canvas で読める)
    const { fracs, failed } = await page.evaluate(async ({ tiles, cells, Z }) => {
        const mask = {};
        const cv = document.createElement('canvas'); cv.width = cv.height = 256;
        const ctx = cv.getContext('2d', { willReadFrequently: true });
        // 読めなかったタイルの数 (3回までやり直す)
        let failed = 0;
        const load = (key, tryNo = 1) => new Promise(res => {
            const [x, y] = key.split(',');
            const img = new Image(); img.crossOrigin = 'anonymous';
            img.onload = () => {
                ctx.clearRect(0, 0, 256, 256); ctx.drawImage(img, 0, 0);
                const d = ctx.getImageData(0, 0, 256, 256).data;
                // 青っぽくて透明じゃないピクセルを 1 にする
                const m = new Uint8Array(65536);
                for (let i = 0; i < 65536; i++) m[i] = d[i * 4 + 3] > 60 && d[i * 4 + 2] > d[i * 4] + 40 ? 1 : 0;
                mask[key] = m; res();
            };
            // 読めなかったら少し待ってやり直す。3回ダメなら「青なし」扱い
            img.onerror = () => tryNo < 3 ? setTimeout(() => load(key, tryNo + 1).then(res), 1000 * tryNo) : (failed++, res());
            img.src = `https://mts1.googleapis.com/vt?hl=en-US&lyrs=svv|cb_client:apiv3&style=40,18&x=${x}&y=${y}&z=${Z}`;
        });
        // 同時に8枚ずつ読み込む (一度にたくさん頼みすぎない)
        const list = [...tiles];
        for (let i = 0; i < list.length; i += 8) await Promise.all(list.slice(i, i + 8).map(load));
        // ワールドピクセル (X, Y) が青かどうか
        const blue = (X, Y) => { const m = mask[`${X >> 8},${Y >> 8}`]; return m ? m[(Y & 255) * 256 + (X & 255)] : 0; };
        // マスの中を2ピクセルおきに調べて青の割合を出す
        const fracs = cells.map(({ rect: [x0, y0, x1, y1] }) => {
            let b = 0, t = 0;
            for (let Y = Math.floor(y0); Y < y1; Y += 2) for (let X = Math.floor(x0); X < x1; X += 2) { b += blue(X, Y); t++; }
            return t ? b / t : 0;
        });
        return { fracs, failed };
    }, { tiles: [...tiles], cells, Z });
    await browser.close();
    console.log(`読めなかったタイル ${failed} 枚`);

    // 青が少ないマスを捨てて、四角ごとにまとめる
    const out = {};
    regions.forEach(r => out[r.sub] = []);
    let kept = 0;
    cells.forEach((c, i) => {
        if (fracs[i] < MIN_FRAC) return;
        out[c.sub].push([c.s, c.w, c.size, +fracs[i].toFixed(2)]);
        kept++;
    });
    fs.writeFileSync(path.join(__dirname, 'cpw-cells.json'), JSON.stringify(out));
    const empty = regions.filter(r => !out[r.sub].length).length;
    console.log(`マス ${cells.length} 個のうち ${kept} 個を残した (${Math.round(kept / cells.length * 100)}%) / 青なしの四角 ${empty} 個`);
})();
