// CJPlinks.js の各地点に 都道府県・市町村・地方・離島かどうか のデータを付けるスクリプト
// 使い方: node tools/annotate-cjp.js
// 途中で止めたいときは --until=11:55 のように時刻を付ける (調べた分は保存され、次に実行すると続きから再開する)
// 付ける項目: pref (都道府県) / city (市町村) / ward (政令市の区、なければ空) / region (地方) / island (離島なら true)
// 座標 → 市区町村コードは国土地理院の逆ジオコーダー、コード → 名前は地理院地図の muni.js を使う
// 調べた結果は tools/cjp-admin.json に残すので、途中で止めても続きから再開でき、2回目からは新しい地点だけ調べる
// 地点を足したら build-cjp.js のあとにもう一度実行する (何回実行しても同じ結果になる)
// 画面には件数だけ出す (地名は出さない)
const fs = require('fs');
const path = require('path');

const LINKS = path.join(__dirname, '..', 'Resource/maplink/CJPlinks.js');
const CACHE = path.join(__dirname, 'cjp-admin.json');

// 都道府県 → 地方 (いわゆる8地方区分。ただし沖縄は九州と分けて、cjp-regions.js の地方名とそろえる)
const REGION_OF = {};
const REGIONS = {
    '北海道': '北海道',
    '東北': '青森県 岩手県 宮城県 秋田県 山形県 福島県',
    '関東': '茨城県 栃木県 群馬県 埼玉県 千葉県 東京都 神奈川県',
    '中部': '新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県',
    '近畿': '三重県 滋賀県 京都府 大阪府 兵庫県 奈良県 和歌山県',
    '中国': '鳥取県 島根県 岡山県 広島県 山口県',
    '四国': '徳島県 香川県 愛媛県 高知県',
    '九州': '福岡県 佐賀県 長崎県 熊本県 大分県 宮崎県 鹿児島県',
    '沖縄': '沖縄県',
};
for (const [r, list] of Object.entries(REGIONS)) list.split(' ').forEach(p => REGION_OF[p] = r);

// 離島の市町村 (全体、または中心部が島にあるところ)。同じ名前の町が別の県にあるときのために「県 市町村」で書く
// 瀬戸内の小さな島や、市の一部だけが島のところ (下の ISLAND_BOX で拾うものを除く) は入っていない
const ISLAND_CITIES = new Set(`北海道 奥尻町|北海道 利尻町|北海道 利尻富士町|北海道 礼文町
東京都 大島町|東京都 利島村|東京都 新島村|東京都 神津島村|東京都 三宅村|東京都 御蔵島村|東京都 八丈町|東京都 青ヶ島村|東京都 小笠原村
新潟県 佐渡市|新潟県 粟島浦村
兵庫県 洲本市|兵庫県 南あわじ市|兵庫県 淡路市
島根県 海士町|島根県 西ノ島町|島根県 知夫村|島根県 隠岐の島町
山口県 周防大島町
香川県 小豆島町|香川県 土庄町|香川県 直島町
愛媛県 上島町
長崎県 平戸市|長崎県 対馬市|長崎県 壱岐市|長崎県 五島市|長崎県 新上五島町|長崎県 小値賀町
熊本県 天草市|熊本県 上天草市|熊本県 苓北町
大分県 姫島村
鹿児島県 西之表市|鹿児島県 中種子町|鹿児島県 南種子町|鹿児島県 屋久島町|鹿児島県 三島村|鹿児島県 十島村
鹿児島県 奄美市|鹿児島県 大和村|鹿児島県 宇検村|鹿児島県 瀬戸内町|鹿児島県 龍郷町|鹿児島県 喜界町
鹿児島県 徳之島町|鹿児島県 天城町|鹿児島県 伊仙町|鹿児島県 和泊町|鹿児島県 知名町|鹿児島県 与論町
沖縄県 久米島町|沖縄県 渡嘉敷村|沖縄県 座間味村|沖縄県 粟国村|沖縄県 渡名喜村|沖縄県 伊江村|沖縄県 伊平屋村|沖縄県 伊是名村
沖縄県 南大東村|沖縄県 北大東村|沖縄県 宮古島市|沖縄県 多良間村|沖縄県 石垣市|沖縄県 竹富町|沖縄県 与那国町`.split(/[|\n]/));
// 市の一部だけが島で、海で分かれた四角で判定できるところ
const ISLAND_BOX = require('./cjp-regions.js').filter(r => r.tag === '離島' && /甑/.test(r.sub));
const inBox = (lat, lng) => ISLAND_BOX.some(({ box: [s, w, n, e] }) => lat >= s && lat <= n && lng >= w && lng <= e);

