// =====================================================================
// オンライン対戦
// 部屋を作った人がホストになって、PeerJS(WebRTC)でみんなと直接つながる
// 自分でサーバーを立てなくていい (つなぐときの仲介だけPeerJSの無料サーバー)
// =====================================================================
const PEER_PREFIX = 'geoppoi-poiyatu-'; // ほかのPeerJSユーザーとidが被らないように
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 0とOみたいな紛らわしい文字は抜いた
const INTRO_SECONDS = 5;  // ラウンド前のカウントダウン
const TEAM_NAMES = { blue: 'BLUE', red: 'RED' };
const TEAM_COLORS = { blue: '#00A2FE', red: '#E94560' };
const SIDES = { blue: 'Blue', red: 'Red' }; // idの後ろにつける名前 (resultScoreBlueとか)

const $ = id => document.getElementById(id);

let peer;
let isHost = false;
let partyCode = null;
let myId = null;
let myName = '';
let hostConn = null; // ゲスト側: ホストとの接続
const conns = {};    // ホスト側: peerId → 接続
let hostRetry = 0;

// ロビーの状態 (ホストが持っていて、変わるたびにゲストに配る)
let state = {
    players: [], // {id, name, team}
    // multiStart: 倍率がかかり始めるラウンド, multiStep: 1ラウンドごとの倍率の上がり幅
    // hurry: だれかがguessしたら残りをこの秒数に
    settings: { mode: 'duel', map: 'japan', time: 120, hp: 6000, hurry: 15, multiStart: 5, multiStep: 0.5 },
    phase: 'lobby'
};

let game = null; // ホスト側: 試合の進行

// プレイ中の自分側の状態
let currentRound = null;
let lastResult = null;
let myPin = null;
let pinMarker = null;
let hasGuessed = false;
let guessedIds = []; // このラウンドでguess済みの人
let teammateGuesses = []; // このラウンドのチームメイトのピン
let livePins = {};        // チームメイトがguess前に置いてるピン (id → マーカー)
let playerIcons = {};     // HPバーの下のプレイヤーアイコン (id → 要素)
let lastPinSent = 0;      // ピンの位置を最後にホストに送った時間 (送りすぎないように)

// ホスト交代用
let transferring = false; // ホスト交代中 (接続が切れてもエラーにしない)
let joinRetry = 0;        // 交代中に新しいホストにつなぎ直した回数
let pendingTeams = {};    // 新しいホストが引き継いだ「名前 → チーム」 (つなぎ直してきた人を元のチームに戻す用)
let teammateLayer;
let roundLoaded = false;
let introDone = false;
let introInterval = null;
let timerEnd = null;
let timerTotal = 0;
let timerLastLeft = Infinity; // 残り15秒・10秒を切った瞬間を見つける用
let timeUpPending = false; // 0:00でタイマーが小さくなってる途中
let opponentGuessed = false; // このラウンドで相手に先にguessされたか
let countdownSound = null; // 残り15秒のカウントダウンの音
let timerInterval = null;
let playMap, resultMap, resultLayer;

//================================================画面切り替え================================================
function showView(name) {
    document.querySelectorAll('.view').forEach(view => view.style.display = 'none');
    $(name + 'View').style.display = name === 'play' ? 'block' : 'flex';
}

function showEntryError(text) {
    $('entryError').textContent = text;
    showView('entry');
}

//================================================部屋を作る・参加する================================================
function readName() {
    const name = $('nameInput').value.trim().slice(0, 12);
    if (!name) {
        showEntryError('なまえを入れてね');
        return null;
    }
    localStorage.setItem('playerName', name);
    return name;
}

function randomCode() {
    let code = '';
    for (let i = 0; i < 4; i++) {
        code += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
    }
    return code;
}

function createParty() {
    myName = readName();
    if (!myName) return;
    hostParty(randomCode());
}

function joinFromInput() {
    myName = readName();
    if (!myName) return;
    const code = $('codeInput').value.trim().toUpperCase();
    if (!/^[A-Z0-9]{4}$/.test(code)) {
        showEntryError('コードは4文字だよ');
        return;
    }
    joinParty(code);
}

// carry: ホストを引き継いだときの設定とチーム ({settings, teams})。普通に部屋を作るときはなし
function hostParty(code, carry) {
    isHost = true;
    partyCode = code;
    myId = 'host';
    $('entryError').textContent = '部屋を作ってるよ...';
    if (peer) peer.destroy();
    peer = new Peer(PEER_PREFIX + code);

    peer.on('open', () => {
        hostRetry = 0;
        transferring = false;
        sessionStorage.setItem('hostCode', code);
        history.replaceState(null, '', '?code=' + code);

        // 引き継ぎなら設定とチームをそのまま使う
        if (carry) {
            state.settings = carry.settings;
            pendingTeams = Object.assign({}, carry.teams);
        }
        const myTeamNow = pendingTeams[myName] || 'blue';
        delete pendingTeams[myName];
        state.players = [{ id: 'host', name: myName, team: myTeamNow }];
        state.phase = 'lobby';
        broadcastLobby();
    });
    peer.on('connection', setupGuestConn);
    peer.on('error', err => {
        if (err.type === 'unavailable-id') {
            // リロード直後は前の自分がまだ残ってることがあるので、少し待ってやり直す
            // ホスト交代のときも、前のホストがコードを手放すまで少しかかるので同じようにやり直す
            if (sessionStorage.getItem('hostCode') === code && hostRetry < 5) {
                hostRetry++;
                setTimeout(() => hostParty(code, carry), 3000);
            } else {
                hostParty(randomCode());
            }
        } else if (!peer.open) {
            showEntryError('接続エラー: ' + err.type);
        }
    });
}

function joinParty(code) {
    isHost = false;
    partyCode = code;
    $('entryError').textContent = '接続中...';
    showView('entry');
    if (peer) peer.destroy();
    peer = new Peer();

    peer.on('open', id => {
        myId = id;
        hostConn = peer.connect(PEER_PREFIX + code, { reliable: true });
        hostConn.on('open', () => hostConn.send({ type: 'hello', name: myName }));
        hostConn.on('data', handleHostMessage);
        hostConn.on('close', () => {
            if (!transferring) showEntryError('ホストとの接続が切れたよ'); // ホスト交代中に切れるのは普通
        });
    });
    peer.on('error', err => {
        if (err.type === 'peer-unavailable') {
            // ホスト交代中は新しいホストの部屋ができるまで何回かやり直す
            if (transferring && joinRetry < 10) {
                joinRetry++;
                setTimeout(() => joinParty(code), 1500);
                return;
            }
            showEntryError('部屋 ' + code + ' が見つからないよ');
        } else {
            showEntryError('接続エラー: ' + err.type);
        }
    });
}

