// 設定のポップアップ (メインメニューとマップ選択で共通)
// ページに <audio id="bgm"> と、⚙ボタンから openPopup() を呼ぶ仕組みがあればOK
// ここで決めた設定は localStorage に保存されて、ゲーム画面(SingleGamePlay.js)が読み込んで使う
//   bgmOn     … BGMのオンオフ ('true'/'false') メニュー・シングル・対戦で共通。保存がなければオン
//   bgmVolume … BGMの音量 (対戦のBGMもこれを使う)
//   NMPZbool  … NMPZ (動けない・見回せない・ズームできない) のオンオフ
//   RPZbool   … Random Pan Zoom (最初の向きとズームがランダム) のオンオフ
//   timer     … 1ラウンドの制限時間(秒) 0ならタイマーなし
//   rounds    … ラウンド数 0なら無限

// ポップアップのHTMLをページの最後に足す (両方のページに同じHTMLを書かなくていいように)
document.body.insertAdjacentHTML('beforeend', `
	<div class="popup-overlay" id="popup">
		<div class="popup-content">
			<h2>設定</h2>
			<center><div class="slider-container">
				<label class="slider-label" for="volumeSlider">音量:</label>
				<input type="range" class="gmp-slider" id="volumeSlider" min="0" max="1" step="0.01" value="0.5">
			</div>
			</center>
			BGM
			<label class="toggle-switch">
				<input type="checkbox" id="bgmToggle">
				<span class="slider"></span>
			</label>
			<br>
			<hr color="#c7c7c7" width="50%">
			<h2>ゲーム設定</h2>
			NMPZ :
			<label class="toggle-switch" >
				<input type="checkbox" id="NMPZToggle">
				<span class="slider"></span>
			</label>
			　　Random Pan Zoom :
			<label class="toggle-switch" >
				<input type="checkbox" id="RPZToggle">
				<span class="slider"></span>
			</label><br>
			<center><div class="slider-container">
				<label class="slider-label" for="timerSlider">時間:</label>
				<input type="range" class="gmp-slider" id="timerSlider" min="0" max="30" step="1" value="12">
				<span id="timertxt">2分</span>
			</div>
			<div class="slider-container">
				<label class="slider-label" for="roundSlider">ラウンド:</label>
				<input type="range" class="gmp-slider" id="roundSlider" min="0" max="20" step="1" value="5">
				<span id="roundtxt">5ラウンド</span>
			</div>
			</center>
			<hr color="#c7c7c7" width="50%">
			<button class="close-popup-btn" onclick="closePopup()">クローズ</button>
		</div>
	</div>
`);

//================================================ポップアップの開け閉め================================================
let isSettingOpen = false; // 今ポップアップが開いてるか

// ポップアップを表示する関数 (⚙ボタンやメニューの「設定」から呼ばれる)
function openPopup() {
	isSettingOpen = true;
	document.getElementById("popup").style.display = "flex";
}

// ポップアップを閉じる関数 (「クローズ」ボタンから呼ばれる)
function closePopup() {
	isSettingOpen = false;
	document.getElementById("popup").style.display = "none";
}

// Escキーで開いたり閉じたり
document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		if (isSettingOpen) { closePopup(); } else { openPopup(); }
	}
});

//================================================BGM================================================
const bgm = document.getElementById("bgm");                 // ページのBGM (Ambient.mp3)
const bgmtoggle = document.getElementById("bgmToggle");     // BGMのオンオフのスイッチ
const volumeSlider = document.getElementById("volumeSlider"); // 音量スライダー
let isMuted = false;

// 音量は保存してあればそれを使う (保存は '"0.5"' みたいな文字列で入ってるのでJSON.parseで戻す)
try {
	const savedVolume = JSON.parse(localStorage.getItem("bgmVolume"));
	if (savedVolume !== null) volumeSlider.value = savedVolume;
} catch (e) {} // 変な値が入ってても止まらないように
bgm.volume = volumeSlider.value;

// BGMのオンオフは保存してある設定を使う (保存がなければオン)
// ほかのページ (シングルのゲーム画面・対戦) も同じ 'bgmOn' を見てるので、ここで切り替えると全部に効く
isMuted = localStorage.getItem('bgmOn') === 'false';
bgmtoggle.checked = !isMuted;
bgm.muted = isMuted;

