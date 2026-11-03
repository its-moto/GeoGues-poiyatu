// ボタンの幅をmap-containerに合わせる関数
function updateGuessButtonWidth() {
    const mapContainer = document.getElementById('map-container');
    const guessButton = document.querySelector('.guess-button');

    // map-containerの幅を取得してボタンに適用
    guessButton.style.width = `${mapContainer.offsetWidth}px`;
}

// 初期設定
updateGuessButtonWidth();

// 定期的にボタンの幅を更新する関数
function updateButtonWidthContinuously() {
    updateGuessButtonWidth();
    requestAnimationFrame(updateButtonWidthContinuously); // 次のアニメーションフレームで再呼び出し
}

// 更新を開始
requestAnimationFrame(updateButtonWidthContinuously);

//================================================スマホ用: 地図をタップで大きく================================================
// パソコンはマウスを乗せる(hover)と地図が大きくなるけど、スマホにはhoverがない
// なので、スマホでは「小さい地図をタップ → 大きくなる」「✕ → 小さく戻る」にする
// (game.html と party.html の両方で使ってる)

const isTouchDevice = window.matchMedia('(hover: none)').matches; // マウスがない端末ならtrue
const miniMap = document.getElementById('map-container');

// 地図を大きくする
function openMiniMap() {
    miniMap.classList.add('open');
    refreshMapSize();
}

// 地図を小さく戻す (新しいラウンドが始まったときにも呼ばれる)
function closeMiniMap() {
    miniMap.classList.remove('open');
    refreshMapSize();
}

// 地図の大きさが変わったら、Leafletにタイルを描き直してもらう
// (Leafletは画面のresizeイベントで大きさを測り直してくれるので、それを起こす)
function refreshMapSize() {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 450); // 大きさのアニメーション(0.4秒)が終わってから
}

if (isTouchDevice) {
    // CSSで「スマホのときだけ」の見た目にするための目印
    document.body.classList.add('touch');

    // 大きくしたときの右上の ✕ ボタン
    const closeButton = document.createElement('button');
    closeButton.id = 'mapCloseButton';
    closeButton.textContent = '✕';
    closeButton.addEventListener('click', event => {
        event.stopPropagation(); // ✕を押したときに地図にピンが置かれないように
        closeMiniMap();
    });
    miniMap.appendChild(closeButton);

    // 小さいときのタップは「大きくするだけ」(ピンは置かない)
    // true = 地図(Leaflet)より先にこっちでタップを受け取る
    miniMap.addEventListener('click', event => {
        if (!miniMap.classList.contains('open')) {
            event.stopPropagation(); // Leafletまで届かないようにする → ピンが置かれない
            openMiniMap();
        }
    }, true);
}
