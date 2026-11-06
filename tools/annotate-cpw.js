// 世界CPWの各地点に 国・州や県・地域・町までの距離 のデータを付けるスクリプト
// 使い方: node tools/annotate-cpw.js <国境データのフォルダ> <cities1000.txt のパス>
// 順番: collect-cpw.js → annotate-cpw.js → build-cpw.js (build が tools/cpw-admin.json を読んで CPWlinks.js に書く)
// 結果は tools/cpw-admin.json に { パノラマID: データ } の形で残す。2回目からは新しい地点だけ計算する
//
// 元データ (どちらも手元で計算するので、地点の座標を外のサービスへ送らない)
//   Natural Earth 10m の ne_10m_admin_0_countries.geojson と ne_10m_admin_1_states_provinces.geojson (パブリックドメイン)
//     https://github.com/nvkelso/natural-earth-vector/tree/v5.1.2/geojson
//   GeoNames の cities1000 (CC BY 4.0) https://download.geonames.org/export/dump/
//
// 付ける項目:
//   country: 国の名前 (日本語) / code: 国コード (ISO 2文字) / state: 州や県の名前 / region: 地域 (cpw-regions.js の8地域)
//   townKm: 一番近い町 (人口1000人以上) までの距離 / cityKm: 一番近い都市 (人口5万人以上) までの距離
// 国境は Natural Earth の線に従う (領有でもめている場所もこのデータの扱いのまま)
// 画面には件数だけ出す (地名は出さない)
const fs = require('fs');
const path = require('path');

const [DIR, CITIES] = process.argv.slice(2);
if (!DIR || !CITIES) { console.log('使い方: node tools/annotate-cpw.js <国境データのフォルダ> <cities1000.txt のパス>'); process.exit(1); }
const FOUND = path.join(__dirname, 'cpw-found.json');
const OUT = path.join(__dirname, 'cpw-admin.json');

// GeoJSON の形を [[外周, 穴, ...], ...] にそろえて、絞り込み用の範囲 (bbox) も持たせる
function load(file) {
    return JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8')).features.map(f => {
        const g = f.geometry;
        const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
        let s = 90, w = 180, n = -90, e = -180;
        for (const p of polys) for (const [x, y] of p[0]) { s = Math.min(s, y); n = Math.max(n, y); w = Math.min(w, x); e = Math.max(e, x); }
        return { p: f.properties, polys, bbox: [s, w, n, e] };
    });
}
const COUNTRIES = load('ne_10m_admin_0_countries.geojson');
const STATES = load('ne_10m_admin_1_states_provinces.geojson');

// 点が輪の中にあるか (レイキャスティング法)
function inRing(lng, lat, ring) {
    let c = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i], [xj, yj] = ring[j];
        if ((yi > lat) !== (yj > lat) && lng < (xj - xi) * (lat - yi) / (yj - yi) + xi) c = !c;
    }
    return c;
}
// 外周の中にあって、穴の中にはない
const inPolys = (lng, lat, polys) => polys.some(p => inRing(lng, lat, p[0]) && !p.slice(1).some(h => inRing(lng, lat, h)));
const inBbox = ([s, w, n, e], lat, lng, m = 0) => lat >= s - m && lat <= n + m && lng >= w - m && lng <= e + m;
const hit = (list, lat, lng) => list.find(f => inBbox(f.bbox, lat, lng) && inPolys(lng, lat, f.polys));

// 2点間のおおよその距離 (km)
const km = (lat1, lng1, lat2, lng2) => Math.hypot((lat1 - lat2) * 111, (lng1 - lng2) * 111 * Math.cos(lat1 * Math.PI / 180));
// 海岸の点はデータの線から少しはみ出すことがあるので、一番近い境界の頂点を持つものを探す (m度の範囲まで)
function nearest(list, lat, lng, m = 1) {
    let best = null, bd = Infinity;
    for (const f of list) {
        if (!inBbox(f.bbox, lat, lng, m)) continue;
        for (const p of f.polys) for (const [x, y] of p[0]) {
            const d = km(lat, lng, y, x);
            if (d < bd) { bd = d; best = f; }
        }
    }
    return best && { f: best, d: bd };
}

