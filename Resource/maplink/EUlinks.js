const streetViews = [
    //--------ここからアルバニア.al--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swL11ujWiJ9LA1MeP9YU8sA!2m2!1d41.32748083370634!2d19.8088651762016!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/ZY4B8PBVADkZTqFr7'
    },

    //--------ここからオーストリア.at--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP6jUVM5vGIRZL_-E90_S7g!2m2!1d48.20281988519039!2d16.36400333375083!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/xaY2PW4zyWGZARNW7'
    },

    //--------ここからベルギー.be--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2XPbS91ckt-6AzJwlrd-wQ!2m2!1d50.83659886080135!2d4.376051698622214!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/aMsqbPG8tNEtUL5p8'
    },

    //--------ここからブルガリア.bg--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq2Es1Wpr0ri-H-FPD5uGOA!2m2!1d42.69955074854119!2d23.36799737176111!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qiVyUJKTBQUNR2LJ6'
    },
    //--------ここからチェコ.cz--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKPhgTpQfQS7Q8Et7Zhk1Bw!2m2!1d50.07488010494509!2d14.40771022977867!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/RFWKRx449SDepzMNA'
    },
    {//東山の方
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sD_09eoE7PjpMvtag7UZPXA!2m2!1d49.41924241893258!2d18.34843032991825!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KoXCK4c3hB8VpLJJ8'
    },
    //--------ここからドイツ.de--------
    {//ライプツィヒ
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHn61sBgNnQagl57DJzSflQ!2m2!1d51.32949165707166!2d12.3463705182497!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zsyKMM6epPsjptDv6'
    },
    
    //--------ここからデンマーク.dk--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRCwtmFgsdFOyvJTcb0gH4w!2m2!1d55.66826139277358!2d12.57231476161392!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DUhVMTQT1BE9wgh9A'
    },

    //--------ここからスペイン.es--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMuMJMtYA0q-PLrO5vAEhGg!2m2!1d37.81013179975706!2d-6.203948049197485!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/afQXokzsvoanKNoy8'
    },

    //--------ここからフィンランド.fi--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s83u3-pQ6NY2ri1ww2LZ-sQ!2m2!1d60.29693297284877!2d24.95982202601304!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/FCFEjV8gfyswvAyj6',
        lat:60.296933, 
        lng :24.959822
    },

    //--------ここからフェロー諸島.fo--------
    {//風力発電
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNLBG4BPq4FmYNH0u3A2xLQ!2m2!1d62.02777612059548!2d-6.850862285543966!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/S3qyZMQLosKN6di37'
    },
    {//北の絶景
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHtUieA3dMKcigOqRFAEeLg!2m2!1d62.36471058781686!2d-6.811854524113966!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bXUi16R7hnxxzDUx8'
    },
    
    //--------ここからフランス.fr--------
    {//パリ
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfp2pcJ4BELoHlbGGYN7_nQ!2m2!1d48.89104847862511!2d2.292226165416838!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/SGbufwnVcjREf84Y8'
    },

    //--------ここからグリーンランド.gl--------
    {//ヌーク
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shG4TB3aG-XbEl87b-3yyoQ!2m2!1d64.16679039184727!2d-51.73080525477549!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/godEVoM9C4Z57Fsa8'
    },
    
    //--------ここからギリシャ.gr-------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfZBAUZ8m94InC4FrW_-1dQ!2m2!1d37.96387129659052!2d23.72467432929581!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/T6W9uhEXrpSqkJYD7'
    },
    
    //--------ここからアイルランド.ie--------
    {//ダブリン
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxq0uletp3_1DPdVOyTtuYg!2m2!1d53.36167201463208!2d-6.25947547839687!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/oMsPFzPNtCE41RBbA'
    },

    //--------ここからマン島.im--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shkMFfJWXyuZb5S2hXe9HWQ!2m2!1d54.15279036757472!2d-4.480989815644508!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/tkS64hQhfWNqY4ns5'
    },

    //--------ここからアイスランド.is--------
    {//南部
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHq-eAzrdbk3H5Lte_fKWSQ!2m2!1d63.69234455731127!2d-18.33212598442128!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vUVfMvtm5Ki6Q7xR7'
    },

    //--------ここからイタリア.it--------
    {//ローマ
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saYiLpvtLay04x92TQ4mM8A!2m2!1d41.86956580344217!2d12.52999692110261!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bSMeDbXUtjPurKyr7'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sytyogyMyf5oSXroASMhSTA!2m2!1d40.4095313616621!2d17.6392890717983!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/fc49KD1jzSFJBY9t6'
    },

    //--------ここからジャージー.je--------
    {//ローマ
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFvhXKYqpGc3YgLJlGDhEGA!2m2!1d49.18346502473231!2d-2.109763193128203!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LxNBfxbmTGwFu2bk8'
    },

    //--------ここからリヒテンシュタイン.li--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCU5Ga9JKConQRjXnTDPoYg!2m2!1d47.19956622062283!2d9.54401541281708!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KEJE5pQDZs3W632d6'
    },

    //--------ここからルクセンブルク.lu--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbaW-aIjW73JXrWCO6aKgsA!2m2!1d49.60220357576762!2d6.130774153910308!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/t7Fwx9VVUWU4j6zw9'
    },

    //--------ここからラトビア.lv--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK9PwGM5XOVV7biqeRlK_Ew!2m2!1d56.94191100470841!2d24.11405855890634!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/n33ApsDppUsJ14Rh8'
    },
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soC0On8MJc34r_rhZfmQ--Q!2m2!1d57.05379042453127!2d27.21383898025023!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/b4kz1kYPNHmLuuzF8'
    },

    //--------ここからモナコ.mc--------
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNTyNDL4-PDWmO0U608G7_A!2m2!1d43.73442001833539!2d7.426330508367622!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/qkmFz7rPtiejJ3DN6'
    },

    //--------ここからモンテネグロ.me--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP9erMVWo_vJCgGJ3DQx2IQ!2m2!1d43.1047773232039!2d19.03182724648641!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/vYarSCeQQnJBUibp8'
    },
    {//ポドゴリツァ
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1segh88_LRTPWEphdJEgLssg!2m2!1d42.44133649083388!2d19.25459183985554!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/XZ77U4QQTKNTqw8DA'
    },

    //--------ここから北マケドニア.mk--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s38X-um3ao90yIe40EreAhQ!2m2!1d41.99264234485783!2d21.42632609644707!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/iZm5wScJiqQmRzQN8'
    },

    //--------ここからマルタ.mt
    {//海沿南
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM56w6DXIBashJJRe2ntK0A!2m2!1d35.91307986866373!2d14.50673003194458!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/APyGE1V76jh7myJLA'
    },

    //--------ここからオランダ.nl--------
    {//アムステルダム
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5f9HiIM6MXnT6D2mRUSG2w!2m2!1d52.3596726490809!2d4.925485699065721!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/DKqcADvro9W3orhHA'
    },

    //--------ここからノルウェ.noー--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVTdwEa8blIj5CY54N-iq5w!2m2!1d59.90821562159554!2d10.75605157650714!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/5TqhV4BF9iKoziei8'
    },

    //--------ここからポーランド.pl--------
    {//ワルシャワ
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc-S5trkcikMkCJGYr3Lcrg!2m2!1d52.24461726825473!2d21.01023938393933!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/1Vv3ysHaaYEzCN3A8'
    },

    //--------ここからポルトガル.pt--------
    {//リスボン
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spR83RAAKK26hZ9QzJIkkXw!2m2!1d41.76849421387443!2d-7.491076093421399!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/zBBp4dsjtKpm5GpQ8'
    },
    {//北の山の方
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1rvdPwAsRj-x6lwZeKFtag!2m2!1d38.73405233892276!2d-9.149728270952693!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MTyX783k4smhTLEs7'
    },

    //--------ここからルーマニア.ro--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjvIDu8PM_CkOmMePeZNgAw!2m2!1d44.42275096069515!2d26.02235891062536!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/q3xcFoKQyFNRsrz96'
    },

    //--------ここからロシア.ru--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sR9RvDinWgU_MCCo5hWX1Nw!2m2!1d55.73997055686913!2d37.58504181062795!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YiaLGtbf92Jx89oK6'
    },

    //--------ここからサン・マリノ.sm--------
    {
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syzk8hKHKoH6_tblpLXgqnA!2m2!1d43.9768262380029!2d12.48695842099183!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/LtcHWZfwqwsrbpZJA'
    },

    //--------ここからトルコ.tr--------
    {//イスタンブール
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCUexnF8uM6aZn9QxAzFwVg!2m2!1d41.00700431155184!2d29.12151288105682!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/GBCmwcnGbHmgK32L9'
    },
    {//世界一長い吊橋
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx9j13B8XWnwLLfnC2NFplA!2m2!1d40.33666695202302!2d26.64283831197262!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/3tA4EiuCFFyybCJr8'
    },
    {//アンカラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPtO3FnArjLA7nix0KZU9Lw!2m2!1d39.92357710941222!2d32.85619316489237!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/MWV3VGFBukh8Mpak7'
    },
];