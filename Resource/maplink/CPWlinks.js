// 世界CPW (Claude Picked World) の地点データ
// tools/collect-cpw.js で公式ストリートビュー (!2e0) だけを自動で集めたもの
// ARWlinks.js とパノラマIDが重複しないようにチェック済み
// このファイルは tools/build-cpw.js で作り直すので、手で直さないこと
var streetViews = [
    {//ダント・カード, ジャールカンド (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgdAAYMi7ovbCf-qDBe9FHw!2m2!1d24.17511!2d85.25117!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.17511,85.25117,3a,75y,90t/data=!3m4!1e1!3m2!1sgdAAYMi7ovbCf-qDBe9FHw!2e0'
    },
    {//ジャム, マハーラーシュトラ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBBCgAAnLw-rtgnOpFi7S4w!2m2!1d18.64607!2d73.71389!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.64607,73.71389,3a,75y,90t/data=!3m4!1e1!3m2!1sBBCgAAnLw-rtgnOpFi7S4w!2e0'
    },
    {//5 プルガリロル通り (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbEQ1W22i0dEkcbUB1m5mrQ!2m2!1d44.3821!2d26.00285!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.3821,26.00285,3a,75y,90t/data=!3m4!1e1!3m2!1sbEQ1W22i0dEkcbUB1m5mrQ!2e0'
    },
    {//中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNyJHhgctvuAe3rOEDquuQQ!2m2!1d-7.03555!2d110.85621!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.03555,110.85621,3a,75y,90t/data=!3m4!1e1!3m2!1sNyJHhgctvuAe3rOEDquuQQ!2e0'
    },
    {//3 ハーフェンフェルト通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNcPnfE8qDWXYI58O5Sz90Q!2m2!1d47.6261!2d10.80345!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.6261,10.80345,3a,75y,90t/data=!3m4!1e1!3m2!1sNcPnfE8qDWXYI58O5Sz90Q!2e0'
    },
    {//41 ジョゼフ・ロワ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOuZLf1FHWRhm_db8cifR5g!2m2!1d49.45795!2d1.12221!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.45795,1.12221,3a,75y,90t/data=!3m4!1e1!3m2!1sOuZLf1FHWRhm_db8cifR5g!2e0'
    },
    {//ロピツェ, モラヴィア・スレスコ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTkVcPcie-m6rnYrGTOHUwA!2m2!1d49.67282!2d18.58907!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.67282,18.58907,3a,75y,90t/data=!3m4!1e1!3m2!1sTkVcPcie-m6rnYrGTOHUwA!2e0'
    },
    {//1 ホーファー通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbm7oW1uJb8EwajMYZqma_A!2m2!1d51.00594!2d6.06089!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.00594,6.06089,3a,75y,90t/data=!3m4!1e1!3m2!1sbm7oW1uJb8EwajMYZqma_A!2e0'
    },
    {//D23A (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svQE-QcsBhgqcY7zIS_awyw!2m2!1d42.62854!2d2.84929!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.62854,2.84929,3a,75y,90t/data=!3m4!1e1!3m2!1svQE-QcsBhgqcY7zIS_awyw!2e0'
    },
    {//SP47a (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEQWm6Ntd86FJMEWf7uUjPQ!2m2!1d42.60756!2d13.50183!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.60756,13.50183,3a,75y,90t/data=!3m4!1e1!3m2!1sEQWm6Ntd86FJMEWf7uUjPQ!2e0'
    },
    {//シャン・ド・ウッド (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sChmb4Su8-L2G1nkjDtOElw!2m2!1d50.63332!2d5.90623!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.63332,5.90623,3a,75y,90t/data=!3m4!1e1!3m2!1sChmb4Su8-L2G1nkjDtOElw!2e0'
    },
    {//ベーフェレン＝クライベーケ＝ズウェインドレヒト, フランデレン地域 (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soNaTZ4Vozi4mjRCtXrKLig!2m2!1d51.21267!2d4.23951!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.21267,4.23951,3a,75y,90t/data=!3m4!1e1!3m2!1soNaTZ4Vozi4mjRCtXrKLig!2e0'
    },
    {//A20 (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKHkMSDc_pqdOOvCF9GN5Yg!2m2!1d38.01607!2d14.38368!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.01607,14.38368,3a,75y,90t/data=!3m4!1e1!3m2!1sKHkMSDc_pqdOOvCF9GN5Yg!2e0'
    },
    {//55 Patrig Grima (マルタ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si8PwLRuSefldFiKD2WoMsg!2m2!1d35.84509!2d14.51985!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.84509,14.51985,3a,75y,90t/data=!3m4!1e1!3m2!1si8PwLRuSefldFiKD2WoMsg!2e0'
    },
    {//イングランド (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sipsgUSTOdh-yNexlO5KAig!2m2!1d50.35517!2d-5.13119!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.35517,-5.13119,3a,75y,90t/data=!3m4!1e1!3m2!1sipsgUSTOdh-yNexlO5KAig!2e0'
    },
    {//D3 (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZxpiUazmRu39T4_BFuw2cQ!2m2!1d44.66846!2d3.48853!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.66846,3.48853,3a,75y,90t/data=!3m4!1e1!3m2!1sZxpiUazmRu39T4_BFuw2cQ!2e0'
    },
    {//マンマッド - ナガーソル・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smV7tAEGZr7IcYqhJwCbChw!2m2!1d20.13376!2d74.51369!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.13376,74.51369,3a,75y,90t/data=!3m4!1e1!3m2!1smV7tAEGZr7IcYqhJwCbChw!2e0'
    },
    {//ザーゲレイ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqgd72Z-psnh0LvOTzFLEdw!2m2!1d50.9218!2d5.34627!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.9218,5.34627,3a,75y,90t/data=!3m4!1e1!3m2!1sqgd72Z-psnh0LvOTzFLEdw!2e0'
    },
    {//イングランド (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-1zKdfhm63dpph4nsgHafA!2m2!1d50.32473!2d-3.8169!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.32473,-3.8169,3a,75y,90t/data=!3m4!1e1!3m2!1s-1zKdfhm63dpph4nsgHafA!2e0'
    },
    {//Sopishtë, ソピシュテ (北マケドニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIBXh7krkRUNMcLWrY1lr4Q!2m2!1d41.95897!2d21.43349!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.95897,21.43349,3a,75y,90t/data=!3m4!1e1!3m2!1sIBXh7krkRUNMcLWrY1lr4Q!2e0'
    },
    {//16 ニコラエ・バルチェスク通り (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sa5HQH0YWKqeSaRvienEb3g!2m2!1d46.20646!2d26.43915!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.20646,26.43915,3a,75y,90t/data=!3m4!1e1!3m2!1sa5HQH0YWKqeSaRvienEb3g!2e0'
    },
    {//18 フローラ通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIyrtvxcuVSS2akaIncaSPA!2m2!1d52.56576!2d13.40148!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.56576,13.40148,3a,75y,90t/data=!3m4!1e1!3m2!1sIyrtvxcuVSS2akaIncaSPA!2e0'
    },
    {//イブラー, シャルキーヤ地方 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syYAKaydzHrxTn8zzwv53Ig!2m2!1d22.67579!2d58.525!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.67579,58.525,3a,75y,90t/data=!3m4!1e1!3m2!1syYAKaydzHrxTn8zzwv53Ig!2e0'
    },
    {//430 ホワイトウッド・ロード (オーストラリア中北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2ObU57JN-e-Gd0dN8s1D8A!2m2!1d-12.49722!2d131.05725!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.49722,131.05725,3a,75y,90t/data=!3m4!1e1!3m2!1s2ObU57JN-e-Gd0dN8s1D8A!2e0'
    },
    {//Reykjanesbær (アイスランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s93cdy1GUdlaK_ad0419pUA!2m2!1d63.99301!2d-22.56771!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.99301,-22.56771,3a,75y,90t/data=!3m4!1e1!3m2!1s93cdy1GUdlaK_ad0419pUA!2e0'
    },
    {//13 シースシュタンド (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seTReU73hsc6DzSYKsX_2Zw!2m2!1d47.23026!2d11.27415!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.23026,11.27415,3a,75y,90t/data=!3m4!1e1!3m2!1seTReU73hsc6DzSYKsX_2Zw!2e0'
    },
    {//665 Jl. Raya Bojong (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5rhWAK43UGXGtSnbYvU_xg!2m2!1d-6.96589!2d109.60671!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.96589,109.60671,3a,75y,90t/data=!3m4!1e1!3m2!1s5rhWAK43UGXGtSnbYvU_xg!2e0'
    },
    {//N72 (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siiv4wzlLrPErdJXeeGRZbA!2m2!1d52.07277!2d-9.27194!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.07277,-9.27194,3a,75y,90t/data=!3m4!1e1!3m2!1siiv4wzlLrPErdJXeeGRZbA!2e0'
    },
    {//P32 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sW78puMcwZ6o9H04kuiXF-w!2m2!1d-28.46252!2d30.14453!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.46252,30.14453,3a,75y,90t/data=!3m4!1e1!3m2!1sW78puMcwZ6o9H04kuiXF-w!2e0'
    },
    {//955 サロー・ストリート (ブリティッシュコロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6Lk0iQTL7gLrkGlprDv39w!2m2!1d49.28295!2d-123.12747!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.28295,-123.12747,3a,75y,90t/data=!3m4!1e1!3m2!1s6Lk0iQTL7gLrkGlprDv39w!2e0'
    },
    {//156 アルテ・プロヒンガー・シュタイゲ (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX6luOJa_m3irjPcjwTYxzw!2m2!1d48.66088!2d9.44064!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.66088,9.44064,3a,75y,90t/data=!3m4!1e1!3m2!1sX6luOJa_m3irjPcjwTYxzw!2e0'
    },
    {//コーバーグ・ノース, ビクトリア (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxD-jRl2K4zO59YHCYRFQEQ!2m2!1d-37.73415!2d144.97675!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.73415,144.97675,3a,75y,90t/data=!3m4!1e1!3m2!1sxD-jRl2K4zO59YHCYRFQEQ!2e0'
    },
    {//4 D41 (レユニオン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPtqvy_NHcD3YIc9FjlPzGQ!2m2!1d-20.88637!2d55.4336!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.88637,55.4336,3a,75y,90t/data=!3m4!1e1!3m2!1sPtqvy_NHcD3YIc9FjlPzGQ!2e0'
    },
    {//84 コンウェイ・ストリート (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scn_wV_ZRCO-16KQE5dyFbQ!2m2!1d-28.81351!2d153.28022!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.81351,153.28022,3a,75y,90t/data=!3m4!1e1!3m2!1scn_wV_ZRCO-16KQE5dyFbQ!2e0'
    },
    {//コディジーナハリ, カルナータカ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK2NsAwACRweMY5gMzqst3A!2m2!1d13.71436!2d77.39668!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.71436,77.39668,3a,75y,90t/data=!3m4!1e1!3m2!1sK2NsAwACRweMY5gMzqst3A!2e0'
    },
    {//東ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdj4A5CVobdoNLgeXnz9Tfw!2m2!1d-7.38744!2d112.72046!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.38744,112.72046,3a,75y,90t/data=!3m4!1e1!3m2!1sdj4A5CVobdoNLgeXnz9Tfw!2e0'
    },
    {//55 セント・レオナーズ・クローズ (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF1jE9b2jxNGthC5EebOpPA!2m2!1d54.66536!2d-3.3711!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.66536,-3.3711,3a,75y,90t/data=!3m4!1e1!3m2!1sF1jE9b2jxNGthC5EebOpPA!2e0'
    },
    {//GIV-6612 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sACCw4F6csnQBoqMc_H2hQQ!2m2!1d41.83906!2d2.94964!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.83906,2.94964,3a,75y,90t/data=!3m4!1e1!3m2!1sACCw4F6csnQBoqMc_H2hQQ!2e0'
    },
    {//ハミナ, キュメンラークソ (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sN8l4bCJ-iT0wMzOa_ibIOw!2m2!1d60.56275!2d27.1849!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.56275,27.1849,3a,75y,90t/data=!3m4!1e1!3m2!1sN8l4bCJ-iT0wMzOa_ibIOw!2e0'
    },
    {//ザ・クロッシング (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdJ7zA_N_jaVNJT8cikob7A!2m2!1d-33.93877!2d18.49089!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.93877,18.49089,3a,75y,90t/data=!3m4!1e1!3m2!1sdJ7zA_N_jaVNJT8cikob7A!2e0'
    },
    {//グレーター アクラ (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj-dlF3MzgmKOULIrhx35_w!2m2!1d5.5544!2d-0.32763!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.5544,-0.32763,3a,75y,90t/data=!3m4!1e1!3m2!1sj-dlF3MzgmKOULIrhx35_w!2e0'
    },
    {//12948 68 アベニュー (ブリティッシュコロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHvkwuSe1fsgnM1NHaN9Gow!2m2!1d49.12621!2d-122.86369!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.12621,-122.86369,3a,75y,90t/data=!3m4!1e1!3m2!1sHvkwuSe1fsgnM1NHaN9Gow!2e0'
    },
    {//43 72 (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svDctcw3Jmq5xejYoplgpGQ!2m2!1d48.58166!2d19.95408!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.58166,19.95408,3a,75y,90t/data=!3m4!1e1!3m2!1svDctcw3Jmq5xejYoplgpGQ!2e0'
    },
    {//ホーチミン, ホー・チ・ミン (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saqgg-Y9JbL6i4v6CJ67Pag!2m2!1d10.98343!2d106.47642!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.98343,106.47642,3a,75y,90t/data=!3m4!1e1!3m2!1saqgg-Y9JbL6i4v6CJ67Pag!2e0'
    },
    {//15 キャンパス・ドライブ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stpSHV2YhzSaqWr8X7pogQw!2m2!1d40.05297!2d-74.87579!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.05297,-74.87579,3a,75y,90t/data=!3m4!1e1!3m2!1stpSHV2YhzSaqWr8X7pogQw!2e0'
    },
    {//バンコク (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRCfZeWMGaP0peE8XYreDMg!2m2!1d13.68442!2d100.68933!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.68442,100.68933,3a,75y,90t/data=!3m4!1e1!3m2!1sRCfZeWMGaP0peE8XYreDMg!2e0'
    },
    {//42 メイン・ストリート (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slpnaQNfr8vpJJkdNLNpGCg!2m2!1d53.38894!2d-6.20066!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.38894,-6.20066,3a,75y,90t/data=!3m4!1e1!3m2!1slpnaQNfr8vpJJkdNLNpGCg!2e0'
    },
    {//2 Jalan Bayu 1 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdkl7T2lKdgrCYbRU-IfeZQ!2m2!1d3.3579!2d101.25027!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.3579,101.25027,3a,75y,90t/data=!3m4!1e1!3m2!1sdkl7T2lKdgrCYbRU-IfeZQ!2e0'
    },
    {//93 アルベルディ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVbD3iB-4ytZA1e_Q1kcDrQ!2m2!1d-33.28118!2d-62.19176!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.28118,-62.19176,3a,75y,90t/data=!3m4!1e1!3m2!1sVbD3iB-4ytZA1e_Q1kcDrQ!2e0'
    },
    {//1447 フォックスブルック・サークル (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjvumEIzDnOvPBkGrigIpVg!2m2!1d34.64329!2d-80.76333!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.64329,-80.76333,3a,75y,90t/data=!3m4!1e1!3m2!1sjvumEIzDnOvPBkGrigIpVg!2e0'
    },
    {//57 ハウズ・クレセント (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOswKxUIQg76X4gFJEvjbXw!2m2!1d46.08115!2d-64.81377!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.08115,-64.81377,3a,75y,90t/data=!3m4!1e1!3m2!1sOswKxUIQg76X4gFJEvjbXw!2e0'
    },
    {//Jl. Amir Hamzah (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_P6le6Qp94RipfsOxl9DWg!2m2!1d-8.58657!2d116.11206!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.58657,116.11206,3a,75y,90t/data=!3m4!1e1!3m2!1s_P6le6Qp94RipfsOxl9DWg!2e0'
    },
    {//ビゴール通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-o7D1R5xnE6JhG0zgOmHVQ!2m2!1d43.58758!2d1.33776!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.58758,1.33776,3a,75y,90t/data=!3m4!1e1!3m2!1s-o7D1R5xnE6JhG0zgOmHVQ!2e0'
    },
    {//1 アバディーン・ロード (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL8iKS2mDTgKFVkYw1lJPOg!2m2!1d-28.09474!2d26.87586!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.09474,26.87586,3a,75y,90t/data=!3m4!1e1!3m2!1sL8iKS2mDTgKFVkYw1lJPOg!2e0'
    },
    {//カンダール (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjn2hBRmtNHYO6985NrK6-Q!2m2!1d11.24782!2d105.2701!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.24782,105.2701,3a,75y,90t/data=!3m4!1e1!3m2!1sjn2hBRmtNHYO6985NrK6-Q!2e0'
    },
    {//43 ジェラニ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAcD4DAGJfcIOeSR2UBnn3w!2m2!1d38.10408!2d15.67477!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.10408,15.67477,3a,75y,90t/data=!3m4!1e1!3m2!1sAcD4DAGJfcIOeSR2UBnn3w!2e0'
    },
    {//140 レオナルド・ダ・ヴィンチ通り (サルデーニャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9nYPU1nBA09Xkc5O_UvVmQ!2m2!1d39.22167!2d9.25305!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.22167,9.25305,3a,75y,90t/data=!3m4!1e1!3m2!1s9nYPU1nBA09Xkc5O_UvVmQ!2e0'
    },
    {//12453 グランド・アベニュー (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj0gRym2SG5gRC8_oTWioeg!2m2!1d33.62091!2d-112.32772!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.62091,-112.32772,3a,75y,90t/data=!3m4!1e1!3m2!1sj0gRym2SG5gRC8_oTWioeg!2e0'
    },
    {//2 Kvarneslättsgatan (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3hhB26BbAPECyD97Ylzlaw!2m2!1d56.73657!2d15.9199!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.73657,15.9199,3a,75y,90t/data=!3m4!1e1!3m2!1s3hhB26BbAPECyD97Ylzlaw!2e0'
    },
    {//ペイユ, プロバンス＝アルプ＝コートダジュール (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5GdIM3sBKI-hnbx5qhUUKQ!2m2!1d43.83823!2d7.41664!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.83823,7.41664,3a,75y,90t/data=!3m4!1e1!3m2!1s5GdIM3sBKI-hnbx5qhUUKQ!2e0'
    },
    {//58 オセアノ・デ・ラス・テンペスタデス (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNNrZOgYMliqUwXVHB4qLsw!2m2!1d19.28857!2d-99.00535!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.28857,-99.00535,3a,75y,90t/data=!3m4!1e1!3m2!1sNNrZOgYMliqUwXVHB4qLsw!2e0'
    },
    {//3 Cesta na amfiteáter (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0wJQsmLhZW_Jk8qwTgaB2g!2m2!1d48.74255!2d19.13869!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.74255,19.13869,3a,75y,90t/data=!3m4!1e1!3m2!1s0wJQsmLhZW_Jk8qwTgaB2g!2e0'
    },
    {//ヌラーナ, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZyaGEq05yxjAu4_i3xKjkg!2m2!1d27.99436!2d76.38051!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.99436,76.38051,3a,75y,90t/data=!3m4!1e1!3m2!1sZyaGEq05yxjAu4_i3xKjkg!2e0'
    },
    {//シアン・ストリート (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk3ida_idxPS6AjMMTzm50Q!2m2!1d32.45934!2d35.04379!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.45934,35.04379,3a,75y,90t/data=!3m4!1e1!3m2!1sk3ida_idxPS6AjMMTzm50Q!2e0'
    },
    {//プラハ (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRFd1uLyRs90AoXXzF44Gww!2m2!1d50.02694!2d14.41003!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.02694,14.41003,3a,75y,90t/data=!3m4!1e1!3m2!1sRFd1uLyRs90AoXXzF44Gww!2e0'
    },
    {//13 フランソワ・ドルピーヌ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sivgCxkROiRMVDWmf4vQpxw!2m2!1d47.42689!2d0.97511!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.42689,0.97511,3a,75y,90t/data=!3m4!1e1!3m2!1sivgCxkROiRMVDWmf4vQpxw!2e0'
    },
    {//Google マップ (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sr_F55txi0SJOkyRLwXlu1A!2m2!1d60.1464!2d24.63843!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.1464,24.63843,3a,75y,90t/data=!3m4!1e1!3m2!1sr_F55txi0SJOkyRLwXlu1A!2e0'
    },
    {//74 Светозара Дујановића (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9S4VwLITgmitBzmS6EFpPw!2m2!1d45.12518!2d20.07463!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.12518,20.07463,3a,75y,90t/data=!3m4!1e1!3m2!1s9S4VwLITgmitBzmS6EFpPw!2e0'
    },
    {//キシー (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s40bkyLB6KLH9kYtNvruKLw!2m2!1d-0.78657!2d34.73212!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.78657,34.73212,3a,75y,90t/data=!3m4!1e1!3m2!1s40bkyLB6KLH9kYtNvruKLw!2e0'
    },
    {//MEX 5 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5tg4aUuQhz2hYZIILrmOMw!2m2!1d19.64387!2d-99.38411!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.64387,-99.38411,3a,75y,90t/data=!3m4!1e1!3m2!1s5tg4aUuQhz2hYZIILrmOMw!2e0'
    },
    {//2 フライゲリヒト通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9E-8sCcltkEia_eJCoUv8A!2m2!1d50.08239!2d8.99327!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.08239,8.99327,3a,75y,90t/data=!3m4!1e1!3m2!1s9E-8sCcltkEia_eJCoUv8A!2e0'
    },
    {//ボールダー, コロラド州 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shKJmMC4G9iB8zZHzol02yg!2m2!1d40.01564!2d-105.25981!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.01564,-105.25981,3a,75y,90t/data=!3m4!1e1!3m2!1shKJmMC4G9iB8zZHzol02yg!2e0'
    },
    {//Søvikveien (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sH9K3EKheEbRYxFp9kLXllw!2m2!1d66.01749!2d12.63006!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@66.01749,12.63006,3a,75y,90t/data=!3m4!1e1!3m2!1sH9K3EKheEbRYxFp9kLXllw!2e0'
    },
    {//20 ナ・ヴィフリードツェ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDg-hdqwGcPzZooqQ1uP1Jg!2m2!1d49.30411!2d16.5407!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.30411,16.5407,3a,75y,90t/data=!3m4!1e1!3m2!1sDg-hdqwGcPzZooqQ1uP1Jg!2e0'
    },
    {//27 Highfield Pl (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm8uZMVOucvU3RHySEjeiFQ!2m2!1d-43.51837!2d172.56032!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-43.51837,172.56032,3a,75y,90t/data=!3m4!1e1!3m2!1sm8uZMVOucvU3RHySEjeiFQ!2e0'
    },
    {//小松市, 石川県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ18Ub9C2QTof7ms12BewDg!2m2!1d36.40505!2d136.49782!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.40505,136.49782,3a,75y,90t/data=!3m4!1e1!3m2!1sQ18Ub9C2QTof7ms12BewDg!2e0'
    },
    {//46 ヨーク・クレセント (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMgSgJrTRzY2lojGTIQPvPA!2m2!1d54.59811!2d-1.28581!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.59811,-1.28581,3a,75y,90t/data=!3m4!1e1!3m2!1sMgSgJrTRzY2lojGTIQPvPA!2e0'
    },
    {//11 バド・コート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIYAjh9Tsk1ivaapIX9BmkA!2m2!1d39.10112!2d-84.46131!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.10112,-84.46131,3a,75y,90t/data=!3m4!1e1!3m2!1sIYAjh9Tsk1ivaapIX9BmkA!2e0'
    },
    {//28 ペルス＝ネージュ通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn0PBndJJLoo9ALbd91paQw!2m2!1d46.27571!2d6.92841!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.27571,6.92841,3a,75y,90t/data=!3m4!1e1!3m2!1sn0PBndJJLoo9ALbd91paQw!2e0'
    },
    {//1857 ヒートン・ループ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCdPs2N1wpcFAaqe4Up0jPA!2m2!1d34.78612!2d-106.73304!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.78612,-106.73304,3a,75y,90t/data=!3m4!1e1!3m2!1sCdPs2N1wpcFAaqe4Up0jPA!2e0'
    },
    {//ナタ, セントラル (ボツワナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJxWmi3_uC1qrN4pHrspPsQ!2m2!1d-20.20905!2d26.18108!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.20905,26.18108,3a,75y,90t/data=!3m4!1e1!3m2!1sJxWmi3_uC1qrN4pHrspPsQ!2e0'
    },
    {//Jl. Demangan Kidul (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDsSHvsDztx4_zEa8JppXPg!2m2!1d-7.74368!2d110.59276!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.74368,110.59276,3a,75y,90t/data=!3m4!1e1!3m2!1sDsSHvsDztx4_zEa8JppXPg!2e0'
    },
    {//バランザーテ, ロンバルディア (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0gMIq4BkgI2qeXy7uvxP-g!2m2!1d45.52751!2d9.10823!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.52751,9.10823,3a,75y,90t/data=!3m4!1e1!3m2!1s0gMIq4BkgI2qeXy7uvxP-g!2e0'
    },
    {//コンヤ県 (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfOybAOpwGAnq5EsWw5pA9w!2m2!1d37.99529!2d32.01945!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.99529,32.01945,3a,75y,90t/data=!3m4!1e1!3m2!1sfOybAOpwGAnq5EsWw5pA9w!2e0'
    },
    {//380 Trường Chinh (ベトナム)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxCXb2c532TtK4phkiM6IUw!2m2!1d11.59079!2d109.04409!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.59079,109.04409,3a,75y,90t/data=!3m4!1e1!3m2!1sxCXb2c532TtK4phkiM6IUw!2e0'
    },
    {//Kučište, ドゥブロヴニク＝ネレトヴァ (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s23scodco-CxthH6-8gVoQQ!2m2!1d42.98258!2d17.11031!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.98258,17.11031,3a,75y,90t/data=!3m4!1e1!3m2!1s23scodco-CxthH6-8gVoQQ!2e0'
    },
    {//483 Av. Padre João Bôsco (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sukhA89t_S9-u10ZFM007wg!2m2!1d-14.72422!2d-57.05284!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.72422,-57.05284,3a,75y,90t/data=!3m4!1e1!3m2!1sukhA89t_S9-u10ZFM007wg!2e0'
    },
    {//ケメロヴォ州 (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKUwy_LDZgBbWXDuWo-G2Bg!2m2!1d54.89624!2d85.65179!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.89624,85.65179,3a,75y,90t/data=!3m4!1e1!3m2!1sKUwy_LDZgBbWXDuWo-G2Bg!2e0'
    },
    {//27 Chu Văn An (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPAaCxLa8j-oxdvxfKPeuHQ!2m2!1d17.76361!2d106.42393!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.76361,106.42393,3a,75y,90t/data=!3m4!1e1!3m2!1sPAaCxLa8j-oxdvxfKPeuHQ!2e0'
    },
    {//Prestevegen (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRaivKl3ipgGOoJlbrNZjLQ!2m2!1d58.77293!2d5.62619!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@58.77293,5.62619,3a,75y,90t/data=!3m4!1e1!3m2!1sRaivKl3ipgGOoJlbrNZjLQ!2e0'
    },
    {//ガジプル, ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHH-59tioln032VfTklxEIg!2m2!1d25.57812!2d83.57756!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.57812,83.57756,3a,75y,90t/data=!3m4!1e1!3m2!1sHH-59tioln032VfTklxEIg!2e0'
    },
    {//ナイロビ, Wilaya ya Machakos (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbdDQqhUvrReyaMzUsVf0RA!2m2!1d-1.28719!2d36.98504!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.28719,36.98504,3a,75y,90t/data=!3m4!1e1!3m2!1sbdDQqhUvrReyaMzUsVf0RA!2e0'
    },
    {//6666 チェットウッド・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAMzIU1s_CSDObHD-q8HYhw!2m2!1d29.7076!2d-95.47849!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.7076,-95.47849,3a,75y,90t/data=!3m4!1e1!3m2!1sAMzIU1s_CSDObHD-q8HYhw!2e0'
    },
    {//ولاية بركاء, 南バーティナ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_x7pj11u6jX7ZxjbOzypEg!2m2!1d23.69059!2d57.88449!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.69059,57.88449,3a,75y,90t/data=!3m4!1e1!3m2!1s_x7pj11u6jX7ZxjbOzypEg!2e0'
    },
    {//Vana-Tartu Maantee (エストニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-tOkeMH0ktou8RkNtcnreg!2m2!1d59.38685!2d24.81543!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.38685,24.81543,3a,75y,90t/data=!3m4!1e1!3m2!1s-tOkeMH0ktou8RkNtcnreg!2e0'
    },
    {//850 モントゴメリー・ストリート (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKTr11siLg-tpnBZb2o5lHw!2m2!1d45.94241!2d-66.64754!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.94241,-66.64754,3a,75y,90t/data=!3m4!1e1!3m2!1sKTr11siLg-tpnBZb2o5lHw!2e0'
    },
    {//36 クリシャン通り (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sr8T5qBwP9TfoQ21aBat3ug!2m2!1d45.23286!2d24.33863!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.23286,24.33863,3a,75y,90t/data=!3m4!1e1!3m2!1sr8T5qBwP9TfoQ21aBat3ug!2e0'
    },
    {//30 マナー・パーク・クレセント (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKI2LXnpih9Qd2ReKcfpEcg!2m2!1d51.61293!2d-0.27808!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.61293,-0.27808,3a,75y,90t/data=!3m4!1e1!3m2!1sKI2LXnpih9Qd2ReKcfpEcg!2e0'
    },
    {//1441 ノース・インダストリアル・パーク・ドライブ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s94sSGwABsJ9KK4gjvbFUFw!2m2!1d31.3581!2d-110.95068!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.3581,-110.95068,3a,75y,90t/data=!3m4!1e1!3m2!1s94sSGwABsJ9KK4gjvbFUFw!2e0'
    },
    {//21 Maironio g. (リトアニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPoHTC1FaKXgHUVafVI39gQ!2m2!1d54.65177!2d23.03042!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.65177,23.03042,3a,75y,90t/data=!3m4!1e1!3m2!1sPoHTC1FaKXgHUVafVI39gQ!2e0'
    },
    {//Bantul, ジョグジャカルタ特別州 (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWZ-ipueXWuMXyAc00IUn8w!2m2!1d-7.92914!2d110.28278!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.92914,110.28278,3a,75y,90t/data=!3m4!1e1!3m2!1sWZ-ipueXWuMXyAc00IUn8w!2e0'
    },
    {//ロチャ (ウルグアイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sItsI58sdbhUUhYtVxMznhA!2m2!1d-34.20012!2d-53.87532!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.20012,-53.87532,3a,75y,90t/data=!3m4!1e1!3m2!1sItsI58sdbhUUhYtVxMznhA!2e0'
    },
    {//169 Corso Lombardia (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9lEqn9Y6ndQaUNXSbeEeDg!2m2!1d45.1007!2d7.65322!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.1007,7.65322,3a,75y,90t/data=!3m4!1e1!3m2!1s9lEqn9Y6ndQaUNXSbeEeDg!2e0'
    },
    {//38 ドン・アントーニオ・フェレイラ・ゴメス通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srRLmBZfnu6c8Q6VmF_NfcA!2m2!1d38.80635!2d-9.1825!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.80635,-9.1825,3a,75y,90t/data=!3m4!1e1!3m2!1srRLmBZfnu6c8Q6VmF_NfcA!2e0'
    },
    {//D73 (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seZYRQQU1IjWOsvvoqSairA!2m2!1d25.23299!2d55.28254!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.23299,55.28254,3a,75y,90t/data=!3m4!1e1!3m2!1seZYRQQU1IjWOsvvoqSairA!2e0'
    },
    {//アウデ・マーツェ通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7vp1AiAbhDTyerH_wP4K6A!2m2!1d51.95896!2d6.13657!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.95896,6.13657,3a,75y,90t/data=!3m4!1e1!3m2!1s7vp1AiAbhDTyerH_wP4K6A!2e0'
    },
    {//3 ウーリツァ・ネフスコヴォ (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZyL-aeMIT0mcAP3yVDvuHg!2m2!1d50.7895!2d36.48716!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.7895,36.48716,3a,75y,90t/data=!3m4!1e1!3m2!1sZyL-aeMIT0mcAP3yVDvuHg!2e0'
    },
    {//Attingal, ケーララ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saYhhgqT_NFPy9xgO_mse5A!2m2!1d8.68905!2d76.80727!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.68905,76.80727,3a,75y,90t/data=!3m4!1e1!3m2!1saYhhgqT_NFPy9xgO_mse5A!2e0'
    },
    {//5 Jánošíkova (チェコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6lgRJVhoMgPOxkDqrrR7Uw!2m2!1d48.90302!2d18.02844!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.90302,18.02844,3a,75y,90t/data=!3m4!1e1!3m2!1s6lgRJVhoMgPOxkDqrrR7Uw!2e0'
    },
    {//1505 フロレンシオ・サンチェス (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_Z_6tikEd__dAz1L7_RuqQ!2m2!1d-30.90649!2d-55.53383!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.90649,-55.53383,3a,75y,90t/data=!3m4!1e1!3m2!1s_Z_6tikEd__dAz1L7_RuqQ!2e0'
    },
    {//池田町, 岐阜県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8WWyJWXhWYJx5M5h8TLuNg!2m2!1d35.43375!2d136.58212!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.43375,136.58212,3a,75y,90t/data=!3m4!1e1!3m2!1s8WWyJWXhWYJx5M5h8TLuNg!2e0'
    },
    {//26 ウーリツァ・クラスノヴォ・カザカ (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx20_6gobIA8g3Wh0nCz9iQ!2m2!1d45.72104!2d38.73297!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.72104,38.73297,3a,75y,90t/data=!3m4!1e1!3m2!1sx20_6gobIA8g3Wh0nCz9iQ!2e0'
    },
    {//160 アンパッス・ナベラロ (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s59ZagJkpjBvfbquhjRy4-w!2m2!1d43.39365!2d-0.43393!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.39365,-0.43393,3a,75y,90t/data=!3m4!1e1!3m2!1s59ZagJkpjBvfbquhjRy4-w!2e0'
    },
    {//135 ウェブスター・アベニュー (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEga8oQF0Bp10b_4I_WqH2g!2m2!1d43.82779!2d-111.7794!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.82779,-111.7794,3a,75y,90t/data=!3m4!1e1!3m2!1sEga8oQF0Bp10b_4I_WqH2g!2e0'
    },
    {//4 リュレンジ・バルバ通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2MwfiZPx89BK0wDQ28FWxA!2m2!1d41.41084!2d2.16905!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.41084,2.16905,3a,75y,90t/data=!3m4!1e1!3m2!1s2MwfiZPx89BK0wDQ28FWxA!2e0'
    },
    {//1901 パーク・レーン・コート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIBg7P29gViUXgJzLB9qgRA!2m2!1d38.72289!2d-90.24712!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.72289,-90.24712,3a,75y,90t/data=!3m4!1e1!3m2!1sIBg7P29gViUXgJzLB9qgRA!2e0'
    },
    {//パイク・ロード (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKd97ZEQbeUAZg3IT-Elynw!2m2!1d56.10219!2d-3.91579!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.10219,-3.91579,3a,75y,90t/data=!3m4!1e1!3m2!1sKd97ZEQbeUAZg3IT-Elynw!2e0'
    },
    {//68 ハウプト通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdN6M08nzcEsqHsoXVSvY_Q!2m2!1d53.70502!2d9.70389!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.70502,9.70389,3a,75y,90t/data=!3m4!1e1!3m2!1sdN6M08nzcEsqHsoXVSvY_Q!2e0'
    },
    {//サン・ロレンソ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1se_eOEkGpneSRqiOrGa9V4Q!2m2!1d-31.66386!2d-59.90799!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.66386,-59.90799,3a,75y,90t/data=!3m4!1e1!3m2!1se_eOEkGpneSRqiOrGa9V4Q!2e0'
    },
    {//90 Jl. Panglima Besar Sudirman (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si31eZVneAuQ2RdZ_A0bQdw!2m2!1d-7.40733!2d111.43514!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.40733,111.43514,3a,75y,90t/data=!3m4!1e1!3m2!1si31eZVneAuQ2RdZ_A0bQdw!2e0'
    },
    {//エクアドル (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_pj0tJ3b7YNspmZ2cC9p0Q!2m2!1d0.95081!2d-79.65204!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.95081,-79.65204,3a,75y,90t/data=!3m4!1e1!3m2!1s_pj0tJ3b7YNspmZ2cC9p0Q!2e0'
    },
    {//A1 (ボツワナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s__ztIq2--CNvMqDGbfskbA!2m2!1d-21.27794!2d27.48223!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.27794,27.48223,3a,75y,90t/data=!3m4!1e1!3m2!1s__ztIq2--CNvMqDGbfskbA!2e0'
    },
    {//Slovenského národného povstania (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq12kqdVAXHDPvAqTlEVV8Q!2m2!1d48.61181!2d20.99025!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.61181,20.99025,3a,75y,90t/data=!3m4!1e1!3m2!1sq12kqdVAXHDPvAqTlEVV8Q!2e0'
    },
    {//9048 リスモア・ドライブ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJKhfUgW8xEsC5J8DJwifKQ!2m2!1d38.39769!2d-121.36445!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.39769,-121.36445,3a,75y,90t/data=!3m4!1e1!3m2!1sJKhfUgW8xEsC5J8DJwifKQ!2e0'
    },
    {//54 ジュリアン広場 (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ss60jKsTPvka-ZQEX1BC7Lg!2m2!1d43.29436!2d5.38279!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.29436,5.38279,3a,75y,90t/data=!3m4!1e1!3m2!1ss60jKsTPvka-ZQEX1BC7Lg!2e0'
    },
    {//コンデス・デ・バルセロナ通り (ポルトガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUjY5DCowg0qEoxefiZ6cMQ!2m2!1d38.71623!2d-9.38868!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.71623,-9.38868,3a,75y,90t/data=!3m4!1e1!3m2!1sUjY5DCowg0qEoxefiZ6cMQ!2e0'
    },
    {//アリクイッパ, ペンシルベニア州 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sG2If6fvuaEI2heZrpnVTtg!2m2!1d40.65087!2d-80.24518!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.65087,-80.24518,3a,75y,90t/data=!3m4!1e1!3m2!1sG2If6fvuaEI2heZrpnVTtg!2e0'
    },
    {//レドモンド, ワシントン州 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5LWFlFXbKepuE0-61E1rCQ!2m2!1d47.6662!2d-122.1277!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.6662,-122.1277,3a,75y,90t/data=!3m4!1e1!3m2!1s5LWFlFXbKepuE0-61E1rCQ!2e0'
    },
    {//B5238 (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8_W71Mfkqq3uhUXlWRLUdw!2m2!1d53.57539!2d-2.57203!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.57539,-2.57203,3a,75y,90t/data=!3m4!1e1!3m2!1s8_W71Mfkqq3uhUXlWRLUdw!2e0'
    },
    {//3927 マリブ・ドライブ (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgNm8EMnNrQaU6q0emUWEYw!2m2!1d39.82897!2d-86.01068!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.82897,-86.01068,3a,75y,90t/data=!3m4!1e1!3m2!1sgNm8EMnNrQaU6q0emUWEYw!2e0'
    },
    {//I-40 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXkjZLWQ1SOX68hGDh27vuA!2m2!1d35.48671!2d-94.23629!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.48671,-94.23629,3a,75y,90t/data=!3m4!1e1!3m2!1sXkjZLWQ1SOX68hGDh27vuA!2e0'
    },
    {//22 エウグエニュシャ・クフィアトコフスキエゴ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szPoKIS-9iIl17N0QnQDyQA!2m2!1d49.97337!2d21.94054!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.97337,21.94054,3a,75y,90t/data=!3m4!1e1!3m2!1szPoKIS-9iIl17N0QnQDyQA!2e0'
    },
    {//177 100. Yıl Blv. (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sG-4Yb5FLd_ldHSvooVZipw!2m2!1d41.28472!2d36.33168!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.28472,36.33168,3a,75y,90t/data=!3m4!1e1!3m2!1sG-4Yb5FLd_ldHSvooVZipw!2e0'
    },
    {//6308 92 アベニュー・ノースウェスト (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOBqEk15l3gNVTj8mEYqIRQ!2m2!1d53.52661!2d-113.42861!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.52661,-113.42861,3a,75y,90t/data=!3m4!1e1!3m2!1sOBqEk15l3gNVTj8mEYqIRQ!2e0'
    },
    {//32 ウェルラー・ストリート (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su3IRfOMKnMSAoPU-2mqrSg!2m2!1d-32.87595!2d151.64416!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.87595,151.64416,3a,75y,90t/data=!3m4!1e1!3m2!1su3IRfOMKnMSAoPU-2mqrSg!2e0'
    },
    {//7031 サウスウェスト 11th ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syXw0ZRcWeXtnIPpS7g4icQ!2m2!1d26.00037!2d-80.22809!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.00037,-80.22809,3a,75y,90t/data=!3m4!1e1!3m2!1syXw0ZRcWeXtnIPpS7g4icQ!2e0'
    },
    {//Jl. Kh. Abdul Halim (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1se6t3HVFHRCJ_E4FpXlvAlA!2m2!1d-6.84755!2d108.21199!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.84755,108.21199,3a,75y,90t/data=!3m4!1e1!3m2!1se6t3HVFHRCJ_E4FpXlvAlA!2e0'
    },
    {//31 マックスウェル・ストリート (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s07MISLTW26udo0HqDA25Kg!2m2!1d55.06519!2d-3.62032!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.06519,-3.62032,3a,75y,90t/data=!3m4!1e1!3m2!1s07MISLTW26udo0HqDA25Kg!2e0'
    },
    {//24 Pikk tn (エストニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv8W1UPp9SLA1KL3QDX-iCw!2m2!1d58.81646!2d25.4263!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@58.81646,25.4263,3a,75y,90t/data=!3m4!1e1!3m2!1sv8W1UPp9SLA1KL3QDX-iCw!2e0'
    },
    {//5 オノット・ハ＝シャナ・ストリート (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spxgMpkp0DvgrZGFQfmhG4g!2m2!1d31.91391!2d34.79179!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.91391,34.79179,3a,75y,90t/data=!3m4!1e1!3m2!1spxgMpkp0DvgrZGFQfmhG4g!2e0'
    },
    {//1242 イースト・ブロードウェイ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7fVu9fNeYKv5u-GyLqBkQA!2m2!1d33.83629!2d-117.90008!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.83629,-117.90008,3a,75y,90t/data=!3m4!1e1!3m2!1s7fVu9fNeYKv5u-GyLqBkQA!2e0'
    },
    {//43 スタディオ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soRc4gzr9hbpNBUWyxAeA0Q!2m2!1d42.05847!2d12.62238!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.05847,12.62238,3a,75y,90t/data=!3m4!1e1!3m2!1soRc4gzr9hbpNBUWyxAeA0Q!2e0'
    },
    {//9 Lorong Tempua 7 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szoH3DM31Goptp1WAXgPYPA!2m2!1d5.27125!2d100.47882!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.27125,100.47882,3a,75y,90t/data=!3m4!1e1!3m2!1szoH3DM31Goptp1WAXgPYPA!2e0'
    },
    {//29 エミール・マジー通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-J9FOqVbXLQCFxbFZQ5htg!2m2!1d50.45888!2d4.79338!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.45888,4.79338,3a,75y,90t/data=!3m4!1e1!3m2!1s-J9FOqVbXLQCFxbFZQ5htg!2e0'
    },
    {//656 銀錠路 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjonV5RJDk2jKpariw0jeRA!2m2!1d23.96542!2d120.49454!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.96542,120.49454,3a,75y,90t/data=!3m4!1e1!3m2!1sjonV5RJDk2jKpariw0jeRA!2e0'
    },
    {//サンパロック・ボゴン・バランゲイ・ロード (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svP7DdtIGj-dra7l5thUO6Q!2m2!1d14.00154!2d121.50433!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.00154,121.50433,3a,75y,90t/data=!3m4!1e1!3m2!1svP7DdtIGj-dra7l5thUO6Q!2e0'
    },
    {//香港, 新界 (香港・マカオ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOuXuSucorRdgzzbLnP74ug!2m2!1d22.49749!2d114.13997!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.49749,114.13997,3a,75y,90t/data=!3m4!1e1!3m2!1sOuXuSucorRdgzzbLnP74ug!2e0'
    },
    {//708 US-395 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0n4mfxL2DF1785PpEl8zNQ!2m2!1d40.37707!2d-120.53687!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.37707,-120.53687,3a,75y,90t/data=!3m4!1e1!3m2!1s0n4mfxL2DF1785PpEl8zNQ!2e0'
    },
    {//キャパス, ルソン中心部 (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHSzFt7QpWwcdX-xirJtH1g!2m2!1d15.33547!2d120.5903!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.33547,120.5903,3a,75y,90t/data=!3m4!1e1!3m2!1sHSzFt7QpWwcdX-xirJtH1g!2e0'
    },
    {//レイントン・ロード (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv-gZpTnSi1zXSBXy6GBvSA!2m2!1d53.51725!2d-1.12458!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.51725,-1.12458,3a,75y,90t/data=!3m4!1e1!3m2!1sv-gZpTnSi1zXSBXy6GBvSA!2e0'
    },
    {//サミット・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siSVIs3ojPwjgTDeptaeB-g!2m2!1d42.85204!2d-71.50048!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.85204,-71.50048,3a,75y,90t/data=!3m4!1e1!3m2!1siSVIs3ojPwjgTDeptaeB-g!2e0'
    },
    {//Ågatan (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc67ulhQSogGWakIurHKNIw!2m2!1d57.19205!2d13.28386!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@57.19205,13.28386,3a,75y,90t/data=!3m4!1e1!3m2!1sc67ulhQSogGWakIurHKNIw!2e0'
    },
    {//ナツィオナーレ通り (サルデーニャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz1kownKNYCDk0lvy66qtuw!2m2!1d39.16862!2d8.50365!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.16862,8.50365,3a,75y,90t/data=!3m4!1e1!3m2!1sz1kownKNYCDk0lvy66qtuw!2e0'
    },
    {//37 ヴァルッシ通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szJC0WdbD_zFt17i-pKmBSg!2m2!1d45.96578!2d12.98882!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.96578,12.98882,3a,75y,90t/data=!3m4!1e1!3m2!1szJC0WdbD_zFt17i-pKmBSg!2e0'
    },
    {//613 DC42 (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgzGxBg3sdzyY-6AQjMTaqw!2m2!1d45.56918!2d27.6396!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.56918,27.6396,3a,75y,90t/data=!3m4!1e1!3m2!1sgzGxBg3sdzyY-6AQjMTaqw!2e0'
    },
    {//132 ガウジノ・アフダ通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ15kRKcBGU2U2XH8Ak1haw!2m2!1d-25.98735!2d-49.67627!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.98735,-49.67627,3a,75y,90t/data=!3m4!1e1!3m2!1sQ15kRKcBGU2U2XH8Ak1haw!2e0'
    },
    {//モルス通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sa6X4I2JbQ9ekciPKnOEXIQ!2m2!1d52.32133!2d6.50212!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.32133,6.50212,3a,75y,90t/data=!3m4!1e1!3m2!1sa6X4I2JbQ9ekciPKnOEXIQ!2e0'
    },
    {//250 Tôn Đức Thắng (ベトナム)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSvtmy5Ow3GJVj2lesB774g!2m2!1d9.61385!2d105.97907!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.61385,105.97907,3a,75y,90t/data=!3m4!1e1!3m2!1sSvtmy5Ow3GJVj2lesB774g!2e0'
    },
    {//192 R. Itanoir Abelardo de Freitas (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s__LU4mKTh0_KOWib3k4l9g!2m2!1d-27.64456!2d-48.68499!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.64456,-48.68499,3a,75y,90t/data=!3m4!1e1!3m2!1s__LU4mKTh0_KOWib3k4l9g!2e0'
    },
    {//デアン・フネス (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sww3QJsshlypx7TR3J0Baew!2m2!1d-24.19983!2d-65.27665!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.19983,-65.27665,3a,75y,90t/data=!3m4!1e1!3m2!1sww3QJsshlypx7TR3J0Baew!2e0'
    },
    {//2858 ナニウ・プレイス (ハワイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saGWHYgUY6eJXWkFOL6ceQw!2m2!1d21.31236!2d-157.81515!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.31236,-157.81515,3a,75y,90t/data=!3m4!1e1!3m2!1saGWHYgUY6eJXWkFOL6ceQw!2e0'
    },
    {//ヤングウッド・レーン (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sr5i7y9eNIZJlh0mrQNr_MA!2m2!1d51.41851!2d-2.76514!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.41851,-2.76514,3a,75y,90t/data=!3m4!1e1!3m2!1sr5i7y9eNIZJlh0mrQNr_MA!2e0'
    },
    {//オリベンサ, エストレマドゥーラ (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su2JT2FF32OnTmBED9HubBA!2m2!1d38.77477!2d-7.1473!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.77477,-7.1473,3a,75y,90t/data=!3m4!1e1!3m2!1su2JT2FF32OnTmBED9HubBA!2e0'
    },
    {//81 スクーナー・ウェイ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdV_qKef2yXgwOYsEbiPv_Q!2m2!1d51.47055!2d-3.16458!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.47055,-3.16458,3a,75y,90t/data=!3m4!1e1!3m2!1sdV_qKef2yXgwOYsEbiPv_Q!2e0'
    },
    {//ラジクフ, マゾフシェ県 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKERjjT6EsM8MzLGapDpr7A!2m2!1d52.21327!2d20.61755!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.21327,20.61755,3a,75y,90t/data=!3m4!1e1!3m2!1sKERjjT6EsM8MzLGapDpr7A!2e0'
    },
    {//8473 52 ストリート・ノースイースト (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj7IFDSv343M8OVTEfypoug!2m2!1d51.12937!2d-113.95875!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.12937,-113.95875,3a,75y,90t/data=!3m4!1e1!3m2!1sj7IFDSv343M8OVTEfypoug!2e0'
    },
    {//5504 サウス・ピーブリー・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s77jmbj6Kk142gQ-T1Vp7eQ!2m2!1d35.28527!2d-97.21186!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.28527,-97.21186,3a,75y,90t/data=!3m4!1e1!3m2!1s77jmbj6Kk142gQ-T1Vp7eQ!2e0'
    },
    {//25 ノアズ・パス (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3yBZYgpDLR45fSQwHir4Hg!2m2!1d40.95648!2d-72.94358!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.95648,-72.94358,3a,75y,90t/data=!3m4!1e1!3m2!1s3yBZYgpDLR45fSQwHir4Hg!2e0'
    },
    {//1087 グァイアナゼス通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm7uKsTDuprm5cOlwfdKbRg!2m2!1d-23.53299!2d-46.6463!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.53299,-46.6463,3a,75y,90t/data=!3m4!1e1!3m2!1sm7uKsTDuprm5cOlwfdKbRg!2e0'
    },
    {//マクニュー・トレイル (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFY4EOv6zbOBbldEwDRuN2Q!2m2!1d33.63041!2d-117.82564!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.63041,-117.82564,3a,75y,90t/data=!3m4!1e1!3m2!1sFY4EOv6zbOBbldEwDRuN2Q!2e0'
    },
    {//1 ハッキンガー・カイ (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4LxpORADZnA0XwYkU_P-gA!2m2!1d48.19443!2d16.2643!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.19443,16.2643,3a,75y,90t/data=!3m4!1e1!3m2!1s4LxpORADZnA0XwYkU_P-gA!2e0'
    },
    {//55 カルガン・ドライブ (オーストラリア中北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMQtMzdYlhgsTnjTkxcraiw!2m2!1d-23.36131!2d119.74217!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.36131,119.74217,3a,75y,90t/data=!3m4!1e1!3m2!1sMQtMzdYlhgsTnjTkxcraiw!2e0'
    },
    {//2652 スチュワート・アベニュー (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfZTy3xhIM3std2btLKNEpQ!2m2!1d40.74827!2d-73.5493!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.74827,-73.5493,3a,75y,90t/data=!3m4!1e1!3m2!1sfZTy3xhIM3std2btLKNEpQ!2e0'
    },
    {//40 ダーバン・ストリート (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLHmYvc6hq4Sp3i7QCdFS0Q!2m2!1d55.13!2d-1.51792!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.13,-1.51792,3a,75y,90t/data=!3m4!1e1!3m2!1sLHmYvc6hq4Sp3i7QCdFS0Q!2e0'
    },
    {//Burtaiši, バル (モンテネグロ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSOBSNe_DO1XneGsUSwONJg!2m2!1d42.09776!2d19.10944!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.09776,19.10944,3a,75y,90t/data=!3m4!1e1!3m2!1sSOBSNe_DO1XneGsUSwONJg!2e0'
    },
    {//7 Leppäojantie (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sY1l0TtJunmL5ie7rUgcqXA!2m2!1d63.89825!2d23.89012!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.89825,23.89012,3a,75y,90t/data=!3m4!1e1!3m2!1sY1l0TtJunmL5ie7rUgcqXA!2e0'
    },
    {//Rruga Lëvizja e Postribës (モンテネグロ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_qImJ93z74eMdqG1ThUUEQ!2m2!1d42.08258!2d19.52681!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.08258,19.52681,3a,75y,90t/data=!3m4!1e1!3m2!1s_qImJ93z74eMdqG1ThUUEQ!2e0'
    },
    {//170 モンテ・ド・シャン・ブラン (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSvqiyUhv_8GWqgEvEG1vUQ!2m2!1d45.86434!2d4.85194!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.86434,4.85194,3a,75y,90t/data=!3m4!1e1!3m2!1sSvqiyUhv_8GWqgEvEG1vUQ!2e0'
    },
    {//26443 グレース・ドライブ (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFfiYFkorRxl8lQj2VJeorg!2m2!1d42.81261!2d-88.15921!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.81261,-88.15921,3a,75y,90t/data=!3m4!1e1!3m2!1sFfiYFkorRxl8lQj2VJeorg!2e0'
    },
    {//34 レジドンス・フォンテーヌ・レヴック (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl-F4BihwF6pWNeoVQo9vWg!2m2!1d50.56947!2d2.47027!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.56947,2.47027,3a,75y,90t/data=!3m4!1e1!3m2!1sl-F4BihwF6pWNeoVQo9vWg!2e0'
    },
    {//35 Upper High St (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saGV4KKpelXas5mJAgaBBwg!2m2!1d51.74585!2d-0.97567!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.74585,-0.97567,3a,75y,90t/data=!3m4!1e1!3m2!1saGV4KKpelXas5mJAgaBBwg!2e0'
    },
    {//8 投45鄉道 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRTfl62kl3MpUjrEMIjNnIQ!2m2!1d23.76771!2d120.68255!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.76771,120.68255,3a,75y,90t/data=!3m4!1e1!3m2!1sRTfl62kl3MpUjrEMIjNnIQ!2e0'
    },
    {//世田谷区, 東京都 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sorrVQ3c6wYzuBZvgGBHkOQ!2m2!1d35.66386!2d139.64967!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.66386,139.64967,3a,75y,90t/data=!3m4!1e1!3m2!1sorrVQ3c6wYzuBZvgGBHkOQ!2e0'
    },
    {//5 ブラッド・ドライブ (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP_ZTbfp6MgCeZqwt3S1sNA!2m2!1d-38.27216!2d145.01808!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.27216,145.01808,3a,75y,90t/data=!3m4!1e1!3m2!1sP_ZTbfp6MgCeZqwt3S1sNA!2e0'
    },
    {//Porsgrunn, テレマルク (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRGJkVK2saZc3sF-QUQ3Seg!2m2!1d59.14495!2d9.64176!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.14495,9.64176,3a,75y,90t/data=!3m4!1e1!3m2!1sRGJkVK2saZc3sF-QUQ3Seg!2e0'
    },
    {//リバーサイド・エステート (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOE6WgsT7WOZtNHdJmsMjSQ!2m2!1d51.81442!2d-8.38058!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.81442,-8.38058,3a,75y,90t/data=!3m4!1e1!3m2!1sOE6WgsT7WOZtNHdJmsMjSQ!2e0'
    },
    {//ザンクト・ガラー通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgEtUky6D0fj39tCpsWI0tQ!2m2!1d47.49958!2d8.75802!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.49958,8.75802,3a,75y,90t/data=!3m4!1e1!3m2!1sgEtUky6D0fj39tCpsWI0tQ!2e0'
    },
    {//N85 (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWEBVcbMQ1bvSj4DFCZz1qw!2m2!1d52.82682!2d-8.99346!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.82682,-8.99346,3a,75y,90t/data=!3m4!1e1!3m2!1sWEBVcbMQ1bvSj4DFCZz1qw!2e0'
    },
    {//3 ミル・レーン (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSbrkcATJ-MVN4TxY3sdzhw!2m2!1d-35.1201!2d139.27834!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-35.1201,139.27834,3a,75y,90t/data=!3m4!1e1!3m2!1sSbrkcATJ-MVN4TxY3sdzhw!2e0'
    },
    {//447 ボウサス通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sG0eZmSFQssWA9q3nsaMY0g!2m2!1d41.69256!2d-8.40826!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.69256,-8.40826,3a,75y,90t/data=!3m4!1e1!3m2!1sG0eZmSFQssWA9q3nsaMY0g!2e0'
    },
    {//12 コレラ・ロード (オーストラリア中北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shv7LNrxnPK463n_EnzvAMA!2m2!1d-17.93553!2d122.2342!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.93553,122.2342,3a,75y,90t/data=!3m4!1e1!3m2!1shv7LNrxnPK463n_EnzvAMA!2e0'
    },
    {//33656 サイダー・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5RVMUMxKoxszeEaXDZuHuw!2m2!1d42.91568!2d-79.46135!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.91568,-79.46135,3a,75y,90t/data=!3m4!1e1!3m2!1s5RVMUMxKoxszeEaXDZuHuw!2e0'
    },
    {//740 スプリングフィールド・アベニュー (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swaQBoWIuNER9j6Viy6mDiw!2m2!1d40.71182!2d-74.38082!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.71182,-74.38082,3a,75y,90t/data=!3m4!1e1!3m2!1swaQBoWIuNER9j6Viy6mDiw!2e0'
    },
    {//Google マップ (香港・マカオ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si4VRGtsAz9-wo1mkuYZt6g!2m2!1d22.25787!2d114.2524!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.25787,114.2524,3a,75y,90t/data=!3m4!1e1!3m2!1si4VRGtsAz9-wo1mkuYZt6g!2e0'
    },
    {//17 Kittelänkatu (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf6Qf8rZ75nZT06a9AsP9vg!2m2!1d60.96983!2d25.65898!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.96983,25.65898,3a,75y,90t/data=!3m4!1e1!3m2!1sf6Qf8rZ75nZT06a9AsP9vg!2e0'
    },
    {//39 アムラッハー通り (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZlEpCB8zCaXdCg75cl6Wrw!2m2!1d46.78616!2d13.50116!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.78616,13.50116,3a,75y,90t/data=!3m4!1e1!3m2!1sZlEpCB8zCaXdCg75cl6Wrw!2e0'
    },
    {//8 Tölcsér u. (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIYQn6E3kSfLG0sXAr02zpg!2m2!1d47.50554!2d19.16215!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.50554,19.16215,3a,75y,90t/data=!3m4!1e1!3m2!1sIYQn6E3kSfLG0sXAr02zpg!2e0'
    },
    {//Ngõ 166 - Trần Phú (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRD4lcxrI5OVBGN_oM9DsIA!2m2!1d21.01297!2d107.2838!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.01297,107.2838,3a,75y,90t/data=!3m4!1e1!3m2!1sRD4lcxrI5OVBGN_oM9DsIA!2e0'
    },
    {//1226 サン・フェリーペ - ロス・アンデス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL7uG7a3SADOxHvJ7I90jZQ!2m2!1d-32.80527!2d-70.59782!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.80527,-70.59782,3a,75y,90t/data=!3m4!1e1!3m2!1sL7uG7a3SADOxHvJ7I90jZQ!2e0'
    },
    {//大阪市, 大阪府 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHYrVdqVbcZG4zFjt-9ewjA!2m2!1d34.67549!2d135.55256!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.67549,135.55256,3a,75y,90t/data=!3m4!1e1!3m2!1sHYrVdqVbcZG4zFjt-9ewjA!2e0'
    },
    {//530 チラデンテス通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJAHNfaADEz-GWfFch8BvtQ!2m2!1d-16.94785!2d-53.52763!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.94785,-53.52763,3a,75y,90t/data=!3m4!1e1!3m2!1sJAHNfaADEz-GWfFch8BvtQ!2e0'
    },
    {//173 マック・コート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF0rl0vbGMv1xI5qfZXbx1w!2m2!1d37.75964!2d-84.83551!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.75964,-84.83551,3a,75y,90t/data=!3m4!1e1!3m2!1sF0rl0vbGMv1xI5qfZXbx1w!2e0'
    },
    {//ラ・メウレ (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s87XiodFWjY8cQdgorP3MxQ!2m2!1d48.28191!2d-0.92396!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.28191,-0.92396,3a,75y,90t/data=!3m4!1e1!3m2!1s87XiodFWjY8cQdgorP3MxQ!2e0'
    },
    {//ペマガツェル県 (ブータン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssQ7mEkitfQ_gdVCA1tRYvA!2m2!1d27.01986!2d91.4029!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.01986,91.4029,3a,75y,90t/data=!3m4!1e1!3m2!1ssQ7mEkitfQ_gdVCA1tRYvA!2e0'
    },
    {//バタイスク, ロストフ州 (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4-J9ZdBDjnQO7RCULVbLdQ!2m2!1d47.15552!2d39.7406!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.15552,39.7406,3a,75y,90t/data=!3m4!1e1!3m2!1s4-J9ZdBDjnQO7RCULVbLdQ!2e0'
    },
    {//ユカイパ, カリフォルニア州 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCSAyeXlaalBZiruWjn1z4w!2m2!1d34.03451!2d-117.05615!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.03451,-117.05615,3a,75y,90t/data=!3m4!1e1!3m2!1sCSAyeXlaalBZiruWjn1z4w!2e0'
    },
    {//Barrio La Pesa 2, La Chorrera, プロビンシア・デ・パナマ・オエステ (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1segSH7u7DUtl9u9h3_ycs9A!2m2!1d8.85194!2d-79.82406!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.85194,-79.82406,3a,75y,90t/data=!3m4!1e1!3m2!1segSH7u7DUtl9u9h3_ycs9A!2e0'
    },
    {//ペルニク (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spC8g_wG8sX4JmUwdWKGLaA!2m2!1d42.60237!2d23.05209!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.60237,23.05209,3a,75y,90t/data=!3m4!1e1!3m2!1spC8g_wG8sX4JmUwdWKGLaA!2e0'
    },
    {//R154 (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAXT1FUoNJFtQmSuP91CBuw!2m2!1d53.55352!2d-6.77335!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.55352,-6.77335,3a,75y,90t/data=!3m4!1e1!3m2!1sAXT1FUoNJFtQmSuP91CBuw!2e0'
    },
    {//340 ノース 71st アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svpfti8ntiWEUaUzybeG6gg!2m2!1d46.6034!2d-120.60326!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.6034,-120.60326,3a,75y,90t/data=!3m4!1e1!3m2!1svpfti8ntiWEUaUzybeG6gg!2e0'
    },
    {//ウプサラ (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLDNtN2Zcen2heN--3u1J5Q!2m2!1d59.71523!2d17.79388!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.71523,17.79388,3a,75y,90t/data=!3m4!1e1!3m2!1sLDNtN2Zcen2heN--3u1J5Q!2e0'
    },
    {//津市, 三重県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s47In6f-WP-RP9Emm3P3-lw!2m2!1d34.65916!2d136.48016!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.65916,136.48016,3a,75y,90t/data=!3m4!1e1!3m2!1s47In6f-WP-RP9Emm3P3-lw!2e0'
    },
    {//724 Colón (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOQKyEs16plZ9FwuDi6OVCw!2m2!1d-32.06298!2d-60.63362!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.06298,-60.63362,3a,75y,90t/data=!3m4!1e1!3m2!1sOQKyEs16plZ9FwuDi6OVCw!2e0'
    },
    {//535 ハンズドン・ロード (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUs7o-4vmoKz8639k8Wo_sQ!2m2!1d50.46406!2d-3.51942!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.46406,-3.51942,3a,75y,90t/data=!3m4!1e1!3m2!1sUs7o-4vmoKz8639k8Wo_sQ!2e0'
    },
    {//161 ウッド・レーン (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEcizT9CMauOkonKgIHKQnQ!2m2!1d51.4513!2d-2.10614!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.4513,-2.10614,3a,75y,90t/data=!3m4!1e1!3m2!1sEcizT9CMauOkonKgIHKQnQ!2e0'
    },
    {//9 サマーズギル・ロード (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-e_NwludLEjp38knjGqoxA!2m2!1d54.05624!2d-2.81591!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.05624,-2.81591,3a,75y,90t/data=!3m4!1e1!3m2!1s-e_NwludLEjp38knjGqoxA!2e0'
    },
    {//チェルヌツ, 中央ボヘミア (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPleW18YPoCwOz85JZjm9XQ!2m2!1d50.30253!2d14.19912!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.30253,14.19912,3a,75y,90t/data=!3m4!1e1!3m2!1sPleW18YPoCwOz85JZjm9XQ!2e0'
    },
    {//الذيد, シャルジャ (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLEGlCVF5sE3QxsaGDqqzbA!2m2!1d25.29292!2d55.8724!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.29292,55.8724,3a,75y,90t/data=!3m4!1e1!3m2!1sLEGlCVF5sE3QxsaGDqqzbA!2e0'
    },
    {//10 エディーズ・グローブ (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV-vB_eJTNYxEhoLb4jmPvg!2m2!1d-37.91999!2d145.02921!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.91999,145.02921,3a,75y,90t/data=!3m4!1e1!3m2!1sV-vB_eJTNYxEhoLb4jmPvg!2e0'
    },
    {//タシクマラヤ, 西ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2zUbRlqW3U-HLH9Yspx8Xw!2m2!1d-7.33034!2d108.23648!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.33034,108.23648,3a,75y,90t/data=!3m4!1e1!3m2!1s2zUbRlqW3U-HLH9Yspx8Xw!2e0'
    },
    {//35 Rauhankatu (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8814mkiEKOBGHMFwi13NYA!2m2!1d62.60865!2d29.76035!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.60865,29.76035,3a,75y,90t/data=!3m4!1e1!3m2!1s8814mkiEKOBGHMFwi13NYA!2e0'
    },
    {//15 コルニサ通り (カナリア諸島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJGA2yXVZhkYwg3olOsegFg!2m2!1d27.78914!2d-15.71421!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.78914,-15.71421,3a,75y,90t/data=!3m4!1e1!3m2!1sJGA2yXVZhkYwg3olOsegFg!2e0'
    },
    {//16 ニクソン・ストリート (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spJ-bKzydfEQrlBdLsEGyvQ!2m2!1d-33.74951!2d150.66035!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.74951,150.66035,3a,75y,90t/data=!3m4!1e1!3m2!1spJ-bKzydfEQrlBdLsEGyvQ!2e0'
    },
    {//3087 オーシャン・アベニュー (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGACs5Dyde6L8_gOz2puWng!2m2!1d40.58595!2d-73.94883!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.58595,-73.94883,3a,75y,90t/data=!3m4!1e1!3m2!1sGACs5Dyde6L8_gOz2puWng!2e0'
    },
    {//アントニオ・カルロス・アウメイダ・カンポス通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_lW9X5rP-_dUag2JoHcGTA!2m2!1d-23.83922!2d-49.4325!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.83922,-49.4325,3a,75y,90t/data=!3m4!1e1!3m2!1s_lW9X5rP-_dUag2JoHcGTA!2e0'
    },
    {//16 アルベルト通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHRFkrBn48FHT_6SjfpD7uw!2m2!1d50.43553!2d7.82076!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.43553,7.82076,3a,75y,90t/data=!3m4!1e1!3m2!1sHRFkrBn48FHT_6SjfpD7uw!2e0'
    },
    {//Raabs an der Thaya, 下オーストリア州 (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suWVug_-QQAgIZ0jFLZqelA!2m2!1d48.91917!2d15.43967!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.91917,15.43967,3a,75y,90t/data=!3m4!1e1!3m2!1suWVug_-QQAgIZ0jFLZqelA!2e0'
    },
    {//27 Димитрија Туцовића (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scpGkHntRnjn2VeEcyzKZZg!2m2!1d45.48115!2d20.07811!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.48115,20.07811,3a,75y,90t/data=!3m4!1e1!3m2!1scpGkHntRnjn2VeEcyzKZZg!2e0'
    },
    {//ペルシティツァ, プロブディフ (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKVI8owQdmtMxLi6Tyf3VRg!2m2!1d42.03531!2d24.54363!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.03531,24.54363,3a,75y,90t/data=!3m4!1e1!3m2!1sKVI8owQdmtMxLi6Tyf3VRg!2e0'
    },
    {//デリー (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3BuUjWsFLdelL6Q3HwhsBg!2m2!1d28.73749!2d77.12864!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.73749,77.12864,3a,75y,90t/data=!3m4!1e1!3m2!1s3BuUjWsFLdelL6Q3HwhsBg!2e0'
    },
    {//11 ムーラ・ロード (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2JKh4Oeu-Ifk9UItkzOncA!2m2!1d-27.44215!2d152.98303!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.44215,152.98303,3a,75y,90t/data=!3m4!1e1!3m2!1s2JKh4Oeu-Ifk9UItkzOncA!2e0'
    },
    {//427 Jl. Sultan Botutihe (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj24WSdynRHx_r_CIw6CLyw!2m2!1d0.54219!2d123.08238!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.54219,123.08238,3a,75y,90t/data=!3m4!1e1!3m2!1sj24WSdynRHx_r_CIw6CLyw!2e0'
    },
    {//1115 チリ・スペイン (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQOtT4I9DsCm9te6iaU2QIg!2m2!1d-33.44477!2d-70.59475!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.44477,-70.59475,3a,75y,90t/data=!3m4!1e1!3m2!1sQOtT4I9DsCm9te6iaU2QIg!2e0'
    },
    {//ノボクズネツク, ケメロヴォ州 (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sudOSAoqRt4QESmLA2Nd1qA!2m2!1d53.72249!2d87.26947!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.72249,87.26947,3a,75y,90t/data=!3m4!1e1!3m2!1sudOSAoqRt4QESmLA2Nd1qA!2e0'
    },
    {//9 スクエドレ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_lT1pvrdIw5RxD5x4oxV2Q!2m2!1d41.3403!2d14.37634!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.3403,14.37634,3a,75y,90t/data=!3m4!1e1!3m2!1s_lT1pvrdIw5RxD5x4oxV2Q!2e0'
    },
    {//Co Rte 9 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skBLaO4Ri8k9yakZ2DFW_Ug!2m2!1d39.26326!2d-81.5729!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.26326,-81.5729,3a,75y,90t/data=!3m4!1e1!3m2!1skBLaO4Ri8k9yakZ2DFW_Ug!2e0'
    },
    {//Google マップ (カナダ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGYCCVaHO43I20qJmY_XDRA!2m2!1d58.30779!2d-134.41023!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@58.30779,-134.41023,3a,75y,90t/data=!3m4!1e1!3m2!1sGYCCVaHO43I20qJmY_XDRA!2e0'
    },
    {//3 アンブロシーニ・ドン・ジュゼッペ通り (スイス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_VuWwfK9SCYqcjhm4b6COg!2m2!1d45.82617!2d8.8462!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.82617,8.8462,3a,75y,90t/data=!3m4!1e1!3m2!1s_VuWwfK9SCYqcjhm4b6COg!2e0'
    },
    {//384 パイン・ヒル・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s85OvqN-av5c1nac8BOP26A!2m2!1d43.22931!2d-70.59824!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.22931,-70.59824,3a,75y,90t/data=!3m4!1e1!3m2!1s85OvqN-av5c1nac8BOP26A!2e0'
    },
    {//6 ヴィセンテ・マイア通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRFWyLqu-nrK1B87sz2U4pQ!2m2!1d-16.75349!2d-43.85252!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.75349,-43.85252,3a,75y,90t/data=!3m4!1e1!3m2!1sRFWyLqu-nrK1B87sz2U4pQ!2e0'
    },
    {//ヒュビンカー, ウーシマー (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syS73QcJDxAhBx8ZuIpI0Yg!2m2!1d60.63657!2d24.85907!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.63657,24.85907,3a,75y,90t/data=!3m4!1e1!3m2!1syS73QcJDxAhBx8ZuIpI0Yg!2e0'
    },
    {//チッピング・ソドベリー, イングランド (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTJuKU-ngmbJ4i4lZ9ivL8g!2m2!1d51.53226!2d-2.40069!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.53226,-2.40069,3a,75y,90t/data=!3m4!1e1!3m2!1sTJuKU-ngmbJ4i4lZ9ivL8g!2e0'
    },
    {//23 Αθηνάς (ギリシャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEc3ORlHWb3L6m9Dx-RKVMg!2m2!1d39.74559!2d22.38056!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.74559,22.38056,3a,75y,90t/data=!3m4!1e1!3m2!1sEc3ORlHWb3L6m9Dx-RKVMg!2e0'
    },
    {//331 ドラヒ (チェコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4wmyomfwdCi9WDRLzyjWQQ!2m2!1d48.93875!2d17.3661!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.93875,17.3661,3a,75y,90t/data=!3m4!1e1!3m2!1s4wmyomfwdCi9WDRLzyjWQQ!2e0'
    },
    {//SS51bis (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stLqqYE2orP-zEeBOUB1z3Q!2m2!1d46.43413!2d12.37892!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.43413,12.37892,3a,75y,90t/data=!3m4!1e1!3m2!1stLqqYE2orP-zEeBOUB1z3Q!2e0'
    },
    {//13 ウーリツァ・オスノヴァニヤ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sydy_wqJsd5jDYWJfAljixA!2m2!1d47.14521!2d42.45547!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.14521,42.45547,3a,75y,90t/data=!3m4!1e1!3m2!1sydy_wqJsd5jDYWJfAljixA!2e0'
    },
    {//29 デ・オンデルスタル (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSz5j9OMVwis4H5CRr9u1Ug!2m2!1d51.87912!2d5.5289!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.87912,5.5289,3a,75y,90t/data=!3m4!1e1!3m2!1sSz5j9OMVwis4H5CRr9u1Ug!2e0'
    },
    {//13 Fv204 (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBiJPnisdJgcI9vta2cuYiA!2m2!1d58.09467!2d7.77941!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@58.09467,7.77941,3a,75y,90t/data=!3m4!1e1!3m2!1sBiJPnisdJgcI9vta2cuYiA!2e0'
    },
    {//185 コルヴィン・ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5kBy5LXXpgXONnXnXi5oHg!2m2!1d39.29368!2d-76.60452!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.29368,-76.60452,3a,75y,90t/data=!3m4!1e1!3m2!1s5kBy5LXXpgXONnXnXi5oHg!2e0'
    },
    {//27 Jl. Untung Suropati (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6H_I0QPuE0dLIXSA7vkaYg!2m2!1d-1.61668!2d103.61494!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.61668,103.61494,3a,75y,90t/data=!3m4!1e1!3m2!1s6H_I0QPuE0dLIXSA7vkaYg!2e0'
    },
    {//100 Jalan Ipoh - Kampar (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s41Ezvw2d8voNDnKoNCBN_g!2m2!1d4.31296!2d101.15327!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.31296,101.15327,3a,75y,90t/data=!3m4!1e1!3m2!1s41Ezvw2d8voNDnKoNCBN_g!2e0'
    },
    {//407 サウスウェスト・テレサ・コート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGfrldwDhj8QPsZddp7OIGQ!2m2!1d30.18493!2d-82.64793!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.18493,-82.64793,3a,75y,90t/data=!3m4!1e1!3m2!1sGfrldwDhj8QPsZddp7OIGQ!2e0'
    },
    {//36 アルフィーナ・ストリート (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sePbAvuLlLx_xf4CC3-8KNA!2m2!1d-16.99965!2d145.71966!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.99965,145.71966,3a,75y,90t/data=!3m4!1e1!3m2!1sePbAvuLlLx_xf4CC3-8KNA!2e0'
    },
    {//1303 ガリンドー・ストリート (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-w1QFcZoT8PAD33YaMs7DA!2m2!1d37.96933!2d-122.03236!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.96933,-122.03236,3a,75y,90t/data=!3m4!1e1!3m2!1s-w1QFcZoT8PAD33YaMs7DA!2e0'
    },
    {//327 E ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stpNdHGZrVZdRXo_oQ9UJ5A!2m2!1d32.95411!2d-85.95238!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.95411,-85.95238,3a,75y,90t/data=!3m4!1e1!3m2!1stpNdHGZrVZdRXo_oQ9UJ5A!2e0'
    },
    {//1680 モルガン通り (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv_Ovwz6M3ULcv_DLPMCr0Q!2m2!1d45.55221!2d-73.53616!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.55221,-73.53616,3a,75y,90t/data=!3m4!1e1!3m2!1sv_Ovwz6M3ULcv_DLPMCr0Q!2e0'
    },
    {//82 M通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_9J-XTyPu6fKSt15TTwpAw!2m2!1d30.71605!2d-112.16063!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.71605,-112.16063,3a,75y,90t/data=!3m4!1e1!3m2!1s_9J-XTyPu6fKSt15TTwpAw!2e0'
    },
    {//Cam Linh, カインホア (ベトナム)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2GJ0_qWJUnRnlB4fty6tVA!2m2!1d11.91516!2d109.14347!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.91516,109.14347,3a,75y,90t/data=!3m4!1e1!3m2!1s2GJ0_qWJUnRnlB4fty6tVA!2e0'
    },
    {//34 ガフライ通り (スイス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQmz1BjLJB0P-uDZ7qRKqwg!2m2!1d47.13677!2d9.54211!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.13677,9.54211,3a,75y,90t/data=!3m4!1e1!3m2!1sQmz1BjLJB0P-uDZ7qRKqwg!2e0'
    },
    {//Section 5, Huanhe W Rd (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smjpubRuZpTFjxHQvsZnESw!2m2!1d24.99175!2d121.44163!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.99175,121.44163,3a,75y,90t/data=!3m4!1e1!3m2!1smjpubRuZpTFjxHQvsZnESw!2e0'
    },
    {//レニングラード (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBeawL20_XkCu6QfPVfryQg!2m2!1d60.08552!2d30.38582!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.08552,30.38582,3a,75y,90t/data=!3m4!1e1!3m2!1sBeawL20_XkCu6QfPVfryQg!2e0'
    },
    {//835 サントス・フェルナンデス通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFCX-cKdQ4Br65-JH_sSNgQ!2m2!1d-19.15777!2d-42.24731!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.15777,-42.24731,3a,75y,90t/data=!3m4!1e1!3m2!1sFCX-cKdQ4Br65-JH_sSNgQ!2e0'
    },
    {//67 Fv358 (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssmargSZT7cyO32kSnhvN4g!2m2!1d59.01702!2d8.53447!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.01702,8.53447,3a,75y,90t/data=!3m4!1e1!3m2!1ssmargSZT7cyO32kSnhvN4g!2e0'
    },
    {//الخوبار, ダーヒリーヤ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI47J8vBfug2OD-flPRtFbg!2m2!1d23.30448!2d58.03128!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.30448,58.03128,3a,75y,90t/data=!3m4!1e1!3m2!1sI47J8vBfug2OD-flPRtFbg!2e0'
    },
    {//南東スラウェシ (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHZniHL5jaFyBf6WuXgopzg!2m2!1d-4.83092!2d122.73235!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.83092,122.73235,3a,75y,90t/data=!3m4!1e1!3m2!1sHZniHL5jaFyBf6WuXgopzg!2e0'
    },
    {//ティルプル, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBQCmCqZF56IoPUkvH-cPUw!2m2!1d11.13604!2d77.34568!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.13604,77.34568,3a,75y,90t/data=!3m4!1e1!3m2!1sBQCmCqZF56IoPUkvH-cPUw!2e0'
    },
    {//324 Belgrano (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJA5bmAC6zHhbNCTH3N3W1Q!2m2!1d-35.03152!2d-63.01915!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-35.03152,-63.01915,3a,75y,90t/data=!3m4!1e1!3m2!1sJA5bmAC6zHhbNCTH3N3W1Q!2e0'
    },
    {//ジャサ, ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snpdXBsMxdVIB6_PqYWo4fQ!2m2!1d27.28372!2d80.80788!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.28372,80.80788,3a,75y,90t/data=!3m4!1e1!3m2!1snpdXBsMxdVIB6_PqYWo4fQ!2e0'
    },
    {//モスクワ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siEvw3Pln1ITLxeWLq_fysg!2m2!1d55.6556!2d37.43558!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.6556,37.43558,3a,75y,90t/data=!3m4!1e1!3m2!1siEvw3Pln1ITLxeWLq_fysg!2e0'
    },
    {//6521 アップトン・レーン (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxUpYTM-1k3fc2fvzwkxFGw!2m2!1d36.1414!2d-86.88994!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.1414,-86.88994,3a,75y,90t/data=!3m4!1e1!3m2!1sxUpYTM-1k3fc2fvzwkxFGw!2e0'
    },
    {//ムレシュ (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqjEGiiOZdB2iREoi3PxYMQ!2m2!1d46.49988!2d24.46243!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.49988,24.46243,3a,75y,90t/data=!3m4!1e1!3m2!1sqjEGiiOZdB2iREoi3PxYMQ!2e0'
    },
    {//Prydes Gully Rd (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVWvg5aVkZxE2rD-8WhRtHw!2m2!1d-44.93419!2d170.62808!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-44.93419,170.62808,3a,75y,90t/data=!3m4!1e1!3m2!1sVWvg5aVkZxE2rD-8WhRtHw!2e0'
    },
    {//4016 ケネディ・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFa3T913OtB3aSSBjjnfCdw!2m2!1d41.64034!2d-87.46183!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.64034,-87.46183,3a,75y,90t/data=!3m4!1e1!3m2!1sFa3T913OtB3aSSBjjnfCdw!2e0'
    },
    {//Gorton St (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swxRjLUrqunmaeH5zCOCwfQ!2m2!1d-46.10493!2d168.94534!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-46.10493,168.94534,3a,75y,90t/data=!3m4!1e1!3m2!1swxRjLUrqunmaeH5zCOCwfQ!2e0'
    },
    {//9 スタイブサント・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7412JA5kMRJoVkJrUm-SjQ!2m2!1d40.05057!2d-74.12013!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.05057,-74.12013,3a,75y,90t/data=!3m4!1e1!3m2!1s7412JA5kMRJoVkJrUm-SjQ!2e0'
    },
    {//12965 サウスウェスト・リタ・ドライブ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snf3NGPUXOENsK0VL5h_3eA!2m2!1d45.51597!2d-122.80965!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.51597,-122.80965,3a,75y,90t/data=!3m4!1e1!3m2!1snf3NGPUXOENsK0VL5h_3eA!2e0'
    },
    {//39 вулиця Заплавна (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sN3qyM1qXYykLmEfEDHCOHA!2m2!1d50.37937!2d30.69013!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.37937,30.69013,3a,75y,90t/data=!3m4!1e1!3m2!1sN3qyM1qXYykLmEfEDHCOHA!2e0'
    },
    {//8 ул. Найден Геров (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sS70Ms5TW955JRdo4cWTOWA!2m2!1d43.49118!2d24.078!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.49118,24.078,3a,75y,90t/data=!3m4!1e1!3m2!1sS70Ms5TW955JRdo4cWTOWA!2e0'
    },
    {//1110 デンジル・コベカダワ・マワサ (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB2EmE5bJZKHc-Hs4NX9TYA!2m2!1d6.89409!2d79.92348!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.89409,79.92348,3a,75y,90t/data=!3m4!1e1!3m2!1sB2EmE5bJZKHc-Hs4NX9TYA!2e0'
    },
    {//87 フェイラ広場 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIyr99-zg02PGZxSq267PUQ!2m2!1d-15.82243!2d-50.60642!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.82243,-50.60642,3a,75y,90t/data=!3m4!1e1!3m2!1sIyr99-zg02PGZxSq267PUQ!2e0'
    },
    {//BV-4341 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sILoxZUOD9xwFVm9DFvcazA!2m2!1d42.06547!2d2.0639!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.06547,2.0639,3a,75y,90t/data=!3m4!1e1!3m2!1sILoxZUOD9xwFVm9DFvcazA!2e0'
    },
    {//4055 ウェスト・メイン・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spkc-qfl__Qwy-WZ6d3X5MA!2m2!1d28.66619!2d-80.86152!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.66619,-80.86152,3a,75y,90t/data=!3m4!1e1!3m2!1spkc-qfl__Qwy-WZ6d3X5MA!2e0'
    },
    {//V-6通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUm16r8XX1yCU7GEyNp5OuA!2m2!1d-18.39905!2d-52.65455!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.39905,-52.65455,3a,75y,90t/data=!3m4!1e1!3m2!1sUm16r8XX1yCU7GEyNp5OuA!2e0'
    },
    {//マティフー通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stNvKWi8QsQ5sopZwTSJUBg!2m2!1d46.98446!2d-1.29176!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.98446,-1.29176,3a,75y,90t/data=!3m4!1e1!3m2!1stNvKWi8QsQ5sopZwTSJUBg!2e0'
    },
    {//51 ザッツァー・ケラー＝ガッセ (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skALJJUKGmP1vUzFzj7x2QA!2m2!1d48.56935!2d16.06326!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.56935,16.06326,3a,75y,90t/data=!3m4!1e1!3m2!1skALJJUKGmP1vUzFzj7x2QA!2e0'
    },
    {//17106 カジェ 16 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1XxrI_xKRnPnpoDoqmbUZQ!2m2!1d7.13151!2d-73.1279!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.13151,-73.1279,3a,75y,90t/data=!3m4!1e1!3m2!1s1XxrI_xKRnPnpoDoqmbUZQ!2e0'
    },
    {//5 Kyttängsvägen (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-yzSWrknZr_61vYKUKj9jw!2m2!1d60.24879!2d24.93997!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.24879,24.93997,3a,75y,90t/data=!3m4!1e1!3m2!1s-yzSWrknZr_61vYKUKj9jw!2e0'
    },
    {//アウトストラダ・ブクレシュティ - ピテシュティ (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szk7SdThGZPnCrD_dpCf5cA!2m2!1d44.6548!2d25.34435!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.6548,25.34435,3a,75y,90t/data=!3m4!1e1!3m2!1szk7SdThGZPnCrD_dpCf5cA!2e0'
    },
    {//11 プリースニッツ通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3SR_lHLRIFhmDWYyLmw4Jg!2m2!1d50.8927!2d12.35893!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.8927,12.35893,3a,75y,90t/data=!3m4!1e1!3m2!1s3SR_lHLRIFhmDWYyLmw4Jg!2e0'
    },
    {//8 ショッセイナヤ・ウーリツァ (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDVf-9f1eIkj_JNhUo6iJ-Q!2m2!1d55.31548!2d82.72999!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.31548,82.72999,3a,75y,90t/data=!3m4!1e1!3m2!1sDVf-9f1eIkj_JNhUo6iJ-Q!2e0'
    },
    {//41 リヒテンシュタイン通り (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqhv12m-xxnvNSUdj8V6DUg!2m2!1d46.82013!2d15.22163!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.82013,15.22163,3a,75y,90t/data=!3m4!1e1!3m2!1sqhv12m-xxnvNSUdj8V6DUg!2e0'
    },
    {//51 L377 (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEol-Q9HuAst_QOTu0iV3zg!2m2!1d47.258!2d16.26617!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.258,16.26617,3a,75y,90t/data=!3m4!1e1!3m2!1sEol-Q9HuAst_QOTu0iV3zg!2e0'
    },
    {//23 クリーガン・アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm9RhN_aueyGvdXgksJj9xA!2m2!1d29.89678!2d-90.04461!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.89678,-90.04461,3a,75y,90t/data=!3m4!1e1!3m2!1sm9RhN_aueyGvdXgksJj9xA!2e0'
    },
    {//11 オドネル・ストリート (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB0yJu6tpxr_cqQD_mjbkiw!2m2!1d-32.25166!2d148.58525!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.25166,148.58525,3a,75y,90t/data=!3m4!1e1!3m2!1sB0yJu6tpxr_cqQD_mjbkiw!2e0'
    },
    {//312 US-58 BUS (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl_kM7-HlJNPyfaoonWW-Kg!2m2!1d36.67797!2d-76.92708!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.67797,-76.92708,3a,75y,90t/data=!3m4!1e1!3m2!1sl_kM7-HlJNPyfaoonWW-Kg!2e0'
    },
    {//ブラノン・ロード (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEaYMA2vCPwTSoFIi0lw_FQ!2m2!1d10.91361!2d123.46897!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.91361,123.46897,3a,75y,90t/data=!3m4!1e1!3m2!1sEaYMA2vCPwTSoFIi0lw_FQ!2e0'
    },
    {//N4 (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCzWQkuG74bwvvaL7qDLEmw!2m2!1d54.2574!2d-8.47903!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.2574,-8.47903,3a,75y,90t/data=!3m4!1e1!3m2!1sCzWQkuG74bwvvaL7qDLEmw!2e0'
    },
    {//9 インペリアル・コート (オーストラリア南西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sisrtu02XjrSG4fYTXFzPpQ!2m2!1d-32.06784!2d115.96858!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.06784,115.96858,3a,75y,90t/data=!3m4!1e1!3m2!1sisrtu02XjrSG4fYTXFzPpQ!2e0'
    },
    {//8 サピエジンスカ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s56DWQVIVRsRzs0fOSBFg4Q!2m2!1d52.25358!2d21.00342!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.25358,21.00342,3a,75y,90t/data=!3m4!1e1!3m2!1s56DWQVIVRsRzs0fOSBFg4Q!2e0'
    },
    {//26 オーシャン・ビーチ・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srYFNtLHsBaEHP5N82Qfe8A!2m2!1d-33.49203!2d151.32093!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.49203,151.32093,3a,75y,90t/data=!3m4!1e1!3m2!1srYFNtLHsBaEHP5N82Qfe8A!2e0'
    },
    {//パンダーカワーダ, マハーラーシュトラ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swMasUU4VtBKWZMSZfxQcWg!2m2!1d20.03373!2d78.54848!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.03373,78.54848,3a,75y,90t/data=!3m4!1e1!3m2!1swMasUU4VtBKWZMSZfxQcWg!2e0'
    },
    {//A6 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFWn2RIqem0PG0zCsPhv3Lg!2m2!1d49.2948!2d7.2186!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.2948,7.2186,3a,75y,90t/data=!3m4!1e1!3m2!1sFWn2RIqem0PG0zCsPhv3Lg!2e0'
    },
    {//1952 ラ・メルセー通り (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_8-ibmqkp9v6u1z9YDWKaQ!2m2!1d-17.39117!2d-66.17755!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.39117,-66.17755,3a,75y,90t/data=!3m4!1e1!3m2!1s_8-ibmqkp9v6u1z9YDWKaQ!2e0'
    },
    {//テッラ・ドトラント通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb9bxp6J9F1HQO1vLRgGaNw!2m2!1d40.40072!2d17.64586!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.40072,17.64586,3a,75y,90t/data=!3m4!1e1!3m2!1sb9bxp6J9F1HQO1vLRgGaNw!2e0'
    },
    {//16 チャーチル・クレセント (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3KM3MZSspaZcK4I98bY-kw!2m2!1d-33.85612!2d151.09887!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.85612,151.09887,3a,75y,90t/data=!3m4!1e1!3m2!1s3KM3MZSspaZcK4I98bY-kw!2e0'
    },
    {//14 Soleivangen (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ss4EMHQuVmMP_SJyXFxJM3w!2m2!1d63.48196!2d10.93893!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.48196,10.93893,3a,75y,90t/data=!3m4!1e1!3m2!1ss4EMHQuVmMP_SJyXFxJM3w!2e0'
    },
    {//4 Fiolstigen (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfnCoI6tOVma1RziY8zfKAQ!2m2!1d67.1444!2d20.66807!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@67.1444,20.66807,3a,75y,90t/data=!3m4!1e1!3m2!1sfnCoI6tOVma1RziY8zfKAQ!2e0'
    },
    {//ハルディン通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLClwRs8Dswu5IjjLw3NRcQ!2m2!1d39.51656!2d-3.06695!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.51656,-3.06695,3a,75y,90t/data=!3m4!1e1!3m2!1sLClwRs8Dswu5IjjLw3NRcQ!2e0'
    },
    {//3 Jalan Desa Mutiara 2 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8o3Adw6uo15hecRxyeBIig!2m2!1d1.54275!2d103.74486!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.54275,103.74486,3a,75y,90t/data=!3m4!1e1!3m2!1s8o3Adw6uo15hecRxyeBIig!2e0'
    },
    {//バーフェルセ・ハイ (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sd1e5dLu3VpcYY0A-ujhrjA!2m2!1d51.55674!2d4.82382!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.55674,4.82382,3a,75y,90t/data=!3m4!1e1!3m2!1sd1e5dLu3VpcYY0A-ujhrjA!2e0'
    },
    {//31 カペル通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI3izBacmsOUdE3EEN8L8Bg!2m2!1d50.73751!2d5.28579!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.73751,5.28579,3a,75y,90t/data=!3m4!1e1!3m2!1sI3izBacmsOUdE3EEN8L8Bg!2e0'
    },
    {//8914 Boe Ln NE (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2wZb3rpFibI9NumLAtL-RQ!2m2!1d35.18135!2d-106.61361!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.18135,-106.61361,3a,75y,90t/data=!3m4!1e1!3m2!1s2wZb3rpFibI9NumLAtL-RQ!2e0'
    },
    {//10 ルートヴィヒ通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-JGpg7rM-yKm6xEsmVO6lA!2m2!1d53.55962!2d9.96574!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.55962,9.96574,3a,75y,90t/data=!3m4!1e1!3m2!1s-JGpg7rM-yKm6xEsmVO6lA!2e0'
    },
    {//180 ラルゴ・ソウト・ペレイラ (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjfbp2pKcROMHtqTH2omXdg!2m2!1d41.15073!2d-8.53594!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.15073,-8.53594,3a,75y,90t/data=!3m4!1e1!3m2!1sjfbp2pKcROMHtqTH2omXdg!2e0'
    },
    {//1220 (チェコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf292QGBeGvjkhtkUrlRrHA!2m2!1d48.77362!2d17.83101!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.77362,17.83101,3a,75y,90t/data=!3m4!1e1!3m2!1sf292QGBeGvjkhtkUrlRrHA!2e0'
    },
    {//サルガツコエ, オムスク (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su6qRwmoltgk1ygwWEReY-w!2m2!1d55.59397!2d73.48092!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.59397,73.48092,3a,75y,90t/data=!3m4!1e1!3m2!1su6qRwmoltgk1ygwWEReY-w!2e0'
    },
    {//A-228 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVw-bgv_yCzRfsEpb2kLtMQ!2m2!1d40.43984!2d-0.72875!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.43984,-0.72875,3a,75y,90t/data=!3m4!1e1!3m2!1sVw-bgv_yCzRfsEpb2kLtMQ!2e0'
    },
    {//930 ウェスト・ルボック・ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfHg0P912H1bUnSVtCQfUog!2m2!1d33.43564!2d-101.6533!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.43564,-101.6533,3a,75y,90t/data=!3m4!1e1!3m2!1sfHg0P912H1bUnSVtCQfUog!2e0'
    },
    {//5483 ブル・ラン・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sh1tmLgbsDmRsvA7jX2zsEA!2m2!1d33.52588!2d-86.68961!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.52588,-86.68961,3a,75y,90t/data=!3m4!1e1!3m2!1sh1tmLgbsDmRsvA7jX2zsEA!2e0'
    },
    {//ラッタ・ナシオナル・セキュンダリア 203 (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNGC7ZLXh2L5bjUS3i8aMTg!2m2!1d9.94143!2d-84.02424!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.94143,-84.02424,3a,75y,90t/data=!3m4!1e1!3m2!1sNGC7ZLXh2L5bjUS3i8aMTg!2e0'
    },
    {//コンポンスプー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slO4805Nvm3DvxgiEalUg6A!2m2!1d11.19957!2d104.57206!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.19957,104.57206,3a,75y,90t/data=!3m4!1e1!3m2!1slO4805Nvm3DvxgiEalUg6A!2e0'
    },
    {//ノッティンガム, イングランド (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYdlG56DzV1IyRHx0iRdvOg!2m2!1d52.94612!2d-1.12865!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.94612,-1.12865,3a,75y,90t/data=!3m4!1e1!3m2!1sYdlG56DzV1IyRHx0iRdvOg!2e0'
    },
    {//93 サン・ルイス通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf7dNlRlOJYkuDaiNDmU1rA!2m2!1d40.47783!2d-3.67126!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.47783,-3.67126,3a,75y,90t/data=!3m4!1e1!3m2!1sf7dNlRlOJYkuDaiNDmU1rA!2e0'
    },
    {//3 Milanovićeva ul. (クロアチア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx8yPJB8QPxv78iZVKySSGQ!2m2!1d44.04538!2d16.21511!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.04538,16.21511,3a,75y,90t/data=!3m4!1e1!3m2!1sx8yPJB8QPxv78iZVKySSGQ!2e0'
    },
    {//59 იმერეთის ქუჩა (ジョージア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGjyBwNXvPzpHhCJXFxtW4g!2m2!1d42.14959!2d41.68528!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.14959,41.68528,3a,75y,90t/data=!3m4!1e1!3m2!1sGjyBwNXvPzpHhCJXFxtW4g!2e0'
    },
    {//ヴェストラ・イェータランド (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3Xj_W2Orta5Wq1KzVrKbHw!2m2!1d58.418!2d12.24022!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@58.418,12.24022,3a,75y,90t/data=!3m4!1e1!3m2!1s3Xj_W2Orta5Wq1KzVrKbHw!2e0'
    },
    {//24 Jl. Patimura (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6UrgMC6fOyVQLHHWqk-1Fg!2m2!1d-8.74129!2d116.8486!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.74129,116.8486,3a,75y,90t/data=!3m4!1e1!3m2!1s6UrgMC6fOyVQLHHWqk-1Fg!2e0'
    },
    {//M6202BIS (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sei8ZUtT3xFvgixEmg_bDfQ!2m2!1d43.7222!2d7.1825!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.7222,7.1825,3a,75y,90t/data=!3m4!1e1!3m2!1sei8ZUtT3xFvgixEmg_bDfQ!2e0'
    },
    {//169 タンガラー通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqMA1W-FLE0AAeE6gCD2o6g!2m2!1d-27.39614!2d-51.20862!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.39614,-51.20862,3a,75y,90t/data=!3m4!1e1!3m2!1sqMA1W-FLE0AAeE6gCD2o6g!2e0'
    },
    {//598 メープル・ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxFuTgilQmYLm-xWL9duT8A!2m2!1d33.57869!2d-96.18212!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.57869,-96.18212,3a,75y,90t/data=!3m4!1e1!3m2!1sxFuTgilQmYLm-xWL9duT8A!2e0'
    },
    {//9 イーグル・ロード (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQZlwq5KRfN9oMB1PSyvOxg!2m2!1d52.47147!2d-113.7518!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.47147,-113.7518,3a,75y,90t/data=!3m4!1e1!3m2!1sQZlwq5KRfN9oMB1PSyvOxg!2e0'
    },
    {//DK81 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgSFaz6C00MZtD9347ZdgaA!2m2!1d49.95643!2d18.72245!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.95643,18.72245,3a,75y,90t/data=!3m4!1e1!3m2!1sgSFaz6C00MZtD9347ZdgaA!2e0'
    },
    {//5 Fetih Sk. (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3b7TC4Jvs3JgAHbHRck2Ug!2m2!1d41.20073!2d28.74963!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.20073,28.74963,3a,75y,90t/data=!3m4!1e1!3m2!1s3b7TC4Jvs3JgAHbHRck2Ug!2e0'
    },
    {//5 Skarðseyri (アイスランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syECVKbFHJk5MbRhS6gNDuw!2m2!1d65.76038!2d-19.65013!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@65.76038,-19.65013,3a,75y,90t/data=!3m4!1e1!3m2!1syECVKbFHJk5MbRhS6gNDuw!2e0'
    },
    {//鳩山町, 埼玉県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swcGgp5o7CzaedzAK6I6xTQ!2m2!1d35.97236!2d139.33932!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.97236,139.33932,3a,75y,90t/data=!3m4!1e1!3m2!1swcGgp5o7CzaedzAK6I6xTQ!2e0'
    },
    {//チャップマン・レーン (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZeX8g8hWgZDifHrKon_zgA!2m2!1d51.59355!2d-0.70877!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.59355,-0.70877,3a,75y,90t/data=!3m4!1e1!3m2!1sZeX8g8hWgZDifHrKon_zgA!2e0'
    },
    {//1007 24th ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swnJ0eo5SjfM8T89sA7gq2g!2m2!1d32.71846!2d-100.90837!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.71846,-100.90837,3a,75y,90t/data=!3m4!1e1!3m2!1swnJ0eo5SjfM8T89sA7gq2g!2e0'
    },
    {//中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svL2XcEplXW19JoJAb4zqkw!2m2!1d-7.52837!2d110.75005!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.52837,110.75005,3a,75y,90t/data=!3m4!1e1!3m2!1svL2XcEplXW19JoJAb4zqkw!2e0'
    },
    {//17 シュピタルナ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sutYWQJ4g__OrauZcqTpiZQ!2m2!1d52.61254!2d18.5154!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.61254,18.5154,3a,75y,90t/data=!3m4!1e1!3m2!1sutYWQJ4g__OrauZcqTpiZQ!2e0'
    },
    {//Turunçova, アンタルヤ (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg6odr2BRx6GsbtqJdXYmxw!2m2!1d36.35933!2d30.1286!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.35933,30.1286,3a,75y,90t/data=!3m4!1e1!3m2!1sg6odr2BRx6GsbtqJdXYmxw!2e0'
    },
    {//41 シュール通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP_0w6bA6OMhotnbu0s9uvA!2m2!1d50.14729!2d8.53045!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.14729,8.53045,3a,75y,90t/data=!3m4!1e1!3m2!1sP_0w6bA6OMhotnbu0s9uvA!2e0'
    },
    {//1 Günay Sk. (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snFwohOjw_AESdxZfzcXlMA!2m2!1d41.39725!2d27.34399!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.39725,27.34399,3a,75y,90t/data=!3m4!1e1!3m2!1snFwohOjw_AESdxZfzcXlMA!2e0'
    },
    {//1003 ペッグ・テラス (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suclg-JUnS7DqDc_UigR46A!2m2!1d33.68934!2d-84.42182!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.68934,-84.42182,3a,75y,90t/data=!3m4!1e1!3m2!1suclg-JUnS7DqDc_UigR46A!2e0'
    },
    {//198 ドクトール・ホセ E. ガダノ (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgYqk7XHlSy31WQng7nomtA!2m2!1d-39.02382!2d-67.56622!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-39.02382,-67.56622,3a,75y,90t/data=!3m4!1e1!3m2!1sgYqk7XHlSy31WQng7nomtA!2e0'
    },
    {//45 ラ・ラーマ通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1iuKYcLArfrhpF2BnWHDnA!2m2!1d44.05106!2d11.15268!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.05106,11.15268,3a,75y,90t/data=!3m4!1e1!3m2!1s1iuKYcLArfrhpF2BnWHDnA!2e0'
    },
    {//バスク自治州 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl9lSzW32_MD3IyQc3GNCIQ!2m2!1d43.31729!2d-2.9719!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.31729,-2.9719,3a,75y,90t/data=!3m4!1e1!3m2!1sl9lSzW32_MD3IyQc3GNCIQ!2e0'
    },
    {//1399 ゴレタ・コンスティトゥシオン (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sASDp-XtpCDr_4VKaXBLVcw!2m2!1d-34.47259!2d-58.91834!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.47259,-58.91834,3a,75y,90t/data=!3m4!1e1!3m2!1sASDp-XtpCDr_4VKaXBLVcw!2e0'
    },
    {//85 マイアリー・ブルック・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saLPDWUfZeI_953vzaUx6YQ!2m2!1d40.23064!2d-74.64838!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.23064,-74.64838,3a,75y,90t/data=!3m4!1e1!3m2!1saLPDWUfZeI_953vzaUx6YQ!2e0'
    },
    {//Str. バレア・ブラトクツェイ (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swkhDzoO3JNuWiUnJ6iNdug!2m2!1d46.9139!2d22.59726!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.9139,22.59726,3a,75y,90t/data=!3m4!1e1!3m2!1swkhDzoO3JNuWiUnJ6iNdug!2e0'
    },
    {//92 Jl. Kapten Patimura (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssVaqK7bluCr_SB3J3LN9lw!2m2!1d3.5738!2d98.66278!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.5738,98.66278,3a,75y,90t/data=!3m4!1e1!3m2!1ssVaqK7bluCr_SB3J3LN9lw!2e0'
    },
    {//4041 スペンサー・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srFAV2em5CkGlGECiIwvfBg!2m2!1d41.45056!2d-81.86446!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.45056,-81.86446,3a,75y,90t/data=!3m4!1e1!3m2!1srFAV2em5CkGlGECiIwvfBg!2e0'
    },
    {//2 Rivikuja (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5s5NGBd5Sz068vxOds0i9Q!2m2!1d64.80636!2d26.00771!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@64.80636,26.00771,3a,75y,90t/data=!3m4!1e1!3m2!1s5s5NGBd5Sz068vxOds0i9Q!2e0'
    },
    {//311 B653 (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYAkqGMCwgyjjFhOiKDiIlw!2m2!1d51.83687!2d-0.35354!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.83687,-0.35354,3a,75y,90t/data=!3m4!1e1!3m2!1sYAkqGMCwgyjjFhOiKDiIlw!2e0'
    },
    {//1 バンオーウェン・ドライブ (北アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSTMKrSLOGNt5PBrOutG1Gw!2m2!1d54.53456!2d-6.68817!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.53456,-6.68817,3a,75y,90t/data=!3m4!1e1!3m2!1sSTMKrSLOGNt5PBrOutG1Gw!2e0'
    },
    {//ストシェゴム, ドルヌィ・シロンスク県 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siwp1qeANI3waaVHsAxujWg!2m2!1d50.95218!2d16.34849!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.95218,16.34849,3a,75y,90t/data=!3m4!1e1!3m2!1siwp1qeANI3waaVHsAxujWg!2e0'
    },
    {//171 センテナリオ・デ・マヨ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sN4Yy0a-SLpptsnD5S8p1tw!2m2!1d-34.81487!2d-58.39453!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.81487,-58.39453,3a,75y,90t/data=!3m4!1e1!3m2!1sN4Yy0a-SLpptsnD5S8p1tw!2e0'
    },
    {//US-287 BUS (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDnZBmSjvi9qBPLR-_iH2gA!2m2!1d34.15062!2d-99.25557!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.15062,-99.25557,3a,75y,90t/data=!3m4!1e1!3m2!1sDnZBmSjvi9qBPLR-_iH2gA!2e0'
    },
    {//47 セント・アンドリューズ・レーン (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stcXq_B2kwAdsRTXZX3Eflg!2m2!1d54.70102!2d-1.5929!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.70102,-1.5929,3a,75y,90t/data=!3m4!1e1!3m2!1stcXq_B2kwAdsRTXZX3Eflg!2e0'
    },
    {//1116 ウェスト・アーリントン・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swi6vk0_sVoF_Giy6UHbPQw!2m2!1d41.81473!2d-87.8842!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.81473,-87.8842,3a,75y,90t/data=!3m4!1e1!3m2!1swi6vk0_sVoF_Giy6UHbPQw!2e0'
    },
    {//335 QL9 (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQQzQrMGTQzkvB0_3-gARYg!2m2!1d16.62064!2d106.72664!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.62064,106.72664,3a,75y,90t/data=!3m4!1e1!3m2!1sQQzQrMGTQzkvB0_3-gARYg!2e0'
    },
    {//598 サンタ・マリア・デ・ヴィアトードス通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5Mz_WQOtX9is1LzeyXXuYA!2m2!1d41.44686!2d-8.55671!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.44686,-8.55671,3a,75y,90t/data=!3m4!1e1!3m2!1s5Mz_WQOtX9is1LzeyXXuYA!2e0'
    },
    {//キビュー・ベルト・ロード (ルワンダ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRvQV3JZux19IVhQt486qGA!2m2!1d-2.34173!2d29.10436!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.34173,29.10436,3a,75y,90t/data=!3m4!1e1!3m2!1sRvQV3JZux19IVhQt486qGA!2e0'
    },
    {//Thakurganj, ビハール (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2Kfz0moH1Y-w8Eklj1JsKg!2m2!1d26.43215!2d88.12649!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.43215,88.12649,3a,75y,90t/data=!3m4!1e1!3m2!1s2Kfz0moH1Y-w8Eklj1JsKg!2e0'
    },
    {//4 Ελλησπόντου (ギリシャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjMuC7-DBAWEezxOWd9rayQ!2m2!1d40.3059!2d21.78478!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.3059,21.78478,3a,75y,90t/data=!3m4!1e1!3m2!1sjMuC7-DBAWEezxOWd9rayQ!2e0'
    },
    {//Radava, ニトラ (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOVgI-G6ZWrpFwgRJl1AYrQ!2m2!1d48.09753!2d18.2998!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.09753,18.2998,3a,75y,90t/data=!3m4!1e1!3m2!1sOVgI-G6ZWrpFwgRJl1AYrQ!2e0'
    },
    {//ラーンチー, ジャールカンド (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ8ARP73-jMjLuxego4VqLQ!2m2!1d23.30948!2d85.38974!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.30948,85.38974,3a,75y,90t/data=!3m4!1e1!3m2!1sQ8ARP73-jMjLuxego4VqLQ!2e0'
    },
    {//1006 ベニート・ファレス通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sldw_Jj2SAKOITs-ubKnNpg!2m2!1d22.22272!2d-97.83998!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.22272,-97.83998,3a,75y,90t/data=!3m4!1e1!3m2!1sldw_Jj2SAKOITs-ubKnNpg!2e0'
    },
    {//الطريق الدائري الثاني (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXH4Ccb4rMuwYkUDazr3UkA!2m2!1d25.27442!2d51.53604!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.27442,51.53604,3a,75y,90t/data=!3m4!1e1!3m2!1sXH4Ccb4rMuwYkUDazr3UkA!2e0'
    },
    {//20 Ängsås väg (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4_RTp8ZW0DmpNqF9ryG7TA!2m2!1d60.89224!2d15.12244!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.89224,15.12244,3a,75y,90t/data=!3m4!1e1!3m2!1s4_RTp8ZW0DmpNqF9ryG7TA!2e0'
    },
    {//クパン, ヌサトゥンガラティムール (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5dfwg16qXhZAuTY20fG8MQ!2m2!1d-10.1796!2d123.62617!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.1796,123.62617,3a,75y,90t/data=!3m4!1e1!3m2!1s5dfwg16qXhZAuTY20fG8MQ!2e0'
    },
    {//マフラ, リスボン (ポルトガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbfs8iS6IKgak1OPmVgy1ow!2m2!1d38.94804!2d-9.32972!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.94804,-9.32972,3a,75y,90t/data=!3m4!1e1!3m2!1sbfs8iS6IKgak1OPmVgy1ow!2e0'
    },
    {//16 ツァルネツカ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_p1ggdtwHnebhiEkKIp4pg!2m2!1d51.37724!2d21.37176!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.37724,21.37176,3a,75y,90t/data=!3m4!1e1!3m2!1s_p1ggdtwHnebhiEkKIp4pg!2e0'
    },
    {//ラッサム, ニューヨーク州 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srrCpgzUO44XEAMHZl0aNUQ!2m2!1d42.75355!2d-73.76761!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.75355,-73.76761,3a,75y,90t/data=!3m4!1e1!3m2!1srrCpgzUO44XEAMHZl0aNUQ!2e0'
    },
    {//3 Kader Sk. (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soaY1Sb8ms_yL3nwp6UExwA!2m2!1d39.90421!2d44.04737!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.90421,44.04737,3a,75y,90t/data=!3m4!1e1!3m2!1soaY1Sb8ms_yL3nwp6UExwA!2e0'
    },
    {//9 N591 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syPclIq42ZxH5hPrRacvD2w!2m2!1d49.98473!2d4.17703!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.98473,4.17703,3a,75y,90t/data=!3m4!1e1!3m2!1syPclIq42ZxH5hPrRacvD2w!2e0'
    },
    {//4 Turvegen (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stZUyuaAwpT-P1KPCYwx03A!2m2!1d60.90083!2d11.56854!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.90083,11.56854,3a,75y,90t/data=!3m4!1e1!3m2!1stZUyuaAwpT-P1KPCYwx03A!2e0'
    },
    {//モスクワ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1Kz4kpsKBKiprXzqqctwyw!2m2!1d55.76502!2d37.83226!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.76502,37.83226,3a,75y,90t/data=!3m4!1e1!3m2!1s1Kz4kpsKBKiprXzqqctwyw!2e0'
    },
    {//ポイント・クック, ビクトリア (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVT65ki6TjdTIHBMNYkJnPQ!2m2!1d-37.91331!2d144.75645!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.91331,144.75645,3a,75y,90t/data=!3m4!1e1!3m2!1sVT65ki6TjdTIHBMNYkJnPQ!2e0'
    },
    {//四万十市, 高知県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRFoUoPwvDmjPzn5QFJ2AOg!2m2!1d32.98024!2d132.95019!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.98024,132.95019,3a,75y,90t/data=!3m4!1e1!3m2!1sRFoUoPwvDmjPzn5QFJ2AOg!2e0'
    },
    {//ポータダウン, 北アイルランド (北アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxeSllx7Gt8tffk0SP0l3MA!2m2!1d54.43797!2d-6.40419!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.43797,-6.40419,3a,75y,90t/data=!3m4!1e1!3m2!1sxeSllx7Gt8tffk0SP0l3MA!2e0'
    },
    {//36 エルジェーベト通り (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sliCNHPwAnU_KIxlJAxejfg!2m2!1d47.37528!2d18.92518!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.37528,18.92518,3a,75y,90t/data=!3m4!1e1!3m2!1sliCNHPwAnU_KIxlJAxejfg!2e0'
    },
    {//86 D99 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfvX9tAZ_golx4AJqHA0dlw!2m2!1d46.52219!2d-0.76322!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.52219,-0.76322,3a,75y,90t/data=!3m4!1e1!3m2!1sfvX9tAZ_golx4AJqHA0dlw!2e0'
    },
    {//ロヴァニエミ, ラップランド (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDF3ENqXc5ypYEKqq5i6c5A!2m2!1d66.51131!2d25.7042!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@66.51131,25.7042,3a,75y,90t/data=!3m4!1e1!3m2!1sDF3ENqXc5ypYEKqq5i6c5A!2e0'
    },
    {//バークレー・ミューズ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1st0ybkzhyozL5JgNuExaA5w!2m2!1d51.89798!2d-2.06971!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.89798,-2.06971,3a,75y,90t/data=!3m4!1e1!3m2!1st0ybkzhyozL5JgNuExaA5w!2e0'
    },
    {//31 クリー・アベニュー (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHUT-WYqEkFneT0okM-e7lg!2m2!1d45.28207!2d-66.07623!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.28207,-66.07623,3a,75y,90t/data=!3m4!1e1!3m2!1sHUT-WYqEkFneT0okM-e7lg!2e0'
    },
    {//28 シュトリーソヴェル通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9iBp19dt7hCN8qINFi1E6A!2m2!1d51.77453!2d14.31739!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.77453,14.31739,3a,75y,90t/data=!3m4!1e1!3m2!1s9iBp19dt7hCN8qINFi1E6A!2e0'
    },
    {//19 アイヒャート通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssM_LbXHPcVVd0JGwkj3OWQ!2m2!1d48.7212!2d8.72355!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.7212,8.72355,3a,75y,90t/data=!3m4!1e1!3m2!1ssM_LbXHPcVVd0JGwkj3OWQ!2e0'
    },
    {//ジャン・ルルサ通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv9YjsrO_A-HRpjMb7hATDQ!2m2!1d45.36241!2d4.79869!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.36241,4.79869,3a,75y,90t/data=!3m4!1e1!3m2!1sv9YjsrO_A-HRpjMb7hATDQ!2e0'
    },
    {//3 フレデリック通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5qdlq96vdI-MZeBJBH_P4w!2m2!1d49.38915!2d8.37415!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.38915,8.37415,3a,75y,90t/data=!3m4!1e1!3m2!1s5qdlq96vdI-MZeBJBH_P4w!2e0'
    },
    {//140 キングフィッシャー・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFkXTC3aiGPirvvSWQocczg!2m2!1d-26.14548!2d27.88505!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.14548,27.88505,3a,75y,90t/data=!3m4!1e1!3m2!1sFkXTC3aiGPirvvSWQocczg!2e0'
    },
    {//クマウン・ロード (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s74f7Kunnhf9An0i8oR222w!2m2!1d23.80287!2d91.4412!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.80287,91.4412,3a,75y,90t/data=!3m4!1e1!3m2!1s74f7Kunnhf9An0i8oR222w!2e0'
    },
    {//13 エル・カンプ・ディ・ナヴ (スイス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqes9w8J-kmLlEpLzH0S8BQ!2m2!1d46.19039!2d9.00566!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.19039,9.00566,3a,75y,90t/data=!3m4!1e1!3m2!1sqes9w8J-kmLlEpLzH0S8BQ!2e0'
    },
    {//バラキンウッ, ペンシルベニア州 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s64M6BqTbxBAntAARe48n_g!2m2!1d40.0068!2d-75.22008!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.0068,-75.22008,3a,75y,90t/data=!3m4!1e1!3m2!1s64M6BqTbxBAntAARe48n_g!2e0'
    },
    {//104 ヴァッテンシャイダー・ヘル通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb1H1hjqUDKO_bDTvNnLE1A!2m2!1d51.46389!2d7.15022!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.46389,7.15022,3a,75y,90t/data=!3m4!1e1!3m2!1sb1H1hjqUDKO_bDTvNnLE1A!2e0'
    },
    {//ンジョロ, ナクル (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3k9Wk6jT4DcKSHGTQ-h_gA!2m2!1d-0.33396!2d35.95462!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.33396,35.95462,3a,75y,90t/data=!3m4!1e1!3m2!1s3k9Wk6jT4DcKSHGTQ-h_gA!2e0'
    },
    {//シエネガ・デ・フローレス - サリーナス・ビクトリア自動車道 (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sES4G3e33V7C8adsQfWGOBg!2m2!1d25.9355!2d-100.19544!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.9355,-100.19544,3a,75y,90t/data=!3m4!1e1!3m2!1sES4G3e33V7C8adsQfWGOBg!2e0'
    },
    {//ストラ＝モンタナーラ＝ピエーヴェ, ベネト (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBSIp_G9pEwAv3QLvQpNvLA!2m2!1d45.42164!2d11.15273!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.42164,11.15273,3a,75y,90t/data=!3m4!1e1!3m2!1sBSIp_G9pEwAv3QLvQpNvLA!2e0'
    },
    {//58 Akpınar Cd. (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s66GS2xiMQT33ubcNUPJLLQ!2m2!1d37.88358!2d30.00532!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.88358,30.00532,3a,75y,90t/data=!3m4!1e1!3m2!1s66GS2xiMQT33ubcNUPJLLQ!2e0'
    },
    {//شارع الخيل الأول (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8xPxr5PTlVrQX5HuDLKngw!2m2!1d25.0756!2d55.17507!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.0756,55.17507,3a,75y,90t/data=!3m4!1e1!3m2!1s8xPxr5PTlVrQX5HuDLKngw!2e0'
    },
    {//44 コッレ・リストレッティ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0rPm2iWwJuUBjky_KN5v9w!2m2!1d41.83694!2d12.81215!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.83694,12.81215,3a,75y,90t/data=!3m4!1e1!3m2!1s0rPm2iWwJuUBjky_KN5v9w!2e0'
    },
    {//2 メリンダ・ドライブ (タスマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqSSzybMvB8vFoXVETbs0CQ!2m2!1d-41.16198!2d146.20065!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-41.16198,146.20065,3a,75y,90t/data=!3m4!1e1!3m2!1sqSSzybMvB8vFoXVETbs0CQ!2e0'
    },
    {//31 Hẻm số 08 Nguyễn Văn Rốp (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVxo9QK7y4HuzfFxN6_4lnQ!2m2!1d11.3017!2d106.11204!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.3017,106.11204,3a,75y,90t/data=!3m4!1e1!3m2!1sVxo9QK7y4HuzfFxN6_4lnQ!2e0'
    },
    {//1702 アダムズ・アベニュー (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRmL2gA_Z0n3TsR99LF1X8Q!2m2!1d40.95594!2d-76.90133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.95594,-76.90133,3a,75y,90t/data=!3m4!1e1!3m2!1sRmL2gA_Z0n3TsR99LF1X8Q!2e0'
    },
    {//30 ジェネラル・ルクレール通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXTpPxFazPUWMPX5eGUuESQ!2m2!1d46.03507!2d4.08519!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.03507,4.08519,3a,75y,90t/data=!3m4!1e1!3m2!1sXTpPxFazPUWMPX5eGUuESQ!2e0'
    },
    {//6 ガブリエル・ピーニョ・ダ・クルース通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqowFp7Km52ciKh-NRWPOCA!2m2!1d40.86549!2d-8.41307!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.86549,-8.41307,3a,75y,90t/data=!3m4!1e1!3m2!1sqowFp7Km52ciKh-NRWPOCA!2e0'
    },
    {//6 Kjerkelia (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szK_J22mypuynScVOBpvLDQ!2m2!1d65.84671!2d13.2088!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@65.84671,13.2088,3a,75y,90t/data=!3m4!1e1!3m2!1szK_J22mypuynScVOBpvLDQ!2e0'
    },
    {//3 パウルス・ポッター通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7OV-yixhFrCOU7lByqCWSg!2m2!1d52.13895!2d6.20644!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.13895,6.20644,3a,75y,90t/data=!3m4!1e1!3m2!1s7OV-yixhFrCOU7lByqCWSg!2e0'
    },
    {//35 フリースマワイ (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spKqnPyHsHYOi2jsOysUVlw!2m2!1d53.12016!2d5.81131!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.12016,5.81131,3a,75y,90t/data=!3m4!1e1!3m2!1spKqnPyHsHYOi2jsOysUVlw!2e0'
    },
    {//4 イースト・ラバーン・アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4giMdEiNh380gRaaYQyDfg!2m2!1d37.89413!2d-122.53427!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.89413,-122.53427,3a,75y,90t/data=!3m4!1e1!3m2!1s4giMdEiNh380gRaaYQyDfg!2e0'
    },
    {//メイン・ロード (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stDA1zacvMaZGbYcqA2QqVw!2m2!1d-29.47678!2d30.21641!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.47678,30.21641,3a,75y,90t/data=!3m4!1e1!3m2!1stDA1zacvMaZGbYcqA2QqVw!2e0'
    },
    {//27 ペスタロッツィ通り (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLpmQW3ZM6WbFNNkPhQdFsw!2m2!1d46.60844!2d13.84749!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.60844,13.84749,3a,75y,90t/data=!3m4!1e1!3m2!1sLpmQW3ZM6WbFNNkPhQdFsw!2e0'
    },
    {//A-379 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sW-VgG7T53tkAxgPZfSRICA!2m2!1d37.3022!2d-4.77441!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.3022,-4.77441,3a,75y,90t/data=!3m4!1e1!3m2!1sW-VgG7T53tkAxgPZfSRICA!2e0'
    },
    {//24243 サウス・ナバホ・ドライブ (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6MVlOf-h1FleqPNcnmaLRQ!2m2!1d41.44214!2d-88.22061!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.44214,-88.22061,3a,75y,90t/data=!3m4!1e1!3m2!1s6MVlOf-h1FleqPNcnmaLRQ!2e0'
    },
    {//I-70 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1fXa0dGPZPoN2Daf4-TEvQ!2m2!1d38.78158!2d-112.09452!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.78158,-112.09452,3a,75y,90t/data=!3m4!1e1!3m2!1s1fXa0dGPZPoN2Daf4-TEvQ!2e0'
    },
    {//Jl. Tegalombo-Bandar (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPrsKvZeTyrP2Q-369sshcA!2m2!1d-8.01749!2d111.33489!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.01749,111.33489,3a,75y,90t/data=!3m4!1e1!3m2!1sPrsKvZeTyrP2Q-369sshcA!2e0'
    },
    {//Borðoyavík (フェロー諸島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3VeDMqhkFFf_c46DSLjBRQ!2m2!1d62.21832!2d-6.57104!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.21832,-6.57104,3a,75y,90t/data=!3m4!1e1!3m2!1s3VeDMqhkFFf_c46DSLjBRQ!2e0'
    },
    {//4 Ojakankaantie (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s25GtOJahArB04WbxqtK9yQ!2m2!1d64.25657!2d24.79173!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@64.25657,24.79173,3a,75y,90t/data=!3m4!1e1!3m2!1s25GtOJahArB04WbxqtK9yQ!2e0'
    },
    {//201040 AB-512 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTn5eL0nOIZLtCxz2xc1Plg!2m2!1d49.69881!2d-112.61766!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.69881,-112.61766,3a,75y,90t/data=!3m4!1e1!3m2!1sTn5eL0nOIZLtCxz2xc1Plg!2e0'
    },
    {//16 Tortilis Cres (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTnfYr6y9MzrRdpENuB4lNw!2m2!1d-33.0994!2d18.04629!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.0994,18.04629,3a,75y,90t/data=!3m4!1e1!3m2!1sTnfYr6y9MzrRdpENuB4lNw!2e0'
    },
    {//ตำบล เกาะหลัก, プラチュワップ キーリー カン (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxfVgB09IOb6VCUYVWxyqkw!2m2!1d11.83873!2d99.76899!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.83873,99.76899,3a,75y,90t/data=!3m4!1e1!3m2!1sxfVgB09IOb6VCUYVWxyqkw!2e0'
    },
    {//11 UT-266 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjIVpciIPJx4831HKGOob5w!2m2!1d40.67482!2d-111.89054!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.67482,-111.89054,3a,75y,90t/data=!3m4!1e1!3m2!1sjIVpciIPJx4831HKGOob5w!2e0'
    },
    {//96 Morningside Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssriShWQcXEiOPOMYbWFnTg!2m2!1d-35.737!2d174.32394!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-35.737,174.32394,3a,75y,90t/data=!3m4!1e1!3m2!1ssriShWQcXEiOPOMYbWFnTg!2e0'
    },
    {//12 デル・パイラー (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBCBH1PvAKFoT-C4YDbuNaQ!2m2!1d16.93052!2d120.45058!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.93052,120.45058,3a,75y,90t/data=!3m4!1e1!3m2!1sBCBH1PvAKFoT-C4YDbuNaQ!2e0'
    },
    {//ミッド・ウェスタン・ハイウェイ (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szVP9gWzgPsQzGQlehWGZ-Q!2m2!1d-33.82921!2d148.71187!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.82921,148.71187,3a,75y,90t/data=!3m4!1e1!3m2!1szVP9gWzgPsQzGQlehWGZ-Q!2e0'
    },
    {//17 アロンディエール通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1squhsfEG_GDAoQz3BI3thEQ!2m2!1d45.60766!2d4.78024!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.60766,4.78024,3a,75y,90t/data=!3m4!1e1!3m2!1squhsfEG_GDAoQz3BI3thEQ!2e0'
    },
    {//1 ベイリーズ・レーン (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s95-PVaUIDzZbEfNflgnLFQ!2m2!1d55.86685!2d-3.97764!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.86685,-3.97764,3a,75y,90t/data=!3m4!1e1!3m2!1s95-PVaUIDzZbEfNflgnLFQ!2e0'
    },
    {//ルア通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbmmekjrwac8l9-y9Sqr8EQ!2m2!1d46.23994!2d7.35614!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.23994,7.35614,3a,75y,90t/data=!3m4!1e1!3m2!1sbmmekjrwac8l9-y9Sqr8EQ!2e0'
    },
    {//ダカニ・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP4UT2fkm78MBplK-bK__NQ!2m2!1d24.47215!2d75.13361!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.47215,75.13361,3a,75y,90t/data=!3m4!1e1!3m2!1sP4UT2fkm78MBplK-bK__NQ!2e0'
    },
    {//L10 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUwWGkovrClfpED009FHukQ!2m2!1d50.37973!2d6.95188!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.37973,6.95188,3a,75y,90t/data=!3m4!1e1!3m2!1sUwWGkovrClfpED009FHukQ!2e0'
    },
    {//ヌサトゥンガラバラット (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s08wF6ChSSYo3KrXRUa3Ycw!2m2!1d-8.50123!2d117.42852!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.50123,117.42852,3a,75y,90t/data=!3m4!1e1!3m2!1s08wF6ChSSYo3KrXRUa3Ycw!2e0'
    },
    {//27 Γερίου (キプロス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQdQlMc8BkOHreLbQ3HUPlQ!2m2!1d35.10587!2d33.41572!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.10587,33.41572,3a,75y,90t/data=!3m4!1e1!3m2!1sQdQlMc8BkOHreLbQ3HUPlQ!2e0'
    },
    {//オティニー＝ルヴァン＝ラ＝ヌーヴ, ワロン地域 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK9cbecTDVrevLUlS02frAA!2m2!1d50.6865!2d4.55764!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.6865,4.55764,3a,75y,90t/data=!3m4!1e1!3m2!1sK9cbecTDVrevLUlS02frAA!2e0'
    },
    {//15 ハ＝ブロシム・ストリート (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7TPtmseYZ29ASgvWVIgPVA!2m2!1d32.83177!2d35.08883!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.83177,35.08883,3a,75y,90t/data=!3m4!1e1!3m2!1s7TPtmseYZ29ASgvWVIgPVA!2e0'
    },
    {//スコットランド (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sacziEzSZqvTI7PVhTtKBvA!2m2!1d55.9213!2d-3.46357!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.9213,-3.46357,3a,75y,90t/data=!3m4!1e1!3m2!1sacziEzSZqvTI7PVhTtKBvA!2e0'
    },
    {//ホーチミン, ホー・チ・ミン (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suc-LA4ji2tWYHb2I-bI6RQ!2m2!1d10.65707!2d107.27661!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.65707,107.27661,3a,75y,90t/data=!3m4!1e1!3m2!1suc-LA4ji2tWYHb2I-bI6RQ!2e0'
    },
    {//Hulivägen (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_VnCY_Nl00gCWQZN6sBudg!2m2!1d62.41083!2d17.32115!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.41083,17.32115,3a,75y,90t/data=!3m4!1e1!3m2!1s_VnCY_Nl00gCWQZN6sBudg!2e0'
    },
    {//9 マルチナ・ドラガナ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMUL6UzqYFCjNh0fYXfc1Fg!2m2!1d54.33981!2d18.61323!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.33981,18.61323,3a,75y,90t/data=!3m4!1e1!3m2!1sMUL6UzqYFCjNh0fYXfc1Fg!2e0'
    },
    {//42 ウーリツァ・リヴァ・トルストヴォ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGLecxvPUkHjlceNCepxRgQ!2m2!1d52.30981!2d45.38304!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.30981,45.38304,3a,75y,90t/data=!3m4!1e1!3m2!1sGLecxvPUkHjlceNCepxRgQ!2e0'
    },
    {//19 Επτανήσου (ギリシャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sE6fC6Zhw5qCudCnMSmt4Sg!2m2!1d38.0365!2d23.68436!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.0365,23.68436,3a,75y,90t/data=!3m4!1e1!3m2!1sE6fC6Zhw5qCudCnMSmt4Sg!2e0'
    },
    {//18 キョーリョシ通り (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVNSFelNGVyvqyP4RGE_VRg!2m2!1d47.1678!2d19.79595!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.1678,19.79595,3a,75y,90t/data=!3m4!1e1!3m2!1sVNSFelNGVyvqyP4RGE_VRg!2e0'
    },
    {//13229 FM1560 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sA5184AaFn6wkT81Jv1u5zw!2m2!1d29.56584!2d-98.67775!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.56584,-98.67775,3a,75y,90t/data=!3m4!1e1!3m2!1sA5184AaFn6wkT81Jv1u5zw!2e0'
    },
    {//667 Av. Javares (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEQPt-o4JgQ6vkR91s6WLhg!2m2!1d-14.9169!2d-51.0726!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.9169,-51.0726,3a,75y,90t/data=!3m4!1e1!3m2!1sEQPt-o4JgQ6vkR91s6WLhg!2e0'
    },
    {//サン・パウロ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sew-sDHd-vSFR2CwiVfIZAw!2m2!1d-20.72922!2d-47.76734!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.72922,-47.76734,3a,75y,90t/data=!3m4!1e1!3m2!1sew-sDHd-vSFR2CwiVfIZAw!2e0'
    },
    {//雲南市, 島根県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swVdlZYpQDKHsXj4pYt-1gA!2m2!1d35.26201!2d132.89562!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.26201,132.89562,3a,75y,90t/data=!3m4!1e1!3m2!1swVdlZYpQDKHsXj4pYt-1gA!2e0'
    },
    {//グリーン・バレー, ニューサウスウェールズ (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shJrb-liDPWZR7I3I2YBozQ!2m2!1d-33.89726!2d150.86558!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.89726,150.86558,3a,75y,90t/data=!3m4!1e1!3m2!1shJrb-liDPWZR7I3I2YBozQ!2e0'
    },
    {//18 パストゥール通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPLCE-GSE4lXdUwXnTNVpLg!2m2!1d49.04576!2d2.29842!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.04576,2.29842,3a,75y,90t/data=!3m4!1e1!3m2!1sPLCE-GSE4lXdUwXnTNVpLg!2e0'
    },
    {//170 トゥーム・ロード (北アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ska4GFpJA5KdA-42t9NFIEw!2m2!1d54.84709!2d-6.29205!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.84709,-6.29205,3a,75y,90t/data=!3m4!1e1!3m2!1ska4GFpJA5KdA-42t9NFIEw!2e0'
    },
    {//45 パルティザントゥフ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssgo3dIwO2t9CgEoG4QpoNg!2m2!1d49.54931!2d20.62817!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.54931,20.62817,3a,75y,90t/data=!3m4!1e1!3m2!1ssgo3dIwO2t9CgEoG4QpoNg!2e0'
    },
    {//1679 パクトロス・ハイウェイ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgCVUJfhXvpq6MQfLZqkknQ!2m2!1d35.62857!2d-77.34692!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.62857,-77.34692,3a,75y,90t/data=!3m4!1e1!3m2!1sgCVUJfhXvpq6MQfLZqkknQ!2e0'
    },
    {//18th ロード (ナミビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm1C4lAk5eqr1uzzircPB8A!2m2!1d-22.95343!2d14.51941!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.95343,14.51941,3a,75y,90t/data=!3m4!1e1!3m2!1sm1C4lAk5eqr1uzzircPB8A!2e0'
    },
    {//Συμμαχική (ギリシャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw_46ql9hTeH2KusJdKPRbQ!2m2!1d40.7007!2d22.8665!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.7007,22.8665,3a,75y,90t/data=!3m4!1e1!3m2!1sw_46ql9hTeH2KusJdKPRbQ!2e0'
    },
    {//233 サン・ガブリエル (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqzjGMfv4HeZRH8-0YBREZQ!2m2!1d19.10125!2d-98.18064!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.10125,-98.18064,3a,75y,90t/data=!3m4!1e1!3m2!1sqzjGMfv4HeZRH8-0YBREZQ!2e0'
    },
    {//B85 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sA9fZITRNNXRWHgLF-Dtx8g!2m2!1d48.57638!2d13.43348!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.57638,13.43348,3a,75y,90t/data=!3m4!1e1!3m2!1sA9fZITRNNXRWHgLF-Dtx8g!2e0'
    },
    {//41 D930 (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9jvOnV1rKFHIIwc1w4a_gg!2m2!1d44.14247!2d0.33225!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.14247,0.33225,3a,75y,90t/data=!3m4!1e1!3m2!1s9jvOnV1rKFHIIwc1w4a_gg!2e0'
    },
    {//40 Seğmenler Cd. (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sryVMAp7o6bweBQtRpRne9A!2m2!1d39.79393!2d32.81456!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.79393,32.81456,3a,75y,90t/data=!3m4!1e1!3m2!1sryVMAp7o6bweBQtRpRne9A!2e0'
    },
    {//6637 ゴルフ・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAq03l7SNsslhael_l-mshw!2m2!1d32.8476!2d-96.79504!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.8476,-96.79504,3a,75y,90t/data=!3m4!1e1!3m2!1sAq03l7SNsslhael_l-mshw!2e0'
    },
    {//76 Vulytsya Tarasa Shevchenka (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWIVk-XFqvCkpo2D-3o7V_g!2m2!1d48.80567!2d24.535!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.80567,24.535,3a,75y,90t/data=!3m4!1e1!3m2!1sWIVk-XFqvCkpo2D-3o7V_g!2e0'
    },
    {//10 Tampines St 23 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sefTTl7T8qX-y5WPTmRd4tA!2m2!1d1.35388!2d103.9543!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.35388,103.9543,3a,75y,90t/data=!3m4!1e1!3m2!1sefTTl7T8qX-y5WPTmRd4tA!2e0'
    },
    {//ビリー, サントル (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_iQynQO8QphbklYpmRuuwg!2m2!1d47.30323!2d1.56112!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.30323,1.56112,3a,75y,90t/data=!3m4!1e1!3m2!1s_iQynQO8QphbklYpmRuuwg!2e0'
    },
    {//131 スプリングフィールド・アベニュー (タスマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8vvCck6QVtECuqHrVSpMCw!2m2!1d-42.85154!2d147.28091!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-42.85154,147.28091,3a,75y,90t/data=!3m4!1e1!3m2!1s8vvCck6QVtECuqHrVSpMCw!2e0'
    },
    {//334 サウスイースト 8th ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0MewBOkY6Ai-rAhEZMHNPw!2m2!1d44.99022!2d-93.24661!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.99022,-93.24661,3a,75y,90t/data=!3m4!1e1!3m2!1s0MewBOkY6Ai-rAhEZMHNPw!2e0'
    },
    {//201 イースト・メイン・ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV2ho6TyMgkYiYhUSQP0oPg!2m2!1d40.15647!2d-76.30194!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.15647,-76.30194,3a,75y,90t/data=!3m4!1e1!3m2!1sV2ho6TyMgkYiYhUSQP0oPg!2e0'
    },
    {//9 マウント・カーメル・クレセント (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-9FmMF47TiFpEOQWt-4gzw!2m2!1d53.20102!2d-8.57362!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.20102,-8.57362,3a,75y,90t/data=!3m4!1e1!3m2!1s-9FmMF47TiFpEOQWt-4gzw!2e0'
    },
    {//コッホパーラ, アッサム (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMhiX6_I7B99db_ICw1ETSw!2m2!1d26.08512!2d91.51391!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.08512,91.51391,3a,75y,90t/data=!3m4!1e1!3m2!1sMhiX6_I7B99db_ICw1ETSw!2e0'
    },
    {//12 ゴッドリック・プレイス (オーストラリア中北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw3zD8ESXwD9mCagwTXImDw!2m2!1d-20.40687!2d118.60131!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.40687,118.60131,3a,75y,90t/data=!3m4!1e1!3m2!1sw3zD8ESXwD9mCagwTXImDw!2e0'
    },
    {//フントゥネレ, アラド (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sY675_n-HefYsodcW-9a6Eg!2m2!1d46.11962!2d21.38789!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.11962,21.38789,3a,75y,90t/data=!3m4!1e1!3m2!1sY675_n-HefYsodcW-9a6Eg!2e0'
    },
    {//R493 (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPh6BCp8LL2Ihxt2L4PyiYg!2m2!1d52.90004!2d-8.20812!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.90004,-8.20812,3a,75y,90t/data=!3m4!1e1!3m2!1sPh6BCp8LL2Ihxt2L4PyiYg!2e0'
    },
    {//Al Areesh Rd (カタール)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s30S2zAfSskKpXG4DwpWU8Q!2m2!1d26.11544!2d51.18127!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.11544,51.18127,3a,75y,90t/data=!3m4!1e1!3m2!1s30S2zAfSskKpXG4DwpWU8Q!2e0'
    },
    {//112 レイルウェイ・トレイル (バミューダ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjTX6BLt9oqaMw58OJrnSTQ!2m2!1d32.33987!2d-64.73818!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.33987,-64.73818,3a,75y,90t/data=!3m4!1e1!3m2!1sjTX6BLt9oqaMw58OJrnSTQ!2e0'
    },
    {//1 Κωνσταντίνου Κριάρη (クレタ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6AUsfJlDDsIcaqaItisB4g!2m2!1d35.30944!2d25.04905!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.30944,25.04905,3a,75y,90t/data=!3m4!1e1!3m2!1s6AUsfJlDDsIcaqaItisB4g!2e0'
    },
    {//300 シングルタリー・レーン (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfFUyGNhWpP0arbVGARSeTQ!2m2!1d42.28427!2d-71.44877!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.28427,-71.44877,3a,75y,90t/data=!3m4!1e1!3m2!1sfFUyGNhWpP0arbVGARSeTQ!2e0'
    },
    {//カルナル, ハリヤナ州 (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBJdqNYWWW4lJv6w5ucD62w!2m2!1d29.69464!2d76.96901!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.69464,76.96901,3a,75y,90t/data=!3m4!1e1!3m2!1sBJdqNYWWW4lJv6w5ucD62w!2e0'
    },
    {//อท.3027 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEgAendLg0WmJ4UGr9mfDwA!2m2!1d14.65719!2d100.41771!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.65719,100.41771,3a,75y,90t/data=!3m4!1e1!3m2!1sEgAendLg0WmJ4UGr9mfDwA!2e0'
    },
    {//コーク (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slcye-O2wyBGfCqIuVuQAAQ!2m2!1d51.95256!2d-8.85666!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.95256,-8.85666,3a,75y,90t/data=!3m4!1e1!3m2!1slcye-O2wyBGfCqIuVuQAAQ!2e0'
    },
    {//826 Farm to Market Rd 1446 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCJks46RWjFr-RGRyFri6qw!2m2!1d32.38125!2d-96.85913!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.38125,-96.85913,3a,75y,90t/data=!3m4!1e1!3m2!1sCJks46RWjFr-RGRyFri6qw!2e0'
    },
    {//ヒューズ, オーストラリア首都特別地域 (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1Vibi-2K8rcs5opPnRbR0Q!2m2!1d-35.32682!2d149.08761!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-35.32682,149.08761,3a,75y,90t/data=!3m4!1e1!3m2!1s1Vibi-2K8rcs5opPnRbR0Q!2e0'
    },
    {//ตำบล บัวใหญ่, ナコーンラーチャシーマ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx5fw7L-LXoDWxQ1Ecbim_w!2m2!1d15.58173!2d102.43279!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.58173,102.43279,3a,75y,90t/data=!3m4!1e1!3m2!1sx5fw7L-LXoDWxQ1Ecbim_w!2e0'
    },
    {//31 シェフフォード・ロード (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEBzz-sIlNhYKXlRTz73WcA!2m2!1d52.49413!2d-1.88968!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.49413,-1.88968,3a,75y,90t/data=!3m4!1e1!3m2!1sEBzz-sIlNhYKXlRTz73WcA!2e0'
    },
    {//14 Via Francesco Baracca (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2aOJeVpOMJdNpe-iJPsrdA!2m2!1d42.42664!2d12.10711!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.42664,12.10711,3a,75y,90t/data=!3m4!1e1!3m2!1s2aOJeVpOMJdNpe-iJPsrdA!2e0'
    },
    {//下妻市, 茨城県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slhJNMs9I4Z7WmoHdxLIUrQ!2m2!1d36.17811!2d139.97889!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.17811,139.97889,3a,75y,90t/data=!3m4!1e1!3m2!1slhJNMs9I4Z7WmoHdxLIUrQ!2e0'
    },
    {//223 ビジネス・パルク・スタイン (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGnJw_QkRlGWmtsroUbkSzA!2m2!1d50.95397!2d5.77877!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.95397,5.77877,3a,75y,90t/data=!3m4!1e1!3m2!1sGnJw_QkRlGWmtsroUbkSzA!2e0'
    },
    {//ダカール (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1selmVivu1VgN3_5eVTWnsNw!2m2!1d14.78717!2d-17.27919!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.78717,-17.27919,3a,75y,90t/data=!3m4!1e1!3m2!1selmVivu1VgN3_5eVTWnsNw!2e0'
    },
    {//ნინოწმინდის ქუჩა (ジョージア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXqGh6n6MruA1DNEozlpDXw!2m2!1d42.10447!2d43.05044!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.10447,43.05044,3a,75y,90t/data=!3m4!1e1!3m2!1sXqGh6n6MruA1DNEozlpDXw!2e0'
    },
    {//Nizwa - Ibri Road (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sktu_RZEiBjiG60zx6O0AYw!2m2!1d22.97003!2d57.30153!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.97003,57.30153,3a,75y,90t/data=!3m4!1e1!3m2!1sktu_RZEiBjiG60zx6O0AYw!2e0'
    },
    {//149 マリアノ・エスコベド (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sROKirKR0tD666o23jjD79Q!2m2!1d32.55849!2d-116.63449!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.55849,-116.63449,3a,75y,90t/data=!3m4!1e1!3m2!1sROKirKR0tD666o23jjD79Q!2e0'
    },
    {//249 プリンシパル・バレイラ・ダ・マリャダ通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMpJmZNECco6dwQMK9oL82g!2m2!1d40.4695!2d-8.59541!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.4695,-8.59541,3a,75y,90t/data=!3m4!1e1!3m2!1sMpJmZNECco6dwQMK9oL82g!2e0'
    },
    {//103 Светосавска (ボスニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2gaA1nXtlAmwtzQSiqsq-g!2m2!1d43.96838!2d19.55883!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.96838,19.55883,3a,75y,90t/data=!3m4!1e1!3m2!1s2gaA1nXtlAmwtzQSiqsq-g!2e0'
    },
    {//シャフチンスク, カラガンダ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swRVlDUbTDaHi91KAFGNHAQ!2m2!1d49.69824!2d72.58601!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.69824,72.58601,3a,75y,90t/data=!3m4!1e1!3m2!1swRVlDUbTDaHi91KAFGNHAQ!2e0'
    },
    {//981 キャロライナ・アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb6iWjsduEOWlE83Wxf7SPw!2m2!1d39.11468!2d-121.62642!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.11468,-121.62642,3a,75y,90t/data=!3m4!1e1!3m2!1sb6iWjsduEOWlE83Wxf7SPw!2e0'
    },
    {//シアンググ, ウエスト (ルワンダ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snJ5WxfVcFJa4E8XQqPpPEA!2m2!1d-2.48786!2d28.90219!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.48786,28.90219,3a,75y,90t/data=!3m4!1e1!3m2!1snJ5WxfVcFJa4E8XQqPpPEA!2e0'
    },
    {//3509 Av. Tôrres Homem (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3xkn0nZrqGFguiJ50KaRkA!2m2!1d-22.79192!2d-43.40031!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.79192,-43.40031,3a,75y,90t/data=!3m4!1e1!3m2!1s3xkn0nZrqGFguiJ50KaRkA!2e0'
    },
    {//Jl. Poros Malangke (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXp49Glj97U53jL9XoM8cYw!2m2!1d-2.56146!2d120.32469!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.56146,120.32469,3a,75y,90t/data=!3m4!1e1!3m2!1sXp49Glj97U53jL9XoM8cYw!2e0'
    },
    {//サックストン・レーン (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svO9IdtIIdCd9D22oSLFjPA!2m2!1d53.79621!2d-1.53033!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.79621,-1.53033,3a,75y,90t/data=!3m4!1e1!3m2!1svO9IdtIIdCd9D22oSLFjPA!2e0'
    },
    {//ルイス・センター, オハイオ州 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1ZgW6Lvqr9P7DY5YOa0hlQ!2m2!1d40.18484!2d-82.99905!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.18484,-82.99905,3a,75y,90t/data=!3m4!1e1!3m2!1s1ZgW6Lvqr9P7DY5YOa0hlQ!2e0'
    },
    {//26 Herman Hansgatan (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKsqGqVb3xmoVf-ChCJ18uw!2m2!1d55.50922!2d13.24529!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.50922,13.24529,3a,75y,90t/data=!3m4!1e1!3m2!1sKsqGqVb3xmoVf-ChCJ18uw!2e0'
    },
    {//ザ・キー (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sY6yhoZyHqNeDohAGSzEEIQ!2m2!1d52.35188!2d-7.7014!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.35188,-7.7014,3a,75y,90t/data=!3m4!1e1!3m2!1sY6yhoZyHqNeDohAGSzEEIQ!2e0'
    },
    {//カンパニア (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgtIie06oBhfD9pe9q0kClQ!2m2!1d41.20886!2d14.18268!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.20886,14.18268,3a,75y,90t/data=!3m4!1e1!3m2!1sgtIie06oBhfD9pe9q0kClQ!2e0'
    },
    {//901 ブランド・ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKBwFjVHGQnm6NtSeq_iJXA!2m2!1d30.55726!2d-97.41032!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.55726,-97.41032,3a,75y,90t/data=!3m4!1e1!3m2!1sKBwFjVHGQnm6NtSeq_iJXA!2e0'
    },
    {//樹林街二段125巷 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJhBA3ceOP3L6Jxys-QowUw!2m2!1d22.98555!2d120.20286!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.98555,120.20286,3a,75y,90t/data=!3m4!1e1!3m2!1sJhBA3ceOP3L6Jxys-QowUw!2e0'
    },
    {//18 キップリング通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLSZXv19HfLC9_yjZkw5KEw!2m2!1d51.87348!2d4.51753!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.87348,4.51753,3a,75y,90t/data=!3m4!1e1!3m2!1sLSZXv19HfLC9_yjZkw5KEw!2e0'
    },
    {//9 ベッセムーアー通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spQbbeDqc_bdR0Y9e7hQnyQ!2m2!1d53.22735!2d6.55086!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.22735,6.55086,3a,75y,90t/data=!3m4!1e1!3m2!1spQbbeDqc_bdR0Y9e7hQnyQ!2e0'
    },
    {//ハメス・グライ通り (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skalkasUEGb4oqpSMrIWYwg!2m2!1d9.10218!2d-79.37891!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.10218,-79.37891,3a,75y,90t/data=!3m4!1e1!3m2!1skalkasUEGb4oqpSMrIWYwg!2e0'
    },
    {//59 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swB47qnxVFQ0tq5RDgnuYuA!2m2!1d4.44847!2d101.37408!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.44847,101.37408,3a,75y,90t/data=!3m4!1e1!3m2!1swB47qnxVFQ0tq5RDgnuYuA!2e0'
    },
    {//メヒコ州 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEsr_iTfcj-5ml8j2N-6Dxw!2m2!1d19.3865!2d-99.52318!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.3865,-99.52318,3a,75y,90t/data=!3m4!1e1!3m2!1sEsr_iTfcj-5ml8j2N-6Dxw!2e0'
    },
    {//9 ノース 16th ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slqjpD_jd4o7wA7FB8oGeMw!2m2!1d45.78853!2d-108.49059!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.78853,-108.49059,3a,75y,90t/data=!3m4!1e1!3m2!1slqjpD_jd4o7wA7FB8oGeMw!2e0'
    },
    {//ゴピナスプール, ジャールカンド (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB-ShEQGtsf8v1vm8gYqXvw!2m2!1d23.75328!2d86.75189!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.75328,86.75189,3a,75y,90t/data=!3m4!1e1!3m2!1sB-ShEQGtsf8v1vm8gYqXvw!2e0'
    },
    {//ヴァンドゥーヴル＝レ＝ナンシー, グラン・テスト地域圏 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdRJwECYCVFfjXNUx21tLDw!2m2!1d48.66255!2d6.17693!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.66255,6.17693,3a,75y,90t/data=!3m4!1e1!3m2!1sdRJwECYCVFfjXNUx21tLDw!2e0'
    },
    {//92 ゲールデゲムヴァールト (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTbKmKYclOU1kZMa56xx4GA!2m2!1d51.01432!2d4.48268!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.01432,4.48268,3a,75y,90t/data=!3m4!1e1!3m2!1sTbKmKYclOU1kZMa56xx4GA!2e0'
    },
    {//3 ヘブスウェイト・ロード (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sT1WaALzLo67cCROwHdDohw!2m2!1d51.37015!2d0.07937!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.37015,0.07937,3a,75y,90t/data=!3m4!1e1!3m2!1sT1WaALzLo67cCROwHdDohw!2e0'
    },
    {//3 メーデムブリッケルスライス通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svvGj9KGOSljfABlvSyJhvw!2m2!1d52.77595!2d5.08742!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.77595,5.08742,3a,75y,90t/data=!3m4!1e1!3m2!1svvGj9KGOSljfABlvSyJhvw!2e0'
    },
    {//ビア・サン・ベニート (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sICxddtdi-ta60w8RTk1rBg!2m2!1d4.08188!2d-76.18434!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.08188,-76.18434,3a,75y,90t/data=!3m4!1e1!3m2!1sICxddtdi-ta60w8RTk1rBg!2e0'
    },
    {//オーランド, フロリダ州 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_nSRngPfMdVHvMU9Cbc6Bg!2m2!1d28.42239!2d-81.44228!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.42239,-81.44228,3a,75y,90t/data=!3m4!1e1!3m2!1s_nSRngPfMdVHvMU9Cbc6Bg!2e0'
    },
    {//10 Hercegovačka ul. (スロベニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0hWU9mKXO8xfdPK1PYaN4w!2m2!1d45.71468!2d16.38882!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.71468,16.38882,3a,75y,90t/data=!3m4!1e1!3m2!1s0hWU9mKXO8xfdPK1PYaN4w!2e0'
    },
    {//2 シフィエンテゴ・セバスティアナ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYPzmqpQQHaTT1MTwlIN-xQ!2m2!1d49.97981!2d20.06348!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.97981,20.06348,3a,75y,90t/data=!3m4!1e1!3m2!1sYPzmqpQQHaTT1MTwlIN-xQ!2e0'
    },
    {//カトリー・パイパー・ケラ, ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slL2mIb8QmIL6aEJS-ASVgQ!2m2!1d26.4489!2d80.41496!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.4489,80.41496,3a,75y,90t/data=!3m4!1e1!3m2!1slL2mIb8QmIL6aEJS-ASVgQ!2e0'
    },
    {//D31 (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYPcyUbVibwugm6wjxqlcNw!2m2!1d44.62854!2d2.09702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.62854,2.09702,3a,75y,90t/data=!3m4!1e1!3m2!1sYPcyUbVibwugm6wjxqlcNw!2e0'
    },
    {//44 Abdal Halil Ağa Cd. (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_iPzP5Dhcw0p3IOGI5I5GQ!2m2!1d37.58375!2d36.94038!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.58375,36.94038,3a,75y,90t/data=!3m4!1e1!3m2!1s_iPzP5Dhcw0p3IOGI5I5GQ!2e0'
    },
    {//ヘンドレーナ, ムプマランガ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB6rg22epLOwxAZ_EANHkqw!2m2!1d-26.15239!2d29.7135!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.15239,29.7135,3a,75y,90t/data=!3m4!1e1!3m2!1sB6rg22epLOwxAZ_EANHkqw!2e0'
    },
    {//D28 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sa1oDcVMEYlf7X6dFgMWWDQ!2m2!1d48.92885!2d7.89646!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.92885,7.89646,3a,75y,90t/data=!3m4!1e1!3m2!1sa1oDcVMEYlf7X6dFgMWWDQ!2e0'
    },
    {//202 ロバータ・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0av8JZdgeKbJo7y4apXl4g!2m2!1d34.88691!2d-82.32477!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.88691,-82.32477,3a,75y,90t/data=!3m4!1e1!3m2!1s0av8JZdgeKbJo7y4apXl4g!2e0'
    },
    {//1 セバスチアン・ケイロース通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si3kAItdRXSF5nqKaLVWdEg!2m2!1d-7.01494!2d-37.27596!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.01494,-37.27596,3a,75y,90t/data=!3m4!1e1!3m2!1si3kAItdRXSF5nqKaLVWdEg!2e0'
    },
    {//1 ルヴィエール通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sot1XBCOWRa8Kp2CMzOkQvA!2m2!1d48.6904!2d2.51611!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.6904,2.51611,3a,75y,90t/data=!3m4!1e1!3m2!1sot1XBCOWRa8Kp2CMzOkQvA!2e0'
    },
    {//リブンガン, ソクサージェン地方 (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srnxQvKVPJToEFCCw1-Ytww!2m2!1d7.23787!2d124.50972!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.23787,124.50972,3a,75y,90t/data=!3m4!1e1!3m2!1srnxQvKVPJToEFCCw1-Ytww!2e0'
    },
    {//12 Kivirannantie (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV5pZwzCGIqKo0qPG6f0sNw!2m2!1d63.54727!2d27.20954!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.54727,27.20954,3a,75y,90t/data=!3m4!1e1!3m2!1sV5pZwzCGIqKo0qPG6f0sNw!2e0'
    },
    {//9 シャルル・デュ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0XFKV3pCyehC2A3x3Len8w!2m2!1d50.41173!2d3.85182!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.41173,3.85182,3a,75y,90t/data=!3m4!1e1!3m2!1s0XFKV3pCyehC2A3x3Len8w!2e0'
    },
    {//423 ジョゼフ・ゲイ・リュサック通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siXzowP2ZOdD1T4J3STDlxA!2m2!1d45.05513!2d5.08056!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.05513,5.08056,3a,75y,90t/data=!3m4!1e1!3m2!1siXzowP2ZOdD1T4J3STDlxA!2e0'
    },
    {//入善町, 富山県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTf05caiPmJ9h6UZcLV6iZg!2m2!1d36.92528!2d137.52078!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.92528,137.52078,3a,75y,90t/data=!3m4!1e1!3m2!1sTf05caiPmJ9h6UZcLV6iZg!2e0'
    },
    {//6 Jl. Lingk. Cigiceh (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDuGOGdbR_nHyg2PLUgd1Iw!2m2!1d-6.00436!2d106.06599!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.00436,106.06599,3a,75y,90t/data=!3m4!1e1!3m2!1sDuGOGdbR_nHyg2PLUgd1Iw!2e0'
    },
    {//ドミトロフ, モスクワ州 (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1TVSR311e-GYHUMBW-fnNw!2m2!1d56.33599!2d37.53952!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.33599,37.53952,3a,75y,90t/data=!3m4!1e1!3m2!1s1TVSR311e-GYHUMBW-fnNw!2e0'
    },
    {//リーワ州, 北バーティナ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soxgaSpqQ1iIN-rAysMZXVQ!2m2!1d24.52667!2d56.56198!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.52667,56.56198,3a,75y,90t/data=!3m4!1e1!3m2!1soxgaSpqQ1iIN-rAysMZXVQ!2e0'
    },
    {//49 グアダンニ通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFijyr4sc0zoJbXj2j5sXYg!2m2!1d44.01337!2d10.17382!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.01337,10.17382,3a,75y,90t/data=!3m4!1e1!3m2!1sFijyr4sc0zoJbXj2j5sXYg!2e0'
    },
    {//ジャラン・カンパング・シムナル (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZLuUaV84H7J6eXu6Sp3WRw!2m2!1d4.47342!2d118.61717!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.47342,118.61717,3a,75y,90t/data=!3m4!1e1!3m2!1sZLuUaV84H7J6eXu6Sp3WRw!2e0'
    },
    {//688 メアリー・ストリート (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sst1uU4lOxjL-rM3x45oAIA!2m2!1d47.49877!2d-117.56985!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.49877,-117.56985,3a,75y,90t/data=!3m4!1e1!3m2!1sst1uU4lOxjL-rM3x45oAIA!2e0'
    },
    {//62 ヴィアダゴラ通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqjlheGS7swup4e8LY7G4cQ!2m2!1d44.55436!2d11.42886!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.55436,11.42886,3a,75y,90t/data=!3m4!1e1!3m2!1sqjlheGS7swup4e8LY7G4cQ!2e0'
    },
    {//Fv669 (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sT8aRq7IzF_uErGZthxLf5Q!2m2!1d63.3834!2d8.17806!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.3834,8.17806,3a,75y,90t/data=!3m4!1e1!3m2!1sT8aRq7IzF_uErGZthxLf5Q!2e0'
    },
    {//29 スパ・ロード (北アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sraf9elwoVNHH09eQxw1aUA!2m2!1d54.38647!2d-5.89065!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.38647,-5.89065,3a,75y,90t/data=!3m4!1e1!3m2!1sraf9elwoVNHH09eQxw1aUA!2e0'
    },
    {//Jamadoba, ジャールカンド (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxBDSoSei_vDlPLwGidzGag!2m2!1d23.70003!2d86.41233!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.70003,86.41233,3a,75y,90t/data=!3m4!1e1!3m2!1sxBDSoSei_vDlPLwGidzGag!2e0'
    },
    {//24470 ローズウッド・ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbRqe2hhSBdjuFN5u35duMg!2m2!1d42.47196!2d-83.1627!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.47196,-83.1627,3a,75y,90t/data=!3m4!1e1!3m2!1sbRqe2hhSBdjuFN5u35duMg!2e0'
    },
    {//101 マエストロス通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-rLzcYo_sk33IRIG3IpCRg!2m2!1d20.54428!2d-103.27427!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.54428,-103.27427,3a,75y,90t/data=!3m4!1e1!3m2!1s-rLzcYo_sk33IRIG3IpCRg!2e0'
    },
    {//208 マヌエル・アクーニャ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEHwAzMM6tD-52ve6COTxTA!2m2!1d28.215!2d-100.72419!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.215,-100.72419,3a,75y,90t/data=!3m4!1e1!3m2!1sEHwAzMM6tD-52ve6COTxTA!2e0'
    },
    {//シアヌークビル, プレアシアヌク特別市 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUvYi5WaMH6SStQRH7pQT_A!2m2!1d10.61679!2d103.53897!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.61679,103.53897,3a,75y,90t/data=!3m4!1e1!3m2!1sUvYi5WaMH6SStQRH7pQT_A!2e0'
    },
    {//フランシスコ J. ミナ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1OpBklpDWL87yCm3Ufnn9Q!2m2!1d23.6644!2d-100.1863!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.6644,-100.1863,3a,75y,90t/data=!3m4!1e1!3m2!1s1OpBklpDWL87yCm3Ufnn9Q!2e0'
    },
    {//5 トヴァールニー (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sA4qqxRJGteuW3QfUYDDOaw!2m2!1d49.32534!2d17.57082!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.32534,17.57082,3a,75y,90t/data=!3m4!1e1!3m2!1sA4qqxRJGteuW3QfUYDDOaw!2e0'
    },
    {//43 レンシュタル通り (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVvj2pjL7aH8PY6nZvVcreQ!2m2!1d46.65315!2d11.15208!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.65315,11.15208,3a,75y,90t/data=!3m4!1e1!3m2!1sVvj2pjL7aH8PY6nZvVcreQ!2e0'
    },
    {//63 Jl. Cut Nyak Dien (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWlfoLRDzF25SLD6t-lTwbQ!2m2!1d-5.41683!2d105.24697!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-5.41683,105.24697,3a,75y,90t/data=!3m4!1e1!3m2!1sWlfoLRDzF25SLD6t-lTwbQ!2e0'
    },
    {//1 R. Eurico Salles (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s767dqgOgxAC_T7gaud8aEw!2m2!1d-19.0155!2d-40.53938!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.0155,-40.53938,3a,75y,90t/data=!3m4!1e1!3m2!1s767dqgOgxAC_T7gaud8aEw!2e0'
    },
    {//66 ウーリツァ・スパッスカヤ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx-y4BoEmfN23v9qjtxddrw!2m2!1d43.35532!2d76.95018!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.35532,76.95018,3a,75y,90t/data=!3m4!1e1!3m2!1sx-y4BoEmfN23v9qjtxddrw!2e0'
    },
    {//45 マッテオ・レナート・インブリアーニ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suv8TACdAHKeKnfWyAhNtAg!2m2!1d40.35445!2d18.18335!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.35445,18.18335,3a,75y,90t/data=!3m4!1e1!3m2!1suv8TACdAHKeKnfWyAhNtAg!2e0'
    },
    {//28 Riņķu iela (ラトビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9Lx6tGao7kzFDTGmon-abA!2m2!1d56.53305!2d21.01903!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.53305,21.01903,3a,75y,90t/data=!3m4!1e1!3m2!1s9Lx6tGao7kzFDTGmon-abA!2e0'
    },
    {//2 ゼーバッハ通り (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDCfSq-jrYnJNZVo9lC4VGA!2m2!1d46.81671!2d12.78717!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.81671,12.78717,3a,75y,90t/data=!3m4!1e1!3m2!1sDCfSq-jrYnJNZVo9lC4VGA!2e0'
    },
    {//38 セージソン・クローズ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sskRIdO0rLOe6vH5j7qdRVQ!2m2!1d51.00094!2d-0.11321!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.00094,-0.11321,3a,75y,90t/data=!3m4!1e1!3m2!1sskRIdO0rLOe6vH5j7qdRVQ!2e0'
    },
    {//ĐT2 (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_RpXktmGySsreqCVhC75lw!2m2!1d18.39125!2d105.77984!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.39125,105.77984,3a,75y,90t/data=!3m4!1e1!3m2!1s_RpXktmGySsreqCVhC75lw!2e0'
    },
    {//Google マップ (グリーンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8w5uo1S1l7VawdoN55vmTw!2m2!1d69.20155!2d-51.11263!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@69.20155,-51.11263,3a,75y,90t/data=!3m4!1e1!3m2!1s8w5uo1S1l7VawdoN55vmTw!2e0'
    },
    {//アメカ, ハリスコ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sY66CZOqYSmTh2PksdRWXBQ!2m2!1d20.52966!2d-104.04762!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.52966,-104.04762,3a,75y,90t/data=!3m4!1e1!3m2!1sY66CZOqYSmTh2PksdRWXBQ!2e0'
    },
    {//205 ミアラン通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMlsC4aME-h4w3UpwqEFvCQ!2m2!1d44.9467!2d4.87029!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.9467,4.87029,3a,75y,90t/data=!3m4!1e1!3m2!1sMlsC4aME-h4w3UpwqEFvCQ!2e0'
    },
    {//ナクル (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shRQuzBoAK0fyKW_ZwDIy5A!2m2!1d-0.99644!2d36.5969!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.99644,36.5969,3a,75y,90t/data=!3m4!1e1!3m2!1shRQuzBoAK0fyKW_ZwDIy5A!2e0'
    },
    {//998 5th アベニュー・ウェスト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sznjPEI_0reKOI3fXsn-CRQ!2m2!1d41.29082!2d-92.65527!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.29082,-92.65527,3a,75y,90t/data=!3m4!1e1!3m2!1sznjPEI_0reKOI3fXsn-CRQ!2e0'
    },
    {//2 Jorunbuen (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smDyAOzHKa1U_1O7WZdKuRQ!2m2!1d59.23072!2d10.9315!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.23072,10.9315,3a,75y,90t/data=!3m4!1e1!3m2!1smDyAOzHKa1U_1O7WZdKuRQ!2e0'
    },
    {//ルチェネツ, バンスカー・ビストリツァ (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSFwoBEJPL9byXmduvtt-3Q!2m2!1d48.32881!2d19.68109!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.32881,19.68109,3a,75y,90t/data=!3m4!1e1!3m2!1sSFwoBEJPL9byXmduvtt-3Q!2e0'
    },
    {//62 オーバードルフ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKzlql5IRC1YIVI4xFynIFg!2m2!1d48.63853!2d8.09961!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.63853,8.09961,3a,75y,90t/data=!3m4!1e1!3m2!1sKzlql5IRC1YIVI4xFynIFg!2e0'
    },
    {//22 Коменског (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssrKeDwgh098IsDTvH7fFkg!2m2!1d45.36641!2d19.5955!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.36641,19.5955,3a,75y,90t/data=!3m4!1e1!3m2!1ssrKeDwgh098IsDTvH7fFkg!2e0'
    },
    {//30 ドン・フランチェスコ・ガッリザイ通り (サルデーニャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sW24fhO10nbCxLSGiyrkc9A!2m2!1d40.30895!2d9.32774!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.30895,9.32774,3a,75y,90t/data=!3m4!1e1!3m2!1sW24fhO10nbCxLSGiyrkc9A!2e0'
    },
    {//1 モンテ・ポッリーノ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sia4iW8kuEa-Wa9vHLAp7eg!2m2!1d42.96219!2d12.69145!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.96219,12.69145,3a,75y,90t/data=!3m4!1e1!3m2!1sia4iW8kuEa-Wa9vHLAp7eg!2e0'
    },
    {//1732 1st ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syn4JnBbvRd-SuTgzEgJbGg!2m2!1d42.18413!2d-87.79829!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.18413,-87.79829,3a,75y,90t/data=!3m4!1e1!3m2!1syn4JnBbvRd-SuTgzEgJbGg!2e0'
    },
    {//33892 ベネディクト・アベニュー (アラスカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sseQ1h3Rg_pIkwU4WWk4grA!2m2!1d60.5485!2d-150.76408!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.5485,-150.76408,3a,75y,90t/data=!3m4!1e1!3m2!1sseQ1h3Rg_pIkwU4WWk4grA!2e0'
    },
    {//8 マウント・バーナード・ビュー (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sltlGakkUan0duAxP0Gh4-w!2m2!1d54.18268!2d-3.09439!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.18268,-3.09439,3a,75y,90t/data=!3m4!1e1!3m2!1sltlGakkUan0duAxP0Gh4-w!2e0'
    },
    {//パラスランプラ, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPNxS9RfcNoI41RDsGzUqoQ!2m2!1d27.3446!2d75.58508!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.3446,75.58508,3a,75y,90t/data=!3m4!1e1!3m2!1sPNxS9RfcNoI41RDsGzUqoQ!2e0'
    },
    {//パソ・エル・プランチョン (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8e0nCMDjGuaOFMQD3oLA7A!2m2!1d-34.87055!2d-71.16738!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.87055,-71.16738,3a,75y,90t/data=!3m4!1e1!3m2!1s8e0nCMDjGuaOFMQD3oLA7A!2e0'
    },
    {//92 ウィートフィールド (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spfAbrpSpjpNm4egXJCdrAQ!2m2!1d53.19065!2d-6.11372!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.19065,-6.11372,3a,75y,90t/data=!3m4!1e1!3m2!1spfAbrpSpjpNm4egXJCdrAQ!2e0'
    },
    {//1034 ケラー・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZyds-3ZjJKT67nTIm2kl_Q!2m2!1d36.36644!2d-94.31172!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.36644,-94.31172,3a,75y,90t/data=!3m4!1e1!3m2!1sZyds-3ZjJKT67nTIm2kl_Q!2e0'
    },
    {//215 マリア・カエターナ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMUVG-FleQTRqIipQUnQuNg!2m2!1d-22.52622!2d-43.72781!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.52622,-43.72781,3a,75y,90t/data=!3m4!1e1!3m2!1sMUVG-FleQTRqIipQUnQuNg!2e0'
    },
    {//399 R. José Pedro Nadin (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBF_s0OQTJ-XxDZuHWn7h5A!2m2!1d-22.47511!2d-48.99982!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.47511,-48.99982,3a,75y,90t/data=!3m4!1e1!3m2!1sBF_s0OQTJ-XxDZuHWn7h5A!2e0'
    },
    {//ゴメス・パラシオ, ドゥランゴ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTYOhZ8OO-I3ghTWvg-blqw!2m2!1d25.56208!2d-103.5128!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.56208,-103.5128,3a,75y,90t/data=!3m4!1e1!3m2!1sTYOhZ8OO-I3ghTWvg-blqw!2e0'
    },
    {//13 オレアンデル通り (キュラソー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM8KPxkDVzbn3LaHkI22Uvg!2m2!1d12.15937!2d-68.97102!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.15937,-68.97102,3a,75y,90t/data=!3m4!1e1!3m2!1sM8KPxkDVzbn3LaHkI22Uvg!2e0'
    },
    {//560 Jalan Bukit 22 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-sDOS9YRFzTE_FyomzsASw!2m2!1d4.89454!2d100.74751!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.89454,100.74751,3a,75y,90t/data=!3m4!1e1!3m2!1s-sDOS9YRFzTE_FyomzsASw!2e0'
    },
    {//700 ネイラー・コーナー・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKHEDlYz-wTjM9mqpF3oIww!2m2!1d42.54216!2d-75.1439!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.54216,-75.1439,3a,75y,90t/data=!3m4!1e1!3m2!1sKHEDlYz-wTjM9mqpF3oIww!2e0'
    },
    {//12450 ノース・アンウェイ・ロード (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjN4IQ21I9VIFIEmx5Zn59Q!2m2!1d32.43059!2d-111.32101!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.43059,-111.32101,3a,75y,90t/data=!3m4!1e1!3m2!1sjN4IQ21I9VIFIEmx5Zn59Q!2e0'
    },
    {//768 クルバー・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB4leeTqpCr0jWr2_f8s_6g!2m2!1d30.37239!2d-90.08128!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.37239,-90.08128,3a,75y,90t/data=!3m4!1e1!3m2!1sB4leeTqpCr0jWr2_f8s_6g!2e0'
    },
    {//24230 カジェ 73a (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1d8aO48Xxq0-aRyNd5dLNg!2m2!1d7.07689!2d-73.85094!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.07689,-73.85094,3a,75y,90t/data=!3m4!1e1!3m2!1s1d8aO48Xxq0-aRyNd5dLNg!2e0'
    },
    {//Trans-Canada Hwy (ブリティッシュコロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXtw1uf2rtjASqIAvk7gUdg!2m2!1d49.04226!2d-122.34482!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.04226,-122.34482,3a,75y,90t/data=!3m4!1e1!3m2!1sXtw1uf2rtjASqIAvk7gUdg!2e0'
    },
    {//65 (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1strrnNxK993JI9VmR3TE_PA!2m2!1d31.05494!2d35.48023!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.05494,35.48023,3a,75y,90t/data=!3m4!1e1!3m2!1strrnNxK993JI9VmR3TE_PA!2e0'
    },
    {//アトランティコ県 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s76fG_iuvvvlOKXiYyVfSLQ!2m2!1d10.49997!2d-75.12936!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.49997,-75.12936,3a,75y,90t/data=!3m4!1e1!3m2!1s76fG_iuvvvlOKXiYyVfSLQ!2e0'
    },
    {//ロックサス・シティ, 西ヴィサヤ (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNG7vKzkVMJnxxTxcNItaGA!2m2!1d11.52164!2d122.75071!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.52164,122.75071,3a,75y,90t/data=!3m4!1e1!3m2!1sNG7vKzkVMJnxxTxcNItaGA!2e0'
    },
    {//230 テイラー・ヒルズ・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVwfy3AegJ3yM9y-w9tNaTg!2m2!1d35.48117!2d-85.02725!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.48117,-85.02725,3a,75y,90t/data=!3m4!1e1!3m2!1sVwfy3AegJ3yM9y-w9tNaTg!2e0'
    },
    {//60 Bill Richardson Dr (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNcS1Fgr-Wiv2rewmNzGJLg!2m2!1d-46.40307!2d168.34046!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-46.40307,168.34046,3a,75y,90t/data=!3m4!1e1!3m2!1sNcS1Fgr-Wiv2rewmNzGJLg!2e0'
    },
    {//春日市, 福岡県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLvULaGywaJLFzp_nqvhzDA!2m2!1d33.52182!2d130.47257!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.52182,130.47257,3a,75y,90t/data=!3m4!1e1!3m2!1sLvULaGywaJLFzp_nqvhzDA!2e0'
    },
    {//324 サウス・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9W3cUusXU1g9vL1iFGJ0ag!2m2!1d34.11486!2d-84.0081!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.11486,-84.0081,3a,75y,90t/data=!3m4!1e1!3m2!1s9W3cUusXU1g9vL1iFGJ0ag!2e0'
    },
    {//Vĩnh Tường, フート (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sygkGGBLG3JoCqjz2KQ0VnA!2m2!1d21.22673!2d105.50748!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.22673,105.50748,3a,75y,90t/data=!3m4!1e1!3m2!1sygkGGBLG3JoCqjz2KQ0VnA!2e0'
    },
    {//バリサール (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXwQ0LtNHZKyVU-pEDZejeA!2m2!1d22.27367!2d90.27847!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.27367,90.27847,3a,75y,90t/data=!3m4!1e1!3m2!1sXwQ0LtNHZKyVU-pEDZejeA!2e0'
    },
    {//143 R. Duque de Caxias (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZ7_79YIi9zDbN8EIWjjftg!2m2!1d-10.43629!2d-45.16994!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.43629,-45.16994,3a,75y,90t/data=!3m4!1e1!3m2!1sZ7_79YIi9zDbN8EIWjjftg!2e0'
    },
    {//メイプルリッジ, ブリティッシュコロンビア州 (ブリティッシュコロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8q40oZr6kN8a1Fk8eYdvJA!2m2!1d49.22276!2d-122.57991!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.22276,-122.57991,3a,75y,90t/data=!3m4!1e1!3m2!1s8q40oZr6kN8a1Fk8eYdvJA!2e0'
    },
    {//13 ユニコーン・ストリート (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm27Ta3wy6wLaO_oI_V2QxQ!2m2!1d-34.78052!2d138.70737!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.78052,138.70737,3a,75y,90t/data=!3m4!1e1!3m2!1sm27Ta3wy6wLaO_oI_V2QxQ!2e0'
    },
    {//5月5日 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skKrLm0QHWU7K9MP5u3slMA!2m2!1d19.19388!2d-98.46974!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.19388,-98.46974,3a,75y,90t/data=!3m4!1e1!3m2!1skKrLm0QHWU7K9MP5u3slMA!2e0'
    },
    {//199 サン・ファン (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9gOjxkQuaqmuWYA1oWt7nQ!2m2!1d-31.66645!2d-64.43648!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.66645,-64.43648,3a,75y,90t/data=!3m4!1e1!3m2!1s9gOjxkQuaqmuWYA1oWt7nQ!2e0'
    },
    {//120 R. Dona Ada Centini (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swtzTDFSFtZLVibNWbMpQ8g!2m2!1d-16.31709!2d-48.95498!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.31709,-48.95498,3a,75y,90t/data=!3m4!1e1!3m2!1swtzTDFSFtZLVibNWbMpQ8g!2e0'
    },
    {//チュアート・ストリート (オーストラリア南西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seUX9CqHWqz8S-PtyJl6XVQ!2m2!1d-33.34047!2d115.63793!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.34047,115.63793,3a,75y,90t/data=!3m4!1e1!3m2!1seUX9CqHWqz8S-PtyJl6XVQ!2e0'
    },
    {//53 Gg. Saudara (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shsXvlSgtBLDIuxypJWiiWw!2m2!1d3.11134!2d98.50395!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.11134,98.50395,3a,75y,90t/data=!3m4!1e1!3m2!1shsXvlSgtBLDIuxypJWiiWw!2e0'
    },
    {//ゴルフォ・デ・カリフォルニア (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdHltJiMxqabtm1gAI2hkrA!2m2!1d26.01878!2d-111.35225!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.01878,-111.35225,3a,75y,90t/data=!3m4!1e1!3m2!1sdHltJiMxqabtm1gAI2hkrA!2e0'
    },
    {//15 パラナー通り (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHx178G8kMxjRS8a5PQ0sQA!2m2!1d-11.91858!2d-61.79454!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.91858,-61.79454,3a,75y,90t/data=!3m4!1e1!3m2!1sHx178G8kMxjRS8a5PQ0sQA!2e0'
    },
    {//2118 ヴィートル・メイレーレス通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smNBr7js1sXxj3ufuTssetA!2m2!1d-28.35557!2d-49.3085!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.35557,-49.3085,3a,75y,90t/data=!3m4!1e1!3m2!1smNBr7js1sXxj3ufuTssetA!2e0'
    },
    {//12 プレミア・アベニュー・ウェスト (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVoRlUOG52kvhjErzBi6Uvg!2m2!1d48.14181!2d-80.03061!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.14181,-80.03061,3a,75y,90t/data=!3m4!1e1!3m2!1sVoRlUOG52kvhjErzBi6Uvg!2e0'
    },
    {//キング・ナンゴロ・アミュテニア・ロード (ナミビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6WIUFr8xVRx6WDW5kk6Z4Q!2m2!1d-17.91347!2d15.98567!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.91347,15.98567,3a,75y,90t/data=!3m4!1e1!3m2!1s6WIUFr8xVRx6WDW5kk6Z4Q!2e0'
    },
    {//Google マップ (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEZdLApnVUFntPK4XMlGwqw!2m2!1d-37.96627!2d176.99594!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.96627,176.99594,3a,75y,90t/data=!3m4!1e1!3m2!1sEZdLApnVUFntPK4XMlGwqw!2e0'
    },
    {//1115 12th ストリート・ノースウェスト (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7ZpP1uTi9U3du7Q6tYB3vg!2m2!1d38.90469!2d-77.0276!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.90469,-77.0276,3a,75y,90t/data=!3m4!1e1!3m2!1s7ZpP1uTi9U3du7Q6tYB3vg!2e0'
    },
    {//169 7月18日 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8j3S9zfhUEIi2QM_ogo-pw!2m2!1d-33.52037!2d-56.88939!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.52037,-56.88939,3a,75y,90t/data=!3m4!1e1!3m2!1s8j3S9zfhUEIi2QM_ogo-pw!2e0'
    },
    {//11通り (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7IQNXIWBvRc9lYVAVgh1yQ!2m2!1d9.98384!2d-84.78147!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.98384,-84.78147,3a,75y,90t/data=!3m4!1e1!3m2!1s7IQNXIWBvRc9lYVAVgh1yQ!2e0'
    },
    {//634 ヴュー＝ムーラン通り (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEgoUPTgLjhXcVGWhrdfvZQ!2m2!1d45.31184!2d-73.34721!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.31184,-73.34721,3a,75y,90t/data=!3m4!1e1!3m2!1sEgoUPTgLjhXcVGWhrdfvZQ!2e0'
    },
    {//30 ウィリアムズバーング・コート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIo91JurEpd3fXfgNYdWT4g!2m2!1d40.41634!2d-74.43549!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.41634,-74.43549,3a,75y,90t/data=!3m4!1e1!3m2!1sIo91JurEpd3fXfgNYdWT4g!2e0'
    },
    {//3531 コットンテール・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svlOrp7EVG35qAUV5P1z8Vg!2m2!1d31.79942!2d-106.16278!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.79942,-106.16278,3a,75y,90t/data=!3m4!1e1!3m2!1svlOrp7EVG35qAUV5P1z8Vg!2e0'
    },
    {//辰野町道1572号線 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sduOe6m527e3ZA2OSHhWn8g!2m2!1d35.98304!2d137.98677!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.98304,137.98677,3a,75y,90t/data=!3m4!1e1!3m2!1sduOe6m527e3ZA2OSHhWn8g!2e0'
    },
    {//14010 KY-249 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9OSpBGoKRmikXzn0kf71Pw!2m2!1d36.79676!2d-85.91305!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.79676,-85.91305,3a,75y,90t/data=!3m4!1e1!3m2!1s9OSpBGoKRmikXzn0kf71Pw!2e0'
    },
    {//38 博愛街 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s39JyoJx9hHmfq2kpxy4WLQ!2m2!1d23.46573!2d120.23897!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.46573,120.23897,3a,75y,90t/data=!3m4!1e1!3m2!1s39JyoJx9hHmfq2kpxy4WLQ!2e0'
    },
    {//220 ノッティンガム・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scxKYGIWg85lhBueJSXNENA!2m2!1d39.65364!2d-77.73736!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.65364,-77.73736,3a,75y,90t/data=!3m4!1e1!3m2!1scxKYGIWg85lhBueJSXNENA!2e0'
    },
    {//ア・ラス・パルマス通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syROo8v7c25pBsZNx_DIBHA!2m2!1d25.26622!2d-100.01422!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.26622,-100.01422,3a,75y,90t/data=!3m4!1e1!3m2!1syROo8v7c25pBsZNx_DIBHA!2e0'
    },
    {//Ha Foso, べレア (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s07NxdpCTXHpQqGf7Hg4m5w!2m2!1d-29.29847!2d27.52386!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.29847,27.52386,3a,75y,90t/data=!3m4!1e1!3m2!1s07NxdpCTXHpQqGf7Hg4m5w!2e0'
    },
    {//パラモンガ, リマ (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2vKB-QjQVrzathWLARTPPQ!2m2!1d-10.67945!2d-77.82078!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.67945,-77.82078,3a,75y,90t/data=!3m4!1e1!3m2!1s2vKB-QjQVrzathWLARTPPQ!2e0'
    },
    {//252 ワシントン・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1Rd0fe1vUe-_poz2y4N19A!2m2!1d42.56034!2d-114.4803!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.56034,-114.4803,3a,75y,90t/data=!3m4!1e1!3m2!1s1Rd0fe1vUe-_poz2y4N19A!2e0'
    },
    {//3 T. セラーノ・ストリート (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sooGK7iCtkwGDs-F7XoMFZw!2m2!1d14.68048!2d120.98111!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.68048,120.98111,3a,75y,90t/data=!3m4!1e1!3m2!1sooGK7iCtkwGDs-F7XoMFZw!2e0'
    },
    {//29 A. バリーノ・ストリート (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgj4vU_0Qf1ySONOYfwwP9A!2m2!1d15.49116!2d120.9638!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.49116,120.9638,3a,75y,90t/data=!3m4!1e1!3m2!1sgj4vU_0Qf1ySONOYfwwP9A!2e0'
    },
    {//149 ポートヴュー・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfDrcm3HEatvEHC3jyFNzpQ!2m2!1d44.11028!2d-78.92778!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.11028,-78.92778,3a,75y,90t/data=!3m4!1e1!3m2!1sfDrcm3HEatvEHC3jyFNzpQ!2e0'
    },
    {//RP116 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHsZ-JyB8W021qh_0eeDP3A!2m2!1d-27.638!2d-62.42469!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.638,-62.42469,3a,75y,90t/data=!3m4!1e1!3m2!1sHsZ-JyB8W021qh_0eeDP3A!2e0'
    },
    {//26 エドゥアルド・ベント通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgR61rro0JvvTQOjg_4pEig!2m2!1d-3.28889!2d-39.26473!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.28889,-39.26473,3a,75y,90t/data=!3m4!1e1!3m2!1sgR61rro0JvvTQOjg_4pEig!2e0'
    },
    {//25 インテンデンテ・フェノグリオ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHeWl1rJhNH951M270zXfeg!2m2!1d-34.12696!2d-63.39023!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.12696,-63.39023,3a,75y,90t/data=!3m4!1e1!3m2!1sHeWl1rJhNH951M270zXfeg!2e0'
    },
    {//カレーラ 27 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stJstz1qHuU7UjdqRpNlV-g!2m2!1d5.70199!2d-72.94761!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.70199,-72.94761,3a,75y,90t/data=!3m4!1e1!3m2!1stJstz1qHuU7UjdqRpNlV-g!2e0'
    },
    {//バイーア州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSrjokz41ZbedGUdsrHEDtA!2m2!1d-10.4457!2d-40.19301!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.4457,-40.19301,3a,75y,90t/data=!3m4!1e1!3m2!1sSrjokz41ZbedGUdsrHEDtA!2e0'
    },
    {//名古屋市, 愛知県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDOGWZsG7Y2Wi6bGzyLlUmw!2m2!1d35.19777!2d137.01104!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.19777,137.01104,3a,75y,90t/data=!3m4!1e1!3m2!1sDOGWZsG7Y2Wi6bGzyLlUmw!2e0'
    },
    {//908 ノース 3rd アベニュー (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSfC4Yu5HhLIbyc2YQt-fZg!2m2!1d34.90843!2d-110.16221!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.90843,-110.16221,3a,75y,90t/data=!3m4!1e1!3m2!1sSfC4Yu5HhLIbyc2YQt-fZg!2e0'
    },
    {//アイリフ・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNyFNRe9bsiuUP8_9d-sgIQ!2m2!1d-30.38391!2d29.04336!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.38391,29.04336,3a,75y,90t/data=!3m4!1e1!3m2!1sNyFNRe9bsiuUP8_9d-sgIQ!2e0'
    },
    {//902 サウス 6th アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-o6bn4giL9TYIqUvLAcwTg!2m2!1d46.13809!2d-122.9092!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.13809,-122.9092,3a,75y,90t/data=!3m4!1e1!3m2!1s-o6bn4giL9TYIqUvLAcwTg!2e0'
    },
    {//1978 C ストリート (アラスカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sd6kxEsLpEyj8HLEbEjYXLg!2m2!1d61.20312!2d-149.88785!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.20312,-149.88785,3a,75y,90t/data=!3m4!1e1!3m2!1sd6kxEsLpEyj8HLEbEjYXLg!2e0'
    },
    {//447 サン・ロレンソ (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUxBRnK30RTgs61su39HtOA!2m2!1d-42.77454!2d-65.05073!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-42.77454,-65.05073,3a,75y,90t/data=!3m4!1e1!3m2!1sUxBRnK30RTgs61su39HtOA!2e0'
    },
    {//マレイバレイ・シティ, 北ミンダナオ (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slRQBWBWzRXg_OykEYsELjg!2m2!1d8.15229!2d125.11204!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.15229,125.11204,3a,75y,90t/data=!3m4!1e1!3m2!1slRQBWBWzRXg_OykEYsELjg!2e0'
    },
    {//Jl. Tondano Eris (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2B6713oQDwGL193eblnn1A!2m2!1d1.29173!2d124.92101!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.29173,124.92101,3a,75y,90t/data=!3m4!1e1!3m2!1s2B6713oQDwGL193eblnn1A!2e0'
    },
    {//マト・グロッソ・ド・スル州 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMNuicDonUAckM_bGUSLYGA!2m2!1d-23.80365!2d-54.27358!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.80365,-54.27358,3a,75y,90t/data=!3m4!1e1!3m2!1sMNuicDonUAckM_bGUSLYGA!2e0'
    },
    {//18691 US-322 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9Z6ksXpHnyMM1_31iVcgtw!2m2!1d41.19439!2d-79.29338!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.19439,-79.29338,3a,75y,90t/data=!3m4!1e1!3m2!1s9Z6ksXpHnyMM1_31iVcgtw!2e0'
    },
    {//44 アラタル・ストリート (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swrZDWvlmLEAmFnYJDX9cjQ!2m2!1d16.51215!2d121.18493!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.51215,121.18493,3a,75y,90t/data=!3m4!1e1!3m2!1swrZDWvlmLEAmFnYJDX9cjQ!2e0'
    },
    {//722 リオ・セナ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9I55ShQSXCiZMwYQR6w0Sw!2m2!1d26.48267!2d-100.17045!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.48267,-100.17045,3a,75y,90t/data=!3m4!1e1!3m2!1s9I55ShQSXCiZMwYQR6w0Sw!2e0'
    },
    {//368 Jl. Kolonel Slamet Supriyadi (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRWBEb3ex4qf7bXxdaK1kRg!2m2!1d-8.07932!2d112.59175!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.07932,112.59175,3a,75y,90t/data=!3m4!1e1!3m2!1sRWBEb3ex4qf7bXxdaK1kRg!2e0'
    },
    {//752 セロ・チャルテン通り (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sU6EoEjY0y1qABHaFHrKqrQ!2m2!1d-45.92612!2d-67.56219!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-45.92612,-67.56219,3a,75y,90t/data=!3m4!1e1!3m2!1sU6EoEjY0y1qABHaFHrKqrQ!2e0'
    },
    {//パラナ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWmaiKjjXA-kWy4hUiBEQMw!2m2!1d-25.13479!2d-54.18807!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.13479,-54.18807,3a,75y,90t/data=!3m4!1e1!3m2!1sWmaiKjjXA-kWy4hUiBEQMw!2e0'
    },
    {//TX-6 Spur (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sS2d3IxiRBEg6XZWAaI0a-Q!2m2!1d31.99228!2d-106.58881!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.99228,-106.58881,3a,75y,90t/data=!3m4!1e1!3m2!1sS2d3IxiRBEg6XZWAaI0a-Q!2e0'
    },
    {//207 アロヨ・コロラド通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5iRYahCYVmpnc3SLUg3aXg!2m2!1d21.29188!2d-100.50832!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.29188,-100.50832,3a,75y,90t/data=!3m4!1e1!3m2!1s5iRYahCYVmpnc3SLUg3aXg!2e0'
    },
    {//274 ถนน ฉิมพลี (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfpuN-ONjBZ1Qfqwvt-Wvow!2m2!1d13.78607!2d100.44046!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.78607,100.44046,3a,75y,90t/data=!3m4!1e1!3m2!1sfpuN-ONjBZ1Qfqwvt-Wvow!2e0'
    },
    {//ナーマッカル, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suF66m4a7zNF0skxqKYHNvg!2m2!1d11.18444!2d78.15159!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.18444,78.15159,3a,75y,90t/data=!3m4!1e1!3m2!1suF66m4a7zNF0skxqKYHNvg!2e0'
    },
    {//420 ジョージ・アベニュー (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5sv0MW-00xp4FMpRYncwZQ!2m2!1d49.18253!2d-97.92199!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.18253,-97.92199,3a,75y,90t/data=!3m4!1e1!3m2!1s5sv0MW-00xp4FMpRYncwZQ!2e0'
    },
    {//745 クラリンド・デ・ケイロース通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfK5GRMansTMlNxO-OrWknw!2m2!1d-3.73267!2d-38.53097!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.73267,-38.53097,3a,75y,90t/data=!3m4!1e1!3m2!1sfK5GRMansTMlNxO-OrWknw!2e0'
    },
    {//グアヤニリャ (プエルトリコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su4Vbboi-LyV3jUtqUxyVHA!2m2!1d18.03239!2d-66.79591!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.03239,-66.79591,3a,75y,90t/data=!3m4!1e1!3m2!1su4Vbboi-LyV3jUtqUxyVHA!2e0'
    },
    {//エブデン・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soYUnAxOmBiPstMW_d65uvA!2m2!1d-33.79169!2d20.11125!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.79169,20.11125,3a,75y,90t/data=!3m4!1e1!3m2!1soYUnAxOmBiPstMW_d65uvA!2e0'
    },
    {//817 サウス・オレンジ・アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRsfxuoiDsSWLm4ok3UH6mw!2m2!1d27.74116!2d-81.79355!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.74116,-81.79355,3a,75y,90t/data=!3m4!1e1!3m2!1sRsfxuoiDsSWLm4ok3UH6mw!2e0'
    },
    {//大津市, 滋賀県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shlMloVjazSToZFq2G9ZAhg!2m2!1d35.00981!2d135.8572!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.00981,135.8572,3a,75y,90t/data=!3m4!1e1!3m2!1shlMloVjazSToZFq2G9ZAhg!2e0'
    },
    {//55642 29 パームズ・ハイウェイ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgfpid586KBpoQOHOAmEWkw!2m2!1d34.11891!2d-116.45009!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.11891,-116.45009,3a,75y,90t/data=!3m4!1e1!3m2!1sgfpid586KBpoQOHOAmEWkw!2e0'
    },
    {//社和街 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUl4pmuTYhWMh_rljywFDIA!2m2!1d25.23905!2d121.48835!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.23905,121.48835,3a,75y,90t/data=!3m4!1e1!3m2!1sUl4pmuTYhWMh_rljywFDIA!2e0'
    },
    {//8830 シティ・パーク・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sazAy7zhZIeQFazJKQ5KNLw!2m2!1d34.96038!2d-89.84239!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.96038,-89.84239,3a,75y,90t/data=!3m4!1e1!3m2!1sazAy7zhZIeQFazJKQ5KNLw!2e0'
    },
    {//エンセナダ - ラサロ・カルデナス (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPLkzzxQ0Cr14DU0lcsAGeA!2m2!1d30.72736!2d-115.99029!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.72736,-115.99029,3a,75y,90t/data=!3m4!1e1!3m2!1sPLkzzxQ0Cr14DU0lcsAGeA!2e0'
    },
    {//421 ルイ・バルボザ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s77BH3-RlMnxlRtp31pNI3w!2m2!1d-22.87977!2d-42.0164!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.87977,-42.0164,3a,75y,90t/data=!3m4!1e1!3m2!1s77BH3-RlMnxlRtp31pNI3w!2e0'
    },
    {//エルモシージョ - サンタ・アンナ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbLULRI9c_OtToI5nM_jjXQ!2m2!1d30.52265!2d-111.10822!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.52265,-111.10822,3a,75y,90t/data=!3m4!1e1!3m2!1sbLULRI9c_OtToI5nM_jjXQ!2e0'
    },
    {//リオグランデ・ド・スル州 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqJ-5M30jmgZlAGGygzPxJQ!2m2!1d-27.45664!2d-53.16651!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.45664,-53.16651,3a,75y,90t/data=!3m4!1e1!3m2!1sqJ-5M30jmgZlAGGygzPxJQ!2e0'
    },
    {//1674 8th アベニュー・イースト (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLZVdsIdo7C9NR9PR_45PTA!2m2!1d48.18456!2d-114.29663!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.18456,-114.29663,3a,75y,90t/data=!3m4!1e1!3m2!1sLZVdsIdo7C9NR9PR_45PTA!2e0'
    },
    {//マディプ - マンジャナディー・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sia0apOWXYeKVxB7HQ6ULWg!2m2!1d12.78798!2d74.95984!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.78798,74.95984,3a,75y,90t/data=!3m4!1e1!3m2!1sia0apOWXYeKVxB7HQ6ULWg!2e0'
    },
    {//蟹江町, 愛知県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s14vK1Ubo45dQtL0pbMH2-g!2m2!1d35.14889!2d136.79181!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.14889,136.79181,3a,75y,90t/data=!3m4!1e1!3m2!1s14vK1Ubo45dQtL0pbMH2-g!2e0'
    },
    {//ビラシス, イロコス (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWhnfDyRvPsSqyUkJrwXmxQ!2m2!1d15.91135!2d120.61508!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.91135,120.61508,3a,75y,90t/data=!3m4!1e1!3m2!1sWhnfDyRvPsSqyUkJrwXmxQ!2e0'
    },
    {//8124 Holly Rd (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPRPSEuZrgCU4hOjygIQzrg!2m2!1d42.91294!2d-83.62238!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.91294,-83.62238,3a,75y,90t/data=!3m4!1e1!3m2!1sPRPSEuZrgCU4hOjygIQzrg!2e0'
    },
    {//960 ジョアン・ドス・サントス・レアウ通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL8uGx6uxf5zRcviOgRtO5w!2m2!1d-25.87871!2d-50.39877!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.87871,-50.39877,3a,75y,90t/data=!3m4!1e1!3m2!1sL8uGx6uxf5zRcviOgRtO5w!2e0'
    },
    {//メントク, バンカ・ビリトゥン (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s60gB-siGLO9qMdLPRJv7gQ!2m2!1d-2.06733!2d105.16171!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.06733,105.16171,3a,75y,90t/data=!3m4!1e1!3m2!1s60gB-siGLO9qMdLPRJv7gQ!2e0'
    },
    {//472 ドウトール・セヴェリノ・コルデイロ通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDqZ9diMcOoP67iKhDZVW4Q!2m2!1d-6.89091!2d-38.5489!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.89091,-38.5489,3a,75y,90t/data=!3m4!1e1!3m2!1sDqZ9diMcOoP67iKhDZVW4Q!2e0'
    },
    {//Jalan Aslam (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLtRsGAK9HK5aKdjEqCSKmQ!2m2!1d5.91211!2d118.056!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.91211,118.056,3a,75y,90t/data=!3m4!1e1!3m2!1sLtRsGAK9HK5aKdjEqCSKmQ!2e0'
    },
    {//カーレ X サー (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYhyJoaQuPHlI3IC9CSLRgw!2m2!1d8.40924!2d-82.44938!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.40924,-82.44938,3a,75y,90t/data=!3m4!1e1!3m2!1sYhyJoaQuPHlI3IC9CSLRgw!2e0'
    },
    {//503 Pine Ave (アラスカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sT_2WzdkOF1gzZlAkFdorVg!2m2!1d60.56762!2d-151.27359!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.56762,-151.27359,3a,75y,90t/data=!3m4!1e1!3m2!1sT_2WzdkOF1gzZlAkFdorVg!2e0'
    },
    {//横手市, 秋田県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4oDsn0wVz60321TAb5nVdQ!2m2!1d39.29941!2d140.56382!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.29941,140.56382,3a,75y,90t/data=!3m4!1e1!3m2!1s4oDsn0wVz60321TAb5nVdQ!2e0'
    },
    {//26 Gg. Kutilang (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgQrznkC4GjLd93rt0j5VpA!2m2!1d-6.75613!2d111.03788!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.75613,111.03788,3a,75y,90t/data=!3m4!1e1!3m2!1sgQrznkC4GjLd93rt0j5VpA!2e0'
    },
    {//東南 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc2yPP3tpkaKWl3xWmw6BKQ!2m2!1d-24.67799!2d25.78162!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.67799,25.78162,3a,75y,90t/data=!3m4!1e1!3m2!1sc2yPP3tpkaKWl3xWmw6BKQ!2e0'
    },
    {//8606 コロニー・パイン・サークル・ウェスト (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8ZQCT6oLIWepEPwOR4hA1g!2m2!1d30.19575!2d-81.72628!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.19575,-81.72628,3a,75y,90t/data=!3m4!1e1!3m2!1s8ZQCT6oLIWepEPwOR4hA1g!2e0'
    },
    {//57 Jl. Cokroaminoto (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjHxmuBpQwH-aL1wj6R-oWQ!2m2!1d-7.7499!2d112.19927!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.7499,112.19927,3a,75y,90t/data=!3m4!1e1!3m2!1sjHxmuBpQwH-aL1wj6R-oWQ!2e0'
    },
    {//レーケリ, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHGkeXuH7Cvemd6O6WrgGrw!2m2!1d25.65538!2d76.1582!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.65538,76.1582,3a,75y,90t/data=!3m4!1e1!3m2!1sHGkeXuH7Cvemd6O6WrgGrw!2e0'
    },
    {//ジャンビ (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYi1Dz6qgbvFo7IjIoAhCRA!2m2!1d-1.77523!2d103.29992!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.77523,103.29992,3a,75y,90t/data=!3m4!1e1!3m2!1sYi1Dz6qgbvFo7IjIoAhCRA!2e0'
    },
    {//GJ SH 63 (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj_rV_ONeZ-ov4sWjj4GNUg!2m2!1d22.44562!2d73.32408!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.44562,73.32408,3a,75y,90t/data=!3m4!1e1!3m2!1sj_rV_ONeZ-ov4sWjj4GNUg!2e0'
    },
    {//マウント・ガンビア, 南オーストラリア州 (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqo11ZqNw9XYKinIZuroKMw!2m2!1d-37.81972!2d140.78655!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.81972,140.78655,3a,75y,90t/data=!3m4!1e1!3m2!1sqo11ZqNw9XYKinIZuroKMw!2e0'
    },
    {//11 ワット・ストリート (ナミビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2FChh8EB5c6lR01-g3jGPA!2m2!1d-22.67016!2d14.53444!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.67016,14.53444,3a,75y,90t/data=!3m4!1e1!3m2!1s2FChh8EB5c6lR01-g3jGPA!2e0'
    },
    {//587 ヘネラル・マヌエル・バケダノ (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suti7Zs_2h3Ut31n8LW0W_g!2m2!1d-33.61767!2d-71.60718!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.61767,-71.60718,3a,75y,90t/data=!3m4!1e1!3m2!1suti7Zs_2h3Ut31n8LW0W_g!2e0'
    },
    {//ペチクラム, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5k6D0QB1vJoe_GtZC5vLJQ!2m2!1d9.98298!2d78.12985!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.98298,78.12985,3a,75y,90t/data=!3m4!1e1!3m2!1s5k6D0QB1vJoe_GtZC5vLJQ!2e0'
    },
    {//Google マップ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seNOFtDay5lMvDEbO5fo-ew!2m2!1d-22.9695!2d-43.2153!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.9695,-43.2153,3a,75y,90t/data=!3m4!1e1!3m2!1seNOFtDay5lMvDEbO5fo-ew!2e0'
    },
    {//45 プロジェターダ A通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sO_7bpRePi85vTwgLFVzM3Q!2m2!1d-18.90559!2d-54.83362!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.90559,-54.83362,3a,75y,90t/data=!3m4!1e1!3m2!1sO_7bpRePi85vTwgLFVzM3Q!2e0'
    },
    {//パーム・スプリングス・ロード (ナイジェリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGF-bLwrx12plexT1M0Fq6Q!2m2!1d6.44894!2d3.49287!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.44894,3.49287,3a,75y,90t/data=!3m4!1e1!3m2!1sGF-bLwrx12plexT1M0Fq6Q!2e0'
    },
    {//198 R. Satyro Molitor (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAXznm6nmFQprLvgA4l7lJA!2m2!1d-22.79495!2d-50.21794!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.79495,-50.21794,3a,75y,90t/data=!3m4!1e1!3m2!1sAXznm6nmFQprLvgA4l7lJA!2e0'
    },
    {//326 ซอย สุชาติพัฒนา 2/2 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7xJ-C1xzENcAf7xVQq0nXw!2m2!1d14.04066!2d100.16977!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.04066,100.16977,3a,75y,90t/data=!3m4!1e1!3m2!1s7xJ-C1xzENcAf7xVQq0nXw!2e0'
    },
    {//81 ヒメネス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stD01t9n0M9WU1QF_BlfgKw!2m2!1d-33.00582!2d-71.27127!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.00582,-71.27127,3a,75y,90t/data=!3m4!1e1!3m2!1stD01t9n0M9WU1QF_BlfgKw!2e0'
    },
    {//5917 モーガン・プレイス (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXdMVg8hfTnOlkaTzVcpGIQ!2m2!1d38.78179!2d-121.17269!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.78179,-121.17269,3a,75y,90t/data=!3m4!1e1!3m2!1sXdMVg8hfTnOlkaTzVcpGIQ!2e0'
    },
    {//アゲイト・ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sngfjFRXDcDJMrWzrgv8xUg!2m2!1d46.73379!2d-92.46217!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.73379,-92.46217,3a,75y,90t/data=!3m4!1e1!3m2!1sngfjFRXDcDJMrWzrgv8xUg!2e0'
    },
    {//325 イースト 100 ノース (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1yADzf1jv4OKHo-e5ZfHmg!2m2!1d39.60083!2d-110.80497!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.60083,-110.80497,3a,75y,90t/data=!3m4!1e1!3m2!1s1yADzf1jv4OKHo-e5ZfHmg!2e0'
    },
    {//サンタ・バーバラ, カリフォルニア州 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm57svbc4WApUWqN-qX8UHA!2m2!1d34.41861!2d-119.69733!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.41861,-119.69733,3a,75y,90t/data=!3m4!1e1!3m2!1sm57svbc4WApUWqN-qX8UHA!2e0'
    },
    {//サムドラップ・ジョンカー, Samdrup Jongkhar (ブータン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKcOGKfue9jwH5ofUJIu_6A!2m2!1d26.80418!2d91.50377!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.80418,91.50377,3a,75y,90t/data=!3m4!1e1!3m2!1sKcOGKfue9jwH5ofUJIu_6A!2e0'
    },
    {//320 ドクター・ロエデル通り (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDH7XE98TQ-yjL7fOLLD0dA!2m2!1d46.02816!2d-73.42406!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.02816,-73.42406,3a,75y,90t/data=!3m4!1e1!3m2!1sDH7XE98TQ-yjL7fOLLD0dA!2e0'
    },
    {//1035 PA-140 (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWvNxGgnAxecZij6CSDn9Fw!2m2!1d-1.30912!2d-48.16186!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.30912,-48.16186,3a,75y,90t/data=!3m4!1e1!3m2!1sWvNxGgnAxecZij6CSDn9Fw!2e0'
    },
    {//8251 エティワンダ・アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVYVzfgkpMkiNay-s8HCK6w!2m2!1d34.22026!2d-118.53193!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.22026,-118.53193,3a,75y,90t/data=!3m4!1e1!3m2!1sVYVzfgkpMkiNay-s8HCK6w!2e0'
    },
    {//7 ドーズビル・ロード (オーストラリア南西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLeRAWvHylnWcFLfvbcS-Yg!2m2!1d-32.63413!2d115.63935!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.63413,115.63935,3a,75y,90t/data=!3m4!1e1!3m2!1sLeRAWvHylnWcFLfvbcS-Yg!2e0'
    },
    {//5 トラウト・コート (オーストラリア南西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sS8xzkYeQ2UNeotOLuekFNg!2m2!1d-31.82006!2d115.75642!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.82006,115.75642,3a,75y,90t/data=!3m4!1e1!3m2!1sS8xzkYeQ2UNeotOLuekFNg!2e0'
    },
    {//120 マリーン・パレード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3hiI70HzTCvJ-VEZxOvOiQ!2m2!1d-28.16778!2d153.54281!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.16778,153.54281,3a,75y,90t/data=!3m4!1e1!3m2!1s3hiI70HzTCvJ-VEZxOvOiQ!2e0'
    },
    {//3 マヌエル・ロドリゲス (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s29tzdhCX7A70lhmL-VHMGQ!2m2!1d-38.52237!2d-72.43325!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.52237,-72.43325,3a,75y,90t/data=!3m4!1e1!3m2!1s29tzdhCX7A70lhmL-VHMGQ!2e0'
    },
    {//3 Jalan Orkid (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz-5XfGxjP8B0eEBHKzVzaA!2m2!1d4.48849!2d101.01063!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.48849,101.01063,3a,75y,90t/data=!3m4!1e1!3m2!1sz-5XfGxjP8B0eEBHKzVzaA!2e0'
    },
    {//1206 サウス 3rd アベニュー (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgWY2HwC888YNcwMF2_GryQ!2m2!1d33.42217!2d-112.35218!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.42217,-112.35218,3a,75y,90t/data=!3m4!1e1!3m2!1sgWY2HwC888YNcwMF2_GryQ!2e0'
    },
    {//5 Atlantis Pl (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soDYhS-Y1gpMAf0LWzoTqWg!2m2!1d-36.75746!2d174.73012!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-36.75746,174.73012,3a,75y,90t/data=!3m4!1e1!3m2!1soDYhS-Y1gpMAf0LWzoTqWg!2e0'
    },
    {//リガオ・シティ, ビコール (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smMzOUppsxC2ZJd2jMJ6h2A!2m2!1d13.20808!2d123.4844!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.20808,123.4844,3a,75y,90t/data=!3m4!1e1!3m2!1smMzOUppsxC2ZJd2jMJ6h2A!2e0'
    },
    {//Stilfontein, 北西州 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sehQ0dTl0hRtHxdcT3MJ9LA!2m2!1d-26.86445!2d26.77216!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.86445,26.77216,3a,75y,90t/data=!3m4!1e1!3m2!1sehQ0dTl0hRtHxdcT3MJ9LA!2e0'
    },
    {//ビア・シティオヌエボ＝レモリーノ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNww7xOSrz9TIaj3scTCLpg!2m2!1d10.70866!2d-74.71724!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.70866,-74.71724,3a,75y,90t/data=!3m4!1e1!3m2!1sNww7xOSrz9TIaj3scTCLpg!2e0'
    },
    {//4967 イースト 141st ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srfMm0lycKmFk-whJj7RxtQ!2m2!1d41.4258!2d-81.58394!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.4258,-81.58394,3a,75y,90t/data=!3m4!1e1!3m2!1srfMm0lycKmFk-whJj7RxtQ!2e0'
    },
    {//Batista Alberti (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTLxHCRnFsiazicF8VmRjTw!2m2!1d-1.26471!2d-78.60502!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.26471,-78.60502,3a,75y,90t/data=!3m4!1e1!3m2!1sTLxHCRnFsiazicF8VmRjTw!2e0'
    },
    {//709 エバンス・アベニュー (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scBI2ZIj1K14qZoAWkqas7w!2m2!1d41.12671!2d-104.80602!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.12671,-104.80602,3a,75y,90t/data=!3m4!1e1!3m2!1scBI2ZIj1K14qZoAWkqas7w!2e0'
    },
    {//カムヒュシュワ-A, ムプマランガ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7BG_9bIjD2_4zQKw4MFEAQ!2m2!1d-25.66478!2d31.67578!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.66478,31.67578,3a,75y,90t/data=!3m4!1e1!3m2!1s7BG_9bIjD2_4zQKw4MFEAQ!2e0'
    },
    {//465 ノース・ストリート (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su1yPC-FjVbfCUCqoOSAMcA!2m2!1d-36.06687!2d146.92331!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-36.06687,146.92331,3a,75y,90t/data=!3m4!1e1!3m2!1su1yPC-FjVbfCUCqoOSAMcA!2e0'
    },
    {//398 モンロー・ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgh9mz7BZrabd9yLjjTyyPw!2m2!1d43.6363!2d-88.72999!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.6363,-88.72999,3a,75y,90t/data=!3m4!1e1!3m2!1sgh9mz7BZrabd9yLjjTyyPw!2e0'
    },
    {//303 ガーシア・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1A0i1T4RlTody7x5pOuOPQ!2m2!1d35.52155!2d-108.74226!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.52155,-108.74226,3a,75y,90t/data=!3m4!1e1!3m2!1s1A0i1T4RlTody7x5pOuOPQ!2e0'
    },
    {//26 ミルロイ・ストリート (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svJZtSh9sALzC95FvD9EQDg!2m2!1d-36.74947!2d144.27162!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-36.74947,144.27162,3a,75y,90t/data=!3m4!1e1!3m2!1svJZtSh9sALzC95FvD9EQDg!2e0'
    },
    {//408 RO-135 (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXXAOIjgRflW0tg6FGi6K9Q!2m2!1d-10.88867!2d-61.95133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.88867,-61.95133,3a,75y,90t/data=!3m4!1e1!3m2!1sXXAOIjgRflW0tg6FGi6K9Q!2e0'
    },
    {//11695 クレーター・レイク・ハイウェイ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sh_rVxfpRF2EXFGzqFsRgxw!2m2!1d42.47881!2d-122.81247!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.47881,-122.81247,3a,75y,90t/data=!3m4!1e1!3m2!1sh_rVxfpRF2EXFGzqFsRgxw!2e0'
    },
    {//バルカレナ, パラー州 (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sghfvzy3zjSNnEw9-r15cbg!2m2!1d-1.51252!2d-48.61001!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.51252,-48.61001,3a,75y,90t/data=!3m4!1e1!3m2!1sghfvzy3zjSNnEw9-r15cbg!2e0'
    },
    {//Plumbon, 西ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1CY0043xI3g5sc_t2QRq8g!2m2!1d-6.70235!2d108.47342!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.70235,108.47342,3a,75y,90t/data=!3m4!1e1!3m2!1s1CY0043xI3g5sc_t2QRq8g!2e0'
    },
    {//Pungging, 東ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sH6sJ2zWjDKsYBCOazx8c0A!2m2!1d-7.51287!2d112.58619!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.51287,112.58619,3a,75y,90t/data=!3m4!1e1!3m2!1sH6sJ2zWjDKsYBCOazx8c0A!2e0'
    },
    {//1603 リーニャ・ボニータ道路 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAQwuuTMpnof6miilgm4Hdg!2m2!1d-29.63666!2d-54.17705!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.63666,-54.17705,3a,75y,90t/data=!3m4!1e1!3m2!1sAQwuuTMpnof6miilgm4Hdg!2e0'
    },
    {//1000 130th ストリート・ウェスト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1senh8dV28zCrhcRnYaee6Bg!2m2!1d44.39992!2d-93.28367!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.39992,-93.28367,3a,75y,90t/data=!3m4!1e1!3m2!1senh8dV28zCrhcRnYaee6Bg!2e0'
    },
    {//西ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq97FnUt09sms-KOK7VhUnw!2m2!1d-6.37999!2d106.97175!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.37999,106.97175,3a,75y,90t/data=!3m4!1e1!3m2!1sq97FnUt09sms-KOK7VhUnw!2e0'
    },
    {//876 2e ラン (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sar4CjoHNt7ooPe1VZFoEug!2m2!1d46.68982!2d-71.70733!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.68982,-71.70733,3a,75y,90t/data=!3m4!1e1!3m2!1sar4CjoHNt7ooPe1VZFoEug!2e0'
    },
    {//1680 エルナンド・デ・マガジャネス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_oy1uZHPrS4t5HhQUgu2OA!2m2!1d-34.40088!2d-72.0071!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.40088,-72.0071,3a,75y,90t/data=!3m4!1e1!3m2!1s_oy1uZHPrS4t5HhQUgu2OA!2e0'
    },
    {//107 County Rd 404 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTWkRT7HBsbmYyAIVV-7z8g!2m2!1d37.744!2d-99.99741!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.744,-99.99741,3a,75y,90t/data=!3m4!1e1!3m2!1sTWkRT7HBsbmYyAIVV-7z8g!2e0'
    },
    {//3897 アレキーパ通り (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOvb7WslhuiXzJTGNFp8ooA!2m2!1d-12.1042!2d-77.03146!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.1042,-77.03146,3a,75y,90t/data=!3m4!1e1!3m2!1sOvb7WslhuiXzJTGNFp8ooA!2e0'
    },
    {//Niz Damaka, アッサム (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl_VFR_ixnI2HE4jEehDv_Q!2m2!1d26.4899!2d90.92854!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.4899,90.92854,3a,75y,90t/data=!3m4!1e1!3m2!1sl_VFR_ixnI2HE4jEehDv_Q!2e0'
    },
    {//126 ウッドベリー・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sR98ilozMySwOwbvLy0I-uA!2m2!1d36.60291!2d-79.41122!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.60291,-79.41122,3a,75y,90t/data=!3m4!1e1!3m2!1sR98ilozMySwOwbvLy0I-uA!2e0'
    },
    {//595 ラ・コロニア (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz46EQF1TOnCkjDs19s9WQQ!2m2!1d-33.09715!2d-68.48345!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.09715,-68.48345,3a,75y,90t/data=!3m4!1e1!3m2!1sz46EQF1TOnCkjDs19s9WQQ!2e0'
    },
    {//สบ.5048 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXkwKazJmgRp0Bm8Jtsqgmw!2m2!1d14.58154!2d100.72679!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.58154,100.72679,3a,75y,90t/data=!3m4!1e1!3m2!1sXkwKazJmgRp0Bm8Jtsqgmw!2e0'
    },
    {//Waikato River (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shXz6G0nOMLQi7nxrTFVs6g!2m2!1d-37.89651!2d175.45401!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.89651,175.45401,3a,75y,90t/data=!3m4!1e1!3m2!1shXz6G0nOMLQi7nxrTFVs6g!2e0'
    },
    {//蓮田市, 埼玉県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4w9GLrEdoEi2Eq8_GXnplA!2m2!1d36.02467!2d139.64155!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.02467,139.64155,3a,75y,90t/data=!3m4!1e1!3m2!1s4w9GLrEdoEi2Eq8_GXnplA!2e0'
    },
    {//ラヨン＝プエブロ・ヌエボ・ソリスタウアカン (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seB80_XiRWHV4QIYrLTpdHQ!2m2!1d17.19904!2d-92.9283!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.19904,-92.9283,3a,75y,90t/data=!3m4!1e1!3m2!1seB80_XiRWHV4QIYrLTpdHQ!2e0'
    },
    {//39 スチュワート・スミス・ドライブ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sphXXzOF6V15iRoJfJM0iBg!2m2!1d43.69812!2d-79.49972!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.69812,-79.49972,3a,75y,90t/data=!3m4!1e1!3m2!1sphXXzOF6V15iRoJfJM0iBg!2e0'
    },
    {//ルタ・アル・セロ・デ・クリスト (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdSV9k4qjJyIHVTbIdGOAMA!2m2!1d-3.68197!2d-79.68858!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.68197,-79.68858,3a,75y,90t/data=!3m4!1e1!3m2!1sdSV9k4qjJyIHVTbIdGOAMA!2e0'
    },
    {//ピオ・ハラミージョ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNSxgTlmDnxmb-JnBOBPsZQ!2m2!1d0.07597!2d-76.90591!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.07597,-76.90591,3a,75y,90t/data=!3m4!1e1!3m2!1sNSxgTlmDnxmb-JnBOBPsZQ!2e0'
    },
    {//17th アベニュー (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZsP3kqnoZijUu1MA1yHvyA!2m2!1d50.43917!2d-104.59055!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.43917,-104.59055,3a,75y,90t/data=!3m4!1e1!3m2!1sZsP3kqnoZijUu1MA1yHvyA!2e0'
    },
    {//マルドナド (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNUCblKXWz-SPlSIKz-42Ng!2m2!1d-34.89471!2d-54.94239!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.89471,-54.94239,3a,75y,90t/data=!3m4!1e1!3m2!1sNUCblKXWz-SPlSIKz-42Ng!2e0'
    },
    {//ファン・ドミンゴ・ペロン (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOndNSKVjuEOcPTPdQK3zbg!2m2!1d-27.08542!2d-61.06953!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.08542,-61.06953,3a,75y,90t/data=!3m4!1e1!3m2!1sOndNSKVjuEOcPTPdQK3zbg!2e0'
    },
    {//20 デイ・パードリックス・プロムナード (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suZqdAKwzWyVgrqje-l-Wrw!2m2!1d46.22685!2d-64.40523!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.22685,-64.40523,3a,75y,90t/data=!3m4!1e1!3m2!1suZqdAKwzWyVgrqje-l-Wrw!2e0'
    },
    {//タラズ, ジャンブール (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suet8qhW2QDidefO8RjAmLg!2m2!1d42.9155!2d71.35721!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.9155,71.35721,3a,75y,90t/data=!3m4!1e1!3m2!1suet8qhW2QDidefO8RjAmLg!2e0'
    },
    {//825 パーシモン・ドライブ (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soQalyjg_GEDFsd791dYAuA!2m2!1d41.9235!2d-88.3048!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.9235,-88.3048,3a,75y,90t/data=!3m4!1e1!3m2!1soQalyjg_GEDFsd791dYAuA!2e0'
    },
    {//1 R. Jilmar Guimarães (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0_Sf1Yi_i0Hx6rNGM-sN_Q!2m2!1d-15.90835!2d-52.24301!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.90835,-52.24301,3a,75y,90t/data=!3m4!1e1!3m2!1s0_Sf1Yi_i0Hx6rNGM-sN_Q!2e0'
    },
    {//Phước Mỹ Trung, ビンロン (ベトナム)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDVC4cXhE-sqoEzkJUdePJQ!2m2!1d10.21697!2d106.29073!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.21697,106.29073,3a,75y,90t/data=!3m4!1e1!3m2!1sDVC4cXhE-sqoEzkJUdePJQ!2e0'
    },
    {//室蘭市, 北海道 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSlZYypfKg2nDYaf5KJ_KCw!2m2!1d42.33387!2d141.00515!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.33387,141.00515,3a,75y,90t/data=!3m4!1e1!3m2!1sSlZYypfKg2nDYaf5KJ_KCw!2e0'
    },
    {//3148 ウェスト 1100 ノース (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg7tKy45pBOL6fb_dMqWCFA!2m2!1d41.12983!2d-112.08668!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.12983,-112.08668,3a,75y,90t/data=!3m4!1e1!3m2!1sg7tKy45pBOL6fb_dMqWCFA!2e0'
    },
    {//252 Jl. Sulawesi (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7NZbDDaeVsqm3Zx6Nv5sjQ!2m2!1d-7.61417!2d109.51124!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.61417,109.51124,3a,75y,90t/data=!3m4!1e1!3m2!1s7NZbDDaeVsqm3Zx6Nv5sjQ!2e0'
    },
    {//8 プエルト・マサトラン (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2t0fHTwk-nVbkJqtKJ6hdQ!2m2!1d23.21372!2d-106.39933!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.21372,-106.39933,3a,75y,90t/data=!3m4!1e1!3m2!1s2t0fHTwk-nVbkJqtKJ6hdQ!2e0'
    },
    {//コントラ, トラスカラ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shYHm4lGlkoi_D6T3Cv-QNg!2m2!1d19.33113!2d-98.17122!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.33113,-98.17122,3a,75y,90t/data=!3m4!1e1!3m2!1shYHm4lGlkoi_D6T3Cv-QNg!2e0'
    },
    {//42 ロス・ニスペロス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sASqd74K_al4r29L625fXgA!2m2!1d-29.91416!2d-71.26787!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.91416,-71.26787,3a,75y,90t/data=!3m4!1e1!3m2!1sASqd74K_al4r29L625fXgA!2e0'
    },
    {//チョネ, マナビ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sleuM9lBuNoeJksXwfEEkGQ!2m2!1d-0.7093!2d-80.11188!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.7093,-80.11188,3a,75y,90t/data=!3m4!1e1!3m2!1sleuM9lBuNoeJksXwfEEkGQ!2e0'
    },
    {//1399 タフト・ストリート (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQnzjeskcQYd1mBLFEN4pcg!2m2!1d35.29098!2d-120.65845!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.29098,-120.65845,3a,75y,90t/data=!3m4!1e1!3m2!1sQnzjeskcQYd1mBLFEN4pcg!2e0'
    },
    {//2301 ウェスト・デザート・ヒルズ・ドライブ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDQlw6yOfHBk9zWCEU8IqnQ!2m2!1d33.84212!2d-112.10885!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.84212,-112.10885,3a,75y,90t/data=!3m4!1e1!3m2!1sDQlw6yOfHBk9zWCEU8IqnQ!2e0'
    },
    {//ストリート 1617 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPNS9oqaIAbtfyGNk3uA2nA!2m2!1d13.12108!2d103.18693!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.12108,103.18693,3a,75y,90t/data=!3m4!1e1!3m2!1sPNS9oqaIAbtfyGNk3uA2nA!2e0'
    },
    {//イースト・ブリッジ・ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjHyW5ZoA4CCKHhTgAXRl5Q!2m2!1d32.76173!2d-97.79683!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.76173,-97.79683,3a,75y,90t/data=!3m4!1e1!3m2!1sjHyW5ZoA4CCKHhTgAXRl5Q!2e0'
    },
    {//エル・サリトレ (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk932Yf05TxBOxAXRZSFu4Q!2m2!1d-32.84429!2d-70.93973!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.84429,-70.93973,3a,75y,90t/data=!3m4!1e1!3m2!1sk932Yf05TxBOxAXRZSFu4Q!2e0'
    },
    {//614 Tomoana Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saFkxykSNOpn5EgGEGfGBMA!2m2!1d-39.63144!2d176.84468!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-39.63144,176.84468,3a,75y,90t/data=!3m4!1e1!3m2!1saFkxykSNOpn5EgGEGfGBMA!2e0'
    },
    {//Ruta 90 (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-8akTR9wBqmn3WbajWKVZw!2m2!1d-34.65332!2d-71.18019!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.65332,-71.18019,3a,75y,90t/data=!3m4!1e1!3m2!1s-8akTR9wBqmn3WbajWKVZw!2e0'
    },
    {//パレンバン, 南スマトラ (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRGTQ9s3to1EPTjfH-qWvHQ!2m2!1d-2.93502!2d104.73198!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.93502,104.73198,3a,75y,90t/data=!3m4!1e1!3m2!1sRGTQ9s3to1EPTjfH-qWvHQ!2e0'
    },
    {//28 デイビス・ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNIByWW--3mIT7WmnMUrC9Q!2m2!1d42.60412!2d-72.06806!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.60412,-72.06806,3a,75y,90t/data=!3m4!1e1!3m2!1sNIByWW--3mIT7WmnMUrC9Q!2e0'
    },
    {//91 マーサ・アベニュー (カナダ大西洋側)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sedUHN9umZUC0peANoVsL0Q!2m2!1d45.36064!2d-63.2578!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.36064,-63.2578,3a,75y,90t/data=!3m4!1e1!3m2!1sedUHN9umZUC0peANoVsL0Q!2e0'
    },
    {//八代市, 熊本県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFZoaWv5dpGjexARnqfv_Sg!2m2!1d32.48692!2d130.59486!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.48692,130.59486,3a,75y,90t/data=!3m4!1e1!3m2!1sFZoaWv5dpGjexARnqfv_Sg!2e0'
    },
    {//ケフェア・サバ, 中央地区 (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sA7Xk6XhQpc8V7R3HuFP2mg!2m2!1d32.17823!2d34.90666!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.17823,34.90666,3a,75y,90t/data=!3m4!1e1!3m2!1sA7Xk6XhQpc8V7R3HuFP2mg!2e0'
    },
    {//ルタ・ナシオナル・トレシアリア 917 (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm8Mb562dueDrSnvIpPuL1g!2m2!1d10.90551!2d-85.3803!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.90551,-85.3803,3a,75y,90t/data=!3m4!1e1!3m2!1sm8Mb562dueDrSnvIpPuL1g!2e0'
    },
    {//525 ペック・アベニュー (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soUmHc3hxfCFn5l7w49V6EQ!2m2!1d39.55828!2d-97.66827!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.55828,-97.66827,3a,75y,90t/data=!3m4!1e1!3m2!1soUmHc3hxfCFn5l7w49V6EQ!2e0'
    },
    {//19 Huia Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3g_-8bT9YKPMCcEUZEZjjA!2m2!1d-36.96756!2d174.86611!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-36.96756,174.86611,3a,75y,90t/data=!3m4!1e1!3m2!1s3g_-8bT9YKPMCcEUZEZjjA!2e0'
    },
    {//9 中正路109巷2弄 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDZOJn3CMzjFWDdc-ytGVPg!2m2!1d23.97511!2d120.70627!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.97511,120.70627,3a,75y,90t/data=!3m4!1e1!3m2!1sDZOJn3CMzjFWDdc-ytGVPg!2e0'
    },
    {//302 ショール・ルックアウト (ブリティッシュコロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLM2lasvOkS4JPRUuWqG7Vw!2m2!1d49.39418!2d-123.49995!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.39418,-123.49995,3a,75y,90t/data=!3m4!1e1!3m2!1sLM2lasvOkS4JPRUuWqG7Vw!2e0'
    },
    {//Rampur Rd (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCXEPZO2Ulz-KLymodwbGLg!2m2!1d24.39988!2d91.4325!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.39988,91.4325,3a,75y,90t/data=!3m4!1e1!3m2!1sCXEPZO2Ulz-KLymodwbGLg!2e0'
    },
    {//4839 ノース・ダブロン・ドライブ (アラスカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skdVKr2VtsgYV0JMwSfE3KA!2m2!1d61.63498!2d-149.61588!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.63498,-149.61588,3a,75y,90t/data=!3m4!1e1!3m2!1skdVKr2VtsgYV0JMwSfE3KA!2e0'
    },
    {//鳴門市, 徳島県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szLeU5RNdAuPFQaIBOk3Yrg!2m2!1d34.15615!2d134.51172!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.15615,134.51172,3a,75y,90t/data=!3m4!1e1!3m2!1szLeU5RNdAuPFQaIBOk3Yrg!2e0'
    },
    {//752 リオ・デ・ラ・プラタ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOO9lNKUNW96aHF8CXva1Gg!2m2!1d-32.16898!2d-64.10094!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.16898,-64.10094,3a,75y,90t/data=!3m4!1e1!3m2!1sOO9lNKUNW96aHF8CXva1Gg!2e0'
    },
    {//31 レイク・ドライブ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shhY2QQqmzvqKCIHpXy0_dw!2m2!1d40.98301!2d-74.04269!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.98301,-74.04269,3a,75y,90t/data=!3m4!1e1!3m2!1shhY2QQqmzvqKCIHpXy0_dw!2e0'
    },
    {//43 R. Ibiuna (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snIYpU268am9vQuHomLFc6w!2m2!1d-23.19484!2d-46.81945!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.19484,-46.81945,3a,75y,90t/data=!3m4!1e1!3m2!1snIYpU268am9vQuHomLFc6w!2e0'
    },
    {//1215 グラウンゼル・アベニュー (アラスカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSIDGbqfJuEk0CMcCrOCGYg!2m2!1d64.81011!2d-147.52675!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@64.81011,-147.52675,3a,75y,90t/data=!3m4!1e1!3m2!1sSIDGbqfJuEk0CMcCrOCGYg!2e0'
    },
    {//ホセ・スタリン (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBKiXpPwwQUb7GGfLd7lchQ!2m2!1d-16.47729!2d-71.50706!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.47729,-71.50706,3a,75y,90t/data=!3m4!1e1!3m2!1sBKiXpPwwQUb7GGfLd7lchQ!2e0'
    },
    {//936 6a.Avenida (グアテマラ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNtxJ7rb0vuQEzOsIJ8OVFg!2m2!1d14.29966!2d-90.78385!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.29966,-90.78385,3a,75y,90t/data=!3m4!1e1!3m2!1sNtxJ7rb0vuQEzOsIJ8OVFg!2e0'
    },
    {//タラベラ, アプリマク (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smVG6R9ssX0jpPlAXoJXWZA!2m2!1d-13.66124!2d-73.42981!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.66124,-73.42981,3a,75y,90t/data=!3m4!1e1!3m2!1smVG6R9ssX0jpPlAXoJXWZA!2e0'
    },
    {//RP80 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sreszj_bSYL-Ok6oMxoUwJA!2m2!1d-32.01598!2d-61.23599!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.01598,-61.23599,3a,75y,90t/data=!3m4!1e1!3m2!1sreszj_bSYL-Ok6oMxoUwJA!2e0'
    },
    {//バウバウ, 南東スラウェシ (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk9OfKUaNsBDPoEjHz_xwcg!2m2!1d-5.46907!2d122.59614!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-5.46907,122.59614,3a,75y,90t/data=!3m4!1e1!3m2!1sk9OfKUaNsBDPoEjHz_xwcg!2e0'
    },
    {//409 ニコラス・ブラボ通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIw7ILVSJ0pZefuR0PFKq2w!2m2!1d27.07435!2d-109.44957!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.07435,-109.44957,3a,75y,90t/data=!3m4!1e1!3m2!1sIw7ILVSJ0pZefuR0PFKq2w!2e0'
    },
    {//ガイヴォタス通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shiO-MII_sKf7z2h0XxqE3w!2m2!1d-13.83944!2d-56.10199!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.83944,-56.10199,3a,75y,90t/data=!3m4!1e1!3m2!1shiO-MII_sKf7z2h0XxqE3w!2e0'
    },
    {//350 イスラス・マルビナス (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCGHNm_ekUKsQ7fnJCQA4gg!2m2!1d-38.95961!2d-68.22214!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.95961,-68.22214,3a,75y,90t/data=!3m4!1e1!3m2!1sCGHNm_ekUKsQ7fnJCQA4gg!2e0'
    },
    {//ンバケ, ディウルベル (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7VTG6UgrziiSBT1jnw2x_A!2m2!1d14.80632!2d-15.90837!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.80632,-15.90837,3a,75y,90t/data=!3m4!1e1!3m2!1s7VTG6UgrziiSBT1jnw2x_A!2e0'
    },
    {//1821 US-1 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sanNPaLXDP4UOpoatRYVDQA!2m2!1d43.04137!2d-70.77492!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.04137,-70.77492,3a,75y,90t/data=!3m4!1e1!3m2!1sanNPaLXDP4UOpoatRYVDQA!2e0'
    },
    {//アプトス, カリフォルニア州 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suAvPvhgL9_4jqszQFQ0X6Q!2m2!1d36.98125!2d-121.89466!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.98125,-121.89466,3a,75y,90t/data=!3m4!1e1!3m2!1suAvPvhgL9_4jqszQFQ0X6Q!2e0'
    },
    {//3 クローフォード・コート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sD0D36hR7-UcpAy14E4Foew!2m2!1d39.60798!2d-87.68829!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.60798,-87.68829,3a,75y,90t/data=!3m4!1e1!3m2!1sD0D36hR7-UcpAy14E4Foew!2e0'
    },
    {//メリピージャ, 首都州 (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spxURqDonocbvJJQj6LXEsQ!2m2!1d-33.67201!2d-71.20364!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.67201,-71.20364,3a,75y,90t/data=!3m4!1e1!3m2!1spxURqDonocbvJJQj6LXEsQ!2e0'
    },
    {//712 イースト・ステート・ハイウェイ 29 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSshX4lwFkq0JPZQFCLvrTQ!2m2!1d30.75966!2d-98.21979!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.75966,-98.21979,3a,75y,90t/data=!3m4!1e1!3m2!1sSshX4lwFkq0JPZQFCLvrTQ!2e0'
    },
    {//52 ホイル・ストリート (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZLqzZNW2bltWCiyHmn0DkA!2m2!1d-38.23354!2d146.40437!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.23354,146.40437,3a,75y,90t/data=!3m4!1e1!3m2!1sZLqzZNW2bltWCiyHmn0DkA!2e0'
    },
    {//9 プロジェクト通り (ドミニカ共和国)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgk1aQGpt0HfANKuvR3lKfA!2m2!1d18.49716!2d-69.86246!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.49716,-69.86246,3a,75y,90t/data=!3m4!1e1!3m2!1sgk1aQGpt0HfANKuvR3lKfA!2e0'
    },
    {//4029 エル・カミノ・ロード (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfXjOQbDP0GcomaSey3VtIg!2m2!1d36.11568!2d-115.22892!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.11568,-115.22892,3a,75y,90t/data=!3m4!1e1!3m2!1sfXjOQbDP0GcomaSey3VtIg!2e0'
    },
    {//1393 エスタードス通り (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCo6E38EFNJSMFp9NM8Jtug!2m2!1d-13.18826!2d-60.82404!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.18826,-60.82404,3a,75y,90t/data=!3m4!1e1!3m2!1sCo6E38EFNJSMFp9NM8Jtug!2e0'
    },
    {//13 アマポーラ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scxbLmM4aHuZcozXxsEmqBw!2m2!1d19.35603!2d-96.367!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.35603,-96.367,3a,75y,90t/data=!3m4!1e1!3m2!1scxbLmM4aHuZcozXxsEmqBw!2e0'
    },
    {//1 Jl. Yos Sudarso (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTBX6bCbdhQeq3BIXNFalpA!2m2!1d1.13597!2d104.02341!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.13597,104.02341,3a,75y,90t/data=!3m4!1e1!3m2!1sTBX6bCbdhQeq3BIXNFalpA!2e0'
    },
    {//エルヴァウ・セッコ, リオグランデ・ド・スル州 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sER66ZhQRzw1889gmlXuHWw!2m2!1d-27.55192!2d-53.51601!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.55192,-53.51601,3a,75y,90t/data=!3m4!1e1!3m2!1sER66ZhQRzw1889gmlXuHWw!2e0'
    },
    {//78249 キャリコ・グレン・ドライブ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSPekx5DGjdPuxG47nTSTBg!2m2!1d33.74031!2d-116.29936!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.74031,-116.29936,3a,75y,90t/data=!3m4!1e1!3m2!1sSPekx5DGjdPuxG47nTSTBg!2e0'
    },
    {//84 R. Rodivaldo Santos da Cunha (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-RvdUUrNkBEk1aNTtPA54w!2m2!1d-10.6877!2d-37.41377!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.6877,-37.41377,3a,75y,90t/data=!3m4!1e1!3m2!1s-RvdUUrNkBEk1aNTtPA54w!2e0'
    },
    {//フェルティリサンテス通り (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shqjMe0wrAsPMVQr_LtZ1xQ!2m2!1d-23.10681!2d-70.43619!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.10681,-70.43619,3a,75y,90t/data=!3m4!1e1!3m2!1shqjMe0wrAsPMVQr_LtZ1xQ!2e0'
    },
    {//PR-348 (プエルトリコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk5RwCjZiQQF3jXQzxYnw1Q!2m2!1d18.14107!2d-67.04204!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.14107,-67.04204,3a,75y,90t/data=!3m4!1e1!3m2!1sk5RwCjZiQQF3jXQzxYnw1Q!2e0'
    },
    {//リパ・シティ, カラバルソン地方 (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scu3c9PQoey_1BA6UomoqQg!2m2!1d13.89226!2d121.25549!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.89226,121.25549,3a,75y,90t/data=!3m4!1e1!3m2!1scu3c9PQoey_1BA6UomoqQg!2e0'
    },
    {//2 イタリア通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stTIvM0LFgIt9ACNGIvvOCg!2m2!1d-22.06379!2d-46.57501!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.06379,-46.57501,3a,75y,90t/data=!3m4!1e1!3m2!1stTIvM0LFgIt9ACNGIvvOCg!2e0'
    },
    {//กจ.4022 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEsyshVLwSExaDTljr1emCA!2m2!1d14.49291!2d99.71475!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.49291,99.71475,3a,75y,90t/data=!3m4!1e1!3m2!1sEsyshVLwSExaDTljr1emCA!2e0'
    },
    {//472 ホセ・ミゲル・カレーラ (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1se8HQ42neiGFQqpa5qvSL1g!2m2!1d-30.03121!2d-70.71058!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.03121,-70.71058,3a,75y,90t/data=!3m4!1e1!3m2!1se8HQ42neiGFQqpa5qvSL1g!2e0'
    },
    {//1390 ノース・パセオ・デ・アンザ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGZq2z2F9ySUj-pOLcVLxvQ!2m2!1d33.84027!2d-116.53017!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.84027,-116.53017,3a,75y,90t/data=!3m4!1e1!3m2!1sGZq2z2F9ySUj-pOLcVLxvQ!2e0'
    },
    {//บางปู, サムットプラーカーン (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szlM8Is0lXAGEZ0fRhyYlMQ!2m2!1d13.506!2d100.74517!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.506,100.74517,3a,75y,90t/data=!3m4!1e1!3m2!1szlM8Is0lXAGEZ0fRhyYlMQ!2e0'
    },
    {//R102 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srEd23611wpARW8EmDeghlw!2m2!1d-32.94536!2d27.78626!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.94536,27.78626,3a,75y,90t/data=!3m4!1e1!3m2!1srEd23611wpARW8EmDeghlw!2e0'
    },
    {//27 ジョゼー・ゴメス・フィーリョ通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOxuDi3x-rmQEPX4tSUX51w!2m2!1d-26.78515!2d-48.63309!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.78515,-48.63309,3a,75y,90t/data=!3m4!1e1!3m2!1sOxuDi3x-rmQEPX4tSUX51w!2e0'
    },
    {//181 R. Crescência Vulcano Godoy (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJa9iEe6XLQR5r544WCD2zA!2m2!1d-22.72801!2d-48.58677!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.72801,-48.58677,3a,75y,90t/data=!3m4!1e1!3m2!1sJa9iEe6XLQR5r544WCD2zA!2e0'
    },
    {//ビワニ, ハリヤナ州 (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUaOHJPSJgQC5p3EBtcuFuQ!2m2!1d28.79852!2d76.14919!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.79852,76.14919,3a,75y,90t/data=!3m4!1e1!3m2!1sUaOHJPSJgQC5p3EBtcuFuQ!2e0'
    },
    {//B1 (ナミビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPLw54lTkFJKA348ql-JL3A!2m2!1d-20.46024!2d16.6449!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.46024,16.6449,3a,75y,90t/data=!3m4!1e1!3m2!1sPLw54lTkFJKA348ql-JL3A!2e0'
    },
    {//松戸市, 千葉県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPKyh0v1_XZy7pqMMTW5OOg!2m2!1d35.78999!2d139.91711!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.78999,139.91711,3a,75y,90t/data=!3m4!1e1!3m2!1sPKyh0v1_XZy7pqMMTW5OOg!2e0'
    },
    {//91 Lorong Berkat 3 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWmJYN6Ik_uCkIypUFxXtwQ!2m2!1d2.99258!2d101.58807!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@2.99258,101.58807,3a,75y,90t/data=!3m4!1e1!3m2!1sWmJYN6Ik_uCkIypUFxXtwQ!2e0'
    },
    {//998 L ストリート (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQkBzKzHrGgyMu5y4bJVNTQ!2m2!1d38.55511!2d-121.73508!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.55511,-121.73508,3a,75y,90t/data=!3m4!1e1!3m2!1sQkBzKzHrGgyMu5y4bJVNTQ!2e0'
    },
    {//セルジッペ州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5VTx2rTmLnScuQbQxnogMQ!2m2!1d-11.40272!2d-37.65996!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.40272,-37.65996,3a,75y,90t/data=!3m4!1e1!3m2!1s5VTx2rTmLnScuQbQxnogMQ!2e0'
    },
    {//152 ハイフィールド・ドライブ (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqJJFg4A-ajwx2S_aKdJShg!2m2!1d-28.06681!2d153.36259!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.06681,153.36259,3a,75y,90t/data=!3m4!1e1!3m2!1sqJJFg4A-ajwx2S_aKdJShg!2e0'
    },
    {//Kopri Village Road (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stAw8Nvs_GtRSdYnHnN_EHg!2m2!1d19.47423!2d72.82395!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.47423,72.82395,3a,75y,90t/data=!3m4!1e1!3m2!1stAw8Nvs_GtRSdYnHnN_EHg!2e0'
    },
    {//中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgRxaeQOflXK6vm59FZK7tQ!2m2!1d-7.27002!2d110.37819!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.27002,110.37819,3a,75y,90t/data=!3m4!1e1!3m2!1sgRxaeQOflXK6vm59FZK7tQ!2e0'
    },
    {//Belém-Brasília Highway (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZI5_xQ4JTW1xhTU-xxnQtg!2m2!1d-8.06936!2d-48.46652!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.06936,-48.46652,3a,75y,90t/data=!3m4!1e1!3m2!1sZI5_xQ4JTW1xhTU-xxnQtg!2e0'
    },
    {//30 Jl. Letjend Suprapto (カリマンタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJddkcd-FxXLgCSkj1nStDw!2m2!1d-0.03966!2d109.34135!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.03966,109.34135,3a,75y,90t/data=!3m4!1e1!3m2!1sJddkcd-FxXLgCSkj1nStDw!2e0'
    },
    {//フォートワース, テキサス州 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sW9-uE0g-K6-p46WLaCbXFA!2m2!1d32.8968!2d-97.45111!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.8968,-97.45111,3a,75y,90t/data=!3m4!1e1!3m2!1sW9-uE0g-K6-p46WLaCbXFA!2e0'
    },
    {//PR-691 (プエルトリコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snXF00kwiwTkCJld1v6DXXg!2m2!1d18.44081!2d-66.30695!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.44081,-66.30695,3a,75y,90t/data=!3m4!1e1!3m2!1snXF00kwiwTkCJld1v6DXXg!2e0'
    },
    {//エッジウォーター, コロラド州 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scljKdBIgFfGg3NWh7JfKqg!2m2!1d39.75375!2d-105.06428!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.75375,-105.06428,3a,75y,90t/data=!3m4!1e1!3m2!1scljKdBIgFfGg3NWh7JfKqg!2e0'
    },
    {//Jl. Agatis (カリマンタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3VEefp5hdRLvi_UJX0UGKg!2m2!1d-2.53589!2d112.94881!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.53589,112.94881,3a,75y,90t/data=!3m4!1e1!3m2!1s3VEefp5hdRLvi_UJX0UGKg!2e0'
    },
    {//セドナ, アリゾナ州 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqcZR_sU5yH8WATDZsRNayQ!2m2!1d34.86298!2d-111.79702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.86298,-111.79702,3a,75y,90t/data=!3m4!1e1!3m2!1sqcZR_sU5yH8WATDZsRNayQ!2e0'
    },
    {//トレーゼ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEpCV84bxtbGYxw8CDGSCLA!2m2!1d-14.10653!2d-46.62594!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.10653,-46.62594,3a,75y,90t/data=!3m4!1e1!3m2!1sEpCV84bxtbGYxw8CDGSCLA!2e0'
    },
    {//68 Jalan Jangkang (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sa5UkxwuWVPnezgetz_OX1Q!2m2!1d5.45151!2d100.63152!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.45151,100.63152,3a,75y,90t/data=!3m4!1e1!3m2!1sa5UkxwuWVPnezgetz_OX1Q!2e0'
    },
    {//パルマス, トカンティンス (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjQQVPd_JAqL1lmi89Z3zPw!2m2!1d-10.1833!2d-48.33483!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.1833,-48.33483,3a,75y,90t/data=!3m4!1e1!3m2!1sjQQVPd_JAqL1lmi89Z3zPw!2e0'
    },
    {//701 イースト・メンデンホール・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1st7T1XiUvs5N0t7ZnU0Trlg!2m2!1d45.68067!2d-111.02653!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.68067,-111.02653,3a,75y,90t/data=!3m4!1e1!3m2!1st7T1XiUvs5N0t7ZnU0Trlg!2e0'
    },
    {//Jl. Raya Kaliori (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svaQXoh3kQH7pfL4MUih58w!2m2!1d-7.50553!2d109.28067!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.50553,109.28067,3a,75y,90t/data=!3m4!1e1!3m2!1svaQXoh3kQH7pfL4MUih58w!2e0'
    },
    {//カラー・ガムマン, パンジャーブ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sd26K6uetHw-iRwV9sQtJ9g!2m2!1d31.55398!2d75.21827!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.55398,75.21827,3a,75y,90t/data=!3m4!1e1!3m2!1sd26K6uetHw-iRwV9sQtJ9g!2e0'
    },
    {//キーラビル, ニューサウスウェールズ (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjsQsZnRqRoDZ1KyCHswmwA!2m2!1d-34.40776!2d150.88172!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.40776,150.88172,3a,75y,90t/data=!3m4!1e1!3m2!1sjsQsZnRqRoDZ1KyCHswmwA!2e0'
    },
    {//Nam Gia Nghĩa, ラムドン (ベトナム)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sp7FSlTzqzfs2LEkJkTnRMg!2m2!1d11.9977!2d107.67858!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.9977,107.67858,3a,75y,90t/data=!3m4!1e1!3m2!1sp7FSlTzqzfs2LEkJkTnRMg!2e0'
    },
    {//タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sT9LoOUODmcPvftXYa3ym5Q!2m2!1d11.07055!2d77.62387!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.07055,77.62387,3a,75y,90t/data=!3m4!1e1!3m2!1sT9LoOUODmcPvftXYa3ym5Q!2e0'
    },
    {//ビージャ・ベルトエト, チャコ州 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssDaZYwq-7-aqoyr3DX4NMA!2m2!1d-27.28069!2d-60.40801!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.28069,-60.40801,3a,75y,90t/data=!3m4!1e1!3m2!1ssDaZYwq-7-aqoyr3DX4NMA!2e0'
    },
    {//26666 スネル・レーン (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPJ7bMVRezfO2e1SNqsnT-g!2m2!1d37.38707!2d-122.13848!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.38707,-122.13848,3a,75y,90t/data=!3m4!1e1!3m2!1sPJ7bMVRezfO2e1SNqsnT-g!2e0'
    },
    {//1252 1252 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4Khe5MSAXfru2SJkPG3NzA!2m2!1d18.90032!2d99.44723!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.90032,99.44723,3a,75y,90t/data=!3m4!1e1!3m2!1s4Khe5MSAXfru2SJkPG3NzA!2e0'
    },
    {//サディヤルアー, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-Tn6tj9MAh7ONG1zyEFOWw!2m2!1d11.08311!2d76.93358!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.08311,76.93358,3a,75y,90t/data=!3m4!1e1!3m2!1s-Tn6tj9MAh7ONG1zyEFOWw!2e0'
    },
    {//119 ノース・パサディナ・アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3eaEb-yM4P0XhLOMJ3JIxA!2m2!1d34.12233!2d-117.90211!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.12233,-117.90211,3a,75y,90t/data=!3m4!1e1!3m2!1s3eaEb-yM4P0XhLOMJ3JIxA!2e0'
    },
    {//サバニタス, コロン (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjI0Y7OyG2x0PteS1r7KsQQ!2m2!1d9.34068!2d-79.80218!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.34068,-79.80218,3a,75y,90t/data=!3m4!1e1!3m2!1sjI0Y7OyG2x0PteS1r7KsQQ!2e0'
    },
    {//61 Nguyễn Văn Cừ (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJKMkRYVFzA1fwF47AataqA!2m2!1d21.72119!2d104.91864!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.72119,104.91864,3a,75y,90t/data=!3m4!1e1!3m2!1sJKMkRYVFzA1fwF47AataqA!2e0'
    },
    {//76 マヌエル・ロドリゲス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-Cjw-iWjB7KovhNfMCxjsA!2m2!1d-32.78396!2d-71.15682!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.78396,-71.15682,3a,75y,90t/data=!3m4!1e1!3m2!1s-Cjw-iWjB7KovhNfMCxjsA!2e0'
    },
    {//ゴイアス (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKo_5xatHqKASBGRK2sslIw!2m2!1d-17.45811!2d-51.17356!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.45811,-51.17356,3a,75y,90t/data=!3m4!1e1!3m2!1sKo_5xatHqKASBGRK2sslIw!2e0'
    },
    {//29 Henry St (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssOmMqphJZtRlAOOSjvpqvQ!2m2!1d-41.51569!2d173.95343!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-41.51569,173.95343,3a,75y,90t/data=!3m4!1e1!3m2!1ssOmMqphJZtRlAOOSjvpqvQ!2e0'
    },
    {//636 コロンボ - ガル - ハンバントタ - ウェラワヤ・ハイウェイ (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1CzKqVjh6_CRpTTEqW5ZLQ!2m2!1d5.97334!2d80.43766!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.97334,80.43766,3a,75y,90t/data=!3m4!1e1!3m2!1s1CzKqVjh6_CRpTTEqW5ZLQ!2e0'
    },
    {//174 ミラーグレ・デ・サント・アンドレー通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suVQcTn31NGZn9OfLv6v7zw!2m2!1d-13.72944!2d-39.15093!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.72944,-39.15093,3a,75y,90t/data=!3m4!1e1!3m2!1suVQcTn31NGZn9OfLv6v7zw!2e0'
    },
    {//313 サントラル・ストルエ通り (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1oAP1j8hABQ8rChcItLK-Q!2m2!1d45.98663!2d-64.57012!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.98663,-64.57012,3a,75y,90t/data=!3m4!1e1!3m2!1s1oAP1j8hABQ8rChcItLK-Q!2e0'
    },
    {//ウェスト・ビーチ, 南オーストラリア州 (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqifPop7lEIg9SFkwmPJnBw!2m2!1d-34.94824!2d138.5063!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.94824,138.5063,3a,75y,90t/data=!3m4!1e1!3m2!1sqifPop7lEIg9SFkwmPJnBw!2e0'
    },
    {//ポカテッロ, アイダホ州 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sO433YZPMw3WrcstkFd67-Q!2m2!1d42.87162!2d-112.46078!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.87162,-112.46078,3a,75y,90t/data=!3m4!1e1!3m2!1sO433YZPMw3WrcstkFd67-Q!2e0'
    },
    {//31 Whangarata Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZ-GjI4vnk-Fd1Y8RzJ_xZQ!2m2!1d-37.27399!2d174.94905!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.27399,174.94905,3a,75y,90t/data=!3m4!1e1!3m2!1sZ-GjI4vnk-Fd1Y8RzJ_xZQ!2e0'
    },
    {//3341 チェリーランド・アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stZdQN-23ZHoXbDTD2TobTA!2m2!1d37.99449!2d-121.24457!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.99449,-121.24457,3a,75y,90t/data=!3m4!1e1!3m2!1stZdQN-23ZHoXbDTD2TobTA!2e0'
    },
    {//440 ウィルソン・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb7GalJUyhl-ttre_EylHQA!2m2!1d43.79059!2d-88.42651!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.79059,-88.42651,3a,75y,90t/data=!3m4!1e1!3m2!1sb7GalJUyhl-ttre_EylHQA!2e0'
    },
    {//1773 R. José Cortese (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxCq7WkHDXpjbgs1V7j6PXQ!2m2!1d-27.88973!2d-52.2363!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.88973,-52.2363,3a,75y,90t/data=!3m4!1e1!3m2!1sxCq7WkHDXpjbgs1V7j6PXQ!2e0'
    },
    {//鹿屋市, 鹿児島県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTnSgFWQfehQwbmmw1T5Z4Q!2m2!1d31.39067!2d130.84327!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.39067,130.84327,3a,75y,90t/data=!3m4!1e1!3m2!1sTnSgFWQfehQwbmmw1T5Z4Q!2e0'
    },
    {//ターサンカリー・レーン (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKfw8s8XIbunkqbEWdc-TZQ!2m2!1d10.04524!2d76.23186!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.04524,76.23186,3a,75y,90t/data=!3m4!1e1!3m2!1sKfw8s8XIbunkqbEWdc-TZQ!2e0'
    },
    {//970 サラテア (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIxg3AsdPXOtaHtyiZPwtog!2m2!1d-29.79743!2d-58.05789!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.79743,-58.05789,3a,75y,90t/data=!3m4!1e1!3m2!1sIxg3AsdPXOtaHtyiZPwtog!2e0'
    },
    {//59 IL-157 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sW2MhhCmGAqA2BPE9ult3jg!2m2!1d38.80665!2d-89.96755!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.80665,-89.96755,3a,75y,90t/data=!3m4!1e1!3m2!1sW2MhhCmGAqA2BPE9ult3jg!2e0'
    },
    {//525 サウスウェスト 11th ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spK-npLq0ZslnfYi-gi8v_Q!2m2!1d35.45414!2d-97.52225!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.45414,-97.52225,3a,75y,90t/data=!3m4!1e1!3m2!1spK-npLq0ZslnfYi-gi8v_Q!2e0'
    },
    {//12 Jl. Selebes (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s67sJcegXV_BdMwU0IhPRFw!2m2!1d3.77304!2d98.68339!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.77304,98.68339,3a,75y,90t/data=!3m4!1e1!3m2!1s67sJcegXV_BdMwU0IhPRFw!2e0'
    },
    {//Rod. Ver. Alci Francisco Téu (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZI9ng5MkdVK0s5NCWrwN5A!2m2!1d-24.90108!2d-52.93487!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.90108,-52.93487,3a,75y,90t/data=!3m4!1e1!3m2!1sZI9ng5MkdVK0s5NCWrwN5A!2e0'
    },
    {//546 オークヒル・ロード (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl8WJQ66Skvh9_tQnYoDIbQ!2m2!1d44.39228!2d-64.49958!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.39228,-64.49958,3a,75y,90t/data=!3m4!1e1!3m2!1sl8WJQ66Skvh9_tQnYoDIbQ!2e0'
    },
    {//18 シャートン・アベニュー (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sU3LtFEOC6wHR3y9Kzk88JA!2m2!1d-27.72133!2d153.15405!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.72133,153.15405,3a,75y,90t/data=!3m4!1e1!3m2!1sU3LtFEOC6wHR3y9Kzk88JA!2e0'
    },
    {//Thanh Hòa, ドンタップ省 (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCmFwWYcLflaChuQgyf1-zw!2m2!1d10.4016!2d106.10565!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.4016,106.10565,3a,75y,90t/data=!3m4!1e1!3m2!1sCmFwWYcLflaChuQgyf1-zw!2e0'
    },
    {//カジェ 10ª (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slmmumFkMAOU0IeHoTqfZpg!2m2!1d10.40484!2d-74.82239!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.40484,-74.82239,3a,75y,90t/data=!3m4!1e1!3m2!1slmmumFkMAOU0IeHoTqfZpg!2e0'
    },
    {//492 Av. Abilon de Souza Naves (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slaMFpQy1p61S4LA2qzSGZw!2m2!1d-26.22402!2d-51.07562!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.22402,-51.07562,3a,75y,90t/data=!3m4!1e1!3m2!1slaMFpQy1p61S4LA2qzSGZw!2e0'
    },
    {//カンドン・シティ, イロコス (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBy_lqzMGqFwqQ9l1r1s1_g!2m2!1d17.19236!2d120.43769!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.19236,120.43769,3a,75y,90t/data=!3m4!1e1!3m2!1sBy_lqzMGqFwqQ9l1r1s1_g!2e0'
    },
    {//プロジェターダ・セントラウ通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si-fy6wFDDDW6AmkaP9VvGQ!2m2!1d-7.35308!2d-41.14317!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.35308,-41.14317,3a,75y,90t/data=!3m4!1e1!3m2!1si-fy6wFDDDW6AmkaP9VvGQ!2e0'
    },
    {//143 FM1334 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skoe006HIxMp0c-CLPFAIiA!2m2!1d28.95282!2d-98.4838!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.95282,-98.4838,3a,75y,90t/data=!3m4!1e1!3m2!1skoe006HIxMp0c-CLPFAIiA!2e0'
    },
    {//フリスコ, テキサス州 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syTBd66L-QV0HVobVEvUUxQ!2m2!1d33.13742!2d-96.80835!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.13742,-96.80835,3a,75y,90t/data=!3m4!1e1!3m2!1syTBd66L-QV0HVobVEvUUxQ!2e0'
    },
    {//168 ソサ・ベルナデト (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxjfHNCXPuMKHor64-3kc2A!2m2!1d-33.34861!2d-55.63825!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.34861,-55.63825,3a,75y,90t/data=!3m4!1e1!3m2!1sxjfHNCXPuMKHor64-3kc2A!2e0'
    },
    {//えびの市, 宮崎県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDFp06Rcgixpj9zmUJ6Rb6A!2m2!1d32.03594!2d130.86083!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.03594,130.86083,3a,75y,90t/data=!3m4!1e1!3m2!1sDFp06Rcgixpj9zmUJ6Rb6A!2e0'
    },
    {//ポーティジ・ラ・プレーリー, マニトバ (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssZ0kuYi4UylZV_RQMkP2PA!2m2!1d49.98142!2d-98.2735!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.98142,-98.2735,3a,75y,90t/data=!3m4!1e1!3m2!1ssZ0kuYi4UylZV_RQMkP2PA!2e0'
    },
    {//センテニアル, コロラド州 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFkbhkNkFyiiStC_uPyCKSA!2m2!1d39.59385!2d-104.91549!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.59385,-104.91549,3a,75y,90t/data=!3m4!1e1!3m2!1sFkbhkNkFyiiStC_uPyCKSA!2e0'
    },
    {//60 הרימון (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8Gu0UARvdH1DiYz5T1tFWA!2m2!1d31.60766!2d34.76965!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.60766,34.76965,3a,75y,90t/data=!3m4!1e1!3m2!1s8Gu0UARvdH1DiYz5T1tFWA!2e0'
    },
    {//グレゴリオ・イバニェス通り (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIwh9yZmrkKWpz2QRLiKF5Q!2m2!1d-49.97839!2d-68.90687!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-49.97839,-68.90687,3a,75y,90t/data=!3m4!1e1!3m2!1sIwh9yZmrkKWpz2QRLiKF5Q!2e0'
    },
    {//江北町, 佐賀県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOaJnh0REb_B2_nlKtdXmig!2m2!1d33.22405!2d130.1542!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.22405,130.1542,3a,75y,90t/data=!3m4!1e1!3m2!1sOaJnh0REb_B2_nlKtdXmig!2e0'
    },
    {//347 ラザー・ストリート (ナミビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5EDnFB694zVHuk16M31w1Q!2m2!1d-17.91173!2d19.78106!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.91173,19.78106,3a,75y,90t/data=!3m4!1e1!3m2!1s5EDnFB694zVHuk16M31w1Q!2e0'
    },
    {//106 ロス・コピウェス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw2TxHZMFVq1fg0yLn437nQ!2m2!1d-34.17798!2d-70.65643!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.17798,-70.65643,3a,75y,90t/data=!3m4!1e1!3m2!1sw2TxHZMFVq1fg0yLn437nQ!2e0'
    },
    {//カオラク (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3nSHBzjN7i8NBRdYWCu9cw!2m2!1d14.14698!2d-16.0678!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.14698,-16.0678,3a,75y,90t/data=!3m4!1e1!3m2!1s3nSHBzjN7i8NBRdYWCu9cw!2e0'
    },
    {//4644 サウス 288th プレイス (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scjz1uTTmz8GzTDGyS3Zu4A!2m2!1d47.34287!2d-122.27389!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.34287,-122.27389,3a,75y,90t/data=!3m4!1e1!3m2!1scjz1uTTmz8GzTDGyS3Zu4A!2e0'
    },
    {//722 カレッジ・オークス・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sy8IVHvV-vPYkd_B7feN_uw!2m2!1d32.72694!2d-97.09845!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.72694,-97.09845,3a,75y,90t/data=!3m4!1e1!3m2!1sy8IVHvV-vPYkd_B7feN_uw!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8yai0USsDF0NGlnq88CiXg!2m2!1d-20.45769!2d-47.13208!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.45769,-47.13208,3a,75y,90t/data=!3m4!1e1!3m2!1s8yai0USsDF0NGlnq88CiXg!2e0'
    },
    {//ルタ・ナシオナル・トレシアリア 921 (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI7VcA-5kV2Afy2AW286Mgg!2m2!1d10.12777!2d-85.50725!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.12777,-85.50725,3a,75y,90t/data=!3m4!1e1!3m2!1sI7VcA-5kV2Afy2AW286Mgg!2e0'
    },
    {//ブライミ, ブライミ特別行政区 (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBxBBbIybpFiHi6OrPyhUwQ!2m2!1d24.26749!2d55.80133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.26749,55.80133,3a,75y,90t/data=!3m4!1e1!3m2!1sBxBBbIybpFiHi6OrPyhUwQ!2e0'
    },
    {//Mlonggo, 中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seEKukLAP-a8P_HK6KEjp6g!2m2!1d-6.52435!2d110.718!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.52435,110.718,3a,75y,90t/data=!3m4!1e1!3m2!1seEKukLAP-a8P_HK6KEjp6g!2e0'
    },
    {//サン・ホルヘ, バハカリフォルニア (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdes5qPpktphc9zZGoGLS6g!2m2!1d32.2197!2d-115.16682!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.2197,-115.16682,3a,75y,90t/data=!3m4!1e1!3m2!1sdes5qPpktphc9zZGoGLS6g!2e0'
    },
    {//144 サウス・アベニュー (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1st73uItMi7Th-3xtnW9mPwQ!2m2!1d52.85949!2d-104.61276!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.85949,-104.61276,3a,75y,90t/data=!3m4!1e1!3m2!1st73uItMi7Th-3xtnW9mPwQ!2e0'
    },
    {//503 エルム・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slf-K5JCnrhjTSzeAlSP71Q!2m2!1d36.32435!2d-82.35375!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.32435,-82.35375,3a,75y,90t/data=!3m4!1e1!3m2!1slf-K5JCnrhjTSzeAlSP71Q!2e0'
    },
    {//717 3rd ストリート (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9hVt4nof8LnNQeWH0zm4jA!2m2!1d37.00924!2d-121.57988!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.00924,-121.57988,3a,75y,90t/data=!3m4!1e1!3m2!1s9hVt4nof8LnNQeWH0zm4jA!2e0'
    },
    {//ウルグアイ通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTuX6wP_4uoj-FFjNuY325g!2m2!1d-25.6676!2d-54.05009!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.6676,-54.05009,3a,75y,90t/data=!3m4!1e1!3m2!1sTuX6wP_4uoj-FFjNuY325g!2e0'
    },
    {//7825 Crockett Blvd (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOHC4TklqFVLrL1ZrT-oQ7A!2m2!1d33.96756!2d-118.23679!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.96756,-118.23679,3a,75y,90t/data=!3m4!1e1!3m2!1sOHC4TklqFVLrL1ZrT-oQ7A!2e0'
    },
    {//1433 セント・ポール・ストリート (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSGEgYlk1i_eqshD20TFuPA!2m2!1d49.88823!2d-119.49208!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.88823,-119.49208,3a,75y,90t/data=!3m4!1e1!3m2!1sSGEgYlk1i_eqshD20TFuPA!2e0'
    },
    {//ولاية ينقل, ザーヒラ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxLGL2zMwDi0vn61H-U3YJQ!2m2!1d23.59647!2d56.54228!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.59647,56.54228,3a,75y,90t/data=!3m4!1e1!3m2!1sxLGL2zMwDi0vn61H-U3YJQ!2e0'
    },
    {//カナー・チャク A, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srWUADt-e2YzNLWrgW_t2lw!2m2!1d24.43964!2d74.25789!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.43964,74.25789,3a,75y,90t/data=!3m4!1e1!3m2!1srWUADt-e2YzNLWrgW_t2lw!2e0'
    },
    {//133 2-A通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNAwLip8q5Yut_6QzTh75qg!2m2!1d-11.80164!2d-49.53407!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.80164,-49.53407,3a,75y,90t/data=!3m4!1e1!3m2!1sNAwLip8q5Yut_6QzTh75qg!2e0'
    },
    {//クマシ, アシャンティ (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbKoYm5nySin6ri7pJGkz5Q!2m2!1d6.70019!2d-1.60528!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.70019,-1.60528,3a,75y,90t/data=!3m4!1e1!3m2!1sbKoYm5nySin6ri7pJGkz5Q!2e0'
    },
    {//129 セナドル・フィリント・ミュラー通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-lbYIgZCfN92wJh-GT3ytg!2m2!1d-15.6523!2d-56.12294!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.6523,-56.12294,3a,75y,90t/data=!3m4!1e1!3m2!1s-lbYIgZCfN92wJh-GT3ytg!2e0'
    },
    {//1332 ピエモント (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGrpMzUHl1mgBGHifPjqnqQ!2m2!1d31.11734!2d-97.36089!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.11734,-97.36089,3a,75y,90t/data=!3m4!1e1!3m2!1sGrpMzUHl1mgBGHifPjqnqQ!2e0'
    },
    {//1387 サラス・イ・バルデス (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scatV9141cPno5NrOpoQ8Lw!2m2!1d-26.81167!2d-65.28921!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.81167,-65.28921,3a,75y,90t/data=!3m4!1e1!3m2!1scatV9141cPno5NrOpoQ8Lw!2e0'
    },
    {//Google マップ (グリーンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su7pcr04YjFObD0h1dDF01Q!2m2!1d68.71095!2d-52.86423!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@68.71095,-52.86423,3a,75y,90t/data=!3m4!1e1!3m2!1su7pcr04YjFObD0h1dDF01Q!2e0'
    },
    {//ラボ・バイパス・ロード (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svhqctnpjb6fHi9_dWJlYWg!2m2!1d14.15769!2d122.84264!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.15769,122.84264,3a,75y,90t/data=!3m4!1e1!3m2!1svhqctnpjb6fHi9_dWJlYWg!2e0'
    },
    {//89 1通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQZ49Qa6gBuZllEudKvBMIw!2m2!1d27.95661!2d-110.8095!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.95661,-110.8095,3a,75y,90t/data=!3m4!1e1!3m2!1sQZ49Qa6gBuZllEudKvBMIw!2e0'
    },
    {//ตำบล ตากออก, ターク (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYgwM6N-YJBDsZAbqMLYcKA!2m2!1d17.03534!2d99.09995!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.03534,99.09995,3a,75y,90t/data=!3m4!1e1!3m2!1sYgwM6N-YJBDsZAbqMLYcKA!2e0'
    },
    {//17 マルコム・アベニュー (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shv6Dh1omFoiBt1JWz0Q5kQ!2m2!1d47.99931!2d-66.68742!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.99931,-66.68742,3a,75y,90t/data=!3m4!1e1!3m2!1shv6Dh1omFoiBt1JWz0Q5kQ!2e0'
    },
    {//69 Humber St (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYNc3wRMKeBFNiMiYB8xFmA!2m2!1d-45.09082!2d170.98004!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-45.09082,170.98004,3a,75y,90t/data=!3m4!1e1!3m2!1sYNc3wRMKeBFNiMiYB8xFmA!2e0'
    },
    {//ジャナオゼン, マンギスタウ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb0z3pW1ZFp32QnlIUVOOcQ!2m2!1d43.33994!2d52.87015!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.33994,52.87015,3a,75y,90t/data=!3m4!1e1!3m2!1sb0z3pW1ZFp32QnlIUVOOcQ!2e0'
    },
    {//洲本市, 兵庫県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3vt2ub5sxWV8wtt-_hcNbA!2m2!1d34.33444!2d134.88846!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.33444,134.88846,3a,75y,90t/data=!3m4!1e1!3m2!1s3vt2ub5sxWV8wtt-_hcNbA!2e0'
    },
    {//290 サン・ジョゼー通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWfnnSF55UQqF_WHFJd_58Q!2m2!1d-19.94001!2d-40.59943!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.94001,-40.59943,3a,75y,90t/data=!3m4!1e1!3m2!1sWfnnSF55UQqF_WHFJd_58Q!2e0'
    },
    {//サン・ビセンテ, ナヤリト (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCiVyyYU7DcrkQbfbcNhsRA!2m2!1d20.75291!2d-105.24998!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.75291,-105.24998,3a,75y,90t/data=!3m4!1e1!3m2!1sCiVyyYU7DcrkQbfbcNhsRA!2e0'
    },
    {//ホーチミン, ホー・チ・ミン (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8PCgZ4yLxjP8Ub3OFcZHXg!2m2!1d10.76599!2d106.66803!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.76599,106.66803,3a,75y,90t/data=!3m4!1e1!3m2!1s8PCgZ4yLxjP8Ub3OFcZHXg!2e0'
    },
    {//302 マグノリア・レーン (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9O46cVYQ0qA6k5bWlTzJRQ!2m2!1d40.6381!2d-103.20113!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.6381,-103.20113,3a,75y,90t/data=!3m4!1e1!3m2!1s9O46cVYQ0qA6k5bWlTzJRQ!2e0'
    },
    {//ホーチミン, ホー・チ・ミン (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDVDAlFw29TFvnItb2VJzeg!2m2!1d10.40441!2d107.18686!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.40441,107.18686,3a,75y,90t/data=!3m4!1e1!3m2!1sDVDAlFw29TFvnItb2VJzeg!2e0'
    },
    {//72 カミンズ・ストリート (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUqb02T_DN25cEcepdXcirA!2m2!1d-31.94822!2d141.44656!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.94822,141.44656,3a,75y,90t/data=!3m4!1e1!3m2!1sUqb02T_DN25cEcepdXcirA!2e0'
    },
    {//87 1st アベニュー (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saE4TlJTdTUas1KwOLPwCwA!2m2!1d-26.1414!2d28.14604!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.1414,28.14604,3a,75y,90t/data=!3m4!1e1!3m2!1saE4TlJTdTUas1KwOLPwCwA!2e0'
    },
    {//屏東 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0B450iq5zwUW46gzArLfUQ!2m2!1d22.70351!2d120.61097!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.70351,120.61097,3a,75y,90t/data=!3m4!1e1!3m2!1s0B450iq5zwUW46gzArLfUQ!2e0'
    },
    {//3156 ミルウォーキー・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skJKTTxcneZ7lMyi0HhKqww!2m2!1d41.6542!2d-83.47328!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.6542,-83.47328,3a,75y,90t/data=!3m4!1e1!3m2!1skJKTTxcneZ7lMyi0HhKqww!2e0'
    },
    {//11 ชุมชนฅลาฅข๊ง ซ. 4 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skvUA3j8R-9yNNbtuqYOF8g!2m2!1d13.07457!2d101.01219!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.07457,101.01219,3a,75y,90t/data=!3m4!1e1!3m2!1skvUA3j8R-9yNNbtuqYOF8g!2e0'
    },
    {//1494 リアシュエーロ通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7Ou5zDkkJ8Hcf77FWE6mSw!2m2!1d-5.10524!2d-42.81076!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-5.10524,-42.81076,3a,75y,90t/data=!3m4!1e1!3m2!1s7Ou5zDkkJ8Hcf77FWE6mSw!2e0'
    },
    {//西ベンガル (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB2MVKCjEic3N6Y2TvDQoVg!2m2!1d23.47465!2d88.66455!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.47465,88.66455,3a,75y,90t/data=!3m4!1e1!3m2!1sB2MVKCjEic3N6Y2TvDQoVg!2e0'
    },
    {//千葉市, 千葉県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sa6Mz9eJ5tJbvesJ4O4rUKw!2m2!1d35.64019!2d140.14785!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.64019,140.14785,3a,75y,90t/data=!3m4!1e1!3m2!1sa6Mz9eJ5tJbvesJ4O4rUKw!2e0'
    },
    {//桐生市, 群馬県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOiXdZGlpdPCQwq99UBY97A!2m2!1d36.3882!2d139.3348!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.3882,139.3348,3a,75y,90t/data=!3m4!1e1!3m2!1sOiXdZGlpdPCQwq99UBY97A!2e0'
    },
    {//402 イースト・ソルター・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIN2f1lEA6D6MQnF-jSrjdg!2m2!1d32.11954!2d-81.24178!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.11954,-81.24178,3a,75y,90t/data=!3m4!1e1!3m2!1sIN2f1lEA6D6MQnF-jSrjdg!2e0'
    },
    {//827 プレフェイト・アタイーデ・ノゲイラ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skSBASwcOXDXbmrXo7p15sw!2m2!1d-21.80233!2d-54.54266!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.80233,-54.54266,3a,75y,90t/data=!3m4!1e1!3m2!1skSBASwcOXDXbmrXo7p15sw!2e0'
    },
    {//400 ソイロ・ペレイラ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssfihbC9ncCAI_ybfgCqiGQ!2m2!1d-32.59475!2d-53.38492!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.59475,-53.38492,3a,75y,90t/data=!3m4!1e1!3m2!1ssfihbC9ncCAI_ybfgCqiGQ!2e0'
    },
    {//157 Rod. Duzentos e Cinqüenta (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF1dL_BStAWVuN4fA85pn7A!2m2!1d-28.64093!2d-49.22862!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.64093,-49.22862,3a,75y,90t/data=!3m4!1e1!3m2!1sF1dL_BStAWVuN4fA85pn7A!2e0'
    },
    {//ポットゥビル, 東部州 (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqTJfu7fZuztxwaAqUOUs2Q!2m2!1d6.87636!2d81.8188!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.87636,81.8188,3a,75y,90t/data=!3m4!1e1!3m2!1sqTJfu7fZuztxwaAqUOUs2Q!2e0'
    },
    {//478 カテドラル通り (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skLpcCOdGHXt5toIQBOYPow!2m2!1d48.4383!2d-68.50781!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.4383,-68.50781,3a,75y,90t/data=!3m4!1e1!3m2!1skLpcCOdGHXt5toIQBOYPow!2e0'
    },
    {//1026 ワーレン・プレイス・ノースウェスト (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUgr9VP_prX2BectERCmDvg!2m2!1d35.92707!2d-81.54137!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.92707,-81.54137,3a,75y,90t/data=!3m4!1e1!3m2!1sUgr9VP_prX2BectERCmDvg!2e0'
    },
    {//1733 ゴイアス通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skOn2T8OmwJGZUBWA1WgDhw!2m2!1d-17.89109!2d-51.71694!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.89109,-51.71694,3a,75y,90t/data=!3m4!1e1!3m2!1skOn2T8OmwJGZUBWA1WgDhw!2e0'
    },
    {//নুতুন অনন্তপুর মণ্ডলেরহাট রোড (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSspJiM5gbW9pQneGY6dOaQ!2m2!1d25.70259!2d89.66035!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.70259,89.66035,3a,75y,90t/data=!3m4!1e1!3m2!1sSspJiM5gbW9pQneGY6dOaQ!2e0'
    },
    {//144 セクシオン 64 (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq7SkisoJh18XRELNbAc0wg!2m2!1d25.65927!2d-100.0945!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.65927,-100.0945,3a,75y,90t/data=!3m4!1e1!3m2!1sq7SkisoJh18XRELNbAc0wg!2e0'
    },
    {//ジャカルタ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scQcoj32jAstjhXezuhq_2g!2m2!1d-6.16661!2d106.96296!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.16661,106.96296,3a,75y,90t/data=!3m4!1e1!3m2!1scQcoj32jAstjhXezuhq_2g!2e0'
    },
    {//ロード・ナンバー 20 (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sua9hyjeFhs_lOLiUBB-W9Q!2m2!1d22.83628!2d86.19897!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.83628,86.19897,3a,75y,90t/data=!3m4!1e1!3m2!1sua9hyjeFhs_lOLiUBB-W9Q!2e0'
    },
    {//行橋市, 福岡県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slue6aQj4n4c3qmFTG3bulA!2m2!1d33.73528!2d130.96869!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.73528,130.96869,3a,75y,90t/data=!3m4!1e1!3m2!1slue6aQj4n4c3qmFTG3bulA!2e0'
    },
    {//1500 グリーンブライアー・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRaruEbu4SSpl34gmWUenpQ!2m2!1d35.27873!2d-77.59836!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.27873,-77.59836,3a,75y,90t/data=!3m4!1e1!3m2!1sRaruEbu4SSpl34gmWUenpQ!2e0'
    },
    {//2032 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sN4EJyJD0p77mGFM2MVgJOw!2m2!1d17.59!2d104.34968!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.59,104.34968,3a,75y,90t/data=!3m4!1e1!3m2!1sN4EJyJD0p77mGFM2MVgJOw!2e0'
    },
    {//ダベンポート, フロリダ州 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJiwo-WmDE-8Ac7bTz1hOZQ!2m2!1d28.34013!2d-81.6642!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.34013,-81.6642,3a,75y,90t/data=!3m4!1e1!3m2!1sJiwo-WmDE-8Ac7bTz1hOZQ!2e0'
    },
    {//27 ニュー・イングランド・ロード (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9H_rJ-wvWVCGLdWtIcP_jA!2m2!1d-29.61333!2d30.39725!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.61333,30.39725,3a,75y,90t/data=!3m4!1e1!3m2!1s9H_rJ-wvWVCGLdWtIcP_jA!2e0'
    },
    {//705 オアハカ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCw_sFIavoydTe5PdH7JJrg!2m2!1d26.92022!2d-101.46262!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.92022,-101.46262,3a,75y,90t/data=!3m4!1e1!3m2!1sCw_sFIavoydTe5PdH7JJrg!2e0'
    },
    {//壱岐市, 長崎県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPNI2uyhyQvz-582dWYLJow!2m2!1d33.79933!2d129.73856!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.79933,129.73856,3a,75y,90t/data=!3m4!1e1!3m2!1sPNI2uyhyQvz-582dWYLJow!2e0'
    },
    {//28 メープル・アベニュー (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2PqB5MpGJ2w5oVVZkqHIXA!2m2!1d41.71845!2d-73.95576!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.71845,-73.95576,3a,75y,90t/data=!3m4!1e1!3m2!1s2PqB5MpGJ2w5oVVZkqHIXA!2e0'
    },
    {//プヨ, パスタサ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNOeq4vbd-50UBy-gweeo4w!2m2!1d-1.50082!2d-78.00832!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.50082,-78.00832,3a,75y,90t/data=!3m4!1e1!3m2!1sNOeq4vbd-50UBy-gweeo4w!2e0'
    },
    {//ジューンジュヌ, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sD9tqKoy0MvEanrQGDr4pig!2m2!1d28.13799!2d75.39481!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.13799,75.39481,3a,75y,90t/data=!3m4!1e1!3m2!1sD9tqKoy0MvEanrQGDr4pig!2e0'
    },
    {//130 フエンテ・デ・ティボリ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snfMTAH3D2mYOspt4P2Yw2Q!2m2!1d25.78903!2d-100.31446!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.78903,-100.31446,3a,75y,90t/data=!3m4!1e1!3m2!1snfMTAH3D2mYOspt4P2Yw2Q!2e0'
    },
    {//コリンズ・ブールバード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz5kNKh5l_859oCcNBAyQ7g!2m2!1d41.86529!2d-80.78063!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.86529,-80.78063,3a,75y,90t/data=!3m4!1e1!3m2!1sz5kNKh5l_859oCcNBAyQ7g!2e0'
    },
    {//32通り (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv12Owcx-sE4hNCmRWYgEHA!2m2!1d-2.23965!2d-80.91545!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.23965,-80.91545,3a,75y,90t/data=!3m4!1e1!3m2!1sv12Owcx-sE4hNCmRWYgEHA!2e0'
    },
    {//31 Đ. Trần Quý Câp (ベトナム)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2nCy92u5oWuJHDMskxfjYg!2m2!1d13.08488!2d109.30534!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.08488,109.30534,3a,75y,90t/data=!3m4!1e1!3m2!1s2nCy92u5oWuJHDMskxfjYg!2e0'
    },
    {//10664 ヨーク・ハウス・ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEu8D8U_1AKu2iyGhKkr_Dg!2m2!1d42.41025!2d-87.83859!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.41025,-87.83859,3a,75y,90t/data=!3m4!1e1!3m2!1sEu8D8U_1AKu2iyGhKkr_Dg!2e0'
    },
    {//120 グッド・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svsQ3ujpW2BzLXuE0xMD4PA!2m2!1d29.79664!2d-90.81485!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.79664,-90.81485,3a,75y,90t/data=!3m4!1e1!3m2!1svsQ3ujpW2BzLXuE0xMD4PA!2e0'
    },
    {//24 T-71 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-HeIDiGua1xuTjNSzNvObA!2m2!1d-40.32517!2d-72.95289!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-40.32517,-72.95289,3a,75y,90t/data=!3m4!1e1!3m2!1s-HeIDiGua1xuTjNSzNvObA!2e0'
    },
    {//1833 ビンテージ・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNHEd4MgBpRjCv8FWPPTGQw!2m2!1d33.15436!2d-97.08114!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.15436,-97.08114,3a,75y,90t/data=!3m4!1e1!3m2!1sNHEd4MgBpRjCv8FWPPTGQw!2e0'
    },
    {//キングストン, マサチューセッツ州 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7ZVNzinNTyBo9ftNxONxlQ!2m2!1d42.00628!2d-70.73115!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.00628,-70.73115,3a,75y,90t/data=!3m4!1e1!3m2!1s7ZVNzinNTyBo9ftNxONxlQ!2e0'
    },
    {//1042 ゼネラル・カスター・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siai7TgyqdQjJGr5ZUQ6zSA!2m2!1d38.86867!2d-99.31373!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.86867,-99.31373,3a,75y,90t/data=!3m4!1e1!3m2!1siai7TgyqdQjJGr5ZUQ6zSA!2e0'
    },
    {//Ciampea, 西ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svnrfSoIqrUdPlylxpPsZVA!2m2!1d-6.57162!2d106.71727!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.57162,106.71727,3a,75y,90t/data=!3m4!1e1!3m2!1svnrfSoIqrUdPlylxpPsZVA!2e0'
    },
    {//SH 34 (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5_hba-a4SPY-L7VdRtlPug!2m2!1d26.03489!2d82.9096!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.03489,82.9096,3a,75y,90t/data=!3m4!1e1!3m2!1s5_hba-a4SPY-L7VdRtlPug!2e0'
    },
    {//ロス・アラモス通り (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sE-UYwXHeZ5DRnZZn0wY9vA!2m2!1d-1.0232!2d-79.46763!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.0232,-79.46763,3a,75y,90t/data=!3m4!1e1!3m2!1sE-UYwXHeZ5DRnZZn0wY9vA!2e0'
    },
    {//769 モンタナ・アベニュー・サウスウェスト (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6EUwCNRy42w2C0ZK-qurfw!2m2!1d44.35761!2d-98.22411!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.35761,-98.22411,3a,75y,90t/data=!3m4!1e1!3m2!1s6EUwCNRy42w2C0ZK-qurfw!2e0'
    },
    {//NR18 (ルワンダ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxJlMjtqZgoxAO7nCg5xjDg!2m2!1d-1.70191!2d29.26319!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.70191,29.26319,3a,75y,90t/data=!3m4!1e1!3m2!1sxJlMjtqZgoxAO7nCg5xjDg!2e0'
    },
    {//ブエノス・アイレス通り (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-HZQ1DvJ_qfiycWqQvQcCQ!2m2!1d8.78983!2d-82.42836!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.78983,-82.42836,3a,75y,90t/data=!3m4!1e1!3m2!1s-HZQ1DvJ_qfiycWqQvQcCQ!2e0'
    },
    {//セアラー州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfOzbweSZ_EIB7ixhqEIsww!2m2!1d-3.59494!2d-38.95363!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.59494,-38.95363,3a,75y,90t/data=!3m4!1e1!3m2!1sfOzbweSZ_EIB7ixhqEIsww!2e0'
    },
    {//ਸਮਾਣਾ ਦਿਹਾਤੀ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4csPJzRw7CZGvR06KTBvSg!2m2!1d30.14311!2d76.20653!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.14311,76.20653,3a,75y,90t/data=!3m4!1e1!3m2!1s4csPJzRw7CZGvR06KTBvSg!2e0'
    },
    {//バランテス通り (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXCj3GEKI5EIcPrIPVVxF9A!2m2!1d10.09962!2d-84.31094!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.09962,-84.31094,3a,75y,90t/data=!3m4!1e1!3m2!1sXCj3GEKI5EIcPrIPVVxF9A!2e0'
    },
    {//50 Jl. Ringroad (カリマンタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCqZW3HYfU6eHGyIhbrw5iA!2m2!1d-0.94295!2d114.88397!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.94295,114.88397,3a,75y,90t/data=!3m4!1e1!3m2!1sCqZW3HYfU6eHGyIhbrw5iA!2e0'
    },
    {//463 7月18日 (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGanh1LeqXj6KZppL5GTTBw!2m2!1d27.37039!2d-109.9027!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.37039,-109.9027,3a,75y,90t/data=!3m4!1e1!3m2!1sGanh1LeqXj6KZppL5GTTBw!2e0'
    },
    {//メウッドプール・カスバ, ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg9ay8toR-7wRHUmfNFHdVA!2m2!1d29.14277!2d78.27401!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.14277,78.27401,3a,75y,90t/data=!3m4!1e1!3m2!1sg9ay8toR-7wRHUmfNFHdVA!2e0'
    },
    {//シカゴ, イリノイ州 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sS8uNSnoT4Li-fp0V95WL2A!2m2!1d42.00736!2d-87.67954!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.00736,-87.67954,3a,75y,90t/data=!3m4!1e1!3m2!1sS8uNSnoT4Li-fp0V95WL2A!2e0'
    },
    {//75 Sur2 カレーラ 40 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHXSQnZKrAMDDdaDLFwXOFg!2m2!1d6.1459!2d-75.61617!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.1459,-75.61617,3a,75y,90t/data=!3m4!1e1!3m2!1sHXSQnZKrAMDDdaDLFwXOFg!2e0'
    },
    {//ディバー・アル＝バイア, ムサンダム (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4pBP9ZKGLkinW5ETfP7uHw!2m2!1d25.63546!2d56.25539!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.63546,56.25539,3a,75y,90t/data=!3m4!1e1!3m2!1s4pBP9ZKGLkinW5ETfP7uHw!2e0'
    },
    {//西ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svq9ep9YKo84xzeJI9kGuYw!2m2!1d-6.93117!2d107.77071!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.93117,107.77071,3a,75y,90t/data=!3m4!1e1!3m2!1svq9ep9YKo84xzeJI9kGuYw!2e0'
    },
    {//29 8 ベント・ポルト通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smyutZm83krYWZ0fYHzTHvw!2m2!1d-14.42312!2d-56.43816!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.42312,-56.43816,3a,75y,90t/data=!3m4!1e1!3m2!1smyutZm83krYWZ0fYHzTHvw!2e0'
    },
    {//1602 Jalan Teberau 2 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s003-unEdlcIxbNEYL-iUGQ!2m2!1d3.1682!2d101.75619!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.1682,101.75619,3a,75y,90t/data=!3m4!1e1!3m2!1s003-unEdlcIxbNEYL-iUGQ!2e0'
    },
    {//2220 ジェイコブ・アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1lTVfVi3OCKwLp6nmb-2kA!2m2!1d45.3136!2d-118.07978!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.3136,-118.07978,3a,75y,90t/data=!3m4!1e1!3m2!1s1lTVfVi3OCKwLp6nmb-2kA!2e0'
    },
    {//ハンソン・レイク・ロード (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4PsGzGW_7SM_u6C3iGTB2w!2m2!1d53.99804!2d-104.66058!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.99804,-104.66058,3a,75y,90t/data=!3m4!1e1!3m2!1s4PsGzGW_7SM_u6C3iGTB2w!2e0'
    },
    {//176 MA-2 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s67iLuY8IUiYw0p8ghriUTw!2m2!1d42.62863!2d-72.86878!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.62863,-72.86878,3a,75y,90t/data=!3m4!1e1!3m2!1s67iLuY8IUiYw0p8ghriUTw!2e0'
    },
    {//コリエンテス (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUd3A1pQl-N3QYEi44iuyUQ!2m2!1d-29.17458!2d-67.4988!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.17458,-67.4988,3a,75y,90t/data=!3m4!1e1!3m2!1sUd3A1pQl-N3QYEi44iuyUQ!2e0'
    },
    {//チトレ, ヘレラ (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shT2LlFB6qtuLFe9p2s9CtQ!2m2!1d7.95573!2d-80.41689!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.95573,-80.41689,3a,75y,90t/data=!3m4!1e1!3m2!1shT2LlFB6qtuLFe9p2s9CtQ!2e0'
    },
    {//478 ジェスマー・プレイス (ブリティッシュコロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxJXC_gHaefigSCHw9NsMSQ!2m2!1d50.00546!2d-125.24526!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.00546,-125.24526,3a,75y,90t/data=!3m4!1e1!3m2!1sxJXC_gHaefigSCHw9NsMSQ!2e0'
    },
    {//187 クローバー・プレイス (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXpr1TXQmR5JmyDWzBVZ-8w!2m2!1d43.43654!2d-80.43832!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.43654,-80.43832,3a,75y,90t/data=!3m4!1e1!3m2!1sXpr1TXQmR5JmyDWzBVZ-8w!2e0'
    },
    {//1763 ズーニー・ドライブ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smORYYv1LUiEWhLiyxUMqKA!2m2!1d44.77873!2d-106.96503!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.77873,-106.96503,3a,75y,90t/data=!3m4!1e1!3m2!1smORYYv1LUiEWhLiyxUMqKA!2e0'
    },
    {//中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sh5xG67pl5qOWvV9KoGAY5g!2m2!1d-7.47156!2d108.77895!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.47156,108.77895,3a,75y,90t/data=!3m4!1e1!3m2!1sh5xG67pl5qOWvV9KoGAY5g!2e0'
    },
    {//ディウルベル (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-DrhO1C0szknSDuw31WG1Q!2m2!1d14.74465!2d-16.5138!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.74465,-16.5138,3a,75y,90t/data=!3m4!1e1!3m2!1s-DrhO1C0szknSDuw31WG1Q!2e0'
    },
    {//6 八連路一段198巷 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRQaxppfmUXZ5xvHK_y4K9Q!2m2!1d25.08125!2d121.64238!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.08125,121.64238,3a,75y,90t/data=!3m4!1e1!3m2!1sRQaxppfmUXZ5xvHK_y4K9Q!2e0'
    },
    {//2418 エステバン・バカ・カルデロン通り (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5t4X46YYTfjBRAk3S632SQ!2m2!1d27.47703!2d-99.52401!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.47703,-99.52401,3a,75y,90t/data=!3m4!1e1!3m2!1s5t4X46YYTfjBRAk3S632SQ!2e0'
    },
    {//サン・アンドレス通り (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI2MwebBoB9onXiH4h1474Q!2m2!1d9.37797!2d-83.69818!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.37797,-83.69818,3a,75y,90t/data=!3m4!1e1!3m2!1sI2MwebBoB9onXiH4h1474Q!2e0'
    },
    {//251 チャーチ・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6CDGqyLp7jgiDtWyvRr8Uw!2m2!1d34.72393!2d-82.78027!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.72393,-82.78027,3a,75y,90t/data=!3m4!1e1!3m2!1s6CDGqyLp7jgiDtWyvRr8Uw!2e0'
    },
    {//1142 イースト・デル・リオ・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw6sTaEQG-iwqq5tRObSswQ!2m2!1d33.31561!2d-111.82218!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.31561,-111.82218,3a,75y,90t/data=!3m4!1e1!3m2!1sw6sTaEQG-iwqq5tRObSswQ!2e0'
    },
    {//15 ハプール - モディナガー・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shdGnxBYIQS3ECvpTwQDn4g!2m2!1d28.83567!2d77.5827!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.83567,77.5827,3a,75y,90t/data=!3m4!1e1!3m2!1shdGnxBYIQS3ECvpTwQDn4g!2e0'
    },
    {//71-73 CT-82 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL-3DMyj03fZQysWnpMoR9w!2m2!1d41.52367!2d-72.08155!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.52367,-72.08155,3a,75y,90t/data=!3m4!1e1!3m2!1sL-3DMyj03fZQysWnpMoR9w!2e0'
    },
    {//Kapiti Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slN8ET7hDtkf7GAhZhkmnKw!2m2!1d-40.90339!2d174.9944!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-40.90339,174.9944,3a,75y,90t/data=!3m4!1e1!3m2!1slN8ET7hDtkf7GAhZhkmnKw!2e0'
    },
    {//25 マンサナス通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM78Q_MN7aOvro-mKOFQ6wg!2m2!1d16.74279!2d-92.621!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.74279,-92.621,3a,75y,90t/data=!3m4!1e1!3m2!1sM78Q_MN7aOvro-mKOFQ6wg!2e0'
    },
    {//307 ライラック・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seO0Q3mgTjOvtj8pkkXgutg!2m2!1d43.19593!2d-112.35177!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.19593,-112.35177,3a,75y,90t/data=!3m4!1e1!3m2!1seO0Q3mgTjOvtj8pkkXgutg!2e0'
    },
    {//5620 ベリー・リッジ・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHIwL6RGwMPNZLElriHbQKQ!2m2!1d35.30659!2d-80.67076!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.30659,-80.67076,3a,75y,90t/data=!3m4!1e1!3m2!1sHIwL6RGwMPNZLElriHbQKQ!2e0'
    },
    {//316 ノースクレスト・ドライブ (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQWQKzFDzZxyU_pThSWP3_A!2m2!1d39.35978!2d-84.29147!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.35978,-84.29147,3a,75y,90t/data=!3m4!1e1!3m2!1sQWQKzFDzZxyU_pThSWP3_A!2e0'
    },
    {//89 Riccarton Rd W (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sA1skmp9mrpMODyvJjS3rNA!2m2!1d-45.8842!2d170.32808!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-45.8842,170.32808,3a,75y,90t/data=!3m4!1e1!3m2!1sA1skmp9mrpMODyvJjS3rNA!2e0'
    },
    {//1209 ラン・オー・リヴィエール・ノール (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0MrPhQkLyvEMsydS12kU-g!2m2!1d45.49523!2d-72.90145!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.49523,-72.90145,3a,75y,90t/data=!3m4!1e1!3m2!1s0MrPhQkLyvEMsydS12kU-g!2e0'
    },
    {//327 サリーナ・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sopBBqWFhBx7zjhx7ek4e7Q!2m2!1d28.6716!2d-81.34644!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.6716,-81.34644,3a,75y,90t/data=!3m4!1e1!3m2!1sopBBqWFhBx7zjhx7ek4e7Q!2e0'
    },
    {//ダーグ・ラジャーラ・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-Qo9ysjq9sDtABDh--8m2g!2m2!1d20.94986!2d81.29473!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.94986,81.29473,3a,75y,90t/data=!3m4!1e1!3m2!1s-Qo9ysjq9sDtABDh--8m2g!2e0'
    },
    {//ウラン・ウデ, ブリヤート共和国 (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1o4NdBIdHGAqzzqq7IAxQg!2m2!1d51.81119!2d107.61595!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.81119,107.61595,3a,75y,90t/data=!3m4!1e1!3m2!1s1o4NdBIdHGAqzzqq7IAxQg!2e0'
    },
    {//I-20 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHZHLeSebsUiOXYR5ptFmKg!2m2!1d33.58248!2d-86.02673!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.58248,-86.02673,3a,75y,90t/data=!3m4!1e1!3m2!1sHZHLeSebsUiOXYR5ptFmKg!2e0'
    },
    {//ベビロン・ノースポート・エクスプレスウェイ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHfZYHYaWfAC6sq9cLV7iQg!2m2!1d40.72147!2d-73.31411!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.72147,-73.31411,3a,75y,90t/data=!3m4!1e1!3m2!1sHfZYHYaWfAC6sq9cLV7iQg!2e0'
    },
    {//アマースト, マサチューセッツ州 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sycOZSx3D9RmiH_-ssSH5og!2m2!1d42.37993!2d-72.53447!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.37993,-72.53447,3a,75y,90t/data=!3m4!1e1!3m2!1sycOZSx3D9RmiH_-ssSH5og!2e0'
    },
    {//Jl. Kenangan (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdKznGgd_lBMbA-cAytkW_Q!2m2!1d-8.85195!2d121.64787!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.85195,121.64787,3a,75y,90t/data=!3m4!1e1!3m2!1sdKznGgd_lBMbA-cAytkW_Q!2e0'
    },
];
