// 効果音 (シングルと対戦で共通)
const SE_PATH = '../SE/';
const SE_VOLUME = 0.7;
const LAND_SOUNDS = ['Place Guess Land', 'Place Guess Land 2', 'Place Guess Land 3', 'Place Guess Land 4', 'Place Guess Land 5', 'Place Guess Land 6'];

// 鳴らしたAudioを返すので、長い音は stopSE() で止められる
function playSE(name) {
    const audio = new Audio(SE_PATH + name + '.mp3');
    audio.volume = SE_VOLUME;
    audio.play().catch(() => {});
    return audio;
}

function stopSE(audio) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

// ピンを置いたときの音: 地図タイルのその場所の色を見て、水の上なら水の音、陸なら1~6のどれか
function playPinSound(latlng, zoom) {
    isWater(latlng, zoom)
        .catch(() => false)
        .then(water => {
            if (water) {
                playSE('Place Guess Water');
            } else {
                playSE(LAND_SOUNDS[Math.floor(Math.random() * LAND_SOUNDS.length)]);
            }
        });
}

function isWater(latlng, zoom) {
    const z = Math.max(0, Math.min(20, Math.round(zoom)));
    const n = Math.pow(2, z);
    const lng = ((latlng.lng + 180) % 360 + 360) % 360 - 180;
    const x = (lng + 180) / 360 * n;
    const latRad = latlng.lat * Math.PI / 180;
    const y = (1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n;

    const tile = new Image();
    tile.crossOrigin = 'anonymous'; // 色を読むのに必要 (Googleのタイルは読ませてくれる)
    tile.src = `https://mt1.google.com/vt/lyrs=r&x=${Math.floor(x)}&y=${Math.floor(y)}&z=${z}`;
    return tile.decode().then(() => {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 256;
        const context = canvas.getContext('2d');
        context.drawImage(tile, 0, 0);
        const [r, g, b] = context.getImageData(Math.floor((x % 1) * 256), Math.floor((y % 1) * 256), 1, 1).data;
        // 海や湖は青がいちばん強い水色 (ズームで濃さが変わる: 90,207,228 ~ 144,218,238)
        // 陸は緑のほうが強い (166,230,204) か、ベージュ・グレー
        return b > g && b > r + 40;
    });
}
