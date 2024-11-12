const streetViews = [
    /*
    {
        embedUrl: '',
        answerUrl: '',
        lat:,
        lng:
    },
    */
    //===================================================
    //====================　　アジア　　====================
    //===================================================

    //--------ここからインドネシア.id--------
    {//ジャカルタ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731376448891!6m8!1m7!1s9hC8b_mkzPSLQibGb6zeaw!2m2!1d-6.167174711466791!2d106.7875837817412!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wShZmNgGZhkbU522A',
        lat: -6.1671747,
        lng:106.7875838
    },
    {//バリ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731383281933!6m8!1m7!1sbWjaDmbXTpUU2SiV2bzLiA!2m2!1d-8.516240367841542!2d115.1668193856281!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/8RjeKDhVTbWMzeBh7',
        lat:-8.5162404,
        lng:115.1668194
    },
    {//スマトラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731383568725!6m8!1m7!1sr4cGhbN2-JxQ0m12fV3xyg!2m2!1d3.596462457939239!2d98.6770682795509!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dFoLonjScDiFQTKC6',
        lat:3.5964625,
        lng:98.6770683
    },

    //--------ここからインド.in--------
    {//ニューデリー
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729656431149!6m8!1m7!1s2DxQbZenx4AaM1YXp2of8w!2m2!1d28.56691300292865!2d77.23432386645625!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CeTvrRn17XMbCmY99',
        lat: 28.566913,
        lng: 77.2343239
    },

    //--------ここから日本.jp--------
    {//北海道
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730093099776!6m8!1m7!1sxTNQRsULtWW24iZBt2E39w!2m2!1d43.07054473330154!2d141.3525311548342!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/iCydRAJpu21RcoDr5',
        lat: 43.0705447,
        lng: 141.3525312
    },
    {//網走
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730240943146!6m8!1m7!1sJmTm--1JVcI5BW4j8LyTLQ!2m2!1d44.02066332905149!2d144.2556661888877!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afvK1suFPEhdRNcb7',
        lat: 44.0206633,
        lng: 144.2556662
    },
    {//青森
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213836504!6m8!1m7!1sc9KKiw_g4hdRnXu7So3rTA!2m2!1d40.8248615168055!2d140.7394887906193!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/z2vb2XzfRuLCV8xd9',
        lat: 40.8248615,
        lng: 140.7394888
    },
    {//宮城
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730204517151!6m8!1m7!1sF7NHtI0thttmItvNAjaXlw!2m2!1d38.26017765071882!2d140.8861613652267!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/UzDAVfRa34YoC44n9',
        lat: 38.2601777,
        lng: 140.8861614
    },-
    {//千葉
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213923352!6m8!1m7!1sSPGgC6-EtKwa0tYSP3C-fw!2m2!1d35.61164523125404!2d140.1175861840636!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qJ6oxhqZjy5nb5WY7',
        lat: 35.6116452,
        lng: 140.1175862
    },
    {//東京
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730069828919!6m8!1m7!1sik3rTbfzp0-TAPzLWydrWQ!2m2!1d35.6817870240367!2d139.7647193792978!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PaMXJmkeVuj9X3KC8',
        lat: 35.681787,
        lng: 139.7647194
    },
    {//神奈川
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730468077957!6m8!1m7!1sT5_-4guzUcfDfG8miMURHA!2m2!1d35.46901272029854!2d139.6166553687639!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YsHrUfgFMzeLYmKB7',
        lat: 35.4690127,
        lng: 139.6166554
    },
    {//長野
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213988361!6m8!1m7!1sBJi44kPnNypZHhWI6qYtNw!2m2!1d36.64339538674999!2d138.187156680505!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Bh9eSWytZDcUVfhy6',
        lat: 36.6433954,
        lng: 138.1871567
    },
    {//愛知
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092741542!6m8!1m7!1s63ABdAOCxNeOxgQ6n94nug!2m2!1d35.17128764194855!2d136.8848857235975!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LQQYwxvyKRZzc1bB7',
        lat: 35.1712876,
        lng: 136.8848857
    },
    {//富山
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211302779!6m8!1m7!1sHNP7G0d48xhHFDzgLpjnDg!2m2!1d36.69861367477401!2d137.21103412974!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dZrmxRhNVwYN5VJ97',
        lat: 36.6986137,
        lng: 137.2110341
    },
    {//大阪
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092470154!6m8!1m7!1sKPk_SObjniAifv7MMBMulQ!2m2!1d34.70489316917189!2d135.4971172987883!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QTsDjCmPEV9ygwMdA',
        lat: 34.7048932,
        lng: 135.4971173
    },
    {//鳥取
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730794750400!6m8!1m7!1sDeEz563_NNe8VjfOnSsxWw!2m2!1d35.49536731660927!2d134.2292170086912!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Yt6wUqpSjGDxqkDs5',
        lat: 35.4953673,
        lng: 134.229217
    },
    {//岡山
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092956254!6m8!1m7!1sZiYFMUw8UhTMJNju3TtVwQ!2m2!1d34.66353145416075!2d133.9191741861175!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KkuuDh64z9xtoUR89',
        lat: 34.6635315,
        lng: 133.9191742
    },
    {//広島
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730106070847!6m8!1m7!1svAcoZT_hhMTjg2yrEIXg8g!2m2!1d34.39938125405674!2d132.4780077377843!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MK93dnpaJTsVKBzV7',
        lat: 34.3993813,
        lng: 132.4780077
    },
    {//香川
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730476378906!6m8!1m7!1sGlgVKgchnJLJd4Ff_a2WDQ!2m2!1d34.28881558129756!2d133.7943960330805!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LjoHpZzMZG432wE1A',
        lat: 34.2888156,
        lng: 133.794396
    },
    {//徳島
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213750470!6m8!1m7!1s5k6A-3ARjqFiZ-VPmCxNVA!2m2!1d34.07139852494615!2d134.5580897233915!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Vq745edwqLcCUijx6',
        lat: 34.0713985,
        lng: 134.5580897
    },
    {//長崎
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211391898!6m8!1m7!1sQdpBwq_om9JeQbMwkXMrAA!2m2!1d32.7514327790084!2d129.8721315304493!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nhnA9iGi7yubxskm9',
        lat: 32.7514328,
        lng: 129.8721315
    },
    {//鹿児島
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211532277!6m8!1m7!1sX0zK7pbTn1CesdpdCYvjGQ!2m2!1d31.58487360291157!2d130.5386978134463!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/f9pHYccd53nHRynE6',
        lat: 31.5848736,
        lng: 130.5386978
    },
    {//沖縄
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730093318134!6m8!1m7!1s50fsU3TQxzgGaG2w3WWbKA!2m2!1d26.21576506469355!2d127.6784788195732!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/HKePMZpUSEBaDcfg6',
        lat: 26.2157651,
        lng: 127.6784788
    },
    
    //--------ここからキルギス.kg--------
    {//ウランバートル
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730849320900!6m8!1m7!1sib9excEtkPkx4A8quVesFg!2m2!1d42.8806529823396!2d74.60485651175918!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/SDpEM1Uaca1WGoPc7',
        lat: 42.880653,
        lng: 74.6048565
    },

    //--------ここからカンボジア.kh--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731286573579!6m8!1m7!1s0U0_0FqsPM_OE_LSHBI9-Q!2m2!1d11.56771231209583!2d104.9179600943284!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/jHKzbsAFyhDy9Yhu8',
        lat:11.5677123,
        lng:104.9179601
    },

    {//--------ここからスリランカ.lk--------
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731280530719!6m8!1m7!1sIBsIUC8zJpb_iw-Fdj1NIg!2m2!1d7.241279199007866!2d80.21159448222103!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/8RJD1gq8aG9MouKUA',
        lat: 7.2412792,
        lng: 80.2115945
    },
    
    //--------ここからモンゴル.mn--------
    {//ウランバートル
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729725551265!6m8!1m7!1sZXGSC6WHAo_2b8nzXxVg1g!2m2!1d47.96254780674171!2d106.5924571145944!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/r5CnwUPguBETmYYFA',
        lat: 47.9625478,
        lng: 106.5924571
    },

    //--------ここからマレーシア.my--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731376111408!6m8!1m7!1ssxDLiAZOrpY1f9d7ImWFuQ!2m2!1d3.077297941527307!2d101.5867012855656!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/X3s47T8MZvFDaZ3Y8',
        lat: 3.0772979,
        lng:101.5867013
    },
    {//ジョホール
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731376226627!6m8!1m7!1sd8NCFRaNCKsjdCO9tv2sIQ!2m2!1d1.472794796070253!2d103.7623851460524!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hnK2EaMP9AuBod7CA',
        lat:1.4727948,
        lng:103.7623851
    },

    //--------フィリピン.ph--------
    {//マニラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730164947080!6m8!1m7!1sVwSLObEyK2XX92FqHuMkUA!2m2!1d14.6035901764576!2d120.9819792575408!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DA7bjsGksN4bj2qi6',
        lat: 14.6035902,
        lng: 120.9819793
    },
    {//南のカーメタ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731383794088!6m8!1m7!1s7AerXQyMLXEQKpVg4yDNFA!2m2!1d5.858317062451184!2d125.0554239539182!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/eGGgBbaiWsc7CuNe8',
        lat:5.8583171,
        lng:125.055424
    },

    //--------ここからカタール.qa--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729560118781!6m8!1m7!1szTkpakBCVSLjek5XvsjtNw!2m2!1d25.38993284962018!2d51.50754138133623!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/azwjRM8kv3qo1PT98',
        lat: 25.3899328,
        lng: 51.5075414
    
    },

    //--------ここからシンガポール.sg--------
    {//PIEの看板の眼の前
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731280686845!6m8!1m7!1stPcJQJFUVMNMnb4MWBXy-g!2m2!1d1.327447303574664!2d103.8677278805782!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Lhiy5c3JfUHdaEQW9',
        lat: 1.3274473,
        lng:103.8677279
    },
    {//シンガポール住宅街1
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731281035682!6m8!1m7!1stPmFRt8j1euca0xvhYHqnw!2m2!1d1.338608411329395!2d103.7226186222121!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/yaPappVTNheCUpsi9',
        lat: 1.3386084,
        lng:103.7226186
    },

    //--------ここからタイ.th--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731286744934!6m8!1m7!1sdDhsYGu1pRih8AzQflNlEA!2m2!1d13.73343454444623!2d100.5148942657133!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ssAjTF7Jisw6CCDaA',
        lat:13.7334345,
        lng:100.5148943
    },

    {//--------ここから台湾.tw--------
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731281695277!6m8!1m7!1sB43mXZ3Bd10sVkohoOjeGw!2m2!1d24.25437267831829!2d120.5249767535166!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/jeNvrmgf3csCa3F18',
        lat:24.2543727,
        lng:120.5249768
    },
    {//台北
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731282787914!6m8!1m7!1sACT1ix3kRR9-YBTMP9ZRvA!2m2!1d25.02058104649157!2d121.546744383985!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/JGe7eQkTzVgSzGhD8',
        lat:25.020581,
        lng:121.5467444
    },
    {//高雄
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731283009009!6m8!1m7!1sX-EA5XITS30ICBjGfJm7hg!2m2!1d22.63483956250418!2d120.300493470209!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/S7H12z3JSPAF13SB8',
        lat: 22.6348396,
        lng:120.3004935
    },

    //--------ここからウクライナ.ua--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729656827902!6m8!1m7!1sJWPyt8Vf7IvqHq87zVmOAQ!2m2!1d50.38800266542728!2d30.46096840738821!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/pLhg6wpQgnbniFDS7',
        lat: 50.3880027,
        lng: 30.4609684
    },

    /*
    {
        embedUrl: '',
        answerUrl: '',
        lat:,
        lng:
    },
    */

    //===================================================
    //====================　ヨーロッパ　====================
    //===================================================

    //--------ここからドイツ.de--------
    {//ライプツィヒ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730953219277!6m8!1m7!1sHn61sBgNnQagl57DJzSflQ!2m2!1d51.32949165707166!2d12.3463705182497!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zsyKMM6epPsjptDv6',
        lat: 51.3294917,
        lng: 12.3463705
    },
    
    //--------ここからデンマーク.dk--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731022597607!6m8!1m7!1sRCwtmFgsdFOyvJTcb0gH4w!2m2!1d55.66826139277358!2d12.57231476161392!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DUhVMTQT1BE9wgh9A',
        lat: 55.6682614,
        lng: 12.5723148
    },

    //--------ここからスペイン.es--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729570944819!6m8!1m7!1sMuMJMtYA0q-PLrO5vAEhGg!2m2!1d37.81013179975706!2d-6.203948049197485!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afQXokzsvoanKNoy8',
        lat: 37.8101318,
        lng: -6.203948
    },

    //--------ここからフィンランド.fi--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730193325092!6m8!1m7!1s83u3-pQ6NY2ri1ww2LZ-sQ!2m2!1d60.29693297284877!2d24.95982202601304!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FCFEjV8gfyswvAyj6',
        lat: 60.296933, 
        lng :24.959822
    },

    //--------ここからフランス.fr--------
    {//パリ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729658217941!6m8!1m7!1sfp2pcJ4BELoHlbGGYN7_nQ!2m2!1d48.89104847862511!2d2.292226165416838!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/SGbufwnVcjREf84Y8',
        lat: 48.8910485,
        lng: 2.2922262
    },

    //--------ここからグリーンランド.gl--------
    {//ヌーク
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563539845!6m8!1m7!1shG4TB3aG-XbEl87b-3yyoQ!2m2!1d64.16679039184727!2d-51.73080525477549!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/godEVoM9C4Z57Fsa8',
        lat: 64.1667904,
        lng: -51.7308053
    },
    
    //--------ここからギリシャ.gr-------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730475857388!6m8!1m7!1sfZBAUZ8m94InC4FrW_-1dQ!2m2!1d37.96387129659052!2d23.72467432929581!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/T6W9uhEXrpSqkJYD7',
        lat:37.9638713,
        lng:23.7246743
    },
    
    //-------ここからサウスジョージア島とサンドイッチ諸島.gs-------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730851592851!6m8!1m7!1sqIs-d-TMA1H_l3Lay3iybw!2m2!1d-54.01491198290299!2d-37.6907791151887!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dzd8WBNR4oLXEAvp7',
        lat: -54.014912,
        lng: -37.6907791
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730852179072!6m8!1m7!1sx6jnWBOp2VG7JCQiycMb0Q!2m2!1d-54.03007679187269!2d-37.25726271693835!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nuRhw6iSbb75q3na6',
        lat: -54.0300768,
        lng: -37.2572627
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730865451523!6m8!1m7!1sCNDEaZelv4b1cBWr4nY9SQ!2m2!1d-54.12752787410584!2d-36.6687093157208!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tvMUntxnb58kBpMw9',
        lat:-54.1275279,
        lng:-36.6687093
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730865652538!6m8!1m7!1s-Acjg359YnvZdJaBBjoH_A!2m2!1d-54.28035800006958!2d-36.5078000894682!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/8G4EdEHNJ85tdkcH8',
        lat:-54.280358,
        lng:-36.5078001
    },
    
    //--------ここからアイルランド.ie--------
    {//ダブリン
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729658345150!6m8!1m7!1sxq0uletp3_1DPdVOyTtuYg!2m2!1d53.36167201463208!2d-6.25947547839687!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/oMsPFzPNtCE41RBbA',
        lat: 53.361672,
        lng: -6.2594755
    },

    //--------ここからマン島.im--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730935825191!6m8!1m7!1shkMFfJWXyuZb5S2hXe9HWQ!2m2!1d54.15279036757472!2d-4.480989815644508!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tkS64hQhfWNqY4ns5',
        lat: 54.1527904,
        lng: -4.4809898
    },

    //--------ここからアイスランド.is--------
    {//南部
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563312865!6m8!1m7!1sHq-eAzrdbk3H5Lte_fKWSQ!2m2!1d63.69234455731127!2d-18.33212598442128!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vUVfMvtm5Ki6Q7xR7',
        lat: 63.6923446,
        lng: -18.332126
    },

    //--------ここからイタリア.it--------
    {//ローマ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729575410471!6m8!1m7!1saYiLpvtLay04x92TQ4mM8A!2m2!1d41.86956580344217!2d12.52999692110261!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bSMeDbXUtjPurKyr7',
        lat: 41.8695658,
        lng: 12.5299969
    },

    //--------ここからジャージー.je--------
    {//ローマ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730935403306!6m8!1m7!1sFvhXKYqpGc3YgLJlGDhEGA!2m2!1d49.18346502473231!2d-2.109763193128203!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LxNBfxbmTGwFu2bk8',
        lat: 49.183465,
        lng: -2.1097632
    },

    //--------ここからラトビア.lv--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731023919002!6m8!1m7!1sK9PwGM5XOVV7biqeRlK_Ew!2m2!1d56.94191100470841!2d24.11405855890634!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/n33ApsDppUsJ14Rh8',
        lat: 56.941911,
        lng: 24.1140586
    },

    //--------ここからモナコ.mc--------
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729648670195!6m8!1m7!1sNTyNDL4-PDWmO0U608G7_A!2m2!1d43.73442001833539!2d7.426330508367622!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qkmFz7rPtiejJ3DN6',
        lat: 43.73442,
        lng: 7.4263305
    },

    //--------ここからオランダ.nl--------
    {//アムステルダム
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729726015572!6m8!1m7!1s5f9HiIM6MXnT6D2mRUSG2w!2m2!1d52.3596726490809!2d4.925485699065721!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DKqcADvro9W3orhHA',
        lat: 52.3596726,
        lng: 4.9254857
    },

    //--------ここからノルウェ.noー--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731384281627!6m8!1m7!1sVTdwEa8blIj5CY54N-iq5w!2m2!1d59.90821562159554!2d10.75605157650714!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/5TqhV4BF9iKoziei8',
        lat:59.9082156,
        lng:10.7560516
    },

    //--------ここからポーランド.pl--------
    {//ワルシャワ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729742726063!6m8!1m7!1sc-S5trkcikMkCJGYr3Lcrg!2m2!1d52.24461726825473!2d21.01023938393933!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1Vv3ysHaaYEzCN3A8',
        lat: 52.2446173,
        lng: 21.0102394
    },

    //--------ここからポルトガル.pt--------
    {//リスボン
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730953083810!6m8!1m7!1spR83RAAKK26hZ9QzJIkkXw!2m2!1d41.76849421387443!2d-7.491076093421399!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zBBp4dsjtKpm5GpQ8',
        lat: 38.7340523,
        lng: -9.1497283
    },
    {//北の山の方
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730952945248!6m8!1m7!1s1rvdPwAsRj-x6lwZeKFtag!2m2!1d38.73405233892276!2d-9.149728270952693!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MTyX783k4smhTLEs7',
        lat: 41.7684942,
        lng: -7.4910761
    },

    //--------ここからルーマニア.ro--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730193002233!6m8!1m7!1sjvIDu8PM_CkOmMePeZNgAw!2m2!1d44.42275096069515!2d26.02235891062536!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/q3xcFoKQyFNRsrz96',
        lat: 44.422751, 
        lng: 26.0223589
    },

    //--------ここからサン・マリノ.sm--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729640408382!6m8!1m7!1syzk8hKHKoH6_tblpLXgqnA!2m2!1d43.9768262380029!2d12.48695842099183!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LtcHWZfwqwsrbpZJA',
        lat: 43.9768262,
        lng: 12.4869584
    },

    /*
    {
        embedUrl: '',
        answerUrl: '',
        lat:,
        lng:
    },
    */

    //===================================================
    //====================　オセアニア　====================
    //===================================================


    //===================================================
    //===================　　アフリカ　=====================
    //===================================================
    //--------ここからマダガスカル.mg--------
    {//アンタナナリボ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748056745!6m8!1m7!1s6za1FUktl2TfG4VvuQQymg!2m2!1d-18.92413604984545!2d47.5303773151325!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/mq85emWsLafHGUgB6',
        lat: -18.924136,
        lng: 47.5303773
    }, 
    {//アンドランジトラ国立公園
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748169063!6m8!1m7!1sw1IFREiC31x8UdNct80Ajg!2m2!1d-22.09643716388154!2d46.76869654909648!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rVVMPr38iQb4vsoh6',
        lat: -22.0964372,
        lng: 46.7686965
    }
    ,{//国立公園の岩多め1
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730726253071!6m8!1m7!1s4D7-lrcLTiafY6efa0FVlg!2m2!1d-22.09642316343795!2d46.76034570742027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/xWHRfSMN5b7bp9nL7',
        lat: -22.0964232,
        lng:46.7603457
    }, 
    {//RN8
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729558515149!6m8!1m7!1sT3l8G1-u-whp-D_ON55Ahg!2m2!1d-20.24951093684258!2d44.41981496911148!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CDihGVEvPw7FqANb6',
        lat: -20.2495109,
        lng: 44.419815
    }, 
    {//RN8(徒歩の部分)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730726619193!6m8!1m7!1seL-3OGU-czYrogEkL5rN7g!2m2!1d-20.14838633255006!2d44.51538865537876!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/x5xiefg2yMbEnHeA6',
        lat: -20.1483863,
        lng: 44.5153887
    }, 
    {//トゥリアラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748280172!6m8!1m7!1sqphmHGtMyYIaivwXMslUnw!2m2!1d-23.35543941590885!2d43.66870509739654!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sbDbVz9FUCLNjZ77A',
        lat: -23.3554394,
        lng: 43.6687051
    }
    ,{//トゥリアラ2
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724321508!6m8!1m7!1sc_X4NDZzl3-3FOq_2dYPYA!2m2!1d-23.35365062068085!2d43.66923911621851!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wBCc5KwziNvP1DQL9',
        lat: -23.3536506,
        lng:43.6692391
    },
     {//女が多いあの船
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748408119!6m8!1m7!1sVg5fwWp5wLwMtCHhNAWn9A!2m2!1d-13.47998450787207!2d48.37172165082281!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bfeN9cythqbN1GiDA',
        lat: -13.4799845,
        lng: 48.3717217
    }, 
    {//ディストリクト・ダンバンジャ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748562605!6m8!1m7!1sask63xylYk6fD8PUJ1muQA!2m2!1d-13.67461862265171!2d48.45172214761642!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/X6dqrR3krNra2FV37',
        lat: -13.6746186,
        lng: 48.4517221
    },
    {//ディストリクト・ダンバンジャ(橋の近く)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725999854!6m8!1m7!1sFrmp1NylpUpFY_bYE9zHFw!2m2!1d-13.68730411938349!2d48.45371870309766!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AG2pR2neruMsWTCw7',
        lat: -13.6873041,
        lng: 48.4537187
    },
    {//ディストリクト・ダンバンジャ近くの海(小型船)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730815861574!6m8!1m7!1sP7Qpa2HiIWquuRl5Tu4eGg!2m2!1d-13.58267811928074!2d48.39504656283499!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AG2pR2neruMsWTCw7',
        lat: -13.5826781,
        lng: 48.3950466
    },
    {//汚い浜
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724690462!6m8!1m7!1sY0dpY8sDH_LNFWpjuNoavw!2m2!1d-20.74116513783829!2d43.99953603075323!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/D7kAUChNssFu7wWn7',
        lat: -20.7411651,
        lng:43.999536
    }, 
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730090709878!6m8!1m7!1stKUM144w5Yf-08d0HkQm7Q!2m2!1d-18.58059556766276!2d43.92752626189974!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gLVutAhFU4ouzbtP7',
        lat: -18.5805956,
        lng: 43.9275263
    }, 
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730091165054!6m8!1m7!1sbArHCxPbFNF2EzbKkHtNHg!2m2!1d-18.31949764124678!2d43.74608570625899!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BUnTnA9stRoK17ed7',
        lat: -18.3194976,
        lng: 43.7460857
    }
    ,{//アンダヴァドアカ海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724798556!6m8!1m7!1sfvxJIH_AYPDtvSUJ9BuI8g!2m2!1d-21.9716415921272!2d43.25675981461625!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BDnDxdNteiu5t5g67',
        lat: -21.9716416,
        lng:43.2567598
    }
    ,{//アンダヴァドアカ海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724798556!6m8!1m7!1sfvxJIH_AYPDtvSUJ9BuI8g!2m2!1d-21.9716415921272!2d43.25675981461625!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BDnDxdNteiu5t5g67',
        lat: -21.9716416,
        lng:43.2567598
    }
    ,{//アンダヴァドアカ乾燥地面
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730726349694!6m8!1m7!1sYcraxSQ6om396c4rFkzeOw!2m2!1d-22.05544579891835!2d43.26221641113803!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YUGu4BzuxfV2iCFW7',
        lat: -22.0554458,
        lng:43.2622164
    }
    ,{//乾いた荒地
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724885388!6m8!1m7!1sJbBAm-TAz9nigyqlsNcMjg!2m2!1d-23.55213227050574!2d43.77643510193955!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Zi3TzSsUVWKMfFvL6',
        lat: -23.5521323,
        lng:43.7764351
    }
    ,{//トゥリアラ近くの河口
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724980077!6m8!1m7!1sp6sxi7zs5CVzZ5-xXTpJEg!2m2!1d-23.56760442744431!2d43.76168480064482!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KDc7UPEnUiKqGwkY6',
        lat: -23.5676044,
        lng:43.7616848
    }
    ,{//ディストリクトしたの村
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725145187!6m8!1m7!1sbjFKsRRqHgscPLUPqGBYPg!2m2!1d-13.81064243158316!2d48.47175577273575!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/kVrWXLnxrJk8ArzEA',
        lat: -13.8106424,
        lng:48.4717558
    }
    ,{//ディストリクトしたの川
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725329884!6m8!1m7!1siEc2MIPx1Y2m-yEMvyBFDg!2m2!1d-13.75537784822737!2d48.46022392238019!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dQL9R3eWZV2kiFZw5',
        lat: -13.7553778,
        lng:48.4602239
    }
    ,{//ディストリクトしたの川(徒歩)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730816157837!6m8!1m7!1szYWlkmEOg_grMNGFz6BbNA!2m2!1d-13.75094602023101!2d48.46522753918993!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DzcFBHHXK65qmnsq9',
        lat: -13.750946,
        lng: 48.4652275
    }
    ,{
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725856853!6m8!1m7!1s_yXLjUQXdOUrC8ocOpM0kw!2m2!1d-23.57253966247112!2d43.76202358662786!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sYbjP1zVKup5JBxR7',
        lat: -23.5725397,
        lng:43.7620236
    },

    //--------ここからナイジェリア.ng--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563232545!6m8!1m7!1sV5ElpS1anDSPuh65RNAb0g!2m2!1d9.094980378230119!2d7.215790133775001!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AB7VPEe82jXhudut7',
        lat: 9.0949804,
        lng: 7.2157901
    },

    //--------ここからケニア.ke-------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730176695456!6m8!1m7!1s0GYgx78myS336dPpu06SSw!2m2!1d-1.519615600517721!2d37.27084692171411!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FgbHnVj2uzCH81MX6',
        lat: -1.5196156,
        lng: 37.2708469
    },

    //--------ここからウガンダ.ug-------
    /*{
        embedUrl: '',
        answerUrl: '',
        lat: ,
        lng: 
    },*/

    {//--------ここから南アフリカ.za--------
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729725687548!6m8!1m7!1sJC7PPXTQl1RAS-trNwE70Q!2m2!1d-28.49886343579033!2d26.99809079000054!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hvsM1v3PVBJLsK427',
        lat: -28.4988634,
        lng: 26.9980908
    },
    
    //--------ここからサントメ・プリンシペ.st--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729655114430!6m8!1m7!1sNYXFxKMllTPtZcgq6HZHjg!2m2!1d0.3579978143717866!2d6.722748196853231!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qf6JhhfnCCmJkFVZA',
        lat: 0.3579978,
        lng: 6.7227482

    },
    
    //--------ここからレユニオン.re--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729655769786!6m8!1m7!1sbBD4AU9q1nXXpbjwXteOhQ!2m2!1d-21.32995478022573!2d55.46989004834647!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/q8c5SfeTqu5Bn3An7',
        lat: -21.3299548,
        lng: 55.46989
    },

    //===================================================
    //====================　北アメリカ　====================
    //===================================================
    //--------ここからカナダ.ca--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730165223753!6m8!1m7!1srmzXFoPGeT7zejn063vDNw!2m2!1d46.76594218226704!2d-71.48684093299886!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ZCN8iwDkumWF2gyx6',
        lat: 46.7659422,
        lng: -71.4868409
    },

    //--------ここからメキシコ.mx--------
    {//メキシコシティ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729653584123!6m8!1m7!1sVKv7rRP2Kzyh2U_0rjym4A!2m2!1d19.42611476011491!2d-99.20435414100933!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ySa7ZPsFAA9Py7C69',
        lat: 19.4261148,
        lng: -99.2043541
    }, {//ラス・コロラダス(ピンクの湖)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730158303898!6m8!1m7!1sVnBV5YfTji1v6Ry4EHfjYg!2m2!1d21.60256038894161!2d-87.99363180407344!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/opRB5QCgz5s5SH437',
        lat: 21.6025604,
        lng: -87.9936318
    },

    //--------ここからアメリカ合衆国.us--------
    {//ウィスコン信州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731126965609!6m8!1m7!1sfDWBnNsEAzyw6zb9akshvw!2m2!1d44.77690521178598!2d-88.60932115162596!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/7d22G6i21dEPohZu9',
        lat:44.7769052,
        lng:-88.6093212
    },
    {//カリフォルニア州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731127212076!6m8!1m7!1sT50Z24tlJ6xTex8NbW93hg!2m2!1d33.6034392400278!2d-117.9002730601454!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/aYnsziKzWqd4bCGP6',
        lat:33.6034392,
        lng:-117.9002731
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731127317463!6m8!1m7!1s58ceKGgestjqp3_BVatcIw!2m2!1d37.77226706933519!2d-122.2284099924836!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cY4L517nsR9nwL969',
        lat:37.7722671,
        lng:-122.22841
    },
    {//サウスダコタ州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731126731367!6m8!1m7!1snykNrMu0FmTXqAWRas3c5w!2m2!1d44.31673724473055!2d-96.78114503322715!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/fF4iz5y2EZn8AnY59',
        lat: 44.3167372,
        lng:-96.781145
    },
    {//フロリダ州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731127114962!6m8!1m7!1sk_KQTQqQTiJrufcKfezHTg!2m2!1d28.30079235611648!2d-81.40290812777127!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hHoi7QJxf981VE1L7',
        lat:28.3007924,
        lng:-81.4029081
    },
    {//ノースカロライナ州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731127054910!6m8!1m7!1s4mDjLy-ah6eQJ3ejPE3Kyg!2m2!1d36.00091190958778!2d-78.90856756808284!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/29Qq2CSm4acc65Dy9',
        lat:36.0009119,
        lng:-78.9085676
    },

    //--------ここからグアテマラ.gt--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563706909!6m8!1m7!1sC_Q94zAtV9DqV1-AvPqjCQ!2m2!1d15.21436890158927!2d-91.51419112699985!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/yo1NZpaFPDc9wd3E7',
        lat: 15.2143689,
        lng: -91.5141911
    },

    
    //--------ここからアメリカ領ヴァージン諸島.vi--------
    {//南島赤い車
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730166365057!6m8!1m7!1s7y3O4IMLiCioiMbmHG13hA!2m2!1d17.71608801560808!2d-64.81447066827184!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CuqT8mqsN3QPv5Sd7',
        lat: 17.716088,
        lng: -64.8144707
    },
    {//北島白車長アンテナ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730166796795!6m8!1m7!1s0pytOFWiLWufUU3BfY7JZw!2m2!1d18.33632946052731!2d-64.91732838896468!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/9RhDgK2bLkdCbupR8',
        lat: 18.3363295,
        lng: -64.9173284
    },

    //--------ここからプエルト・リコ.pr--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730165708931!6m8!1m7!1sILbk5scQ7ZCKxUC_dblnTg!2m2!1d18.4160556530997!2d-65.98835183608776!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/W6HLbdEnTs6pibTz9',
        lat: 18.4160557,
        lng: -65.9883518
    },

    //===================================================
    //====================　南アメリカ　====================
    //===================================================
    //--------ここからアルゼンチン.ar--------
    {//ブエノスアイレス
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729654026425!6m8!1m7!1sT5A39ulw7gBKol0sBC7mmw!2m2!1d-34.60988419369181!2d-58.45087021634892!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/n42KagaQmE1rnFqm9',
        lat: -34.6098842,
        lng: -58.4508702
    },

    //--------ここからボリビア.bo--------
    {//ラパス
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729653783043!6m8!1m7!1se-XFAAI2ASLqHDbCSl296Q!2m2!1d-16.48706056494146!2d-68.12913546847376!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PavGen7ZJ3FChPoz7',
        lat: -16.4870606,
        lng: -68.1291355
    },
    
    //--------ここからエクアドル.ec--------
    {//ガラパゴス
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729654365050!6m8!1m7!1s34FrRPdaWCjZwM7hMT3S-w!2m2!1d-0.3939843952755621!2d-91.00094057538234!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/yYzvpbQu6DD7U6h79',
        lat: -0.3939844,
        lng: -91.0009406
    },
    //--------ここからペルー.pe------
    {//アンカシュの赤い
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730475017849!6m8!1m7!1sLdo9EmtDndA4gmb773F8ng!2m2!1d-9.220379656490188!2d-77.82253136082498!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/au7YSGV3jPSjjvnj8',
        lat: -9.2203797,
        lng: -77.8225314
    },
    /*
    {
        embedUrl: '',
        answerUrl: '',
        lat:,
        lng:
    },
    */
];