function leaveParty() {
    sessionStorage.removeItem('hostCode');
    if (peer) peer.destroy();
    location.href = location.href.split('?')[0];
}

function copyInviteLink() {
    const url = location.href.split('?')[0] + '?code=' + partyCode;
    navigator.clipboard.writeText(url).then(() => {
        $('copyButton').textContent = 'コピーした!';
        setTimeout(() => $('copyButton').textContent = '招待リンクをコピー', 1500);
    }).catch(() => {
        window.prompt('このリンクを送ってね', url);
    });
}

//================================================通信 (ホスト側)================================================
function setupGuestConn(conn) {
    conn.on('data', msg => handleGuestMessage(conn.peer, msg));
    conn.on('close', () => removePlayer(conn.peer));
    conn.on('error', () => removePlayer(conn.peer));
    conns[conn.peer] = conn;
}

// ゲスト(とホスト自身)から届いたメッセージ
function handleGuestMessage(id, msg) {
    switch (msg.type) {
        case 'hello':
            if (state.phase !== 'lobby') {
                conns[id].send({ type: 'rejected', reason: '試合中だから入れないよ' });
                return;
            }
            if (state.players.some(p => p.id === id)) return;
            const name = String(msg.name).slice(0, 12);
            // ホスト交代でつなぎ直してきた人は元のチームに
            const team = pendingTeams[name] || smallerTeam();
            delete pendingTeams[name];
            state.players.push({ id: id, name: name, team: team });
            conns[id].send({ type: 'welcome', id: id });
            broadcastLobby();
            break;
        case 'team':
            setTeam(id, msg.team);
            break;
        case 'guess':
            receiveGuess(id, msg.latlng);
            break;
        case 'pin':
            relayPin(id, msg.latlng);
            break;
    }
}

// guess前にピンを置いた/動かしたのを、同じチームの人にだけ伝える
function relayPin(id, latlng) {
    if (!game || game.roundOver || id in game.guesses) return;
    const player = state.players.find(p => p.id === id);
    if (!player) return;
    sendToTeam(player.team, { type: 'pin', id: id, name: player.name, team: player.team, latlng: latlng });
}

// そのチームの人にだけ送る (ホスト自身がそのチームなら自分にも)
function sendToTeam(team, msg) {
    state.players.filter(p => p.team === team).forEach(p => {
        if (p.id === 'host') {
            handleHostMessage(msg);
        } else if (conns[p.id] && conns[p.id].open) {
            conns[p.id].send(msg);
        }
    });
}

// 👑 ホストを渡す (ロビーでホストだけ)
function transferHost(id) {
    if (!isHost || game || id === 'host') return;
    const target = state.players.find(p => p.id === id);
    if (!target) return;
    if (!confirm(target.name + ' にホストを渡す？')) return;

    // 新しいホストに引き継ぐもの: 設定と、みんなのチーム (名前 → チーム)
    const teams = {};
    state.players.forEach(p => teams[p.name] = p.team);
    broadcast({ type: 'hostTransfer', newHostId: id, newHostName: target.name, settings: state.settings, teams: teams });
}

// ホスト交代のメッセージが来たら (全員)
//   新しいホスト → 前のホストがコードを手放すのを待って、同じコードで部屋を作り直す
//   前のホスト   → コードを手放して、ゲストとして入り直す
//   ほかの人     → 新しい部屋ができたらつなぎ直す
function startHostTransfer(msg) {
    transferring = true;
    joinRetry = 0;
    $('entryError').textContent = msg.newHostName + ' にホストを交代中...';
    showView('entry');
    closeSettings();

    if (msg.newHostId === myId) {
        sessionStorage.setItem('hostCode', partyCode); // 作り直しに失敗しても同じコードでやり直すように
        setTimeout(() => hostParty(partyCode, { settings: msg.settings, teams: msg.teams }), 1500);
        return;
    }

    if (isHost) {
        // 前のホスト: メッセージが届くのを少し待ってからコードを手放す
        sessionStorage.removeItem('hostCode');
        isHost = false;
        setTimeout(() => {
            Object.keys(conns).forEach(key => delete conns[key]);
            if (peer) peer.destroy();
        }, 500);
    }
    setTimeout(() => joinParty(partyCode), 3000);
}

function removePlayer(id) {
    if (!conns[id]) return;
    delete conns[id];
    state.players = state.players.filter(p => p.id !== id);
    broadcastLobby();
    if (game && !game.roundOver && allGuessed()) {
        endRound();
    }
}

// 全員に送る (ホスト自身にも同じ処理を通す)
function broadcast(msg) {
    Object.values(conns).forEach(conn => {
        if (conn.open) conn.send(msg);
    });
    handleHostMessage(msg);
}

function broadcastLobby() {
    broadcast({ type: 'lobby', state: state });
}

function sendToHost(msg) {
    if (isHost) {
        handleGuestMessage('host', msg);
    } else if (hostConn && hostConn.open) {
        hostConn.send(msg);
    }
}

//================================================通信 (みんな)================================================
// ホストから届いたメッセージ
function handleHostMessage(msg) {
    switch (msg.type) {
        case 'welcome':
            myId = msg.id;
            transferring = false;
            history.replaceState(null, '', '?code=' + partyCode);
            break;
        case 'rejected':
            showEntryError(msg.reason);
            break;
        case 'lobby':
            state = msg.state;
            renderLobby();
            if (state.phase === 'lobby') showView('lobby');
            break;
        case 'round':
            startRound(msg);
            break;
        case 'guessed':
            onGuessed(msg);
            break;
        case 'pin':
            onTeammatePin(msg);
            break;
        case 'hostTransfer':
            startHostTransfer(msg);
            break;
        case 'roundResult':
            showRoundResult(msg);
            break;
        case 'gameOver':
            showGameOver(msg);
            break;
    }
}

//================================================ロビー================================================
function smallerTeam() {
    const blue = state.players.filter(p => p.team === 'blue').length;
    const red = state.players.filter(p => p.team === 'red').length;
    return blue <= red ? 'blue' : 'red';
}

// ⇄スイッチ: 自分のチームを入れ替える
function switchTeam() {
    sendToHost({ type: 'team', team: myTeam() === 'blue' ? 'red' : 'blue' });
}

function setTeam(id, team) {
    if (game || !TEAM_NAMES[team]) return;
    const player = state.players.find(p => p.id === id);
    if (!player || player.team === team) return;
    player.team = team;
    broadcastLobby();
}

function shuffleTeams() {
    const shuffled = shuffle(state.players.slice());
    shuffled.forEach((player, i) => player.team = i % 2 == 0 ? 'blue' : 'red');
    broadcastLobby();
}

