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
    {//留萌市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732677194499!6m8!1m7!1seJG4rPp19EsgDHMt-dPmcg!2m2!1d43.93501642562622!2d141.6645258516049!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EQxdLZJ4MS2X8N2f9'
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
    //ここから福島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732359820798!6m8!1m7!1spe3bgg5AwrrKQeof6oKMAg!2m2!1d37.75700761107395!2d140.4738270700811!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YYX4ueLvVKjuQ4HF6'
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
    {//上越市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732688909877!6m8!1m7!1s3rlpLdeC_67ogDIdnCJORA!2m2!1d37.16474547592485!2d138.2563704982594!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/6rdYaEuBrxbyHaTNA'
    },
    //ここから群馬
    {//高崎
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514036874!6m8!1m7!1ssaQfd-4UFKnVBNERfqp8ug!2m2!1d36.317049583334!2d139.0142303035027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MQUoAP7Qt3FKnQdG8'
    },
    {//みどり市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732689190099!6m8!1m7!1sXSvabspvEuZ9gUUU7x6veA!2m2!1d36.39352843810669!2d139.2840466617027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wYwhLoVsPVsNGi87A'
    },
    //ここから栃木
    {//宇都宮
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514114348!6m8!1m7!1sq_A8gKbstItEzswoXUy4wA!2m2!1d36.55842632753073!2d139.8958725886651!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LTAFQYjFbbzLgbcz6'
    },
    {//佐野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732676274715!6m8!1m7!1s9AgA0OgwzZwLO5ICmuPFgw!2m2!1d36.31413127174959!2d139.565956508712!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FGsBmhLpA4pH97Tu6'
    },
    //ここから茨城
    {//水戸
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514216146!6m8!1m7!1sePu5QagbJM7xDQdUt7zu9Q!2m2!1d36.36608976653896!2d140.4752483639899!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t6MfDPkAAiCScR9bA'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514357730!6m8!1m7!1s590FgmqG6uU10IcS3HhDmA!2m2!1d36.08521950863133!2d140.1167654746796!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/kizU77nyxqkZzqZ17'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732359251019!6m8!1m7!1sMGxj-ojbnYuqBg1_3ViJOg!2m2!1d36.46248123278551!2d140.5670921293107!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/VZ5CqVnZ3SkXW8js9'
    },
    //ここから千葉
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730213923352!6m8!1m7!1sSPGgC6-EtKwa0tYSP3C-fw!2m2!1d35.61164523125404!2d140.1175861840636!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qJ6oxhqZjy5nb5WY7'
    },
    //ここから埼玉
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732676944393!6m8!1m7!1sNiyGk3tpl61juWsmD0lu2Q!2m2!1d35.89352169965423!2d139.6298342408207!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/37YCijWt2SVWyRaz9'
    },
    {//秩父市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732676713254!6m8!1m7!1sJ0wt4JL0tZK94KwYeVZP-A!2m2!1d35.99693705422535!2d139.0833107777418!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hdupWKoAWnGD4yHZ6'
    },
    {//川口市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732689098225!6m8!1m7!1s-Z9zMQcHPITnruBJkaeTtA!2m2!1d35.80325346706685!2d139.7176947891895!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/6vLx118vigDveypP6'
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
    {//逗子市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732679032670!6m8!1m7!1szjJ7bAA_eXnU5Lc4dAHZLw!2m2!1d35.29553265834637!2d139.5766966386201!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tMpofjidTkd6QLuD7'
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
    {//沼津市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732676423600!6m8!1m7!1s0rdUchJ3LANRAhSeLvehrQ!2m2!1d35.09991127547545!2d138.8627467243927!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KB9Chsapgk2wTUif8'
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
    {//七尾市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732676542238!6m8!1m7!1spDJ30Q37PcbmKifZSFeiLw!2m2!1d37.04160885727214!2d136.9697051263603!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sHAQXLvgzn9Yya3SA'
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
    {//諏訪市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732670567229!6m8!1m7!1sF5PdND5kxo4gF6zHXl9tyQ!2m2!1d36.00731948623504!2d138.1305343802476!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ZeDvRj2YzL2y4YhN9'
    },
    {//伊那市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732677042714!6m8!1m7!1sn-kxpiRDrB-XUaIh1HajBw!2m2!1d35.84087539303353!2d137.9607126144175!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1cpa2xnjg1PBewvz6'
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
    {//豊田市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732664198157!6m8!1m7!1sWnMzyGFZzL8IgwZqmTH-xg!2m2!1d35.08793978968597!2d137.1546188832031!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/huU55zUQaaqgZPLs5'
    },
    {//豊橋市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732668965476!6m8!1m7!1sxgI_DLPCwRLTYDygQ_2lQw!2m2!1d34.76830652895325!2d137.3905732843451!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nY5BSChkn6mwQJcQ7'
    },
    //ここから滋賀
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1731514757434!6m8!1m7!1sgCRthnLDs9CiiCTOah6vwQ!2m2!1d35.00173901216767!2d135.873399573357!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DJFAaGCRPHdUfvkW9'
    },
    {//草津市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732668848561!6m8!1m7!1sd7SkF-V7MPak9t4CHmgqzw!2m2!1d35.02489587345843!2d135.9574004365153!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/9y9H7JLG5pidfc6v8'
    },
    //ここから大阪
    {//梅田
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730092470154!6m8!1m7!1sKPk_SObjniAifv7MMBMulQ!2m2!1d34.70489316917189!2d135.4971172987883!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QTsDjCmPEV9ygwMdA'
    },
    {//なんば
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732670318455!6m8!1m7!1sXdkg4psjp_nybyjzrqREhQ!2m2!1d34.66722037224273!2d135.497073862837!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/j2VGfJ3ymEcJuoGd9'
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
    //ここから兵庫
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732360010608!6m8!1m7!1s72HkxaxgzJHEtQRPjcmgLA!2m2!1d34.68508545445073!2d135.1964252860476!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Jqoi1PAi6YVHWoQY6'
    },
    {//姫路市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732360181805!6m8!1m7!1slsAFHX10KxVRdefVGNT8Jw!2m2!1d34.83284132247822!2d134.6848169365387!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rza8UikW7sFduiEo8'
    },
    {//川西市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732669753259!6m8!1m7!1suOsFNoCCc5gGdxvO-GfgAA!2m2!1d34.82817909554438!2d135.4138304031343!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gYBHUN5t6qbAwo5D9'
    },
    {//上郡町
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732682066082!6m8!1m7!1sn1rKTdO9rKsN8ql_tQiyrQ!2m2!1d34.86736324091445!2d134.3553119204863!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vwrMhTbvrzZjCvrw5'
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
    //ここから山口
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732360302424!6m8!1m7!1sLRkX26ZmB1iLGznGVdNufw!2m2!1d34.19297490997425!2d131.4934615372486!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ExT3U5GwVVJXYLPR7'
    },
    {//下関市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732679172573!6m8!1m7!1sv8cCHZpxIa8Z01uKP5UHEw!2m2!1d33.97765696556691!2d130.9443065310892!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wuGzxcWTDKoaJ3p18'
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
    {//筑紫野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732673130638!6m8!1m7!1sebCB1USJog5d75qFdcANIA!2m2!1d33.48311436674672!2d130.5392487261449!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Si2RqLEqHP1SySnF7'
    },
    //ここから佐賀
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732670126938!6m8!1m7!1sXMmefFY_TxCj3W0ofPobnQ!2m2!1d33.25929336138908!2d130.293273798779!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dH44gSUPoa7eeis96'
    },
    //ここから長崎
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730211391898!6m8!1m7!1sQdpBwq_om9JeQbMwkXMrAA!2m2!1d32.7514327790084!2d129.8721315304493!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nhnA9iGi7yubxskm9'
    },
    {//大村市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732679366202!6m8!1m7!1sIV3mVizcG330UZaMNz6D4w!2m2!1d32.91125467152954!2d129.9520326400641!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PjHvQ3Uy9zJXsuNV8'
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
    {//南さつま市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732677314583!6m8!1m7!1sxgEgs1FaJQVXbWfduhL2wA!2m2!1d31.41602722095661!2d130.3208931137264!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/C832D2sZejkj5QM36'
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