function showRandomStreetView() {
    const randomIndex = Math.floor(Math.random() * streetViews.length);
    currentStreetViewIndex = randomIndex;
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

var map = L.map('map').setView([0, 0], 1);
showRandomStreetView();// ページの読み込み後に初期化

//===========================================guessとかピンとか===========================================


function setMapStage() {

    const currentFileName = window.location.pathname.split("/").pop();
    // ファイル名ごとにステージの設定を分ける
    
    if (currentFileName === "A%20Random%20picked%20World.html") {
        map.setView([1,1], 1);
        mapSize =1;
    } else if (currentFileName === "Japan.html") {
        map.setView([38.2547029,131], 4);
        mapSize =5;
    } else if (currentFileName === "Madagascar.html") {
        map.setView([-18, 44], 5);
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

let marker; // ピンを保持する変数

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


//距離からポイント計算するやつ
function pointCul(distance) {
    let points = Math.round(Math.pow(0.9993, (((distance/1000)*(mapSize)) - 12163)));
    return  Math.max(0, points);
}


// 距離を計算して表示する関数
function guess() {
    if (!marker) {
        alert('Please place a pin on the map first.');
        return; // ピンが置かれていない場合は処理を中止
    }

    const latLng1 = L.latLng(marker.getLatLng().lat, marker.getLatLng().lng);
    const latLng2 = L.latLng(streetViews[currentStreetViewIndex].lat, streetViews[currentStreetViewIndex].lng); // 現在のストリートビューの位置を使用

    const distance = latLng1.distanceTo(latLng2);
    if (distance > 10000) {
        document.getElementById('distance-value').textContent = distance.toFixed(2);
        
        alert(Math.round(distance / 1000) + "km ," +pointCul(distance));
    } else if(distance > 1000){
        document.getElementById('distance-value').textContent = distance.toFixed(2);

        alert((Math.round(distance/100))/10 + "km ," + pointCul(distance));
    }
    else {
        document.getElementById('distance-value').textContent = distance.toFixed(2);
        alert(Math.round(distance) + "m ," + pointCul(distance));
    }
}