// 開始できない理由 (問題なければnull)
function startProblem() {
    const blue = state.players.filter(p => p.team === 'blue').length;
    const red = state.players.filter(p => p.team === 'red').length;
    if (state.settings.mode === 'duel' && (blue !== 1 || red !== 1)) {
        return '1v1は青と赤に1人ずつにしてね';
    }
    if (blue < 1 || red < 1) {
        return '両チームに1人以上必要だよ';
    }
    return null;
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';

    const badges = document.createElement('div');
    badges.className = 'player-badges';
    if (player.id === myId) badges.innerHTML += '<span class="player-badge you">YOU</span>';
    if (player.id === 'host') badges.innerHTML += '<span class="player-badge">HOST</span>';

    const avatar = document.createElement('div');
    avatar.className = 'player-avatar';
    avatar.textContent = player.name.charAt(0).toUpperCase();

    const name = document.createElement('div');
    name.className = 'player-name';
    name.textContent = player.name;

    card.append(badges, avatar, name);

    // ホストだけ: ほかの人のカードの右上に👑 (押すとその人にホストを渡す)
    if (isHost && player.id !== 'host') {
        const crown = document.createElement('button');
        crown.className = 'player-crown';
        crown.textContent = '👑';
        crown.title = 'ホストを渡す';
        crown.addEventListener('click', () => transferHost(player.id));
        card.appendChild(crown);
    }
    return card;
}

function renderLobby() {
    const host = state.players.find(p => p.id === 'host');
    $('lobbyTitle').textContent = (host ? host.name : '') + ' のパーティ';
    $('lobbyCode').textContent = partyCode;
    $('lobbyCount').textContent = state.players.length + '人';

    ['blue', 'red'].forEach(team => {
        const column = $(team === 'blue' ? 'teamBlue' : 'teamRed');
        column.innerHTML = '<div class="team-name">' + TEAM_NAMES[team] + '</div>';
        state.players.filter(p => p.team === team).forEach(p => column.appendChild(createPlayerCard(p)));
    });

    // 設定のポップアップ
    const settings = state.settings;
    $('modeSelect').value = settings.mode;
    $('mapSelect').value = settings.map;
    $('timeSelect').value = settings.time;
    $('hpValue').textContent = settings.hp;
    $('hurryValue').textContent = (settings.hurry || 15) + '秒';
    $('multiStartSlider').value = settings.multiStart;
    $('multiStepSlider').value = settings.multiStep;
    $('multiStartText').textContent = 'ラウンド' + settings.multiStart + 'から';
    $('multiStepText').textContent = settings.multiStep == 0 ? 'なし' : '+' + settings.multiStep.toFixed(1);
    $('multiPreview').textContent = multiplierPreview();
    $('settingsNote').textContent = isHost ? '' : '設定を変えられるのはホストだけだよ';
    document.querySelectorAll('#settingsModal select, #settingsModal input, #settingsModal .stepper button').forEach(input => input.disabled = !isHost);

    // ロビーのカード
    $('cardMode').textContent = $('modeSelect').selectedOptions[0].textContent;
    $('cardMap').textContent = MAPS[settings.map].name;
    // 「なし (guessされたら開始)」は長いのでカードでは「なし」だけ
    const timeText = settings.time == 0 ? 'なし' : $('timeSelect').selectedOptions[0].textContent;
    $('cardRule').textContent = timeText + ' / HP ' + settings.hp;

    document.querySelectorAll('.host-only').forEach(el => el.style.display = isHost ? '' : 'none');
    $('lobbyMessage').textContent = isHost ? (startProblem() || '') : 'ホストが始めるのを待ってるよ';
}

function openSettings() {
    $('settingsModal').classList.add('open');
}

function closeSettings() {
    $('settingsModal').classList.remove('open');
}

// 例: "ラウンド5: ×1.5 → ラウンド6: ×2 → ラウンド7: ×2.5"
function multiplierPreview() {
    if (state.settings.multiStep == 0) return 'ダメージ倍率なし';
    const start = state.settings.multiStart;
    return [start, start + 1, start + 2].map(round => 'ラウンド' + round + ': ×' + getMultiplier(round)).join(' → ');
}

// マップの選択肢はmaps.jsから
Object.keys(MAPS).forEach(id => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = MAPS[id].name;
    $('mapSelect').appendChild(option);
});

[['modeSelect', 'mode'], ['mapSelect', 'map'], ['timeSelect', 'time'],
 ['multiStartSlider', 'multiStart'], ['multiStepSlider', 'multiStep']].forEach(([id, key]) => {
    $(id).addEventListener('input', () => {
        const value = $(id).value;
        state.settings[key] = (key === 'mode' || key === 'map') ? value : Number(value);
        broadcastLobby();
    });
});

// ◀ 数値 ▶ の設定 (HPと、guessされたあとの秒数)
// data-key: state.settingsのどれを変えるか, data-min/max: 範囲, data-step: 1回でどれだけ変わるか
document.querySelectorAll('.stepper').forEach(stepper => {
    const key = stepper.dataset.key;
    const min = Number(stepper.dataset.min);
    const max = Number(stepper.dataset.max);
    const step = Number(stepper.dataset.step);
    let repeatTimer = null;

    // 1回ぶん変える (はしまで行ったら止まる)
    function change(dir) {
        if (!isHost) return;
        const now = state.settings[key] || min;
        const next = Math.max(min, Math.min(max, now + dir * step));
        if (next === now) return;
        state.settings[key] = next;
        broadcastLobby();
    }

    stepper.querySelectorAll('button').forEach(button => {
        const dir = Number(button.dataset.dir);
        // 押した瞬間に1回、押しっぱなしなら0.4秒後から速く連続で
        button.addEventListener('pointerdown', () => {
            change(dir);
            clearTimeout(repeatTimer);
            repeatTimer = setTimeout(function repeat() {
                change(dir);
                repeatTimer = setTimeout(repeat, 80);
            }, 400);
        });
        // 指やマウスを離したら止める
        ['pointerup', 'pointerleave', 'pointercancel'].forEach(type => {
            button.addEventListener(type, () => clearTimeout(repeatTimer));
        });
    });
});

//================================================サウンドの⚙ (ロビーとプレイ中)================================================
// BGMのオンオフ・音量はメニューやシングルと同じ保存先 (bgmOn / bgmVolume)
// 効果音の音量は seVolume (sound.jsが鳴らすときに読む)
function openSound() {
    $('bgmOnToggle').checked = localStorage.getItem('bgmOn') !== 'false';
    $('bgmVolumeSlider').value = bgmVolume();
    $('seVolumeSlider').value = seVolume();
    $('soundModal').classList.add('open');
}

