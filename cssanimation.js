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