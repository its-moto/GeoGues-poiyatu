// 効果音 (シングルと対戦で共通)
// game.html と party.html の両方で読み込んでる
// 音のファイルは Resource/SE/ に入ってる (ファイル名から .mp3 を取ったものを playSE に渡す)

const SE_PATH = '../SE/'; // maphtmls/ から見た SE フォルダの場所
// 効果音の音量 (0〜1)。対戦の⚙で変えられる (保存がなければ0.7)
function seVolume() {
    const saved = parseFloat(localStorage.getItem('seVolume'));
    return isNaN(saved) ? 0.7 : saved;
}

// 陸にピンを置いたときの音 (この中からランダム)
const LAND_SOUNDS = ['Place Guess Land', 'Place Guess Land 2', 'Place Guess Land 3', 'Place Guess Land 4', 'Place Guess Land 5', 'Place Guess Land 6'];

//================================================鳴らす・止める================================================
// 効果音を1回鳴らす
// 毎回新しいAudioを作るので、同じ音が重なってもちゃんと全部鳴る
// 鳴らしたAudioを返すので、長い音 (Timer Countdown とか) は stopSE() で途中で止められる
function playSE(name) {
    const audio = new Audio(SE_PATH + name + '.mp3');
    audio.volume = seVolume();
    audio.play().catch(() => {}); // 自動再生がブロックされても止まらないように無視
    return audio;
}

// playSE で鳴らした音を止める (null を渡しても大丈夫)
function stopSE(audio) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // 次に鳴らすとき最初からになるように
    }
}

//================================================ピンを置いたときの音================================================
// 地図タイルのその場所の色を見て、水の上なら水の音、陸なら1〜6のどれか
// latlng: ピンを置いた位置, zoom: 今の地図のズーム (見えてるタイルと同じ色を調べるため)
function playPinSound(latlng, zoom) {
    isWater(latlng, zoom)
        .catch(() => false) // タイルが読めなかったら陸ということにする
        .then(water => {
            if (water) {
                playSE('Place Guess Water');
            } else {
                playSE(LAND_SOUNDS[Math.floor(Math.random() * LAND_SOUNDS.length)]);
            }
        });
}

// その場所が水 (海・湖・池) かどうかを調べる
// 結果はすぐには出ないので Promise で返す (true なら水)
function isWater(latlng, zoom) {
    // ---- 1. 緯度経度から「どのタイルの、どのピクセルか」を計算する ----
    // Googleマップのタイルは、ズーム z のとき世界が 2^z × 2^z 枚の256px画像に分かれてる
    const z = Math.max(0, Math.min(20, Math.round(zoom))); // ズームは0〜20の整数に
    const n = Math.pow(2, z);                              // 横(縦)のタイルの枚数

    // 経度を -180〜180 にそろえる (地図を何周もスクロールすると 200 とかになるので)
    const lng = ((latlng.lng + 180) % 360 + 360) % 360 - 180;

    // 経度 → 横のタイル番号 (小数部分がタイルの中の位置)
    const x = (lng + 180) / 360 * n;

    // 緯度 → 縦のタイル番号 (メルカトル図法の式。北に行くほど引き伸ばされる)
    const latRad = latlng.lat * Math.PI / 180;
    const y = (1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n;

    // ---- 2. そのタイルの画像を読み込む ----
    const tile = new Image();
    tile.crossOrigin = 'anonymous'; // 色を読むのに必要 (Googleのタイルは読ませてくれる)
    tile.src = `https://mt1.google.com/vt/lyrs=r&x=${Math.floor(x)}&y=${Math.floor(y)}&z=${z}`;

    // ---- 3. 読み込めたらキャンバスに描いて、その1ピクセルの色を見る ----
    return tile.decode().then(() => {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 256; // タイル1枚と同じ大きさ
        const context = canvas.getContext('2d');
        context.drawImage(tile, 0, 0);

        // 小数部分 × 256 = タイルの中のピクセル位置
        const [r, g, b] = context.getImageData(Math.floor((x % 1) * 256), Math.floor((y % 1) * 256), 1, 1).data;

        // 海や湖は青がいちばん強い水色 (ズームで濃さが変わる: 90,207,228 ~ 144,218,238)
        // 陸は緑のほうが強い (166,230,204) か、ベージュ・グレー
        return b > g && b > r + 40;
    });
}