function closeSound() {
    $('soundModal').classList.remove('open');
}

// BGMのオンオフ: すぐに今の曲に反映して保存
$('bgmOnToggle').addEventListener('change', () => {
    localStorage.setItem('bgmOn', $('bgmOnToggle').checked);
    $('bgm').muted = !$('bgmOnToggle').checked;
    if ($('bgmOnToggle').checked && $('bgm').src) $('bgm').play().catch(() => {});
});

// BGMの音量 (シングルと同じで '"0.5"' みたいにJSONで保存)
$('bgmVolumeSlider').addEventListener('input', () => {
    $('bgm').volume = $('bgmVolumeSlider').value;
    localStorage.setItem('bgmVolume', JSON.stringify($('bgmVolumeSlider').value));
});

// 効果音の音量: 変えたらピンの音を鳴らして大きさを確かめられるように
$('seVolumeSlider').addEventListener('input', () => {
    localStorage.setItem('seVolume', $('seVolumeSlider').value);
});
$('seVolumeSlider').addEventListener('change', () => playSE('Place Guess Land'));

//================================================試合の進行 (ホスト側)================================================
// maplinkの地点データを読み込む (各ファイルは var streetViews = [...] なので何回でも読める)
function loadStreetViews(mapId, callback) {
    const script = document.createElement('script');
    script.src = '../maplink/' + MAPS[mapId].file;
    script.onload = () => {
        script.remove();
        callback(streetViews);
    };
    script.onerror = () => $('lobbyMessage').textContent = 'マップの読み込みに失敗したよ';
    document.head.appendChild(script);
}

function startGame() {
    const problem = startProblem();
    if (problem) {
        $('lobbyMessage').textContent = problem;
        return;
    }
    const mapId = state.settings.map;
    loadStreetViews(mapId, list => {
        game = {
            mapId: mapId,
            queue: shuffle(list.slice()),
            round: 0,
            hp: { blue: state.settings.hp, red: state.settings.hp },
            guesses: {},
            roundOver: true,
            deadline: null,
            gameOver: false
        };
        state.phase = 'playing';
        broadcastLobby();
        nextRound();
    });
}

// 後半のラウンドほどダメージが大きくなる (設定のmultiStartラウンドから、multiStepずつ上がる)
function getMultiplier(round) {
    const multiplier = 1 + Math.max(0, round - state.settings.multiStart + 1) * state.settings.multiStep;
    return Math.round(multiplier * 10) / 10;
}

function nextRound() {
    game.round++;
    const spot = game.queue[(game.round - 1) % game.queue.length];
    game.current = {
        embedUrl: spot.embedUrl,
        answerUrl: spot.answerUrl,
        lat: parseFloat((spot.embedUrl.match(/1d([-+]?[0-9]*\.?[0-9]+)/))[1]),
        lng: parseFloat((spot.embedUrl.match(/2d([-+]?[0-9]*\.?[0-9]+)/))[1])
    };
    game.guesses = {};
    game.roundOver = false;
    game.hurried = false;
    broadcast({
        type: 'round',
        round: game.round,
        location: game.current,
        mapId: game.mapId,
        time: state.settings.time,
        multiplier: getMultiplier(game.round),
        hp: game.hp
    });
    setRoundDeadline(state.settings.time + INTRO_SECONDS);
}

// ゲストの時間切れが届かなかったとき用の保険 (読み込み時間ぶん余裕をもたせる)
function setRoundDeadline(seconds) {
    clearTimeout(game.deadline);
    if (seconds > 0) {
        game.deadline = setTimeout(endRound, (seconds + 10) * 1000);
    }
}

function allGuessed() {
    return state.players.every(p => p.id in game.guesses);
}

function receiveGuess(id, latlng) {
    if (!game || game.roundOver || id in game.guesses) return;
    const player = state.players.find(p => p.id === id);
    if (!player) return;

    game.guesses[id] = latlng;
    let hurry = null;
    if (latlng && !game.hurried) {
        game.hurried = true;
        hurry = state.settings.hurry || 15;
        setRoundDeadline(hurry);
    }
    // チームメイトのピンを見せるために位置とチームも送る (表示するのは同じチームの人だけ)
    broadcast({ type: 'guessed', id: id, name: player.name, team: player.team, latlng: latlng, hurry: hurry });

    if (allGuessed()) {
        endRound();
    }
}

function endRound() {
    if (!game || game.roundOver) return;
    game.roundOver = true;
    clearTimeout(game.deadline);

    const answer = L.latLng(game.current.lat, game.current.lng);
    const mapSize = MAPS[game.mapId].mapSize;
    const results = state.players.map(p => {
        const guessLatLng = game.guesses[p.id];
        if (!guessLatLng) {
            return { id: p.id, name: p.name, team: p.team, guess: null, distance: null, point: 0 };
        }
        const distance = L.latLng(guessLatLng.lat, guessLatLng.lng).distanceTo(answer);
        return { id: p.id, name: p.name, team: p.team, guess: guessLatLng, distance: distance, point: pointCul(distance, mapSize) };
    });

    // チームの点数は一番近かった人の点数
    const best = {};
    ['blue', 'red'].forEach(team => {
        best[team] = results.filter(r => r.team === team)
            .reduce((top, r) => (!top || r.point > top.point) ? r : top, null);
    });
    const blueScore = best.blue ? best.blue.point : 0;
    const redScore = best.red ? best.red.point : 0;

    const multiplier = getMultiplier(game.round);
    const damage = Math.round(Math.abs(blueScore - redScore) * multiplier);
    let loser = null;
    if (blueScore > redScore) {
        loser = 'red';
    } else if (redScore > blueScore) {
        loser = 'blue';
    }
    const previousHp = { blue: game.hp.blue, red: game.hp.red };
    if (loser) {
        game.hp[loser] = Math.max(0, game.hp[loser] - damage);
    }
    game.gameOver = game.hp.blue <= 0 || game.hp.red <= 0;

    broadcast({
        type: 'roundResult',
        round: game.round,
        answer: game.current,
        results: results,
        best: best,
        damage: damage,
        loser: loser,
        multiplier: multiplier,
        previousHp: previousHp,
        hp: { blue: game.hp.blue, red: game.hp.red },
        gameOver: game.gameOver
    });
}

function hostNext() {
    if (!isHost || !game || !game.roundOver) return;
    if (game.gameOver) {
        broadcast({ type: 'gameOver', winner: game.hp.blue <= 0 ? 'red' : 'blue' });
    } else {
        nextRound();
    }
}

