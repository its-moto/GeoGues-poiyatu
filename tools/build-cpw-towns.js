// 世界CPWの収集で使う「町の一覧」を作るスクリプト
// 使い方: node tools/build-cpw-towns.js <cities5000.txt のパス>
// 元データ: GeoNames の cities5000 (人口5000人以上の町、CC BY 4.0) https://download.geonames.org/export/dump/
// 範囲の四角 (cpw-regions.js) ごとに、その中にある町の座標だけを tools/cpw-towns.json に書き出す
const fs = require('fs');
const path = require('path');
const regions = require('./cpw-regions.js');

// 公式ストリートビューがある国の国コードだけ使う
// (四角にはみ出して入っている、ストリートビューのない国の町を除くため)
const OK = new Set(`GB IE FR ES PT BE NL LU DE CH AT LI IT SM MT MC AD DK NO SE FI IS FO EE LV LT PL CZ SK HU RO BG UA BY
SI HR BA RS ME AL MK GR CY TR GE AM RU JP KR TW HK MO MN KZ KG IN LK BD BT PK TH KH LA VN MY SG BN ID TL PH
IL PS JO LB AE QA OM ZA LS SZ BW NA MG RE KE UG RW TZ SN GM GH NG ML TN EG US CA GL BM MX GT CR PA DO PR CW
BR AR CL UY PY BO PE EC CO AU NZ GU`.split(/\s+/));

const towns = {};
regions.forEach(r => towns[r.sub] = []);
let total = 0;
// 1行に1つの町 (タブ区切り)。5列目が緯度、6列目が経度、9列目が国コード
for (const line of fs.readFileSync(process.argv[2], 'utf8').split('\n')) {
    const c = line.split('\t');
    if (c.length < 9 || !OK.has(c[8])) continue;
    const lat = Number(c[4]), lng = Number(c[5]);
    // 最初に見つかった四角にだけ入れる (四角が重なっていても二重に数えない)
    const r = regions.find(({ box: [s, w, n, e] }) => lat >= s && lat <= n && lng >= w && lng <= e);
    if (!r) continue;
    // 小数3桁 (約100m) で十分なので短くして保存する
    towns[r.sub].push([Math.round(lat * 1000) / 1000, Math.round(lng * 1000) / 1000]);
    total++;
}
fs.writeFileSync(path.join(__dirname, 'cpw-towns.json'), JSON.stringify(towns));
// 町が1つもない四角の数も出す (その四角はランダムな点だけで探す)
const empty = Object.values(towns).filter(t => !t.length).length;
console.log(`町 ${total} 件 / 四角 ${regions.length} 個 (町なし ${empty} 個)`);
