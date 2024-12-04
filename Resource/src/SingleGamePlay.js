let currentAnswerUrl; //正解リンクを保持する変数
let currentStreetViewIndex; //乱数保存用
let currentBackToViewIndex; //初期位置に戻るためのiframe保存用
let currentLat; //現在の〜
let currentLng; //緯度経度
let nowDisplay = 'play'; //spaceキーで進行するための変数
let nowSteeing = 'close'; //設定開いてるかの判定
let marker; // ピンを保持する変数
let rmarker; // ピンを保持する変数
let ranswermarker; // ピンを保持する変数
let rline; //リザルトの点線
let noPin = true; //ピンおいたかどうか(時間切れ用)

const RPZbool =localStorage.getItem('RPZbool') === 'true';
const NMPZbool =localStorage.getItem('NMPZbool') === 'true';

var map = L.map('map').setView([0, 0], 1);
var rfmap = L.map('remap').setView([0, 0], 1);

const bgm = document.getElementById("bgm");
const volumeSlider = document.getElementById("volumeSlider");
const toggle = document.getElementById("bgmToggle");
const bgmTracks = [
    "../bgm/Track01.mp3",
    "../bgm/Track02.mp3",
    "../bgm/Track03.mp3",
    "../bgm/Track04.mp3",
    "../bgm/Track05.mp3",
    "../bgm/Track06.mp3"
];
const ambientBgm = "../bgm/Ambient.mp3";


function showRandomStreetView() {
    
    document.getElementById('loading').style.display = 'flex';
    clearInterval(timerInterval); // タイマー停止
    timerInterval = null;
    let totalRound = document.getElementById('totalRound');
    totalRound.textContent = parseFloat(totalRound.textContent)+1;
    
    closeResult();
    if(NMPZbool){
        document.getElementById('NMPZ-overlay').style.display = 'flex';
    }
    document.getElementById('distance-value').textContent = "0m";
    document.getElementById('point-value').textContent = 0;

    const randomIndex = Math.floor(Math.random() * streetViews.length);
    currentStreetViewIndex = randomIndex;
    if (marker) {
        map.removeLayer(marker);
        marker = undefined;
    }

    noPin = true;
    let embedUrl = streetViews[randomIndex].embedUrl;

    currentLat = parseFloat((embedUrl.match(/1d([-+]?[0-9]*\.?[0-9]+)/))[1]);
    currentLng = parseFloat((embedUrl.match(/2d([-+]?[0-9]*\.?[0-9]+)/))[1]);

    if (RPZbool){
        // ランダムなパン（横角度）、チルト（上下角度）、ズームを生成
        const randomHeading = Math.floor(Math.random() * 360);  // 0～360度
        const randomPitch = Math.floor(Math.random() * 180) - 90; // -90～+90度
        const randomZoom = (Math.random() * 3) + 0.4; // ズーム: 0.5～1.0
        // ストリートビューのURLにランダムパラメータを追加
        embedUrl = streetViews[randomIndex].embedUrl
            .replace(/3f[0-9!]+/, `3f${randomHeading}!4`)   // 横角度（パン）
            .replace(/4f[0-9!]+/, `4f${randomPitch}!`)    // 上下角度（チルト）
            .replace(/5f[0-9.]+/, `5f${randomZoom}`);     // ズーム
    }
    document.getElementById('streetview').src = embedUrl;
    currentBackToViewIndex = embedUrl;
    currentAnswerUrl = streetViews[randomIndex].answerUrl; // 正解リンクを保存
    setMapStage();
    randomBgms();
}

function goBack() {
    window.location.href = '../../index.html'; // ローカルファイルへのパス
}

function backToStart() {
    document.getElementById('streetview').src = currentBackToViewIndex;
}

function showAnswer() {
    // hensuu[3] のリンクを新しいタブで開く
    const link = streetViews[currentStreetViewIndex].answerUrl;
    if (link) {
        window.open(link, "_blank");
    } else {
        alert("リンクが見つかりません！");
    }
};

