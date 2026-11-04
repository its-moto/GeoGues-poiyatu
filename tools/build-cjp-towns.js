// 日本 (Claudeセレクト) の収集で使う「町の一覧」を作るスクリプト
// 使い方: node tools/build-cjp-towns.js <cities1000.txt のパス> (cities5000.txt でも動く)
// 元データ: GeoNames の cities1000 (人口1000人以上の町や村、CC BY 4.0)。村も入るので田舎の当たりが増える https://download.geonames.org/export/dump/
// 範囲の四角 (cjp-regions.js) ごとに、その中にある日本の町の座標だけを tools/cjp-towns.json に書き出す
const fs = require('fs');
const path = require('path');
const regions = require('./cjp-regions.js');

const towns = {};
regions.forEach(r => towns[r.sub] = []);
let total = 0;
// 1行に1つの町 (タブ区切り)。5列目が緯度、6列目が経度、9列目が国コード
for (const line of fs.readFileSync(process.argv[2], 'utf8').split('\n')) {
    const c = line.split('\t');
    // 日本 (JP) の町だけ使う (対馬の四角などに入る韓国の町を除くため)
    if (c.length < 9 || c[8] !== 'JP') continue;
    const lat = Number(c[4]), lng = Number(c[5]);
    // 最初に見つかった四角にだけ入れる (四角が重なっていても二重に数えない)
    const r = regions.find(({ box: [s, w, n, e] }) => lat >= s && lat <= n && lng >= w && lng <= e);
    if (!r) continue;
    // 小数3桁 (約100m) で十分なので短くして保存する
    towns[r.sub].push([Math.round(lat * 1000) / 1000, Math.round(lng * 1000) / 1000]);
    total++;
}
fs.writeFileSync(path.join(__dirname, 'cjp-towns.json'), JSON.stringify(towns));
// 町が1つもない四角 (小さい島など) はランダムな点だけで探す
const empty = regions.filter(r => !towns[r.sub].length).map(r => r.sub);
console.log(`町 ${total} 件 / 四角 ${regions.length} 個 (町なし ${empty.length} 個)`);
