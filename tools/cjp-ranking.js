// 日本 (Claudeセレクト) の地点を都道府県・市町村ごとに数えて、ランキングのファイルを作るスクリプト
// 使い方: node tools/cjp-ranking.js
// 結果は tools/cjp-ranking.md に書き出す (地名が入るのでファイルに出す)。画面には都道府県の件数だけ出す
// CJPlinks.js の pref / city (tools/annotate-cjp.js が付ける) を読むので、地点を足したらその後に実行する
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ctx = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'Resource/maplink/CJPlinks.js'), 'utf8'), ctx);
const spots = ctx.streetViews;
const known = spots.filter(s => s.pref);

// 件数の多い順に並べる
const rank = obj => Object.entries(obj).sort((a, b) => b[1] - a[1]);
const prefCount = {}, cityCount = {};
for (const s of known) {
    prefCount[s.pref] = (prefCount[s.pref] || 0) + 1;
    const c = cityCount[s.pref] = cityCount[s.pref] || {};
    c[s.city] = (c[s.city] || 0) + 1;
}
const prefs = rank(prefCount);

const lines = [`# 日本 (Claudeセレクト) の地点ランキング`, '', `データのある地点 ${known.length} 件 / 全 ${spots.length} 件`, '', `## 都道府県ランキング`, '', '| 順位 | 都道府県 | 件数 | 市町村の数 |', '|---|---|---|---|'];
prefs.forEach(([p, n], i) => lines.push(`| ${i + 1} | ${p} | ${n} | ${Object.keys(cityCount[p]).length} |`));
lines.push('', '## 都道府県ごとの市町村ランキング (上位10)', '');
for (const [p, n] of prefs) {
    lines.push(`### ${p} (${n} 件)`, '', '| 順位 | 市町村 | 件数 |', '|---|---|---|');
    rank(cityCount[p]).slice(0, 10).forEach(([c, m], i) => lines.push(`| ${i + 1} | ${c} | ${m} |`));
    lines.push('');
}
fs.writeFileSync(path.join(__dirname, 'cjp-ranking.md'), lines.join('\n'));
console.log(prefs.map(([p, n], i) => `${i + 1}.${p} ${n}`).join(' / '));