function backToLobby() {
    game = null;
    state.phase = 'lobby';
    broadcastLobby();
}

//================================================プレイ画面================================================
function ensurePlayMap() {
    if (playMap) return;
    playMap = L.map('map');
    addTiles(playMap);
    teammateLayer = L.layerGroup().addTo(playMap);
    playMap.on('click', e => {
        if (hasGuessed) return;
        myPin = e.latlng;
        if (pinMarker) playMap.removeLayer(pinMarker);
        pinMarker = L.marker(e.latlng, { icon: createCustomIcon() }).addTo(playMap);
        playPinSound(e.latlng, playMap.getZoom()); // 陸か水の上かで音が変わる (sound.js)

        // チーム戦なら、guess前でもピンの位置をチームメイトに見せる (連打で送りすぎないように0.2秒あける)
        if (state.settings.mode === 'team' && performance.now() - lastPinSent > 200) {
            lastPinSent = performance.now();
            sendToHost({ type: 'pin', latlng: { lat: e.latlng.lat, lng: normalizeLongitude(e.latlng.lng) } });
        }
    });
}

function startRound(msg) {
    currentRound = msg;
    guessedIds = [];
    hasGuessed = false;
    myPin = null;
    roundLoaded = false;
    introDone = false;
    opponentGuessed = false;
    timeUpPending = false;
    timerLastLeft = Infinity;
    stopTimer();
    stopSE(countdownSound);
    countdownSound = null;
    document.querySelector('.timer').getAnimations().forEach(animation => animation.cancel()); // 小さくなったタイマーを戻す
    closeMiniMap(); // スマホで大きくした地図を小さく戻す (cssanimation.js)

    ensurePlayMap();
    if (pinMarker) {
        playMap.removeLayer(pinMarker);
        pinMarker = null;
    }
    teammateLayer.clearLayers();
    teammateGuesses = [];
    livePins = {};

    // カウントダウンの裏でストリートビューを読み込んでおく
    $('loading').style.display = 'flex';
    $('streetview').src = msg.location.embedUrl;
    $('guess-button').textContent = 'guess';
    $('guess-button').disabled = false;
    $('guessStatus').textContent = '';
    $('roundLabel').textContent = 'ラウンド ' + msg.round + (msg.multiplier > 1 ? '  ×' + msg.multiplier : '');
    $('timer').style.display = 'none';
    renderHp(msg.hp, 'play');
    renderPlayerIcons();

    showIntro(msg);
}

// 「ラウンド3 / 1.5X ダメージ / 次のラウンドが始まる 05」
function showIntro(msg) {
    showView('intro');
    $('introRound').textContent = 'ラウンド ' + msg.round;
    $('introMultiplier').textContent = msg.multiplier > 1 ? msg.multiplier + 'X ダメージ' : '';
    let left = INTRO_SECONDS;
    $('introCount').textContent = String(left).padStart(2, '0');
    playSE('Effect Count Down Tick');
    clearInterval(introInterval);
    introInterval = setInterval(() => {
        left--;
        if (left <= 0) {
            clearInterval(introInterval);
            beginPlay(msg);
        } else {
            $('introCount').textContent = String(left).padStart(2, '0');
            playSE('Effect Count Down Tick');
        }
    }, 1000);
}

function beginPlay(msg) {
    if (msg !== currentRound) return;
    introDone = true;
    showView('play');
    playSE('New Round');
    playRoundMusic();
    const config = MAPS[msg.mapId];
    playMap.invalidateSize();
    playMap.setView(config.view[0], config.view[1]);
    if (roundLoaded && msg.time > 0 && !timerEnd) {
        startTimer(msg.time);
    }
}

$('streetview').addEventListener('load', () => {
    if (!currentRound || roundLoaded) return;
    const round = currentRound;
    setTimeout(() => {
        if (round !== currentRound) return;
        roundLoaded = true;
        $('loading').style.display = 'none';
        // カウントダウン中に読み込み終わったら、タイマーはカウントダウンのあと
        if (introDone && round.time > 0 && !timerEnd && !hasGuessed) {
            startTimer(round.time);
        }
    }, 1000);
});

// 🏳️ 最初の位置に戻る
function backToStart() {
    if (currentRound) $('streetview').src = currentRound.location.embedUrl;
}

function submitGuess(timeUp) {
    if (hasGuessed || !currentRound) return;
    if (!myPin && !timeUp) return; // ピンが置かれてない
    hasGuessed = true;
    stopTimer();
    stopSE(countdownSound);
    countdownSound = null;
    const latlng = myPin ? { lat: myPin.lat, lng: normalizeLongitude(myPin.lng) } : null;
    // 先に待機画面を出す (ホストは送った瞬間にラウンドが終わって結果画面になることがあるので)
    showWaiting();
    sendToHost({ type: 'guess', latlng: latlng });
}

function myTeam() {
    const me = state.players.find(p => p.id === myId);
    return me ? me.team : null;
}

// チームメイトのピン (チームの色の丸 + 名前)
function addTeammateMarker(layer, guess) {
    L.circleMarker([guess.latlng.lat, guess.latlng.lng], { radius: 7, color: 'white', weight: 2, fillColor: TEAM_COLORS[guess.team], fillOpacity: 1 })
        .bindTooltip(guess.name, { permanent: true, direction: 'top', offset: [0, -7], className: 'party-tooltip' })
        .addTo(layer);
}

// HPバーの下に、そのチームのプレイヤーのアイコンを並べる (guessしたら半透明になる)
function renderPlayerIcons() {
    playerIcons = {};
    ['blue', 'red'].forEach(team => {
        const row = $('playPlayers' + SIDES[team]);
        row.innerHTML = '';
        state.players.filter(p => p.team === team).forEach(p => {
            const icon = document.createElement('div');
            icon.className = 'hp-player';
            icon.textContent = p.name.charAt(0).toUpperCase(); // ロビーと同じで名前の1文字目
            icon.title = p.name;
            if (p.id === myId) icon.classList.add('me'); // 自分は黄色い枠
            row.appendChild(icon);
            playerIcons[p.id] = icon;
        });
    });
}

// チームメイトがguess前に置いたピン (うすい丸で表示して、動かしたら追いかける)
function onTeammatePin(msg) {
    if (msg.id === myId || guessedIds.includes(msg.id) || msg.team !== myTeam()) return;
    if (livePins[msg.id]) {
        livePins[msg.id].setLatLng([msg.latlng.lat, msg.latlng.lng]);
        return;
    }
    livePins[msg.id] = L.circleMarker([msg.latlng.lat, msg.latlng.lng], { radius: 7, color: 'white', weight: 2, fillColor: TEAM_COLORS[msg.team], fillOpacity: 0.4, opacity: 0.6, dashArray: '3 3' })
        .bindTooltip(msg.name + ' (考え中)', { permanent: true, direction: 'top', offset: [0, -7], className: 'party-tooltip' })
        .addTo(teammateLayer);
}

