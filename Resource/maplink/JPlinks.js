const streetViews = [
    /*
    {
        embedUrl: '',
        answerUrl: ''
    },
    */
    //ここから北海道
    {//網走
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJmTm--1JVcI5BW4j8LyTLQ!2m2!1d44.02066332905149!2d144.2556661888877!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afvK1suFPEhdRNcb7'
    },
    {//留萌市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seJG4rPp19EsgDHMt-dPmcg!2m2!1d43.93501642562622!2d141.6645258516049!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EQxdLZJ4MS2X8N2f9'
    },
    {//旭川市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOC4ju02mobb3vCcjuTa4dA!2m2!1d43.76487225401087!2d142.3616986912746!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tAtnCn8PQuTnXXGw9'
    },
    {//標津町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svO6tL_-R0kqruJ7yGyc4-A!2m2!1d43.30022369772667!2d144.6005149688538!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/NSSSYxAy3ZdWfraT9'
    },
    //ここから青森
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc9KKiw_g4hdRnXu7So3rTA!2m2!1d40.8248615168055!2d140.7394887906193!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/z2vb2XzfRuLCV8xd9'
    },
    {//むつ市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1733282041052!6m8!1m7!1srQwCqSN-5Vv3JPCoO-sBlg!2m2!1d41.25602523350306!2d141.1441225270373!3f0!4f0!5f0.400',
        answerUrl: 'https://maps.app.goo.gl/5FmUMJHtVov7izwS9'
    },
    {//外ヶ浜町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2YpjPpX_Qgf3e8PkkpDeHg!2m2!1d41.03312450292182!2d140.6451218551724!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/mpVkJPDYgEmDxa2E8'
    },
    //ここから岩手
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srb8aOSzT1tjOPjjdx-lMbA!2m2!1d39.70345596757032!2d141.1359971608507!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MJ9V7fKpKXRJDsci9'
    },
    //ここから秋田
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz1OOyoddpz1pwFLMC46ZhQ!2m2!1d39.71688777427755!2d140.1485232960538!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EvDVNFCsErbzW5yT9'
    },
    //ここから宮城
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF7NHtI0thttmItvNAjaXlw!2m2!1d38.26017765071882!2d140.8861613652267!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/UzDAVfRa34YoC44n9'
    },
    //ここから山形
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sedipf5XPRKjsyQF-ckozpg!2m2!1d38.25395633576015!2d140.3109396860645!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/NVYJicwFwArbCRKz7'
    },
    {//尾花沢市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4dfh0epEjAmzxbN7p7QqXg!2m2!1d38.61111924090518!2d140.4244614110339!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t1qbv673jPSwC78j7'
    },
    //ここから福島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spe3bgg5AwrrKQeof6oKMAg!2m2!1d37.75700761107395!2d140.4738270700811!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YYX4ueLvVKjuQ4HF6'
    },
    //ここから新潟
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sN1FDgTj41o71xQK8cAodbw!2m2!1d37.90170343583993!2d139.0659851386973!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/c5WqZYMoqvPxthBL8'
    },
    {//佐渡
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sslDM-IjcI_8vXI0crIj6PQ!2m2!1d38.02087455643647!2d138.3648181838922!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ezbbj3phgmP4b4Kw8'
    },
    {//上越市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3rlpLdeC_67ogDIdnCJORA!2m2!1d37.16474547592485!2d138.2563704982594!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/6rdYaEuBrxbyHaTNA'
    },
    //ここから群馬
    {//高崎
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssaQfd-4UFKnVBNERfqp8ug!2m2!1d36.317049583334!2d139.0142303035027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MQUoAP7Qt3FKnQdG8'
    },
    {//みどり市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXSvabspvEuZ9gUUU7x6veA!2m2!1d36.39352843810669!2d139.2840466617027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rvbZFLozp4tFDQ35A'
    },
    //ここから栃木
    {//宇都宮
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq_A8gKbstItEzswoXUy4wA!2m2!1d36.55842632753073!2d139.8958725886651!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LTAFQYjFbbzLgbcz6'
    },
    {//佐野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9AgA0OgwzZwLO5ICmuPFgw!2m2!1d36.31413127174959!2d139.565956508712!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FGsBmhLpA4pH97Tu6'
    },
    //ここから茨城
    {//水戸
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sePu5QagbJM7xDQdUt7zu9Q!2m2!1d36.36608976653896!2d140.4752483639899!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t6MfDPkAAiCScR9bA'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s590FgmqG6uU10IcS3HhDmA!2m2!1d36.08521950863133!2d140.1167654746796!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/kizU77nyxqkZzqZ17'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMGxj-ojbnYuqBg1_3ViJOg!2m2!1d36.46248123278551!2d140.5670921293107!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/VZ5CqVnZ3SkXW8js9'
    },
    //ここから千葉
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSPGgC6-EtKwa0tYSP3C-fw!2m2!1d35.61164523125404!2d140.1175861840636!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qJ6oxhqZjy5nb5WY7'
    },
    //ここから埼玉
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNiyGk3tpl61juWsmD0lu2Q!2m2!1d35.89352169965423!2d139.6298342408207!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/37YCijWt2SVWyRaz9'
    },
    {//秩父市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJ0wt4JL0tZK94KwYeVZP-A!2m2!1d35.99693705422535!2d139.0833107777418!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hdupWKoAWnGD4yHZ6'
    },
    {//川口市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-Z9zMQcHPITnruBJkaeTtA!2m2!1d35.80325346706685!2d139.7176947891895!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/6vLx118vigDveypP6'
    },  
    //ここから東京
    {//潮見
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3yhizJcsrkmxdbMiDfjAeg!2m2!1d35.65813225691684!2d139.8153658539401!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/A6g5JgGSC6neKyB2A'
    },
    {//青梅
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smcW9I7ptKmuit-5Sygh_QA!2m2!1d35.78768252794653!2d139.2748245771529!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cdx6Logne1Qg9SP49'
    },
    {//日野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssLnhpLUinB4LrygZkCdN6g!2m2!1d35.67952278549187!2d139.3943965708101!3f270!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1QN3DXAkUPVapgh59'
    },
    {//八丈町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suIis7U5XVFI0Etb3EHcS6g!2m2!1d33.12634608312592!2d139.8029309120774!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Bdx4m6px3BDtyU5z6'
    },
    //ここから神奈川
    {//逗子市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szjJ7bAA_eXnU5Lc4dAHZLw!2m2!1d35.29553265834637!2d139.5766966386201!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tMpofjidTkd6QLuD7'
    },
    //ここから山梨
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svqnSR9Wn2ppa1F2D-kFQyg!2m2!1d35.68545469558593!2d138.6836895249021!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Q6tVUp4Ra4RVrzDT8'
    },
    //ここから静岡
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNtiNNuMEC7wL59VoFL2OmQ!2m2!1d34.96924411062385!2d138.3832420292492!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Wzy8NdaQuopeSQYd6'
    },
    {//沼津市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0rdUchJ3LANRAhSeLvehrQ!2m2!1d35.09991127547545!2d138.8627467243927!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KB9Chsapgk2wTUif8'
    },
    //ここから富山
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHNP7G0d48xhHFDzgLpjnDg!2m2!1d36.69861367477401!2d137.21103412974!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dZrmxRhNVwYN5VJ97'
    },
    //ここから石川
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSN7Imo3pt9cQTj1WyxT8Eg!2m2!1d36.58300018799115!2d136.6400231121535!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FWYQGLUZevy8GpqH8'
    },
    {//七尾市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spDJ30Q37PcbmKifZSFeiLw!2m2!1d37.04160885727214!2d136.9697051263603!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sHAQXLvgzn9Yya3SA'
    },
    {//宝達志水町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ7aquERSygLgqYA3kWKbHQ!2m2!1d36.82061801717775!2d136.7621711356465!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/JizmJmp5XeepV9FH7'
    },
    //ここから福井
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sugGjnWkzsy6IUfyftOq3zQ!2m2!1d36.06299945530241!2d136.2176745481386!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QTL5C49xEaJCJLM16'
    },
    //ここから長野
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBJi44kPnNypZHhWI6qYtNw!2m2!1d36.64339538674999!2d138.187156680505!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Bh9eSWytZDcUVfhy6'
    },
    {//諏訪市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF5PdND5kxo4gF6zHXl9tyQ!2m2!1d36.00731948623504!2d138.1305343802476!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ZeDvRj2YzL2y4YhN9'
    },
    {//伊那市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn-kxpiRDrB-XUaIh1HajBw!2m2!1d35.84087539303353!2d137.9607126144175!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1cpa2xnjg1PBewvz6'
    },
    //ここから岐阜
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJWvTrdTDCp-Rvdj0F5Vzjg!2m2!1d35.41076646505784!2d136.7586310907425!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/u2euwgSZFqMJ5ng2A'
    },
    //ここから愛知
    {//豊田市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWnMzyGFZzL8IgwZqmTH-xg!2m2!1d35.08793978968597!2d137.1546188832031!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/huU55zUQaaqgZPLs5'
    },
    {//豊橋市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxgI_DLPCwRLTYDygQ_2lQw!2m2!1d34.76830652895325!2d137.3905732843451!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nY5BSChkn6mwQJcQ7'
    },
    //ここから滋賀
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgCRthnLDs9CiiCTOah6vwQ!2m2!1d35.00173901216767!2d135.873399573357!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DJFAaGCRPHdUfvkW9'
    },
    {//甲賀市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8vY5NNbbSjAaWIQJ7UZBtA!2m2!1d34.93128725272528!2d136.1689697293445!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Q8JjPimTe6xFmvTQ6'
    },
    {//草津市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sd7SkF-V7MPak9t4CHmgqzw!2m2!1d35.02489587345843!2d135.9574004365153!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/9y9H7JLG5pidfc6v8'
    },
    //ここから大阪
    {//豊中市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZIVIaztwmnrZxunJZfCslA!2m2!1d34.78205500830499!2d135.4689919369831!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dsXCrmGRLXbSBU9s6'
    },
    {//泉大津市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sesSv9csFHzLDMCi7KDXsug!2m2!1d34.50661164777839!2d135.4097958281543!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KnFfhUqnztrgauaR7'
    },
    //ここから京都
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su0mdAm1cSDtFGJ5iAJGCrg!2m2!1d34.98307584174085!2d135.7597298184396!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FKuvCnLRR2nqZUS97'
    },
    //ここから三重
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbaCC6GEIYpIpc5vRsdF2Gg!2m2!1d34.73334581801513!2d136.5131549386432!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/fxXPNzj7Vfd9pmVs5'
    },
    {//木曽岬町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ski_lUYVYCSfeMN50ffyHLQ!2m2!1d35.06842156233369!2d136.7482101312081!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CRKgvBUXLmrBjmoV7'
    },
    //ここから奈良
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssQ5pt82E15TtXNEFOsWstw!2m2!1d34.68443031228189!2d135.8204090979859!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wiNYeyDvDtDTSMnS8'
    },
    //ここから和歌山
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRhQiRC15Aw-tx-3GEmdjhg!2m2!1d34.23394232556036!2d135.1695282034707!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/3jxSgd2un9kdFeE27'
    },
    {//田辺市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snl3gyw78MJafc5s0As5YLQ!2m2!1d33.73354177662656!2d135.3826502947948!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/d1f5aQUTFeE7TGeB8'
    },
    //ここから兵庫
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s72HkxaxgzJHEtQRPjcmgLA!2m2!1d34.68508545445073!2d135.1964252860476!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Jqoi1PAi6YVHWoQY6'
    },
    {//姫路市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slsAFHX10KxVRdefVGNT8Jw!2m2!1d34.83284132247822!2d134.6848169365387!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rza8UikW7sFduiEo8'
    },
    {//川西市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suOsFNoCCc5gGdxvO-GfgAA!2m2!1d34.82817909554438!2d135.4138304031343!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gYBHUN5t6qbAwo5D9'
    },
    {//上郡町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn1rKTdO9rKsN8ql_tQiyrQ!2m2!1d34.86736324091445!2d134.3553119204863!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vwrMhTbvrzZjCvrw5'
    },
    //ここから鳥取
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDeEz563_NNe8VjfOnSsxWw!2m2!1d35.49536731660927!2d134.2292170086912!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Yt6wUqpSjGDxqkDs5'
    },
    //ここから島根
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sagKDE1CI9vLjBwByhHpMqw!2m2!1d35.37301663716529!2d132.7534574950491!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nH6gJqwDA2NeV9NJA'
    },
    //ここから岡山
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZiYFMUw8UhTMJNju3TtVwQ!2m2!1d34.66353145416075!2d133.9191741861175!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KkuuDh64z9xtoUR89'
    },
    {//瀬戸内市 特殊
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732934215268!6m8!1m7!1sFiGMjWCXREwClJ-vFnXROg!2m2!1d34.61885453804154!2d134.1694333629823!3f134.25086324111086!4f-0.882163069968513!5f2.025389808156848',
        answerUrl: 'https://maps.app.goo.gl/9vC4BbSqcVVfD48L6'
    },
    {//津山市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1733054347230!6m8!1m7!1s6q6vLsq7U3wHOpmy0sPFZA!2m2!1d35.05760369082778!2d134.0034954364505!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nfD9ZXtRzLcTMZwK6'
    },
    //ここから広島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svAcoZT_hhMTjg2yrEIXg8g!2m2!1d34.39938125405674!2d132.4780077377843!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MK93dnpaJTsVKBzV7'
    },
    {//福山市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8LtFHksYBb-iWJCdT-VnFQ!2m2!1d34.48557796898112!2d133.3646810333959!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/4iK2EQAFAK27tYSS8'
    },
    //ここから山口
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLRkX26ZmB1iLGznGVdNufw!2m2!1d34.19297490997425!2d131.4934615372486!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ExT3U5GwVVJXYLPR7'
    },
    {//下関市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv8cCHZpxIa8Z01uKP5UHEw!2m2!1d33.97765696556691!2d130.9443065310892!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wuGzxcWTDKoaJ3p18'
    },
    //ここから香川
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGlgVKgchnJLJd4Ff_a2WDQ!2m2!1d34.28881558129756!2d133.7943960330805!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LjoHpZzMZG432wE1A'
    },
    {//高松市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sePjpSFVWbKp4rtGAVcFhiw!2m2!1d34.34624534741443!2d134.0485639932554!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BcUVmiy4ET8wSKFm6'
    },
    //ここから徳島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5k6A-3ARjqFiZ-VPmCxNVA!2m2!1d34.07139852494615!2d134.5580897233915!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Vq745edwqLcCUijx6'
    },
    {//阿波市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbQXd08o0vhwxE524szNZuw!2m2!1d34.09070902843295!2d134.3029920290435!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/o2Uu6tRtjWREvWXG6'
    },
    //ここから愛媛
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRdnv-gcA2p1E3w-HIcO7aQ!2m2!1d33.83598703164661!2d132.7586934373035!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LZsuVcEKuE9BvAWn9'
    },
    //ここから高知
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFSTupmKj9AEmmXQ1ESKp6A!2m2!1d33.57668924921946!2d133.543770789514!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1v55avCfckhJsvtg9'
    },
    {//土佐清水市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOvKVstogdF1g10NfsB7fRQ!2m2!1d32.77797627110058!2d132.9608174239941!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/GgHbmuQkhUwcHVJm8'
    },
    {//東陽町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0jDj60C0nBHXSl6sVGdIHA!2m2!1d33.50174915234864!2d134.2677196018539!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/UHt7Lr3BVHoc6TJD8'
    },
    //ここから福岡
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGWfGjSN0-NHJukSkl6Bj9w!2m2!1d33.59377672909449!2d130.4248827668282!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/SxUhgCEjM7hujtCD8'
    },
    {//筑紫野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sebCB1USJog5d75qFdcANIA!2m2!1d33.48311436674672!2d130.5392487261449!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Si2RqLEqHP1SySnF7'
    },
    //ここから佐賀
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXMmefFY_TxCj3W0ofPobnQ!2m2!1d33.25929336138908!2d130.293273798779!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dH44gSUPoa7eeis96'
    },
    //ここから長崎
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQdpBwq_om9JeQbMwkXMrAA!2m2!1d32.7514327790084!2d129.8721315304493!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nhnA9iGi7yubxskm9'
    },
    {//大村市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIV3mVizcG330UZaMNz6D4w!2m2!1d32.91125467152954!2d129.9520326400641!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PjHvQ3Uy9zJXsuNV8'
    },
    {//松浦市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smWELWkA4XcK5JECxNh20QQ!2m2!1d33.3466409205445!2d129.7175652873712!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gqoLBP5xLrh9ePd97'
    },
    //ここから大分
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szXcdY_Ih20_wSEC0585ZSw!2m2!1d33.23713201496236!2d131.6023038367734!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/k1eXpNvdRhzNtEZ27'
    },
    //ここから熊本
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sySdYRyl5uCwKAgLRchPZcQ!2m2!1d32.78497881558272!2d130.6884379109792!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zEyAZLyz5qsE7rvGA'
    },
    //ここから宮崎
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqBd81PfkJMsm-AIYlxfzkg!2m2!1d31.91647391240669!2d131.4239353136747!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afw5iUqpqYMXFou99'
    },
    //ここから鹿児島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX0zK7pbTn1CesdpdCYvjGQ!2m2!1d31.58487360291157!2d130.5386978134463!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/f9pHYccd53nHRynE6'
    },
    {//南さつま市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxgEgs1FaJQVXbWfduhL2wA!2m2!1d31.41602722095661!2d130.3208931137264!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/C832D2sZejkj5QM36'
    },
    //ここから沖縄
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s50fsU3TQxzgGaG2w3WWbKA!2m2!1d26.21576506469355!2d127.6784788195732!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/HKePMZpUSEBaDcfg6'
    },
    

    


    //An Urban Japan Maps
    



    
    {//札幌
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz2YdS45QrtnV89tAlF6CKw!2m2!1d43.06232274302776!2d141.3549400765327!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vAKej8mxaHCBgvkV6'
    },
    {//東京駅
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sik3rTbfzp0-TAPzLWydrWQ!2m2!1d35.6817870240367!2d139.7647193792978!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PaMXJmkeVuj9X3KC8'
    },
    {//墨田区
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIBtgjb9VnIVXaVrpKdzbsQ!2m2!1d35.69432312378041!2d139.7955423929407!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cqzS8R3zp9hXZsMv6'
    },
    {//文京区
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sowmU38yYfNzHjrbLkGY42Q!2m2!1d35.72609001658314!2d139.7456428250045!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Dc3FhMb5tPpvdCebA'
    },
    {//新宿区
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1tD5KFEt1K2btuVKtA61_w!2m2!1d35.68978405334579!2d139.7035768978835!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zyhixintc874FVHw8'
    },
    {//神奈川
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sT5_-4guzUcfDfG8miMURHA!2m2!1d35.46901272029854!2d139.6166553687639!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YsHrUfgFMzeLYmKB7'
    },
    {//梅田
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKPk_SObjniAifv7MMBMulQ!2m2!1d34.70489316917189!2d135.4971172987883!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QTsDjCmPEV9ygwMdA'
    },
    {//中央
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sekRhasbsZOk6R8fsc_811A!2m2!1d34.68287330744474!2d135.5117828933985!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Hj8MVrYQKhWm2hjE8'
    },
    {//なんば
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXdkg4psjp_nybyjzrqREhQ!2m2!1d34.66722037224273!2d135.497073862837!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/j2VGfJ3ymEcJuoGd9'
    },
    {//名古屋
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s63ABdAOCxNeOxgQ6n94nug!2m2!1d35.17128764194855!2d136.8848857235975!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LQQYwxvyKRZzc1bB7'
    },
    {//名古屋2
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syzkU8akVz0NcA8b9HgOk1w!2m2!1d35.16462923945488!2d136.8980683638126!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/4KH4KuAhUzgsEWag9'
    },
    {//福岡
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srEmQcLdCEgmlXE7YIgCY1A!2m2!1d33.59361865255166!2d130.4134628994444!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/eGgCxELAU9Di2LCK6'
    },
    {//那覇
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb2UYSNu-1hvbgHJCQot0VA!2m2!1d26.21794498693781!2d127.6813307828769!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dJGpvybxZPjzuh737'
    },





    //SDF





    {//大湊
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srQwCqSN-5Vv3JPCoO-sBlg!2m2!1d41.25602523350306!2d141.1441225270373!3f0!4f0!5f0.40',
        answerUrl: 'https://maps.app.goo.gl/5FmUMJHtVov7izwS9'
    },
    {//焼津市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1733283317511!6m8!1m7!1sI6hE0aVsL9fTywknOkO6sg!2m2!1d34.81497295655703!2d138.2883617634696!3f132.29985816076822!4f3.840943111773612!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KofxhvUyLGEcKBTd9'
    },
    {//各務ヶ原
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8uD5YkRoVgKROi6Fp_SyJQ!2m2!1d35.39160755321708!2d136.8487811528867!3f0!4f1.973684210526315!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/fCf3UEBKhrgZJ2ji8'
    },
    {//千歳市
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1733283710260!6m8!1m7!1sgU6t5dZ0FA7e6FFf3w0Z1A!2m2!1d42.81505890476122!2d141.6504613654394!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qoLV8B9Fp7LUZNCu7'
    },
    {//福岡芦屋
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm__XP-sdFnSqsQEV77N39w!2m2!1d33.88952697209359!2d130.6592308182641!3f242.23115529070625!4f4.85594710568644!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BHhUjh81QYVs3z8Y7'
    },
    {//御前崎
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1733284029858!6m8!1m7!1sZP_AqZwSUXpIeftJ7LKdXw!2m2!1d34.60250811454531!2d138.2155321754028!3f196.88626889255966!4f3.6731792191442736!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/eRNKbgpEm3csRhmA7'
    },
    {//境港
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1733284135226!6m8!1m7!1syXstwzBGSh3NVWc4RYUq8w!2m2!1d35.50162969838949!2d133.2394500561767!3f239.03181529731674!4f5.660037067489981!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dTR3C9f8na5tgWWN6'
    },
];