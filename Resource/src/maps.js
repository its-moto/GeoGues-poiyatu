// マップ一覧 (game.html?map=<キー> で選ぶ)
// file: maplink内の地点データ, view/resultView: [中心, ズーム], mapSize: 点数計算の補正値
const MAPS = {
    world: {
        name: 'A Random picked World',
        file: 'ARWlinks.js',
        view: [[0, 0], 1],
        resultView: [[20, 0], 2],
        mapSize: 1
    },
    japan: {
        name: '日本',
        file: 'JPlinks.js',
        view: [[37, 135], 4],
        resultView: [[38, 138], 5],
        mapSize: 7
    },
    urbanjapan: {
        name: '日本都市部',
        file: 'AUJlinks.js',
        view: [[37, 135], 4],
        resultView: [[38, 138], 5],
        mapSize: 7
    },
    madagascar: {
        name: 'マダガスカル',
        file: 'MGlinks.js',
        view: [[-19, 46.7], 5],
        resultView: [[-22, 48.3], 5],
        mapSize: 7.35
    },
    europe: {
        name: 'ヨーロッパ',
        file: 'EUlinks.js',
        view: [[50, 10], 3],
        resultView: [[50, 10], 3],
        mapSize: 70
    },
    sanmarino: {
        name: 'サン・マリノ',
        file: 'SMlinks.js',
        view: [[43.94, 12.47], 12],
        resultView: [[44, 12.5], 12],
        mapSize: 1000
    },
    okayama: {
        name: '岡山市',
        file: 'OkayamaCity.js',
        view: [[34.65, 133.9], 13],
        resultView: [[34.7, 133.9], 13],
        mapSize: 700
    },
    sdf: {
        name: 'SDF',
        file: 'SDFlinks.js',
        view: [[37, 135], 4],
        resultView: [[38, 138], 5],
        mapSize: 7
    },
    // Claudeが公式ストリートビューから選んだ日本の地点 (設定は日本マップと同じ)
    claudejapan: {
        name: '日本 (Claudeセレクト)',
        file: 'CJPlinks.js',
        view: [[37, 135], 4],
        resultView: [[38, 138], 5],
        mapSize: 7
    }
};