// ページを開いたら再生
// ブラウザは「まだ一度もクリックしてないページ」の音を止めることがあるので、
// そのときは最初にクリックしたタイミングで鳴らし直す
window.addEventListener('load', () => {
	bgm.play().catch(() => {
		document.addEventListener('pointerdown', () => bgm.play().catch(() => {}), { once: true });
	});
});

// BGMのスイッチ: オンで鳴らす、オフでミュート。切り替えたら保存
bgmtoggle.addEventListener("change", () => {
	if (bgmtoggle.checked) {
		bgm.play();
		bgm.muted = false;
		isMuted = false;
	} else {
		bgm.muted = true;
		isMuted = true;
	}
	localStorage.setItem('bgmOn', bgmtoggle.checked);
});

// スライダーで音量を調整して保存 (対戦のBGMもこの値を使う)
volumeSlider.addEventListener("input", function() {
	bgm.volume = this.value;

	localStorage.setItem("bgmVolume", JSON.stringify(this.value));
});

//================================================タイマー================================================
const timer = document.getElementById("timerSlider"); // 時間スライダー (1目盛り=10秒、0〜30で0〜5分)
const timertxt = document.getElementById("timertxt"); // 「2分」みたいな表示

// 秒を「1分30秒」みたいな文字にする
function formatSettingTime(seconds) {
	const mins = Math.floor((seconds % 3600) / 60);
	const secs = seconds % 60;
	if (secs == 0 ) {
		return `${mins}分`;          // ちょうど○分
	} if (mins == 0){
		return `${secs}秒`;          // 1分未満
	} else {
		return `${mins}分${secs}秒`;
	}
}

// 保存してある時間をスライダーに反映 (保存がなければゲームと同じ2分 = 目盛り12)
const storedTimer = localStorage.getItem('timer');
timer.value = storedTimer === null ? 12 : storedTimer / 10;
let distime; // スライダーの目盛り (秒にするときは×10)

// スライダーの横の文字を更新する
function timerSettingTextSet() {
	distime = timer.value;
	if (distime == 0 ) {
		timertxt.textContent = "タイマーなし";
	} else {
		timertxt.textContent = formatSettingTime(distime*10);
	}
}
timerSettingTextSet();

// スライダーを動かしたら表示を変えて、秒で保存
timer.addEventListener("input", function() {
	timerSettingTextSet();
	localStorage.setItem('timer',distime*10);
});

//================================================ラウンド数================================================
const roundSlider = document.getElementById("roundSlider"); // ラウンド数スライダー (0〜20)
const roundtxt = document.getElementById("roundtxt");       // 「5ラウンド」みたいな表示

// 保存してあるラウンド数をスライダーに反映 (保存がなければ5)
const storedRounds = localStorage.getItem('rounds');
roundSlider.value = storedRounds === null ? 5 : storedRounds;

// スライダーの横の文字を更新する (0は無限)
function roundSettingTextSet() {
	if (roundSlider.value == 0) {
		roundtxt.textContent = "無限";
	} else {
		roundtxt.textContent = roundSlider.value + "ラウンド";
	}
}
roundSettingTextSet();

// スライダーを動かしたら表示を変えて保存
roundSlider.addEventListener("input", function() {
	roundSettingTextSet();
	localStorage.setItem('rounds', roundSlider.value);
});

//================================================NMPZ・Random Pan Zoom================================================
const NMPZToggle = document.getElementById("NMPZToggle");
const RPZToggle = document.getElementById("RPZToggle");

// 保存してあるオンオフをスイッチに反映 (localStorageは文字列なので 'true' と比べる)
NMPZToggle.checked = (localStorage.getItem('NMPZbool') === 'true');
RPZToggle.checked = (localStorage.getItem('RPZbool')=== 'true');

// スイッチを切り替えたら保存
NMPZToggle.addEventListener("change", () => {
	localStorage.setItem('NMPZbool',NMPZToggle.checked);
});
RPZToggle.addEventListener("change", () => {
	localStorage.setItem('RPZbool',RPZToggle.checked);
});