function onGuessed(msg) {
    if (!guessedIds.includes(msg.id)) guessedIds.push(msg.id);

    // HPバーの下のアイコンを半透明に
    if (playerIcons[msg.id]) playerIcons[msg.id].classList.add('guessed');

    // 考え中のピンは消す (このあとguessしたピンに置きかわる)
    if (livePins[msg.id]) {
        teammateLayer.removeLayer(livePins[msg.id]);
        delete livePins[msg.id];
    }

    const waiting = hasGuessed && $('resultView').classList.contains('waiting');
    if (msg.latlng && msg.id !== myId && msg.team === myTeam()) {
        teammateGuesses.push(msg);
        addTeammateMarker(teammateLayer, msg);
        if (waiting) addTeammateMarker(resultLayer, msg);
    }

    if (waiting) {
        updateWaitingText();
    } else if (msg.latlng && !hasGuessed) {
        $('guessStatus').textContent = msg.name + ' がguessしたよ!';
    }
    // 相手チームに先にguessされたら画面の端が赤く光る (1ラウンド1回だけ)
    if (msg.latlng && msg.team !== myTeam() && !hasGuessed && !opponentGuessed) {
        opponentGuessed = true;
        flashEdge();
        playSE('Opponent Guessed');
    }
    if (msg.hurry && !hasGuessed) {
        hurryTimer(msg.hurry);
    }
}

// 画面の端を赤く光らせてすっと消す (シングルの残り10秒のやつと同じ見た目)
function flashEdge() {
    $('timerLowLeft').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1000, easing: 'ease-out' });
}

//================================================タイマー================================================
function startTimer(seconds) {
    timerTotal = seconds;
    timerEnd = performance.now() + seconds * 1000;
    $('timer').style.display = 'flex';
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 100);
    updateTimer();
}

// 残りがもっと長いときだけ縮める
function hurryTimer(seconds) {
    if (timeUpPending) return;
    if (timerEnd && timerEnd <= performance.now() + seconds * 1000) return;
    startTimer(seconds);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerEnd = null;
}

function updateTimer() {
    const left = Math.max(0, (timerEnd - performance.now()) / 1000);
    $('countdown').textContent = formatTime(Math.ceil(left));

    // 残り15秒を切ったらカウントダウンの音
    if (timerLastLeft > 15 && left <= 15 && !countdownSound) {
        countdownSound = playSE('Timer Countdown');
    }
    // 残り10秒を切った瞬間に光る (相手にguessされて光ったラウンドは光らない)
    if (timerLastLeft > 10 && left <= 10 && !opponentGuessed) {
        flashEdge();
    }
    timerLastLeft = left;

    const progressRing = document.querySelector('.timer');
    const progress = (1 - left / timerTotal) * 100;
    progressRing.style.setProperty('--progress', `${progress}%`);
    const color = left < 11 ? '#E94560' : '#7950E5';
    progressRing.style.background = `conic-gradient(rgba(0,0,0,0) var(--progress ,0%) ,${color} 0%)`;

    if (left <= 0) {
        // 0:00になったら1秒かけてタイマーを小さくしてからリザルトへ
        stopTimer();
        timeUpPending = true;
        playSE('Round End');
        progressRing.animate([
            { transform: 'translate(-50%, 0) scale(1)' },
            { transform: 'translate(-50%, 0) scale(0)' }
        ], { duration: 1000, easing: 'ease-in', fill: 'forwards' });
        const round = currentRound;
        setTimeout(() => {
            if (round === currentRound) submitGuess(true);
        }, 1000);
    }
}

//================================================BGM================================================
const ROUND_MUSIC = ['Music Round 1', 'Music Round 2', 'Music Round 3', 'Music Round 4'];

// 音量はシングルの設定 (bgmVolume) をそのまま使う
function bgmVolume() {
    try {
        const saved = JSON.parse(localStorage.getItem('bgmVolume'));
        if (saved !== null) return parseFloat(saved);
    } catch (e) {}
    return 0.3;
}

// ラウンドが始まったらランダムに1曲
// オンオフはメニューの設定と共通 ('bgmOn' が 'false' ならミュート、保存がなければオン)
function playRoundMusic() {
    const bgm = $('bgm');
    bgm.src = '../bgm/' + ROUND_MUSIC[Math.floor(Math.random() * ROUND_MUSIC.length)] + '.mp3';
    bgm.volume = bgmVolume();
    bgm.muted = localStorage.getItem('bgmOn') === 'false';
    bgm.currentTime = 0;
    bgm.play().catch(() => {
        // リンクから直接入ってまだ一度もクリックしてないと止められるので、最初のクリックで鳴らす
        document.addEventListener('pointerdown', () => bgm.play().catch(() => {}), { once: true });
    });
}

function stopMusic() {
    $('bgm').pause();
}

//================================================結果画面================================================
function teamLabel(team) {
    if (state.settings.mode === 'duel') {
        const player = state.players.find(p => p.team === team);
        if (player) return player.name;
    }
    return TEAM_NAMES[team];
}

function renderHp(hp, prefix) {
    ['blue', 'red'].forEach(team => {
        const side = team === 'blue' ? 'Blue' : 'Red';
        $(prefix + 'Hp' + side + 'Fill').style.width = Math.max(0, hp[team] / state.settings.hp * 100) + '%';
        $(prefix + 'Hp' + side + 'Text').textContent = hp[team];
        $(prefix + 'Hp' + side + 'Label').textContent = teamLabel(team);
    });
}

function ensureResultMap() {
    if (resultMap) return;
    resultMap = L.map('partyResultMap');
    addTiles(resultMap);
    resultLayer = L.layerGroup().addTo(resultMap);
}

// 結果の地図を、渡した地点が全部入り切るズームにする (1か所だけならsingleZoomで中心に)
let lastFit = null; // スマホを横にしたときにやり直す用
function fitResultMap(latLngs, singleZoom) {
    lastFit = { latLngs: latLngs, singleZoom: singleZoom };
    setTimeout(() => {
        resultMap.invalidateSize({ pan: false });
        if (latLngs.length == 1) {
            resultMap.setView(latLngs[0], singleZoom);
        } else {
            resultMap.fitBounds(L.latLngBounds(latLngs), { padding: [60, 60], maxZoom: 15 });
        }
    }, 100);
}