// 町を1度ごとのマス目に入れて、近くのマスだけ調べる
const towns = new Map(), cities = new Map();
const put = (map, t) => { const k = `${Math.floor(t.lat)},${Math.floor(t.lng)}`; if (!map.has(k)) map.set(k, []); map.get(k).push(t); };
for (const line of fs.readFileSync(CITIES, 'utf8').split('\n')) {
    const c = line.split('\t');
    if (c.length < 15) continue;
    const t = { lat: Number(c[4]), lng: Number(c[5]), cc: c[8] };
    put(towns, t);
    if (Number(c[14]) >= 50000) put(cities, t);
}
// 一番近いものを、内側のマスから順に広げて探す (見つかったあと1周だけ余分に見る)
function nearestTown(map, lat, lng, maxRing = 40) {
    let best = null, bd = Infinity, stop = maxRing;
    for (let r = 0; r <= stop; r++) {
        for (let i = -r; i <= r; i++) for (let j = -r; j <= r; j++) {
            if (Math.max(Math.abs(i), Math.abs(j)) !== r) continue;
            for (const t of map.get(`${Math.floor(lat) + i},${Math.floor(lng) + j}`) || []) {
                const d = km(lat, lng, t.lat, t.lng);
                if (d < bd) { bd = d; best = t; }
            }
        }
        if (best && stop === maxRing) stop = r + 1;
    }
    return best && { t: best, d: bd };
}

const found = JSON.parse(fs.readFileSync(FOUND, 'utf8'));
const admin = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
const stat = { 国境内: 0, 海岸補正: 0, 不明: 0, 州補正: 0, 州なし: 0, 町と国が違う: 0 };

// 国と州を決める
const raw = found.filter(f => !admin[f.id]).map(f => {
    let c = hit(COUNTRIES, f.lat, f.lng);
    if (c) stat.国境内++;
    else {
        const n = nearest(COUNTRIES, f.lat, f.lng);
        if (n) { c = n.f; stat.海岸補正++; } else stat.不明++;
    }
    const code = c ? (c.p.ISO_A2_EH !== '-99' ? c.p.ISO_A2_EH : '') : '';
    // 州は国が同じものの中から選ぶ (島や海岸で隣の国の州にならないように)
    const sameCountry = STATES.filter(s => c && s.p.adm0_a3 === c.p.ADM0_A3);
    let s = hit(sameCountry, f.lat, f.lng);
    if (!s) {
        const n = nearest(sameCountry, f.lat, f.lng);
        if (n) { s = n.f; stat.州補正++; } else stat.州なし++;
    }
    const town = nearestTown(towns, f.lat, f.lng);
    const city = nearestTown(cities, f.lat, f.lng);
    // 答え合わせ: 一番近い町の国と違う数を数える (国境の近くでは違っても普通)
    if (town && code && town.t.cc !== code) stat.町と国が違う++;
    return {
        f, code,
        country: c ? c.p.NAME_JA : '',
        state: s ? (s.p.name_ja || s.p.name || s.p.name_en || '') : '',
        townKm: town ? Math.round(town.d * 10) / 10 : null,
        cityKm: city ? Math.round(city.d * 10) / 10 : null,
    };
});

// 国 → 地域: その国の地点で一番多い地域を使う (四角が隣の地域にはみ出していても、国の中では同じ地域になる)
const votes = {};
const vote = (country, name) => { (votes[country] = votes[country] || {})[name] = (votes[country][name] || 0) + 1; };
raw.forEach(r => vote(r.country, r.f.name));
found.forEach(f => admin[f.id] && vote(admin[f.id].country, f.name));
const regionOf = c => Object.entries(votes[c]).sort((a, b) => b[1] - a[1])[0][0];

for (const r of raw) {
    admin[r.f.id] = { country: r.country, code: r.code, state: r.state, region: regionOf(r.country), townKm: r.townKm, cityKm: r.cityKm };
}
fs.writeFileSync(OUT, JSON.stringify(admin));
console.log(`計算 ${raw.length} 件 / 合計 ${Object.keys(admin).length} 件`);
console.log(JSON.stringify(stat));