//
// iframe要素を取得
const iframe = document.getElementById("streetview");

// 読み込み完了時のイベントリスナーを設定
iframe.addEventListener("load", () => {
    // iframeが完全に読み込まれた後に実行
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        if (totalTime != 0 && timerInterval == null) {
            countdownTime = totalTime;
            timerInterval = setInterval(updateTimer, 50);
        }
    }, 1000); // 遅延時間（ミリ秒）
});

//=================================================タイマーとか==================================================

let countdownTime; // 初期時間（秒単位）
let timerInterval = null;
let timerLeftAlertOp = 0;
const totalTime = localStorage.getItem('timer') || 120; // タイマーの総時間を保存

if (totalTime == 0) {
    document.getElementById("timer").style.display = "none";
}

function formatTime(seconds) {
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function LowTimerAlert() {
    const timerOLay = document.getElementById('timerLowLeft').style;
    if (localStorage.getItem('timer') > 30 ){
        if (countdownTime < 30 && countdownTime >29.5){
            timerLeftAlertOp = 1;
        } else if (countdownTime < 29.5 && timerLeftAlertOp > 0){
            timerLeftAlertOp = countdownTime-28.5;
        } else {
            timerLeftAlertOp = 0;
        }
        timerOLay.opacity = timerLeftAlertOp;
    }
}

function updateTimer() {
    const countdownElement = document.getElementById('countdown');
    const progressRing = document.querySelector('.timer');
  
    countdownElement.textContent = formatTime(Math.round(countdownTime));

    // プログレス更新（CSS変数）
    const progress = ((totalTime - countdownTime) / totalTime) * 100; // 経過時間の割合（%）
    progressRing.style.setProperty('--progress', `${progress}%`);
    if (countdownTime > 0) {
        countdownTime -= 0.05;
        LowTimerAlert();
        if (countdownTime < 15){
            progressRing.style.background = "conic-gradient(rgba(0,0,0,0) var(--progress ,0%) ,#E94560 0%)";
        } else {
            progressRing.style.background = "conic-gradient(rgba(0,0,0,0) var(--progress ,0%) ,#7950E5 0%)";
        }
        
    } else {
        guess(); // タイマー終了時の処理
    }
}

//================================================guessとかピンとか================================================
const mapName = localStorage.getItem('mapName');
function setMapStage() {
    // ファイル名ごとにステージの設定を分ける
    if (mapName === "A Random picked World") {
        map.setView([0,0], 1);
        rfmap.setView([20,0], 2);
        mapSize =1;
    } else if (mapName === "日本" || mapName === "An Urban Japan" || mapName === "SDF") {
        map.setView([37, 135], 4);
        rfmap.setView([38,138], 5);
        mapSize =7;
    } else if (mapName === "マダガスカル") {
        map.setView([-19, 46.7], 5);
        rfmap.setView([-22, 48.3], 5);
        mapSize =7.35;
    } else if (mapName === "ヨーロッパ") {
        map.setView([50,10], 3);
        rfmap.setView([50,10], 3);
        mapSize = 70;
    } else if (mapName === "サン・マリノ") {
        map.setView([43.94, 12.47], 12);
        rfmap.setView([44,12.5], 12);
        mapSize =1000;
    } else if (mapName === "岡山市") {
        map.setView([34.65,133.9], 13);
        rfmap.setView([34.7,133.9], 13);
        mapSize = 700;
    } else if (mapName === "testMap") {
        map.setView([34.65,133.9], 2);
        rfmap.setView([34.7,133.9], 2);
        mapSize = 10;
    } else {
        // デフォルトのビュー設定
        map.setView([0, 0], 2);
    }
}

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
        iconUrl: '../images/pin.png', // ここを実際の画像パスに変更
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

    noPin = false;
    // 新しいピンを追加
    marker = L.marker([lat, lng], { icon: createCustomIcon() }).addTo(map);
    
    const soundEffect = document.getElementById("SoundEffect");
    soundEffect.src ="../pick.mp3" 
    soundEffect.currentTime = 0; // 再生位置を先頭に戻す
    soundEffect.play(); // 効果音を再生
});

