// tools/cjp-found.json の地点を Resource/maplink/CJPlinks.js に書き足すスクリプト
// 使い方: node tools/build-cjp.js
// すでに CJPlinks.js にあるパノラマIDは飛ばすので、何回実行しても重複しない
const fs = require('fs');
const path = require('path');

const FOUND = path.join(__dirname, 'cjp-found.json');
const OUT = path.join(__dirname, '..', 'Resource/maplink/CJPlinks.js');

const found = JSON.parse(fs.readFileSync(FOUND, 'utf8'));
let src = fs.readFileSync(OUT, 'utf8');
// 既存のパノラマIDを集める
const have = new Set([...src.matchAll(/!1s([^!]+)!2m2/g)].map(m => m[1]));

// JPlinks.js と同じ形式の1件分を作る
const entry = f => `    {//${f.title}
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s${f.id}!2m2!1d${f.lat}!2d${f.lng}!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@${f.lat},${f.lng},3a,75y,90t/data=!3m4!1e1!3m2!1s${f.id}!2e0'
    },
`;

const add = found.filter(f => !have.has(f.id));
// 配列の最後の "];" の直前に足す
const block = '    //--------------------ここから自動収集 (tools/collect-cjp.js)\n' + add.map(entry).join('');
const i = src.lastIndexOf('];');
src = src.slice(0, i) + (src.includes('ここから自動収集') ? add.map(entry).join('') : block) + src.slice(i);
fs.writeFileSync(OUT, src);
console.log(`追加 ${add.length} 件`);