// 文字列を JS の文字列として書けるようにする
const q = s => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const sleep = ms => new Promise(r => setTimeout(r, ms));

// 止める時刻 (--until=11:55 のように指定)。途中で止めても、調べた分は保存されて次に続きから再開できる
let DEADLINE = Infinity;
const untilArg = process.argv.find(a => a.startsWith('--until='));
if (untilArg) {
    const [h, m] = untilArg.slice(8).split(':').map(Number);
    const d = new Date(); d.setHours(h, m, 0, 0);
    DEADLINE = d.getTime();
}

async function main() {
    // 市区町村コード → [都道府県, 市町村, 区] の表を作る
    // muni.js は実行せず、文字列として読むだけ (形: GSI.MUNI_ARRAY["1101"] = '1,県,1101,市 区';)
    const muniText = await (await fetch('https://maps.gsi.go.jp/js/muni.js')).text();
    const MUNI = {};
    for (const m of muniText.matchAll(/MUNI_ARRAY\["(\d+)"\]\s*=\s*'([^']*)'/g)) {
        const c = m[2].split(',');
        const parts = (c[3] || '').split(/[\s　]+/).filter(Boolean);
        // 「郡 町」は町を、「市 区」は市と区を使う
        const gun = parts.length > 1 && parts[0].endsWith('郡');
        MUNI[String(Number(m[1]))] = [c[1], gun ? parts[1] : parts[0] || '', !gun && parts[1] ? parts[1] : ''];
    }

    let src = fs.readFileSync(LINKS, 'utf8');
    // 1件ごとに embedUrl から パノラマID と座標を読む
    const spots = [...src.matchAll(/embedUrl:\s*'([^']*!1s([^!']+)!2m2!1d(-?[\d.]+)!2d(-?[\d.]+)[^']*)'/g)]
        .map(m => ({ id: m[2], lat: m[3], lng: m[4] }));
    const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
    const todo = spots.filter(s => !cache[s.id]);
    console.log(`地点 ${spots.length} 件 / これから調べる ${todo.length} 件`);

    // 国土地理院のサーバーに負荷をかけないよう、同時に3件までで、少し待ちながら調べる
    let done = 0, next = 0;
    const worker = async () => {
        while (next < todo.length && Date.now() < DEADLINE) {
            const s = todo[next++];
            try {
                const r = await fetch(`https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress?lat=${s.lat}&lon=${s.lng}`);
                const j = await r.json();
                // 海の上など、市区町村がない座標は results が空になる
                cache[s.id] = { muni: j.results ? j.results.muniCd : '' };
            } catch (e) {
                // 通信の失敗は記録しない (次に実行したときにやり直す)
            }
            if (++done % 100 === 0) {
                fs.writeFileSync(CACHE, JSON.stringify(cache));
                console.log(`調べた ${done}/${todo.length}`);
            }
            await sleep(200);
        }
    };
    await Promise.all([worker(), worker(), worker()]);
    fs.writeFileSync(CACHE, JSON.stringify(cache));
    // 時間切れで残っていたら、CJPlinks.js は書き換えずに終わる (次に実行すると続きから調べる)
    const left = spots.filter(s => !cache[s.id]).length;
    if (left) { console.log(`一時停止: 調べ終わり ${spots.length - left} 件 / 残り ${left} 件`); return; }

    // 1件ごとの answerUrl の次の行に、データの行を入れる (すでにあれば入れ替える)
    let filled = 0, blank = 0, islands = 0;
    src = src.replace(/(embedUrl:\s*'[^']*!1s([^!']+)!2m2!1d(-?[\d.]+)!2d(-?[\d.]+)[^']*'\s*,?\s*answerUrl:\s*'[^']*')(,?)(\r?\n)(\s*pref:[^\n]*\n)?/g,
        (all, head, id, lat, lng, comma, nl) => {
            const code = cache[id]?.muni;
            const info = code ? MUNI[String(Number(code))] : null;
            if (!info) { blank++; return `${head}${comma}${nl}`; }
            const [pref, city, ward] = info;
            const island = ISLAND_CITIES.has(`${pref} ${city}`) || inBox(Number(lat), Number(lng));
            filled++;
            if (island) islands++;
            return `${head},${nl}        pref: ${q(pref)}, city: ${q(city)}, ward: ${q(ward)}, region: ${q(REGION_OF[pref] || '')}, island: ${island}${nl}`;
        });
    fs.writeFileSync(LINKS, src);
    console.log(`付けた ${filled} 件 / 付けられなかった ${blank} 件 / 離島 ${islands} 件`);
}

main();
