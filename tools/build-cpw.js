// tools/cpw-found.json の地点から Resource/maplink/CPWlinks.js を作るスクリプト
// 使い方: node tools/build-cpw.js
// 手で足した地点はないので、毎回 cpw-found.json の中身で丸ごと作り直す (収集の途中でも何回実行してもよい)
const fs = require('fs');
const path = require('path');

const FOUND = path.join(__dirname, 'cpw-found.json');
const OUT = path.join(__dirname, '..', 'Resource/maplink/CPWlinks.js');

const found = JSON.parse(fs.readFileSync(FOUND, 'utf8'));
// 国・州・地域・町までの距離 (tools/annotate-cpw.js で作る。なければ付けない)
const ADMIN_FILE = path.join(__dirname, 'cpw-admin.json');
const admin = fs.existsSync(ADMIN_FILE) ? JSON.parse(fs.readFileSync(ADMIN_FILE, 'utf8')) : {};

// 文字列を JS の文字列として書けるようにする
const q = s => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
// データの1行を作る (データがない地点は何も付けない)
const data = a => a
    ? `,\n        country: ${q(a.country)}, code: ${q(a.code)}, state: ${q(a.state)}, region: ${q(a.region)}, townKm: ${a.townKm}, cityKm: ${a.cityKm}`
    : '';

// JPlinks.js と同じ形式の1件分を作る (コメントは地名、その後ろに国や地方)
const entry = f => `    {//${f.title} (${f.sub})
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s${f.id}!2m2!1d${f.lat}!2d${f.lng}!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@${f.lat},${f.lng},3a,75y,90t/data=!3m4!1e1!3m2!1s${f.id}!2e0'${data(admin[f.id])}
    },
`;

const src = `// 世界CPW (Claude Picked World) の地点データ
// tools/collect-cpw.js で公式ストリートビュー (!2e0) だけを自動で集めたもの
// ARWlinks.js とパノラマIDが重複しないようにチェック済み
// このファイルは tools/build-cpw.js で作り直すので、手で直さないこと
var streetViews = [
${found.map(entry).join('')}];
`;
fs.writeFileSync(OUT, src);
console.log(`書き出し ${found.length} 件`);
