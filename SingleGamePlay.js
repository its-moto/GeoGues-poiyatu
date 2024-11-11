let currentAnswerUrl; // 正解リンクを保持する変数
let currentStreetViewIndex;
let nowdisplay = 'play';
let Size;
let marker; // ピンを保持する変数
let rmarker; // ピンを保持する変数
let ranswermarker; // ピンを保持する変数
let rline;

var map = L.map('map').setView([0, 0], 1);
var rfmap = L.map('remap').setView([0, 0], 1);


showRandomStreetView();// ページの読み込み後に初期化

function showRandomStreetView() {
    closeResult();
    document.getElementById('distance-value').textContent = "0m";
    document.getElementById('point-value').textContent = 0;

    const randomIndex = Math.floor(Math.random() * streetViews.length);
    currentStreetViewIndex = randomIndex;
    if (marker) {
        map.removeLayer(marker);
    }
    document.getElementById('streetview').src = streetViews[randomIndex].embedUrl;
    currentAnswerUrl = streetViews[randomIndex].answerUrl; // 正解リンクを保存
    setMapStage();
}

function showAnswer() {
    if (typeof currentAnswerUrl !== 'undefined') {
        window.open(currentAnswerUrl, '_blank');
    }
}

function goBack() {
    window.location.href = 'index.html'; // ローカルファイルへのパス
}

//===========================================guessとかピンとか===========================================

function setMapStage() {
    let mapcontainer = document.getElementById('map-container').style;

    const currentFileName = window.location.pathname.split("/").pop();
    // ファイル名ごとにステージの設定を分ける
    
    if (currentFileName === "A%20Random%20picked%20World.html") {
        map.setView([0,0], 1);
        rfmap.setView([20,0], 2);
        mapSize =1;
    } else if (currentFileName === "Japan.html") {
        map.setView([37, 135], 4);
        rfmap.setView([38,138], 5);
        mapSize =4;
    } else if (currentFileName === "An%20Urban%20Japan.html") {
        map.setView([37, 135], 4);
        rfmap.setView([38,138], 5);
        mapSize = 4;
    } else if (currentFileName === "Madagascar.html") {
        map.setView([-22, 48.3], 5);
        rfmap.setView([-22, 48.3], 5);
        mapSize =5;
    } else {
        // デフォルトのビュー設定
        map.setView([0, 0], 2);
    }
}

// 初期化
//var map = L.map('map').setView([-18, 45], 5);

L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
	attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>",
    maxZoom: 20
}).addTo(map);
L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
	attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>",
    maxZoom: 20
}).addTo(rfmap);

// カスタムアイコンの作成
function createCustomIcon() {
    return L.icon({
        iconUrl: 'Resource/pin.png', // ここを実際の画像パスに変更
        iconSize: [20, 25], // 画像のサイズを設定
        iconAnchor: [10, 26], // ピンのアンカー位置を調整
        popupAnchor: [0, -20] // ポップアップの位置を調整
    });
}

// クリック時にピンを置く（既存のピンがある場合は置き換え）
map.on('click', function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    
    if (marker) {
        map.removeLayer(marker);
    }

    // 新しいピンを追加
    marker = L.marker([lat, lng], { icon: createCustomIcon() }).addTo(map);
    
    const soundEffect = document.getElementById("SoundEffect");
    soundEffect.src ="Resource/pick.mp3" 
    soundEffect.currentTime = 0; // 再生位置を先頭に戻す
    soundEffect.play(); // 効果音を再生
});

document.addEventListener("DOMContentLoaded", (event) => {
    alert(streetViews.length +" locations.")
});

document.addEventListener('DOMContentLoaded', function () {
    // スペースキーが押されたときのイベントリスナーを追加
    document.addEventListener('keydown', function (event) {
        // スペースキーのコードは32
        if (event.code === 'Space') {
            event.preventDefault(); // スペースキーのデフォルト動作を防止（スクロールなど）
            if (nowdisplay == 'play'){
                guess(); // guess関数を呼び出す
            }else{
                showRandomStreetView();
                nowdisplay = 'play';
            }
        }
    });
});