document.addEventListener("DOMContentLoaded", (event) => {
    alert(streetViews.length +" locations.")
});

document.addEventListener('DOMContentLoaded', function () {
    // スペースキーが押されたときのイベントリスナーを追加
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (nowSteeing=='open'){
                closeSetting();
            }else{
                openSetting();
            }
        }
        // スペースキーのコードは32
        if (event.code === 'Space') {
            event.preventDefault(); // スペースキーのデフォルト動作を防止（スクロールなど）
            if (nowDisplay == 'play'){
                guess(); // guess関数を呼び出す
            }else{
                showRandomStreetView();
                nowDisplay = 'play';
            }
        }
    });
});

//==============================ここらへんguess==============================

//距離からポイント計算するやつ
function pointCul(distance) {
    let points = Math.round(Math.pow(0.99933, (((Math.max(0,distance-(Math.sqrt(mapSize)))/1000)*(mapSize)) - 12708)));
    return  Math.max(0, Math.min(5000,points));
}

function normalizeLongitude(lng) {
    // 経度を -180 から 180 の範囲に正規化
    return ((lng + 180) % 360 + 360) % 360 - 180;
}

// 距離を計算して表示する関数
function guess() {
    if (noPin && (countdownTime > 0 || countdownTime == undefined)) {
        return; // ピンが置かれていない場合は処理を中止
    }

    clearInterval(timerInterval); // タイマー停止
    timerInterval = null;

    openResult();

    bgm.src = ambientBgm;
    bgm.currentTime = 0; // 再生位置を先頭に戻す
    bgm.play();

    const soundEffect = document.getElementById("SoundEffect");
    soundEffect.src = "../ResultScore.mp3";
    soundEffect.currentTime = 0; // 再生位置を先頭に戻す
    soundEffect.play(); // 効果音を再生

    window.dispatchEvent(new Event('resize'));
    if (rline) {
        rfmap.removeLayer(rmarker);
        rfmap.removeLayer(ranswermarker);
        rfmap.removeLayer(rline);
    }
    if (!noPin){
        const latLng1 = L.latLng((marker.getLatLng().lat), normalizeLongitude(marker.getLatLng().lng));
        const latLng2 = L.latLng(currentLat, currentLng);
    
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
        
        let totalPoint = document.getElementById('totalPoint');
        totalPoint.textContent = parseFloat(totalPoint.textContent) + finalpoint;

        // 数値をアニメーションで変化させる
        animateValue('distance-value', targetDistance, 1000); // 1秒かけて変化
        animateValue('point-value', finalpoint.toString(), 1000); // finalpointを文字列に変換
    } else{
        document.getElementById('point-value').textContent = "0"
        document.getElementById('distance-value').textContent = "N/A"
        const latLng2 = L.latLng(currentLat, currentLng);
        ranswermarker = L.marker([latLng2.lat, latLng2.lng]).addTo(rfmap); 
    }
    ranswermarker.on('click', function () {
        window.open(streetViews[currentStreetViewIndex].answerUrl, '_blank');
    });
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

//================================================popup================================================
function openSetting() {
    document.getElementById("popup").style.display = "flex";
    nowSteeing = 'open';
}
// ポップアップを閉じる関数
function closeSetting() {
    document.getElementById("popup").style.display = "none";
    nowSteeing = 'close';
}

function openResult() {
    document.getElementById("resultPopup").style.display = "flex";
    nowDisplay = 'result';
}
function closeResult() {
    document.getElementById("resultPopup").style.display = "none";
    nowDisplay = 'play';
}

function randomBgms() {
    const randomTrack = bgmTracks[Math.floor(Math.random() * bgmTracks.length)];
    bgm.src = randomTrack;
    bgm.currentTime = 0; // 再生位置を先頭に戻す
    bgm.play();
}

showRandomStreetView();// ページの読み込み後に初期化