// スマホを縦⇔横にして画面の大きさが変わったら、結果の地図のズームをやり直す
window.addEventListener('resize', () => {
    clearTimeout(window.refitTimer);
    window.refitTimer = setTimeout(() => {
        if (lastFit && $('resultView').style.display === 'flex') {
            fitResultMap(lastFit.latLngs, lastFit.singleZoom);
        }
    }, 300); // 回転中に何回も呼ばれるので、落ち着いてから1回だけ
});

// guessしたあと、みんなを待ってる間はリザルト画面に自分のピンだけ出す
function showWaiting() {
    showView('result');
    $('resultView').classList.add('waiting');
    $('resultTitle').textContent = 'ラウンド ' + currentRound.round;

    ensureResultMap();
    resultLayer.clearLayers();
    const config = MAPS[currentRound.mapId];
    if (myPin) {
        L.marker(myPin, { icon: createCustomIcon() }).addTo(resultLayer);
        fitResultMap([myPin], Math.max(config.resultView[1], 6));
    } else {
        fitResultMap([L.latLng(config.resultView[0])], config.resultView[1]);
    }
    teammateGuesses.forEach(guess => addTeammateMarker(resultLayer, guess));

    resultAnimId++; // 前のラウンドのアニメーションが残ってたら止める
    resetScoreAnimation();
    $('resultMode').textContent = $('modeSelect').selectedOptions[0].textContent;
    renderHp(currentRound.hp, 'result');
    updateWaitingText();
}

function updateWaitingText() {
    $('resultWaiting').textContent = 'ほかの人を待ってるよ (' + guessedIds.length + '/' + state.players.length + '人)';
}

function showRoundResult(msg) {
    stopTimer();
    stopSE(countdownSound);
    countdownSound = null;
    stopMusic();
    lastResult = msg;
    showView('result');
    $('resultView').classList.remove('waiting');
    $('resultTitle').textContent = 'ラウンド ' + msg.round;

    ensureResultMap();
    resultLayer.clearLayers();

    const answer = L.latLng(msg.answer.lat, msg.answer.lng);
    const answerMarker = L.marker(answer).addTo(resultLayer);
    answerMarker.on('click', () => window.open(msg.answer.answerUrl, '_blank'));
    msg.results.forEach(r => {
        if (!r.guess) return;
        const guessLatLng = L.latLng(r.guess.lat, r.guess.lng);
        L.polyline([guessLatLng, answer], { color: TEAM_COLORS[r.team], weight: 2, opacity: 0.8, dashArray: '5 8' }).addTo(resultLayer);
        // 名前と点数 (チーム戦でメンバーそれぞれの点数がわかるように)
        L.circleMarker(guessLatLng, { radius: 8, color: 'white', weight: 2, fillColor: TEAM_COLORS[r.team], fillOpacity: 1 })
            .bindTooltip(r.name + '  ' + r.point, { permanent: true, direction: 'top', offset: [0, -8], className: 'party-tooltip' })
            .addTo(resultLayer);
    });

    // ズームは正解と、各チームで一番近かった人が入り切るように
    const points = [answer];
    ['blue', 'red'].forEach(team => {
        const best = msg.best[team];
        if (best && best.guess) points.push(L.latLng(best.guess.lat, best.guess.lng));
    });
    fitResultMap(points, 6);

    $('resultMode').textContent = $('modeSelect').selectedOptions[0].textContent;
    ['blue', 'red'].forEach(team => {
        const best = msg.best[team];
        $('resultDistance' + SIDES[team]).textContent = best && best.distance != null ? formatDistance(best.distance) : 'N/A';
        $('resultNearest' + SIDES[team]).textContent = best && best.guess ? best.name : '-';
    });

    $('resultMultiplier').textContent = msg.multiplier > 1 ? 'ダメージ ×' + msg.multiplier : '';
    $('nextButton').textContent = msg.gameOver ? '結果へ' : '次のラウンド';
    $('resultWaiting').textContent = isHost ? '' : 'ホストが次に進むのを待ってるよ';

    // HPバーは左右から、表は下から順番にスライドイン (クラスを付け直してアニメーションをやり直す)
    $('resultView').classList.remove('slide-in');
    void $('resultView').offsetWidth;
    $('resultView').classList.add('slide-in');

    playScoreAnimation(msg);
}