//距離からポイント計算するやつ
function pointCul(distance) {
    let points = Math.round(Math.pow(0.99933, (((distance/1000)*(mapSize)) - 12708)));
    return  Math.max(0, Math.min(5000,points));
}

function normalizeLongitude(lng) {
    // 経度を -180 から 180 の範囲に正規化
    return ((lng + 180) % 360 + 360) % 360 - 180;
}

// 距離を計算して表示する関数

function guess() {
    if (!marker) {
        return; // ピンが置かれていない場合は処理を中止
    }

    openResult();
    nowdisplay = 'result';

    const soundEffect = document.getElementById("SoundEffect");
    soundEffect.src = "Resource/ResultScore.mp3";
    soundEffect.currentTime = 0; // 再生位置を先頭に戻す
    soundEffect.play(); // 効果音を再生

    window.dispatchEvent(new Event('resize'));
    if (rmarker) {
        rfmap.removeLayer(rmarker);
        rfmap.removeLayer(ranswermarker);
        rfmap.removeLayer(rline);
    }

    const latLng1 = L.latLng((marker.getLatLng().lat), normalizeLongitude(marker.getLatLng().lng));
    const latLng2 = L.latLng(streetViews[currentStreetViewIndex].lat, (streetViews[currentStreetViewIndex].lng));

    // ピンの追加
    rmarker = L.marker([latLng1.lat, latLng1.lng], { icon: createCustomIcon() }).addTo(rfmap);    
    ranswermarker = L.marker([latLng2.lat, latLng2.lng]).addTo(rfmap); 
    rline = L.polyline([[latLng1.lat, latLng1.lng],[latLng2.lat, latLng2.lng]],{ "color": "black", "weight": 2, "opacity": 0.8,"dashArray":"5 8"}).addTo(rfmap);

    const distance = latLng1.distanceTo(latLng2);
    const finalpoint = pointCul(distance);

    // ピン2つの位置から中央位置とズームレベルを調整
    const bounds = L.latLngBounds([
        [latLng1.lat, latLng1.lng],
        [latLng2.lat, latLng2.lng]
    ]);

    // 遅延を加えてfitBoundsを実行
    setTimeout(() => {
        rfmap.fitBounds(bounds, { padding: [50, 50] });
    }, 100); // 遅延の時間は調整可能です

    // 表示する数値を決定
    let targetDistance;
    if (distance > 10000) {
        targetDistance = Math.round(distance / 1000) + "km";
    } else if (distance > 1000) {
        targetDistance = ((Math.round(distance / 100)) / 10) + "km";
    } else {
        targetDistance = Math.round(distance) + "m";
    }

    // 数値をアニメーションで変化させる
    animateValue('distance-value', targetDistance, 1000); // 1秒かけて変化
    animateValue('point-value', finalpoint.toString(), 1000); // finalpointを文字列に変換

    marker = undefined;
}


// 数値をアニメーションで変化させる関数
function animateValue(id, target, duration) {
    const element = document.getElementById(id);
    const end = parseFloat(target) || 0; // 目標値を数値として取得
    const startTime = performance.now();

    function update() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // 0から1の範囲に制限

        // 線形補間で値を計算
        const currentValue = 0 + (end - 0) * progress;

        // 値を表示
        if (target.endsWith("km")) {
            if (currentValue >= 0 && currentValue < 10) {
                element.textContent = currentValue.toFixed(1) + "km"; // 小数点以下1桁を表示
            } else {
                element.textContent = Math.round(currentValue) + "km"; // 整数表示
            }
        } else if (target.endsWith("m")) {
            element.textContent = Math.round(currentValue) + "m";
        } else {
            element.textContent = Math.round(currentValue); // finalpointが数値の場合
        }

        // アニメーションが終了していない場合は次のフレームをリクエスト
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    update(); // アニメーションを開始
}

//==============================
function openSetting() {
    document.getElementById("popup").style.display = "flex";
}
// ポップアップを閉じる関数
function closeSetting() {
    document.getElementById("popup").style.display = "none";
}

function openResult() {
    document.getElementById("resultPopup").style.display = "flex";
}
function closeResult() {
    document.getElementById("resultPopup").style.display = "none";
}