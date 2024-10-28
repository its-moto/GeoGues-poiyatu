
function showRandomStreetView() {
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

let currentAnswerUrl; // 正解リンクを保持する変数
let currentStreetViewIndex;
let mapSize;
let marker; // ピンを保持する変数

var map = L.map('map').setView([0, 0], 1);
showRandomStreetView();// ページの読み込み後に初期化

//===========================================guessとかピンとか===========================================

function setMapStage() {
    const currentFileName = window.location.pathname.split("/").pop();
    // ファイル名ごとにステージの設定を分ける
    
    if (currentFileName === "A%20Random%20picked%20World.html") {
        map.setView([-40,180], 1);
        mapSize =1;
    } else if (currentFileName === "Japan.html") {
        map.setView([33,139], 4);
        mapSize =4;
    } else if (currentFileName === "An%20Urban%20Japan.html") {
        map.setView([33, 139], 4);
        mapSize = 4;
    } else if (currentFileName === "Madagascar.html") {
        map.setView([-22, 48.3], 5);
        mapSize =5;
    } else {
        // デフォルトのビュー設定
        map.setView([0, 0], 2);
    }
}

// 初期化
//var map = L.map('map').setView([-18, 45], 5);

L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
	attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
}).addTo(map);

// カスタムアイコンの作成
function createCustomIcon() {
    return L.icon({
        iconUrl: 'Resource/pin.png', // ここを実際の画像パスに変更
        iconSize: [30, 38], // 画像のサイズを設定
        iconAnchor: [15, 40], // ピンのアンカー位置を調整
        popupAnchor: [0, -40] // ポップアップの位置を調整
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
            guess(); // guess関数を呼び出す
        }
    });
});

//距離からポイント計算するやつ
function pointCul(distance) {
    let points = Math.round(Math.pow(0.9993, (((distance/1000)*(mapSize)) - 12163.08)));
    return  Math.max(0, Math.min(5000,points));
}

// 距離を計算して表示する関数
function guess() {
    if (!marker) {
        return; // ピンが置かれていない場合は処理を中止
    }

    const latLng1 = L.latLng(marker.getLatLng().lat, marker.getLatLng().lng);
    const latLng2 = L.latLng(streetViews[currentStreetViewIndex].lat, streetViews[currentStreetViewIndex].lng); // 現在のストリートビューの位置を使用

    const distance = latLng1.distanceTo(latLng2);
    const finalpoint = pointCul(distance);
    if (distance > 10000) {
        document.getElementById('distance-value').textContent = Math.round(distance / 1000) +"km";
        document.getElementById('point-value').textContent = finalpoint;
    } else if(distance > 1000){
        document.getElementById('distance-value').textContent = ((Math.round(distance / 100)) / 10) + "km";
        document.getElementById('point-value').textContent = finalpoint;
    }
    else {
        document.getElementById('distance-value').textContent = Math.round(distance) + "m";
        document.getElementById('point-value').textContent = finalpoint;
    }
}