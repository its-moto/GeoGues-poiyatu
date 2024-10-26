const streetViews = [
    //--------ここからマダガスカル--------
    {//アンタナナリボ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748056745!6m8!1m7!1s6za1FUktl2TfG4VvuQQymg!2m2!1d-18.92413604984545!2d47.5303773151325!3f353.42137757176124!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/mq85emWsLafHGUgB6',
        lat: -18.924136,
        lng: 47.5303773
    },{//アンドランジトラ国立公園
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748169063!6m8!1m7!1sw1IFREiC31x8UdNct80Ajg!2m2!1d-22.09643716388154!2d46.76869654909648!3f58.296507447950304!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/rVVMPr38iQb4vsoh6',
        lat: -22.0964372, 
        lng: 46.7686965
    },{//RN8
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729558515149!6m8!1m7!1sT3l8G1-u-whp-D_ON55Ahg!2m2!1d-20.24951093684258!2d44.41981496911148!3f33.69!4f1.730000000000004!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/CDihGVEvPw7FqANb6',
        lat: -20.2495109,
        lng: 44.419815
    },{//トゥリアラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748280172!6m8!1m7!1sqphmHGtMyYIaivwXMslUnw!2m2!1d-23.35543941590885!2d43.66870509739654!3f217.47046392841867!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/sbDbVz9FUCLNjZ77A',
        lat: -23.3554394, 
        lng: 43.6687051
    },{//女が多いあの船
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748408119!6m8!1m7!1sVg5fwWp5wLwMtCHhNAWn9A!2m2!1d-13.47998450787207!2d48.37172165082281!3f277.1460460528473!4f-5.565119182109456!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/bfeN9cythqbN1GiDA',
        lat: -13.4799845,
        lng: 48.3717217
    },{//ディストリクト・ダンバンジャ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748562605!6m8!1m7!1sask63xylYk6fD8PUJ1muQA!2m2!1d-13.67461862265171!2d48.45172214761642!3f359.7327229387385!4f-1.8056639865623794!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/X6dqrR3krNra2FV37',
        lat: -13.6746186,
        lng: 48.4517221
    },
    //--------ここからカタール--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729560118781!6m8!1m7!1szTkpakBCVSLjek5XvsjtNw!2m2!1d25.38993284962018!2d51.50754138133623!3f4.71680813350514!4f8.33121799395201!5f0.7683791652511252',
        answerUrl: 'https://maps.app.goo.gl/azwjRM8kv3qo1PT98',
        lat: 25.3899328,
        lng:51.5075414
    },
    //--------ここからナイジェリア--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563232545!6m8!1m7!1sV5ElpS1anDSPuh65RNAb0g!2m2!1d9.094980378230119!2d7.215790133775001!3f189.5805824366172!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/AB7VPEe82jXhudut7',
        lat:9.0949804,
        lng:7.2157901
    },
    //--------ここからアイスランド--------
    {//南部
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563312865!6m8!1m7!1sHq-eAzrdbk3H5Lte_fKWSQ!2m2!1d63.69234455731127!2d-18.33212598442128!3f139.69965!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/vUVfMvtm5Ki6Q7xR7',
        lat:63.6923446,
        lng:-18.332126
    },
    //--------ここからデンマーク--------
    {//ヌーク
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563539845!6m8!1m7!1shG4TB3aG-XbEl87b-3yyoQ!2m2!1d64.16679039184727!2d-51.73080525477549!3f60.623439447914265!4f0.7432076849720914!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/godEVoM9C4Z57Fsa8',
        lat:64.1667904,
        lng:-51.7308053
    },
    //--------ここからグアテマラ--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729563706909!6m8!1m7!1sC_Q94zAtV9DqV1-AvPqjCQ!2m2!1d15.21436890158927!2d-91.51419112699985!3f52.436822448001365!4f1.51730611052308!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/yo1NZpaFPDc9wd3E7',
        lat:15.2143689,
        lng:-91.5141911
    },
    //--------ここからスペイン--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729570944819!6m8!1m7!1sMuMJMtYA0q-PLrO5vAEhGg!2m2!1d37.81013179975706!2d-6.203948049197485!3f0!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/afQXokzsvoanKNoy8',
        lat:37.8101318,
        lng:-6.203948
    },
    //--------ここからイタリア--------
    {//ローマ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729575410471!6m8!1m7!1saYiLpvtLay04x92TQ4mM8A!2m2!1d41.86956580344217!2d12.52999692110261!3f36.24351!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/bSMeDbXUtjPurKyr7',
        lat:41.8695658,
        lng:12.5299969
    },
    //--------ここからサン・マリノ--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729640408382!6m8!1m7!1syzk8hKHKoH6_tblpLXgqnA!2m2!1d43.9768262380029!2d12.48695842099183!3f90!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/LtcHWZfwqwsrbpZJA',
        lat:43.9768262,
        lng:12.4869584
    },
    //--------ここからモナコ--------
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729648670195!6m8!1m7!1sNTyNDL4-PDWmO0U608G7_A!2m2!1d43.73442001833539!2d7.426330508367622!3f214.35010313854997!4f-2.340611929334088!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/qkmFz7rPtiejJ3DN6',
        lat:43.73442,
        lng:7.4263305
    },
    //--------ここからメキシコ--------
    {//メキシコシティ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729653584123!6m8!1m7!1sVKv7rRP2Kzyh2U_0rjym4A!2m2!1d19.42611476011491!2d-99.20435414100933!3f203.16454093043953!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/ySa7ZPsFAA9Py7C69',
        lat:19.4261148,
        lng:-99.2043541
    },
    //--------ここからボリビア--------
    {//ラパス
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729653783043!6m8!1m7!1se-XFAAI2ASLqHDbCSl296Q!2m2!1d-16.48706056494146!2d-68.12913546847376!3f170.85405415926917!4f-6.012594925853563!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/PavGen7ZJ3FChPoz7',
        lat:-16.4870606,
        lng:-68.1291355
    },
    //--------ここからアルゼンチン--------
    {//ブエノスアイレス
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729654026425!6m8!1m7!1sT5A39ulw7gBKol0sBC7mmw!2m2!1d-34.60988419369181!2d-58.45087021634892!3f59.08582!4f0!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/n42KagaQmE1rnFqm9',
        lat:-34.6098842,
        lng:-58.4508702
    },
    //--------ここからエクアドル--------
    {//ガラパゴス
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729654365050!6m8!1m7!1s34FrRPdaWCjZwM7hMT3S-w!2m2!1d-0.3939843952755621!2d-91.00094057538234!3f247.77589624221633!4f-2.7731317237751227!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/yYzvpbQu6DD7U6h79',
        lat:-0.3939844,
        lng:-91.0009406
    },
    //--------ここからサントメ・プリンシペ--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729655114430!6m8!1m7!1sNYXFxKMllTPtZcgq6HZHjg!2m2!1d0.3579978143717866!2d6.722748196853231!3f185.46384404102594!4f5.673857862745237!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/qf6JhhfnCCmJkFVZA',
        lat:0.3579978,
        lng:6.7227482

    },
    //--------ここからレユニオン--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729655769786!6m8!1m7!1sbBD4AU9q1nXXpbjwXteOhQ!2m2!1d-21.32995478022573!2d55.46989004834647!3f202.67602343622397!4f-18.170737961232533!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/q8c5SfeTqu5Bn3An7',
        lat:-21.3299548,
        lng:55.46989
    },
    //--------ここからインド--------
    {//ニューデリー
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729656431149!6m8!1m7!1s2DxQbZenx4AaM1YXp2of8w!2m2!1d28.56691300292865!2d77.23432386645625!3f344.4796988672118!4f-5.8694352991380185!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/CeTvrRn17XMbCmY99',
        lat:28.566913,
        lng:77.2343239
    },
    //--------ここからウクライナ--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729656827902!6m8!1m7!1sJWPyt8Vf7IvqHq87zVmOAQ!2m2!1d50.38800266542728!2d30.46096840738821!3f229.75147360076744!4f-13.563623378164976!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/pLhg6wpQgnbniFDS7',
        lat:50.3880027,
        lng:30.4609684
    },
    //--------ここからフランス--------
    {//パリ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729658217941!6m8!1m7!1sfp2pcJ4BELoHlbGGYN7_nQ!2m2!1d48.89104847862511!2d2.292226165416838!3f291.6114740529567!4f5.405839330693908!5f1.1298318235527214',
        answerUrl: 'https://maps.app.goo.gl/SGbufwnVcjREf84Y8',
        lat:48.8910485,
        lng:2.2922262
    },
    //--------ここからアイルランド--------
    {//ダブリン
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729658345150!6m8!1m7!1sxq0uletp3_1DPdVOyTtuYg!2m2!1d53.36167201463208!2d-6.25947547839687!3f21.110134154370453!4f3.3152340536305616!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/oMsPFzPNtCE41RBbA',
        lat:53.361672,
        lng:-6.2594755
    },
    //--------ここからモンゴル--------
    {//ウランバートル
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729725551265!6m8!1m7!1sZXGSC6WHAo_2b8nzXxVg1g!2m2!1d47.96254780674171!2d106.5924571145944!3f94.84097589294579!4f6.592395569379121!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/r5CnwUPguBETmYYFA',
        lat:47.9625478,
        lng:106.5924571
    },
    {//--------ここから南アフリカ--------
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729725687548!6m8!1m7!1sJC7PPXTQl1RAS-trNwE70Q!2m2!1d-28.49886343579033!2d26.99809079000054!3f156.85259672111442!4f0.5101643210523434!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/hvsM1v3PVBJLsK427',
        lat:-28.4988634,
        lng:26.9980908
    },
    //--------ここからオランダ--------
    {//アムステルダム
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729726015572!6m8!1m7!1s5f9HiIM6MXnT6D2mRUSG2w!2m2!1d52.3596726490809!2d4.925485699065721!3f347.8878850661762!4f-5.0009781814525525!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/DKqcADvro9W3orhHA',
        lat:52.3596726,
        lng:4.9254857
    },
    //--------ここからポーランド--------
    {//ワルシャワ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729742726063!6m8!1m7!1sc-S5trkcikMkCJGYr3Lcrg!2m2!1d52.24461726825473!2d21.01023938393933!3f143.48324484876142!4f-6.2389448976545765!5f0.7820865974627469',
        answerUrl: 'https://maps.app.goo.gl/1Vv3ysHaaYEzCN3A8',
        lat:52.2446173,
        lng:21.0102394
    }
    /*
    ,{
        embedUrl: '',
        answerUrl: ''
    }
    */
];