//================================================点数がぶつかってHPが削れるアニメーション================================================
let resultAnimId = 0; // 新しいアニメーションが始まったら古いのは止まる

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function centerOf(element) {
    const rect = element.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

// 飛んでいく数字の位置と大きさ
function flyFrame(point, scale, opacity) {
    return { transform: `translate(${point.x}px, ${point.y}px) translate(-50%, -50%) scale(${scale})`, opacity: opacity };
}

function resetScoreAnimation() {
    ['flyNumber', 'flyNumber2'].forEach(id => {
        $(id).getAnimations().forEach(animation => animation.cancel());
        $(id).style.display = 'none';
    });
    ['Blue', 'Red'].forEach(side => {
        const scoreElement = $('resultScore' + side);
        scoreElement.style.transition = 'none';
        scoreElement.style.opacity = 1;
        scoreElement.style.transform = 'none';
        scoreElement.textContent = '0';
    });
}

async function playScoreAnimation(msg) {
    const animId = ++resultAnimId;
    const alive = () => animId === resultAnimId;
    resetScoreAnimation();
    renderHp(msg.previousHp, 'result');

    const score = {
        blue: msg.best.blue ? msg.best.blue.point : 0,
        red: msg.best.red ? msg.best.red.point : 0
    };

    // HPバーが左右から入ってくる → 1秒後に表が下から
    playSE('Round Score Slide In');
    await sleep(1000);
    if (!alive()) return;
    playSE('Round Score Slide In Rows');

    // 1. 両方の点数が0から上がっていく (スコアの行が出てきてから)
    await sleep(500);
    if (!alive()) return;
    animateNumber($('resultScoreBlue'), score.blue, 1000);
    animateNumber($('resultScoreRed'), score.red, 1000);
    await sleep(1200);
    if (!alive()) return;

    if (!msg.loser) {
        // 引き分け: 両方の数字が真ん中に飛んでいってぶつかって消える
        if (score.blue > 0) await playTieAnimation(alive);
        return;
    }

    const winner = msg.loser === 'blue' ? 'red' : 'blue';
    const winElement = $('resultScore' + SIDES[winner]);
    const loseElement = $('resultScore' + SIDES[msg.loser]);
    const fly = $('flyNumber');

    // 2. 大きいほうがちょっと大きくなる
    winElement.style.transition = 'transform 0.3s ease, opacity 0.2s ease';
    winElement.style.transform = 'scale(1.1)';
    await sleep(350);
    if (!alive()) return;

    // 3. 数字が相手にぶつかりに行く (元の位置には半透明で残す)
    const from = centerOf(winElement);
    const to = centerOf(loseElement);
    fly.textContent = score[winner];
    fly.style.display = 'block';
    playSE('Round Score Damage Crash'); // 飛び始めと同時に鳴らす
    winElement.style.transform = 'scale(1)';
    winElement.style.opacity = 0.3;
    await fly.animate([flyFrame(from, 1.1, 1), flyFrame(to, 1.1, 1)],
        { duration: 260, easing: 'cubic-bezier(0.5, 0, 1, 0.6)', fill: 'forwards' }).finished;
    if (!alive()) return;

    // 4. ぶつかったら引き算した値になる (相手の数字はいったん消える)
    loseElement.style.transition = 'opacity 0.15s ease';
    loseElement.style.opacity = 0;
    fly.textContent = msg.damage;
    await fly.animate([flyFrame(to, 1.4, 1), flyFrame(to, 1, 1)],
        { duration: 220, easing: 'ease-out', fill: 'forwards' }).finished;
    await sleep(350);
    if (!alive()) return;

    // 5. 引き算した値がまっすぐ上のHPバーにぶつかって削れる (相手の元の数字は半透明で戻ってくる)
    const hpTarget = { x: to.x, y: centerOf($('resultHp' + SIDES[msg.loser] + 'Text')).y };
    loseElement.style.transition = 'opacity 0.4s ease';
    loseElement.style.opacity = 0.3;
    await fly.animate([flyFrame(to, 1, 1), flyFrame(hpTarget, 0.7, 1)],
        { duration: 300, easing: 'cubic-bezier(0.5, 0, 1, 0.6)', fill: 'forwards' }).finished;
    if (!alive()) return;
    renderHp(msg.hp, 'result');
    playSE('Round Score Damage Up');
    await fly.animate([flyFrame(hpTarget, 0.7, 1), flyFrame(hpTarget, 1.2, 0)],
        { duration: 300, easing: 'ease-out', fill: 'forwards' }).finished;
    if (!alive()) return;
    fly.style.display = 'none';
}

async function playTieAnimation(alive) {
    const blueElement = $('resultScoreBlue');
    const redElement = $('resultScoreRed');
    const flyBlue = $('flyNumber');
    const flyRed = $('flyNumber2');
    const fromBlue = centerOf(blueElement);
    const fromRed = centerOf(redElement);
    const middle = { x: (fromBlue.x + fromRed.x) / 2, y: fromBlue.y };

    flyBlue.textContent = blueElement.textContent;
    flyRed.textContent = redElement.textContent;
    flyBlue.style.display = 'block';
    flyRed.style.display = 'block';
    [blueElement, redElement].forEach(element => {
        element.style.transition = 'opacity 0.2s ease';
        element.style.opacity = 0.3;
    });

    const options = { duration: 300, easing: 'cubic-bezier(0.5, 0, 1, 0.6)', fill: 'forwards' };
    await Promise.all([
        flyBlue.animate([flyFrame(fromBlue, 1.1, 1), flyFrame(middle, 1.1, 1)], options).finished,
        flyRed.animate([flyFrame(fromRed, 1.1, 1), flyFrame(middle, 1.1, 1)], options).finished
    ]);
    if (!alive()) return;

    // ぶつかって消滅
    playSE('Round Score Tie Up');
    const vanish = { duration: 350, easing: 'ease-out', fill: 'forwards' };
    await Promise.all([
        flyBlue.animate([flyFrame(middle, 1.1, 1), flyFrame(middle, 1.8, 0)], vanish).finished,
        flyRed.animate([flyFrame(middle, 1.1, 1), flyFrame(middle, 1.8, 0)], vanish).finished
    ]);
    if (!alive()) return;
    flyBlue.style.display = 'none';
    flyRed.style.display = 'none';
}

function showGameOver(msg) {
    showView('gameOver');
    stopMusic();
    const me = state.players.find(p => p.id === myId);
    if (me) playSE(me.team === msg.winner ? 'Effect Game Won' : 'Effect Disqualified 2');
    $('winnerSub').textContent = me ? (me.team === msg.winner ? 'WIN' : 'LOSE') : '';
    $('winnerText').textContent = teamLabel(msg.winner) + ' の勝ち!';
    $('winnerText').className = msg.winner;
    $('gameOverWaiting').textContent = isHost ? '' : 'ホストがロビーに戻るのを待ってるよ';
}

//================================================キー操作================================================
document.addEventListener('keydown', event => {
    if (event.code !== 'Space' || event.target.tagName === 'INPUT') return;
    if ($('playView').style.display === 'block') {
        event.preventDefault();
        submitGuess(false);
    } else if ($('resultView').style.display === 'flex' && isHost) {
        event.preventDefault();
        hostNext();
    }
});

//================================================小物 (SingleGamePlay.jsと同じ計算)================================================
function pointCul(distance, mapSize) {
    let points = Math.round(Math.pow(0.99933, (((Math.max(0, distance - (Math.sqrt(mapSize))) / 1000) * (mapSize)) - 12708)));
    return Math.max(0, Math.min(5000, points));
}

function normalizeLongitude(lng) {
    return ((lng + 180) % 360 + 360) % 360 - 180;
}

function formatDistance(distance) {
    if (distance > 10000) {
        return Math.round(distance / 1000) + "km";
    } else if (distance > 1000) {
        return ((Math.round(distance / 100)) / 10) + "km";
    } else {
        return Math.round(distance) + "m";
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function createCustomIcon() {
    return L.icon({
        iconUrl: '../images/pin.png',
        iconSize: [20, 25],
        iconAnchor: [10, 26],
        popupAnchor: [0, -20]
    });
}

function addTiles(targetMap) {
    L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
        attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>",
        maxZoom: 20
    }).addTo(targetMap);
}

function animateNumber(element, target, duration) {
    const startTime = performance.now();
    function update() {
        const progress = Math.min((performance.now() - startTime) / duration, 1);
        element.textContent = Math.round(target * progress);
        if (progress < 1) requestAnimationFrame(update);
    }
    update();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//================================================最初の処理================================================
$('nameInput').value = localStorage.getItem('playerName') || '';
const urlCode = (new URLSearchParams(location.search).get('code') || '').toUpperCase();
$('codeInput').value = urlCode;
if (urlCode && $('nameInput').value) {
    // リンクから来たらそのまま参加 (リロードしたホストは部屋を作り直す)
    myName = $('nameInput').value;
    if (sessionStorage.getItem('hostCode') === urlCode) {
        hostParty(urlCode);
    } else {
        joinParty(urlCode);
    }
} else {
    showView('entry');
}
