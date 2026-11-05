// デイリーチャレンジ (game.html?daily=1)
// サーバーなしでも、日付から同じ計算をすれば全員に同じ地点が出る
// game.html と singleplayer.html の両方で読み込んでる

const DAILY_MAP = 'claudeworld'; // maps.jsのキー (CPW)
const DAILY_ROUNDS = 5;          // ラウンド数
const DAILY_TIME = 120;          // 1ラウンドの秒数
const DAILY_POOL = 3000;         // CPWの最初の3000件から選ぶ
// ↑ CPWlinks.js のうしろに地点を足しても、過去やその日の問題が変わらないように固定してる

//================================================今日の日付================================================
// 日本時間の日付を '2026-11-05' の形で返す (どの国にいても日本時間の0時で切り替わる)
function dailyToday() {
    // 9時間進めてからUTCとして読むと、日本時間の日付になる
    return new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

//================================================日付から地点を決める================================================
// 文字列から乱数の元(シード)になる数字を作る
function dailySeed(text) {
    let hash = 2166136261; // FNV-1a というハッシュの計算
    for (let i = 0; i < text.length; i++) {
        hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
    }
    return hash >>> 0;
}

// シードが同じなら同じ順番で 0〜1 の数字を出す乱数 (mulberry32)
function dailyRandom(seed) {
    return function () {
        seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// その日に出る地点の番号を DAILY_ROUNDS 個、かぶらないように選ぶ
function dailyIndexes(date, locationCount) {
    const random = dailyRandom(dailySeed(date));
    const pool = Math.min(DAILY_POOL, locationCount);
    const indexes = [];
    while (indexes.length < DAILY_ROUNDS) {
        const index = Math.floor(random() * pool);
        if (!indexes.includes(index)) indexes.push(index);
    }
    return indexes;
}

//================================================結果の保存================================================
// 'daily-2026-11-05' に各ラウンドの結果の配列を保存する
// 1ラウンドごとに保存するので、途中で読み込み直しても続きからになる
function dailyLoad(date) {
    try {
        return JSON.parse(localStorage.getItem('daily-' + date)) || [];
    } catch (e) {
        return [];
    }
}

function dailySave(date, roundResults) {
    localStorage.setItem('daily-' + date, JSON.stringify(roundResults));
}

// 合計ポイント
function dailyTotal(roundResults) {
    return roundResults.reduce((sum, r) => sum + r.point, 0);
}

//================================================友達に送る文章================================================
// ポイントを四角の色に (ネタバレにならないように場所は書かない)
function dailySquare(point) {
    if (point >= 4000) return '🟩';
    if (point >= 2000) return '🟨';
    if (point > 0) return '🟧';
    return '⬛';
}

function dailyShareText(date, roundResults) {
    const lines = [
        'GeoPpoi デイリー ' + date,
        dailyTotal(roundResults) + ' / ' + (DAILY_ROUNDS * 5000) + ' pt',
        roundResults.map(r => dailySquare(r.point)).join('')
    ];
    // サイトで開いてるときはURLもつける (ローカルファイルのときはつけない)
    if (location.protocol.startsWith('http')) {
        lines.push(location.origin + location.pathname + '?daily=1');
    }
    return lines.join('\n');
}
