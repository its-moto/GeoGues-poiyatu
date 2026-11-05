// 都道府県・地方マップの設定 (Resource/src/cjpareas.js) を作るスクリプト
// CJPlinks.js の pref / region を見て、エリアごとの地図の位置と mapSize を計算する
//
// 使い方: node tools/build-cjp-areas.js
//
// 対戦では参加者が地点データを読まないので、ゲーム中に計算せず、ここで先に計算して保存しておく

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const OUTPUT = path.join(ROOT, 'Resource/src/cjpareas.js');

// 地点データを読む (var streetViews = [...] なのでそのまま実行する)
const context = {};
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'Resource/maplink/CJPlinks.js'), 'utf8'), context);
const locations = context.streetViews.map(location => ({
    pref: location.pref,
    region: location.region,
    // パノラマIDの中の "1d" に当たらないように "!1d" で探す
    lat: parseFloat(location.embedUrl.match(/!1d(-?[\d.]+)/)[1]),
    lng: parseFloat(location.embedUrl.match(/!2d(-?[\d.]+)/)[1])
}));

// 地方と、その中の都道府県 (北から順番)
// 北海道と沖縄は地方=都道府県なので、都道府県のマップだけ作る
const REGIONS = [
    ['北海道', ['北海道']],
    ['東北', ['青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県']],
    ['関東', ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県']],
    ['中部', ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県']],
    ['近畿', ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県']],
    ['中国', ['鳥取県', '島根県', '岡山県', '広島県', '山口県']],
    ['四国', ['徳島県', '香川県', '愛媛県', '高知県']],
    ['九州', ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県']],
    ['沖縄', ['沖縄県']]
];

//================================================範囲の計算================================================
// 並べたときの p (0〜1) の位置の値
function percentile(values, p) {
    const sorted = values.slice().sort((a, b) => a - b);
    return sorted[Math.round((sorted.length - 1) * p)];
}

// 遠くの離島に引っぱられないように、上下5%ずつを除いた範囲を「だいたいの広さ」にする
function getBox(list) {
    return {
        south: percentile(list.map(l => l.lat), 0.05),
        north: percentile(list.map(l => l.lat), 0.95),
        west: percentile(list.map(l => l.lng), 0.05),
        east: percentile(list.map(l => l.lng), 0.95)
    };
}

// 範囲の対角線の長さ (km)
function diagonalKm(box) {
    const height = (box.north - box.south) * 111;
    const middleLat = (box.north + box.south) / 2;
    const width = (box.east - box.west) * 111 * Math.cos(middleLat * Math.PI / 180);
    return Math.hypot(height, width);
}

// 緯度をメルカトル図法の縦の位置に変える (北に行くほど引き伸ばされる)
function mercatorY(lat) {
    return Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360)) * 180 / Math.PI;
}

// 範囲が size px の四角に入るズーム (Leafletのタイルは256px)
function fitZoom(box, size) {
    const width = Math.max(box.east - box.west, 0.05);
    const height = Math.max(mercatorY(box.north) - mercatorY(box.south), 0.05);
    const zoom = Math.floor(Math.log2(size / 256 * 360 / Math.max(width, height)));
    return Math.max(4, Math.min(12, zoom));
}

// 今の日本マップ (mapSize 7) と同じ厳しさになるように、広さに反比例させる
// 例: 広さが日本全体の1/10のエリアなら mapSize は10倍の70
const JAPAN_MAP_SIZE = 7;
const japanDiagonal = diagonalKm(getBox(locations));

function makeArea(key, value, group, list) {
    const box = getBox(list);
    const center = [(box.south + box.north) / 2, (box.west + box.east) / 2].map(n => Math.round(n * 100) / 100);
    return {
        id: 'cjp-' + value,
        name: value + (key === 'region' ? '地方' : '') + ' (Claudeセレクト)',
        group: group,
        filter: { key: key, value: value },
        view: [center, fitZoom(box, 300)],       // プレイ中の小さい地図
        resultView: [center, fitZoom(box, 700)], // 結果の大きい地図
        mapSize: Math.round(JAPAN_MAP_SIZE * japanDiagonal / diagonalKm(box))
    };
}

//================================================書き出し================================================
const areas = [];
REGIONS.forEach(([region, prefs]) => {
    if (prefs.length > 1) {
        areas.push(makeArea('region', region, '地方', locations.filter(l => l.region === region)));
    }
    prefs.forEach(pref => {
        const list = locations.filter(l => l.pref === pref);
        if (list.length === 0) throw new Error('地点がない: ' + pref);
        areas.push(makeArea('pref', pref, region, list));
    });
});

const body = areas.map(area => '    ' + JSON.stringify(area)).join(',\n');
fs.writeFileSync(OUTPUT, `// 都道府県・地方マップの設定 (tools/build-cjp-areas.js が作るファイルなので、手で書き換えない)
// group: 選ぶ画面でのまとまり, filter: CJPlinks.js のどの地点を使うか
const CJP_AREAS = [
${body}
];

// maps.js のマップ一覧に足す
CJP_AREAS.forEach(area => {
    MAPS[area.id] = Object.assign({ file: 'CJPlinks.js' }, area);
});
`);

console.log('japan diagonal', Math.round(japanDiagonal), 'km');
areas.forEach(area => console.log(area.id, 'mapSize', area.mapSize, 'zoom', area.view[1], area.resultView[1]));
