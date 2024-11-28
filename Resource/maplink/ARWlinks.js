const streetViews = [
    //===================================================
    //====================　　アジア　　====================
    //===================================================

    //--------ここからインドネシア.id--------
    {//ジャカルタ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731376448891!6m8!1m7!1s9hC8b_mkzPSLQibGb6zeaw!2m2!1d-6.167174711466791!2d106.7875837817412!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wShZmNgGZhkbU522A'
    },
    {//バリ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731383281933!6m8!1m7!1sbWjaDmbXTpUU2SiV2bzLiA!2m2!1d-8.516240367841542!2d115.1668193856281!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/8RjeKDhVTbWMzeBh7'
    },
    {//スマトラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731383568725!6m8!1m7!1sr4cGhbN2-JxQ0m12fV3xyg!2m2!1d3.596462457939239!2d98.6770682795509!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dFoLonjScDiFQTKC6'
    },
    //--------ここからイスラエル.il--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731725753050!6m8!1m7!1s58_dAa7vYQLBxJqJ0gxM0w!2m2!1d32.07615366551213!2d34.78151282297515!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nDgCoAfCnuQvwmi6A'
    },

    //--------ここからインド.in--------
    {//ニューデリー
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729656431149!6m8!1m7!1s2DxQbZenx4AaM1YXp2of8w!2m2!1d28.56691300292865!2d77.23432386645625!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CeTvrRn17XMbCmY99'
    },

    //--------ここから日本.jp--------
    //-----ここから北海道-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730093099776!6m8!1m7!1sxTNQRsULtWW24iZBt2E39w!2m2!1d43.07054473330154!2d141.3525311548342!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/iCydRAJpu21RcoDr5'
    },
    {//網走
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730240943146!6m8!1m7!1sJmTm--1JVcI5BW4j8LyTLQ!2m2!1d44.02066332905149!2d144.2556661888877!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afvK1suFPEhdRNcb7'
    },
    //-----ここから青森-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213836504!6m8!1m7!1sc9KKiw_g4hdRnXu7So3rTA!2m2!1d40.8248615168055!2d140.7394887906193!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/z2vb2XzfRuLCV8xd9'
    },
    //-----ここから宮城-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730204517151!6m8!1m7!1sF7NHtI0thttmItvNAjaXlw!2m2!1d38.26017765071882!2d140.8861613652267!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/UzDAVfRa34YoC44n9'
    },
    //-----ここから秋田-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731513671722!6m8!1m7!1sz1OOyoddpz1pwFLMC46ZhQ!2m2!1d39.71688777427755!2d140.1485232960538!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EvDVNFCsErbzW5yT9'
    },
    //-----ここから群馬-----
    {//高崎
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514036874!6m8!1m7!1ssaQfd-4UFKnVBNERfqp8ug!2m2!1d36.317049583334!2d139.0142303035027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MQUoAP7Qt3FKnQdG8'
    },
    //-----ここから栃木-----
    {//宇都宮
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514114348!6m8!1m7!1sq_A8gKbstItEzswoXUy4wA!2m2!1d36.55842632753073!2d139.8958725886651!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LTAFQYjFbbzLgbcz6'
    },
    //-----ここから栃木-----
    {//水戸
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514216146!6m8!1m7!1sePu5QagbJM7xDQdUt7zu9Q!2m2!1d36.36608976653896!2d140.4752483639899!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t6MfDPkAAiCScR9bA'
    },{
        embedUrl: '"https://www.google.com/maps/embed?pb=!4v1731514357730!6m8!1m7!1s590FgmqG6uU10IcS3HhDmA!2m2!1d36.08521950863133!2d140.1167654746796!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/kizU77nyxqkZzqZ17'
    },
    //-----ここから千葉-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213923352!6m8!1m7!1sSPGgC6-EtKwa0tYSP3C-fw!2m2!1d35.61164523125404!2d140.1175861840636!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qJ6oxhqZjy5nb5WY7'
    },
    //-----ここから東京-----
    {//東京駅
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730069828919!6m8!1m7!1sik3rTbfzp0-TAPzLWydrWQ!2m2!1d35.6817870240367!2d139.7647193792978!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PaMXJmkeVuj9X3KC8'
    },
    //-----ここから神奈川-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730468077957!6m8!1m7!1sT5_-4guzUcfDfG8miMURHA!2m2!1d35.46901272029854!2d139.6166553687639!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YsHrUfgFMzeLYmKB7'
    },
    //ここから静岡
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514653490!6m8!1m7!1sNtiNNuMEC7wL59VoFL2OmQ!2m2!1d34.96924411062385!2d138.3832420292492!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Wzy8NdaQuopeSQYd6'
    },
    //-----ここから富山-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211302779!6m8!1m7!1sHNP7G0d48xhHFDzgLpjnDg!2m2!1d36.69861367477401!2d137.21103412974!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dZrmxRhNVwYN5VJ97'
    },
    //-----ここから長野-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213988361!6m8!1m7!1sBJi44kPnNypZHhWI6qYtNw!2m2!1d36.64339538674999!2d138.187156680505!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Bh9eSWytZDcUVfhy6'
    },
    //-----ここから愛知-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092741542!6m8!1m7!1s63ABdAOCxNeOxgQ6n94nug!2m2!1d35.17128764194855!2d136.8848857235975!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LQQYwxvyKRZzc1bB7'
    },
    //-----ここから滋賀-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514757434!6m8!1m7!1sgCRthnLDs9CiiCTOah6vwQ!2m2!1d35.00173901216767!2d135.873399573357!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DJFAaGCRPHdUfvkW9'
    },
    //-----ここから大阪-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092470154!6m8!1m7!1sKPk_SObjniAifv7MMBMulQ!2m2!1d34.70489316917189!2d135.4971172987883!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QTsDjCmPEV9ygwMdA'
    },
    //-----ここから鳥取-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730794750400!6m8!1m7!1sDeEz563_NNe8VjfOnSsxWw!2m2!1d35.49536731660927!2d134.2292170086912!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Yt6wUqpSjGDxqkDs5'
    },
    //-----ここから岡山-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092956254!6m8!1m7!1sZiYFMUw8UhTMJNju3TtVwQ!2m2!1d34.66353145416075!2d133.9191741861175!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KkuuDh64z9xtoUR89'
    },
    //-----ここから広島-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730106070847!6m8!1m7!1svAcoZT_hhMTjg2yrEIXg8g!2m2!1d34.39938125405674!2d132.4780077377843!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MK93dnpaJTsVKBzV7'
    },
    //-----ここから香川-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730476378906!6m8!1m7!1sGlgVKgchnJLJd4Ff_a2WDQ!2m2!1d34.28881558129756!2d133.7943960330805!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LjoHpZzMZG432wE1A'
    },
    //-----ここから徳島-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213750470!6m8!1m7!1s5k6A-3ARjqFiZ-VPmCxNVA!2m2!1d34.07139852494615!2d134.5580897233915!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Vq745edwqLcCUijx6'
    },
    //-----ここから愛媛-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731513869444!6m8!1m7!1sRdnv-gcA2p1E3w-HIcO7aQ!2m2!1d33.83598703164661!2d132.7586934373035!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LZsuVcEKuE9BvAWn9'
    },
    //-----ここから長崎-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211391898!6m8!1m7!1sQdpBwq_om9JeQbMwkXMrAA!2m2!1d32.7514327790084!2d129.8721315304493!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nhnA9iGi7yubxskm9'
    },
    //-----ここから大分-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731513765395!6m8!1m7!1szXcdY_Ih20_wSEC0585ZSw!2m2!1d33.23713201496236!2d131.6023038367734!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/k1eXpNvdRhzNtEZ27'
    },
    //-----ここから鹿児島-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211532277!6m8!1m7!1sX0zK7pbTn1CesdpdCYvjGQ!2m2!1d31.58487360291157!2d130.5386978134463!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/f9pHYccd53nHRynE6'
    },
    //-----ここから沖縄-----
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730093318134!6m8!1m7!1s50fsU3TQxzgGaG2w3WWbKA!2m2!1d26.21576506469355!2d127.6784788195732!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/HKePMZpUSEBaDcfg6'
    },
    
    //--------ここからキルギス.kg--------
    {//ウランバートル
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730849320900!6m8!1m7!1sib9excEtkPkx4A8quVesFg!2m2!1d42.8806529823396!2d74.60485651175918!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/SDpEM1Uaca1WGoPc7'
    },

    //--------ここからカンボジア.kh--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731286573579!6m8!1m7!1s0U0_0FqsPM_OE_LSHBI9-Q!2m2!1d11.56771231209583!2d104.9179600943284!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/jHKzbsAFyhDy9Yhu8'
    },

    {//--------ここからスリランカ.lk--------
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731280530719!6m8!1m7!1sIBsIUC8zJpb_iw-Fdj1NIg!2m2!1d7.241279199007866!2d80.21159448222103!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/8RJD1gq8aG9MouKUA'
    },
    
    //--------ここからモンゴル.mn--------
    {//ウランバートル
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729725551265!6m8!1m7!1sZXGSC6WHAo_2b8nzXxVg1g!2m2!1d47.96254780674171!2d106.5924571145944!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/r5CnwUPguBETmYYFA'
    },

    //--------ここからマレーシア.my--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731376111408!6m8!1m7!1ssxDLiAZOrpY1f9d7ImWFuQ!2m2!1d3.077297941527307!2d101.5867012855656!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/X3s47T8MZvFDaZ3Y8'
    },
    {//ジョホール
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731376226627!6m8!1m7!1sd8NCFRaNCKsjdCO9tv2sIQ!2m2!1d1.472794796070253!2d103.7623851460524!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hnK2EaMP9AuBod7CA'
    },

    //--------フィリピン.ph--------
    {//マニラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730164947080!6m8!1m7!1sVwSLObEyK2XX92FqHuMkUA!2m2!1d14.6035901764576!2d120.9819792575408!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DA7bjsGksN4bj2qi6'
    },
    {//南のカーメタ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731383794088!6m8!1m7!1s7AerXQyMLXEQKpVg4yDNFA!2m2!1d5.858317062451184!2d125.0554239539182!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/eGGgBbaiWsc7CuNe8'
    },

    //--------ここからカタール.qa--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729560118781!6m8!1m7!1szTkpakBCVSLjek5XvsjtNw!2m2!1d25.38993284962018!2d51.50754138133623!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/azwjRM8kv3qo1PT98'
    
    },

    //--------ここからシンガポール.sg--------
    {//PIEの看板の眼の前
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731280686845!6m8!1m7!1stPcJQJFUVMNMnb4MWBXy-g!2m2!1d1.327447303574664!2d103.8677278805782!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Lhiy5c3JfUHdaEQW9'
    },
    {//シンガポール住宅街1
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731281035682!6m8!1m7!1stPmFRt8j1euca0xvhYHqnw!2m2!1d1.338608411329395!2d103.7226186222121!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/yaPappVTNheCUpsi9'
    },

    //--------ここからタイ.th--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731286744934!6m8!1m7!1sdDhsYGu1pRih8AzQflNlEA!2m2!1d13.73343454444623!2d100.5148942657133!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ssAjTF7Jisw6CCDaA'
    },

    {//--------ここから台湾.tw--------
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731281695277!6m8!1m7!1sB43mXZ3Bd10sVkohoOjeGw!2m2!1d24.25437267831829!2d120.5249767535166!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/jeNvrmgf3csCa3F18'
    },
    {//台北
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731282787914!6m8!1m7!1sACT1ix3kRR9-YBTMP9ZRvA!2m2!1d25.02058104649157!2d121.546744383985!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/JGe7eQkTzVgSzGhD8'
    },
    {//高雄
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731283009009!6m8!1m7!1sX-EA5XITS30ICBjGfJm7hg!2m2!1d22.63483956250418!2d120.300493470209!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/S7H12z3JSPAF13SB8'
    },

    //--------ここからウクライナ.ua--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729656827902!6m8!1m7!1sJWPyt8Vf7IvqHq87zVmOAQ!2m2!1d50.38800266542728!2d30.46096840738821!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/pLhg6wpQgnbniFDS7'
    },

    //===================================================
    //====================　ヨーロッパ　====================
    //===================================================

    //--------ここからアルバニア.al--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731718698960!6m8!1m7!1swL11ujWiJ9LA1MeP9YU8sA!2m2!1d41.32748083370634!2d19.8088651762016!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ZY4B8PBVADkZTqFr7'
    },

    //--------ここからオーストリア.at--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731813936156!6m8!1m7!1sP6jUVM5vGIRZL_-E90_S7g!2m2!1d48.20281988519039!2d16.36400333375083!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/xaY2PW4zyWGZARNW7'
    },

    //--------ここからベルギー.be--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731814110351!6m8!1m7!1s2XPbS91ckt-6AzJwlrd-wQ!2m2!1d50.83659886080135!2d4.376051698622214!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/aMsqbPG8tNEtUL5p8'
    },

    //--------ここからブルガリア.bg--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731815444165!6m8!1m7!1sq2Es1Wpr0ri-H-FPD5uGOA!2m2!1d42.69955074854119!2d23.36799737176111!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qiVyUJKTBQUNR2LJ6'
    },
    //--------ここからチェコ.cz--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731718409787!6m8!1m7!1sKPhgTpQfQS7Q8Et7Zhk1Bw!2m2!1d50.07488010494509!2d14.40771022977867!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/RFWKRx449SDepzMNA'
    },
    {//東山の方
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731718486695!6m8!1m7!1sD_09eoE7PjpMvtag7UZPXA!2m2!1d49.41924241893258!2d18.34843032991825!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KoXCK4c3hB8VpLJJ8'
    },
    //--------ここからドイツ.de--------
    {//ライプツィヒ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730953219277!6m8!1m7!1sHn61sBgNnQagl57DJzSflQ!2m2!1d51.32949165707166!2d12.3463705182497!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zsyKMM6epPsjptDv6'
    },
    
    //--------ここからデンマーク.dk--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731022597607!6m8!1m7!1sRCwtmFgsdFOyvJTcb0gH4w!2m2!1d55.66826139277358!2d12.57231476161392!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DUhVMTQT1BE9wgh9A'
    },

    //--------ここからスペイン.es--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729570944819!6m8!1m7!1sMuMJMtYA0q-PLrO5vAEhGg!2m2!1d37.81013179975706!2d-6.203948049197485!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afQXokzsvoanKNoy8'
    },

    //--------ここからフィンランド.fi--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730193325092!6m8!1m7!1s83u3-pQ6NY2ri1ww2LZ-sQ!2m2!1d60.29693297284877!2d24.95982202601304!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FCFEjV8gfyswvAyj6',
        lat:60.296933, 
        lng :24.959822
    },

    //--------ここからフェロー諸島.fo--------
    {//風力発電
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731815868531!6m8!1m7!1sNLBG4BPq4FmYNH0u3A2xLQ!2m2!1d62.02777612059548!2d-6.850862285543966!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/S3qyZMQLosKN6di37'
    },
    {//北の絶景
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731816052949!6m8!1m7!1sHtUieA3dMKcigOqRFAEeLg!2m2!1d62.36471058781686!2d-6.811854524113966!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bXUi16R7hnxxzDUx8'
    },
    
    //--------ここからフランス.fr--------
    {//パリ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729658217941!6m8!1m7!1sfp2pcJ4BELoHlbGGYN7_nQ!2m2!1d48.89104847862511!2d2.292226165416838!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/SGbufwnVcjREf84Y8'
    },

    //--------ここからグリーンランド.gl--------
    {//ヌーク
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563539845!6m8!1m7!1shG4TB3aG-XbEl87b-3yyoQ!2m2!1d64.16679039184727!2d-51.73080525477549!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/godEVoM9C4Z57Fsa8'
    },
    
    //--------ここからギリシャ.gr-------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730475857388!6m8!1m7!1sfZBAUZ8m94InC4FrW_-1dQ!2m2!1d37.96387129659052!2d23.72467432929581!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/T6W9uhEXrpSqkJYD7'
    },
    
    //-------ここからサウスジョージア島とサンドイッチ諸島.gs-------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730851592851!6m8!1m7!1sqIs-d-TMA1H_l3Lay3iybw!2m2!1d-54.01491198290299!2d-37.6907791151887!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dzd8WBNR4oLXEAvp7'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730852179072!6m8!1m7!1sx6jnWBOp2VG7JCQiycMb0Q!2m2!1d-54.03007679187269!2d-37.25726271693835!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nuRhw6iSbb75q3na6'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730865451523!6m8!1m7!1sCNDEaZelv4b1cBWr4nY9SQ!2m2!1d-54.12752787410584!2d-36.6687093157208!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tvMUntxnb58kBpMw9'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730865652538!6m8!1m7!1s-Acjg359YnvZdJaBBjoH_A!2m2!1d-54.28035800006958!2d-36.5078000894682!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/8G4EdEHNJ85tdkcH8'
    },
    
    //--------ここからアイルランド.ie--------
    {//ダブリン
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729658345150!6m8!1m7!1sxq0uletp3_1DPdVOyTtuYg!2m2!1d53.36167201463208!2d-6.25947547839687!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/oMsPFzPNtCE41RBbA'
    },

    //--------ここからマン島.im--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730935825191!6m8!1m7!1shkMFfJWXyuZb5S2hXe9HWQ!2m2!1d54.15279036757472!2d-4.480989815644508!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tkS64hQhfWNqY4ns5'
    },

    //--------ここからアイスランド.is--------
    {//南部
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563312865!6m8!1m7!1sHq-eAzrdbk3H5Lte_fKWSQ!2m2!1d63.69234455731127!2d-18.33212598442128!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vUVfMvtm5Ki6Q7xR7'
    },

    //--------ここからイタリア.it--------
    {//ローマ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729575410471!6m8!1m7!1saYiLpvtLay04x92TQ4mM8A!2m2!1d41.86956580344217!2d12.52999692110261!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bSMeDbXUtjPurKyr7'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731718608435!6m8!1m7!1sytyogyMyf5oSXroASMhSTA!2m2!1d40.4095313616621!2d17.6392890717983!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/fc49KD1jzSFJBY9t6'
    },

    //--------ここからジャージー.je--------
    {//ローマ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730935403306!6m8!1m7!1sFvhXKYqpGc3YgLJlGDhEGA!2m2!1d49.18346502473231!2d-2.109763193128203!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LxNBfxbmTGwFu2bk8'
    },

    //--------ここからリヒテンシュタイン.li--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731730943892!6m8!1m7!1sCU5Ga9JKConQRjXnTDPoYg!2m2!1d47.19956622062283!2d9.54401541281708!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KEJE5pQDZs3W632d6'
    },

    //--------ここからルクセンブルク.lu--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731891102257!6m8!1m7!1sbaW-aIjW73JXrWCO6aKgsA!2m2!1d49.60220357576762!2d6.130774153910308!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t7Fwx9VVUWU4j6zw9'
    },

    //--------ここからラトビア.lv--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731023919002!6m8!1m7!1sK9PwGM5XOVV7biqeRlK_Ew!2m2!1d56.94191100470841!2d24.11405855890634!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/n33ApsDppUsJ14Rh8'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731731215958!6m8!1m7!1soC0On8MJc34r_rhZfmQ--Q!2m2!1d57.05379042453127!2d27.21383898025023!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/b4kz1kYPNHmLuuzF8'
    },

    //--------ここからモナコ.mc--------
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729648670195!6m8!1m7!1sNTyNDL4-PDWmO0U608G7_A!2m2!1d43.73442001833539!2d7.426330508367622!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qkmFz7rPtiejJ3DN6'
    },

    //--------ここからモンテネグロ.me--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731895006739!6m8!1m7!1sP9erMVWo_vJCgGJ3DQx2IQ!2m2!1d43.1047773232039!2d19.03182724648641!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vYarSCeQQnJBUibp8'
    },
    {//ポドゴリツァ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731895251397!6m8!1m7!1segh88_LRTPWEphdJEgLssg!2m2!1d42.44133649083388!2d19.25459183985554!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/XZ77U4QQTKNTqw8DA'
    },

    //--------ここから北マケドニア.mk--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731895739590!6m8!1m7!1s38X-um3ao90yIe40EreAhQ!2m2!1d41.99264234485783!2d21.42632609644707!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/iZm5wScJiqQmRzQN8'
    },

    //--------ここからマルタ.mt
    {//海沿南
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731891332092!6m8!1m7!1sM56w6DXIBashJJRe2ntK0A!2m2!1d35.91307986866373!2d14.50673003194458!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/APyGE1V76jh7myJLA'
    },

    //--------ここからオランダ.nl--------
    {//アムステルダム
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729726015572!6m8!1m7!1s5f9HiIM6MXnT6D2mRUSG2w!2m2!1d52.3596726490809!2d4.925485699065721!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DKqcADvro9W3orhHA'
    },

    //--------ここからノルウェ.noー--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731384281627!6m8!1m7!1sVTdwEa8blIj5CY54N-iq5w!2m2!1d59.90821562159554!2d10.75605157650714!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/5TqhV4BF9iKoziei8'
    },

    //--------ここからポーランド.pl--------
    {//ワルシャワ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729742726063!6m8!1m7!1sc-S5trkcikMkCJGYr3Lcrg!2m2!1d52.24461726825473!2d21.01023938393933!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1Vv3ysHaaYEzCN3A8'
    },

    //--------ここからポルトガル.pt--------
    {//リスボン
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730953083810!6m8!1m7!1spR83RAAKK26hZ9QzJIkkXw!2m2!1d41.76849421387443!2d-7.491076093421399!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zBBp4dsjtKpm5GpQ8'
    },
    {//北の山の方
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730952945248!6m8!1m7!1s1rvdPwAsRj-x6lwZeKFtag!2m2!1d38.73405233892276!2d-9.149728270952693!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MTyX783k4smhTLEs7'
    },

    //--------ここからルーマニア.ro--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730193002233!6m8!1m7!1sjvIDu8PM_CkOmMePeZNgAw!2m2!1d44.42275096069515!2d26.02235891062536!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/q3xcFoKQyFNRsrz96'
    },

    //--------ここからロシア.ru--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731897262719!6m8!1m7!1sR9RvDinWgU_MCCo5hWX1Nw!2m2!1d55.73997055686913!2d37.58504181062795!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YiaLGtbf92Jx89oK6'
    },

    //--------ここからサン・マリノ.sm--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729640408382!6m8!1m7!1syzk8hKHKoH6_tblpLXgqnA!2m2!1d43.9768262380029!2d12.48695842099183!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LtcHWZfwqwsrbpZJA'
    },

    //--------ここからトルコ.tr--------
    {//イスタンブール
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731901425316!6m8!1m7!1sCUexnF8uM6aZn9QxAzFwVg!2m2!1d41.00700431155184!2d29.12151288105682!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/GBCmwcnGbHmgK32L9'
    },
    {//世界一長い吊橋
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731901057691!6m8!1m7!1sx9j13B8XWnwLLfnC2NFplA!2m2!1d40.33666695202302!2d26.64283831197262!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/3tA4EiuCFFyybCJr8'
    },
    {//アンカラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731901550344!6m8!1m7!1sPtO3FnArjLA7nix0KZU9Lw!2m2!1d39.92357710941222!2d32.85619316489237!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MWV3VGFBukh8Mpak7'
    },

    //===================================================
    //====================　オセアニア　====================
    //===================================================

    //--------ここからクリスマス島.cx--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731901705861!6m8!1m7!1ses18JyYS-XdZNCR_IDF9Uw!2m2!1d-10.48993794387366!2d105.6207483042846!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EX39f9oe73VoZ2iC9'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731901780378!6m8!1m7!1sgZvSav2K6fpEgE5CvqBGWw!2m2!1d-10.43211443703532!2d105.6735935727766!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ByW4BpTBTzfjj8yeA'
    },
    {//クリスマスアカガニ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731901990736!6m8!1m7!1sHUlJXnP8lCJ4RiD1CM88IQ!2m2!1d-10.46409710110199!2d105.7076925111816!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Exk8gAQWwSAW8EAL7'
    },

    //===================================================
    //===================　　アフリカ　=====================
    //===================================================
    //--------ここからマダガスカル.mg--------
    {//アンタナナリボ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748056745!6m8!1m7!1s6za1FUktl2TfG4VvuQQymg!2m2!1d-18.92413604984545!2d47.5303773151325!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/mq85emWsLafHGUgB6'
    }, 
    {//アンドランジトラ国立公園
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748169063!6m8!1m7!1sw1IFREiC31x8UdNct80Ajg!2m2!1d-22.09643716388154!2d46.76869654909648!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rVVMPr38iQb4vsoh6'
    }
    ,{//国立公園の岩多め1
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730726253071!6m8!1m7!1s4D7-lrcLTiafY6efa0FVlg!2m2!1d-22.09642316343795!2d46.76034570742027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/xWHRfSMN5b7bp9nL7'
    }, 
    {//RN8
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729558515149!6m8!1m7!1sT3l8G1-u-whp-D_ON55Ahg!2m2!1d-20.24951093684258!2d44.41981496911148!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CDihGVEvPw7FqANb6'
    }, 
    {//RN8(徒歩の部分)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730726619193!6m8!1m7!1seL-3OGU-czYrogEkL5rN7g!2m2!1d-20.14838633255006!2d44.51538865537876!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/x5xiefg2yMbEnHeA6'
    }, 
    {//トゥリアラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748280172!6m8!1m7!1sqphmHGtMyYIaivwXMslUnw!2m2!1d-23.35543941590885!2d43.66870509739654!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sbDbVz9FUCLNjZ77A'
    }
    ,{//トゥリアラ2
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724321508!6m8!1m7!1sc_X4NDZzl3-3FOq_2dYPYA!2m2!1d-23.35365062068085!2d43.66923911621851!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wBCc5KwziNvP1DQL9'
    },
     {//女が多いあの船
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748408119!6m8!1m7!1sVg5fwWp5wLwMtCHhNAWn9A!2m2!1d-13.47998450787207!2d48.37172165082281!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bfeN9cythqbN1GiDA'
    }, 
    {//ディストリクト・ダンバンジャ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748562605!6m8!1m7!1sask63xylYk6fD8PUJ1muQA!2m2!1d-13.67461862265171!2d48.45172214761642!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/X6dqrR3krNra2FV37'
    },
    {//ディストリクト・ダンバンジャ(橋の近く)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725999854!6m8!1m7!1sFrmp1NylpUpFY_bYE9zHFw!2m2!1d-13.68730411938349!2d48.45371870309766!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AG2pR2neruMsWTCw7'
    },
    {//ディストリクト・ダンバンジャ近くの海(小型船)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730815861574!6m8!1m7!1sP7Qpa2HiIWquuRl5Tu4eGg!2m2!1d-13.58267811928074!2d48.39504656283499!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AG2pR2neruMsWTCw7'
    },
    {//汚い浜
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724690462!6m8!1m7!1sY0dpY8sDH_LNFWpjuNoavw!2m2!1d-20.74116513783829!2d43.99953603075323!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/D7kAUChNssFu7wWn7'
    }, 
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730090709878!6m8!1m7!1stKUM144w5Yf-08d0HkQm7Q!2m2!1d-18.58059556766276!2d43.92752626189974!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gLVutAhFU4ouzbtP7'
    }, 
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730091165054!6m8!1m7!1sbArHCxPbFNF2EzbKkHtNHg!2m2!1d-18.31949764124678!2d43.74608570625899!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BUnTnA9stRoK17ed7'
    }
    ,{//アンダヴァドアカ海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724798556!6m8!1m7!1sfvxJIH_AYPDtvSUJ9BuI8g!2m2!1d-21.9716415921272!2d43.25675981461625!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BDnDxdNteiu5t5g67'
    }
    ,{//アンダヴァドアカ海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724798556!6m8!1m7!1sfvxJIH_AYPDtvSUJ9BuI8g!2m2!1d-21.9716415921272!2d43.25675981461625!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BDnDxdNteiu5t5g67'
    }
    ,{//アンダヴァドアカ乾燥地面
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730726349694!6m8!1m7!1sYcraxSQ6om396c4rFkzeOw!2m2!1d-22.05544579891835!2d43.26221641113803!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YUGu4BzuxfV2iCFW7'
    }
    ,{//乾いた荒地
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724885388!6m8!1m7!1sJbBAm-TAz9nigyqlsNcMjg!2m2!1d-23.55213227050574!2d43.77643510193955!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Zi3TzSsUVWKMfFvL6'
    }
    ,{//トゥリアラ近くの河口
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724980077!6m8!1m7!1sp6sxi7zs5CVzZ5-xXTpJEg!2m2!1d-23.56760442744431!2d43.76168480064482!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KDc7UPEnUiKqGwkY6'
    }
    ,{//ディストリクトしたの村
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725145187!6m8!1m7!1sbjFKsRRqHgscPLUPqGBYPg!2m2!1d-13.81064243158316!2d48.47175577273575!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/kVrWXLnxrJk8ArzEA'
    }
    ,{//ディストリクトしたの川
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725329884!6m8!1m7!1siEc2MIPx1Y2m-yEMvyBFDg!2m2!1d-13.75537784822737!2d48.46022392238019!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dQL9R3eWZV2kiFZw5'
    }
    ,{//ディストリクトしたの川(徒歩)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730816157837!6m8!1m7!1szYWlkmEOg_grMNGFz6BbNA!2m2!1d-13.75094602023101!2d48.46522753918993!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DzcFBHHXK65qmnsq9'
    }
    ,{
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725856853!6m8!1m7!1s_yXLjUQXdOUrC8ocOpM0kw!2m2!1d-23.57253966247112!2d43.76202358662786!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sYbjP1zVKup5JBxR7'
    },

    //--------ここからナイジェリア.ng--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563232545!6m8!1m7!1sV5ElpS1anDSPuh65RNAb0g!2m2!1d9.094980378230119!2d7.215790133775001!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AB7VPEe82jXhudut7'
    },

    //--------ここからケニア.ke-------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730176695456!6m8!1m7!1s0GYgx78myS336dPpu06SSw!2m2!1d-1.519615600517721!2d37.27084692171411!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FgbHnVj2uzCH81MX6'
    },

    //--------ここからウガンダ.ug-------
    /*{
        embedUrl: '',
        answerUrl: '',
        lat:,
        lng:
    },*/

    {//--------ここから南アフリカ.za--------
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729725687548!6m8!1m7!1sJC7PPXTQl1RAS-trNwE70Q!2m2!1d-28.49886343579033!2d26.99809079000054!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hvsM1v3PVBJLsK427'
    },
    
    //--------ここからサントメ・プリンシペ.st--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729655114430!6m8!1m7!1sNYXFxKMllTPtZcgq6HZHjg!2m2!1d0.3579978143717866!2d6.722748196853231!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qf6JhhfnCCmJkFVZA'

    },
    
    //--------ここからレユニオン.re--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729655769786!6m8!1m7!1sbBD4AU9q1nXXpbjwXteOhQ!2m2!1d-21.32995478022573!2d55.46989004834647!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/q8c5SfeTqu5Bn3An7'
    },

    //===================================================
    //====================　北アメリカ　====================
    //===================================================
    //--------ここからカナダ.ca--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730165223753!6m8!1m7!1srmzXFoPGeT7zejn063vDNw!2m2!1d46.76594218226704!2d-71.48684093299886!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ZCN8iwDkumWF2gyx6'
    },

    //--------ここからメキシコ.mx--------
    {//メキシコシティ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729653584123!6m8!1m7!1sVKv7rRP2Kzyh2U_0rjym4A!2m2!1d19.42611476011491!2d-99.20435414100933!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ySa7ZPsFAA9Py7C69'
    }, {//ラス・コロラダス(ピンクの湖)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730158303898!6m8!1m7!1sVnBV5YfTji1v6Ry4EHfjYg!2m2!1d21.60256038894161!2d-87.99363180407344!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/opRB5QCgz5s5SH437'
    },

    //--------ここからアメリカ合衆国.us--------
    {//ウィスコン信州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731126965609!6m8!1m7!1sfDWBnNsEAzyw6zb9akshvw!2m2!1d44.77690521178598!2d-88.60932115162596!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/7d22G6i21dEPohZu9'
    },
    {//カリフォルニア州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731127212076!6m8!1m7!1sT50Z24tlJ6xTex8NbW93hg!2m2!1d33.6034392400278!2d-117.9002730601454!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/aYnsziKzWqd4bCGP6'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731127317463!6m8!1m7!1s58ceKGgestjqp3_BVatcIw!2m2!1d37.77226706933519!2d-122.2284099924836!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cY4L517nsR9nwL969'
    },
    {//ゴールデンゲートブリッジ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731731092675!6m8!1m7!1sfv2JnnJNh3h_xVlX_GyGLA!2m2!1d37.8192350531855!2d-122.4784201650872!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/32gVNGiRxXo4Rog66'
    },
    {//サウスダコタ州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731126731367!6m8!1m7!1snykNrMu0FmTXqAWRas3c5w!2m2!1d44.31673724473055!2d-96.78114503322715!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/fF4iz5y2EZn8AnY59'
    },
    {//フロリダ州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731127114962!6m8!1m7!1sk_KQTQqQTiJrufcKfezHTg!2m2!1d28.30079235611648!2d-81.40290812777127!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hHoi7QJxf981VE1L7'
    },
    {//ノースカロライナ州
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731127054910!6m8!1m7!1s4mDjLy-ah6eQJ3ejPE3Kyg!2m2!1d36.00091190958778!2d-78.90856756808284!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/29Qq2CSm4acc65Dy9'
    },

    {//ミッドウェー島.um
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731987407982!6m8!1m7!1sOBuccAb9ARmamR2ZfwU72A!2m2!1d28.20732038050797!2d-177.3721257033908!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ERiFVZpkmwm6Jyky9'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731987597846!6m8!1m7!1s1UEWLrN5kVWDypj5X7McHg!2m2!1d28.21505940190921!2d-177.3609195537009!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t6rLdbaokk82obeU9'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731987752826!6m8!1m7!1svTa6zSGX_vKl3EtHfOvVxQ!2m2!1d28.20602197968449!2d-177.3811129120101!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LPFd4odjVmcN3DQS7'
    },

    //--------ここからグアテマラ.gt--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563706909!6m8!1m7!1sC_Q94zAtV9DqV1-AvPqjCQ!2m2!1d15.21436890158927!2d-91.51419112699985!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/yo1NZpaFPDc9wd3E7'
    },

    
    //--------ここからアメリカ領ヴァージン諸島.vi--------
    {//南島赤い車
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730166365057!6m8!1m7!1s7y3O4IMLiCioiMbmHG13hA!2m2!1d17.71608801560808!2d-64.81447066827184!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CuqT8mqsN3QPv5Sd7'
    },
    {//北島白車長アンテナ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730166796795!6m8!1m7!1s0pytOFWiLWufUU3BfY7JZw!2m2!1d18.33632946052731!2d-64.91732838896468!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/9RhDgK2bLkdCbupR8'
    },

    //--------ここからプエルト・リコ.pr--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730165708931!6m8!1m7!1sILbk5scQ7ZCKxUC_dblnTg!2m2!1d18.4160556530997!2d-65.98835183608776!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/W6HLbdEnTs6pibTz9'
    },

    //===================================================
    //====================　南アメリカ　====================
    //===================================================
    //--------ここからアルゼンチン.ar--------
    {//ブエノスアイレス
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729654026425!6m8!1m7!1sT5A39ulw7gBKol0sBC7mmw!2m2!1d-34.60988419369181!2d-58.45087021634892!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/n42KagaQmE1rnFqm9'
    },

    //--------ここからボリビア.bo--------
    {//ラパス
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729653783043!6m8!1m7!1se-XFAAI2ASLqHDbCSl296Q!2m2!1d-16.48706056494146!2d-68.12913546847376!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PavGen7ZJ3FChPoz7'
    },
    
    //--------ここからブラジル.br--------
    {//ブラジリア
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731988085621!6m8!1m7!1s-ofh1IQoaX3RluebSsznmA!2m2!1d-15.87095020760163!2d-48.03068573468062!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EMzwWsvjhypjhwtg6'
    },

    //--------ここからチリ.cl--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731988223076!6m8!1m7!1s60PDFBj6lQ2UWpMchsOquQ!2m2!1d-33.44874103928411!2d-70.67045131746674!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ySQjfq3NLR7t4zgy6'
    },
    {//route9
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731988354253!6m8!1m7!1s4Hd-_z_aHEvEZL3mKm7STw!2m2!1d-52.5696487055483!2d-71.20254505640774!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Hz2sfKhSjncucnqZ6'
    },

    //--------ここからコロンビア.co--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731988620824!6m8!1m7!1sUikkQR82c5V6KRYm-cbHcg!2m2!1d4.677415581553275!2d-74.0584911163968!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/iGFUKjdHCnF6F3ke9'
    },

    //--------ここからキュラソー島.cw--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731989830654!6m8!1m7!1ssf7T7I4R4F6KHITJbi6h6w!2m2!1d12.15930799964348!2d-68.94939971692044!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/JYU3HfBy4CdtgKvG7'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731989928821!6m8!1m7!1sRuMMbcEc32tvgvcM9xxe4Q!2m2!1d12.16974358001674!2d-68.8562151810904!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/xEH54MA5WMoUwxrF7'
    },

    //--------ここからエクアドル.ec--------
    {//ガラパゴス
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729654365050!6m8!1m7!1s34FrRPdaWCjZwM7hMT3S-w!2m2!1d-0.3939843952755621!2d-91.00094057538234!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/yYzvpbQu6DD7U6h79'
    },

    //--------ここからペルー.pe------
    {//アンカシュの赤い
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730475017849!6m8!1m7!1sLdo9EmtDndA4gmb773F8ng!2m2!1d-9.220379656490188!2d-77.82253136082498!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/au7YSGV3jPSjjvnj8'
    },

    //--------ここからウルグアイ.ug--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731990131661!6m8!1m7!1sLwi6HQ7XeANwwpLrW6Ov5w!2m2!1d-32.81600661242923!2d-56.50340164888259!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gAa5ngpuFb8dHCir5'
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
