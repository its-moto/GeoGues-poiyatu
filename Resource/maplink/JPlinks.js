const streetViews = [
    /*
    {
        embedUrl: '',
        answerUrl: ''
    },
    */
    //--------------------ここから北海道
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
    {//函館
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snQNwpcb2lYrazK4Q_62_Mg!2m2!1d41.80057471169386!2d140.7369278961312!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gb46WsK2js3y5mqF8'
    },
    {//室蘭
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNd8QP8R1no8YWQeZqfmgcQ!2m2!1d42.98705361977813!2d144.3936032648718!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rEWDnxC6Y41Sn2Dy5'
    },
    {//利尻町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVSSE4uWw5JHlW9xJRS2e-A!2m2!1d45.18530682547136!2d141.1365538800638!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Nr4h8gybK49LbNW68'
    },
    {//利尻富士町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ9AFGQYIEyOdJs3cVL9Y-Q!2m2!1d45.24350470875584!2d141.2250553271258!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dciBAoWYUwaqU36H7'
    },
    {//礼文町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRoxgevxKYdIxuSPixLe0gw!2m2!1d45.29850332692595!2d141.0470517492345!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/8cFiaHja5cQFFdfy9'
    },
    //--------------------ここから青森
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
    //--------------------ここから岩手
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srb8aOSzT1tjOPjjdx-lMbA!2m2!1d39.70345596757032!2d141.1359971608507!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MJ9V7fKpKXRJDsci9'
    },
    {//遠野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0JVH7SUcRLqMX6U5-I_iYA!2m2!1d39.3317540061765!2d141.5311417749082!3f0!4f0!5f0.40',
        answerUrl: 'https://maps.app.goo.gl/6A71gFQow7hid9Zx9'
    },
    {//葛巻町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjSygqk5rOPWFvuQTzfSxcQ!2m2!1d40.03647419131421!2d141.4548868143741!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/HF4VB4Yo5J8G37xa9'
    },
    //--------------------ここから秋田
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz1OOyoddpz1pwFLMC46ZhQ!2m2!1d39.71688777427755!2d140.1485232960538!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EvDVNFCsErbzW5yT9'
    },
    {//仙北市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFCEXCGsSj1vqkhCiXb8aeQ!2m2!1d39.69714960312506!2d140.7205191223818!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Xtr5VDKLEJMZMWXi6'
    },
    {//大館市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqO_Y3KQ6HsM5X38vqns-PA!2m2!1d40.2681074377845!2d140.5547454178499!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PMDQm4xMzX6AutFv5'
    },
    {//にかほ市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfMhHvi6iDsd7OZSvqhBnhA!2m2!1d39.19901993459892!2d139.9063203214892!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/p2Wwq5oeCqYmJLD47'
    },
    //--------------------ここから宮城
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF7NHtI0thttmItvNAjaXlw!2m2!1d38.26017765071882!2d140.8861613652267!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/UzDAVfRa34YoC44n9'
    },
    {//石巻市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stJmRIJGqob4EUAbejuEZtQ!2m2!1d38.44774857072552!2d141.2678274225415!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QkjYtYSnYLZ7BYP79'
    },
    {//名取市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXp-ngEMFIDU7HGfcrqivVg!2m2!1d38.16581940747301!2d140.8899732319556!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/NtzxpNeHpUUgQ2aN9'
    },
    //--------------------ここから山形
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sedipf5XPRKjsyQF-ckozpg!2m2!1d38.25395633576015!2d140.3109396860645!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/NVYJicwFwArbCRKz7'
    },
    {//尾花沢市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4dfh0epEjAmzxbN7p7QqXg!2m2!1d38.61111924090518!2d140.4244614110339!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t1qbv673jPSwC78j7'
    },
    {//酒田市
        embedUrl: 'https://www.google.com/maps/embed?pb=F!6m8!1m7!1ss_eWrd5VcVo9PLHcVjDY2g!2m2!1d38.92105570902469!2d139.8431366552626!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PZ1QamuRewe6oLW69'
    },
    //--------------------ここから福島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spe3bgg5AwrrKQeof6oKMAg!2m2!1d37.75700761107395!2d140.4738270700811!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YYX4ueLvVKjuQ4HF6'
    },
    {//会津若松市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0CaqyROnTT80pOSFYa4isg!2m2!1d37.49067322605609!2d139.9264148810138!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/c4acoKVDUbwjvYQV6'
    },
    {//郡山市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVj6huewxZ-HUctNCqE4Mcg!2m2!1d37.39507031515124!2d140.3864818488882!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/xwEpoHSrs1XEMjt59'
    },
    //--------------------ここから新潟
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
    //--------------------ここから群馬
    {//高崎
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssaQfd-4UFKnVBNERfqp8ug!2m2!1d36.317049583334!2d139.0142303035027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MQUoAP7Qt3FKnQdG8'
    },
    {//太田市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stt3EVs2DKPPQFP4LB4GhFQ!2m2!1d36.29329906279214!2d139.3766956687283!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/5YLCRzAP86nQWaFm7'
    },
    {//みどり市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXSvabspvEuZ9gUUU7x6veA!2m2!1d36.39352843810669!2d139.2840466617027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rvbZFLozp4tFDQ35A'
    },
    //--------------------ここから栃木
    {//宇都宮
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq_A8gKbstItEzswoXUy4wA!2m2!1d36.55842632753073!2d139.8958725886651!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LTAFQYjFbbzLgbcz6'
    },
    {//佐野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9AgA0OgwzZwLO5ICmuPFgw!2m2!1d36.31413127174959!2d139.565956508712!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FGsBmhLpA4pH97Tu6'
    },
    {//那須塩原市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFaUS-apC70wyrltzWQEfVA!2m2!1d36.9327091063447!2d140.0204793474869!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Jk6fqJ9sDaLKTCKC7'
    },
    //--------------------ここから茨城
    {//水戸
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sePu5QagbJM7xDQdUt7zu9Q!2m2!1d36.36608976653896!2d140.4752483639899!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t6MfDPkAAiCScR9bA'
    },
    {//つくば市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s590FgmqG6uU10IcS3HhDmA!2m2!1d36.08521950863133!2d140.1167654746796!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/kizU77nyxqkZzqZ17'
    },
    {//東海村
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMGxj-ojbnYuqBg1_3ViJOg!2m2!1d36.46248123278551!2d140.5670921293107!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/VZ5CqVnZ3SkXW8js9'
    },
    {//大洗町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLJES0ig0vU3EGfZiVoljxQ!2m2!1d36.31221254340184!2d140.562627614901!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/PMeyjgeeQN6AJCdU6'
    },
    {//桜川市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM1woVTBGr5Ez0XVbdejqxg!2m2!1d36.32163555159597!2d140.1065984179241!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/5Xu2n6H9S4fSFhjDA'
    },
    //--------------------ここから千葉
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSPGgC6-EtKwa0tYSP3C-fw!2m2!1d35.61164523125404!2d140.1175861840636!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qJ6oxhqZjy5nb5WY7'
    },
    {//市原市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNk7x4RRYAWYbKG3owi-oKg!2m2!1d35.49664895658756!2d140.1150414798137!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1wvZzcDkBuKQpjfQA'
    },
    {//銚子市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8ir1WboWkFhBMAKyHzyQRQ!2m2!1d35.73568728980542!2d140.8288677312689!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/z6YPit5mXCKdmfQR9'
    },
    {//木更津市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV1dmZuOgMTU4vMIN1DXInA!2m2!1d35.37527519613454!2d139.9182940060992!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Sjt8fMxbtvu8ve916'
    },
    {//木更津市 海ほたる
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWHgCIIGrLqKnTdtaJs6PDw!2m2!1d35.46330915445957!2d139.8753798996217!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Ni33tr2W1ppUYzsB6'
    },
    //--------------------ここから埼玉
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNiyGk3tpl61juWsmD0lu2Q!2m2!1d35.89352169965423!2d139.6298342408207!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/37YCijWt2SVWyRaz9'
    },
    {//さいたま市2 大宮
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgR-_plHkBwYQhb5GMp6PGw!2m2!1d35.90752828217553!2d139.6212373253961!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gopHpmfdtQJMYZQF8'
    },
    {//さいたま市2
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXr7WWrNQEbcADqYE1Ni3cQ!2m2!1d35.85785337145069!2d139.6472573376161!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QXU6e8f6x9csz4Bs5'
    },
    {//秩父市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJ0wt4JL0tZK94KwYeVZP-A!2m2!1d35.99693705422535!2d139.0833107777418!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hdupWKoAWnGD4yHZ6'
    },
    {//川口市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-Z9zMQcHPITnruBJkaeTtA!2m2!1d35.80325346706685!2d139.7176947891895!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/6vLx118vigDveypP6'
    },  
    {//川口特殊
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn7c2g0_wabV29TQO6wLq6Q!2m2!1d35.85240232040524!2d139.7153706413238!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/WHSr9XYni3e4QZoY7'
    },
    {//所沢市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swsU4lxHNuGnoH4aULa3FfA!2m2!1d35.80671913129969!2d139.4565987234265!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/pcd8XRx9B8k83k9XA'
    },
    //--------------------ここから東京
    {//潮見
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv2Py5GKQUUvpI1j3SlE4zw!2m2!1d35.65929055611003!2d139.8170015705581!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FcbLZeRBApwMBCPY8'
    },
    {//青梅
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smcW9I7ptKmuit-5Sygh_QA!2m2!1d35.78768252794653!2d139.2748245771529!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cdx6Logne1Qg9SP49'
    },
    {//日野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssLnhpLUinB4LrygZkCdN6g!2m2!1d35.67952278549187!2d139.3943965708101!3f270!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1QN3DXAkUPVapgh59'
    },
    {//調布市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMdRHCyWPErS06bZOV7AbxQ!2m2!1d35.65979257438306!2d139.5321882282129!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/atrmXMZ72zGfqkAw9'
    },
    {//品川区
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stFVyp439bhgybxAmpc9Jxw!2m2!1d35.62266292489779!2d139.7385766981407!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/VyjQbEUtj9AGJirR6'
    },
    {//大田区蒲田駅
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDkinfdIh3eztoHTfMBq_wA!2m2!1d35.56266945008647!2d139.71441530686!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/63T7Qb7ecXU8zCjc8'
    },
    {//八丈町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suIis7U5XVFI0Etb3EHcS6g!2m2!1d33.12634608312592!2d139.8029309120774!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Bdx4m6px3BDtyU5z6'
    },
    //--------------------ここから神奈川
    {//みなとみらい
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWAfZdGuR3YmB9i-vZo0kTw!2m2!1d35.45556266205343!2d139.6302013051527!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Ufmm7G3fsR1PWWF76'
    },
    {//相模原市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq3Q6YBcCwyvWaVGA9hCsKw!2m2!1d35.57923867781498!2d139.3743767094224!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cENgPVnbBhLWTRRs7'
    },
    {//厚木市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAtj4kqp_Cn7YZ3lLAyBcpA!2m2!1d35.44350478381014!2d139.3695765333652!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/38xkvLLmYk4y9i1h7'
    },
    {//逗子市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szjJ7bAA_eXnU5Lc4dAHZLw!2m2!1d35.29553265834637!2d139.5766966386201!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tMpofjidTkd6QLuD7'
    },
    {//小田原市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz20TK9F4YeOqgScSsJzU-A!2m2!1d35.25452685431893!2d139.1557765234518!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/fka8eCVDCAtdhKjR7'
    },
    {//湯河原町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-a0zRl_LrGTc2Tnf0fAD-w!2m2!1d35.14545016497217!2d139.1135348985735!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nnRVyvSrPRfpvBRq9'
    },
    //--------------------ここから山梨
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svqnSR9Wn2ppa1F2D-kFQyg!2m2!1d35.68545469558593!2d138.6836895249021!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Q6tVUp4Ra4RVrzDT8'
    },
    {//南アルプス市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTthWA_Er7ZnbBenjCVKewQ!2m2!1d35.61409927329956!2d138.4837580887595!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rEDHGvCkQ1RaF5GZ9'
    },
    {//中央市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sR82Faba_mgrdiDHGqeaAkw!2m2!1d35.6061150300857!2d138.540828567633!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cGwbi5TKz15icZp5A'
    },

    {//富士山
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sA25IgFy7aGnepc9_6Y70vA!2m2!1d35.36067990830443!2d138.727358568445!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hkN1YiK96rhx66Te6'
    },

    //--------------------ここから静岡
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNtiNNuMEC7wL59VoFL2OmQ!2m2!1d34.96924411062385!2d138.3832420292492!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Wzy8NdaQuopeSQYd6'
    },
    {//静岡東
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-JF9hFxDhU9CFpu7zMMJcA!2m2!1d34.98597755352339!2d138.4223215692735!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/TzieETc1KeviDEnV7'
    },
    {//三島市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx3iHF5WErJQQbMBlhNmG9A!2m2!1d35.1254756308222!2d138.9111306919553!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/upzcTJ4gDZm9H7RNA'
    },
    {//湖西市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjbr6rT1rKxzuVMI_s_gZxw!2m2!1d34.6935627563485!2d137.5663942925227!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BLeNTMi91LkUKEsi8'
    },
    {//沼津市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0rdUchJ3LANRAhSeLvehrQ!2m2!1d35.09991127547545!2d138.8627467243927!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KB9Chsapgk2wTUif8'
    },
    {//御殿場市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svQdpOpNmUTf40n1KmILBIw!2m2!1d35.30125804884361!2d138.9459725284572!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Y3W6yZ54g7Xe34Lu8'
    },
    {//箱根町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svF7ECT7NVjYMKA9A2m4Cgg!2m2!1d35.20300282953561!2d139.0315645973979!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EyRQmroL7ik4m1ob6'
    },
    //--------------------ここから富山
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHNP7G0d48xhHFDzgLpjnDg!2m2!1d36.69861367477401!2d137.21103412974!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dZrmxRhNVwYN5VJ97'
    },
    {//黒部市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPC76obP0rRiC4npbgcnAyA!2m2!1d36.87200979543553!2d137.4468887822896!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rfAEpoPmh1Q6us9J8'
    },
    {//立山町 黒部ダム
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSD1cBdjzkmpojQuhycDUFg!2m2!1d36.56658909025774!2d137.6619265978147!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FpdePEq7T7UC5qv38'
    },
    {//入善町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUyHYU1RbDfmhJiWLLmcSwg!2m2!1d36.93404017922728!2d137.5040393879342!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/9aaFtokaJry5aV447'
    },
    //--------------------ここから石川
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSN7Imo3pt9cQTj1WyxT8Eg!2m2!1d36.58300018799115!2d136.6400231121535!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FWYQGLUZevy8GpqH8'
    },
    {//能登町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-rxob2U4aOW-Ohme91NXRw!2m2!1d37.31044689672012!2d137.1457880467422!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/GEnCyGpWCw1b1rT56'
    },
    {//七尾市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spDJ30Q37PcbmKifZSFeiLw!2m2!1d37.04160885727214!2d136.9697051263603!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sHAQXLvgzn9Yya3SA'
    },
    {//宝達志水町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ7aquERSygLgqYA3kWKbHQ!2m2!1d36.82061801717775!2d136.7621711356465!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/JizmJmp5XeepV9FH7'
    },
    //--------------------ここから福井
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sugGjnWkzsy6IUfyftOq3zQ!2m2!1d36.06299945530241!2d136.2176745481386!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/QTL5C49xEaJCJLM16'
    },
    {//若狭町1
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYnSRxRF5NrQpOjaiku1Efg!2m2!1d35.55283261552664!2d135.9102942247826!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BXCJta3UE7QSxWcKA'
    },
    {//敦賀
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDw54QzHhsjluQwcPD8L4-g!2m2!1d35.64788324829637!2d136.0721240739248!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/VSD3MWoavatRn1T19'
    },
    //--------------------ここから長野
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
    {//塩尻市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su9XboNAhn-sIxdSkkJXRmQ!2m2!1d36.11436525639703!2d137.9527951373019!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cNakx7dotHDyviPD6'
    },
    //--------------------ここから岐阜
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJWvTrdTDCp-Rvdj0F5Vzjg!2m2!1d35.41076646505784!2d136.7586310907425!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/u2euwgSZFqMJ5ng2A'
    },
    {//下呂市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8yzstTeyDmtjdaaf8MH3Wg!2m2!1d35.80763376244025!2d137.2425052207396!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/WBYpjKSuA7NmN6eX7'
    },
    //--------------------ここから愛知
    {//豊田市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWnMzyGFZzL8IgwZqmTH-xg!2m2!1d35.08793978968597!2d137.1546188832031!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/huU55zUQaaqgZPLs5'
    },
    {//豊橋市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxgI_DLPCwRLTYDygQ_2lQw!2m2!1d34.76830652895325!2d137.3905732843451!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nY5BSChkn6mwQJcQ7'
    },
    //--------------------ここから滋賀
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
    {//草津市2
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw6t-D3LNxpzFIG6WF4w-7Q!2m2!1d35.0280579832217!2d135.9513561423487!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/hXbsxr2PYA9qiYJj8'
    },
    //--------------------ここから大阪
    {//中央区
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_LmpzZwEVIlukl7goLJjGg!2m2!1d34.68333955376887!2d135.5170757596536!3f0!4f0!5f0.',
        answerUrl: 'https://maps.app.goo.gl/A8cqUgLuiVR9Uew97'
    },
    {//豊中市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZIVIaztwmnrZxunJZfCslA!2m2!1d34.78205500830499!2d135.4689919369831!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dsXCrmGRLXbSBU9s6'
    },
    {//泉大津市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sesSv9csFHzLDMCi7KDXsug!2m2!1d34.50661164777839!2d135.4097958281543!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KnFfhUqnztrgauaR7'
    },
    {//泉佐野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s01mRfSczjkvB0g67P9gfTQ!2m2!1d34.41075305266774!2d135.3005033239658!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/85Hh4Quwrwe4EyHK6'
    },
    {//堺市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXPraArCbdx3kQMTk9DAvyw!2m2!1d34.57300617639982!2d135.4755061849131!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/g5hrrmDrEQ9Xk2GU9'
    },
    {//堺市2
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-c_E4hUuQudwbxgjWJrAFA!2m2!1d34.57688543725274!2d135.4952463531291!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bQFvvVTgbHUye8LE8'
    },
    {//松原市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYVmOO0GUCx0eTSDjB-vDZQ!2m2!1d34.59318959799513!2d135.5499473953212!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/jtSKUNBmZUmvAtvg8'
    },
    {//淀川区
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNAsAfXB-1U0y9qFM3MPXYw!2m2!1d34.72513169162706!2d135.4987183443103!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/XepFXAedCEdK13xq6'
    },
    {//交野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3rda5op28OCuAUdICr2Vyg!2m2!1d34.78097227983906!2d135.6751316808223!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vUoJ5SvuQPUuVSgv9'
    },
    {//寝屋川市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1so1l7smPP6r7i4qu725tQBw!2m2!1d34.7626676249788!2d135.6288678770735!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vB7N8pjvDiPG8SgR6'
    },
    //--------------------ここから京都
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su0mdAm1cSDtFGJ5iAJGCrg!2m2!1d34.98307584174085!2d135.7597298184396!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FKuvCnLRR2nqZUS97'
    },
    {//南区
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL1HGSWQJn085smRVynCk8A!2m2!1d34.96566707830976!2d135.7459233910931!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/8SL4tb64CaamfuqYA'
    },
    {//上京
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWaaaJZHOgV7fIrsLY3glwA!2m2!1d35.01733429313494!2d135.7505005551085!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qisaXLmPLLZU7YPT7'
    },
    {//北区金閣
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQult55GvdgRI0NcMguv6QA!2m2!1d35.03760865867991!2d135.7307226662038!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vszz4jk3a2YEFa9L8'
    },
    //--------------------ここから三重
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbaCC6GEIYpIpc5vRsdF2Gg!2m2!1d34.73334581801513!2d136.5131549386432!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/fxXPNzj7Vfd9pmVs5'
    },
    {//松阪市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFFMlGT4EBsPcZq9WyRp3Qw!2m2!1d34.56424397273319!2d136.5303815039051!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cYpraCkcgdRhim387'
    },
    {//木曽岬町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ski_lUYVYCSfeMN50ffyHLQ!2m2!1d35.06842156233369!2d136.7482101312081!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CRKgvBUXLmrBjmoV7'
    },
    //--------------------ここから奈良
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssQ5pt82E15TtXNEFOsWstw!2m2!1d34.68443031228189!2d135.8204090979859!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wiNYeyDvDtDTSMnS8'
    },
    {//生駒市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQC3EZrOF-UgEjObRCEYb2A!2m2!1d34.69834688067538!2d135.7090142599131!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gLAtmwLskk4MQSzYA'
    },
    {//吉野町吉野駅
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfboYi6_HVI9Xy81JlrQWlQ!2m2!1d34.37698170194876!2d135.8535954386273!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/pzuwXmdhvT7Zu7nk6'
    },
    //--------------------ここから和歌山
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRhQiRC15Aw-tx-3GEmdjhg!2m2!1d34.23394232556036!2d135.1695282034707!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/3jxSgd2un9kdFeE27'
    },
    {//田辺市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snl3gyw78MJafc5s0As5YLQ!2m2!1d33.73354177662656!2d135.3826502947948!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/d1f5aQUTFeE7TGeB8'
    },
    {//太地町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seQfA0JfWVQfoSqfxjLPecQ!2m2!1d33.59257588534789!2d135.93358895659!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ToGtokwWx4XiHnwq5'
    },
    //--------------------ここから兵庫
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s72HkxaxgzJHEtQRPjcmgLA!2m2!1d34.68508545445073!2d135.1964252860476!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Jqoi1PAi6YVHWoQY6'
    },
    {//神戸2
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl-YLTMPokNbzj3UsevACZQ!2m2!1d34.62900338750306!2d135.0404282345192!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YhvzyxL3W2XApQj67'
    },
    {//洲本市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGwEq2ooJiK8mHaRLazQ1ew!2m2!1d34.34483762385872!2d134.8874954833809!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/xdjmBuMyh4mLa1VB6'
    },
    {//姫路市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slsAFHX10KxVRdefVGNT8Jw!2m2!1d34.83284132247822!2d134.6848169365387!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rza8UikW7sFduiEo8'
    },
    {//加西市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfJZ191l8vcMcO8hJOw8LFQ!2m2!1d34.94818678780828!2d134.8019379379337!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/6Lu2mi9dMBioVTh76'
    },
    {//川西市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suOsFNoCCc5gGdxvO-GfgAA!2m2!1d34.82817909554438!2d135.4138304031343!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gYBHUN5t6qbAwo5D9'
    },
    {//上郡町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn1rKTdO9rKsN8ql_tQiyrQ!2m2!1d34.86736324091445!2d134.3553119204863!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vwrMhTbvrzZjCvrw5'
    },
    {//尼崎市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq1camRCm3zRWlLQotMnMeg!2m2!1d34.73291892638827!2d135.4344740875819!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/b643tBsoTqc5v6Bs5'
    },
    //--------------------ここから鳥取
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDeEz563_NNe8VjfOnSsxWw!2m2!1d35.49536731660927!2d134.2292170086912!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Yt6wUqpSjGDxqkDs5'
    },
    {//米子市皆生温泉
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8nuMdZUIsqvK1dloN6g7Iw!2m2!1d35.45117987806196!2d133.3573712613099!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/SwNjhZbNc8r35Tn38'
    },
    {//倉吉市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTt8mi_k9aLqxe6EulBo67A!2m2!1d35.44310197218618!2d133.8071729622416!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YBy4zNYVCK83FZum7'
    },
    {//大山町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sr2KGkJd6r0BJmYEVfSJWBQ!2m2!1d35.49136806974585!2d133.4494886142274!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wtLZUkHqgiyC6QUe8'
    },
    {//大山頂上
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sh_fqBS7OFoqCUNmdRfrKqg!2m2!1d35.37077564640823!2d133.5390864859717!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KM5HMNNsp3HeT1Nc7'
    },
    //--------------------ここから島根
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ7R0CVrZ9QERzV_CpXkLQw!2m2!1d35.46443689299375!2d133.065095714661!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/SXh9c4JW27c3mJoW9'
    },
    {//出雲市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sagKDE1CI9vLjBwByhHpMqw!2m2!1d35.37301663716529!2d132.7534574950491!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nH6gJqwDA2NeV9NJA'
    },
    {//出雲市2
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYsZEX6qE8Ns-b-a5V-NcGA!2m2!1d35.39991124158713!2d132.6730032101246!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/XfPmWNReEVP6kQbJA'
    },
    //--------------------ここから岡山
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZiYFMUw8UhTMJNju3TtVwQ!2m2!1d34.66353145416075!2d133.9191741861175!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KkuuDh64z9xtoUR89'
    },
    /*{//笠岡市 歯科
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-dZm5MnoH36qjuhuIfNDdQ!2m2!1d34.52118111040683!2d133.4941261317754!3f180!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/D1ruMNfxJxYkmcpR9'
    },*/
    {//瀬戸内市 特殊
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1732934215268!6m8!1m7!1sFiGMjWCXREwClJ-vFnXROg!2m2!1d34.61885453804154!2d134.1694333629823!3f134.25086324111086!4f-0.882163069968513!5f2.025389808156848',
        answerUrl: 'https://maps.app.goo.gl/9vC4BbSqcVVfD48L6'
    },
    {//津山市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6q6vLsq7U3wHOpmy0sPFZA!2m2!1d35.05760369082778!2d134.0034954364505!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/nfD9ZXtRzLcTMZwK6'
    },
    {//新庄村
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scL75d1cY0zzi2YpcE7UEYw!2m2!1d35.17910855534379!2d133.5679570903864!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vMSShS97Z85miJqx8'
    },
    //--------------------ここから広島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svAcoZT_hhMTjg2yrEIXg8g!2m2!1d34.39938125405674!2d132.4780077377843!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MK93dnpaJTsVKBzV7'
    },
    {//福山市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8LtFHksYBb-iWJCdT-VnFQ!2m2!1d34.48557796898112!2d133.3646810333959!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/4iK2EQAFAK27tYSS8'
    },
    {//尾道市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPkkljy4PA2mPaY-5ihpqhw!2m2!1d34.4014769749236!2d133.1877611550887!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/54MZAanio27aVDuz5'
    },
    {//尾道市しまなみ海道生口島
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2J7S0wgjG4PYhhaMTZukkQ!2m2!1d34.30165394113825!2d133.147995167777!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AYtdhKf5YQ52gGm37'
    },
    //--------------------ここから山口
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLRkX26ZmB1iLGznGVdNufw!2m2!1d34.19297490997425!2d131.4934615372486!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ExT3U5GwVVJXYLPR7'
    },
    {//下関市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv8cCHZpxIa8Z01uKP5UHEw!2m2!1d33.97765696556691!2d130.9443065310892!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wuGzxcWTDKoaJ3p18'
    },
    //--------------------ここから香川
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGlgVKgchnJLJd4Ff_a2WDQ!2m2!1d34.28881558129756!2d133.7943960330805!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LjoHpZzMZG432wE1A'
    },
    {//高松市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sePjpSFVWbKp4rtGAVcFhiw!2m2!1d34.34624534741443!2d134.0485639932554!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BcUVmiy4ET8wSKFm6'
    },
    {//多度津町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1BQKq_gj3qNRj81u5JrkwA!2m2!1d34.27146846555433!2d133.7519384883188!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CiBnCG6mJ7NFXbee8'
    },
    {//土庄町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPCuwO1YOeqOJA4MWcx0kdg!2m2!1d34.48808196236957!2d134.173476259893!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/3VppMFdoGtPsRvYw8'
    },
    //--------------------ここから徳島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5k6A-3ARjqFiZ-VPmCxNVA!2m2!1d34.07139852494615!2d134.5580897233915!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Vq745edwqLcCUijx6'
    },
    {//徳島市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQIiYswZNbBxI1zIAT_QRpQ!2m2!1d34.17208496633796!2d134.6070800774271!3f0!4f0!5f0.40',
        answerUrl: 'https://maps.app.goo.gl/MPHrQyeJCC1g6rxW9'
    },
    {//鳴門市 大塚国際美術館前
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAUnemTEkZeclHw9YeOSJvw!2m2!1d34.23148186658372!2d134.636819698658!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Ansi5fVvRbpYuxYz8'
    },
    {//阿波市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbQXd08o0vhwxE524szNZuw!2m2!1d34.09070902843295!2d134.3029920290435!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/o2Uu6tRtjWREvWXG6'
    },
    //--------------------ここから愛媛
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRdnv-gcA2p1E3w-HIcO7aQ!2m2!1d33.83598703164661!2d132.7586934373035!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LZsuVcEKuE9BvAWn9'
    },
    {//今治市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK0NNH_7KIaCyn64fqFwvbA!2m2!1d34.05028870056267!2d132.9823983593475!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/NTeRHjU7FKk4CnTo7'
    },
    //--------------------ここから高知
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFSTupmKj9AEmmXQ1ESKp6A!2m2!1d33.57668924921946!2d133.543770789514!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1v55avCfckhJsvtg9'
    },
    {//四万十市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1selvI4UQJmg2-K0zM2-w9dQ!2m2!1d32.98361662653689!2d132.9430454180985!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/mjkmyYubJjsz1kec8'
    },
    {//土佐清水市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOvKVstogdF1g10NfsB7fRQ!2m2!1d32.77797627110058!2d132.9608174239941!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/GgHbmuQkhUwcHVJm8'
    },
    {//東陽町
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0jDj60C0nBHXSl6sVGdIHA!2m2!1d33.50174915234864!2d134.2677196018539!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/UHt7Lr3BVHoc6TJD8'
    },
    //--------------------ここから福岡
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGWfGjSN0-NHJukSkl6Bj9w!2m2!1d33.59377672909449!2d130.4248827668282!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/SxUhgCEjM7hujtCD8'
    },
    {//筑紫野市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sebCB1USJog5d75qFdcANIA!2m2!1d33.48311436674672!2d130.5392487261449!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Si2RqLEqHP1SySnF7'
    },
    {//北九州市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stRiLEnHQw47aRPfg7cviOw!2m2!1d33.88585807066481!2d130.8768493799081!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/2PgWyTQaUfDXpFGEA'
    },
    //--------------------ここから佐賀
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXMmefFY_TxCj3W0ofPobnQ!2m2!1d33.25929336138908!2d130.293273798779!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dH44gSUPoa7eeis96'
    },
    {//神埼市吉野ケ里公園
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si4xHR_A3aqUjq4AzchiJng!2m2!1d33.32642159435798!2d130.3822204152272!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/EC1oQ4i3JVrGimbbA'
    },
    //--------------------ここから長崎
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
    {//対馬市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxnYN_mmYFz2JLDBjCqE6Pg!2m2!1d34.20405447095616!2d129.2898733809338!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qo9rLycPCjHhGmpB6'
    },
    {//壱岐市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDTZMY5nC2G5yPVtLrklX1A!2m2!1d33.75613655847274!2d129.6994405073091!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Go9e6auVbCEycNAq8'
    },
    //--------------------ここから大分
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szXcdY_Ih20_wSEC0585ZSw!2m2!1d33.23713201496236!2d131.6023038367734!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/k1eXpNvdRhzNtEZ27'
    },
    {//大分市2
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5FHzJNb-4DXTqQlr8QCwKQ!2m2!1d33.23172951095293!2d131.6189466208482!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sca7LAx8Kxs3oa4t6'
    },
    {//宇佐市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZAnZH7yw0hRC1EZzz-_rZA!2m2!1d33.52517940997998!2d131.3440457668291!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BTjNEpd75SS8ws6K6'
    },
    //--------------------ここから熊本
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sySdYRyl5uCwKAgLRchPZcQ!2m2!1d32.78497881558272!2d130.6884379109792!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zEyAZLyz5qsE7rvGA'
    },
    {//水俣市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx1pc2Dh-CG2RERLvXHj3yg!2m2!1d32.21083144906189!2d130.4213786295224!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/TrfUV6LnWHuKjMbo8'
    },
    {//阿蘇市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQdJntYILNIC7Qa1cNNel0g!2m2!1d32.93551995002604!2d131.0802126104555!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/cxHhpsPuWKebvGwE6'
    },
    //--------------------ここから宮崎
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqBd81PfkJMsm-AIYlxfzkg!2m2!1d31.91647391240669!2d131.4239353136747!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afw5iUqpqYMXFou99'
    },
    {//日向市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCnd-3H_z4ImeQSAFTF5Tjw!2m2!1d32.42542155534296!2d131.6308825521864!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sYVme7LK3oVms92F8'
    },
    //--------------------ここから鹿児島
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX0zK7pbTn1CesdpdCYvjGQ!2m2!1d31.58487360291157!2d130.5386978134463!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/f9pHYccd53nHRynE6'
    },
    {//南さつま市
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxgEgs1FaJQVXbWfduhL2wA!2m2!1d31.41602722095661!2d130.3208931137264!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/C832D2sZejkj5QM36'
    },
    {//奄美大島
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWzLCqRTe9iFqlToNL7iN-Q!2m2!1d28.38069985941377!2d129.4975155629086!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/8zKj1ripd4VM1rcdA'
    },
    //--------------------ここから沖縄
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s50fsU3TQxzgGaG2w3WWbKA!2m2!1d26.21576506469355!2d127.6784788195732!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/HKePMZpUSEBaDcfg6'
    },
    {//宮古島
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIMOBoQUOpVVZaSzluY_LMg!2m2!1d24.80683992310385!2d125.278261273046!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tLKtndqFaLssUVxX6'
    },
    {//宜野座村
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYoLbvolTIgcl-mMphft0aw!2m2!1d26.48475232504145!2d127.9726357764032!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/UsPSfJ5DmZnVMCqf8'
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
    {//梅田2
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sywM-tUew9H0-pEx3kg4n6Q!2m2!1d34.69949712430947!2d135.4965137296376!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/j43CgJPwQyQWL39p7'
    },
    {//梅田3
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sThWmi-3VAw__wGzwQlF1bw!2m2!1d34.70112230326449!2d135.4918289071962!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bq5xNThueWqtTHsMA'
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
    {//名古屋3
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZMMgmra4VNPVA2K7-FOd8A!2m2!1d35.10938038952442!2d136.8850873508672!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AkaUAYk5DL1iyoaMA'
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