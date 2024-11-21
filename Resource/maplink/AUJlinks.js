const streetViews = [
    /*
    {
        embedUrl: '',
        answerUrl: ''
    },
    */
    //ここから北海道
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730093099776!6m8!1m7!1sxTNQRsULtWW24iZBt2E39w!2m2!1d43.07054473330154!2d141.3525311548342!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/iCydRAJpu21RcoDr5'
    },
    {//網走
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730240943146!6m8!1m7!1sJmTm--1JVcI5BW4j8LyTLQ!2m2!1d44.02066332905149!2d144.2556661888877!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afvK1suFPEhdRNcb7'
    },
    //ここから青森
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213836504!6m8!1m7!1sc9KKiw_g4hdRnXu7So3rTA!2m2!1d40.8248615168055!2d140.7394887906193!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/z2vb2XzfRuLCV8xd9'
    },
    //ここから岩手
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731904013117!6m8!1m7!1srb8aOSzT1tjOPjjdx-lMbA!2m2!1d39.70345596757032!2d141.1359971608507!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MJ9V7fKpKXRJDsci9'
    },
    //ここから秋田
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731513671722!6m8!1m7!1sz1OOyoddpz1pwFLMC46ZhQ!2m2!1d39.71688777427755!2d140.1485232960538!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EvDVNFCsErbzW5yT9'
    },
    //ここから宮城
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730204517151!6m8!1m7!1sF7NHtI0thttmItvNAjaXlw!2m2!1d38.26017765071882!2d140.8861613652267!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/UzDAVfRa34YoC44n9'
    },
    //ここから山形
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731904189344!6m8!1m7!1sedipf5XPRKjsyQF-ckozpg!2m2!1d38.25395633576015!2d140.3109396860645!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/NVYJicwFwArbCRKz7'
    },
    //ここから新潟
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731999023695!6m8!1m7!1sN1FDgTj41o71xQK8cAodbw!2m2!1d37.90170343583993!2d139.0659851386973!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/c5WqZYMoqvPxthBL8'
    },
    {//佐渡
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731998899911!6m8!1m7!1sslDM-IjcI_8vXI0crIj6PQ!2m2!1d38.02087455643647!2d138.3648181838922!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ezbbj3phgmP4b4Kw8'
    },
    //ここから群馬
    {//高崎
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514036874!6m8!1m7!1ssaQfd-4UFKnVBNERfqp8ug!2m2!1d36.317049583334!2d139.0142303035027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MQUoAP7Qt3FKnQdG8'
    },
    //ここから栃木
    {//宇都宮
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514114348!6m8!1m7!1sq_A8gKbstItEzswoXUy4wA!2m2!1d36.55842632753073!2d139.8958725886651!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LTAFQYjFbbzLgbcz6'
    },
    //ここから茨城
    {//水戸
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514216146!6m8!1m7!1sePu5QagbJM7xDQdUt7zu9Q!2m2!1d36.36608976653896!2d140.4752483639899!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t6MfDPkAAiCScR9bA'
    },
    {
        embedUrl: '"https://www.google.com/maps/embed?pb=!4v1731514357730!6m8!1m7!1s590FgmqG6uU10IcS3HhDmA!2m2!1d36.08521950863133!2d140.1167654746796!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/kizU77nyxqkZzqZ17'
    },
    //ここから千葉
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213923352!6m8!1m7!1sSPGgC6-EtKwa0tYSP3C-fw!2m2!1d35.61164523125404!2d140.1175861840636!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qJ6oxhqZjy5nb5WY7'
    },
    //ここから東京
    {//東京駅
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730069828919!6m8!1m7!1sik3rTbfzp0-TAPzLWydrWQ!2m2!1d35.6817870240367!2d139.7647193792978!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PaMXJmkeVuj9X3KC8'
    },
    //ここから神奈川
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730468077957!6m8!1m7!1sT5_-4guzUcfDfG8miMURHA!2m2!1d35.46901272029854!2d139.6166553687639!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YsHrUfgFMzeLYmKB7'
    },
    //ここから山梨
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731999335122!6m8!1m7!1svqnSR9Wn2ppa1F2D-kFQyg!2m2!1d35.68545469558593!2d138.6836895249021!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Q6tVUp4Ra4RVrzDT8'
    },
    //ここから静岡
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514653490!6m8!1m7!1sNtiNNuMEC7wL59VoFL2OmQ!2m2!1d34.96924411062385!2d138.3832420292492!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Wzy8NdaQuopeSQYd6'
    },
    //ここから富山
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211302779!6m8!1m7!1sHNP7G0d48xhHFDzgLpjnDg!2m2!1d36.69861367477401!2d137.21103412974!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dZrmxRhNVwYN5VJ97'
    },
    //ここから石川
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731904564889!6m8!1m7!1sSN7Imo3pt9cQTj1WyxT8Eg!2m2!1d36.58300018799115!2d136.6400231121535!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FWYQGLUZevy8GpqH8'
    },
    //ここから福井
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731904660265!6m8!1m7!1sugGjnWkzsy6IUfyftOq3zQ!2m2!1d36.06299945530241!2d136.2176745481386!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QTL5C49xEaJCJLM16'
    },
    //ここから長野
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213988361!6m8!1m7!1sBJi44kPnNypZHhWI6qYtNw!2m2!1d36.64339538674999!2d138.187156680505!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Bh9eSWytZDcUVfhy6'
    },
    //ここから岐阜
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731904393966!6m8!1m7!1sJWvTrdTDCp-Rvdj0F5Vzjg!2m2!1d35.41076646505784!2d136.7586310907425!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/u2euwgSZFqMJ5ng2A'
    },
    //ここから愛知
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092741542!6m8!1m7!1s63ABdAOCxNeOxgQ6n94nug!2m2!1d35.17128764194855!2d136.8848857235975!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LQQYwxvyKRZzc1bB7'
    },
    //ここから滋賀
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514757434!6m8!1m7!1sgCRthnLDs9CiiCTOah6vwQ!2m2!1d35.00173901216767!2d135.873399573357!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DJFAaGCRPHdUfvkW9'
    },
    //ここから大阪
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092470154!6m8!1m7!1sKPk_SObjniAifv7MMBMulQ!2m2!1d34.70489316917189!2d135.4971172987883!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QTsDjCmPEV9ygwMdA'
    },
    //ここから京都
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731904865018!6m8!1m7!1su0mdAm1cSDtFGJ5iAJGCrg!2m2!1d34.98307584174085!2d135.7597298184396!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FKuvCnLRR2nqZUS97'
    },
    //ここから三重
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731905111370!6m8!1m7!1sbaCC6GEIYpIpc5vRsdF2Gg!2m2!1d34.73334581801513!2d136.5131549386432!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/fxXPNzj7Vfd9pmVs5'
    },
    //ここから奈良
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731905299902!6m8!1m7!1ssQ5pt82E15TtXNEFOsWstw!2m2!1d34.68443031228189!2d135.8204090979859!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wiNYeyDvDtDTSMnS8'
    },
    //ここから和歌山
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731998783334!6m8!1m7!1sRhQiRC15Aw-tx-3GEmdjhg!2m2!1d34.23394232556036!2d135.1695282034707!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/3jxSgd2un9kdFeE27'
    },
    //ここから鳥取
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730794750400!6m8!1m7!1sDeEz563_NNe8VjfOnSsxWw!2m2!1d35.49536731660927!2d134.2292170086912!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Yt6wUqpSjGDxqkDs5'
    },
    //ここから島根
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731992260508!6m8!1m7!1sagKDE1CI9vLjBwByhHpMqw!2m2!1d35.37301663716529!2d132.7534574950491!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nH6gJqwDA2NeV9NJA'
    },
    //ここから岡山
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092956254!6m8!1m7!1sZiYFMUw8UhTMJNju3TtVwQ!2m2!1d34.66353145416075!2d133.9191741861175!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KkuuDh64z9xtoUR89'
    },
    //ここから広島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730106070847!6m8!1m7!1svAcoZT_hhMTjg2yrEIXg8g!2m2!1d34.39938125405674!2d132.4780077377843!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MK93dnpaJTsVKBzV7'
    },
    {//福山市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731903905197!6m8!1m7!1s8LtFHksYBb-iWJCdT-VnFQ!2m2!1d34.48557796898112!2d133.3646810333959!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/4iK2EQAFAK27tYSS8'
    },
    //ここから香川
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730476378906!6m8!1m7!1sGlgVKgchnJLJd4Ff_a2WDQ!2m2!1d34.28881558129756!2d133.7943960330805!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LjoHpZzMZG432wE1A'
    },
    //ここから徳島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213750470!6m8!1m7!1s5k6A-3ARjqFiZ-VPmCxNVA!2m2!1d34.07139852494615!2d134.5580897233915!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Vq745edwqLcCUijx6'
    },
    //ここから愛媛
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731513869444!6m8!1m7!1sRdnv-gcA2p1E3w-HIcO7aQ!2m2!1d33.83598703164661!2d132.7586934373035!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LZsuVcEKuE9BvAWn9'
    },
    //ここから高知
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731992052348!6m8!1m7!1sFSTupmKj9AEmmXQ1ESKp6A!2m2!1d33.57668924921946!2d133.543770789514!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1v55avCfckhJsvtg9'
    },
    //ここから福岡
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731997900375!6m8!1m7!1sUBS0z6Zqb7dbPCx8uWwYNQ!2m2!1d33.5673879419583!2d130.4657577467171!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/skQ7hyHHLGAHr1TQ6'
    },
    //ここから長崎
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211391898!6m8!1m7!1sQdpBwq_om9JeQbMwkXMrAA!2m2!1d32.7514327790084!2d129.8721315304493!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nhnA9iGi7yubxskm9'
    },
    //ここから大分
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731513765395!6m8!1m7!1szXcdY_Ih20_wSEC0585ZSw!2m2!1d33.23713201496236!2d131.6023038367734!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/k1eXpNvdRhzNtEZ27'
    },
    //ここから熊本
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731998180830!6m8!1m7!1sySdYRyl5uCwKAgLRchPZcQ!2m2!1d32.78497881558272!2d130.6884379109792!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zEyAZLyz5qsE7rvGA'
    },
    //ここから宮崎
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731910502826!6m8!1m7!1sqBd81PfkJMsm-AIYlxfzkg!2m2!1d31.91647391240669!2d131.4239353136747!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afw5iUqpqYMXFou99'
    },
    //ここから鹿児島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211532277!6m8!1m7!1sX0zK7pbTn1CesdpdCYvjGQ!2m2!1d31.58487360291157!2d130.5386978134463!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/f9pHYccd53nHRynE6'
    },
    //ここから沖縄
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730093318134!6m8!1m7!1s50fsU3TQxzgGaG2w3WWbKA!2m2!1d26.21576506469355!2d127.6784788195732!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/HKePMZpUSEBaDcfg6'
    }
    /*
    {
        embedUrl: '',
        answerUrl: ''
    },
    */
];