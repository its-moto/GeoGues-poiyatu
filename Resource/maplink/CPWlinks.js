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
    {//スリガオ - ダヴァオ・コースタル・ロード (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl5IjMQslXogSjC3zKz6duQ!2m2!1d7.73419!2d126.5178!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.73419,126.5178,3a,75y,90t/data=!3m4!1e1!3m2!1sl5IjMQslXogSjC3zKz6duQ!2e0'
    },
    {//1101 エイラス通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOUDbfe_TwMHrtuSL2w-xUg!2m2!1d41.43353!2d-8.31522!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.43353,-8.31522,3a,75y,90t/data=!3m4!1e1!3m2!1sOUDbfe_TwMHrtuSL2w-xUg!2e0'
    },
    {//9 パッペルアレー (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYqlcJwoLyXokgaB_IePpmA!2m2!1d48.37736!2d9.72797!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.37736,9.72797,3a,75y,90t/data=!3m4!1e1!3m2!1sYqlcJwoLyXokgaB_IePpmA!2e0'
    },
    {//バンドーダ, ゴア (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srBAjKzNPl4SJMJ6eWTE1Mw!2m2!1d15.41799!2d73.98299!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.41799,73.98299,3a,75y,90t/data=!3m4!1e1!3m2!1srBAjKzNPl4SJMJ6eWTE1Mw!2e0'
    },
    {//10 ヤナ・パブワ II (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sllft8cESJis0ytm0JsedWQ!2m2!1d49.89561!2d21.05855!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.89561,21.05855,3a,75y,90t/data=!3m4!1e1!3m2!1sllft8cESJis0ytm0JsedWQ!2e0'
    },
    {//Koskitie (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8oO7smfztbdgDNtLELCP0Q!2m2!1d62.48727!2d22.75304!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.48727,22.75304,3a,75y,90t/data=!3m4!1e1!3m2!1s8oO7smfztbdgDNtLELCP0Q!2e0'
    },
    {//ターブア, コインブラ (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srGqTG7NopN0BMtnFhVuIYg!2m2!1d40.33724!2d-8.02906!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.33724,-8.02906,3a,75y,90t/data=!3m4!1e1!3m2!1srGqTG7NopN0BMtnFhVuIYg!2e0'
    },
    {//パラナ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siFSBUbF58JvmJ2LFN0z7rA!2m2!1d-24.60258!2d-53.52073!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.60258,-53.52073,3a,75y,90t/data=!3m4!1e1!3m2!1siFSBUbF58JvmJ2LFN0z7rA!2e0'
    },
    {//2 ペレウロク・コマロヴァ (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8whB9o5k6b9sqwnihzy0Ww!2m2!1d53.06762!2d60.66062!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.06762,60.66062,3a,75y,90t/data=!3m4!1e1!3m2!1s8whB9o5k6b9sqwnihzy0Ww!2e0'
    },
    {//3 クシェンザ・プラワタ・スタニスワバ・スウォンキ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srLT6lUraskqAGNoUTdLvMQ!2m2!1d49.67935!2d19.18808!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.67935,19.18808,3a,75y,90t/data=!3m4!1e1!3m2!1srLT6lUraskqAGNoUTdLvMQ!2e0'
    },
    {//16 トラヴェルサ・ジュゼッペ・マッジーニ (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxmQag77aXM3J-ucJVDLk2Q!2m2!1d40.8746!2d14.43346!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.8746,14.43346,3a,75y,90t/data=!3m4!1e1!3m2!1sxmQag77aXM3J-ucJVDLk2Q!2e0'
    },
    {//オシコト (ナミビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDaSbiiwHloz4wHsIvz_9Ow!2m2!1d-18.35008!2d16.58355!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.35008,16.58355,3a,75y,90t/data=!3m4!1e1!3m2!1sDaSbiiwHloz4wHsIvz_9Ow!2e0'
    },
    {//199 ポーター・ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqVbdFZEabdToOtw1Qnu6WQ!2m2!1d42.46249!2d-71.05242!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.46249,-71.05242,3a,75y,90t/data=!3m4!1e1!3m2!1sqVbdFZEabdToOtw1Qnu6WQ!2e0'
    },
    {//PU-130 (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2iOiG8zkAvb9VKZJwCrhzA!2m2!1d-16.26549!2d-69.07947!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.26549,-69.07947,3a,75y,90t/data=!3m4!1e1!3m2!1s2iOiG8zkAvb9VKZJwCrhzA!2e0'
    },
    {//Jl. Bangbayang (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm_K5f9ckMBQCTVfmeanaDA!2m2!1d-6.78226!2d106.76989!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.78226,106.76989,3a,75y,90t/data=!3m4!1e1!3m2!1sm_K5f9ckMBQCTVfmeanaDA!2e0'
    },
    {//ペンザ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz-MWEXFrg4SVk4mdx1TyHg!2m2!1d53.19878!2d45.00287!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.19878,45.00287,3a,75y,90t/data=!3m4!1e1!3m2!1sz-MWEXFrg4SVk4mdx1TyHg!2e0'
    },
    {//トカンティンス (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7XXoeYTUuseBnNmUU5DzmA!2m2!1d-10.59517!2d-49.20759!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.59517,-49.20759,3a,75y,90t/data=!3m4!1e1!3m2!1s7XXoeYTUuseBnNmUU5DzmA!2e0'
    },
    {//カンサラッド, ケーララ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMQyEeJknBi0z5kjom0ch-g!2m2!1d11.54991!2d75.85544!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.54991,75.85544,3a,75y,90t/data=!3m4!1e1!3m2!1sMQyEeJknBi0z5kjom0ch-g!2e0'
    },
    {//680 クープーレ・レクツ (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sh6dvUrhdi_SLxFLIjxriSA!2m2!1d51.05491!2d3.70966!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.05491,3.70966,3a,75y,90t/data=!3m4!1e1!3m2!1sh6dvUrhdi_SLxFLIjxriSA!2e0'
    },
    {//23 Hupakankorvenkatu (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svY69Wo9uA2xUHIvxdf1rxQ!2m2!1d61.43538!2d23.83352!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.43538,23.83352,3a,75y,90t/data=!3m4!1e1!3m2!1svY69Wo9uA2xUHIvxdf1rxQ!2e0'
    },
    {//714 ダッドリー・ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKthozXcEKeIUmTKcRAQxuw!2m2!1d41.45108!2d-75.61302!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.45108,-75.61302,3a,75y,90t/data=!3m4!1e1!3m2!1sKthozXcEKeIUmTKcRAQxuw!2e0'
    },
    {//30 ニテローイ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM8YIPgF9830XSriNiPfL_A!2m2!1d-7.18042!2d-48.20235!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.18042,-48.20235,3a,75y,90t/data=!3m4!1e1!3m2!1sM8YIPgF9830XSriNiPfL_A!2e0'
    },
    {//サン・ラファエル, メンドーサ州 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOwon43LEM-4UnHJJo1AU7g!2m2!1d-34.60084!2d-68.31468!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.60084,-68.31468,3a,75y,90t/data=!3m4!1e1!3m2!1sOwon43LEM-4UnHJJo1AU7g!2e0'
    },
    {//68 シェルトン・ロード (北アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suN2oLzUV1k1eZZcC3K8Q9A!2m2!1d55.06377!2d-6.29905!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.06377,-6.29905,3a,75y,90t/data=!3m4!1e1!3m2!1suN2oLzUV1k1eZZcC3K8Q9A!2e0'
    },
    {//4 Jl. Adipati Honggodjojo (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf1IG_q33tQfvOBX1kipznw!2m2!1d-6.70635!2d111.35159!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.70635,111.35159,3a,75y,90t/data=!3m4!1e1!3m2!1sf1IG_q33tQfvOBX1kipznw!2e0'
    },
    {//1229 Merle Hay Rd (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV_y-9d_5XpD-LdV5YG4Jgw!2m2!1d41.6014!2d-93.69742!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.6014,-93.69742,3a,75y,90t/data=!3m4!1e1!3m2!1sV_y-9d_5XpD-LdV5YG4Jgw!2e0'
    },
    {//Makedonia Thraki (ギリシャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNO-Um2HlYGl42_47pp7U_Q!2m2!1d40.25424!2d23.28935!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.25424,23.28935,3a,75y,90t/data=!3m4!1e1!3m2!1sNO-Um2HlYGl42_47pp7U_Q!2e0'
    },
    {//ランブラ・アンドレス・モンターニョ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw7MV2aqJlcZXCsw5W0ZbOQ!2m2!1d-33.11868!2d-58.32757!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.11868,-58.32757,3a,75y,90t/data=!3m4!1e1!3m2!1sw7MV2aqJlcZXCsw5W0ZbOQ!2e0'
    },
    {//1409 ウェスト・オハイオ・アベニュー (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9la6EWOypks6mISEKqjYjA!2m2!1d31.99865!2d-102.09107!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.99865,-102.09107,3a,75y,90t/data=!3m4!1e1!3m2!1s9la6EWOypks6mISEKqjYjA!2e0'
    },
    {//Trešnjevički put (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDtyh13ZT76jMCOE6SlljUQ!2m2!1d44.28848!2d20.54552!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.28848,20.54552,3a,75y,90t/data=!3m4!1e1!3m2!1sDtyh13ZT76jMCOE6SlljUQ!2e0'
    },
    {//বঙাইগাঁও, アッサム (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKuYZT1n5TXOSJ73X3JsCMA!2m2!1d26.4689!2d90.56038!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.4689,90.56038,3a,75y,90t/data=!3m4!1e1!3m2!1sKuYZT1n5TXOSJ73X3JsCMA!2e0'
    },
    {//ビラ・ベリャ, エスピリト・サント (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYJJL3LVXKtdrVFn9-bvJdg!2m2!1d-20.33687!2d-40.30209!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.33687,-40.30209,3a,75y,90t/data=!3m4!1e1!3m2!1sYJJL3LVXKtdrVFn9-bvJdg!2e0'
    },
    {//Google マップ (マダガスカル (北部))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFLT76ftROCMsp7MS5DaqtA!2m2!1d-13.68506!2d48.4533!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.68506,48.4533,3a,75y,90t/data=!3m4!1e1!3m2!1sFLT76ftROCMsp7MS5DaqtA!2e0'
    },
    {//レアル・ア・サンタ・マリア・ナティビタス通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sE4xYu5d5zK7hdbiCl3CauQ!2m2!1d19.20248!2d-99.62591!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.20248,-99.62591,3a,75y,90t/data=!3m4!1e1!3m2!1sE4xYu5d5zK7hdbiCl3CauQ!2e0'
    },
    {//アンクヤ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smCo9UgdJypZ8hAd_3j7img!2m2!1d1.35364!2d-77.52698!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.35364,-77.52698,3a,75y,90t/data=!3m4!1e1!3m2!1smCo9UgdJypZ8hAd_3j7img!2e0'
    },
    {//D16 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxijXCYDF1cmAv1qI9GZ6ow!2m2!1d47.15251!2d1.7984!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.15251,1.7984,3a,75y,90t/data=!3m4!1e1!3m2!1sxijXCYDF1cmAv1qI9GZ6ow!2e0'
    },
    {//2875 ワンカヨ通り (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMPhLQhuSbLy6brHpqO78Ow!2m2!1d-12.00689!2d-75.24162!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.00689,-75.24162,3a,75y,90t/data=!3m4!1e1!3m2!1sMPhLQhuSbLy6brHpqO78Ow!2e0'
    },
    {//4656 サウスウェスト 129th アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s42NBYOVrLqw2rCYf7ohlbg!2m2!1d25.72268!2d-80.40399!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.72268,-80.40399,3a,75y,90t/data=!3m4!1e1!3m2!1s42NBYOVrLqw2rCYf7ohlbg!2e0'
    },
    {//ワードール・ウェイ (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-tyIO48x0NH-tKLA7VVCiQ!2m2!1d54.85894!2d-1.81857!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.85894,-1.81857,3a,75y,90t/data=!3m4!1e1!3m2!1s-tyIO48x0NH-tKLA7VVCiQ!2e0'
    },
    {//52 Pantovčak (スロベニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1iFtprO5GW17MXydYMrmvw!2m2!1d45.81677!2d15.96096!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.81677,15.96096,3a,75y,90t/data=!3m4!1e1!3m2!1s1iFtprO5GW17MXydYMrmvw!2e0'
    },
    {//100 クライネ・ハールセカデ (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srV39rc3iMvvEslRxWqge3w!2m2!1d51.84407!2d4.97204!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.84407,4.97204,3a,75y,90t/data=!3m4!1e1!3m2!1srV39rc3iMvvEslRxWqge3w!2e0'
    },
    {//つがる市, 青森県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdBTnjJjQ4IT6a_KiIOi8aQ!2m2!1d40.80567!2d140.4284!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.80567,140.4284,3a,75y,90t/data=!3m4!1e1!3m2!1sdBTnjJjQ4IT6a_KiIOi8aQ!2e0'
    },
    {//12 プロスペクト 60-レチヤ・ッッスル (ロシア極東)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-dqiMfZZXtoiEXk_CIUYzQ!2m2!1d48.78526!2d132.93438!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.78526,132.93438,3a,75y,90t/data=!3m4!1e1!3m2!1s-dqiMfZZXtoiEXk_CIUYzQ!2e0'
    },
    {//140 ヴァウテル・アルブレヒト通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shUAljLd09qHA_f_oJwBjaw!2m2!1d-32.03249!2d-52.11176!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.03249,-52.11176,3a,75y,90t/data=!3m4!1e1!3m2!1shUAljLd09qHA_f_oJwBjaw!2e0'
    },
    {//499 ドウトール・コスタ・マルケース通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svkXLMEoD6Vkd_XmGsSE2UA!2m2!1d-20.94756!2d-54.95878!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.94756,-54.95878,3a,75y,90t/data=!3m4!1e1!3m2!1svkXLMEoD6Vkd_XmGsSE2UA!2e0'
    },
    {//38 R. Augusto Daros (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s41fGCPg8lO8Oyfcy_5B8qQ!2m2!1d-29.37066!2d-50.87758!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.37066,-50.87758,3a,75y,90t/data=!3m4!1e1!3m2!1s41fGCPg8lO8Oyfcy_5B8qQ!2e0'
    },
    {//25 Keyter St (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL_ck7dLWDrMw3FFP2nl5Og!2m2!1d-28.86626!2d27.87757!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.86626,27.87757,3a,75y,90t/data=!3m4!1e1!3m2!1sL_ck7dLWDrMw3FFP2nl5Og!2e0'
    },
    {//サハム, 北バーティナ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLAIbEiHKFkEufE_SJrkX7w!2m2!1d24.15688!2d56.88405!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.15688,56.88405,3a,75y,90t/data=!3m4!1e1!3m2!1sLAIbEiHKFkEufE_SJrkX7w!2e0'
    },
    {//53 N-2 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI_PmPwB8j_wufc7jslV-CQ!2m2!1d41.64784!2d1.13578!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.64784,1.13578,3a,75y,90t/data=!3m4!1e1!3m2!1sI_PmPwB8j_wufc7jslV-CQ!2e0'
    },
    {//80 Nygatan (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4B2T39iWQqqCeKJR4GbdRw!2m2!1d65.32483!2d21.46701!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@65.32483,21.46701,3a,75y,90t/data=!3m4!1e1!3m2!1s4B2T39iWQqqCeKJR4GbdRw!2e0'
    },
    {//22 Guldsmedsvägen (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8dFmvnD67G6ChVvm2rJLrQ!2m2!1d60.65532!2d17.04919!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.65532,17.04919,3a,75y,90t/data=!3m4!1e1!3m2!1s8dFmvnD67G6ChVvm2rJLrQ!2e0'
    },
    {//276 Rua Jurunas (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8jGbc3XCdAxpv2XLxyDhxw!2m2!1d-22.35683!2d-46.95995!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.35683,-46.95995,3a,75y,90t/data=!3m4!1e1!3m2!1s8jGbc3XCdAxpv2XLxyDhxw!2e0'
    },
    {//SP-247 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syuZAUu_VazOFaYeDmvx_IA!2m2!1d-22.83013!2d-44.45781!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.83013,-44.45781,3a,75y,90t/data=!3m4!1e1!3m2!1syuZAUu_VazOFaYeDmvx_IA!2e0'
    },
    {//ES-436 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxZlOxAi2LQSPQnxFCIq9BA!2m2!1d-19.24618!2d-40.60151!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.24618,-40.60151,3a,75y,90t/data=!3m4!1e1!3m2!1sxZlOxAi2LQSPQnxFCIq9BA!2e0'
    },
    {//32 マルセイエーズ通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgXK4vFj5mAQ1UlVpxO5Z0w!2m2!1d44.84078!2d0.47367!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.84078,0.47367,3a,75y,90t/data=!3m4!1e1!3m2!1sgXK4vFj5mAQ1UlVpxO5Z0w!2e0'
    },
    {//1 ヴェルバーノ通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2cxiD99d_UbZydqb0Kgh0w!2m2!1d45.58041!2d8.63799!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.58041,8.63799,3a,75y,90t/data=!3m4!1e1!3m2!1s2cxiD99d_UbZydqb0Kgh0w!2e0'
    },
    {//1600 サウス 7th アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc7sP_w0AIsc5GjXIzE0Dww!2m2!1d33.48915!2d-88.41412!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.48915,-88.41412,3a,75y,90t/data=!3m4!1e1!3m2!1sc7sP_w0AIsc5GjXIzE0Dww!2e0'
    },
    {//ゴクスハイム, バイエルン (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHjETihWy0Z8GlozCPNZyWw!2m2!1d50.01827!2d10.29832!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.01827,10.29832,3a,75y,90t/data=!3m4!1e1!3m2!1sHjETihWy0Z8GlozCPNZyWw!2e0'
    },
    {//23 ソヴェツカヤ・ウーリツァ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5ozotjqcQk0sfzXKOuIVOw!2m2!1d52.27389!2d46.40133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.27389,46.40133,3a,75y,90t/data=!3m4!1e1!3m2!1s5ozotjqcQk0sfzXKOuIVOw!2e0'
    },
    {//エリアネ・バルボザ・デ・アンドラデ・シウヴァ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saxS9k90FJzQoicYuX95iRg!2m2!1d-21.62285!2d-51.1658!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.62285,-51.1658,3a,75y,90t/data=!3m4!1e1!3m2!1saxS9k90FJzQoicYuX95iRg!2e0'
    },
    {//27 メランヒトン通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxRtRRazUw9Bpz7Lwu7gC7w!2m2!1d50.97212!2d11.01827!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.97212,11.01827,3a,75y,90t/data=!3m4!1e1!3m2!1sxRtRRazUw9Bpz7Lwu7gC7w!2e0'
    },
    {//67 4024 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sY3lbs5AX_ZPPUJvvDGMXUQ!2m2!1d7.8548!2d98.33729!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.8548,98.33729,3a,75y,90t/data=!3m4!1e1!3m2!1sY3lbs5AX_ZPPUJvvDGMXUQ!2e0'
    },
    {//9 レアル通り (カナリア諸島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7q0Y0vEN_B6JWSm2JCmyBw!2m2!1d28.46364!2d-16.40895!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.46364,-16.40895,3a,75y,90t/data=!3m4!1e1!3m2!1s7q0Y0vEN_B6JWSm2JCmyBw!2e0'
    },
    {//2321 5月25日 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syB3-7alC_rfoxT1rgp5vqQ!2m2!1d-31.42866!2d-62.09206!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.42866,-62.09206,3a,75y,90t/data=!3m4!1e1!3m2!1syB3-7alC_rfoxT1rgp5vqQ!2e0'
    },
    {//72 セカンド・アベニュー (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUOEX1utvQL82V74K8pCMRQ!2m2!1d51.74763!2d0.47231!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.74763,0.47231,3a,75y,90t/data=!3m4!1e1!3m2!1sUOEX1utvQL82V74K8pCMRQ!2e0'
    },
    {//60 ダコタ・ドライブ (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4jTWzjjoThwHJR1bth0DaQ!2m2!1d53.74819!2d-2.88358!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.74819,-2.88358,3a,75y,90t/data=!3m4!1e1!3m2!1s4jTWzjjoThwHJR1bth0DaQ!2e0'
    },
    {//1445 43rd コート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSP9Kpe8C9LLA2hLcyub5Mg!2m2!1d27.62926!2d-80.43172!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.62926,-80.43172,3a,75y,90t/data=!3m4!1e1!3m2!1sSP9Kpe8C9LLA2hLcyub5Mg!2e0'
    },
    {//128 ライムンド・コスタ通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0Pi5bcOKd92zjZa3VpD7MA!2m2!1d-6.60247!2d-44.07563!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.60247,-44.07563,3a,75y,90t/data=!3m4!1e1!3m2!1s0Pi5bcOKd92zjZa3VpD7MA!2e0'
    },
    {//26 Ozorovská hlavná (チェコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUZoH5M7ArKq0HEKTwECIJA!2m2!1d48.72708!2d18.24434!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.72708,18.24434,3a,75y,90t/data=!3m4!1e1!3m2!1sUZoH5M7ArKq0HEKTwECIJA!2e0'
    },
    {//中スラウェシ (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIYIDfC3TOp7cpGDZJwjzqQ!2m2!1d-0.95302!2d122.78282!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.95302,122.78282,3a,75y,90t/data=!3m4!1e1!3m2!1sIYIDfC3TOp7cpGDZJwjzqQ!2e0'
    },
    {//Erlurimi (アイスランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suL48jt2bb0h87_w-xEXpJw!2m2!1d63.92636!2d-20.99094!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.92636,-20.99094,3a,75y,90t/data=!3m4!1e1!3m2!1suL48jt2bb0h87_w-xEXpJw!2e0'
    },
    {//1177 ノーヴェ・デ・マイオ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCfzS5aZR-k4UsEOPOUk4Mg!2m2!1d-11.42289!2d-58.75857!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.42289,-58.75857,3a,75y,90t/data=!3m4!1e1!3m2!1sCfzS5aZR-k4UsEOPOUk4Mg!2e0'
    },
    {//1434 6th ストリート・ノースウェスト (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbBcVMZwrz0Sgu4haKjAerw!2m2!1d30.89243!2d-84.21445!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.89243,-84.21445,3a,75y,90t/data=!3m4!1e1!3m2!1sbBcVMZwrz0Sgu4haKjAerw!2e0'
    },
    {//カプールタラー, パンジャーブ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s64z-LPxbLh3ABmeveJbMdg!2m2!1d31.38684!2d75.3856!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.38684,75.3856,3a,75y,90t/data=!3m4!1e1!3m2!1s64z-LPxbLh3ABmeveJbMdg!2e0'
    },
    {//ขก.1051 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbkKGS-Y2LOSbz-Mn8Xep6g!2m2!1d16.07576!2d102.71986!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.07576,102.71986,3a,75y,90t/data=!3m4!1e1!3m2!1sbkKGS-Y2LOSbz-Mn8Xep6g!2e0'
    },
    {//37726 US-10 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stvC0vJN0n6NZFeaTRJ4JIw!2m2!1d46.71276!2d-95.70424!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.71276,-95.70424,3a,75y,90t/data=!3m4!1e1!3m2!1stvC0vJN0n6NZFeaTRJ4JIw!2e0'
    },
    {//Chapmansgatan (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOseOhdbTSLhF9Y8x_eUWgg!2m2!1d56.16067!2d15.57136!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.16067,15.57136,3a,75y,90t/data=!3m4!1e1!3m2!1sOseOhdbTSLhF9Y8x_eUWgg!2e0'
    },
    {//40 デアーク・フェレンツ通り (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9gPTxrXfkjJSALpBL7N6Ug!2m2!1d47.8944!2d20.37701!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.8944,20.37701,3a,75y,90t/data=!3m4!1e1!3m2!1s9gPTxrXfkjJSALpBL7N6Ug!2e0'
    },
    {//トラヴェッサ・ド・ラージオ (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srQzBreqbezSE39KItRqE6g!2m2!1d-4.29467!2d-45.24102!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.29467,-45.24102,3a,75y,90t/data=!3m4!1e1!3m2!1srQzBreqbezSE39KItRqE6g!2e0'
    },
    {//22 キントリー・クレセント (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk8EFI2L3vrhDmraC0pKRZQ!2m2!1d-30.35627!2d153.08802!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.35627,153.08802,3a,75y,90t/data=!3m4!1e1!3m2!1sk8EFI2L3vrhDmraC0pKRZQ!2e0'
    },
    {//21 Jl. Pangeran Diponegoro (カリマンタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfijDmxwNwRLbwDjYIxMKbA!2m2!1d-2.69049!2d111.63507!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.69049,111.63507,3a,75y,90t/data=!3m4!1e1!3m2!1sfijDmxwNwRLbwDjYIxMKbA!2e0'
    },
    {//17 プリムローズ・ストリート (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGJ5f7K0M2hvMYmWiJYQOag!2m2!1d-27.07501!2d152.92964!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.07501,152.92964,3a,75y,90t/data=!3m4!1e1!3m2!1sGJ5f7K0M2hvMYmWiJYQOag!2e0'
    },
    {//2 バイテネス (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP2TelrbqehZvteoTS0yR7w!2m2!1d52.63147!2d6.21473!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.63147,6.21473,3a,75y,90t/data=!3m4!1e1!3m2!1sP2TelrbqehZvteoTS0yR7w!2e0'
    },
    {//Kabash (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM9LXPMxKotev-_WKKUV-kw!2m2!1d42.30184!2d21.35498!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.30184,21.35498,3a,75y,90t/data=!3m4!1e1!3m2!1sM9LXPMxKotev-_WKKUV-kw!2e0'
    },
    {//11 ジャクリーヌ・オリオール通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siRzOj1BPfuzZjw9Re93XsA!2m2!1d47.99928!2d2.71986!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.99928,2.71986,3a,75y,90t/data=!3m4!1e1!3m2!1siRzOj1BPfuzZjw9Re93XsA!2e0'
    },
    {//19 トンプキンズ・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1schpmvF0iYhdbBkEJRR_OdA!2m2!1d41.00179!2d-73.7885!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.00179,-73.7885,3a,75y,90t/data=!3m4!1e1!3m2!1schpmvF0iYhdbBkEJRR_OdA!2e0'
    },
    {//パルク通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNkkp39fa-NRkz4nc05SN0g!2m2!1d51.14102!2d3.33161!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.14102,3.33161,3a,75y,90t/data=!3m4!1e1!3m2!1sNkkp39fa-NRkz4nc05SN0g!2e0'
    },
    {//345 (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shGC2Efv1GnezZsQSgEGrYA!2m2!1d63.72242!2d15.80027!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.72242,15.80027,3a,75y,90t/data=!3m4!1e1!3m2!1shGC2Efv1GnezZsQSgEGrYA!2e0'
    },
    {//328 GO-237 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqgi-kr4vqZeuHyVoL9Zs6A!2m2!1d-14.46307!2d-48.4488!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.46307,-48.4488,3a,75y,90t/data=!3m4!1e1!3m2!1sqgi-kr4vqZeuHyVoL9Zs6A!2e0'
    },
    {//エレフテレス, Makedonia Thraki (ギリシャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0kzfg1DuHsW-0Yal3N2FvQ!2m2!1d40.84549!2d24.25049!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.84549,24.25049,3a,75y,90t/data=!3m4!1e1!3m2!1s0kzfg1DuHsW-0Yal3N2FvQ!2e0'
    },
    {//R465 (クロアチア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWOIpHtBOHUPvDmibByGQvQ!2m2!1d44.71323!2d18.08945!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.71323,18.08945,3a,75y,90t/data=!3m4!1e1!3m2!1sWOIpHtBOHUPvDmibByGQvQ!2e0'
    },
    {//320 イースト・シニック・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTWJ-QvHdRrTXi7G0hQbYxA!2m2!1d33.41883!2d-111.54362!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.41883,-111.54362,3a,75y,90t/data=!3m4!1e1!3m2!1sTWJ-QvHdRrTXi7G0hQbYxA!2e0'
    },
    {//801 サウス・キャルフーン・アベニュー (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_SRqL1_Q5oUETAFAGI9Uww!2m2!1d37.02746!2d-100.93556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.02746,-100.93556,3a,75y,90t/data=!3m4!1e1!3m2!1s_SRqL1_Q5oUETAFAGI9Uww!2e0'
    },
    {//1599 サウス・ストーン・マウンテン・リソニア・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7iXPZWz4THxiyVWgaXzq6g!2m2!1d33.75064!2d-84.15148!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.75064,-84.15148,3a,75y,90t/data=!3m4!1e1!3m2!1s7iXPZWz4THxiyVWgaXzq6g!2e0'
    },
    {//4 ギヨントゥ通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swN_FVtcQWsHVI8FEneFRHQ!2m2!1d44.39683!2d0.59214!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.39683,0.59214,3a,75y,90t/data=!3m4!1e1!3m2!1swN_FVtcQWsHVI8FEneFRHQ!2e0'
    },
    {//ウンドゥルハーン, ヘンティー (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUjr3NbeosALVRO5TEaAQwQ!2m2!1d47.32329!2d110.65699!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.32329,110.65699,3a,75y,90t/data=!3m4!1e1!3m2!1sUjr3NbeosALVRO5TEaAQwQ!2e0'
    },
    {//5 バラツコシ通り (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szKJvG7Gmg_UzGYXHJJwN9Q!2m2!1d48.09627!2d20.85873!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.09627,20.85873,3a,75y,90t/data=!3m4!1e1!3m2!1szKJvG7Gmg_UzGYXHJJwN9Q!2e0'
    },
    {//4 アトブブ・エジュラ・ロード (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz8u16FfTP976UjgeSh5CRQ!2m2!1d7.37722!2d-1.36234!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.37722,-1.36234,3a,75y,90t/data=!3m4!1e1!3m2!1sz8u16FfTP976UjgeSh5CRQ!2e0'
    },
    {//726 ピーク・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2TT2zFUdGOzENMf_Tvl1pA!2m2!1d38.94121!2d-85.87452!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.94121,-85.87452,3a,75y,90t/data=!3m4!1e1!3m2!1s2TT2zFUdGOzENMf_Tvl1pA!2e0'
    },
    {//ペデルナレス, マナビ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sREgNfk0BWnCDIAdcARCFxw!2m2!1d0.07458!2d-80.04227!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.07458,-80.04227,3a,75y,90t/data=!3m4!1e1!3m2!1sREgNfk0BWnCDIAdcARCFxw!2e0'
    },
    {//Fetveien (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spzJ6ReQjq8vERYJbQjlLOQ!2m2!1d59.93087!2d11.14322!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.93087,11.14322,3a,75y,90t/data=!3m4!1e1!3m2!1spzJ6ReQjq8vERYJbQjlLOQ!2e0'
    },
    {//906 パラウ通り (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdjXNX3yp2g0AL8OKcpvBew!2m2!1d28.69144!2d-100.52479!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.69144,-100.52479,3a,75y,90t/data=!3m4!1e1!3m2!1sdjXNX3yp2g0AL8OKcpvBew!2e0'
    },
    {//ル・テイユ, オーヴェルニュ＝ローヌ＝アルプ (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5xgwXa21snZ5CXIzDvYS1g!2m2!1d44.54268!2d4.67733!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.54268,4.67733,3a,75y,90t/data=!3m4!1e1!3m2!1s5xgwXa21snZ5CXIzDvYS1g!2e0'
    },
    {//301 ウォルナット・レーン (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNfPeIeoRZgT12VkKaK54tQ!2m2!1d41.99497!2d-87.9889!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.99497,-87.9889,3a,75y,90t/data=!3m4!1e1!3m2!1sNfPeIeoRZgT12VkKaK54tQ!2e0'
    },
    {//E25 (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0vAo980d00PM2OCxLwDFeA!2m2!1d46.28425!2d6.14504!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.28425,6.14504,3a,75y,90t/data=!3m4!1e1!3m2!1s0vAo980d00PM2OCxLwDFeA!2e0'
    },
    {//ランバイェケ (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDTd2ARNnCpb4HZqtKs-Mcg!2m2!1d-6.37355!2d-79.82899!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.37355,-79.82899,3a,75y,90t/data=!3m4!1e1!3m2!1sDTd2ARNnCpb4HZqtKs-Mcg!2e0'
    },
    {//40 R. Antônio Jorge de Azambuja e Souza (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIGPVN8DuSOf7ULpgGe9NtQ!2m2!1d-23.60043!2d-51.65214!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.60043,-51.65214,3a,75y,90t/data=!3m4!1e1!3m2!1sIGPVN8DuSOf7ULpgGe9NtQ!2e0'
    },
    {//40 Lysgårdsvegen (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCFmjF1297eGyJZvmoY4OFw!2m2!1d61.12823!2d10.48284!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.12823,10.48284,3a,75y,90t/data=!3m4!1e1!3m2!1sCFmjF1297eGyJZvmoY4OFw!2e0'
    },
    {//8 Gelincik Sk. (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s19CFlLv3f1vCDMQj4gharA!2m2!1d41.01391!2d28.59757!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.01391,28.59757,3a,75y,90t/data=!3m4!1e1!3m2!1s19CFlLv3f1vCDMQj4gharA!2e0'
    },
    {//1312 セグンダ通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz5DAVWaHmMysci_3Ku8SeQ!2m2!1d28.49028!2d-106.74569!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.49028,-106.74569,3a,75y,90t/data=!3m4!1e1!3m2!1sz5DAVWaHmMysci_3Ku8SeQ!2e0'
    },
    {//311 A ラス・カニャーダス・マルティネス (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ss9qOHy4cZ2JKjlfiWm2-dg!2m2!1d20.07472!2d-97.06594!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.07472,-97.06594,3a,75y,90t/data=!3m4!1e1!3m2!1ss9qOHy4cZ2JKjlfiWm2-dg!2e0'
    },
    {//21 Camp Valley Rd (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVmsE4VgTRxqTE1PyQff8Rg!2m2!1d-44.22051!2d170.84093!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-44.22051,170.84093,3a,75y,90t/data=!3m4!1e1!3m2!1sVmsE4VgTRxqTE1PyQff8Rg!2e0'
    },
    {//N-750 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLtaG6tjvzwt-trugWsoL-A!2m2!1d-36.73471!2d-72.48947!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-36.73471,-72.48947,3a,75y,90t/data=!3m4!1e1!3m2!1sLtaG6tjvzwt-trugWsoL-A!2e0'
    },
    {//27 Emir Sk (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKABW5TZXMWjvo9zUQvIEMg!2m2!1d40.12076!2d29.46288!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.12076,29.46288,3a,75y,90t/data=!3m4!1e1!3m2!1sKABW5TZXMWjvo9zUQvIEMg!2e0'
    },
    {//11 モントーバン通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sN5mVhc6ZpnEs_Qd0a5ysAw!2m2!1d48.94361!2d2.87606!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.94361,2.87606,3a,75y,90t/data=!3m4!1e1!3m2!1sN5mVhc6ZpnEs_Qd0a5ysAw!2e0'
    },
    {//ヴィウムザー通り (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZWn8_K5Y3io8d2Of8xGxGw!2m2!1d46.76931!2d11.67726!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.76931,11.67726,3a,75y,90t/data=!3m4!1e1!3m2!1sZWn8_K5Y3io8d2Of8xGxGw!2e0'
    },
    {//13 вулиця Дорошенка (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjGnJpsrQyv_EqXH7LZ0PQg!2m2!1d50.04397!2d23.96973!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.04397,23.96973,3a,75y,90t/data=!3m4!1e1!3m2!1sjGnJpsrQyv_EqXH7LZ0PQg!2e0'
    },
    {//20 Nordmarks Alle (デンマーク)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJGqhT5lC_KQQeZzAQweWHA!2m2!1d55.65662!2d12.36159!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.65662,12.36159,3a,75y,90t/data=!3m4!1e1!3m2!1sJGqhT5lC_KQQeZzAQweWHA!2e0'
    },
    {//16 ストリート (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8imI9x0suN5Cj14NfWaBmw!2m2!1d49.67081!2d-103.83584!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.67081,-103.83584,3a,75y,90t/data=!3m4!1e1!3m2!1s8imI9x0suN5Cj14NfWaBmw!2e0'
    },
    {//61 ул. Стрелецкая Hабережная (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2u2PIxi_0Z-syFJFBZ27Mg!2m2!1d51.72662!2d36.19624!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.72662,36.19624,3a,75y,90t/data=!3m4!1e1!3m2!1s2u2PIxi_0Z-syFJFBZ27Mg!2e0'
    },
    {//129 ビセンテ・ゲレロ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDRE5vgopqB2ITkj-UzMUQw!2m2!1d31.31083!2d-113.53133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.31083,-113.53133,3a,75y,90t/data=!3m4!1e1!3m2!1sDRE5vgopqB2ITkj-UzMUQw!2e0'
    },
    {//11 R634 (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSTMu9DsA77ix4MjAR5OO0w!2m2!1d51.94076!2d-7.85693!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.94076,-7.85693,3a,75y,90t/data=!3m4!1e1!3m2!1sSTMu9DsA77ix4MjAR5OO0w!2e0'
    },
    {//37 ул. „Изгрев“ (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1solVhbwJQPjeFdJOyTFIQjQ!2m2!1d42.66439!2d27.71904!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.66439,27.71904,3a,75y,90t/data=!3m4!1e1!3m2!1solVhbwJQPjeFdJOyTFIQjQ!2e0'
    },
    {//63 K9352 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqc3GmMfSFrl462yaTIj4oQ!2m2!1d50.69382!2d12.40705!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.69382,12.40705,3a,75y,90t/data=!3m4!1e1!3m2!1sqc3GmMfSFrl462yaTIj4oQ!2e0'
    },
    {//1 ヤナ・ブジェフビ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbpjAL9rdpC5_7_5AqUhyVg!2m2!1d50.24506!2d18.84501!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.24506,18.84501,3a,75y,90t/data=!3m4!1e1!3m2!1sbpjAL9rdpC5_7_5AqUhyVg!2e0'
    },
    {//オタルジンスカ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1bYovktyv5WLbgMOMcSC9A!2m2!1d54.46754!2d18.19347!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.46754,18.19347,3a,75y,90t/data=!3m4!1e1!3m2!1s1bYovktyv5WLbgMOMcSC9A!2e0'
    },
    {//Jl. Suara Desa (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv3J4HRpsIsfm5KdcvsqGlQ!2m2!1d-6.78666!2d107.91126!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.78666,107.91126,3a,75y,90t/data=!3m4!1e1!3m2!1sv3J4HRpsIsfm5KdcvsqGlQ!2e0'
    },
    {//4 プライステルベームト (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYb82r6xElVIrLtwL5-zZWA!2m2!1d51.3303!2d5.09694!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.3303,5.09694,3a,75y,90t/data=!3m4!1e1!3m2!1sYb82r6xElVIrLtwL5-zZWA!2e0'
    },
    {//ダスタル・サヒブワーラ, パンジャーブ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suH8JMr2So57QP2AOvQTzQw!2m2!1d30.94618!2d74.6958!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.94618,74.6958,3a,75y,90t/data=!3m4!1e1!3m2!1suH8JMr2So57QP2AOvQTzQw!2e0'
    },
    {//467 クパイ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sohPciqjZTg5jzTRWpAk4wg!2m2!1d-25.60636!2d-54.58642!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.60636,-54.58642,3a,75y,90t/data=!3m4!1e1!3m2!1sohPciqjZTg5jzTRWpAk4wg!2e0'
    },
    {//ピエモンテ (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHOSeiQrMMNo-9ntML5iwig!2m2!1d44.83849!2d8.8049!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.83849,8.8049,3a,75y,90t/data=!3m4!1e1!3m2!1sHOSeiQrMMNo-9ntML5iwig!2e0'
    },
    {//طريق عابية الحصن (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxvSo0XtAnfabJR2h1wVUEw!2m2!1d22.92687!2d57.76321!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.92687,57.76321,3a,75y,90t/data=!3m4!1e1!3m2!1sxvSo0XtAnfabJR2h1wVUEw!2e0'
    },
    {//コンセプシオン (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFS6R0jf4wzmrEqPoruifvQ!2m2!1d-23.41717!2d-57.42491!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.41717,-57.42491,3a,75y,90t/data=!3m4!1e1!3m2!1sFS6R0jf4wzmrEqPoruifvQ!2e0'
    },
    {//ヘイヤー・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQDeaMwbxpNWxARfmY8qlvQ!2m2!1d-27.21251!2d25.98108!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.21251,25.98108,3a,75y,90t/data=!3m4!1e1!3m2!1sQDeaMwbxpNWxARfmY8qlvQ!2e0'
    },
    {//247 DN72A (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-NebjnAboZCsIqcEIGtKGQ!2m2!1d45.02923!2d25.28619!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.02923,25.28619,3a,75y,90t/data=!3m4!1e1!3m2!1s-NebjnAboZCsIqcEIGtKGQ!2e0'
    },
    {//12 ул. „Градево" (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVgpZ6bng1efeaQBFer211Q!2m2!1d43.61455!2d25.36229!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.61455,25.36229,3a,75y,90t/data=!3m4!1e1!3m2!1sVgpZ6bng1efeaQBFer211Q!2e0'
    },
    {//Adar Sk. (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sO5dyJF0vYyAgkwZT1b8TuA!2m2!1d37.46732!2d35.8358!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.46732,35.8358,3a,75y,90t/data=!3m4!1e1!3m2!1sO5dyJF0vYyAgkwZT1b8TuA!2e0'
    },
    {//600 ソーンバーグ・ドライブ・ノースイースト (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stTApQ7747l9NwdvjWuztyA!2m2!1d35.71191!2d-81.19944!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.71191,-81.19944,3a,75y,90t/data=!3m4!1e1!3m2!1stTApQ7747l9NwdvjWuztyA!2e0'
    },
    {//L4181 (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sht0pkWzwmDhGWRrVcy6ajQ!2m2!1d47.48735!2d16.13525!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.48735,16.13525,3a,75y,90t/data=!3m4!1e1!3m2!1sht0pkWzwmDhGWRrVcy6ajQ!2e0'
    },
    {//415 ディストリート・フェデラル (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shB67NPUtjnmE8bLRKr0jow!2m2!1d25.43746!2d-100.99004!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.43746,-100.99004,3a,75y,90t/data=!3m4!1e1!3m2!1shB67NPUtjnmE8bLRKr0jow!2e0'
    },
    {//チェリャビンスク州 (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbmhjuVbsUxVylh3fl-F5Hw!2m2!1d56.01934!2d60.26681!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.01934,60.26681,3a,75y,90t/data=!3m4!1e1!3m2!1sbmhjuVbsUxVylh3fl-F5Hw!2e0'
    },
    {//19 エブロ通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxt7UmgDMP24-k0XZ91UhJQ!2m2!1d42.18549!2d-1.74964!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.18549,-1.74964,3a,75y,90t/data=!3m4!1e1!3m2!1sxt7UmgDMP24-k0XZ91UhJQ!2e0'
    },
    {//295 スカラ・ロード (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRn3T1W1hWFdjkSYhRLltbA!2m2!1d-34.17506!2d18.41849!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.17506,18.41849,3a,75y,90t/data=!3m4!1e1!3m2!1sRn3T1W1hWFdjkSYhRLltbA!2e0'
    },
    {//スルプスカ共和国 (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sD4OfB15MnQ-nXy0EbDR-wA!2m2!1d42.8761!2d18.44331!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.8761,18.44331,3a,75y,90t/data=!3m4!1e1!3m2!1sD4OfB15MnQ-nXy0EbDR-wA!2e0'
    },
    {//107 フェアウェイ・レーン (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHKgdQArKnjEjVwvQwLYTMQ!2m2!1d40.51993!2d-79.88328!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.51993,-79.88328,3a,75y,90t/data=!3m4!1e1!3m2!1sHKgdQArKnjEjVwvQwLYTMQ!2e0'
    },
    {//7 L. Giros g. (リトアニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK2GmyZunpEM6QJg_6QzYCQ!2m2!1d55.25247!2d24.75274!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.25247,24.75274,3a,75y,90t/data=!3m4!1e1!3m2!1sK2GmyZunpEM6QJg_6QzYCQ!2e0'
    },
    {//サルー, ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sleVbY6oApKCLXo_mu6a9Rw!2m2!1d29.45489!2d77.69341!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.45489,77.69341,3a,75y,90t/data=!3m4!1e1!3m2!1sleVbY6oApKCLXo_mu6a9Rw!2e0'
    },
    {//C107 (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZeHkH9NCqeQ0VGyq_DOuBw!2m2!1d-3.85138!2d39.48825!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.85138,39.48825,3a,75y,90t/data=!3m4!1e1!3m2!1sZeHkH9NCqeQ0VGyq_DOuBw!2e0'
    },
    {//スーペルストラーダ・ヴァルスガーナ (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMr3DnZOZT3siH6PSZIfpqQ!2m2!1d46.06161!2d11.22834!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.06161,11.22834,3a,75y,90t/data=!3m4!1e1!3m2!1sMr3DnZOZT3siH6PSZIfpqQ!2e0'
    },
    {//R. Juliana Venturin Monzani Martins (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swk5fE10fI9rhLBD2kvYCFA!2m2!1d-21.04359!2d-49.05839!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.04359,-49.05839,3a,75y,90t/data=!3m4!1e1!3m2!1swk5fE10fI9rhLBD2kvYCFA!2e0'
    },
    {//1124 ニュートン・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEut7CBhOAAFQXwDtuFaJ8g!2m2!1d32.4638!2d-86.44428!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.4638,-86.44428,3a,75y,90t/data=!3m4!1e1!3m2!1sEut7CBhOAAFQXwDtuFaJ8g!2e0'
    },
    {//10A Avenida (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smllfYaDKLQjYCeot3c2Frw!2m2!1d14.62353!2d-90.51237!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.62353,-90.51237,3a,75y,90t/data=!3m4!1e1!3m2!1smllfYaDKLQjYCeot3c2Frw!2e0'
    },
    {//Chemosit - Litein Road (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNHKISLGPLv6kQCGAaxTPrA!2m2!1d-0.57444!2d35.18849!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.57444,35.18849,3a,75y,90t/data=!3m4!1e1!3m2!1sNHKISLGPLv6kQCGAaxTPrA!2e0'
    },
    {//セルトーヘンボス, ノールトブラバント (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOACeNv2JxnBck2NMczbpDA!2m2!1d51.69671!2d5.26903!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.69671,5.26903,3a,75y,90t/data=!3m4!1e1!3m2!1sOACeNv2JxnBck2NMczbpDA!2e0'
    },
    {//モヘルニツェ, オロモウツ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUTt1eEPCsL6DHqhBKuugsw!2m2!1d49.81416!2d16.86328!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.81416,16.86328,3a,75y,90t/data=!3m4!1e1!3m2!1sUTt1eEPCsL6DHqhBKuugsw!2e0'
    },
    {//54 Sadová (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1h308fTeJXoklefV6460wA!2m2!1d48.93973!2d21.91911!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.93973,21.91911,3a,75y,90t/data=!3m4!1e1!3m2!1s1h308fTeJXoklefV6460wA!2e0'
    },
    {//403 ジョルジェ・レオポウド・ウェベル通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDFVe41myECwdW6zN8mPUxg!2m2!1d-28.37993!2d-53.90719!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.37993,-53.90719,3a,75y,90t/data=!3m4!1e1!3m2!1sDFVe41myECwdW6zN8mPUxg!2e0'
    },
    {//কেরোয়া ইউনিয়ন, チッタゴン (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7BTpNtq14EfMiL9zDteWpA!2m2!1d23.05139!2d90.78639!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.05139,90.78639,3a,75y,90t/data=!3m4!1e1!3m2!1s7BTpNtq14EfMiL9zDteWpA!2e0'
    },
    {//116 Erkleivvegen (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJABX8nxvrZd5A8vET1uF0A!2m2!1d58.2682!2d7.98708!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@58.2682,7.98708,3a,75y,90t/data=!3m4!1e1!3m2!1sJABX8nxvrZd5A8vET1uF0A!2e0'
    },
    {//1470 ホイーラータウン・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scQqur8-W0STcCyinmjsv5w!2m2!1d43.40227!2d-75.07671!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.40227,-75.07671,3a,75y,90t/data=!3m4!1e1!3m2!1scQqur8-W0STcCyinmjsv5w!2e0'
    },
    {//Google マップ (グアム)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smtCmeotlezmEovT8ArC7pQ!2m2!1d13.49758!2d144.77333!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.49758,144.77333,3a,75y,90t/data=!3m4!1e1!3m2!1smtCmeotlezmEovT8ArC7pQ!2e0'
    },
    {//5955 イェイガーグレン・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7sh2VvkE_VwJTIuYKpIYpA!2m2!1d27.84405!2d-82.2307!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.84405,-82.2307,3a,75y,90t/data=!3m4!1e1!3m2!1s7sh2VvkE_VwJTIuYKpIYpA!2e0'
    },
    {//ตำบล หนองหญ้าลาด, シーサケート (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1M3jokAUyEL8XLEANEUTaA!2m2!1d14.64453!2d104.63229!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.64453,104.63229,3a,75y,90t/data=!3m4!1e1!3m2!1s1M3jokAUyEL8XLEANEUTaA!2e0'
    },
    {//ถ.โชคชัย - เดชอุดม (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCx8qVZSLMLhsHNebdnq4Xg!2m2!1d14.64448!2d104.01554!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.64448,104.01554,3a,75y,90t/data=!3m4!1e1!3m2!1sCx8qVZSLMLhsHNebdnq4Xg!2e0'
    },
    {//42 Margareta Dahls gate (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s33tFCnptg7P7joyzzv3cKQ!2m2!1d62.74016!2d7.15721!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.74016,7.15721,3a,75y,90t/data=!3m4!1e1!3m2!1s33tFCnptg7P7joyzzv3cKQ!2e0'
    },
    {//4175 ボニー・ドライブ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMex1JBLqDkIb6jy-Bc3yCQ!2m2!1d40.95931!2d-117.7322!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.95931,-117.7322,3a,75y,90t/data=!3m4!1e1!3m2!1sMex1JBLqDkIb6jy-Bc3yCQ!2e0'
    },
    {//103 ショミュー道路 (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scdq6ADIfZn6KhC7DEDKoyA!2m2!1d46.35012!2d6.61115!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.35012,6.61115,3a,75y,90t/data=!3m4!1e1!3m2!1scdq6ADIfZn6KhC7DEDKoyA!2e0'
    },
    {//111 ルイース・ガーマ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8NlsiM7QruV8IY3bAl5xzg!2m2!1d-19.91315!2d-54.37147!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.91315,-54.37147,3a,75y,90t/data=!3m4!1e1!3m2!1s8NlsiM7QruV8IY3bAl5xzg!2e0'
    },
    {//M3 (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skgBL7wtAQQsX13nr0FYlZA!2m2!1d51.40452!2d-0.44586!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.40452,-0.44586,3a,75y,90t/data=!3m4!1e1!3m2!1skgBL7wtAQQsX13nr0FYlZA!2e0'
    },
    {//975 Makirikiri Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sscH_-kdPoOZbxy4bQ9ku1g!2m2!1d-40.0869!2d175.30582!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-40.0869,175.30582,3a,75y,90t/data=!3m4!1e1!3m2!1sscH_-kdPoOZbxy4bQ9ku1g!2e0'
    },
    {//ハイフォン (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0Jag53i1x57C4EJ2Wh7IHQ!2m2!1d21.05419!2d106.33373!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.05419,106.33373,3a,75y,90t/data=!3m4!1e1!3m2!1s0Jag53i1x57C4EJ2Wh7IHQ!2e0'
    },
    {//1171 エストラダ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su7lIUW_2m05T7mpqEgyQGQ!2m2!1d-32.48101!2d-58.24113!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.48101,-58.24113,3a,75y,90t/data=!3m4!1e1!3m2!1su7lIUW_2m05T7mpqEgyQGQ!2e0'
    },
    {//カンテイロス通り (ポルトガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swmrCezSpSXquyJ6MBDfNhA!2m2!1d39.33391!2d-9.33406!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.33391,-9.33406,3a,75y,90t/data=!3m4!1e1!3m2!1swmrCezSpSXquyJ6MBDfNhA!2e0'
    },
    {//3 Satakunnankatu (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2oUSodmySEsGp5Rmh9TgTA!2m2!1d61.12883!2d22.12783!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.12883,22.12783,3a,75y,90t/data=!3m4!1e1!3m2!1s2oUSodmySEsGp5Rmh9TgTA!2e0'
    },
    {//35 Hurbanova (チェコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-a-PFYCVEkNKZnWZCK15Bg!2m2!1d48.68841!2d17.36635!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.68841,17.36635,3a,75y,90t/data=!3m4!1e1!3m2!1s-a-PFYCVEkNKZnWZCK15Bg!2e0'
    },
    {//R14 (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scUBlRZRqJYTty6IwbPOJpg!2m2!1d51.14921!2d4.98002!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.14921,4.98002,3a,75y,90t/data=!3m4!1e1!3m2!1scUBlRZRqJYTty6IwbPOJpg!2e0'
    },
    {//カスカリェイラ道路 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDrQ7X2CcGfK156q6KdsiYw!2m2!1d-19.74804!2d-45.24755!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.74804,-45.24755,3a,75y,90t/data=!3m4!1e1!3m2!1sDrQ7X2CcGfK156q6KdsiYw!2e0'
    },
    {//16 シリアーノ通り (シチリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKJBd1jOY03y29s_wclNdPg!2m2!1d37.58594!2d15.13556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.58594,15.13556,3a,75y,90t/data=!3m4!1e1!3m2!1sKJBd1jOY03y29s_wclNdPg!2e0'
    },
    {//72 ジョゼー G ダ・シウヴァ通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxJSdgpdjmOlpcjq5Ph-6Tg!2m2!1d-7.84341!2d-35.75546!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.84341,-35.75546,3a,75y,90t/data=!3m4!1e1!3m2!1sxJSdgpdjmOlpcjq5Ph-6Tg!2e0'
    },
    {//マーチ, イングランド (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxJ3NbP_LqPbdc-OQ7tIVtA!2m2!1d52.54819!2d0.0848!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.54819,0.0848,3a,75y,90t/data=!3m4!1e1!3m2!1sxJ3NbP_LqPbdc-OQ7tIVtA!2e0'
    },
    {//5156 US-12 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sThx6vcnqN4C5R9CEWERHMw!2m2!1d46.53233!2d-122.391!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.53233,-122.391,3a,75y,90t/data=!3m4!1e1!3m2!1sThx6vcnqN4C5R9CEWERHMw!2e0'
    },
    {//942 エピネイ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stjoKzCiSwSOcs9TEMdpgfg!2m2!1d49.66875!2d1.09103!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.66875,1.09103,3a,75y,90t/data=!3m4!1e1!3m2!1stjoKzCiSwSOcs9TEMdpgfg!2e0'
    },
    {//37 ポッジョ・アッラ・グアルディア通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLEL1ArPgrNUwZSsgOahS5Q!2m2!1d43.89153!2d10.80305!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.89153,10.80305,3a,75y,90t/data=!3m4!1e1!3m2!1sLEL1ArPgrNUwZSsgOahS5Q!2e0'
    },
    {//ロックサス, カガヤン バレー (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scDqIbVskEnkaPx277vQd8A!2m2!1d17.13844!2d121.61804!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.13844,121.61804,3a,75y,90t/data=!3m4!1e1!3m2!1scDqIbVskEnkaPx277vQd8A!2e0'
    },
    {//169 ハウプト通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWaP0ThpJsQpsdomx_BldDg!2m2!1d51.05178!2d14.14571!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.05178,14.14571,3a,75y,90t/data=!3m4!1e1!3m2!1sWaP0ThpJsQpsdomx_BldDg!2e0'
    },
    {//63 ジェロムスキエゴ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFa7CSJeQkx0PfNIv0bMHQg!2m2!1d50.97712!2d18.20242!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.97712,18.20242,3a,75y,90t/data=!3m4!1e1!3m2!1sFa7CSJeQkx0PfNIv0bMHQg!2e0'
    },
    {//Kratovë, Општина Кратово (北マケドニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0s-BdBa-05B_JM6Dq5MJTA!2m2!1d42.07993!2d22.16723!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.07993,22.16723,3a,75y,90t/data=!3m4!1e1!3m2!1s0s-BdBa-05B_JM6Dq5MJTA!2e0'
    },
    {//北サヴォ (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sp_MF4rmS7erETbgO2PgpYQ!2m2!1d63.37148!2d27.40291!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.37148,27.40291,3a,75y,90t/data=!3m4!1e1!3m2!1sp_MF4rmS7erETbgO2PgpYQ!2e0'
    },
    {//カステリョ・デ・ラ・プラナ, バレンシア (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7RnsnKeUnJQQvRtjLFbB2Q!2m2!1d39.97103!2d-0.05941!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.97103,-0.05941,3a,75y,90t/data=!3m4!1e1!3m2!1s7RnsnKeUnJQQvRtjLFbB2Q!2e0'
    },
    {//ランド・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syGPiF31NnRPTX0WZMaHXLw!2m2!1d-26.48198!2d27.49771!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.48198,27.49771,3a,75y,90t/data=!3m4!1e1!3m2!1syGPiF31NnRPTX0WZMaHXLw!2e0'
    },
    {//483 Felipe II (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl3m7hRO95aDGmsXnL52o4Q!2m2!1d-33.12639!2d-71.56784!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.12639,-71.56784,3a,75y,90t/data=!3m4!1e1!3m2!1sl3m7hRO95aDGmsXnL52o4Q!2e0'
    },
    {//72 ウーリツァ・クラスノエ・ズナミャ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFrFLLHWo-5nkigeyCwHaKQ!2m2!1d56.79591!2d44.49441!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.79591,44.49441,3a,75y,90t/data=!3m4!1e1!3m2!1sFrFLLHWo-5nkigeyCwHaKQ!2e0'
    },
    {//7 ムーア・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3SC6cJUfdZszvz6Cuwr9xg!2m2!1d-34.43887!2d19.45043!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.43887,19.45043,3a,75y,90t/data=!3m4!1e1!3m2!1s3SC6cJUfdZszvz6Cuwr9xg!2e0'
    },
    {//12 SS89 (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7ZfmcA4RgJKG1PNTpG4BSA!2m2!1d41.7745!2d15.43579!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.7745,15.43579,3a,75y,90t/data=!3m4!1e1!3m2!1s7ZfmcA4RgJKG1PNTpG4BSA!2e0'
    },
    {//国道2号 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHB4pzEoq4tiS7EdfjAwmeQ!2m2!1d34.64298!2d135.01961!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.64298,135.01961,3a,75y,90t/data=!3m4!1e1!3m2!1sHB4pzEoq4tiS7EdfjAwmeQ!2e0'
    },
    {//1553 アルバレージョス (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sp8u0-DxmC_ny-jWDEyrAEA!2m2!1d-34.69526!2d-58.60681!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.69526,-58.60681,3a,75y,90t/data=!3m4!1e1!3m2!1sp8u0-DxmC_ny-jWDEyrAEA!2e0'
    },
    {//アクトベ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sywIWWdKdJnEFAiVts3nJSA!2m2!1d50.26324!2d57.19655!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.26324,57.19655,3a,75y,90t/data=!3m4!1e1!3m2!1sywIWWdKdJnEFAiVts3nJSA!2e0'
    },
    {//Jl. Pantai Sanggar (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sumTeiQxGiTF_h0_0swJ24Q!2m2!1d-8.24516!2d111.89759!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.24516,111.89759,3a,75y,90t/data=!3m4!1e1!3m2!1sumTeiQxGiTF_h0_0swJ24Q!2e0'
    },
    {//3 Eikerveien (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snVrzoF8182-AzkUYpjlBPg!2m2!1d59.67176!2d9.6543!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.67176,9.6543,3a,75y,90t/data=!3m4!1e1!3m2!1snVrzoF8182-AzkUYpjlBPg!2e0'
    },
    {//フルーリー＝レゾブレ, サントル (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siHDFm1ewr9kREDkBEney_w!2m2!1d47.9341!2d1.92343!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.9341,1.92343,3a,75y,90t/data=!3m4!1e1!3m2!1siHDFm1ewr9kREDkBEney_w!2e0'
    },
    {//88 SS470 (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-N-OHJrEv7UTZjl2c7ZS1w!2m2!1d45.72507!2d9.6515!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.72507,9.6515,3a,75y,90t/data=!3m4!1e1!3m2!1s-N-OHJrEv7UTZjl2c7ZS1w!2e0'
    },
    {//51 サン・ルイス通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syh3MmAPFoNASFzUO5mTHBg!2m2!1d22.65027!2d-100.85051!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.65027,-100.85051,3a,75y,90t/data=!3m4!1e1!3m2!1syh3MmAPFoNASFzUO5mTHBg!2e0'
    },
    {//สค.4049 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3AHXRwXJSkIDMQknQzdzEg!2m2!1d13.59917!2d100.1098!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.59917,100.1098,3a,75y,90t/data=!3m4!1e1!3m2!1s3AHXRwXJSkIDMQknQzdzEg!2e0'
    },
    {//3476 ロウ・アベニュー (カナダ大西洋側)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBD7Fo_YeZiFnqwIUMsKnvg!2m2!1d44.65571!2d-63.62904!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.65571,-63.62904,3a,75y,90t/data=!3m4!1e1!3m2!1sBD7Fo_YeZiFnqwIUMsKnvg!2e0'
    },
    {//14 ポンティエール通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKu0_QQXnxxfd428gWCHq-g!2m2!1d50.54521!2d5.32189!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.54521,5.32189,3a,75y,90t/data=!3m4!1e1!3m2!1sKu0_QQXnxxfd428gWCHq-g!2e0'
    },
    {//サン＝ベルトヴァン, ペイ・ド・ラ・ロワール (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suZMRBvGQ3afnHtGm8K9t0g!2m2!1d48.06213!2d-0.81376!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.06213,-0.81376,3a,75y,90t/data=!3m4!1e1!3m2!1suZMRBvGQ3afnHtGm8K9t0g!2e0'
    },
    {//6 Jalan Tiaj 2/1 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-NWqKHSMK8TReHdJMBjIRw!2m2!1d3.24009!2d101.45133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.24009,101.45133,3a,75y,90t/data=!3m4!1e1!3m2!1s-NWqKHSMK8TReHdJMBjIRw!2e0'
    },
    {//デルベンタ, スルプスカ共和国 (クロアチア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soBCLRc5M-e46ybOMeoZHFg!2m2!1d44.9895!2d17.89489!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.9895,17.89489,3a,75y,90t/data=!3m4!1e1!3m2!1soBCLRc5M-e46ybOMeoZHFg!2e0'
    },
    {//DC46A (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssxl7vNbq_DgbirLv9pI32g!2m2!1d44.79985!2d22.95298!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.79985,22.95298,3a,75y,90t/data=!3m4!1e1!3m2!1ssxl7vNbq_DgbirLv9pI32g!2e0'
    },
    {//1574 コンフォート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJgYUjcY2Up-UGEyQDDTVlA!2m2!1d29.88022!2d-98.26649!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.88022,-98.26649,3a,75y,90t/data=!3m4!1e1!3m2!1sJgYUjcY2Up-UGEyQDDTVlA!2e0'
    },
    {//32 アメリック通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syX05SGyFVzOCHe0eKQSC9Q!2m2!1d46.15112!2d-1.15431!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.15112,-1.15431,3a,75y,90t/data=!3m4!1e1!3m2!1syX05SGyFVzOCHe0eKQSC9Q!2e0'
    },
    {//136 ウーリツァ・セルゲエヴァ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7w991803dso7byEXuFBLVg!2m2!1d44.02205!2d43.05933!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.02205,43.05933,3a,75y,90t/data=!3m4!1e1!3m2!1s7w991803dso7byEXuFBLVg!2e0'
    },
    {//65 R. Aneir Gonçalves Ferreira (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skLtKIFr5MhCBgntIP-8a0g!2m2!1d-15.63469!2d-58.16954!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.63469,-58.16954,3a,75y,90t/data=!3m4!1e1!3m2!1skLtKIFr5MhCBgntIP-8a0g!2e0'
    },
    {//12 Pirkankatu (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2BKR5k_QzdbIHTmyZgFQsA!2m2!1d61.31255!2d22.13477!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.31255,22.13477,3a,75y,90t/data=!3m4!1e1!3m2!1s2BKR5k_QzdbIHTmyZgFQsA!2e0'
    },
    {//342 ノース・バタークラム・ストリート・サウスウェスト (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjLPesC3FcJEd6wXt5er5CA!2m2!1d46.96294!2d-124.15949!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.96294,-124.15949,3a,75y,90t/data=!3m4!1e1!3m2!1sjLPesC3FcJEd6wXt5er5CA!2e0'
    },
    {//1016 カジェホン・フランシスコ・ビージャ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3ZOa7dRJsB5zjhrb4SVrPA!2m2!1d27.13034!2d-109.82739!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.13034,-109.82739,3a,75y,90t/data=!3m4!1e1!3m2!1s3ZOa7dRJsB5zjhrb4SVrPA!2e0'
    },
    {//900 パイン・ノール・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sH9XPWfWt7YnCCFMKxKcksg!2m2!1d34.98738!2d-80.946!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.98738,-80.946,3a,75y,90t/data=!3m4!1e1!3m2!1sH9XPWfWt7YnCCFMKxKcksg!2e0'
    },
    {//丹波市, 兵庫県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTDQ0mbeDDUU13IzfWZ_blw!2m2!1d35.25616!2d135.15215!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.25616,135.15215,3a,75y,90t/data=!3m4!1e1!3m2!1sTDQ0mbeDDUU13IzfWZ_blw!2e0'
    },
    {//クッパン - クッパン・クリシュナジリ・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_UAvxax8GwlgS8jGNUVvSg!2m2!1d12.73162!2d78.32479!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.73162,78.32479,3a,75y,90t/data=!3m4!1e1!3m2!1s_UAvxax8GwlgS8jGNUVvSg!2e0'
    },
    {//HGO / イストラワカ・デ・クアウテモック (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQzaQ5akp-OrWQi5yRnslfQ!2m2!1d19.88051!2d-98.83275!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.88051,-98.83275,3a,75y,90t/data=!3m4!1e1!3m2!1sQzaQ5akp-OrWQi5yRnslfQ!2e0'
    },
    {//バルケスィル (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNqmGJJnITonY9767w76W_A!2m2!1d40.05847!2d27.96904!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.05847,27.96904,3a,75y,90t/data=!3m4!1e1!3m2!1sNqmGJJnITonY9767w76W_A!2e0'
    },
    {//ベノニ, ハウテン (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJXHefEUtpKk7_g5qnG1XOA!2m2!1d-26.13557!2d28.46468!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.13557,28.46468,3a,75y,90t/data=!3m4!1e1!3m2!1sJXHefEUtpKk7_g5qnG1XOA!2e0'
    },
    {//カルビ・ナマー・パス (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHQuci-anzUjbZ763bTXYRg!2m2!1d26.14702!2d91.81072!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.14702,91.81072,3a,75y,90t/data=!3m4!1e1!3m2!1sHQuci-anzUjbZ763bTXYRg!2e0'
    },
    {//133 314 (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_ZxFFgJxKYJcUBQmTIOOHw!2m2!1d61.22701!2d25.49421!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.22701,25.49421,3a,75y,90t/data=!3m4!1e1!3m2!1s_ZxFFgJxKYJcUBQmTIOOHw!2e0'
    },
    {//Jute Mill Rd (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJZa4DmTvoOWG2SBO57UU5A!2m2!1d25.87881!2d85.78343!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.87881,85.78343,3a,75y,90t/data=!3m4!1e1!3m2!1sJZa4DmTvoOWG2SBO57UU5A!2e0'
    },
    {//18 ペロム・プレイス (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1samhrs6EeS5dN64D7DxPV7A!2m2!1d41.06275!2d-73.55204!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.06275,-73.55204,3a,75y,90t/data=!3m4!1e1!3m2!1samhrs6EeS5dN64D7DxPV7A!2e0'
    },
    {//8 Dikili Sanayi Sitesi (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4zYApqmzKvcr8Jg9FpkTRw!2m2!1d39.08181!2d26.90071!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.08181,26.90071,3a,75y,90t/data=!3m4!1e1!3m2!1s4zYApqmzKvcr8Jg9FpkTRw!2e0'
    },
    {//MR9 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sELRjh5XCfdX11G9HShElxQ!2m2!1d-27.09996!2d31.1711!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.09996,31.1711,3a,75y,90t/data=!3m4!1e1!3m2!1sELRjh5XCfdX11G9HShElxQ!2e0'
    },
    {//9000 フルニーグ通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM1CIQkzlQguKHIK1ML0wVA!2m2!1d43.19652!2d5.81104!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.19652,5.81104,3a,75y,90t/data=!3m4!1e1!3m2!1sM1CIQkzlQguKHIK1ML0wVA!2e0'
    },
    {//Hatirjheel Link Road 1 (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_oQnUedd6DuveyfDcVv2cw!2m2!1d23.74769!2d90.39556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.74769,90.39556,3a,75y,90t/data=!3m4!1e1!3m2!1s_oQnUedd6DuveyfDcVv2cw!2e0'
    },
    {//48 ヴァルマンシュタッドル (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2FQgiEsNIK3XP49HmjrTww!2m2!1d48.12345!2d13.3543!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.12345,13.3543,3a,75y,90t/data=!3m4!1e1!3m2!1s2FQgiEsNIK3XP49HmjrTww!2e0'
    },
    {//13 シリング・ロード (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGzA-a9gs0z-hq19fasjtiQ!2m2!1d-33.81125!2d18.65783!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.81125,18.65783,3a,75y,90t/data=!3m4!1e1!3m2!1sGzA-a9gs0z-hq19fasjtiQ!2e0'
    },
    {//392 R. Vinte e Dois de Março (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUtYoCPnwtUdzMHp6abW6Gg!2m2!1d-28.28952!2d-54.26259!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.28952,-54.26259,3a,75y,90t/data=!3m4!1e1!3m2!1sUtYoCPnwtUdzMHp6abW6Gg!2e0'
    },
    {//57 マートレット・ロード (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sksXeTWek-NXefK-POZuHpw!2m2!1d51.20952!2d-3.47688!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.20952,-3.47688,3a,75y,90t/data=!3m4!1e1!3m2!1sksXeTWek-NXefK-POZuHpw!2e0'
    },
    {//4 ミナー・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3rcngRS4bcIXi6bbAcAlPA!2m2!1d-25.77265!2d29.45134!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.77265,29.45134,3a,75y,90t/data=!3m4!1e1!3m2!1s3rcngRS4bcIXi6bbAcAlPA!2e0'
    },
    {//765 BR-349 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCl-zGer7c4RuTy1KlMVYuQ!2m2!1d-11.65824!2d-39.82417!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.65824,-39.82417,3a,75y,90t/data=!3m4!1e1!3m2!1sCl-zGer7c4RuTy1KlMVYuQ!2e0'
    },
    {//1608 ニュートン・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seeAW9ljgiuYYrlLAZ0ALKA!2m2!1d36.59607!2d-82.2001!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.59607,-82.2001,3a,75y,90t/data=!3m4!1e1!3m2!1seeAW9ljgiuYYrlLAZ0ALKA!2e0'
    },
    {//中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0YrB0P5ifgE9CJ7OpXZJvA!2m2!1d-7.14437!2d111.01822!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.14437,111.01822,3a,75y,90t/data=!3m4!1e1!3m2!1s0YrB0P5ifgE9CJ7OpXZJvA!2e0'
    },
    {//サティポ, フニン (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJJMhV7CiPCv5EVhtKAOa8g!2m2!1d-11.2394!2d-74.64325!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.2394,-74.64325,3a,75y,90t/data=!3m4!1e1!3m2!1sJJMhV7CiPCv5EVhtKAOa8g!2e0'
    },
    {//17 ウーリツァ・ドロニナ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL-NdTRHN4Hud462qhK-LuQ!2m2!1d56.34795!2d41.30332!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.34795,41.30332,3a,75y,90t/data=!3m4!1e1!3m2!1sL-NdTRHN4Hud462qhK-LuQ!2e0'
    },
    {//114 キング・リチャード・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQcdBF23NWPUzdrw-rmTgvQ!2m2!1d33.2845!2d-84.32277!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.2845,-84.32277,3a,75y,90t/data=!3m4!1e1!3m2!1sQcdBF23NWPUzdrw-rmTgvQ!2e0'
    },
    {//ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdfnJ9nXkuuKMcfXTaJ_1PQ!2m2!1d27.89218!2d79.2018!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.89218,79.2018,3a,75y,90t/data=!3m4!1e1!3m2!1sdfnJ9nXkuuKMcfXTaJ_1PQ!2e0'
    },
    {//841 ロス・カネロス (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suysPgBRxEvq1hIWLbhlHsQ!2m2!1d-38.2434!2d-72.32871!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.2434,-72.32871,3a,75y,90t/data=!3m4!1e1!3m2!1suysPgBRxEvq1hIWLbhlHsQ!2e0'
    },
    {//リモン (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sayxOhdwu8XY00HFSPg09YA!2m2!1d10.11054!2d-83.4967!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.11054,-83.4967,3a,75y,90t/data=!3m4!1e1!3m2!1sayxOhdwu8XY00HFSPg09YA!2e0'
    },
    {//188 ウーリツァ・カルラ・マルクサ (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smh3jKHxox8oD3vF1Z2aFVw!2m2!1d50.3796!2d116.54477!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.3796,116.54477,3a,75y,90t/data=!3m4!1e1!3m2!1smh3jKHxox8oD3vF1Z2aFVw!2e0'
    },
    {//25 Sléttuvegur (アイスランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHRw5p55DAoYhyO00hga55g!2m2!1d64.12231!2d-21.89768!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@64.12231,-21.89768,3a,75y,90t/data=!3m4!1e1!3m2!1sHRw5p55DAoYhyO00hga55g!2e0'
    },
    {//1 Kasárenská (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sprPSbHB8MhkmlxeKmjVlNw!2m2!1d48.28431!2d17.72714!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.28431,17.72714,3a,75y,90t/data=!3m4!1e1!3m2!1sprPSbHB8MhkmlxeKmjVlNw!2e0'
    },
    {//316 サウス・ユニバーシティ・ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMocwjJ_bCdZfRPgReOKKhg!2m2!1d42.77572!2d-96.92448!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.77572,-96.92448,3a,75y,90t/data=!3m4!1e1!3m2!1sMocwjJ_bCdZfRPgReOKKhg!2e0'
    },
    {//ダンブッラ, 中部州 (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ4GlX4igSyKYp_ewH1-BVw!2m2!1d7.87715!2d80.64027!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.87715,80.64027,3a,75y,90t/data=!3m4!1e1!3m2!1sQ4GlX4igSyKYp_ewH1-BVw!2e0'
    },
    {//5944 ウェスト・トゥーソン・エステーツ・パークウェイ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssOCAJzLllWXReynUZ-H4sw!2m2!1d32.19834!2d-111.09135!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.19834,-111.09135,3a,75y,90t/data=!3m4!1e1!3m2!1ssOCAJzLllWXReynUZ-H4sw!2e0'
    },
    {//26自動車道 (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6BHn8aQ0NZHhI9tl33tECA!2m2!1d28.88335!2d-111.14029!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.88335,-111.14029,3a,75y,90t/data=!3m4!1e1!3m2!1s6BHn8aQ0NZHhI9tl33tECA!2e0'
    },
    {//岩国市, 山口県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svdPajaov18L4Ba-2EfLDqg!2m2!1d34.16141!2d132.21937!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.16141,132.21937,3a,75y,90t/data=!3m4!1e1!3m2!1svdPajaov18L4Ba-2EfLDqg!2e0'
    },
    {//72 Calle de Moya (カナリア諸島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw64Qjjn64Jjsq8UvvSHoRg!2m2!1d28.12266!2d-15.61637!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.12266,-15.61637,3a,75y,90t/data=!3m4!1e1!3m2!1sw64Qjjn64Jjsq8UvvSHoRg!2e0'
    },
    {//ラッドロー, マサチューセッツ州 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHvtr_8d08KX1hXRBACHYcQ!2m2!1d42.17079!2d-72.48472!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.17079,-72.48472,3a,75y,90t/data=!3m4!1e1!3m2!1sHvtr_8d08KX1hXRBACHYcQ!2e0'
    },
    {//ハロゲイト, イングランド (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRTHcXcJKGm6BPbKXD3DkzQ!2m2!1d54.00737!2d-1.55102!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.00737,-1.55102,3a,75y,90t/data=!3m4!1e1!3m2!1sRTHcXcJKGm6BPbKXD3DkzQ!2e0'
    },
    {//ウォーリアー・プレイス (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHxtaoG2_qeoOCd4qrKFgXw!2m2!1d-37.56655!2d143.83909!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.56655,143.83909,3a,75y,90t/data=!3m4!1e1!3m2!1sHxtaoG2_qeoOCd4qrKFgXw!2e0'
    },
    {//プーリア (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl0gGgWwbtoKg1Pqrn7styA!2m2!1d41.01114!2d16.79506!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.01114,16.79506,3a,75y,90t/data=!3m4!1e1!3m2!1sl0gGgWwbtoKg1Pqrn7styA!2e0'
    },
    {//アルブレヒト通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNCK1QjCd25gWXFLDudAsSQ!2m2!1d48.15545!2d13.9687!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.15545,13.9687,3a,75y,90t/data=!3m4!1e1!3m2!1sNCK1QjCd25gWXFLDudAsSQ!2e0'
    },
    {//2330 パラナー通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqT1eqPBqkHwzlg77QNdApA!2m2!1d-15.23379!2d-59.32239!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.23379,-59.32239,3a,75y,90t/data=!3m4!1e1!3m2!1sqT1eqPBqkHwzlg77QNdApA!2e0'
    },
    {//サン・ファン・カピストラーノ, カリフォルニア州 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCNvSt8EfIH5F4ADccfkLLQ!2m2!1d33.494!2d-117.67439!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.494,-117.67439,3a,75y,90t/data=!3m4!1e1!3m2!1sCNvSt8EfIH5F4ADccfkLLQ!2e0'
    },
    {//ミエマール通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srmShtF9M8HTNXZ7YvkPTAA!2m2!1d44.05907!2d4.77676!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.05907,4.77676,3a,75y,90t/data=!3m4!1e1!3m2!1srmShtF9M8HTNXZ7YvkPTAA!2e0'
    },
    {//ダカール (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIzERGE3jUYLI_ST5yS9Yiw!2m2!1d14.67677!2d-17.45737!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.67677,-17.45737,3a,75y,90t/data=!3m4!1e1!3m2!1sIzERGE3jUYLI_ST5yS9Yiw!2e0'
    },
    {//セーラム, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYABc1kip3c4xC0dnYLCRkw!2m2!1d11.69025!2d78.15956!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.69025,78.15956,3a,75y,90t/data=!3m4!1e1!3m2!1sYABc1kip3c4xC0dnYLCRkw!2e0'
    },
    {//ул. Высоковольтная (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUEpM4x0P-6XpePDwfnYF1Q!2m2!1d49.79749!2d73.11808!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.79749,73.11808,3a,75y,90t/data=!3m4!1e1!3m2!1sUEpM4x0P-6XpePDwfnYF1Q!2e0'
    },
    {//1023 レイナ・デ・ロス・ベントゥロソス通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1cs0mIZXLdFfBjXnuzy-vQ!2m2!1d20.08572!2d-98.71014!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.08572,-98.71014,3a,75y,90t/data=!3m4!1e1!3m2!1s1cs0mIZXLdFfBjXnuzy-vQ!2e0'
    },
    {//プラインビル, オレゴン州 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYM263IvpGcwCfKh7Hi9S6A!2m2!1d44.30599!2d-120.82851!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.30599,-120.82851,3a,75y,90t/data=!3m4!1e1!3m2!1sYM263IvpGcwCfKh7Hi9S6A!2e0'
    },
    {//520 R. da Corvina (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4gjctYEyff7y2Tj_9vO5Ng!2m2!1d-29.30563!2d-49.72518!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.30563,-49.72518,3a,75y,90t/data=!3m4!1e1!3m2!1s4gjctYEyff7y2Tj_9vO5Ng!2e0'
    },
    {//ビア・ア・コヒタンボ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgBGFtmxr_pZ51BJbTyfJNQ!2m2!1d-2.73167!2d-78.86253!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.73167,-78.86253,3a,75y,90t/data=!3m4!1e1!3m2!1sgBGFtmxr_pZ51BJbTyfJNQ!2e0'
    },
    {//108 アルヒテクト・チェザル・ラザレスク通り (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sr6R19kVECMGF-mLDn8yu5Q!2m2!1d43.98728!2d23.87656!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.98728,23.87656,3a,75y,90t/data=!3m4!1e1!3m2!1sr6R19kVECMGF-mLDn8yu5Q!2e0'
    },
    {//ウジャン - ジャラワー・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7apzaUEGR4Ht4FntRxLx7Q!2m2!1d24.18662!2d76.17075!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.18662,76.17075,3a,75y,90t/data=!3m4!1e1!3m2!1s7apzaUEGR4Ht4FntRxLx7Q!2e0'
    },
    {//19 Jl. Laksda Yos Sudarso (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sD0CVrYdKiCEgWAJKAXiopA!2m2!1d-6.87649!2d109.38018!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.87649,109.38018,3a,75y,90t/data=!3m4!1e1!3m2!1sD0CVrYdKiCEgWAJKAXiopA!2e0'
    },
    {//ノース・コーリー・ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2b0K0aC5CR0Do81SwpHFhA!2m2!1d41.05916!2d-83.65245!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.05916,-83.65245,3a,75y,90t/data=!3m4!1e1!3m2!1s2b0K0aC5CR0Do81SwpHFhA!2e0'
    },
    {//369 マリアノ・モレノ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI9eKcCbsJLJlwfxKVE_n9g!2m2!1d-34.77516!2d-59.67982!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.77516,-59.67982,3a,75y,90t/data=!3m4!1e1!3m2!1sI9eKcCbsJLJlwfxKVE_n9g!2e0'
    },
    {//1 ファン・カベサ通り (カナリア諸島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scLfmo54vbgPUuZvShwU9ng!2m2!1d28.29746!2d-16.81484!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.29746,-16.81484,3a,75y,90t/data=!3m4!1e1!3m2!1scLfmo54vbgPUuZvShwU9ng!2e0'
    },
    {//E314 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjWv5L4i-aDejrre3iu8qlA!2m2!1d50.80394!2d6.15196!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.80394,6.15196,3a,75y,90t/data=!3m4!1e1!3m2!1sjWv5L4i-aDejrre3iu8qlA!2e0'
    },
    {//2253 マノエウ・エウドークシオ・ペレイラ通り (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYPc9CTStzY41pJiuUAMTZg!2m2!1d0.02999!2d-51.06691!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.02999,-51.06691,3a,75y,90t/data=!3m4!1e1!3m2!1sYPc9CTStzY41pJiuUAMTZg!2e0'
    },
    {//9 ベツィビューエル通り (スイス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6fRZ1WRQ0r8qgD1NKpRttA!2m2!1d47.28051!2d8.66313!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.28051,8.66313,3a,75y,90t/data=!3m4!1e1!3m2!1s6fRZ1WRQ0r8qgD1NKpRttA!2e0'
    },
    {//5492 アゴスティーノ・ウェイ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYuOgmQU_gyIq-2ZLI5kEhw!2m2!1d26.32642!2d-81.44603!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.32642,-81.44603,3a,75y,90t/data=!3m4!1e1!3m2!1sYuOgmQU_gyIq-2ZLI5kEhw!2e0'
    },
    {//K-16 (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVK6sTNmM6bimc_ndEhAmLA!2m2!1d-34.99!2d-71.84604!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.99,-71.84604,3a,75y,90t/data=!3m4!1e1!3m2!1sVK6sTNmM6bimc_ndEhAmLA!2e0'
    },
    {//SH 18 (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smqRZsXM4VT_9pTsyNsuzWA!2m2!1d25.92015!2d92.59252!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.92015,92.59252,3a,75y,90t/data=!3m4!1e1!3m2!1smqRZsXM4VT_9pTsyNsuzWA!2e0'
    },
    {//ヘネラル・ホセ・マリア・ブルグエス (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJP7rth2tQWPtjjHSgJD8uw!2m2!1d-25.08941!2d-57.53875!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.08941,-57.53875,3a,75y,90t/data=!3m4!1e1!3m2!1sJP7rth2tQWPtjjHSgJD8uw!2e0'
    },
    {//E47 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-RTI_Pq3lxUr5JYpWt_Uug!2m2!1d-2.20488!2d-78.85806!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.20488,-78.85806,3a,75y,90t/data=!3m4!1e1!3m2!1s-RTI_Pq3lxUr5JYpWt_Uug!2e0'
    },
    {//63 R. Braz Frúgoli Cruz (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSc4UltjUQeWx3clV3fL-4g!2m2!1d-23.62148!2d-45.42529!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.62148,-45.42529,3a,75y,90t/data=!3m4!1e1!3m2!1sSc4UltjUQeWx3clV3fL-4g!2e0'
    },
    {//シルクンバラシオン・アル・ラゴ・デ・アマティトラン自動車道 (グアテマラ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfcLTizYI54xIMYj7bKcRXA!2m2!1d14.4351!2d-90.55867!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.4351,-90.55867,3a,75y,90t/data=!3m4!1e1!3m2!1sfcLTizYI54xIMYj7bKcRXA!2e0'
    },
    {//バイロング・バレー・ウェイ (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJKyRJTMPtFv8Q8Ovt9BHKA!2m2!1d-32.71935!2d149.99934!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.71935,149.99934,3a,75y,90t/data=!3m4!1e1!3m2!1sJKyRJTMPtFv8Q8Ovt9BHKA!2e0'
    },
    {//一関市, 岩手県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEhgYZ3DGaXvDPbEwML8TJg!2m2!1d38.95213!2d140.92772!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.95213,140.92772,3a,75y,90t/data=!3m4!1e1!3m2!1sEhgYZ3DGaXvDPbEwML8TJg!2e0'
    },
    {//2323 ウィリス・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjcVSxMrydKfMPTixUQ3IIQ!2m2!1d41.83855!2d-94.09026!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.83855,-94.09026,3a,75y,90t/data=!3m4!1e1!3m2!1sjcVSxMrydKfMPTixUQ3IIQ!2e0'
    },
    {//パライバ (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgD84vqv_96WiAgUvLMyJJQ!2m2!1d-6.94645!2d-35.51888!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.94645,-35.51888,3a,75y,90t/data=!3m4!1e1!3m2!1sgD84vqv_96WiAgUvLMyJJQ!2e0'
    },
    {//クローフォード・レイクス・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPBNjLSEyZkbnjy1Al0MY_Q!2m2!1d-37.90391!2d141.43327!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.90391,141.43327,3a,75y,90t/data=!3m4!1e1!3m2!1sPBNjLSEyZkbnjy1Al0MY_Q!2e0'
    },
    {//ตำบล ทัพราช, サケオ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHf_02MGe_tZoZ_oipfwD-A!2m2!1d14.01328!2d102.64501!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.01328,102.64501,3a,75y,90t/data=!3m4!1e1!3m2!1sHf_02MGe_tZoZ_oipfwD-A!2e0'
    },
    {//564 ロカ通り (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxU8N1hqDu1eZm4WTweTTbQ!2m2!1d-33.62069!2d-64.60828!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.62069,-64.60828,3a,75y,90t/data=!3m4!1e1!3m2!1sxU8N1hqDu1eZm4WTweTTbQ!2e0'
    },
    {//ボゴタ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svX7huheFxtRoL5KC2Y-k9g!2m2!1d4.60029!2d-74.08158!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.60029,-74.08158,3a,75y,90t/data=!3m4!1e1!3m2!1svX7huheFxtRoL5KC2Y-k9g!2e0'
    },
    {//Google マップ (香港・マカオ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz76LJuaVEu8LKbYW0xco3Q!2m2!1d22.29362!2d113.97466!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.29362,113.97466,3a,75y,90t/data=!3m4!1e1!3m2!1sz76LJuaVEu8LKbYW0xco3Q!2e0'
    },
    {//Scia Quadra 11 Rua 18 Conjuntos 1 a 3 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seH3D4hSWSAyTLSSpLvUfcw!2m2!1d-15.78457!2d-47.98287!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.78457,-47.98287,3a,75y,90t/data=!3m4!1e1!3m2!1seH3D4hSWSAyTLSSpLvUfcw!2e0'
    },
    {//1514 フランシスコ・トラパニ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLHTIJoCIzyTRUixLR7NiLw!2m2!1d-33.25398!2d-58.01391!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.25398,-58.01391,3a,75y,90t/data=!3m4!1e1!3m2!1sLHTIJoCIzyTRUixLR7NiLw!2e0'
    },
    {//2793 NY-206 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEsd0lgWs8aS2fSVsbaKQ8A!2m2!1d42.33019!2d-75.95338!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.33019,-75.95338,3a,75y,90t/data=!3m4!1e1!3m2!1sEsd0lgWs8aS2fSVsbaKQ8A!2e0'
    },
    {//2800 ジュニパー・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svK6it_kOzjF4Bml6tgBlfQ!2m2!1d37.17488!2d-88.73649!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.17488,-88.73649,3a,75y,90t/data=!3m4!1e1!3m2!1svK6it_kOzjF4Bml6tgBlfQ!2e0'
    },
    {//4 6通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWj6JzUF2YV1Qfj2j0E65kg!2m2!1d18.83441!2d-96.7977!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.83441,-96.7977,3a,75y,90t/data=!3m4!1e1!3m2!1sWj6JzUF2YV1Qfj2j0E65kg!2e0'
    },
    {//Jl. Griya Mulya II (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sshpZGC2P5Khe4RUpQVgpYQ!2m2!1d-6.38567!2d106.76059!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.38567,106.76059,3a,75y,90t/data=!3m4!1e1!3m2!1sshpZGC2P5Khe4RUpQVgpYQ!2e0'
    },
    {//AZ-89A (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ0BsFpXVAH2vrlpaR7AQMQ!2m2!1d34.739!2d-112.13737!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.739,-112.13737,3a,75y,90t/data=!3m4!1e1!3m2!1sQ0BsFpXVAH2vrlpaR7AQMQ!2e0'
    },
    {//6301 Co Rd 432 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s88hDaqP1X1KbKaa41XrFgA!2m2!1d32.53343!2d-99.9719!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.53343,-99.9719,3a,75y,90t/data=!3m4!1e1!3m2!1s88hDaqP1X1KbKaa41XrFgA!2e0'
    },
    {//黎明路831巷 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgGjrv1YzHD0YTUM8nfbDPg!2m2!1d24.73849!2d121.76568!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.73849,121.76568,3a,75y,90t/data=!3m4!1e1!3m2!1sgGjrv1YzHD0YTUM8nfbDPg!2e0'
    },
    {//ナゴセイン・ペサリ・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sd2w-T5BQ0v0wfXquqqTMWg!2m2!1d18.6678!2d73.00338!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.6678,73.00338,3a,75y,90t/data=!3m4!1e1!3m2!1sd2w-T5BQ0v0wfXquqqTMWg!2e0'
    },
    {//1515 バン・ビューレン・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syFtdJxDG9wcrhCp_urEjZg!2m2!1d46.87691!2d-113.97174!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.87691,-113.97174,3a,75y,90t/data=!3m4!1e1!3m2!1syFtdJxDG9wcrhCp_urEjZg!2e0'
    },
    {//16 Jl. Ki Ratu Penghulu (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svQ7-bGr0aL6OzulwPbQAmg!2m2!1d-4.14141!2d104.17417!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.14141,104.17417,3a,75y,90t/data=!3m4!1e1!3m2!1svQ7-bGr0aL6OzulwPbQAmg!2e0'
    },
    {//ノーヴァ・プラタ・ド・イグアス, パラナ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSNsfrdySNRp58h0FHS6Ykg!2m2!1d-25.63572!2d-53.33819!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.63572,-53.33819,3a,75y,90t/data=!3m4!1e1!3m2!1sSNsfrdySNRp58h0FHS6Ykg!2e0'
    },
    {//Estr. Vicinal das Usinas Iracema Londra (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIaKLjxCltrBHfuSWWlKO5w!2m2!1d-23.46506!2d-49.06159!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.46506,-49.06159,3a,75y,90t/data=!3m4!1e1!3m2!1sIaKLjxCltrBHfuSWWlKO5w!2e0'
    },
    {//441 ノース・シャーロット・アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sey2rlXZ0_C8aU8H0Wj0A4g!2m2!1d38.07289!2d-78.87883!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.07289,-78.87883,3a,75y,90t/data=!3m4!1e1!3m2!1sey2rlXZ0_C8aU8H0Wj0A4g!2e0'
    },
    {//630 フランツ・アンダーソン・ロード・サウスイースト (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sttiLb2PB7GlEXMKP1SNu4Q!2m2!1d47.04469!2d-122.84852!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.04469,-122.84852,3a,75y,90t/data=!3m4!1e1!3m2!1sttiLb2PB7GlEXMKP1SNu4Q!2e0'
    },
    {//60 ハンズ・ストライドム・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-kZmX4AGnQZgMsedhnEjiA!2m2!1d-26.69463!2d27.83858!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.69463,27.83858,3a,75y,90t/data=!3m4!1e1!3m2!1s-kZmX4AGnQZgMsedhnEjiA!2e0'
    },
    {//220 ローザ・ブルック・ロード (オーストラリア南西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3ixk2G8mtaJPA5QSQm4mRw!2m2!1d-33.97219!2d115.10556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.97219,115.10556,3a,75y,90t/data=!3m4!1e1!3m2!1s3ixk2G8mtaJPA5QSQm4mRw!2e0'
    },
    {//304 バカバック (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqebfCOtjpEdQKVrTC85TEQ!2m2!1d15.97049!2d120.20236!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.97049,120.20236,3a,75y,90t/data=!3m4!1e1!3m2!1sqebfCOtjpEdQKVrTC85TEQ!2e0'
    },
    {//14618 サウス・ストーンゲート・ドライブ (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-2-wRRMQDxBPnukjBcVuAQ!2m2!1d41.62295!2d-87.94478!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.62295,-87.94478,3a,75y,90t/data=!3m4!1e1!3m2!1s-2-wRRMQDxBPnukjBcVuAQ!2e0'
    },
    {//シナロア (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snLsFi4GoQfLfIQfH01wLJw!2m2!1d25.56931!2d-108.15568!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.56931,-108.15568,3a,75y,90t/data=!3m4!1e1!3m2!1snLsFi4GoQfLfIQfH01wLJw!2e0'
    },
    {//ノンブレ・デ・ディオス, ドゥランゴ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6Nc1cemxEpxFe3jeuneepg!2m2!1d23.8495!2d-104.23991!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.8495,-104.23991,3a,75y,90t/data=!3m4!1e1!3m2!1s6Nc1cemxEpxFe3jeuneepg!2e0'
    },
    {//東ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snqd1XzKeRa0ph3n2FJKTuQ!2m2!1d-8.04096!2d113.43667!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.04096,113.43667,3a,75y,90t/data=!3m4!1e1!3m2!1snqd1XzKeRa0ph3n2FJKTuQ!2e0'
    },
    {//74 サンタ・ルジア通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s29Dm9DfySZBjT2SMq-F_rw!2m2!1d-19.8393!2d-40.26206!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.8393,-40.26206,3a,75y,90t/data=!3m4!1e1!3m2!1s29Dm9DfySZBjT2SMq-F_rw!2e0'
    },
    {//サスカトゥーン, サスカチュワン (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8Uf3KZUrpIOWTDuEAuy9pg!2m2!1d52.13322!2d-106.67579!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.13322,-106.67579,3a,75y,90t/data=!3m4!1e1!3m2!1s8Uf3KZUrpIOWTDuEAuy9pg!2e0'
    },
    {//2269 ポイント・エドワード・ハイウェイ (カナダ大西洋側)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swb9yrpkxV1I8wlwztwS7Gg!2m2!1d46.17918!2d-60.25666!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.17918,-60.25666,3a,75y,90t/data=!3m4!1e1!3m2!1swb9yrpkxV1I8wlwztwS7Gg!2e0'
    },
    {//メスカマル, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqjacED22uACg1Qc8lZyvuw!2m2!1d8.30144!2d77.14763!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.30144,77.14763,3a,75y,90t/data=!3m4!1e1!3m2!1sqjacED22uACg1Qc8lZyvuw!2e0'
    },
    {//青森市, 青森県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1se3Zajh49fBXy4aEcrS6M-g!2m2!1d40.8344!2d140.7274!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.8344,140.7274,3a,75y,90t/data=!3m4!1e1!3m2!1se3Zajh49fBXy4aEcrS6M-g!2e0'
    },
    {//24 ウィンザー・アベニュー (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sso-xYjdotmbuvUNz0qBs6g!2m2!1d-38.15784!2d145.93938!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.15784,145.93938,3a,75y,90t/data=!3m4!1e1!3m2!1sso-xYjdotmbuvUNz0qBs6g!2e0'
    },
    {//ケイド - ブロフォワイエドルー・ロード (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syiQm8dNPjlqfPDZJ8Kffig!2m2!1d5.90181!2d-1.00087!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.90181,-1.00087,3a,75y,90t/data=!3m4!1e1!3m2!1syiQm8dNPjlqfPDZJ8Kffig!2e0'
    },
    {//2176 FM215 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szLwRCfDN2OyonS9sC6dI-g!2m2!1d31.5119!2d-97.71901!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.5119,-97.71901,3a,75y,90t/data=!3m4!1e1!3m2!1szLwRCfDN2OyonS9sC6dI-g!2e0'
    },
    {//Panabo, ダバオ地方 (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJVuosEWZ5Lq-kwatnXvQuQ!2m2!1d7.31199!2d125.67922!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.31199,125.67922,3a,75y,90t/data=!3m4!1e1!3m2!1sJVuosEWZ5Lq-kwatnXvQuQ!2e0'
    },
    {//ラ・サバナ＝サン・ファウスティーノ / RD55-09 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4gBuFJtdvmaXfuIG9at14w!2m2!1d8.07461!2d-72.39141!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.07461,-72.39141,3a,75y,90t/data=!3m4!1e1!3m2!1s4gBuFJtdvmaXfuIG9at14w!2e0'
    },
    {//5 11月20日通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s56bNEEYrZr7_YZGBta_vow!2m2!1d19.95762!2d-100.93268!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.95762,-100.93268,3a,75y,90t/data=!3m4!1e1!3m2!1s56bNEEYrZr7_YZGBta_vow!2e0'
    },
    {//131 マナンティアレス (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sh8MVAxL2rfd3YuDhdmOAtA!2m2!1d-36.90015!2d-73.0281!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-36.90015,-73.0281,3a,75y,90t/data=!3m4!1e1!3m2!1sh8MVAxL2rfd3YuDhdmOAtA!2e0'
    },
    {//196 イースト・サンセット・ドライブ (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI5sDQXPPqXOEZ4wW1dR9lQ!2m2!1d42.78539!2d-88.94849!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.78539,-88.94849,3a,75y,90t/data=!3m4!1e1!3m2!1sI5sDQXPPqXOEZ4wW1dR9lQ!2e0'
    },
    {//10598 タフト・コート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEERbctg0gnOljXpwQ1_ynA!2m2!1d37.67533!2d-97.46444!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.67533,-97.46444,3a,75y,90t/data=!3m4!1e1!3m2!1sEERbctg0gnOljXpwQ1_ynA!2e0'
    },
    {//1 ハリス・リッジ・ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMo8oN4ij6iEjQcoXroI32w!2m2!1d38.55615!2d-84.81849!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.55615,-84.81849,3a,75y,90t/data=!3m4!1e1!3m2!1sMo8oN4ij6iEjQcoXroI32w!2e0'
    },
    {//11 クローバーロフト・コート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFThoXv9sbRrr7EynqXGQKg!2m2!1d45.27917!2d-75.91372!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.27917,-75.91372,3a,75y,90t/data=!3m4!1e1!3m2!1sFThoXv9sbRrr7EynqXGQKg!2e0'
    },
    {//4 インディゴ・ウェイ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syk-yP1TtO0dKGF33CjcQkA!2m2!1d43.14527!2d-73.76246!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.14527,-73.76246,3a,75y,90t/data=!3m4!1e1!3m2!1syk-yP1TtO0dKGF33CjcQkA!2e0'
    },
    {//7722 ビッグ・ハンド・ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seSi1cgC7zv3Ima2vaEtP8Q!2m2!1d42.84293!2d-82.62534!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.84293,-82.62534,3a,75y,90t/data=!3m4!1e1!3m2!1seSi1cgC7zv3Ima2vaEtP8Q!2e0'
    },
    {//千曲市, 長野県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdx796KyCJcGvqwq1aUp3yw!2m2!1d36.50777!2d138.16689!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.50777,138.16689,3a,75y,90t/data=!3m4!1e1!3m2!1sdx796KyCJcGvqwq1aUp3yw!2e0'
    },
    {//ゴイアス (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ82aJylx9Tx6UXDCwRI1qw!2m2!1d-15.41388!2d-50.62526!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.41388,-50.62526,3a,75y,90t/data=!3m4!1e1!3m2!1sQ82aJylx9Tx6UXDCwRI1qw!2e0'
    },
    {//4579 NC-41 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_tKpuCyIxBkBpvLxf7cU6w!2m2!1d34.77736!2d-77.91375!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.77736,-77.91375,3a,75y,90t/data=!3m4!1e1!3m2!1s_tKpuCyIxBkBpvLxf7cU6w!2e0'
    },
    {//5105 カジェ 16 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sy6YRDd-xvlbCk3Qz4HXetA!2m2!1d4.81671!2d-72.28068!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.81671,-72.28068,3a,75y,90t/data=!3m4!1e1!3m2!1sy6YRDd-xvlbCk3Qz4HXetA!2e0'
    },
    {//171 リバダビア (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s64SRidsunaB6ifwTmQNFsA!2m2!1d-33.03651!2d-68.88144!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.03651,-68.88144,3a,75y,90t/data=!3m4!1e1!3m2!1s64SRidsunaB6ifwTmQNFsA!2e0'
    },
    {//15 コックソン・テラス (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sockSyb-Nj4R0dxiKnBT16A!2m2!1d42.27191!2d-71.09141!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.27191,-71.09141,3a,75y,90t/data=!3m4!1e1!3m2!1sockSyb-Nj4R0dxiKnBT16A!2e0'
    },
    {//2730 サウスウェスト 153rd レーン (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKiBcA-O3a-DEOlPrdbPD-w!2m2!1d28.99921!2d-82.16889!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.99921,-82.16889,3a,75y,90t/data=!3m4!1e1!3m2!1sKiBcA-O3a-DEOlPrdbPD-w!2e0'
    },
    {//ハーミテイジ・エマベール・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snkstUxU_58iXrRqibGvjEQ!2m2!1d-28.22175!2d152.14253!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.22175,152.14253,3a,75y,90t/data=!3m4!1e1!3m2!1snkstUxU_58iXrRqibGvjEQ!2e0'
    },
    {//ディアゴナル 2 ソナ 5 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWlUDsueeaEhbKn5Jcc-VjQ!2m2!1d14.65393!2d-90.80672!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.65393,-90.80672,3a,75y,90t/data=!3m4!1e1!3m2!1sWlUDsueeaEhbKn5Jcc-VjQ!2e0'
    },
    {//鴨川市, 千葉県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb8jqQS3IiOUJKmIyyn9hfg!2m2!1d35.09934!2d140.10375!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.09934,140.10375,3a,75y,90t/data=!3m4!1e1!3m2!1sb8jqQS3IiOUJKmIyyn9hfg!2e0'
    },
    {//354 パサヘ 3月17日 (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBqfTzsijY0QPeHrRMdiezw!2m2!1d-34.43728!2d-71.08712!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.43728,-71.08712,3a,75y,90t/data=!3m4!1e1!3m2!1sBqfTzsijY0QPeHrRMdiezw!2e0'
    },
    {//ミニワンゴダ, 西部州 (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sokIKc0ze3EjlC2CEcd6Q4w!2m2!1d7.18223!2d79.95738!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.18223,79.95738,3a,75y,90t/data=!3m4!1e1!3m2!1sokIKc0ze3EjlC2CEcd6Q4w!2e0'
    },
    {//南カリマンタン (カリマンタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8gt2yN5iJXHLFwQndZ23bA!2m2!1d-3.4071!2d114.84515!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.4071,114.84515,3a,75y,90t/data=!3m4!1e1!3m2!1s8gt2yN5iJXHLFwQndZ23bA!2e0'
    },
    {//コリエンテス (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sybBDYY0VudVnCaTaAu6ZDw!2m2!1d-28.94815!2d-59.01486!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.94815,-59.01486,3a,75y,90t/data=!3m4!1e1!3m2!1sybBDYY0VudVnCaTaAu6ZDw!2e0'
    },
    {//1457 ベルズ・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUyQFPyVPcBw91wlXxhht5A!2m2!1d-38.10262!2d145.36225!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.10262,145.36225,3a,75y,90t/data=!3m4!1e1!3m2!1sUyQFPyVPcBw91wlXxhht5A!2e0'
    },
    {//ガンボウイー・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbVFQwiekw3XxqKt4qbw1EQ!2m2!1d-33.03925!2d138.88804!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.03925,138.88804,3a,75y,90t/data=!3m4!1e1!3m2!1sbVFQwiekw3XxqKt4qbw1EQ!2e0'
    },
    {//NH73 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shuVk0oqOPCzb8c2dTq4qPw!2m2!1d13.07538!2d75.45264!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.07538,75.45264,3a,75y,90t/data=!3m4!1e1!3m2!1shuVk0oqOPCzb8c2dTq4qPw!2e0'
    },
    {//マハガラ, リンポポ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s65ZCGLegbukZpBeARl0GXg!2m2!1d-22.76186!2d30.86944!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.76186,30.86944,3a,75y,90t/data=!3m4!1e1!3m2!1s65ZCGLegbukZpBeARl0GXg!2e0'
    },
    {//SC-150 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sr6ZGhALkP8FgkVBRirIoqg!2m2!1d-26.91296!2d-51.53592!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.91296,-51.53592,3a,75y,90t/data=!3m4!1e1!3m2!1sr6ZGhALkP8FgkVBRirIoqg!2e0'
    },
    {//Google マップ (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sluQnZ0nCoJMryophj_m8OA!2m2!1d32.69292!2d35.32937!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.69292,35.32937,3a,75y,90t/data=!3m4!1e1!3m2!1sluQnZ0nCoJMryophj_m8OA!2e0'
    },
    {//アシス・シャトーブリアン高速道路 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sis_dsQIT1PSw7MQ6tPXifw!2m2!1d-20.73549!2d-49.07378!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.73549,-49.07378,3a,75y,90t/data=!3m4!1e1!3m2!1sis_dsQIT1PSw7MQ6tPXifw!2e0'
    },
    {//567 フスト・シエラ通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf1rU0Ql3PusZ5qb64nYnew!2m2!1d20.04634!2d-99.34207!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.04634,-99.34207,3a,75y,90t/data=!3m4!1e1!3m2!1sf1rU0Ql3PusZ5qb64nYnew!2e0'
    },
    {//アスクィス, サスカチュワン (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgj6ogJBVgLhCuSSau31UAQ!2m2!1d52.22995!2d-107.33102!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.22995,-107.33102,3a,75y,90t/data=!3m4!1e1!3m2!1sgj6ogJBVgLhCuSSau31UAQ!2e0'
    },
    {//Google マップ (グリーンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siyk8ojBVHmtUHjH_G8xb3A!2m2!1d64.165!2d-51.69093!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@64.165,-51.69093,3a,75y,90t/data=!3m4!1e1!3m2!1siyk8ojBVHmtUHjH_G8xb3A!2e0'
    },
    {//Зейнолла Қабдолов көшесі (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf57W9zL2Vx_4V-Uqb_f5Ug!2m2!1d47.06281!2d51.88508!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.06281,51.88508,3a,75y,90t/data=!3m4!1e1!3m2!1sf57W9zL2Vx_4V-Uqb_f5Ug!2e0'
    },
    {//Adiwerna, 中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWdxs8WjHDzXRREqXQp-MUg!2m2!1d-6.91816!2d109.08523!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.91816,109.08523,3a,75y,90t/data=!3m4!1e1!3m2!1sWdxs8WjHDzXRREqXQp-MUg!2e0'
    },
    {//バンテアイ メアンチェイ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siwwEO7i6XKJXd-xHD6Prvw!2m2!1d13.86583!2d103.35654!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.86583,103.35654,3a,75y,90t/data=!3m4!1e1!3m2!1siwwEO7i6XKJXd-xHD6Prvw!2e0'
    },
    {//50 Maunganui Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBrl9uTiuc9oVkTPR5Tkghw!2m2!1d-37.63415!2d176.18062!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.63415,176.18062,3a,75y,90t/data=!3m4!1e1!3m2!1sBrl9uTiuc9oVkTPR5Tkghw!2e0'
    },
    {//サルト・デル・グアイラ, カニンデジュ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbNq2FgA0apgO9Hto2bDt4Q!2m2!1d-24.04764!2d-54.31272!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.04764,-54.31272,3a,75y,90t/data=!3m4!1e1!3m2!1sbNq2FgA0apgO9Hto2bDt4Q!2e0'
    },
    {//470 R. Kraemer-Eck (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szvrZcFcZ9bG1rXLbIshidw!2m2!1d-29.63129!2d-51.01665!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.63129,-51.01665,3a,75y,90t/data=!3m4!1e1!3m2!1szvrZcFcZ9bG1rXLbIshidw!2e0'
    },
    {//RN-078 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sO1bLvxj1BZSzztmSYFP5wQ!2m2!1d-6.11982!2d-37.65779!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.11982,-37.65779,3a,75y,90t/data=!3m4!1e1!3m2!1sO1bLvxj1BZSzztmSYFP5wQ!2e0'
    },
    {//ファンツホーリング - シンプー・ハイウェイ (ブータン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7DgHLE-aaoGwN6YZkfJy0Q!2m2!1d27.05951!2d89.55737!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.05951,89.55737,3a,75y,90t/data=!3m4!1e1!3m2!1s7DgHLE-aaoGwN6YZkfJy0Q!2e0'
    },
    {//768 キング・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sguBJ9atW016xiZjqEDBADA!2m2!1d32.79225!2d-79.864!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.79225,-79.864,3a,75y,90t/data=!3m4!1e1!3m2!1sguBJ9atW016xiZjqEDBADA!2e0'
    },
    {//3236 ウェルドロン・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-KEThd_qQx5IRlxQA7Xe_Q!2m2!1d43.32536!2d-75.68919!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.32536,-75.68919,3a,75y,90t/data=!3m4!1e1!3m2!1s-KEThd_qQx5IRlxQA7Xe_Q!2e0'
    },
    {//30479 Range Rd 53 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf3MuIHW92gHeoip2vUBqjA!2m2!1d51.60688!2d-114.63435!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.60688,-114.63435,3a,75y,90t/data=!3m4!1e1!3m2!1sf3MuIHW92gHeoip2vUBqjA!2e0'
    },
    {//1702 NB-135 (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2uRguLtC4mPdHmh3MgIi7w!2m2!1d47.62809!2d-65.08344!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.62809,-65.08344,3a,75y,90t/data=!3m4!1e1!3m2!1s2uRguLtC4mPdHmh3MgIi7w!2e0'
    },
    {//奥州市, 岩手県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7pJ0tQSOHK01qzISGpuXbQ!2m2!1d39.04139!2d141.16874!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.04139,141.16874,3a,75y,90t/data=!3m4!1e1!3m2!1s7pJ0tQSOHK01qzISGpuXbQ!2e0'
    },
    {//グボコ＝マクルディ・ロード (ナイジェリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si1YJqmq2qAGMGXHqe_dmGg!2m2!1d7.70938!2d8.65439!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.70938,8.65439,3a,75y,90t/data=!3m4!1e1!3m2!1si1YJqmq2qAGMGXHqe_dmGg!2e0'
    },
    {//Rte 165 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAlc0agvaUF21q_8Tw3I1Xg!2m2!1d49.81068!2d-97.18583!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.81068,-97.18583,3a,75y,90t/data=!3m4!1e1!3m2!1sAlc0agvaUF21q_8Tw3I1Xg!2e0'
    },
    {//164 11月20日通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTbsMGQNWUVCadnxkLZvlUg!2m2!1d16.79953!2d-96.3955!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.79953,-96.3955,3a,75y,90t/data=!3m4!1e1!3m2!1sTbsMGQNWUVCadnxkLZvlUg!2e0'
    },
    {//30 ルイス・レイバ (ドミニカ共和国)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHsDyZs-5zZV9yLOwb2PmLg!2m2!1d18.46243!2d-69.60122!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.46243,-69.60122,3a,75y,90t/data=!3m4!1e1!3m2!1sHsDyZs-5zZV9yLOwb2PmLg!2e0'
    },
    {//クンディナマルカ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-Xmo318McuFnCp8o3RDycw!2m2!1d4.83023!2d-73.96623!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.83023,-73.96623,3a,75y,90t/data=!3m4!1e1!3m2!1s-Xmo318McuFnCp8o3RDycw!2e0'
    },
    {//1208 パークランド・アベニュー (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBjWz3PbpdPR_8o1XtmAJ1Q!2m2!1d36.31893!2d-95.59247!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.31893,-95.59247,3a,75y,90t/data=!3m4!1e1!3m2!1sBjWz3PbpdPR_8o1XtmAJ1Q!2e0'
    },
    {//266 ルイース S アンドラデ通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm1FGHdkmqYIv7EI15zzrNw!2m2!1d-6.53868!2d-38.06239!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.53868,-38.06239,3a,75y,90t/data=!3m4!1e1!3m2!1sm1FGHdkmqYIv7EI15zzrNw!2e0'
    },
    {//イースト・テイマー・ハイウェイ (タスマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMyl7FDdlxarmahHKRkiBEg!2m2!1d-41.39902!2d147.11612!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-41.39902,147.11612,3a,75y,90t/data=!3m4!1e1!3m2!1sMyl7FDdlxarmahHKRkiBEg!2e0'
    },
    {//Google マップ (グリーンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLURFPkNim7RlhT_y6CehAQ!2m2!1d66.97552!2d-51.0999!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@66.97552,-51.0999,3a,75y,90t/data=!3m4!1e1!3m2!1sLURFPkNim7RlhT_y6CehAQ!2e0'
    },
    {//高畠町, 山形県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYCguUKos-LFdbj_o9gh4cg!2m2!1d37.97336!2d140.27215!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.97336,140.27215,3a,75y,90t/data=!3m4!1e1!3m2!1sYCguUKos-LFdbj_o9gh4cg!2e0'
    },
    {//カジェ 15a (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbyuee0e35bMWe4_mw0Kr4A!2m2!1d3.26898!2d-76.54321!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.26898,-76.54321,3a,75y,90t/data=!3m4!1e1!3m2!1sbyuee0e35bMWe4_mw0Kr4A!2e0'
    },
    {//パラナ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stOjkXE7sm3BdkUC4uhSrTw!2m2!1d-23.81055!2d-50.05672!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.81055,-50.05672,3a,75y,90t/data=!3m4!1e1!3m2!1stOjkXE7sm3BdkUC4uhSrTw!2e0'
    },
    {//ヌサトゥンガラバラット (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPTuuASVM9rLlGl88EK-QKA!2m2!1d-8.63169!2d116.54357!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.63169,116.54357,3a,75y,90t/data=!3m4!1e1!3m2!1sPTuuASVM9rLlGl88EK-QKA!2e0'
    },
    {//1571 イースト・キャピトル・ヒル・ロード (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLMKjIho1eRBBBzw8e-orEw!2m2!1d47.24166!2d-123.07666!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.24166,-123.07666,3a,75y,90t/data=!3m4!1e1!3m2!1sLMKjIho1eRBBBzw8e-orEw!2e0'
    },
    {//S-614 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKiRQLAXMuCuE73nuQVoF9w!2m2!1d-38.99337!2d-73.1062!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.99337,-73.1062,3a,75y,90t/data=!3m4!1e1!3m2!1sKiRQLAXMuCuE73nuQVoF9w!2e0'
    },
    {//800 County Rd 183 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIpOBUxM42qCOgdQMJ8qUng!2m2!1d31.31529!2d-96.92782!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.31529,-96.92782,3a,75y,90t/data=!3m4!1e1!3m2!1sIpOBUxM42qCOgdQMJ8qUng!2e0'
    },
    {//134 インテルアメリカーナ自動車道 (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1surQihyk2I4wpH_A39N92qg!2m2!1d8.32981!2d-80.51888!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.32981,-80.51888,3a,75y,90t/data=!3m4!1e1!3m2!1surQihyk2I4wpH_A39N92qg!2e0'
    },
    {//リオグランデ・ド・スル州 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sR4z-4gLVTPDySkpPfO3f0Q!2m2!1d-27.71856!2d-51.94242!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.71856,-51.94242,3a,75y,90t/data=!3m4!1e1!3m2!1sR4z-4gLVTPDySkpPfO3f0Q!2e0'
    },
    {//816 グレゴリア・マトラス・デ・サン・マルティン (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHWIs0Umq5phh3rkDEDosOg!2m2!1d-31.72036!2d-60.52463!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.72036,-60.52463,3a,75y,90t/data=!3m4!1e1!3m2!1sHWIs0Umq5phh3rkDEDosOg!2e0'
    },
    {//A365 (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sr7555-d0vJ-6XnPoAta0hg!2m2!1d42.85791!2d75.29368!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.85791,75.29368,3a,75y,90t/data=!3m4!1e1!3m2!1sr7555-d0vJ-6XnPoAta0hg!2e0'
    },
    {//Chittagong - Bandarban Hwy (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk2FZpATNh8ujaXxRffgq0A!2m2!1d22.18446!2d92.19855!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.18446,92.19855,3a,75y,90t/data=!3m4!1e1!3m2!1sk2FZpATNh8ujaXxRffgq0A!2e0'
    },
    {//RD-ESC-27 (グアテマラ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8YwjU-fTNrPCe8hk2bhkfw!2m2!1d14.27229!2d-91.36119!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.27229,-91.36119,3a,75y,90t/data=!3m4!1e1!3m2!1s8YwjU-fTNrPCe8hk2bhkfw!2e0'
    },
    {//Tlhalogang, セントラル (ボツワナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8z6gi8rQzx5mkKkOe0_Hbw!2m2!1d-21.11629!2d27.34059!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.11629,27.34059,3a,75y,90t/data=!3m4!1e1!3m2!1s8z6gi8rQzx5mkKkOe0_Hbw!2e0'
    },
    {//マト・グロッソ・ド・スル州 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skUU-YrkMAOmmU8dXbtOXhA!2m2!1d-20.43707!2d-54.88727!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.43707,-54.88727,3a,75y,90t/data=!3m4!1e1!3m2!1skUU-YrkMAOmmU8dXbtOXhA!2e0'
    },
    {//102 マウリシオ通り (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sS4YCdUPF5z36u6TYkUuSJw!2m2!1d-34.66632!2d-56.66808!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.66632,-56.66808,3a,75y,90t/data=!3m4!1e1!3m2!1sS4YCdUPF5z36u6TYkUuSJw!2e0'
    },
    {//ザーヒラ行政区 (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shtRIL2Ak2TlBZv5xfIUPMQ!2m2!1d23.32531!2d55.67828!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.32531,55.67828,3a,75y,90t/data=!3m4!1e1!3m2!1shtRIL2Ak2TlBZv5xfIUPMQ!2e0'
    },
    {//4094 RN40 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shnintw83Sl2q4WZoooTsfA!2m2!1d-27.60864!2d-67.01617!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.60864,-67.01617,3a,75y,90t/data=!3m4!1e1!3m2!1shnintw83Sl2q4WZoooTsfA!2e0'
    },
    {//I-65 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7itMUPEvzP-6EUGBNhnvWg!2m2!1d36.40878!2d-86.72273!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.40878,-86.72273,3a,75y,90t/data=!3m4!1e1!3m2!1s7itMUPEvzP-6EUGBNhnvWg!2e0'
    },
    {//Ngõ 10 (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQPX5XFHRNPYNiDPk1pf2QA!2m2!1d21.12141!2d105.87138!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.12141,105.87138,3a,75y,90t/data=!3m4!1e1!3m2!1sQPX5XFHRNPYNiDPk1pf2QA!2e0'
    },
    {//17 カストロ・アウヴェス通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suRdQi34i3yD_Xf1O7ffe7A!2m2!1d-23.97143!2d-46.31896!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.97143,-46.31896,3a,75y,90t/data=!3m4!1e1!3m2!1suRdQi34i3yD_Xf1O7ffe7A!2e0'
    },
    {//370 ซอย โกสีย์ 26 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQVK3DS7rU_apnRe4I5OucQ!2m2!1d15.72146!2d100.136!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.72146,100.136,3a,75y,90t/data=!3m4!1e1!3m2!1sQVK3DS7rU_apnRe4I5OucQ!2e0'
    },
    {//392 R. Zózimo Macedo (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqH1G37AK-jsB9WC_hQxNwQ!2m2!1d-6.46721!2d-37.10624!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.46721,-37.10624,3a,75y,90t/data=!3m4!1e1!3m2!1sqH1G37AK-jsB9WC_hQxNwQ!2e0'
    },
    {//3 フォース・ストリート (カナダ大西洋側)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMajEJe16yFVp8q87tc-zUg!2m2!1d47.51888!2d-52.8172!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.51888,-52.8172,3a,75y,90t/data=!3m4!1e1!3m2!1sMajEJe16yFVp8q87tc-zUg!2e0'
    },
    {//ウスタ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s24HEjG-vkwmZaUeMgm-o5Q!2m2!1d19.38994!2d56.72009!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.38994,56.72009,3a,75y,90t/data=!3m4!1e1!3m2!1s24HEjG-vkwmZaUeMgm-o5Q!2e0'
    },
    {//177 ノッサ・セニョーラ・アパレシーダ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szJN41tCsB88t2R7QrjYsTQ!2m2!1d-16.05052!2d-45.14634!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.05052,-45.14634,3a,75y,90t/data=!3m4!1e1!3m2!1szJN41tCsB88t2R7QrjYsTQ!2e0'
    },
    {//リオグランデ・ド・スル州 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shgh-brX2MjtJa6d7YgeV2Q!2m2!1d-30.55894!2d-54.16818!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.55894,-54.16818,3a,75y,90t/data=!3m4!1e1!3m2!1shgh-brX2MjtJa6d7YgeV2Q!2e0'
    },
    {//25588 メイトランド・ドライブ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5m8kt_BoRiBLW2HUR-XiyA!2m2!1d37.65658!2d-122.06557!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.65658,-122.06557,3a,75y,90t/data=!3m4!1e1!3m2!1s5m8kt_BoRiBLW2HUR-XiyA!2e0'
    },
    {//メルチョル・デ・メンコス, ペテン (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSCK1WJLcrkEQ7yS_34LzsA!2m2!1d17.06163!2d-89.15414!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.06163,-89.15414,3a,75y,90t/data=!3m4!1e1!3m2!1sSCK1WJLcrkEQ7yS_34LzsA!2e0'
    },
    {//160 ビレッジ・イースト・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8JrwXBc-TaBPS-RmU5cdhw!2m2!1d26.08261!2d-97.46581!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.08261,-97.46581,3a,75y,90t/data=!3m4!1e1!3m2!1s8JrwXBc-TaBPS-RmU5cdhw!2e0'
    },
    {//新竹県 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSVqKx0utMU2l0jBrLYGuiA!2m2!1d24.67284!2d120.98771!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.67284,120.98771,3a,75y,90t/data=!3m4!1e1!3m2!1sSVqKx0utMU2l0jBrLYGuiA!2e0'
    },
    {//メガラヤ州 (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgze8gwvvurXd-8Ast5T5HQ!2m2!1d25.25875!2d91.59053!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.25875,91.59053,3a,75y,90t/data=!3m4!1e1!3m2!1sgze8gwvvurXd-8Ast5T5HQ!2e0'
    },
    {//49569 State Hwy 191 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGarEyoZ_O7qO06_rFECYIg!2m2!1d48.94128!2d-107.81819!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.94128,-107.81819,3a,75y,90t/data=!3m4!1e1!3m2!1sGarEyoZ_O7qO06_rFECYIg!2e0'
    },
    {//26 R. Cléria Patrocínio Pimentel (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJvZ68hvAmMbSJNHEM5CP6w!2m2!1d-20.38108!2d-40.49895!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.38108,-40.49895,3a,75y,90t/data=!3m4!1e1!3m2!1sJvZ68hvAmMbSJNHEM5CP6w!2e0'
    },
    {//ตำบล ขามเบี้ย, ローイエット (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shszf7-TPF68AYjoam2PM3Q!2m2!1d16.31907!2d103.7687!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.31907,103.7687,3a,75y,90t/data=!3m4!1e1!3m2!1shszf7-TPF68AYjoam2PM3Q!2e0'
    },
    {//379 R. Max Standancher (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saptn9TojmUwCkbAkynjYWA!2m2!1d-24.31339!2d-50.61805!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.31339,-50.61805,3a,75y,90t/data=!3m4!1e1!3m2!1saptn9TojmUwCkbAkynjYWA!2e0'
    },
    {//ファテープル, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stEb9ZhlaEMT1f4p98VQfuQ!2m2!1d24.92777!2d74.91706!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.92777,74.91706,3a,75y,90t/data=!3m4!1e1!3m2!1stEb9ZhlaEMT1f4p98VQfuQ!2e0'
    },
    {//AN-1251 (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syBJVhl1wmJaVCQoBdOQlTQ!2m2!1d-9.83213!2d-77.14814!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.83213,-77.14814,3a,75y,90t/data=!3m4!1e1!3m2!1syBJVhl1wmJaVCQoBdOQlTQ!2e0'
    },
    {//ノール (ルワンダ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNwLJqzC18M10OU1O5OXp2A!2m2!1d-1.50676!2d29.60635!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.50676,29.60635,3a,75y,90t/data=!3m4!1e1!3m2!1sNwLJqzC18M10OU1O5OXp2A!2e0'
    },
    {//1377 カタルパ・ドライブ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sItZOsNPb65rS3wFNzYkyfA!2m2!1d40.6419!2d-74.62592!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.6419,-74.62592,3a,75y,90t/data=!3m4!1e1!3m2!1sItZOsNPb65rS3wFNzYkyfA!2e0'
    },
    {//N2 (レユニオン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPpQgmPTLl9-8PEwQ9CBmLg!2m2!1d-21.01361!2d55.69133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.01361,55.69133,3a,75y,90t/data=!3m4!1e1!3m2!1sPpQgmPTLl9-8PEwQ9CBmLg!2e0'
    },
    {//リンク・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP85qCxyVjJOOE_fUoRUB7Q!2m2!1d22.01189!2d82.57796!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.01189,82.57796,3a,75y,90t/data=!3m4!1e1!3m2!1sP85qCxyVjJOOE_fUoRUB7Q!2e0'
    },
    {//1040 メモリアル・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s20uHtYTsIgijgmRnnuVKhQ!2m2!1d34.18788!2d-97.2145!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.18788,-97.2145,3a,75y,90t/data=!3m4!1e1!3m2!1s20uHtYTsIgijgmRnnuVKhQ!2e0'
    },
    {//11 ディール・ドライブ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXk0fs7MJPPCh-ZEcWPTWDQ!2m2!1d41.36206!2d-73.45004!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.36206,-73.45004,3a,75y,90t/data=!3m4!1e1!3m2!1sXk0fs7MJPPCh-ZEcWPTWDQ!2e0'
    },
    {//1 バークデール・プレイス (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSOYmAzYBs7LIkEsxtNb19Q!2m2!1d-33.69242!2d150.93541!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.69242,150.93541,3a,75y,90t/data=!3m4!1e1!3m2!1sSOYmAzYBs7LIkEsxtNb19Q!2e0'
    },
    {//62 ペドロ・デ・エレディア通り (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUijtOKQKIdRG0kZ8aLTBIA!2m2!1d10.39471!2d-75.49006!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.39471,-75.49006,3a,75y,90t/data=!3m4!1e1!3m2!1sUijtOKQKIdRG0kZ8aLTBIA!2e0'
    },
    {//ポダガー＝サスバ・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saTFQ1h3wKNYvu3WAb1ADJA!2m2!1d21.2573!2d85.05229!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.2573,85.05229,3a,75y,90t/data=!3m4!1e1!3m2!1saTFQ1h3wKNYvu3WAb1ADJA!2e0'
    },
    {//ダガミ, 東ヴィサヤ (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjTYf53I09SK4llMQi4J6lw!2m2!1d11.05064!2d124.87773!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.05064,124.87773,3a,75y,90t/data=!3m4!1e1!3m2!1sjTYf53I09SK4llMQi4J6lw!2e0'
    },
    {//171 アップショウ・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDHQ89PlQj8WAihnCLpFTFw!2m2!1d34.08046!2d-84.29887!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.08046,-84.29887,3a,75y,90t/data=!3m4!1e1!3m2!1sDHQ89PlQj8WAihnCLpFTFw!2e0'
    },
    {//طريق الطفيلة (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szS03TuOO_2bXY5C7iPMcZQ!2m2!1d30.79737!2d35.6993!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.79737,35.6993,3a,75y,90t/data=!3m4!1e1!3m2!1szS03TuOO_2bXY5C7iPMcZQ!2e0'
    },
    {//カカメガ (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjYpv0PsVMYrlZvnTGsWp0Q!2m2!1d0.34804!2d34.56101!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.34804,34.56101,3a,75y,90t/data=!3m4!1e1!3m2!1sjYpv0PsVMYrlZvnTGsWp0Q!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNZvNygaVzEgy8c30VEgtIQ!2m2!1d-20.21815!2d-43.69443!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.21815,-43.69443,3a,75y,90t/data=!3m4!1e1!3m2!1sNZvNygaVzEgy8c30VEgtIQ!2e0'
    },
    {//91 カレーラ 5 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz7TR0otejhBqeZV6-W9mtg!2m2!1d10.52098!2d-74.18303!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.52098,-74.18303,3a,75y,90t/data=!3m4!1e1!3m2!1sz7TR0otejhBqeZV6-W9mtg!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfUyzCGnSXSIJ3CVUhUx9oA!2m2!1d-22.45776!2d-46.11245!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.45776,-46.11245,3a,75y,90t/data=!3m4!1e1!3m2!1sfUyzCGnSXSIJ3CVUhUx9oA!2e0'
    },
    {//500 サウス 6th ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGO2aSQG2MaQJq1fLYTUX8w!2m2!1d45.74075!2d-87.05472!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.74075,-87.05472,3a,75y,90t/data=!3m4!1e1!3m2!1sGO2aSQG2MaQJq1fLYTUX8w!2e0'
    },
    {//カラパン・ノース・ロード (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2LsWmi6NbDiMjbQbjna1Fg!2m2!1d13.5059!2d120.92832!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.5059,120.92832,3a,75y,90t/data=!3m4!1e1!3m2!1s2LsWmi6NbDiMjbQbjna1Fg!2e0'
    },
    {//モンテヴィスタ, ダバオ地方 (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHfUmHzZqq0hHkbU33s1LPQ!2m2!1d7.68862!2d125.98975!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.68862,125.98975,3a,75y,90t/data=!3m4!1e1!3m2!1sHfUmHzZqq0hHkbU33s1LPQ!2e0'
    },
    {//225 パイニー・ホロー・ウィンズロウ・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUJB-ElDfCkAaaNKgfQYF8g!2m2!1d39.61924!2d-74.89457!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.61924,-74.89457,3a,75y,90t/data=!3m4!1e1!3m2!1sUJB-ElDfCkAaaNKgfQYF8g!2e0'
    },
    {//ウッドコック・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soUKHVZY_8sriSFl3dAvIaw!2m2!1d11.40978!2d76.69307!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.40978,76.69307,3a,75y,90t/data=!3m4!1e1!3m2!1soUKHVZY_8sriSFl3dAvIaw!2e0'
    },
    {//12A. ノルテ・ポニエンテ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sE5sSv1UfQxFg2Wunx7vjhA!2m2!1d16.12325!2d-92.06569!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.12325,-92.06569,3a,75y,90t/data=!3m4!1e1!3m2!1sE5sSv1UfQxFg2Wunx7vjhA!2e0'
    },
    {//ベタハリ, カルナータカ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scpkQdVn3NICaFJElnylKGA!2m2!1d11.79351!2d76.71144!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.79351,76.71144,3a,75y,90t/data=!3m4!1e1!3m2!1scpkQdVn3NICaFJElnylKGA!2e0'
    },
    {//1801 アルバラド (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8x_pdLgWrp2YjfolCpPS9g!2m2!1d-30.74884!2d-59.63679!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.74884,-59.63679,3a,75y,90t/data=!3m4!1e1!3m2!1s8x_pdLgWrp2YjfolCpPS9g!2e0'
    },
    {//209 エイト・マイル・ホロー・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sciMghIQ4vJNS9rdQPEK6dA!2m2!1d38.32314!2d-81.42474!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.32314,-81.42474,3a,75y,90t/data=!3m4!1e1!3m2!1sciMghIQ4vJNS9rdQPEK6dA!2e0'
    },
    {//ミンドロ・ウェスト・コースタル・ロード (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1se4UeWwcg34p8O2El2zHuGQ!2m2!1d13.26292!2d120.62053!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.26292,120.62053,3a,75y,90t/data=!3m4!1e1!3m2!1se4UeWwcg34p8O2El2zHuGQ!2e0'
    },
    {//Wilaya ya Machakos (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sunjf49ScOGiPsakgYBIfZw!2m2!1d-1.23818!2d37.33008!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.23818,37.33008,3a,75y,90t/data=!3m4!1e1!3m2!1sunjf49ScOGiPsakgYBIfZw!2e0'
    },
    {//301 マーシュ・アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRBRoJ3ozn5IFAi_xd0jByA!2m2!1d36.52626!2d-82.72508!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.52626,-82.72508,3a,75y,90t/data=!3m4!1e1!3m2!1sRBRoJ3ozn5IFAi_xd0jByA!2e0'
    },
    {//RN3 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMvG7mg3iV1d5WdfCrZ4zOA!2m2!1d-45.11272!2d-67.13084!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-45.11272,-67.13084,3a,75y,90t/data=!3m4!1e1!3m2!1sMvG7mg3iV1d5WdfCrZ4zOA!2e0'
    },
    {//7702 イースト・ネバダ・ドライブ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s91E7ZTG8OYp26bV4Fbk4Lw!2m2!1d31.45217!2d-110.18746!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.45217,-110.18746,3a,75y,90t/data=!3m4!1e1!3m2!1s91E7ZTG8OYp26bV4Fbk4Lw!2e0'
    },
    {//25 Stroebel St (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMbf-86Fk0Y7F3VqjR_HaTA!2m2!1d-32.33653!2d22.57665!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.33653,22.57665,3a,75y,90t/data=!3m4!1e1!3m2!1sMbf-86Fk0Y7F3VqjR_HaTA!2e0'
    },
    {//広尾町, 北海道 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb0n1i_zWgQsJZMbqsRez-A!2m2!1d42.29058!2d143.23537!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.29058,143.23537,3a,75y,90t/data=!3m4!1e1!3m2!1sb0n1i_zWgQsJZMbqsRez-A!2e0'
    },
    {//1633 NB-160 (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sznikDapYF_PrU06QtN8qwQ!2m2!1d47.51575!2d-65.32702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.51575,-65.32702,3a,75y,90t/data=!3m4!1e1!3m2!1sznikDapYF_PrU06QtN8qwQ!2e0'
    },
    {//社柑五路 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfKa9foUxZSFf7ka0i1LUcg!2m2!1d24.39831!2d120.67185!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.39831,120.67185,3a,75y,90t/data=!3m4!1e1!3m2!1sfKa9foUxZSFf7ka0i1LUcg!2e0'
    },
    {//2 ベネジト・アウヴェス・アモリン通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWDUmSaqsi6HSbFTIOjhRug!2m2!1d-14.46934!2d-56.84798!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.46934,-56.84798,3a,75y,90t/data=!3m4!1e1!3m2!1sWDUmSaqsi6HSbFTIOjhRug!2e0'
    },
    {//UT-313 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suI06zNcdFV-fVz1JQXFT3Q!2m2!1d38.5485!2d-109.77479!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.5485,-109.77479,3a,75y,90t/data=!3m4!1e1!3m2!1suI06zNcdFV-fVz1JQXFT3Q!2e0'
    },
    {//4 アベニーダ (グアテマラ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfojVp0O768YuneciehtLgg!2m2!1d14.29308!2d-91.91291!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.29308,-91.91291,3a,75y,90t/data=!3m4!1e1!3m2!1sfojVp0O768YuneciehtLgg!2e0'
    },
    {//ヘネラル・ラサロ・カルデナス・デル・リオ通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUXsmJbThT2DDKqmh3baaMQ!2m2!1d25.64439!2d-97.81549!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.64439,-97.81549,3a,75y,90t/data=!3m4!1e1!3m2!1sUXsmJbThT2DDKqmh3baaMQ!2e0'
    },
    {//イースト 400 ノース (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVRJaYz6uMmG72aJWjJxrkw!2m2!1d41.49283!2d-87.02399!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.49283,-87.02399,3a,75y,90t/data=!3m4!1e1!3m2!1sVRJaYz6uMmG72aJWjJxrkw!2e0'
    },
    {//R62 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sySlv-vJf_R_aAQ5nHsoI1w!2m2!1d-33.60368!2d22.0651!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.60368,22.0651,3a,75y,90t/data=!3m4!1e1!3m2!1sySlv-vJf_R_aAQ5nHsoI1w!2e0'
    },
    {//709 リッジウェイ・ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6uXCriPiGCyd4qIVjPERpQ!2m2!1d30.66472!2d-98.46814!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.66472,-98.46814,3a,75y,90t/data=!3m4!1e1!3m2!1s6uXCriPiGCyd4qIVjPERpQ!2e0'
    },
    {//フライング・パン・ランチ・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgH99aoNRtEqin6YF-whbMw!2m2!1d31.88011!2d-103.21853!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.88011,-103.21853,3a,75y,90t/data=!3m4!1e1!3m2!1sgH99aoNRtEqin6YF-whbMw!2e0'
    },
    {//RN38 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXfiw3hv_R0hda6bkdg4kOA!2m2!1d-31.40325!2d-64.47146!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.40325,-64.47146,3a,75y,90t/data=!3m4!1e1!3m2!1sXfiw3hv_R0hda6bkdg4kOA!2e0'
    },
    {//ベンハミン・イル, ソノラ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKWYHddPirlSOWcij2sIF0A!2m2!1d30.16286!2d-111.1213!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.16286,-111.1213,3a,75y,90t/data=!3m4!1e1!3m2!1sKWYHddPirlSOWcij2sIF0A!2e0'
    },
    {//ナリーニョ県 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3X0XC2OOtKNQDMnffIYA_g!2m2!1d0.92358!2d-77.81453!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.92358,-77.81453,3a,75y,90t/data=!3m4!1e1!3m2!1s3X0XC2OOtKNQDMnffIYA_g!2e0'
    },
    {//1204 3rd ストリート・ノースイースト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPG_86tMsfzQEKPf1ReVljg!2m2!1d42.68237!2d-91.89746!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.68237,-91.89746,3a,75y,90t/data=!3m4!1e1!3m2!1sPG_86tMsfzQEKPf1ReVljg!2e0'
    },
    {//連邦直轄区 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sA0EUtPfckdsdtstO063MUA!2m2!1d-15.73914!2d-47.76074!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.73914,-47.76074,3a,75y,90t/data=!3m4!1e1!3m2!1sA0EUtPfckdsdtstO063MUA!2e0'
    },
    {//4730 NB-114 (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRXpCBe2iX9y9YPkubu0lHA!2m2!1d45.78446!2d-64.62785!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.78446,-64.62785,3a,75y,90t/data=!3m4!1e1!3m2!1sRXpCBe2iX9y9YPkubu0lHA!2e0'
    },
    {//7199 County Rd 1 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spTLVN0knp8DbgUralWZ2Qw!2m2!1d42.65119!2d-81.93114!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.65119,-81.93114,3a,75y,90t/data=!3m4!1e1!3m2!1spTLVN0knp8DbgUralWZ2Qw!2e0'
    },
    {//1340 QC-155 (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s40fnoMX6GOfD2EU8bf1-pw!2m2!1d48.05554!2d-72.27691!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.05554,-72.27691,3a,75y,90t/data=!3m4!1e1!3m2!1s40fnoMX6GOfD2EU8bf1-pw!2e0'
    },
    {//PR-443 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stdbF6exgPpJl8-kr-ljA5A!2m2!1d-23.01789!2d-50.88344!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.01789,-50.88344,3a,75y,90t/data=!3m4!1e1!3m2!1stdbF6exgPpJl8-kr-ljA5A!2e0'
    },
    {//南部州 (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk8JIFLvmqgsMMmz3U0_XPw!2m2!1d6.02132!2d80.70067!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.02132,80.70067,3a,75y,90t/data=!3m4!1e1!3m2!1sk8JIFLvmqgsMMmz3U0_XPw!2e0'
    },
    {//サンヤニ - ウェンチ・ロード (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4cbtDd-IzuLSoymdkIxRuQ!2m2!1d7.50622!2d-2.17332!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.50622,-2.17332,3a,75y,90t/data=!3m4!1e1!3m2!1s4cbtDd-IzuLSoymdkIxRuQ!2e0'
    },
    {//サン・パウロ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srMqMhkGX4YfgCdB2GKwa-w!2m2!1d-22.49361!2d-52.95213!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.49361,-52.95213,3a,75y,90t/data=!3m4!1e1!3m2!1srMqMhkGX4YfgCdB2GKwa-w!2e0'
    },
    {//シカゴ, イリノイ州 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7rGg1TJEOmUuviQGeg1xFg!2m2!1d41.80478!2d-87.58258!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.80478,-87.58258,3a,75y,90t/data=!3m4!1e1!3m2!1s7rGg1TJEOmUuviQGeg1xFg!2e0'
    },
    {//1138 County Rd 309 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6h1TaNXxVbjek6zYxhwlkQ!2m2!1d32.33175!2d-97.66133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.33175,-97.66133,3a,75y,90t/data=!3m4!1e1!3m2!1s6h1TaNXxVbjek6zYxhwlkQ!2e0'
    },
    {//208 State Rte 698 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suOFmqgi0aKssD0zpxLbsjQ!2m2!1d37.76644!2d-79.96854!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.76644,-79.96854,3a,75y,90t/data=!3m4!1e1!3m2!1suOFmqgi0aKssD0zpxLbsjQ!2e0'
    },
    {//1233 サン・ミッシェル通り (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0FESjd8-Aeo4rLQx5mLMsA!2m2!1d47.5045!2d-68.44628!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.5045,-68.44628,3a,75y,90t/data=!3m4!1e1!3m2!1s0FESjd8-Aeo4rLQx5mLMsA!2e0'
    },
    {//135 サンローズ・レーン (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGfsa_pmeMEK5-5KjWypVWg!2m2!1d36.39248!2d-84.07228!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.39248,-84.07228,3a,75y,90t/data=!3m4!1e1!3m2!1sGfsa_pmeMEK5-5KjWypVWg!2e0'
    },
    {//Saratok, サラワク (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1savz4UEX9wP4igLf2oKafNw!2m2!1d1.74287!2d111.34274!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.74287,111.34274,3a,75y,90t/data=!3m4!1e1!3m2!1savz4UEX9wP4igLf2oKafNw!2e0'
    },
    {//AH150 (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb8qxsyV-Ssbb47DJkfG7cQ!2m2!1d2.87266!2d112.82985!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@2.87266,112.82985,3a,75y,90t/data=!3m4!1e1!3m2!1sb8qxsyV-Ssbb47DJkfG7cQ!2e0'
    },
    {//マリア F. ゴンサレス (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su9xM1w-KHblkvSsxiAFnEw!2m2!1d-25.3275!2d-57.55969!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.3275,-57.55969,3a,75y,90t/data=!3m4!1e1!3m2!1su9xM1w-KHblkvSsxiAFnEw!2e0'
    },
    {//RP2 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3ouTms2BJ4RWCHPTL34CnQ!2m2!1d-29.26132!2d-61.75887!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.26132,-61.75887,3a,75y,90t/data=!3m4!1e1!3m2!1s3ouTms2BJ4RWCHPTL34CnQ!2e0'
    },
    {//9201 サウス 3200 ウェスト・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svAnC7LX3hJoww5YDEfOZJg!2m2!1d40.06448!2d-111.73259!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.06448,-111.73259,3a,75y,90t/data=!3m4!1e1!3m2!1svAnC7LX3hJoww5YDEfOZJg!2e0'
    },
    {//7869 コールドウォーター・ドライブ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV0PBTDqpI9gTGzZxGrfsiQ!2m2!1d46.26694!2d-119.19402!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.26694,-119.19402,3a,75y,90t/data=!3m4!1e1!3m2!1sV0PBTDqpI9gTGzZxGrfsiQ!2e0'
    },
    {//5401 144 ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjxpxjdfSafX24yITpybtiw!2m2!1d43.54774!2d-81.01619!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.54774,-81.01619,3a,75y,90t/data=!3m4!1e1!3m2!1sjxpxjdfSafX24yITpybtiw!2e0'
    },
    {//サン・パウロ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSQXgozIvPqP4ZYmScyiADA!2m2!1d-23.27518!2d-45.77342!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.27518,-45.77342,3a,75y,90t/data=!3m4!1e1!3m2!1sSQXgozIvPqP4ZYmScyiADA!2e0'
    },
    {//クズロルダ, クズルオルダ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqVwNCzdiasXHTbXkhQEoFQ!2m2!1d44.77324!2d65.53044!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.77324,65.53044,3a,75y,90t/data=!3m4!1e1!3m2!1sqVwNCzdiasXHTbXkhQEoFQ!2e0'
    },
    {//481 サンタ・イザベウ通り (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOAAyGTIpBXWqlpFNvr0o4w!2m2!1d-3.29263!2d-52.54495!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.29263,-52.54495,3a,75y,90t/data=!3m4!1e1!3m2!1sOAAyGTIpBXWqlpFNvr0o4w!2e0'
    },
    {//3365 フォックス・クリーク・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNscIyNcqh1-CGcF1HpLLbQ!2m2!1d38.39233!2d-91.15434!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.39233,-91.15434,3a,75y,90t/data=!3m4!1e1!3m2!1sNscIyNcqh1-CGcF1HpLLbQ!2e0'
    },
    {//2150 カレーラ 37 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEaZ8AJ23suBeAmYmg-dIAg!2m2!1d6.77261!2d-76.13242!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.77261,-76.13242,3a,75y,90t/data=!3m4!1e1!3m2!1sEaZ8AJ23suBeAmYmg-dIAg!2e0'
    },
    {//サララ, ドファール (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqiE0KFM7UdqN8G0-OPKsZA!2m2!1d16.99876!2d54.06449!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.99876,54.06449,3a,75y,90t/data=!3m4!1e1!3m2!1sqiE0KFM7UdqN8G0-OPKsZA!2e0'
    },
    {//530 コンスティトゥシオン・ノルテ通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s21tJAr08OzCY5iGZE2zARQ!2m2!1d19.9652!2d-102.30048!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.9652,-102.30048,3a,75y,90t/data=!3m4!1e1!3m2!1s21tJAr08OzCY5iGZE2zARQ!2e0'
    },
    {//96 オタシーリオ・パシェコ通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq3OEERZqfBTPvW7FwPVe-Q!2m2!1d-28.93673!2d-49.50431!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.93673,-49.50431,3a,75y,90t/data=!3m4!1e1!3m2!1sq3OEERZqfBTPvW7FwPVe-Q!2e0'
    },
    {//1750 サウスイースト 8th アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIUrmkhoQiDDsrCts3pLVRQ!2m2!1d34.74986!2d-87.69158!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.74986,-87.69158,3a,75y,90t/data=!3m4!1e1!3m2!1sIUrmkhoQiDDsrCts3pLVRQ!2e0'
    },
    {//742 カウンティー・ロード-2194 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxAy24M715h5_jm6NKjgOKw!2m2!1d37.51429!2d-86.54763!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.51429,-86.54763,3a,75y,90t/data=!3m4!1e1!3m2!1sxAy24M715h5_jm6NKjgOKw!2e0'
    },
    {//Jl. Lubuk Beringin (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAAYU0VoOOTj9I_czoda57w!2m2!1d-3.76517!2d103.5682!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.76517,103.5682,3a,75y,90t/data=!3m4!1e1!3m2!1sAAYU0VoOOTj9I_czoda57w!2e0'
    },
    {//LB カナル・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjjKFt-ePAnC6U0lbaaJg2w!2m2!1d10.83339!2d75.95784!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.83339,75.95784,3a,75y,90t/data=!3m4!1e1!3m2!1sjjKFt-ePAnC6U0lbaaJg2w!2e0'
    },
    {//エクアドル 45 (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk544byKbijSwg6L7AZALdw!2m2!1d-3.78264!2d-78.74803!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.78264,-78.74803,3a,75y,90t/data=!3m4!1e1!3m2!1sk544byKbijSwg6L7AZALdw!2e0'
    },
    {//24 フェザンツ・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srvErAI4rMb0I2BGqedUC8w!2m2!1d-34.13191!2d150.82469!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.13191,150.82469,3a,75y,90t/data=!3m4!1e1!3m2!1srvErAI4rMb0I2BGqedUC8w!2e0'
    },
    {//コケエ・ロード (ハワイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj5D1Qaf_SvvOJQ_wb5s0BQ!2m2!1d22.00043!2d-159.7049!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.00043,-159.7049,3a,75y,90t/data=!3m4!1e1!3m2!1sj5D1Qaf_SvvOJQ_wb5s0BQ!2e0'
    },
    {//319 ジョアキン・ダ・コスタ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYufmLlLYyqi8z0cJu8dEMQ!2m2!1d-20.38478!2d-44.49042!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.38478,-44.49042,3a,75y,90t/data=!3m4!1e1!3m2!1sYufmLlLYyqi8z0cJu8dEMQ!2e0'
    },
    {//6837 NY-22 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWSm_SzPKAnswlKVuU2oYcw!2m2!1d42.03941!2d-73.52574!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.03941,-73.52574,3a,75y,90t/data=!3m4!1e1!3m2!1sWSm_SzPKAnswlKVuU2oYcw!2e0'
    },
    {//1102 コリエンテス (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shMXkzPtSnIiL9tsdsugSJQ!2m2!1d-29.14789!2d-59.65894!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.14789,-59.65894,3a,75y,90t/data=!3m4!1e1!3m2!1shMXkzPtSnIiL9tsdsugSJQ!2e0'
    },
    {//88 көчөсү Кыргыз Републикасы (キルギス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV5vss_Ewk45-ggdXe-Do0g!2m2!1d40.93563!2d72.9917!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.93563,72.9917,3a,75y,90t/data=!3m4!1e1!3m2!1sV5vss_Ewk45-ggdXe-Do0g!2e0'
    },
    {//1102 ノース 7th ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-BhfYJ0UF6JcBQvkSveCdg!2m2!1d30.32184!2d-95.45051!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.32184,-95.45051,3a,75y,90t/data=!3m4!1e1!3m2!1s-BhfYJ0UF6JcBQvkSveCdg!2e0'
    },
    {//北部地区 (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNhaiVUmy9PRE0A91jnAC6g!2m2!1d32.98772!2d35.62377!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.98772,35.62377,3a,75y,90t/data=!3m4!1e1!3m2!1sNhaiVUmy9PRE0A91jnAC6g!2e0'
    },
    {//ĐT234 (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sA_Prk5xWdfsiFGm_wyo3_w!2m2!1d21.90729!2d106.73175!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.90729,106.73175,3a,75y,90t/data=!3m4!1e1!3m2!1sA_Prk5xWdfsiFGm_wyo3_w!2e0'
    },
    {//PE-1NT (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5L0chLU6KEPBpwGV9yCroA!2m2!1d-4.64358!2d-79.72444!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.64358,-79.72444,3a,75y,90t/data=!3m4!1e1!3m2!1s5L0chLU6KEPBpwGV9yCroA!2e0'
    },
    {//707 SC-486 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sC9iz2EnU0ST221kMRICujw!2m2!1d-27.1996!2d-49.08391!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.1996,-49.08391,3a,75y,90t/data=!3m4!1e1!3m2!1sC9iz2EnU0ST221kMRICujw!2e0'
    },
    {//当麻町, 北海道 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEvr1XvfbGV4DIpu0NMllrg!2m2!1d43.80065!2d142.55233!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.80065,142.55233,3a,75y,90t/data=!3m4!1e1!3m2!1sEvr1XvfbGV4DIpu0NMllrg!2e0'
    },
    {//3 ジョーンズ・アベニュー (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sO1MCbn-oNq0vp7W1YUzp3A!2m2!1d-30.51606!2d151.68162!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.51606,151.68162,3a,75y,90t/data=!3m4!1e1!3m2!1sO1MCbn-oNq0vp7W1YUzp3A!2e0'
    },
    {//ラ・ペーニャ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqgt4bI6b7GuvF7yxs-WMWQ!2m2!1d5.15532!2d-74.39916!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.15532,-74.39916,3a,75y,90t/data=!3m4!1e1!3m2!1sqgt4bI6b7GuvF7yxs-WMWQ!2e0'
    },
    {//910 ドライ・ホロー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL6GKLAOBDl8KUgj7zylrLg!2m2!1d37.75667!2d-79.60084!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.75667,-79.60084,3a,75y,90t/data=!3m4!1e1!3m2!1sL6GKLAOBDl8KUgj7zylrLg!2e0'
    },
    {//R. N-13 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUxBJr55Gp0M_ul3TGJhaSQ!2m2!1d-10.82091!2d-49.64181!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.82091,-49.64181,3a,75y,90t/data=!3m4!1e1!3m2!1sUxBJr55Gp0M_ul3TGJhaSQ!2e0'
    },
    {//VA-130 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swuVuA57gvzKziJJU_Fm0LQ!2m2!1d37.57839!2d-79.37545!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.57839,-79.37545,3a,75y,90t/data=!3m4!1e1!3m2!1swuVuA57gvzKziJJU_Fm0LQ!2e0'
    },
    {//ベルビル・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8xRTqQnp1m4wVNZLjKbKfg!2m2!1d37.36709!2d-87.82565!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.36709,-87.82565,3a,75y,90t/data=!3m4!1e1!3m2!1s8xRTqQnp1m4wVNZLjKbKfg!2e0'
    },
    {//26012 ラ・パルマ・コート (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq_aRSS7l_4sej02I3g6r6A!2m2!1d34.40627!2d-118.55184!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.40627,-118.55184,3a,75y,90t/data=!3m4!1e1!3m2!1sq_aRSS7l_4sej02I3g6r6A!2e0'
    },
    {//9121 ホーナー・コート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxghKclCCe1FZIHzdDDfRGQ!2m2!1d38.84726!2d-77.26058!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.84726,-77.26058,3a,75y,90t/data=!3m4!1e1!3m2!1sxghKclCCe1FZIHzdDDfRGQ!2e0'
    },
    {//マノエウ・パース・ソブリーニョ通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWzPTXMe9j2fSBUo63oJwoQ!2m2!1d-7.14612!2d-45.34495!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.14612,-45.34495,3a,75y,90t/data=!3m4!1e1!3m2!1sWzPTXMe9j2fSBUo63oJwoQ!2e0'
    },
    {//503 ブラジル通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxw_9Z2MYJLW955ZKAtbMAg!2m2!1d30.61494!2d-106.50979!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.61494,-106.50979,3a,75y,90t/data=!3m4!1e1!3m2!1sxw_9Z2MYJLW955ZKAtbMAg!2e0'
    },
    {//ヴェレアドル・サジ・マルコンデス・ロウレイロ高速道路 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ss1esfNHj1EiS2nFtdgotwg!2m2!1d-26.23623!2d-52.16558!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.23623,-52.16558,3a,75y,90t/data=!3m4!1e1!3m2!1ss1esfNHj1EiS2nFtdgotwg!2e0'
    },
    {//山口市, 山口県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWhpyFlV0iA6sKOncxztuwA!2m2!1d34.15308!2d131.51004!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.15308,131.51004,3a,75y,90t/data=!3m4!1e1!3m2!1sWhpyFlV0iA6sKOncxztuwA!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWzDMOkaviQ7lwAgOjX6CjQ!2m2!1d-18.7182!2d-46.49508!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.7182,-46.49508,3a,75y,90t/data=!3m4!1e1!3m2!1sWzDMOkaviQ7lwAgOjX6CjQ!2e0'
    },
    {//842 ジェトゥーリオ・ヴァルガス通り (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svegsex4xG1_8MPKTLz3DXQ!2m2!1d-3.29742!2d-60.61595!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.29742,-60.61595,3a,75y,90t/data=!3m4!1e1!3m2!1svegsex4xG1_8MPKTLz3DXQ!2e0'
    },
    {//木城町, 宮崎県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soxQOtxWFAmlhEdFzD__SQg!2m2!1d32.21912!2d131.41511!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.21912,131.41511,3a,75y,90t/data=!3m4!1e1!3m2!1soxQOtxWFAmlhEdFzD__SQg!2e0'
    },
    {//アジュマーン (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1bVLKl-hcEiyfMzAupIclg!2m2!1d25.4356!2d55.49392!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.4356,55.49392,3a,75y,90t/data=!3m4!1e1!3m2!1s1bVLKl-hcEiyfMzAupIclg!2e0'
    },
    {//18 Sabanalarga-Manatí (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swThvW8DZTbcyoyEACKgn6Q!2m2!1d10.60907!2d-74.92599!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.60907,-74.92599,3a,75y,90t/data=!3m4!1e1!3m2!1swThvW8DZTbcyoyEACKgn6Q!2e0'
    },
    {//905 NM-53 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sslJBLiR7w5DOJtIM3hC0Xg!2m2!1d35.06689!2d-108.89503!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.06689,-108.89503,3a,75y,90t/data=!3m4!1e1!3m2!1sslJBLiR7w5DOJtIM3hC0Xg!2e0'
    },
    {//RP43 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqyM424sXrz_L_EDO4hgbKA!2m2!1d-46.68778!2d-68.29299!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-46.68778,-68.29299,3a,75y,90t/data=!3m4!1e1!3m2!1sqyM424sXrz_L_EDO4hgbKA!2e0'
    },
    {//134 R. Altair Stengel Tieghi (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stOpy5uyagiohnkFRtHJvUQ!2m2!1d-23.10618!2d-48.60686!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.10618,-48.60686,3a,75y,90t/data=!3m4!1e1!3m2!1stOpy5uyagiohnkFRtHJvUQ!2e0'
    },
    {//A4 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTjI1IyL9lD0Gpkmz7vhmag!2m2!1d-30.15767!2d28.2128!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.15767,28.2128,3a,75y,90t/data=!3m4!1e1!3m2!1sTjI1IyL9lD0Gpkmz7vhmag!2e0'
    },
    {//An Châu, ゲアン省 (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6PPYJgpmVlEFsK_-8qwEig!2m2!1d18.93949!2d105.61732!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.93949,105.61732,3a,75y,90t/data=!3m4!1e1!3m2!1s6PPYJgpmVlEFsK_-8qwEig!2e0'
    },
    {//1038 セフェリノ・ナムンクラ (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbxZOyEwjJALMyowPEJjfrQ!2m2!1d-38.81998!2d-68.06434!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.81998,-68.06434,3a,75y,90t/data=!3m4!1e1!3m2!1sbxZOyEwjJALMyowPEJjfrQ!2e0'
    },
    {//グレシア通り (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc1s9pPqEYjHKPhIAcew3eg!2m2!1d-23.39512!2d-64.43009!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.39512,-64.43009,3a,75y,90t/data=!3m4!1e1!3m2!1sc1s9pPqEYjHKPhIAcew3eg!2e0'
    },
    {//75 R. Vinte e Quatro de Outubro (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMtaYS0t_9HWzWcJpBcjmKA!2m2!1d-14.8679!2d-39.59292!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.8679,-39.59292,3a,75y,90t/data=!3m4!1e1!3m2!1sMtaYS0t_9HWzWcJpBcjmKA!2e0'
    },
    {//ウーリツァ・ヴェセロヤルスキー・トラクト (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suxk6nKJRf5DBt-X6Q5sPvA!2m2!1d51.3268!2d81.12159!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.3268,81.12159,3a,75y,90t/data=!3m4!1e1!3m2!1suxk6nKJRf5DBt-X6Q5sPvA!2e0'
    },
    {//マットグロッソ州 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEcSjhGTOGPqmAhTMa-BzuA!2m2!1d-9.96724!2d-57.53617!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.96724,-57.53617,3a,75y,90t/data=!3m4!1e1!3m2!1sEcSjhGTOGPqmAhTMa-BzuA!2e0'
    },
    {//パラナ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srrGeQuWVZHmgF0Z5n_zseQ!2m2!1d-25.30997!2d-51.46554!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.30997,-51.46554,3a,75y,90t/data=!3m4!1e1!3m2!1srrGeQuWVZHmgF0Z5n_zseQ!2e0'
    },
    {//808 イースト・タイラー・アベニュー (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0jmqwNQ6lQQJ9-UhaXX97w!2m2!1d36.13281!2d-97.04799!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.13281,-97.04799,3a,75y,90t/data=!3m4!1e1!3m2!1s0jmqwNQ6lQQJ9-UhaXX97w!2e0'
    },
    {//89 Campbell Rd (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sy3nOhYeqU9nV6QCAwBEatQ!2m2!1d-42.81662!2d173.22787!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-42.81662,173.22787,3a,75y,90t/data=!3m4!1e1!3m2!1sy3nOhYeqU9nV6QCAwBEatQ!2e0'
    },
    {//PI-470 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s02pUy--E09YGLmmtXDJ7Lg!2m2!1d-9.25317!2d-43.45668!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.25317,-43.45668,3a,75y,90t/data=!3m4!1e1!3m2!1s02pUy--E09YGLmmtXDJ7Lg!2e0'
    },
    {//703 サウス・ブールバード・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMF1XT15E_wHCU7hHvns_dw!2m2!1d30.89979!2d-84.55825!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.89979,-84.55825,3a,75y,90t/data=!3m4!1e1!3m2!1sMF1XT15E_wHCU7hHvns_dw!2e0'
    },
    {//123 エリス・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLVUn3kzrTTqovsJvq0XJ3Q!2m2!1d31.3084!2d-86.25066!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.3084,-86.25066,3a,75y,90t/data=!3m4!1e1!3m2!1sLVUn3kzrTTqovsJvq0XJ3Q!2e0'
    },
    {//N2 (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sD20uhqB6VKnTiAXl8ED-Gg!2m2!1d15.48751!2d-16.33401!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.48751,-16.33401,3a,75y,90t/data=!3m4!1e1!3m2!1sD20uhqB6VKnTiAXl8ED-Gg!2e0'
    },
    {//イグアス, アルト・パラナ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2xH4CDjb9y7Miw92BWgeig!2m2!1d-25.569!2d-54.97344!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.569,-54.97344,3a,75y,90t/data=!3m4!1e1!3m2!1s2xH4CDjb9y7Miw92BWgeig!2e0'
    },
    {//1113 カレーラ 5 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slK3QpRev3afmlVdeHD0Msw!2m2!1d5.16899!2d-75.51908!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.16899,-75.51908,3a,75y,90t/data=!3m4!1e1!3m2!1slK3QpRev3afmlVdeHD0Msw!2e0'
    },
    {//Google マップ (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHvA_P18nJM8lxAqy-R60dw!2m2!1d5.39719!2d100.33015!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.39719,100.33015,3a,75y,90t/data=!3m4!1e1!3m2!1sHvA_P18nJM8lxAqy-R60dw!2e0'
    },
    {//89 Trans-Canada Hwy (ブリティッシュコロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_sUgPHRHBb3SRPrWJp2hwQ!2m2!1d50.65126!2d-121.35335!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.65126,-121.35335,3a,75y,90t/data=!3m4!1e1!3m2!1s_sUgPHRHBb3SRPrWJp2hwQ!2e0'
    },
    {//東ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKYurjQf1WR4MIyVtMjsbHw!2m2!1d-8.10401!2d112.37718!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.10401,112.37718,3a,75y,90t/data=!3m4!1e1!3m2!1sKYurjQf1WR4MIyVtMjsbHw!2e0'
    },
    {//2221 ドゥーケ・デ・カシアス通り (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXxuihILfEHqTT2I0oCZCcg!2m2!1d-10.77437!2d-65.32599!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.77437,-65.32599,3a,75y,90t/data=!3m4!1e1!3m2!1sXxuihILfEHqTT2I0oCZCcg!2e0'
    },
    {//ジェオルジェ・デ・アウメイダ・フレイタス道路 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOzlYEejlofDJkGuAPbSKhg!2m2!1d-22.01651!2d-48.19694!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.01651,-48.19694,3a,75y,90t/data=!3m4!1e1!3m2!1sOzlYEejlofDJkGuAPbSKhg!2e0'
    },
    {//F117 (ナイジェリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYClGmP7VOl8H-suxOqj_jg!2m2!1d7.7155!2d5.03045!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.7155,5.03045,3a,75y,90t/data=!3m4!1e1!3m2!1sYClGmP7VOl8H-suxOqj_jg!2e0'
    },
    {//ビア・ア・バレンシア (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEGn8omJeFh0a7lG_FYCAfw!2m2!1d8.23604!2d-76.04213!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.23604,-76.04213,3a,75y,90t/data=!3m4!1e1!3m2!1sEGn8omJeFh0a7lG_FYCAfw!2e0'
    },
    {//ตำบล ดอนอะราง, ブリラム (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6Yy-yOm1VVFVbICR-MdATQ!2m2!1d14.66024!2d102.5269!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.66024,102.5269,3a,75y,90t/data=!3m4!1e1!3m2!1s6Yy-yOm1VVFVbICR-MdATQ!2e0'
    },
    {//ビア・ア・コンゴマ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swWR74_hiqKNsUIh4-H_EQw!2m2!1d-0.34564!2d-79.28704!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.34564,-79.28704,3a,75y,90t/data=!3m4!1e1!3m2!1swWR74_hiqKNsUIh4-H_EQw!2e0'
    },
    {//435 Avenida 28 De Julio (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCTeb4qoOFqEY8hXtYvhTjg!2m2!1d-16.56274!2d-69.03989!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.56274,-69.03989,3a,75y,90t/data=!3m4!1e1!3m2!1sCTeb4qoOFqEY8hXtYvhTjg!2e0'
    },
    {//ベラグアス (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVGJR7iDqOCy9U2GeLXPkAw!2m2!1d8.41982!2d-81.2136!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.41982,-81.2136,3a,75y,90t/data=!3m4!1e1!3m2!1sVGJR7iDqOCy9U2GeLXPkAw!2e0'
    },
    {//デウォルプラ, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stMX3ffVumQKyAlU-BEC1uQ!2m2!1d26.48248!2d71.5858!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.48248,71.5858,3a,75y,90t/data=!3m4!1e1!3m2!1stMX3ffVumQKyAlU-BEC1uQ!2e0'
    },
    {//ルーガ (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAZC8Vg_GcXWo73ds6eZw-Q!2m2!1d15.52192!2d-16.53949!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.52192,-16.53949,3a,75y,90t/data=!3m4!1e1!3m2!1sAZC8Vg_GcXWo73ds6eZw-Q!2e0'
    },
    {//伊豆の国市, 静岡県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5Iahq7D7fz0r0kXhwS9lCQ!2m2!1d35.05368!2d138.94229!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.05368,138.94229,3a,75y,90t/data=!3m4!1e1!3m2!1s5Iahq7D7fz0r0kXhwS9lCQ!2e0'
    },
    {//Way 4213 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEItAvI1iOU5EtPXMYx2OqQ!2m2!1d23.5938!2d58.38607!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.5938,58.38607,3a,75y,90t/data=!3m4!1e1!3m2!1sEItAvI1iOU5EtPXMYx2OqQ!2e0'
    },
    {//西スラウェシ (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf_weqqWXhYmp4-OCMAlucA!2m2!1d-3.42458!2d118.87971!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.42458,118.87971,3a,75y,90t/data=!3m4!1e1!3m2!1sf_weqqWXhYmp4-OCMAlucA!2e0'
    },
    {//500 アデラ・レーン (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXbVOrIyCqXhv4D93T7Lo7A!2m2!1d32.69118!2d-117.17168!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.69118,-117.17168,3a,75y,90t/data=!3m4!1e1!3m2!1sXbVOrIyCqXhv4D93T7Lo7A!2e0'
    },
    {//3150 ノース 31st アベニュー (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1-BVCPUQ6vjEYsfSoi4ebw!2m2!1d33.48436!2d-112.12604!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.48436,-112.12604,3a,75y,90t/data=!3m4!1e1!3m2!1s1-BVCPUQ6vjEYsfSoi4ebw!2e0'
    },
    {//25 アウフレド・コヘーア・デ・アラウージョ通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siLAhjwXDGhDittnxhIGtVw!2m2!1d-8.77761!2d-36.62061!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.77761,-36.62061,3a,75y,90t/data=!3m4!1e1!3m2!1siLAhjwXDGhDittnxhIGtVw!2e0'
    },
    {//طريق السلطان ثويني بن سعيد (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQS72Zp1SFBxMlPgw6W9h3w!2m2!1d23.72572!2d55.90127!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.72572,55.90127,3a,75y,90t/data=!3m4!1e1!3m2!1sQS72Zp1SFBxMlPgw6W9h3w!2e0'
    },
    {//477 Ruta 199 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slD4HAfolVyxdYkFIuWfZ7A!2m2!1d-39.35799!2d-71.58803!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-39.35799,-71.58803,3a,75y,90t/data=!3m4!1e1!3m2!1slD4HAfolVyxdYkFIuWfZ7A!2e0'
    },
    {//TO-425 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svE1L9OWlZ9mFljyeJFqSVQ!2m2!1d-7.70699!2d-47.33949!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.70699,-47.33949,3a,75y,90t/data=!3m4!1e1!3m2!1svE1L9OWlZ9mFljyeJFqSVQ!2e0'
    },
    {//ラハッダトゥー, サバ (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOiVHq2Ecq91SVozoHxT-ig!2m2!1d5.02981!2d118.30928!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.02981,118.30928,3a,75y,90t/data=!3m4!1e1!3m2!1sOiVHq2Ecq91SVozoHxT-ig!2e0'
    },
    {//ビヤエルモサ, タバスコ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQoMWSjM3caq16b1-gDwODw!2m2!1d17.98698!2d-92.96227!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.98698,-92.96227,3a,75y,90t/data=!3m4!1e1!3m2!1sQoMWSjM3caq16b1-gDwODw!2e0'
    },
    {//ナロク (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCh97SOl1di9G92guzxl40Q!2m2!1d-1.33824!2d34.95!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.33824,34.95,3a,75y,90t/data=!3m4!1e1!3m2!1sCh97SOl1di9G92guzxl40Q!2e0'
    },
    {//ตำบล ม่วงยาย, チエンラーイ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBbNJVfDDPPkc7rSqAL6Ykw!2m2!1d20.15902!2d100.5425!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.15902,100.5425,3a,75y,90t/data=!3m4!1e1!3m2!1sBbNJVfDDPPkc7rSqAL6Ykw!2e0'
    },
    {//滝川市, 北海道 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suq8Ktcah5VrDi-VlIcyT4A!2m2!1d43.59152!2d141.9122!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.59152,141.9122,3a,75y,90t/data=!3m4!1e1!3m2!1suq8Ktcah5VrDi-VlIcyT4A!2e0'
    },
    {//51104 Range Rd 213 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soK8s_gJSwrHXUoRUrAlA0Q!2m2!1d53.38379!2d-113.02571!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.38379,-113.02571,3a,75y,90t/data=!3m4!1e1!3m2!1soK8s_gJSwrHXUoRUrAlA0Q!2e0'
    },
    {//3640 ノース・オーバーランド・ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCdUykFWaUZGz679Sa0P7zQ!2m2!1d44.52178!2d-88.16915!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.52178,-88.16915,3a,75y,90t/data=!3m4!1e1!3m2!1sCdUykFWaUZGz679Sa0P7zQ!2e0'
    },
    {//1424 キャッスル・コート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVeq2VqfZtN5dfseHGgFrQg!2m2!1d39.17273!2d-108.71255!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.17273,-108.71255,3a,75y,90t/data=!3m4!1e1!3m2!1sVeq2VqfZtN5dfseHGgFrQg!2e0'
    },
    {//BR-146 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1KkFOKxeiNk39bgHRvwSZg!2m2!1d-21.5991!2d-46.41234!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.5991,-46.41234,3a,75y,90t/data=!3m4!1e1!3m2!1s1KkFOKxeiNk39bgHRvwSZg!2e0'
    },
    {//MT-206 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYtxpsylczRD2dtpISrBjgA!2m2!1d-9.37599!2d-59.44831!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.37599,-59.44831,3a,75y,90t/data=!3m4!1e1!3m2!1sYtxpsylczRD2dtpISrBjgA!2e0'
    },
    {//1645 センテニアル・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9s6MRZX1qhCWVyhYGCIEpg!2m2!1d40.18812!2d-105.09479!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.18812,-105.09479,3a,75y,90t/data=!3m4!1e1!3m2!1s9s6MRZX1qhCWVyhYGCIEpg!2e0'
    },
    {//エンセナダ - ラサロ・カルデナス (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIV0YYnWbNOYfMtYgpOS0DQ!2m2!1d31.67873!2d-116.5264!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.67873,-116.5264,3a,75y,90t/data=!3m4!1e1!3m2!1sIV0YYnWbNOYfMtYgpOS0DQ!2e0'
    },
    {//Cra. 3ª (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXJc43AzQb5kVvgy9VNpAtg!2m2!1d3.91709!2d-75.47668!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.91709,-75.47668,3a,75y,90t/data=!3m4!1e1!3m2!1sXJc43AzQb5kVvgy9VNpAtg!2e0'
    },
    {//604 ソファノル・パラ (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sduhhuZXAKMRhems7m6OL6A!2m2!1d-26.38887!2d-70.04033!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.38887,-70.04033,3a,75y,90t/data=!3m4!1e1!3m2!1sduhhuZXAKMRhems7m6OL6A!2e0'
    },
    {//E38 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgEwqOFBhXSyz0tUtdJLZvQ!2m2!1d-0.37963!2d-79.89404!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.37963,-79.89404,3a,75y,90t/data=!3m4!1e1!3m2!1sgEwqOFBhXSyz0tUtdJLZvQ!2e0'
    },
    {//558 パサヘ・リスペルグエル (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGPV1m6_IXyaUaBYDv1T-hg!2m2!1d-38.98043!2d-72.64461!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.98043,-72.64461,3a,75y,90t/data=!3m4!1e1!3m2!1sGPV1m6_IXyaUaBYDv1T-hg!2e0'
    },
    {//1627 トラヴェッサ・マガリャエンイス・バラタ (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5oBZNzQBA9PEHLhAlCe-uQ!2m2!1d-1.2006!2d-47.38927!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.2006,-47.38927,3a,75y,90t/data=!3m4!1e1!3m2!1s5oBZNzQBA9PEHLhAlCe-uQ!2e0'
    },
    {//身延町, 山梨県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPAC7xnd4fK7RdLPYdXT29g!2m2!1d35.42438!2d138.4637!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.42438,138.4637,3a,75y,90t/data=!3m4!1e1!3m2!1sPAC7xnd4fK7RdLPYdXT29g!2e0'
    },
    {//103 イースト 150 サウス (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqj5zXM4aUrMLRVonSoE5mQ!2m2!1d41.62102!2d-84.98225!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.62102,-84.98225,3a,75y,90t/data=!3m4!1e1!3m2!1sqj5zXM4aUrMLRVonSoE5mQ!2e0'
    },
    {//セロ・デ・パスコ, パスコ (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smC3QotG3pKGdvrB1mhrzcg!2m2!1d-10.6585!2d-76.25464!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.6585,-76.25464,3a,75y,90t/data=!3m4!1e1!3m2!1smC3QotG3pKGdvrB1mhrzcg!2e0'
    },
    {//284 デュポン・レーン (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sS113ivVWfgeMGJWOTG1oYg!2m2!1d40.66977!2d-89.56716!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.66977,-89.56716,3a,75y,90t/data=!3m4!1e1!3m2!1sS113ivVWfgeMGJWOTG1oYg!2e0'
    },
    {//RP10 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4ix0ZeTis1ALPg6csFzbUg!2m2!1d-31.18395!2d-63.44544!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.18395,-63.44544,3a,75y,90t/data=!3m4!1e1!3m2!1s4ix0ZeTis1ALPg6csFzbUg!2e0'
    },
    {//M32 (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3_Jp_V6HmbT-LXYs_5FUhw!2m2!1d50.25758!2d58.41268!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.25758,58.41268,3a,75y,90t/data=!3m4!1e1!3m2!1s3_Jp_V6HmbT-LXYs_5FUhw!2e0'
    },
    {//122 レイクウッド・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sT9vpHfo_Vchz0ESTzOWE5Q!2m2!1d29.02758!2d-95.38527!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.02758,-95.38527,3a,75y,90t/data=!3m4!1e1!3m2!1sT9vpHfo_Vchz0ESTzOWE5Q!2e0'
    },
    {//284 フロリダ通り (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scHtx1JN_R82_EOd66DQyww!2m2!1d0.94229!2d-59.91403!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.94229,-59.91403,3a,75y,90t/data=!3m4!1e1!3m2!1scHtx1JN_R82_EOd66DQyww!2e0'
    },
    {//102 ショアライン・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syvBl_mssPLs-Qndmt2WGqw!2m2!1d30.11744!2d-97.33294!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.11744,-97.33294,3a,75y,90t/data=!3m4!1e1!3m2!1syvBl_mssPLs-Qndmt2WGqw!2e0'
    },
    {//東ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1Hwb7qnuw1DEYhei-XjJBw!2m2!1d-7.53072!2d112.19247!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.53072,112.19247,3a,75y,90t/data=!3m4!1e1!3m2!1s1Hwb7qnuw1DEYhei-XjJBw!2e0'
    },
    {//10445 NM-104 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXFtqiKzOPff-pBH_XjbN7Q!2m2!1d35.20334!2d-103.73162!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.20334,-103.73162,3a,75y,90t/data=!3m4!1e1!3m2!1sXFtqiKzOPff-pBH_XjbN7Q!2e0'
    },
    {//สน.3022 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj06SaWQTf5eT4MB26qIIiQ!2m2!1d17.61024!2d103.6494!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.61024,103.6494,3a,75y,90t/data=!3m4!1e1!3m2!1sj06SaWQTf5eT4MB26qIIiQ!2e0'
    },
    {//139 マクファーソン・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGFBuN4bcpGCyimCZbsFKIg!2m2!1d35.22003!2d-79.15452!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.22003,-79.15452,3a,75y,90t/data=!3m4!1e1!3m2!1sGFBuN4bcpGCyimCZbsFKIg!2e0'
    },
    {//あきる野市, 東京都 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYPC5m3RvH-uZIyj--4z75g!2m2!1d35.72735!2d139.2015!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.72735,139.2015,3a,75y,90t/data=!3m4!1e1!3m2!1sYPC5m3RvH-uZIyj--4z75g!2e0'
    },
    {//15A通り (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDdQ2NW8BiYFq1642XIeLdQ!2m2!1d10.64753!2d-85.43853!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.64753,-85.43853,3a,75y,90t/data=!3m4!1e1!3m2!1sDdQ2NW8BiYFq1642XIeLdQ!2e0'
    },
    {//13 שדרות דויד בן גוריון (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPuwiqBIlT4K2TvH2urRhdQ!2m2!1d31.26087!2d34.80803!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.26087,34.80803,3a,75y,90t/data=!3m4!1e1!3m2!1sPuwiqBIlT4K2TvH2urRhdQ!2e0'
    },
    {//ハイウェイ 83 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHV3XPvH61dcj6ayRuTeWtQ!2m2!1d51.35018!2d-101.35377!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.35018,-101.35377,3a,75y,90t/data=!3m4!1e1!3m2!1sHV3XPvH61dcj6ayRuTeWtQ!2e0'
    },
    {//48 パルメル通り (プエルトリコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXmd7NABo-RTV3TXhWZK5AQ!2m2!1d18.33408!2d-66.46892!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.33408,-66.46892,3a,75y,90t/data=!3m4!1e1!3m2!1sXmd7NABo-RTV3TXhWZK5AQ!2e0'
    },
    {//500 (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTDhWRjfEBzk1POUks-S9aQ!2m2!1d5.89225!2d116.59953!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.89225,116.59953,3a,75y,90t/data=!3m4!1e1!3m2!1sTDhWRjfEBzk1POUks-S9aQ!2e0'
    },
    {//292 ウッドランド・ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scOLib3SBG9IuHBROl7hEVw!2m2!1d41.78814!2d-72.53852!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.78814,-72.53852,3a,75y,90t/data=!3m4!1e1!3m2!1scOLib3SBG9IuHBROl7hEVw!2e0'
    },
    {//シエムリアップ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_Kcho6zyPb9FeupU8krsuQ!2m2!1d13.60253!2d103.4113!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.60253,103.4113,3a,75y,90t/data=!3m4!1e1!3m2!1s_Kcho6zyPb9FeupU8krsuQ!2e0'
    },
    {//RN14 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slCYZp5ofRFxMXh-SdQv2ig!2m2!1d-27.64651!2d-55.36637!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.64651,-55.36637,3a,75y,90t/data=!3m4!1e1!3m2!1slCYZp5ofRFxMXh-SdQv2ig!2e0'
    },
    {//117 ヘスス・オテロ・クアルタ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_70oP0lhWJ7ZEYtSHq8h-Q!2m2!1d27.57167!2d-109.93066!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.57167,-109.93066,3a,75y,90t/data=!3m4!1e1!3m2!1s_70oP0lhWJ7ZEYtSHq8h-Q!2e0'
    },
    {//ES-475 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svWnc1XTAvtEyyt3HvCCJGg!2m2!1d-20.60137!2d-41.142!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.60137,-41.142,3a,75y,90t/data=!3m4!1e1!3m2!1svWnc1XTAvtEyyt3HvCCJGg!2e0'
    },
    {//ベラクルス州 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snQUmFePUEifHum7r7vLBkg!2m2!1d21.12462!2d-97.47731!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.12462,-97.47731,3a,75y,90t/data=!3m4!1e1!3m2!1snQUmFePUEifHum7r7vLBkg!2e0'
    },
    {//Raozan, チッタゴン (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPRXtTF9i1BCY2hlPcV2lEw!2m2!1d22.52944!2d91.89437!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.52944,91.89437,3a,75y,90t/data=!3m4!1e1!3m2!1sPRXtTF9i1BCY2hlPcV2lEw!2e0'
    },
    {//バレンティナ・ラミレス (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2SuJm4g97RTaopK-QTb5Ew!2m2!1d18.84172!2d-99.68282!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.84172,-99.68282,3a,75y,90t/data=!3m4!1e1!3m2!1s2SuJm4g97RTaopK-QTb5Ew!2e0'
    },
    {//ノヌーラ, ビハール (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svfMmg-kRYyiLRps9CL1OXA!2m2!1d24.86767!2d85.56075!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.86767,85.56075,3a,75y,90t/data=!3m4!1e1!3m2!1svfMmg-kRYyiLRps9CL1OXA!2e0'
    },
    {//115 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssRlFESQ9zGq16F52y1kAJw!2m2!1d16.4602!2d100.35058!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.4602,100.35058,3a,75y,90t/data=!3m4!1e1!3m2!1ssRlFESQ9zGq16F52y1kAJw!2e0'
    },
    {//ตำบล คลองใหญ่, ナコーンナーヨック (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYUAcwuFknTDVVsWSrO-FsA!2m2!1d14.12001!2d100.99362!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.12001,100.99362,3a,75y,90t/data=!3m4!1e1!3m2!1sYUAcwuFknTDVVsWSrO-FsA!2e0'
    },
    {//1 ビルサンダ・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shSnjgQECRMmi08f0cEwr1Q!2m2!1d28.24943!2d79.92871!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.24943,79.92871,3a,75y,90t/data=!3m4!1e1!3m2!1shSnjgQECRMmi08f0cEwr1Q!2e0'
    },
    {//MR18 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEzLusnaH-HcNOQ-sJD-w0Q!2m2!1d-26.54085!2d31.03028!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.54085,31.03028,3a,75y,90t/data=!3m4!1e1!3m2!1sEzLusnaH-HcNOQ-sJD-w0Q!2e0'
    },
    {//スアルディ, サンタフェ州 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smzeWDSZD_uX1XnS2L8TWFw!2m2!1d-30.53661!2d-61.95319!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.53661,-61.95319,3a,75y,90t/data=!3m4!1e1!3m2!1smzeWDSZD_uX1XnS2L8TWFw!2e0'
    },
    {//フライ M エスキウ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssRT55EVASGrjH4CHng4A-Q!2m2!1d-31.87282!2d-62.73339!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.87282,-62.73339,3a,75y,90t/data=!3m4!1e1!3m2!1ssRT55EVASGrjH4CHng4A-Q!2e0'
    },
    {//Jl. Bataraguru (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn2B99Y-tGcOynS52A3z01w!2m2!1d-5.13736!2d122.77934!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-5.13736,122.77934,3a,75y,90t/data=!3m4!1e1!3m2!1sn2B99Y-tGcOynS52A3z01w!2e0'
    },
    {//NH 8 (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sitYrqyoBaPT1ScwblmPsCw!2m2!1d23.97363!2d91.9699!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.97363,91.9699,3a,75y,90t/data=!3m4!1e1!3m2!1sitYrqyoBaPT1ScwblmPsCw!2e0'
    },
    {//23360 カウンティー・ロード 400 イースト (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sW_ZzuIMTySok0CfFpKDrxA!2m2!1d38.23636!2d-88.6292!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.23636,-88.6292,3a,75y,90t/data=!3m4!1e1!3m2!1sW_ZzuIMTySok0CfFpKDrxA!2e0'
    },
    {//65 (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sctNi6-LGuGbmeVs_gHM0EA!2m2!1d31.81376!2d35.6236!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.81376,35.6236,3a,75y,90t/data=!3m4!1e1!3m2!1sctNi6-LGuGbmeVs_gHM0EA!2e0'
    },
    {//ラッドロー, ムプマランガ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-MHZbpnFAsAB9EBMf8Lz4Q!2m2!1d-24.6744!2d31.2828!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.6744,31.2828,3a,75y,90t/data=!3m4!1e1!3m2!1s-MHZbpnFAsAB9EBMf8Lz4Q!2e0'
    },
    {//137 パイン・レーン (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJIzOwvs5JuihdZY5ISn3vw!2m2!1d40.29596!2d-74.99568!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.29596,-74.99568,3a,75y,90t/data=!3m4!1e1!3m2!1sJIzOwvs5JuihdZY5ISn3vw!2e0'
    },
    {//ซอย เทศบาล 18 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1IPqkWeBRbR0Lk1iyjH7Cg!2m2!1d17.31057!2d102.18032!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.31057,102.18032,3a,75y,90t/data=!3m4!1e1!3m2!1s1IPqkWeBRbR0Lk1iyjH7Cg!2e0'
    },
    {//3001 ノース・レイモンド・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szYUkC-nzjHmQReWvhe85Ng!2m2!1d38.08857!2d-98.45475!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.08857,-98.45475,3a,75y,90t/data=!3m4!1e1!3m2!1szYUkC-nzjHmQReWvhe85Ng!2e0'
    },
    {//21 PE-343 (カナダ大西洋側)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sh9-8E6m6ay_67AGfxr6-ZQ!2m2!1d46.18643!2d-62.54079!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.18643,-62.54079,3a,75y,90t/data=!3m4!1e1!3m2!1sh9-8E6m6ay_67AGfxr6-ZQ!2e0'
    },
    {//コルナ・プレステス高速道路 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-09WkASSLBOrfYcPrdYU0Q!2m2!1d-11.14261!2d-48.18475!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.14261,-48.18475,3a,75y,90t/data=!3m4!1e1!3m2!1s-09WkASSLBOrfYcPrdYU0Q!2e0'
    },
    {//5496 ハート・ロード (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snWRhqQA2u2-HvrKMz4XPuA!2m2!1d46.22777!2d-118.30396!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.22777,-118.30396,3a,75y,90t/data=!3m4!1e1!3m2!1snWRhqQA2u2-HvrKMz4XPuA!2e0'
    },
    {//B8 (ボツワナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9zMIuos6qh3IEl-YnMThJQ!2m2!1d-18.04803!2d20.66897!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.04803,20.66897,3a,75y,90t/data=!3m4!1e1!3m2!1s9zMIuos6qh3IEl-YnMThJQ!2e0'
    },
    {//48 ซอย สังมสันติสุข 42 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssObbsYgG7i8TqJgzqXszcg!2m2!1d13.84483!2d100.89303!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.84483,100.89303,3a,75y,90t/data=!3m4!1e1!3m2!1ssObbsYgG7i8TqJgzqXszcg!2e0'
    },
    {//Jl. Gatot Subroto (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdyF_VYcZK5w9Ujhsd3rhKA!2m2!1d-8.21905!2d124.54505!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.21905,124.54505,3a,75y,90t/data=!3m4!1e1!3m2!1sdyF_VYcZK5w9Ujhsd3rhKA!2e0'
    },
    {//アシス・シャトーブリアン高速道路 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swq90mGS7I6Xb6AG0gRqhvw!2m2!1d-21.70632!2d-50.68517!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.70632,-50.68517,3a,75y,90t/data=!3m4!1e1!3m2!1swq90mGS7I6Xb6AG0gRqhvw!2e0'
    },
    {//ジャマニ・ティラックジンドア・マーグ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgCU4hBzVuU6GQM6ys7RlIw!2m2!1d22.51073!2d77.72029!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.51073,77.72029,3a,75y,90t/data=!3m4!1e1!3m2!1sgCU4hBzVuU6GQM6ys7RlIw!2e0'
    },
    {//セメイ, Абай облысы (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5KwZqPF_q7L3VLofXJUrPw!2m2!1d50.45264!2d80.25762!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.45264,80.25762,3a,75y,90t/data=!3m4!1e1!3m2!1s5KwZqPF_q7L3VLofXJUrPw!2e0'
    },
    {//134 アンザック・アベニュー (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXJoAxKa_wlpzu__3SgNlWA!2m2!1d-33.73597!2d151.29161!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.73597,151.29161,3a,75y,90t/data=!3m4!1e1!3m2!1sXJoAxKa_wlpzu__3SgNlWA!2e0'
    },
    {//Google マップ (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srqMNFKW4TPHn2BNN1F8F1g!2m2!1d24.85085!2d121.94747!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.85085,121.94747,3a,75y,90t/data=!3m4!1e1!3m2!1srqMNFKW4TPHn2BNN1F8F1g!2e0'
    },
    {//BR-222 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saeX0BmDXYrlXS4aMjmc3vQ!2m2!1d-3.81912!2d-42.44628!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.81912,-42.44628,3a,75y,90t/data=!3m4!1e1!3m2!1saeX0BmDXYrlXS4aMjmc3vQ!2e0'
    },
    {//2598 ファン B フスト通り (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQkciTpHmVwgJGaw2LQmJTg!2m2!1d-31.39519!2d-64.17603!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.39519,-64.17603,3a,75y,90t/data=!3m4!1e1!3m2!1sQkciTpHmVwgJGaw2LQmJTg!2e0'
    },
    {//1364 5通り (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skw4-U4RV9uRsHWTN8swmEA!2m2!1d-32.79312!2d-71.54374!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.79312,-71.54374,3a,75y,90t/data=!3m4!1e1!3m2!1skw4-U4RV9uRsHWTN8swmEA!2e0'
    },
    {//51 ノース・ブレットナー・アベニュー (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3YC0X9FkGTNcjUUoY44rhA!2m2!1d39.79198!2d-76.99708!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.79198,-76.99708,3a,75y,90t/data=!3m4!1e1!3m2!1s3YC0X9FkGTNcjUUoY44rhA!2e0'
    },
    {//98 エンジェニェイロ・コンハド・バウメル通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRXJZHRju7M3hHePwQFBJRA!2m2!1d-25.6156!2d-50.69272!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.6156,-50.69272,3a,75y,90t/data=!3m4!1e1!3m2!1sRXJZHRju7M3hHePwQFBJRA!2e0'
    },
    {//State Hwy 580 (ハワイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBUWlI3yHiTVTZlCM7QMQig!2m2!1d22.0722!2d-159.41892!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.0722,-159.41892,3a,75y,90t/data=!3m4!1e1!3m2!1sBUWlI3yHiTVTZlCM7QMQig!2e0'
    },
    {//194 エル・カリベ (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbaJmufin3N_213JGy5y5cg!2m2!1d-15.3591!2d-75.16339!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.3591,-75.16339,3a,75y,90t/data=!3m4!1e1!3m2!1sbaJmufin3N_213JGy5y5cg!2e0'
    },
    {//97 パント・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6Djrg5r9IdNnkVZrHpHa3w!2m2!1d-35.92138!2d145.64464!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-35.92138,145.64464,3a,75y,90t/data=!3m4!1e1!3m2!1s6Djrg5r9IdNnkVZrHpHa3w!2e0'
    },
    {//Kazanche Rd (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxm31ufw4IsijR_b6t4DtEw!2m2!1d24.86113!2d91.76425!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.86113,91.76425,3a,75y,90t/data=!3m4!1e1!3m2!1sxm31ufw4IsijR_b6t4DtEw!2e0'
    },
    {//13804 ドッドソン・ロード・ノースウェスト (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smXhxdqUK6MsBqLbHbDiOEQ!2m2!1d47.29338!2d-119.55571!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.29338,-119.55571,3a,75y,90t/data=!3m4!1e1!3m2!1smXhxdqUK6MsBqLbHbDiOEQ!2e0'
    },
    {//Jl. Bendungan Mlodok (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stNB9wxWhJTpU0_dmUEEZFw!2m2!1d-7.12108!2d108.99802!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.12108,108.99802,3a,75y,90t/data=!3m4!1e1!3m2!1stNB9wxWhJTpU0_dmUEEZFw!2e0'
    },
    {//D1837 ロード (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9_NdLo2sAAK1GagkPnZJdQ!2m2!1d-27.14187!2d31.97614!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.14187,31.97614,3a,75y,90t/data=!3m4!1e1!3m2!1s9_NdLo2sAAK1GagkPnZJdQ!2e0'
    },
    {//フフイ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbIU3c68T9Tvl120cGsSndg!2m2!1d-24.2389!2d-64.88774!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.2389,-64.88774,3a,75y,90t/data=!3m4!1e1!3m2!1sbIU3c68T9Tvl120cGsSndg!2e0'
    },
    {//アタマノフカ, ザバイカリエ地方 (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siUkAd1-5zxlAWX4l8SaHRQ!2m2!1d51.94326!2d113.64232!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.94326,113.64232,3a,75y,90t/data=!3m4!1e1!3m2!1siUkAd1-5zxlAWX4l8SaHRQ!2e0'
    },
    {//17798 Co Rd 8 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5TAqzudUsAwqpfV-ID773g!2m2!1d46.38395!2d-96.69866!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.38395,-96.69866,3a,75y,90t/data=!3m4!1e1!3m2!1s5TAqzudUsAwqpfV-ID773g!2e0'
    },
    {//ตำบล ลิปะสะโง, パッターニー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sflImVg6s_fBsm2OAz74oDQ!2m2!1d6.79443!2d101.22537!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.79443,101.22537,3a,75y,90t/data=!3m4!1e1!3m2!1sflImVg6s_fBsm2OAz74oDQ!2e0'
    },
    {//ネルーパガパッティ, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0rLkDSrW_54vlfQGsK8KRw!2m2!1d10.16043!2d78.75661!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.16043,78.75661,3a,75y,90t/data=!3m4!1e1!3m2!1s0rLkDSrW_54vlfQGsK8KRw!2e0'
    },
    {//ジャンビ (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1e9okgxXjyLcf_oRMdjbpg!2m2!1d-1.46351!2d102.45257!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.46351,102.45257,3a,75y,90t/data=!3m4!1e1!3m2!1s1e9okgxXjyLcf_oRMdjbpg!2e0'
    },
    {//2280 オーウェンズ・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYLU2Sl5OL4q_4ToDgJUIWA!2m2!1d30.48914!2d-81.67073!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.48914,-81.67073,3a,75y,90t/data=!3m4!1e1!3m2!1sYLU2Sl5OL4q_4ToDgJUIWA!2e0'
    },
    {//R38 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdp_ixZcFVy6VjBI-n2PIog!2m2!1d-25.68864!2d31.2107!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.68864,31.2107,3a,75y,90t/data=!3m4!1e1!3m2!1sdp_ixZcFVy6VjBI-n2PIog!2e0'
    },
    {//フォート・マイヤーズ, フロリダ州 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ss9tQBQYAmajyH5QNprTKEg!2m2!1d26.58599!2d-81.87501!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.58599,-81.87501,3a,75y,90t/data=!3m4!1e1!3m2!1ss9tQBQYAmajyH5QNprTKEg!2e0'
    },
    {//1513 セアラー通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sft00QezYCzsfnGF7oZ9NPg!2m2!1d-11.73066!2d-49.06194!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.73066,-49.06194,3a,75y,90t/data=!3m4!1e1!3m2!1sft00QezYCzsfnGF7oZ9NPg!2e0'
    },
    {//221408 Co Rd H (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suPrW0mI-mHPk6eiFpTOZGg!2m2!1d44.87394!2d-89.96438!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.87394,-89.96438,3a,75y,90t/data=!3m4!1e1!3m2!1suPrW0mI-mHPk6eiFpTOZGg!2e0'
    },
    {//ตำบล บ้านพระ, プラーチーンブリー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBSGMyLXP7mHeSLHZCG9hOA!2m2!1d14.08755!2d101.36613!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.08755,101.36613,3a,75y,90t/data=!3m4!1e1!3m2!1sBSGMyLXP7mHeSLHZCG9hOA!2e0'
    },
    {//ゴイアス (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGSoRbfTWtado9e1BvVP1vg!2m2!1d-15.44301!2d-50.34408!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.44301,-50.34408,3a,75y,90t/data=!3m4!1e1!3m2!1sGSoRbfTWtado9e1BvVP1vg!2e0'
    },
    {//7 (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM7LTVdc08tdzPocRT8j2zQ!2m2!1d24.25189!2d56.06727!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.25189,56.06727,3a,75y,90t/data=!3m4!1e1!3m2!1sM7LTVdc08tdzPocRT8j2zQ!2e0'
    },
    {//2110 2nd アベニュー (カナダ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRwiuN8WA_A52xppWRsYNQA!2m2!1d60.71993!2d-135.05227!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.71993,-135.05227,3a,75y,90t/data=!3m4!1e1!3m2!1sRwiuN8WA_A52xppWRsYNQA!2e0'
    },
    {//State Rte 691 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXojQ_0aPgKSLz5ssqpSrCw!2m2!1d38.90646!2d-78.71507!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.90646,-78.71507,3a,75y,90t/data=!3m4!1e1!3m2!1sXojQ_0aPgKSLz5ssqpSrCw!2e0'
    },
    {//Mantala - Harashpur Rd (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz_zOpntUdtdEB6oca7qFIg!2m2!1d24.01393!2d91.31141!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.01393,91.31141,3a,75y,90t/data=!3m4!1e1!3m2!1sz_zOpntUdtdEB6oca7qFIg!2e0'
    },
    {//83 ジェシマン・ブールバード (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjq8NU8loGszUpSxtieGVFg!2m2!1d47.0276!2d-65.50246!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.0276,-65.50246,3a,75y,90t/data=!3m4!1e1!3m2!1sjq8NU8loGszUpSxtieGVFg!2e0'
    },
    {//100 ウッドランド・ドライブ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdPMkbveca73bSHDd1SXb6Q!2m2!1d45.35775!2d-79.12602!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.35775,-79.12602,3a,75y,90t/data=!3m4!1e1!3m2!1sdPMkbveca73bSHDd1SXb6Q!2e0'
    },
    {//北海道横断自動車道 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFZc92JSoyROM9tGBO04bvA!2m2!1d42.88911!2d141.77693!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.88911,141.77693,3a,75y,90t/data=!3m4!1e1!3m2!1sFZc92JSoyROM9tGBO04bvA!2e0'
    },
    {//2801 G ストリート・ノースウェスト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4IUS9gj3Qdds9Sw51Qe4GQ!2m2!1d36.91099!2d-94.88574!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.91099,-94.88574,3a,75y,90t/data=!3m4!1e1!3m2!1s4IUS9gj3Qdds9Sw51Qe4GQ!2e0'
    },
    {//4370 コムストック・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFO1xgm3HyfPeD9p2QfRrMw!2m2!1d43.68296!2d-85.99986!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.68296,-85.99986,3a,75y,90t/data=!3m4!1e1!3m2!1sFO1xgm3HyfPeD9p2QfRrMw!2e0'
    },
    {//Jl. Pembangunan (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqNAM0Rv-EG71ZDxHuS4Z1g!2m2!1d-8.46821!2d118.77894!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.46821,118.77894,3a,75y,90t/data=!3m4!1e1!3m2!1sqNAM0Rv-EG71ZDxHuS4Z1g!2e0'
    },
    {//東ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbpQH18V25wg79pYbyNmXsw!2m2!1d-7.59573!2d112.81234!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.59573,112.81234,3a,75y,90t/data=!3m4!1e1!3m2!1sbpQH18V25wg79pYbyNmXsw!2e0'
    },
    {//オバロ・デ・ナスカ (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEddUfPFMPp-_Q1-aewK2kQ!2m2!1d-14.82874!2d-74.94367!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.82874,-74.94367,3a,75y,90t/data=!3m4!1e1!3m2!1sEddUfPFMPp-_Q1-aewK2kQ!2e0'
    },
    {//Google マップ (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stLw2g5BIZYhEl7wPHyhQFA!2m2!1d4.21434!2d100.54902!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.21434,100.54902,3a,75y,90t/data=!3m4!1e1!3m2!1stLw2g5BIZYhEl7wPHyhQFA!2e0'
    },
    {//RD-SRO-03 (グアテマラ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPz7k8BbqMm-MeH_w84ST7A!2m2!1d14.3804!2d-90.29243!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.3804,-90.29243,3a,75y,90t/data=!3m4!1e1!3m2!1sPz7k8BbqMm-MeH_w84ST7A!2e0'
    },
    {//1205 MT-1 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPLBBix5X5gcQLA7veB0wMw!2m2!1d46.13233!2d-112.96889!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.13233,-112.96889,3a,75y,90t/data=!3m4!1e1!3m2!1sPLBBix5X5gcQLA7veB0wMw!2e0'
    },
    {//スリセーラム・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGx9kvTCq-1XmykMfoTmAZw!2m2!1d16.39434!2d78.62306!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.39434,78.62306,3a,75y,90t/data=!3m4!1e1!3m2!1sGx9kvTCq-1XmykMfoTmAZw!2e0'
    },
    {//ムブール・ジョアル道路 (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK2M8WzLis1q5C_S9-cCQMA!2m2!1d14.16079!2d-16.84075!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.16079,-16.84075,3a,75y,90t/data=!3m4!1e1!3m2!1sK2M8WzLis1q5C_S9-cCQMA!2e0'
    },
    {//サンタカタリーナ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGCMtKfkA_X4aWPlLGZBeBg!2m2!1d-27.32549!2d-49.44526!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.32549,-49.44526,3a,75y,90t/data=!3m4!1e1!3m2!1sGCMtKfkA_X4aWPlLGZBeBg!2e0'
    },
    {//AC-465 (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suPk1tmllvRD-Y_Wy__bMMw!2m2!1d-10.20335!2d-67.30628!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.20335,-67.30628,3a,75y,90t/data=!3m4!1e1!3m2!1suPk1tmllvRD-Y_Wy__bMMw!2e0'
    },
    {//1644 ガードナー・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4EnwMoeZaFnp_kMD8htgpg!2m2!1d33.88175!2d-80.28955!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.88175,-80.28955,3a,75y,90t/data=!3m4!1e1!3m2!1s4EnwMoeZaFnp_kMD8htgpg!2e0'
    },
    {//2769 QC-327 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syaB9LfaY3jsOiRhrKtqz0w!2m2!1d45.81989!2d-74.55674!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.81989,-74.55674,3a,75y,90t/data=!3m4!1e1!3m2!1syaB9LfaY3jsOiRhrKtqz0w!2e0'
    },
    {//RP23 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8rec3kMrGDe9uEFXQ0StcQ!2m2!1d-39.9123!2d-71.07081!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-39.9123,-71.07081,3a,75y,90t/data=!3m4!1e1!3m2!1s8rec3kMrGDe9uEFXQ0StcQ!2e0'
    },
    {//西ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5ibi3jACkqA2U1ruT1WlJg!2m2!1d-6.56716!2d107.58937!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.56716,107.58937,3a,75y,90t/data=!3m4!1e1!3m2!1s5ibi3jACkqA2U1ruT1WlJg!2e0'
    },
    {//GO-040 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5jRrNKmZ1vaERlNsR9zDsw!2m2!1d-17.69595!2d-49.46105!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.69595,-49.46105,3a,75y,90t/data=!3m4!1e1!3m2!1s5jRrNKmZ1vaERlNsR9zDsw!2e0'
    },
    {//サン・パウロ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHEjCwo-9YLq0mgClTtZGqQ!2m2!1d-21.72227!2d-47.08097!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.72227,-47.08097,3a,75y,90t/data=!3m4!1e1!3m2!1sHEjCwo-9YLq0mgClTtZGqQ!2e0'
    },
    {//ตำบล เขามีเกียรติ, ソンクラー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skLhlFfPM9bUUjBes3V0hQQ!2m2!1d6.7663!2d100.54988!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.7663,100.54988,3a,75y,90t/data=!3m4!1e1!3m2!1skLhlFfPM9bUUjBes3V0hQQ!2e0'
    },
    {//ユカタン・ドシタス＝エスピタ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_Ml7nShA8RIE5k8AlwFhcA!2m2!1d20.87974!2d-88.46217!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.87974,-88.46217,3a,75y,90t/data=!3m4!1e1!3m2!1s_Ml7nShA8RIE5k8AlwFhcA!2e0'
    },
    {//BR-419 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDDmXLD3NG6lZUbphoMaWOw!2m2!1d-21.1251!2d-55.81647!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.1251,-55.81647,3a,75y,90t/data=!3m4!1e1!3m2!1sDDmXLD3NG6lZUbphoMaWOw!2e0'
    },
    {//Jl. Kencong-Semboro (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLbwO6w4mqbnxJGM3asmxFg!2m2!1d-8.26339!2d113.39135!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.26339,113.39135,3a,75y,90t/data=!3m4!1e1!3m2!1sLbwO6w4mqbnxJGM3asmxFg!2e0'
    },
    {//カルガリー, アルバータ (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1W5P7InmaipcEPIYezYYjw!2m2!1d50.90211!2d-114.05877!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.90211,-114.05877,3a,75y,90t/data=!3m4!1e1!3m2!1s1W5P7InmaipcEPIYezYYjw!2e0'
    },
    {//Jl. Raya Kumbayau (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snRpkN7ITGSXHs7CzZxD23w!2m2!1d-0.57257!2d100.77338!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.57257,100.77338,3a,75y,90t/data=!3m4!1e1!3m2!1snRpkN7ITGSXHs7CzZxD23w!2e0'
    },
    {//67 マイクリ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skaMWSNuZaH-vgsixRqgK3g!2m2!1d25.76117!2d-108.83889!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.76117,-108.83889,3a,75y,90t/data=!3m4!1e1!3m2!1skaMWSNuZaH-vgsixRqgK3g!2e0'
    },
    {//サットンガ・ロード (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBSp95KpVBJ-d1B2f62NsSQ!2m2!1d25.36908!2d92.3709!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.36908,92.3709,3a,75y,90t/data=!3m4!1e1!3m2!1sBSp95KpVBJ-d1B2f62NsSQ!2e0'
    },
    {//411 U-598 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSF4f18GNS3-GaXDsICnBEQ!2m2!1d-40.78983!2d-73.19839!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-40.78983,-73.19839,3a,75y,90t/data=!3m4!1e1!3m2!1sSF4f18GNS3-GaXDsICnBEQ!2e0'
    },
    {//リモン (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siRp1iIR43bkEfqhJQjPShA!2m2!1d9.9691!2d-83.26032!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.9691,-83.26032,3a,75y,90t/data=!3m4!1e1!3m2!1siRp1iIR43bkEfqhJQjPShA!2e0'
    },
    {//リンポポ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxPdOYjlG8Uz0MgqlOUXcGQ!2m2!1d-24.09278!2d28.51939!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.09278,28.51939,3a,75y,90t/data=!3m4!1e1!3m2!1sxPdOYjlG8Uz0MgqlOUXcGQ!2e0'
    },
    {//バイーア州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_WhqWJq-7z6z10zh57l1Og!2m2!1d-14.09854!2d-42.6739!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.09854,-42.6739,3a,75y,90t/data=!3m4!1e1!3m2!1s_WhqWJq-7z6z10zh57l1Og!2e0'
    },
    {//308 (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXuZwQZVHB8VVxOAv--KjeQ!2m2!1d12.35015!2d106.05763!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.35015,106.05763,3a,75y,90t/data=!3m4!1e1!3m2!1sXuZwQZVHB8VVxOAv--KjeQ!2e0'
    },
    {//モチェ, ラ・リベルタード (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saKe9s1ll1qrMI0ks6RBQew!2m2!1d-8.17623!2d-79.01307!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.17623,-79.01307,3a,75y,90t/data=!3m4!1e1!3m2!1saKe9s1ll1qrMI0ks6RBQew!2e0'
    },
    {//MT-140 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scM1TPV_72vmndi0c40fj4Q!2m2!1d-13.45749!2d-55.1942!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.45749,-55.1942,3a,75y,90t/data=!3m4!1e1!3m2!1scM1TPV_72vmndi0c40fj4Q!2e0'
    },
    {//ブーローニュ, ブエノスアイレス州 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWKqhqZYTZnBO0GK3sIt0Qg!2m2!1d-34.49078!2d-58.58348!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.49078,-58.58348,3a,75y,90t/data=!3m4!1e1!3m2!1sWKqhqZYTZnBO0GK3sIt0Qg!2e0'
    },
    {//1047 ルイス・パステウル (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOz4sH8PicXRu5VT1dIVOfw!2m2!1d-51.61903!2d-69.23558!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-51.61903,-69.23558,3a,75y,90t/data=!3m4!1e1!3m2!1sOz4sH8PicXRu5VT1dIVOfw!2e0'
    },
    {//Google マップ (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCqaRZjVDZ5MSWHYs22lSyA!2m2!1d47.72506!2d105.90846!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.72506,105.90846,3a,75y,90t/data=!3m4!1e1!3m2!1sCqaRZjVDZ5MSWHYs22lSyA!2e0'
    },
    {//7015 ウェスタン・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQyDPXXcWQenzE0KfT8ETTg!2m2!1d26.30857!2d-98.39484!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.30857,-98.39484,3a,75y,90t/data=!3m4!1e1!3m2!1sQyDPXXcWQenzE0KfT8ETTg!2e0'
    },
    {//142 Chimborazo (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNAl10or97xndKPoPiYEEiw!2m2!1d-0.2193!2d-78.51783!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.2193,-78.51783,3a,75y,90t/data=!3m4!1e1!3m2!1sNAl10or97xndKPoPiYEEiw!2e0'
    },
    {//485 ノース・ビーバー・ダム・アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4Uyb4H0i-bqsiaIoLuFLbA!2m2!1d36.63902!2d-81.7957!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.63902,-81.7957,3a,75y,90t/data=!3m4!1e1!3m2!1s4Uyb4H0i-bqsiaIoLuFLbA!2e0'
    },
    {//チアパス (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srSokrzSeVvpIC4b-sbmWCQ!2m2!1d15.26837!2d-92.67406!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.26837,-92.67406,3a,75y,90t/data=!3m4!1e1!3m2!1srSokrzSeVvpIC4b-sbmWCQ!2e0'
    },
    {//ダヴァオ - サランガニ・コースタル・ロード (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skSAfF9wfQBpPMCwnCuTU0w!2m2!1d5.66049!2d125.46481!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.66049,125.46481,3a,75y,90t/data=!3m4!1e1!3m2!1skSAfF9wfQBpPMCwnCuTU0w!2e0'
    },
    {//Co Rd 238 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-QBslpSQM9vV-4nV935eCg!2m2!1d32.56526!2d-104.08387!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.56526,-104.08387,3a,75y,90t/data=!3m4!1e1!3m2!1s-QBslpSQM9vV-4nV935eCg!2e0'
    },
    {//3135 Rod. Edenor João Tasca (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7TWdDbGIJWp5rKHzv8KIaQ!2m2!1d-23.01742!2d-46.9481!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.01742,-46.9481,3a,75y,90t/data=!3m4!1e1!3m2!1s7TWdDbGIJWp5rKHzv8KIaQ!2e0'
    },
    {//298 RN-404 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBiXgAQ8nqZgb5saefOjq7g!2m2!1d-5.33788!2d-36.82952!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-5.33788,-36.82952,3a,75y,90t/data=!3m4!1e1!3m2!1sBiXgAQ8nqZgb5saefOjq7g!2e0'
    },
    {//C100e (チュニジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQit9OUuennzPATvppWQq_Q!2m2!1d35.76037!2d10.79827!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.76037,10.79827,3a,75y,90t/data=!3m4!1e1!3m2!1sQit9OUuennzPATvppWQq_Q!2e0'
    },
    {//A3 (ボツワナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGUH4uLEz4Gubk9sA4cpMWg!2m2!1d-20.19737!2d25.20049!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.19737,25.20049,3a,75y,90t/data=!3m4!1e1!3m2!1sGUH4uLEz4Gubk9sA4cpMWg!2e0'
    },
    {//セダー・ガンジ, ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOXo44kjvnfvhvT2vDt36OA!2m2!1d25.89714!2d83.13758!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.89714,83.13758,3a,75y,90t/data=!3m4!1e1!3m2!1sOXo44kjvnfvhvT2vDt36OA!2e0'
    },
    {//305 3 ノルテ通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slSqCZpclLAYtBHjW5H9W4w!2m2!1d18.40266!2d-97.90887!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.40266,-97.90887,3a,75y,90t/data=!3m4!1e1!3m2!1slSqCZpclLAYtBHjW5H9W4w!2e0'
    },
    {//クチン, サラワク (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snWQDT7BuF4Zrf_g4D275Xg!2m2!1d1.55515!2d110.3332!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.55515,110.3332,3a,75y,90t/data=!3m4!1e1!3m2!1snWQDT7BuF4Zrf_g4D275Xg!2e0'
    },
    {//3 エルミーニオ・ネリー・ダ・トリンダーデ通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ8W9ovCGn-j3mFCtNM_7-w!2m2!1d-6.0966!2d-38.37396!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.0966,-38.37396,3a,75y,90t/data=!3m4!1e1!3m2!1sQ8W9ovCGn-j3mFCtNM_7-w!2e0'
    },
    {//アール L コア・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjZLg7duKrLu3loQajBXbNA!2m2!1d39.61554!2d-79.92167!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.61554,-79.92167,3a,75y,90t/data=!3m4!1e1!3m2!1sjZLg7duKrLu3loQajBXbNA!2e0'
    },
    {//3 トレーゼ・デ・マイオ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su2JIPSrLXw-5dfT9ZwIEBQ!2m2!1d-11.62407!2d-50.66731!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.62407,-50.66731,3a,75y,90t/data=!3m4!1e1!3m2!1su2JIPSrLXw-5dfT9ZwIEBQ!2e0'
    },
    {//463 Rua Jônatas Serrano (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXOnTYMadNyTLUuGmut5Utw!2m2!1d-23.7441!2d-46.68288!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.7441,-46.68288,3a,75y,90t/data=!3m4!1e1!3m2!1sXOnTYMadNyTLUuGmut5Utw!2e0'
    },
    {//6321 IN-145 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCKLsZGNuLcAz04tttKyt1Q!2m2!1d38.46091!2d-86.60274!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.46091,-86.60274,3a,75y,90t/data=!3m4!1e1!3m2!1sCKLsZGNuLcAz04tttKyt1Q!2e0'
    },
    {//ホウダ・ロード (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHYi6VyYOUeG0fO-FIBMTKg!2m2!1d-33.12397!2d18.72989!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.12397,18.72989,3a,75y,90t/data=!3m4!1e1!3m2!1sHYi6VyYOUeG0fO-FIBMTKg!2e0'
    },
    {//Ramsingh Ki Choki, マディヤ・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBun8Dc_T3e6gH17t4vN6yQ!2m2!1d22.31649!2d74.35418!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.31649,74.35418,3a,75y,90t/data=!3m4!1e1!3m2!1sBun8Dc_T3e6gH17t4vN6yQ!2e0'
    },
    {//239 Kawana Way (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWzkkJkLUqa-BwRFobbx_mQ!2m2!1d-26.71318!2d153.11585!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.71318,153.11585,3a,75y,90t/data=!3m4!1e1!3m2!1sWzkkJkLUqa-BwRFobbx_mQ!2e0'
    },
    {//コルディジェラ自動車道 (プエルトリコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssDMBXxm2Cu8XHTqeTxPUUQ!2m2!1d18.31273!2d-66.69208!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.31273,-66.69208,3a,75y,90t/data=!3m4!1e1!3m2!1ssDMBXxm2Cu8XHTqeTxPUUQ!2e0'
    },
    {//2 エジプト・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfXAsT4WK2ICpBbn65ZoIfw!2m2!1d43.93394!2d-70.4391!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.93394,-70.4391,3a,75y,90t/data=!3m4!1e1!3m2!1sfXAsT4WK2ICpBbn65ZoIfw!2e0'
    },
    {//コール (カタール)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJw9TeloPcIJjJG6hvuj6Sw!2m2!1d25.61049!2d51.33285!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.61049,51.33285,3a,75y,90t/data=!3m4!1e1!3m2!1sJw9TeloPcIJjJG6hvuj6Sw!2e0'
    },
    {//6128 ワス・ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sE4X-uC1rJdHvXzVzth2RYQ!2m2!1d43.44388!2d-84.03726!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.44388,-84.03726,3a,75y,90t/data=!3m4!1e1!3m2!1sE4X-uC1rJdHvXzVzth2RYQ!2e0'
    },
    {//シャープス・クリーク・ロード (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTFHyQPUzX5rVTHx18I0mqQ!2m2!1d43.64061!2d-122.79101!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.64061,-122.79101,3a,75y,90t/data=!3m4!1e1!3m2!1sTFHyQPUzX5rVTHx18I0mqQ!2e0'
    },
    {//907 ウィズテリア・レーン (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDG6Nwsel6Zy74PMyGrPXfw!2m2!1d34.03054!2d-85.96948!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.03054,-85.96948,3a,75y,90t/data=!3m4!1e1!3m2!1sDG6Nwsel6Zy74PMyGrPXfw!2e0'
    },
    {//891 サウス 270 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sandHDCdhWXn05t3uq3RSfw!2m2!1d34.69004!2d-81.86917!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.69004,-81.86917,3a,75y,90t/data=!3m4!1e1!3m2!1sandHDCdhWXn05t3uq3RSfw!2e0'
    },
    {//ベレダ / サン・ミゲル (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suLYK5zIMaIcELcPtlgOYMg!2m2!1d18.8734!2d-96.99838!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.8734,-96.99838,3a,75y,90t/data=!3m4!1e1!3m2!1suLYK5zIMaIcELcPtlgOYMg!2e0'
    },
    {//1125 L.W. マイナー・ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spi03sqsOYV7uonWkxNSxWA!2m2!1d30.09442!2d-95.99364!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.09442,-95.99364,3a,75y,90t/data=!3m4!1e1!3m2!1spi03sqsOYV7uonWkxNSxWA!2e0'
    },
    {//611 ウェスト・ファー・ストリート (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spy-vMdNtL6fRTv75Fy5biA!2m2!1d48.08318!2d-123.11734!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.08318,-123.11734,3a,75y,90t/data=!3m4!1e1!3m2!1spy-vMdNtL6fRTv75Fy5biA!2e0'
    },
    {//28 ツェントラリナヤ・ウーリツァ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMgJOEkDLpEgAr_Qs8eiCXw!2m2!1d54.90608!2d71.67918!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.90608,71.67918,3a,75y,90t/data=!3m4!1e1!3m2!1sMgJOEkDLpEgAr_Qs8eiCXw!2e0'
    },
    {//2224 トマス・エディソン (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shoCVLf9APc7GevK9NxVfOw!2m2!1d-31.51322!2d-68.49813!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.51322,-68.49813,3a,75y,90t/data=!3m4!1e1!3m2!1shoCVLf9APc7GevK9NxVfOw!2e0'
    },
    {//11 (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s24OL7YnEo1SC5a7JtY3Wug!2m2!1d8.98538!2d-82.22074!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.98538,-82.22074,3a,75y,90t/data=!3m4!1e1!3m2!1s24OL7YnEo1SC5a7JtY3Wug!2e0'
    },
    {//サン・ルイス・ポトシ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF7Xzw8ONN_eYWhdYW8ht5w!2m2!1d21.79592!2d-99.24817!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.79592,-99.24817,3a,75y,90t/data=!3m4!1e1!3m2!1sF7Xzw8ONN_eYWhdYW8ht5w!2e0'
    },
    {//1st ストリート・サウスウェスト (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAImTOe2k_7lcLMrWZfGw7Q!2m2!1d47.40027!2d-101.46535!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.40027,-101.46535,3a,75y,90t/data=!3m4!1e1!3m2!1sAImTOe2k_7lcLMrWZfGw7Q!2e0'
    },
    {//32 アンティグオ・ア・トラリスタク通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smCiR-XsYLrxpCM-IEpHy5g!2m2!1d17.07541!2d-96.66398!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.07541,-96.66398,3a,75y,90t/data=!3m4!1e1!3m2!1smCiR-XsYLrxpCM-IEpHy5g!2e0'
    },
    {//PI-229 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJxzWUFnbJVi--Iu59Yb6lw!2m2!1d-6.88715!2d-41.05531!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.88715,-41.05531,3a,75y,90t/data=!3m4!1e1!3m2!1sJxzWUFnbJVi--Iu59Yb6lw!2e0'
    },
    {//サウス・ギャップ・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syuVyWlQGB1wJWhb0bmo1Zg!2m2!1d41.98189!2d-104.78923!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.98189,-104.78923,3a,75y,90t/data=!3m4!1e1!3m2!1syuVyWlQGB1wJWhb0bmo1Zg!2e0'
    },
    {//ピラジャー A N ペトローポリス道路 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM-eZ13cFrBp2J6sHQOx2sQ!2m2!1d-29.37103!2d-51.15535!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.37103,-51.15535,3a,75y,90t/data=!3m4!1e1!3m2!1sM-eZ13cFrBp2J6sHQOx2sQ!2e0'
    },
    {//北バーティナ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sadm6j7UVANlYjXtBhfi5YQ!2m2!1d23.8586!2d57.40365!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.8586,57.40365,3a,75y,90t/data=!3m4!1e1!3m2!1sadm6j7UVANlYjXtBhfi5YQ!2e0'
    },
    {//チアンジュール, 西ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOjidTPNptjIGFRJZphjV8A!2m2!1d-6.82426!2d107.13704!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.82426,107.13704,3a,75y,90t/data=!3m4!1e1!3m2!1sOjidTPNptjIGFRJZphjV8A!2e0'
    },
    {//161 トラクトヴァヤ・ウーリツァ (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHND1KRPjYaY6AOs9ICpvXA!2m2!1d51.67814!2d102.11148!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.67814,102.11148,3a,75y,90t/data=!3m4!1e1!3m2!1sHND1KRPjYaY6AOs9ICpvXA!2e0'
    },
    {//Pokok Sena, クダー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTtfdjon-YRbGoPCof18sKg!2m2!1d6.1601!2d100.51297!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.1601,100.51297,3a,75y,90t/data=!3m4!1e1!3m2!1sTtfdjon-YRbGoPCof18sKg!2e0'
    },
    {//パナメリカナ自動車道 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8LXVOoMuytfuIrfHLasVUg!2m2!1d-3.09638!2d-79.00775!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.09638,-79.00775,3a,75y,90t/data=!3m4!1e1!3m2!1s8LXVOoMuytfuIrfHLasVUg!2e0'
    },
    {//セアラー州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soG6Quvi-x0LWwPiPB-RF4Q!2m2!1d-5.45119!2d-39.36152!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-5.45119,-39.36152,3a,75y,90t/data=!3m4!1e1!3m2!1soG6Quvi-x0LWwPiPB-RF4Q!2e0'
    },
    {//10417 ウィンターグリーン・ロード (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shZYcX2c6nIBjxvBbwo67Zg!2m2!1d34.43955!2d-117.62555!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.43955,-117.62555,3a,75y,90t/data=!3m4!1e1!3m2!1shZYcX2c6nIBjxvBbwo67Zg!2e0'
    },
    {//6801 ダヴ・クロス・ループ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZrGHlFifNFSEyUEbu3QQ7g!2m2!1d28.12975!2d-82.04307!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.12975,-82.04307,3a,75y,90t/data=!3m4!1e1!3m2!1sZrGHlFifNFSEyUEbu3QQ7g!2e0'
    },
    {//サンタカタリーナ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKqs1GOy7ZQUXSU3TsyR4Dg!2m2!1d-27.07907!2d-51.24873!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.07907,-51.24873,3a,75y,90t/data=!3m4!1e1!3m2!1sKqs1GOy7ZQUXSU3TsyR4Dg!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spfZ7pn9ka2konRMp4AONGg!2m2!1d-20.68699!2d-41.87791!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.68699,-41.87791,3a,75y,90t/data=!3m4!1e1!3m2!1spfZ7pn9ka2konRMp4AONGg!2e0'
    },
    {//346 ビセンテ・ゲレロ通り (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgkqsg-IEp1rbmA2CqoJYhw!2m2!1d27.85554!2d-101.13027!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.85554,-101.13027,3a,75y,90t/data=!3m4!1e1!3m2!1sgkqsg-IEp1rbmA2CqoJYhw!2e0'
    },
    {//南東スラウェシ (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scWq7BsRNGuBvs_L-xc_KYQ!2m2!1d-5.06589!2d122.5524!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-5.06589,122.5524,3a,75y,90t/data=!3m4!1e1!3m2!1scWq7BsRNGuBvs_L-xc_KYQ!2e0'
    },
    {//ホセ・パンガニバン, ビコール (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqsDFN3JtTusIFRvTSdE9tA!2m2!1d14.28975!2d122.69128!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.28975,122.69128,3a,75y,90t/data=!3m4!1e1!3m2!1sqsDFN3JtTusIFRvTSdE9tA!2e0'
    },
    {//ホーチミン, ホー・チ・ミン (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMw-n9LZ4uzt2N1xkk6EMMw!2m2!1d10.56249!2d107.54216!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.56249,107.54216,3a,75y,90t/data=!3m4!1e1!3m2!1sMw-n9LZ4uzt2N1xkk6EMMw!2e0'
    },
    {//バイーア州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2vbQAXsiWGcMggt91HckqA!2m2!1d-12.96751!2d-43.04486!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.96751,-43.04486,3a,75y,90t/data=!3m4!1e1!3m2!1s2vbQAXsiWGcMggt91HckqA!2e0'
    },
    {//西ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7XjnjuKQ5DYStWInPOwdIA!2m2!1d-7.6762!2d108.40133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.6762,108.40133,3a,75y,90t/data=!3m4!1e1!3m2!1s7XjnjuKQ5DYStWInPOwdIA!2e0'
    },
    {//Google マップ (グリーンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syf2kJFhvMZipg2sWF4LLTg!2m2!1d66.90519!2d-52.95659!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@66.90519,-52.95659,3a,75y,90t/data=!3m4!1e1!3m2!1syf2kJFhvMZipg2sWF4LLTg!2e0'
    },
    {//ゴイアス (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4cAmj3FBfHr3Qay5pilTJQ!2m2!1d-17.68516!2d-49.74206!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.68516,-49.74206,3a,75y,90t/data=!3m4!1e1!3m2!1s4cAmj3FBfHr3Qay5pilTJQ!2e0'
    },
    {//タマナワ＝ガレンビンダンウウェワ・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDfAM1h4l5QEXpZbEzmy9LA!2m2!1d8.32183!2d80.66978!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.32183,80.66978,3a,75y,90t/data=!3m4!1e1!3m2!1sDfAM1h4l5QEXpZbEzmy9LA!2e0'
    },
    {//Akwatia, 東部 (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_iNB6CzjYA_ddXWW61j4kg!2m2!1d6.05273!2d-0.80089!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.05273,-0.80089,3a,75y,90t/data=!3m4!1e1!3m2!1s_iNB6CzjYA_ddXWW61j4kg!2e0'
    },
    {//Nev Smith Dr (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sr8Esc5otu9UTzSYtyJomcg!2m2!1d-27.65669!2d152.92342!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.65669,152.92342,3a,75y,90t/data=!3m4!1e1!3m2!1sr8Esc5otu9UTzSYtyJomcg!2e0'
    },
    {//2119 カジェ 36 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-HI6llPpU0TNUr7xGJ_GTg!2m2!1d7.84306!2d-72.50075!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.84306,-72.50075,3a,75y,90t/data=!3m4!1e1!3m2!1s-HI6llPpU0TNUr7xGJ_GTg!2e0'
    },
    {//5507 48 ストリート (カナダ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s93bkyJ2TK6x_lxxtirU0KA!2m2!1d62.45073!2d-114.35472!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.45073,-114.35472,3a,75y,90t/data=!3m4!1e1!3m2!1s93bkyJ2TK6x_lxxtirU0KA!2e0'
    },
    {//X-445 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUtkIyIcDuWLYDvJu2cPEdQ!2m2!1d-45.32626!2d-71.81256!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-45.32626,-71.81256,3a,75y,90t/data=!3m4!1e1!3m2!1sUtkIyIcDuWLYDvJu2cPEdQ!2e0'
    },
    {//3782 NB-105 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGEhJE34nIlqUu93fuxs3vw!2m2!1d45.95276!2d-67.09788!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.95276,-67.09788,3a,75y,90t/data=!3m4!1e1!3m2!1sGEhJE34nIlqUu93fuxs3vw!2e0'
    },
    {//アゴナ - エルボ・ロード (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smLczApk9LdQXgk13tOcpzQ!2m2!1d5.27532!2d-2.74186!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.27532,-2.74186,3a,75y,90t/data=!3m4!1e1!3m2!1smLczApk9LdQXgk13tOcpzQ!2e0'
    },
    {//コーラヒ・バンシュ・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2W7F95LzzoUqsfaoLI1cYg!2m2!1d25.86641!2d86.60583!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.86641,86.60583,3a,75y,90t/data=!3m4!1e1!3m2!1s2W7F95LzzoUqsfaoLI1cYg!2e0'
    },
    {//9 ピルル (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7Wc5_AD3_5PjQwzZUpjKdQ!2m2!1d20.33875!2d-102.78783!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.33875,-102.78783,3a,75y,90t/data=!3m4!1e1!3m2!1s7Wc5_AD3_5PjQwzZUpjKdQ!2e0'
    },
    {//東部 (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYmgHm6nym-Lw06NhvYMLhA!2m2!1d5.81677!2d-0.20247!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.81677,-0.20247,3a,75y,90t/data=!3m4!1e1!3m2!1sYmgHm6nym-Lw06NhvYMLhA!2e0'
    },
    {//BR-158 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slTkwvenM9RefEi4xeEjqqQ!2m2!1d-24.77746!2d-52.31132!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.77746,-52.31132,3a,75y,90t/data=!3m4!1e1!3m2!1slTkwvenM9RefEi4xeEjqqQ!2e0'
    },
    {//Tecolote, バハカリフォルニア (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snRjFOoiA5rB8AJgykyHIkg!2m2!1d32.63265!2d-115.01681!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.63265,-115.01681,3a,75y,90t/data=!3m4!1e1!3m2!1snRjFOoiA5rB8AJgykyHIkg!2e0'
    },
    {//ネウケン (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swH_y2OW0E2FRKXOD_xs8nQ!2m2!1d-37.37473!2d-70.28323!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.37473,-70.28323,3a,75y,90t/data=!3m4!1e1!3m2!1swH_y2OW0E2FRKXOD_xs8nQ!2e0'
    },
    {//3268 ノース・ウィン・ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdWJnUagrgL0pCyW-vcwAcg!2m2!1d43.6878!2d-84.90878!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.6878,-84.90878,3a,75y,90t/data=!3m4!1e1!3m2!1sdWJnUagrgL0pCyW-vcwAcg!2e0'
    },
    {//Jl. Desa Margamulya (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHHrEFtmy2BckMbfLDqHkFw!2m2!1d-7.35983!2d107.74884!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.35983,107.74884,3a,75y,90t/data=!3m4!1e1!3m2!1sHHrEFtmy2BckMbfLDqHkFw!2e0'
    },
    {//カンダール (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5HpPI4I3UOVVhRqRL7iIMQ!2m2!1d11.39077!2d104.88656!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.39077,104.88656,3a,75y,90t/data=!3m4!1e1!3m2!1s5HpPI4I3UOVVhRqRL7iIMQ!2e0'
    },
    {//156 イースト・メープル (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBlWehbTFHhxfMmtQZVE5zw!2m2!1d37.21837!2d-89.49145!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.21837,-89.49145,3a,75y,90t/data=!3m4!1e1!3m2!1sBlWehbTFHhxfMmtQZVE5zw!2e0'
    },
    {//ハバード, サスカチュワン (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJFTZKGuwTShxSOtTiCOqEQ!2m2!1d51.09236!2d-103.34281!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.09236,-103.34281,3a,75y,90t/data=!3m4!1e1!3m2!1sJFTZKGuwTShxSOtTiCOqEQ!2e0'
    },
    {//ジャララバード・ウェスト, パンジャーブ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1so9rzZk_HEu_oVEI-HN6wmw!2m2!1d30.60815!2d74.23556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.60815,74.23556,3a,75y,90t/data=!3m4!1e1!3m2!1so9rzZk_HEu_oVEI-HN6wmw!2e0'
    },
    {//Đồng Nai, ドンナイ (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sY87-s9n3orZ9zjKEZO-g8A!2m2!1d10.93234!2d107.02907!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.93234,107.02907,3a,75y,90t/data=!3m4!1e1!3m2!1sY87-s9n3orZ9zjKEZO-g8A!2e0'
    },
    {//Rompin, ヌグリ・スンビラン (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sy_3hdQCM3YSwrqvegWEwHA!2m2!1d2.78762!2d102.4373!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@2.78762,102.4373,3a,75y,90t/data=!3m4!1e1!3m2!1sy_3hdQCM3YSwrqvegWEwHA!2e0'
    },
    {//Tô Hiệu, ソンラ (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seDfeWWz6rUe1_SWh44TpAA!2m2!1d21.33055!2d103.93092!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.33055,103.93092,3a,75y,90t/data=!3m4!1e1!3m2!1seDfeWWz6rUe1_SWh44TpAA!2e0'
    },
    {//13767 Mm Ave (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVhdQIiit9A5q2SSWOtW-Jg!2m2!1d42.50343!2d-93.2268!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.50343,-93.2268,3a,75y,90t/data=!3m4!1e1!3m2!1sVhdQIiit9A5q2SSWOtW-Jg!2e0'
    },
    {//南カリマンタン (カリマンタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSPR4qo36zcUxLazfRRhsBg!2m2!1d-2.35633!2d115.58124!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.35633,115.58124,3a,75y,90t/data=!3m4!1e1!3m2!1sSPR4qo36zcUxLazfRRhsBg!2e0'
    },
    {//トゥラブハン・ロード (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9idnRocfKlYgfeVHXO1Tvw!2m2!1d11.95578!2d121.93494!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.95578,121.93494,3a,75y,90t/data=!3m4!1e1!3m2!1s9idnRocfKlYgfeVHXO1Tvw!2e0'
    },
    {//ウスタ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sN7ae4sfaz3gNR_WkiIWm_g!2m2!1d19.56278!2d57.19903!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.56278,57.19903,3a,75y,90t/data=!3m4!1e1!3m2!1sN7ae4sfaz3gNR_WkiIWm_g!2e0'
    },
    {//Домна, ザバイカリエ地方 (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdi_wCrGtODtcf9ZIBJ-epA!2m2!1d51.89742!2d113.15103!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.89742,113.15103,3a,75y,90t/data=!3m4!1e1!3m2!1sdi_wCrGtODtcf9ZIBJ-epA!2e0'
    },
    {//ラスクルーセス, ニューメキシコ州 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfxtGblXJCcgu7PRC3h7_SA!2m2!1d32.26369!2d-106.76866!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.26369,-106.76866,3a,75y,90t/data=!3m4!1e1!3m2!1sfxtGblXJCcgu7PRC3h7_SA!2e0'
    },
    {//1150 Av. José Isidório dos Santos (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1staEsodDOdGzYA2uAjFOlzA!2m2!1d-17.32303!2d-39.23055!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.32303,-39.23055,3a,75y,90t/data=!3m4!1e1!3m2!1staEsodDOdGzYA2uAjFOlzA!2e0'
    },
    {//アイドゥラーナ・ロード (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svDFbyOfl-DAKRxBjmcTgJA!2m2!1d7.03709!2d80.1929!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.03709,80.1929,3a,75y,90t/data=!3m4!1e1!3m2!1svDFbyOfl-DAKRxBjmcTgJA!2e0'
    },
    {//ジガンショール (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAuv6hTsvZNGuCjoNqzUSvA!2m2!1d12.559!2d-16.25436!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.559,-16.25436,3a,75y,90t/data=!3m4!1e1!3m2!1sAuv6hTsvZNGuCjoNqzUSvA!2e0'
    },
    {//リーニャ 164 ノルテ (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJau2a4muEKwybQLQZgxlFA!2m2!1d-11.59751!2d-61.96143!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.59751,-61.96143,3a,75y,90t/data=!3m4!1e1!3m2!1sJau2a4muEKwybQLQZgxlFA!2e0'
    },
    {//105th ストリート・ノースウェスト (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sy6MEXTbHttRySMfeD_3SlQ!2m2!1d48.93868!2d-104.00474!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.93868,-104.00474,3a,75y,90t/data=!3m4!1e1!3m2!1sy6MEXTbHttRySMfeD_3SlQ!2e0'
    },
    {//SK-305 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-TAbL4LAzjvdwZe-ckne7Q!2m2!1d52.34001!2d-106.59614!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.34001,-106.59614,3a,75y,90t/data=!3m4!1e1!3m2!1s-TAbL4LAzjvdwZe-ckne7Q!2e0'
    },
    {//マト・グロッソ・ド・スル州 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMO3lHMRbQyAEthrNUkuQig!2m2!1d-22.13454!2d-54.87302!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.13454,-54.87302,3a,75y,90t/data=!3m4!1e1!3m2!1sMO3lHMRbQyAEthrNUkuQig!2e0'
    },
    {//ラトゥナプラ, サバラガムワ (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc1j0aA6oxAh1wnDDCESoEA!2m2!1d6.70646!2d80.38842!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.70646,80.38842,3a,75y,90t/data=!3m4!1e1!3m2!1sc1j0aA6oxAh1wnDDCESoEA!2e0'
    },
    {//ตำบล นามะเฟือง, ノンブアランプー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP-rhfLjSeiVLCqcZU08_gQ!2m2!1d17.06721!2d102.48313!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.06721,102.48313,3a,75y,90t/data=!3m4!1e1!3m2!1sP-rhfLjSeiVLCqcZU08_gQ!2e0'
    },
    {//ソリス・ロード (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssXTeHZGj0mYOhjVYZYIHmQ!2m2!1d14.03959!2d121.10959!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.03959,121.10959,3a,75y,90t/data=!3m4!1e1!3m2!1ssXTeHZGj0mYOhjVYZYIHmQ!2e0'
    },
    {//カラタラ・ロード (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9js-0urw6boHmf77mFFIIA!2m2!1d-33.9971!2d22.82315!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.9971,22.82315,3a,75y,90t/data=!3m4!1e1!3m2!1s9js-0urw6boHmf77mFFIIA!2e0'
    },
    {//メンドーサ州 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSWOE2rCBY_gMGpQMuBIybw!2m2!1d-33.02889!2d-68.28012!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.02889,-68.28012,3a,75y,90t/data=!3m4!1e1!3m2!1sSWOE2rCBY_gMGpQMuBIybw!2e0'
    },
    {//SK-378 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s29qPZY2l1kbPVZcR87QvFQ!2m2!1d53.02826!2d-107.82146!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.02826,-107.82146,3a,75y,90t/data=!3m4!1e1!3m2!1s29qPZY2l1kbPVZcR87QvFQ!2e0'
    },
    {//パラナ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8VNa5wptJTM7zlEzJx_GfA!2m2!1d-23.1256!2d-51.69848!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.1256,-51.69848,3a,75y,90t/data=!3m4!1e1!3m2!1s8VNa5wptJTM7zlEzJx_GfA!2e0'
    },
    {//北スマトラ (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snedsDj6MJ_AJuxSpLCo9Gw!2m2!1d1.78834!2d100.11867!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.78834,100.11867,3a,75y,90t/data=!3m4!1e1!3m2!1snedsDj6MJ_AJuxSpLCo9Gw!2e0'
    },
    {//12 (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRqGIswMboCprrZ4zJsGT_Q!2m2!1d8.40929!2d-82.63942!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.40929,-82.63942,3a,75y,90t/data=!3m4!1e1!3m2!1sRqGIswMboCprrZ4zJsGT_Q!2e0'
    },
    {//942 ワズワース・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skb_eTsT4BuPpd6Wj_FZ-QQ!2m2!1d37.12508!2d-80.57124!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.12508,-80.57124,3a,75y,90t/data=!3m4!1e1!3m2!1skb_eTsT4BuPpd6Wj_FZ-QQ!2e0'
    },
    {//836 サン・ドミンゴス通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqG_bCf3dW2ugvdKZpBCM4Q!2m2!1d-19.47574!2d-44.22538!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.47574,-44.22538,3a,75y,90t/data=!3m4!1e1!3m2!1sqG_bCf3dW2ugvdKZpBCM4Q!2e0'
    },
    {//Carr. Interamericana Sur (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9AxjWUNpz8E-IB3dRiVqUQ!2m2!1d8.90466!2d-83.40795!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.90466,-83.40795,3a,75y,90t/data=!3m4!1e1!3m2!1s9AxjWUNpz8E-IB3dRiVqUQ!2e0'
    },
    {//サンタ・アナ, カガヤン バレー (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX6627UQZFrNQ5IG8u8zKag!2m2!1d18.41716!2d122.20119!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.41716,122.20119,3a,75y,90t/data=!3m4!1e1!3m2!1sX6627UQZFrNQ5IG8u8zKag!2e0'
    },
    {//134 ピッグ・テール・アリー (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s__K76WELO8fNln_gZDnLGw!2m2!1d41.499!2d-79.87275!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.499,-79.87275,3a,75y,90t/data=!3m4!1e1!3m2!1s__K76WELO8fNln_gZDnLGw!2e0'
    },
    {//カント・デル・ジャノ, ベラグアス (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scf-btupdmO-xvg4ElR0h1w!2m2!1d8.13681!2d-80.99267!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.13681,-80.99267,3a,75y,90t/data=!3m4!1e1!3m2!1scf-btupdmO-xvg4ElR0h1w!2e0'
    },
    {//638 マヌエル・ラライン (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sImng9N15PnbiomspMWm_KQ!2m2!1d-33.39626!2d-71.12729!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.39626,-71.12729,3a,75y,90t/data=!3m4!1e1!3m2!1sImng9N15PnbiomspMWm_KQ!2e0'
    },
    {//Jl. Pamdan Rekmo (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siiOqg6egyNXKAqPoKjFLZw!2m2!1d-7.50622!2d110.0582!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.50622,110.0582,3a,75y,90t/data=!3m4!1e1!3m2!1siiOqg6egyNXKAqPoKjFLZw!2e0'
    },
    {//3 アダム・クローズ (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syUZjQIMyG0c0cgG60lBg5Q!2m2!1d-37.91136!2d145.27299!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.91136,145.27299,3a,75y,90t/data=!3m4!1e1!3m2!1syUZjQIMyG0c0cgG60lBg5Q!2e0'
    },
    {//342 ボア・ヴィスタ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYuhNzLxeWZopLBDI9b14bA!2m2!1d-22.03704!2d-43.19112!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.03704,-43.19112,3a,75y,90t/data=!3m4!1e1!3m2!1sYuhNzLxeWZopLBDI9b14bA!2e0'
    },
    {//ボア・エスペランサ道路 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBBt8fOX-0pZIILSMV0oqyw!2m2!1d-27.35309!2d-53.42454!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.35309,-53.42454,3a,75y,90t/data=!3m4!1e1!3m2!1sBBt8fOX-0pZIILSMV0oqyw!2e0'
    },
    {//خربة أبو فلاح (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ5LG53QVBapu3BPK75nKsQ!2m2!1d31.94787!2d35.33366!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.94787,35.33366,3a,75y,90t/data=!3m4!1e1!3m2!1sQ5LG53QVBapu3BPK75nKsQ!2e0'
    },
    {//立科町, 長野県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s60BGn74DviMNzrfRpkA-vQ!2m2!1d36.29998!2d138.33495!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.29998,138.33495,3a,75y,90t/data=!3m4!1e1!3m2!1s60BGn74DviMNzrfRpkA-vQ!2e0'
    },
    {//1319 コーディー・トレント・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZuLRbxbl4QVcuulvJE6ZaQ!2m2!1d37.08867!2d-85.63869!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.08867,-85.63869,3a,75y,90t/data=!3m4!1e1!3m2!1sZuLRbxbl4QVcuulvJE6ZaQ!2e0'
    },
    {//8843 ノース・カロライナ・ハイウェイ 150 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snbZ2LlNhLKujfPOkpvPWpw!2m2!1d36.35599!2d-79.47312!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.35599,-79.47312,3a,75y,90t/data=!3m4!1e1!3m2!1snbZ2LlNhLKujfPOkpvPWpw!2e0'
    },
    {//170 ジェラウド・カンジド通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scU6Dczi8W74M4cVHnKGohg!2m2!1d-4.43447!2d-37.79202!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.43447,-37.79202,3a,75y,90t/data=!3m4!1e1!3m2!1scU6Dczi8W74M4cVHnKGohg!2e0'
    },
    {//4370 Regional Rd 88 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP8S_46xiEdzQtKyFa8fmrw!2m2!1d46.64761!2d-80.98786!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.64761,-80.98786,3a,75y,90t/data=!3m4!1e1!3m2!1sP8S_46xiEdzQtKyFa8fmrw!2e0'
    },
    {//東部 (ルワンダ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL2gdoeyakjhlBLv2eOM_-w!2m2!1d-1.83157!2d30.43891!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.83157,30.43891,3a,75y,90t/data=!3m4!1e1!3m2!1sL2gdoeyakjhlBLv2eOM_-w!2e0'
    },
    {//45653 ジョン・デイ・ハイウェイ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sW2npxRk2EODaPMYDXEin0g!2m2!1d44.94372!2d-120.1282!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.94372,-120.1282,3a,75y,90t/data=!3m4!1e1!3m2!1sW2npxRk2EODaPMYDXEin0g!2e0'
    },
    {//1500 ラ・タブラダ通り (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxmwLUYLLiFi1ByZ5Gj8OPg!2m2!1d-32.886!2d-62.68962!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.886,-62.68962,3a,75y,90t/data=!3m4!1e1!3m2!1sxmwLUYLLiFi1ByZ5Gj8OPg!2e0'
    },
    {//カルミュナイ, 東部州 (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sacfeW7a-Q4WOYIbAUpSvlg!2m2!1d7.41703!2d81.82918!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.41703,81.82918,3a,75y,90t/data=!3m4!1e1!3m2!1sacfeW7a-Q4WOYIbAUpSvlg!2e0'
    },
    {//ボイザー, マハーラーシュトラ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdPlghG1YfGGZnELOa7G2Zg!2m2!1d19.81007!2d72.77181!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.81007,72.77181,3a,75y,90t/data=!3m4!1e1!3m2!1sdPlghG1YfGGZnELOa7G2Zg!2e0'
    },
    {//屏東 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV4tRmIMHdHLZfnInmewIAg!2m2!1d22.50074!2d120.48749!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.50074,120.48749,3a,75y,90t/data=!3m4!1e1!3m2!1sV4tRmIMHdHLZfnInmewIAg!2e0'
    },
    {//Co Rd 14 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBaMWI_I8JseDXqk43IzklA!2m2!1d45.01002!2d-98.60015!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.01002,-98.60015,3a,75y,90t/data=!3m4!1e1!3m2!1sBaMWI_I8JseDXqk43IzklA!2e0'
    },
    {//プレフェイト・アントーニオ R シンカリオウ高速道路 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfERWyNbYdDQu3WebgSv4DQ!2m2!1d-23.11202!2d-47.72315!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.11202,-47.72315,3a,75y,90t/data=!3m4!1e1!3m2!1sfERWyNbYdDQu3WebgSv4DQ!2e0'
    },
    {//1917 イースト 21st ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGoOkuv4Gb-xbdRz2HslwwQ!2m2!1d34.76369!2d-96.64973!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.76369,-96.64973,3a,75y,90t/data=!3m4!1e1!3m2!1sGoOkuv4Gb-xbdRz2HslwwQ!2e0'
    },
    {//547 アリッセ・ブランダン通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4HQnB6II6LFpx85ON543PA!2m2!1d-23.00067!2d-45.55215!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.00067,-45.55215,3a,75y,90t/data=!3m4!1e1!3m2!1s4HQnB6II6LFpx85ON543PA!2e0'
    },
    {//カーナーヴォン＝マレワ・ロード (オーストラリア中北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFsH6jn3G1rr_l2USSD8j0w!2m2!1d-24.97135!2d114.61066!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.97135,114.61066,3a,75y,90t/data=!3m4!1e1!3m2!1sFsH6jn3G1rr_l2USSD8j0w!2e0'
    },
    {//11763 US-550 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skyJCy9X1mDVVw8_6NmNoaQ!2m2!1d36.29181!2d-107.75537!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.29181,-107.75537,3a,75y,90t/data=!3m4!1e1!3m2!1skyJCy9X1mDVVw8_6NmNoaQ!2e0'
    },
    {//US-380 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjX4HOi7l6qD5N4CWGXUstw!2m2!1d33.49538!2d-105.39296!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.49538,-105.39296,3a,75y,90t/data=!3m4!1e1!3m2!1sjX4HOi7l6qD5N4CWGXUstw!2e0'
    },
    {//バロテラン, コアウイラ州 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqiQsFkAr-9YpEsSgrnEMyg!2m2!1d27.65761!2d-101.31085!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.65761,-101.31085,3a,75y,90t/data=!3m4!1e1!3m2!1sqiQsFkAr-9YpEsSgrnEMyg!2e0'
    },
    {//クリサンテモ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm6D_eqIA4ZjdN_rbRRjqmQ!2m2!1d20.7045!2d-100.02786!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.7045,-100.02786,3a,75y,90t/data=!3m4!1e1!3m2!1sm6D_eqIA4ZjdN_rbRRjqmQ!2e0'
    },
    {//Kwaggafontein, ムプマランガ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPGpLibMuASoYHD7-Ac2JFA!2m2!1d-25.36706!2d28.94099!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.36706,28.94099,3a,75y,90t/data=!3m4!1e1!3m2!1sPGpLibMuASoYHD7-Ac2JFA!2e0'
    },
    {//45 ブラジリア通り (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEKb4JJJQI-flO5djTquu8A!2m2!1d-10.2118!2d-63.84009!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.2118,-63.84009,3a,75y,90t/data=!3m4!1e1!3m2!1sEKb4JJJQI-flO5djTquu8A!2e0'
    },
    {//सानोश्री ताराताल, ルンビニー (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sREJWYN9oh7D2b4Gn-d4mXg!2m2!1d28.26485!2d81.28758!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.26485,81.28758,3a,75y,90t/data=!3m4!1e1!3m2!1sREJWYN9oh7D2b4Gn-d4mXg!2e0'
    },
    {//ラフリ・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seYrGlJ27sYUDkJr4gkk1hg!2m2!1d19.44191!2d74.66266!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.44191,74.66266,3a,75y,90t/data=!3m4!1e1!3m2!1seYrGlJ27sYUDkJr4gkk1hg!2e0'
    },
    {//E1580 ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOy_Dvdtp3YbH1wWdwBhnzw!2m2!1d34.72475!2d-97.77738!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.72475,-97.77738,3a,75y,90t/data=!3m4!1e1!3m2!1sOy_Dvdtp3YbH1wWdwBhnzw!2e0'
    },
    {//ファリダバド, ハリヤナ州 (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sph1LgxFqYiY2ykVdvikL7w!2m2!1d28.33362!2d77.36804!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.33362,77.36804,3a,75y,90t/data=!3m4!1e1!3m2!1sph1LgxFqYiY2ykVdvikL7w!2e0'
    },
    {//7 リバーサイド・ドライブ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdnAvNVxb_GmmP9pQ15zE-Q!2m2!1d41.26961!2d-72.52942!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.26961,-72.52942,3a,75y,90t/data=!3m4!1e1!3m2!1sdnAvNVxb_GmmP9pQ15zE-Q!2e0'
    },
    {//845 キンタナ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sO0FbBU4ONodHCZEk_DqXCw!2m2!1d-32.70577!2d-62.10563!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.70577,-62.10563,3a,75y,90t/data=!3m4!1e1!3m2!1sO0FbBU4ONodHCZEk_DqXCw!2e0'
    },
    {//21 カレーラ 11 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBERGr_rjW3kY9Eb1q8prJg!2m2!1d3.0057!2d-76.4845!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.0057,-76.4845,3a,75y,90t/data=!3m4!1e1!3m2!1sBERGr_rjW3kY9Eb1q8prJg!2e0'
    },
    {//マフェテング (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_7uwNXe7STVihS_pI4yzkQ!2m2!1d-29.81138!2d27.177!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.81138,27.177,3a,75y,90t/data=!3m4!1e1!3m2!1s_7uwNXe7STVihS_pI4yzkQ!2e0'
    },
    {//23 エヴァレッツ・ウェイ (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sO7RdgtJNFFKyZzwMYfgwVA!2m2!1d-25.55491!2d152.64688!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.55491,152.64688,3a,75y,90t/data=!3m4!1e1!3m2!1sO7RdgtJNFFKyZzwMYfgwVA!2e0'
    },
    {//A3 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSquIjYC0hdofdUhXV7zjJg!2m2!1d-29.53575!2d28.26379!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.53575,28.26379,3a,75y,90t/data=!3m4!1e1!3m2!1sSquIjYC0hdofdUhXV7zjJg!2e0'
    },
    {//31 Jl. Teuku Umar (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUwhEnaatjTReqpTo3lJ8FA!2m2!1d-0.92667!2d100.3674!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.92667,100.3674,3a,75y,90t/data=!3m4!1e1!3m2!1sUwhEnaatjTReqpTo3lJ8FA!2e0'
    },
    {//MA-133 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgQpZBNGm_DCeV_SPObd0hg!2m2!1d-7.71431!2d-46.74674!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.71431,-46.74674,3a,75y,90t/data=!3m4!1e1!3m2!1sgQpZBNGm_DCeV_SPObd0hg!2e0'
    },
    {//408 46通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQkCwV3e9IUxOaU864cTk7g!2m2!1d-18.98852!2d-50.54114!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.98852,-50.54114,3a,75y,90t/data=!3m4!1e1!3m2!1sQkCwV3e9IUxOaU864cTk7g!2e0'
    },
    {//ルスタク, 南バーティナ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJLSp7bDjg4zwmDQoU0Hlvw!2m2!1d23.38536!2d57.4318!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.38536,57.4318,3a,75y,90t/data=!3m4!1e1!3m2!1sJLSp7bDjg4zwmDQoU0Hlvw!2e0'
    },
    {//トボンクムン州 (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slZOwTQXbWeIPsU1E-cHolg!2m2!1d11.83383!2d106.00579!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.83383,106.00579,3a,75y,90t/data=!3m4!1e1!3m2!1slZOwTQXbWeIPsU1E-cHolg!2e0'
    },
    {//カラガンダ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svfcVUnNmuKPi3RAhSXKk0Q!2m2!1d49.82719!2d72.83206!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.82719,72.83206,3a,75y,90t/data=!3m4!1e1!3m2!1svfcVUnNmuKPi3RAhSXKk0Q!2e0'
    },
    {//2332 ジェイコビー・クリーク・ロード (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZNMzLF2n1-70xzzouK4-Cw!2m2!1d40.8418!2d-124.06217!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.8418,-124.06217,3a,75y,90t/data=!3m4!1e1!3m2!1sZNMzLF2n1-70xzzouK4-Cw!2e0'
    },
    {//464 ロング・アイランド・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLlxiwsYxzhVzj7Rz_Vf5MA!2m2!1d43.64086!2d-71.3441!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.64086,-71.3441,3a,75y,90t/data=!3m4!1e1!3m2!1sLlxiwsYxzhVzj7Rz_Vf5MA!2e0'
    },
    {//1 R. Interventor Manoel Ribas (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGFZ5psHHceLNCLDIcCbFRA!2m2!1d-24.30244!2d-52.52812!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.30244,-52.52812,3a,75y,90t/data=!3m4!1e1!3m2!1sGFZ5psHHceLNCLDIcCbFRA!2e0'
    },
    {//リオグランデ・ド・スル州 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFVCJHYYvP91bLsHZ4OT3fw!2m2!1d-29.60413!2d-52.3944!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.60413,-52.3944,3a,75y,90t/data=!3m4!1e1!3m2!1sFVCJHYYvP91bLsHZ4OT3fw!2e0'
    },
    {//ตำบล ทุ่งแต้, ヤソートーン (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s40X-PAXGVzfH2C-bKfyFIw!2m2!1d15.92312!2d104.15374!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.92312,104.15374,3a,75y,90t/data=!3m4!1e1!3m2!1s40X-PAXGVzfH2C-bKfyFIw!2e0'
    },
    {//セデュー (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxU79IeEx3fZgdsh-o2IxlQ!2m2!1d12.7106!2d-15.55604!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.7106,-15.55604,3a,75y,90t/data=!3m4!1e1!3m2!1sxU79IeEx3fZgdsh-o2IxlQ!2e0'
    },
    {//北ケープ州 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOyFMKT_ajvQGz4Og9BYFwA!2m2!1d-27.33159!2d23.6715!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.33159,23.6715,3a,75y,90t/data=!3m4!1e1!3m2!1sOyFMKT_ajvQGz4Og9BYFwA!2e0'
    },
    {//1112 RN60 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUoIcjj19_M3uvqDxqUQYXA!2m2!1d-28.87677!2d-66.2346!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.87677,-66.2346,3a,75y,90t/data=!3m4!1e1!3m2!1sUoIcjj19_M3uvqDxqUQYXA!2e0'
    },
    {//プレジデンテ・エピターシオ・ペソーア高速道路 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbZuoJYdfXaT-mlxmAfO6Rg!2m2!1d-10.06833!2d-39.14712!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.06833,-39.14712,3a,75y,90t/data=!3m4!1e1!3m2!1sbZuoJYdfXaT-mlxmAfO6Rg!2e0'
    },
    {//C87 (チュニジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAOs57SUfq1IXIHIxyjdCYg!2m2!1d35.30469!2d10.67983!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.30469,10.67983,3a,75y,90t/data=!3m4!1e1!3m2!1sAOs57SUfq1IXIHIxyjdCYg!2e0'
    },
    {//35610 デザート・ローズ・ウェイ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgO-iamA-xNVcw5JWLxvlOw!2m2!1d33.67028!2d-117.25202!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.67028,-117.25202,3a,75y,90t/data=!3m4!1e1!3m2!1sgO-iamA-xNVcw5JWLxvlOw!2e0'
    },
    {//985 PA-156 (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbwPUo9fIqbYG8BnIvcOYqg!2m2!1d-2.20916!2d-49.48337!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.20916,-49.48337,3a,75y,90t/data=!3m4!1e1!3m2!1sbwPUo9fIqbYG8BnIvcOYqg!2e0'
    },
    {//カネロネス (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOPyFY6USWO9WgmNqFLb3cw!2m2!1d-34.53053!2d-56.31927!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.53053,-56.31927,3a,75y,90t/data=!3m4!1e1!3m2!1sOPyFY6USWO9WgmNqFLb3cw!2e0'
    },
    {//233 State Hwy 7 (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stO_s-UEkSeF5bfyhn0hw_A!2m2!1d-42.97985!2d172.71272!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-42.97985,172.71272,3a,75y,90t/data=!3m4!1e1!3m2!1stO_s-UEkSeF5bfyhn0hw_A!2e0'
    },
    {//1224 スペイン (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svj-jzGFzNmYErFADkP-RpA!2m2!1d-37.38223!2d-64.6009!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.38223,-64.6009,3a,75y,90t/data=!3m4!1e1!3m2!1svj-jzGFzNmYErFADkP-RpA!2e0'
    },
    {//IN-13 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEUel5SdyW0qAvuBRVkUTsw!2m2!1d40.68214!2d-85.82665!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.68214,-85.82665,3a,75y,90t/data=!3m4!1e1!3m2!1sEUel5SdyW0qAvuBRVkUTsw!2e0'
    },
    {//モラック, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4NGk4Vuwu7UH2tvGmi4sLA!2m2!1d24.72664!2d75.95801!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.72664,75.95801,3a,75y,90t/data=!3m4!1e1!3m2!1s4NGk4Vuwu7UH2tvGmi4sLA!2e0'
    },
    {//ラビンドラ・ビティ・バイパス・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3phqvIAVE0SOA0-7AYVZEw!2m2!1d23.64932!2d87.69038!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.64932,87.69038,3a,75y,90t/data=!3m4!1e1!3m2!1s3phqvIAVE0SOA0-7AYVZEw!2e0'
    },
    {//57 ティエラ・デル・フエゴ (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxQysAo0RwFrAwwYFjK7tSA!2m2!1d-38.93798!2d-69.22528!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.93798,-69.22528,3a,75y,90t/data=!3m4!1e1!3m2!1sxQysAo0RwFrAwwYFjK7tSA!2e0'
    },
    {//16227 カレーラ 22 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7LZSzrR8kZI-f2edN-VQ-A!2m2!1d7.48903!2d-74.87191!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.48903,-74.87191,3a,75y,90t/data=!3m4!1e1!3m2!1s7LZSzrR8kZI-f2edN-VQ-A!2e0'
    },
    {//N12 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFBp-cENZjz7mP41H4NuHHQ!2m2!1d-29.56293!2d24.15816!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.56293,24.15816,3a,75y,90t/data=!3m4!1e1!3m2!1sFBp-cENZjz7mP41H4NuHHQ!2e0'
    },
    {//34 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3ZlYCkAEgF9g-WhOcMb4nQ!2m2!1d4.46784!2d101.99527!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.46784,101.99527,3a,75y,90t/data=!3m4!1e1!3m2!1s3ZlYCkAEgF9g-WhOcMb4nQ!2e0'
    },
    {//ザーヒラ行政区 (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sylZ9isbdhVZR9RV3LLPfag!2m2!1d22.72402!2d56.03517!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.72402,56.03517,3a,75y,90t/data=!3m4!1e1!3m2!1sylZ9isbdhVZR9RV3LLPfag!2e0'
    },
    {//1 ドイス通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPGDf4enXnZ8NAo-LlgSjvA!2m2!1d-7.16468!2d-48.52859!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.16468,-48.52859,3a,75y,90t/data=!3m4!1e1!3m2!1sPGDf4enXnZ8NAo-LlgSjvA!2e0'
    },
    {//10 Bowline Pl (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skDUAoYB-2rdJyoiAd9TqGQ!2m2!1d-41.11538!2d174.88784!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-41.11538,174.88784,3a,75y,90t/data=!3m4!1e1!3m2!1skDUAoYB-2rdJyoiAd9TqGQ!2e0'
    },
    {//4029 レイク・ショア・ロード・サウス (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZbpTbwU9B5TAzu0gsstYgA!2m2!1d35.50631!2d-80.98031!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.50631,-80.98031,3a,75y,90t/data=!3m4!1e1!3m2!1sZbpTbwU9B5TAzu0gsstYgA!2e0'
    },
    {//エヌグ・ロード (ナイジェリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sckubjVV2DvlPJ1_WV3osQg!2m2!1d6.79306!2d7.42307!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.79306,7.42307,3a,75y,90t/data=!3m4!1e1!3m2!1sckubjVV2DvlPJ1_WV3osQg!2e0'
    },
    {//デンパサル, バリ州 (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOiWQamyxk7WgXIZ-WPxfAg!2m2!1d-8.66138!2d115.23997!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.66138,115.23997,3a,75y,90t/data=!3m4!1e1!3m2!1sOiWQamyxk7WgXIZ-WPxfAg!2e0'
    },
    {//326 ジェネラウ・オゾーリオ通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdu78Ke48Qy5C91JtJTJovg!2m2!1d-29.66501!2d-52.79008!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.66501,-52.79008,3a,75y,90t/data=!3m4!1e1!3m2!1sdu78Ke48Qy5C91JtJTJovg!2e0'
    },
    {//三種町, 秋田県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJV8bTksVcGW8oNFAnEdaaQ!2m2!1d40.05462!2d140.11353!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.05462,140.11353,3a,75y,90t/data=!3m4!1e1!3m2!1sJV8bTksVcGW8oNFAnEdaaQ!2e0'
    },
    {//E594 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZUAMuOaRktYlv5cK27J3Cg!2m2!1d-2.94107!2d-78.79025!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.94107,-78.79025,3a,75y,90t/data=!3m4!1e1!3m2!1sZUAMuOaRktYlv5cK27J3Cg!2e0'
    },
    {//SH 89 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3IKYs6d9LD3XqskPWt-Bnw!2m2!1d8.45582!2d77.69128!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.45582,77.69128,3a,75y,90t/data=!3m4!1e1!3m2!1s3IKYs6d9LD3XqskPWt-Bnw!2e0'
    },
    {//958 Jalan Seri Bayu 2/27 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBZrzqPKfz3DeiJ1vcbzwcw!2m2!1d5.72044!2d100.5461!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.72044,100.5461,3a,75y,90t/data=!3m4!1e1!3m2!1sBZrzqPKfz3DeiJ1vcbzwcw!2e0'
    },
    {//299 W通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGLnUx0GrAOLmsNrAVQIYTw!2m2!1d-27.16204!2d-52.31544!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.16204,-52.31544,3a,75y,90t/data=!3m4!1e1!3m2!1sGLnUx0GrAOLmsNrAVQIYTw!2e0'
    },
    {//19 ทางหลวงชนบท (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syis5EpCQDT2tffmknRqxBA!2m2!1d12.0671!2d102.28297!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.0671,102.28297,3a,75y,90t/data=!3m4!1e1!3m2!1syis5EpCQDT2tffmknRqxBA!2e0'
    },
    {//2 ถนน หนองทอง (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAvr4PPjKzVFGoOWfpUt9tQ!2m2!1d17.09838!2d100.82299!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.09838,100.82299,3a,75y,90t/data=!3m4!1e1!3m2!1sAvr4PPjKzVFGoOWfpUt9tQ!2e0'
    },
    {//Bilanyoni, クワズールー＝ナタール (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF-nohqRYgUurTLnST-qcFg!2m2!1d-27.38465!2d30.96007!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.38465,30.96007,3a,75y,90t/data=!3m4!1e1!3m2!1sF-nohqRYgUurTLnST-qcFg!2e0'
    },
    {//ឃុំ កាហែង, コンポンスプー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSzmpqXL13qxQ5Q33AZygrw!2m2!1d11.43317!2d104.45964!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.43317,104.45964,3a,75y,90t/data=!3m4!1e1!3m2!1sSzmpqXL13qxQ5Q33AZygrw!2e0'
    },
    {//ケップ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZUXPT_-yYKVPMPiiDJUJ3A!2m2!1d10.54882!2d104.3242!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.54882,104.3242,3a,75y,90t/data=!3m4!1e1!3m2!1sZUXPT_-yYKVPMPiiDJUJ3A!2e0'
    },
    {//イタ, セントラル (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFN-3JhsY8MHmwSUOIk7PQw!2m2!1d-25.51866!2d-57.37155!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.51866,-57.37155,3a,75y,90t/data=!3m4!1e1!3m2!1sFN-3JhsY8MHmwSUOIk7PQw!2e0'
    },
    {//Rodoanel Agnelo Neto (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLPUUQylcoWQnpGerJDe9Dw!2m2!1d-4.75684!2d-42.5491!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.75684,-42.5491,3a,75y,90t/data=!3m4!1e1!3m2!1sLPUUQylcoWQnpGerJDe9Dw!2e0'
    },
    {//4562 ヘス・アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-MaEdgpbyDwBY3J8-u1EOA!2m2!1d36.0071!2d-119.47537!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.0071,-119.47537,3a,75y,90t/data=!3m4!1e1!3m2!1s-MaEdgpbyDwBY3J8-u1EOA!2e0'
    },
    {//シモン・ボリバル (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMHiFx1xOEcOsKnXV9vStDA!2m2!1d-13.71946!2d-76.21104!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.71946,-76.21104,3a,75y,90t/data=!3m4!1e1!3m2!1sMHiFx1xOEcOsKnXV9vStDA!2e0'
    },
    {//Jl. Kecupak (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1l8DgnOIU96R6skH_VDDbQ!2m2!1d2.55871!2d98.30094!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@2.55871,98.30094,3a,75y,90t/data=!3m4!1e1!3m2!1s1l8DgnOIU96R6skH_VDDbQ!2e0'
    },
    {//バジェ・ビンドル, 西ベンガル (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-tQDPVK85EBm3pQaG-HLZQ!2m2!1d25.75792!2d88.1688!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.75792,88.1688,3a,75y,90t/data=!3m4!1e1!3m2!1s-tQDPVK85EBm3pQaG-HLZQ!2e0'
    },
    {//R303 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPTuFdmLUMLkrO5RMefjMBg!2m2!1d-33.34351!2d19.3089!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.34351,19.3089,3a,75y,90t/data=!3m4!1e1!3m2!1sPTuFdmLUMLkrO5RMefjMBg!2e0'
    },
    {//デブハラ, マディヤ・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srWM0bFmGgYPeHVE118DgEA!2m2!1d23.16727!2d81.59657!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.16727,81.59657,3a,75y,90t/data=!3m4!1e1!3m2!1srWM0bFmGgYPeHVE118DgEA!2e0'
    },
    {//ตำบล น้ำแคม, ルーイ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNr6Hkrwy9ToWbNhG2Plv4w!2m2!1d17.71672!2d101.51547!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.71672,101.51547,3a,75y,90t/data=!3m4!1e1!3m2!1sNr6Hkrwy9ToWbNhG2Plv4w!2e0'
    },
    {//ゲイ・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFNyEzEZRKABGf66gHWRjEQ!2m2!1d33.10988!2d-82.25335!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.10988,-82.25335,3a,75y,90t/data=!3m4!1e1!3m2!1sFNyEzEZRKABGf66gHWRjEQ!2e0'
    },
    {//西ケープ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suxMOJBr0s7W5mSnGQhd6lw!2m2!1d-32.51258!2d21.89498!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.51258,21.89498,3a,75y,90t/data=!3m4!1e1!3m2!1suxMOJBr0s7W5mSnGQhd6lw!2e0'
    },
    {//R39 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB62kWD5-k-Dppw9QebP6rA!2m2!1d-26.75259!2d29.57889!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.75259,29.57889,3a,75y,90t/data=!3m4!1e1!3m2!1sB62kWD5-k-Dppw9QebP6rA!2e0'
    },
    {//MT-240 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGz_GgdY42CL_oKZXT-88Kg!2m2!1d-14.1553!2d-54.25452!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.1553,-54.25452,3a,75y,90t/data=!3m4!1e1!3m2!1sGz_GgdY42CL_oKZXT-88Kg!2e0'
    },
    {//ตำบล ซับเปิบ, ペッチャブーン (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfpDQXhOIQc3sqv1dm7wVew!2m2!1d16.34889!2d100.96118!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.34889,100.96118,3a,75y,90t/data=!3m4!1e1!3m2!1sfpDQXhOIQc3sqv1dm7wVew!2e0'
    },
    {//33 Jl. Raya Kamal (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjUXDG69NEYntLRmBJiR7Xg!2m2!1d-7.17081!2d112.72891!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.17081,112.72891,3a,75y,90t/data=!3m4!1e1!3m2!1sjUXDG69NEYntLRmBJiR7Xg!2e0'
    },
    {//ロッキングハム, ノース・カロライナ州 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUelZ6DgyBaphZZxhtoJ4Mw!2m2!1d34.98282!2d-79.80615!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.98282,-79.80615,3a,75y,90t/data=!3m4!1e1!3m2!1sUelZ6DgyBaphZZxhtoJ4Mw!2e0'
    },
    {//309 エルメネヒルド・ガレアナ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv33frMj2nddtF0yEYa3zYw!2m2!1d18.53113!2d-92.64607!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.53113,-92.64607,3a,75y,90t/data=!3m4!1e1!3m2!1sv33frMj2nddtF0yEYa3zYw!2e0'
    },
    {//Jalan Tanjong Pagar (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0N5E9ZRj-Y1yHW_eJFQTWw!2m2!1d5.73992!2d115.93143!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.73992,115.93143,3a,75y,90t/data=!3m4!1e1!3m2!1s0N5E9ZRj-Y1yHW_eJFQTWw!2e0'
    },
    {//イソドロ・ロペス通り (プエルトリコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-MAet0g2aSaE-6zSj5-gYg!2m2!1d18.25731!2d-65.97625!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.25731,-65.97625,3a,75y,90t/data=!3m4!1e1!3m2!1s-MAet0g2aSaE-6zSj5-gYg!2e0'
    },
    {//2940 サンタ・アイネズ・ドライブ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sh4-UxgxWdZSzPBb6U6w8Jg!2m2!1d39.05179!2d-119.73853!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.05179,-119.73853,3a,75y,90t/data=!3m4!1e1!3m2!1sh4-UxgxWdZSzPBb6U6w8Jg!2e0'
    },
    {//Phaholyothin Frontage Road (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssf7ZprzdGqNgBJusJRShdw!2m2!1d14.31337!2d100.83621!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.31337,100.83621,3a,75y,90t/data=!3m4!1e1!3m2!1ssf7ZprzdGqNgBJusJRShdw!2e0'
    },
    {//124 トゥール・デ・ロシュ通り (レユニオン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sijkYRPyXmYVOTtwAEpGjvg!2m2!1d-21.01201!2d55.28037!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.01201,55.28037,3a,75y,90t/data=!3m4!1e1!3m2!1sijkYRPyXmYVOTtwAEpGjvg!2e0'
    },
    {//2 (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDNiGYygy5HHi3jz4Dtessg!2m2!1d13.53194!2d105.95807!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.53194,105.95807,3a,75y,90t/data=!3m4!1e1!3m2!1sDNiGYygy5HHi3jz4Dtessg!2e0'
    },
    {//プティサト (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9AgezHy_3gplXHtMU-BJOg!2m2!1d12.37094!2d103.79016!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.37094,103.79016,3a,75y,90t/data=!3m4!1e1!3m2!1s9AgezHy_3gplXHtMU-BJOg!2e0'
    },
    {//14 Calle 5 (ドミニカ共和国)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1so0Qxrc7vNc27v2jC_14NHA!2m2!1d19.44838!2d-70.65024!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.44838,-70.65024,3a,75y,90t/data=!3m4!1e1!3m2!1so0Qxrc7vNc27v2jC_14NHA!2e0'
    },
    {//ラ・クンブレ・デ・サン・ルカス, イダルゴ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sE4KTumzsIIINzjaqqvp1_Q!2m2!1d20.40731!2d-98.70538!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.40731,-98.70538,3a,75y,90t/data=!3m4!1e1!3m2!1sE4KTumzsIIINzjaqqvp1_Q!2e0'
    },
    {//パーサンジャ, ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sO_C3zB6aAT-j23zUeFTlug!2m2!1d25.33588!2d80.94014!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.33588,80.94014,3a,75y,90t/data=!3m4!1e1!3m2!1sO_C3zB6aAT-j23zUeFTlug!2e0'
    },
    {//3001 ウッドバイン・アベニュー・サウスイースト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEYM_Ty_M9ezD9oguyhgxNw!2m2!1d41.20688!2d-80.78187!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.20688,-80.78187,3a,75y,90t/data=!3m4!1e1!3m2!1sEYM_Ty_M9ezD9oguyhgxNw!2e0'
    },
    {//コレドール・ノラトランティコ (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srSjmZomnksvYPWgp_eVndw!2m2!1d10.45852!2d-84.38968!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.45852,-84.38968,3a,75y,90t/data=!3m4!1e1!3m2!1srSjmZomnksvYPWgp_eVndw!2e0'
    },
    {//エラルド・ウェルネル (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRYgrTrKK8-Dy2TAoezu6yQ!2m2!1d-41.2549!2d-73.01814!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-41.2549,-73.01814,3a,75y,90t/data=!3m4!1e1!3m2!1sRYgrTrKK8-Dy2TAoezu6yQ!2e0'
    },
    {//582 ファン・デ・サリーナス (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_JJ7VvWLAqew34fZz0fxdA!2m2!1d0.34941!2d-78.11477!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.34941,-78.11477,3a,75y,90t/data=!3m4!1e1!3m2!1s_JJ7VvWLAqew34fZz0fxdA!2e0'
    },
    {//County Rd 14 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc-TU2FERQK8DfSrAzQqWyA!2m2!1d45.82862!2d-93.31109!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.82862,-93.31109,3a,75y,90t/data=!3m4!1e1!3m2!1sc-TU2FERQK8DfSrAzQqWyA!2e0'
    },
    {//E35 (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTSok38sjjfM3wDirxBefYA!2m2!1d-4.38758!2d-79.96116!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.38758,-79.96116,3a,75y,90t/data=!3m4!1e1!3m2!1sTSok38sjjfM3wDirxBefYA!2e0'
    },
    {//イアイヤット・テンプル・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqmCL9tfN7Usg71P-HcOhFA!2m2!1d11.95411!2d75.55444!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.95411,75.55444,3a,75y,90t/data=!3m4!1e1!3m2!1sqmCL9tfN7Usg71P-HcOhFA!2e0'
    },
    {//20 Geel Street (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOUTYvDcRnpEI971x7en2hg!2m2!1d-34.47083!2d19.89152!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.47083,19.89152,3a,75y,90t/data=!3m4!1e1!3m2!1sOUTYvDcRnpEI971x7en2hg!2e0'
    },
    {//959 ビッグ・ロック・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgSctKWMthmPsdK7dFDzcSw!2m2!1d31.75291!2d-88.50337!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.75291,-88.50337,3a,75y,90t/data=!3m4!1e1!3m2!1sgSctKWMthmPsdK7dFDzcSw!2e0'
    },
    {//モンセニョール・ワルテル・ロサレス通り (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGfn5nICOZjHZsy7XMJyDYQ!2m2!1d-17.57064!2d-65.93419!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.57064,-65.93419,3a,75y,90t/data=!3m4!1e1!3m2!1sGfn5nICOZjHZsy7XMJyDYQ!2e0'
    },
    {//141 Omatane S Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ8GMg9Ulg55yysyrp9sWCg!2m2!1d-39.73485!2d175.91558!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-39.73485,175.91558,3a,75y,90t/data=!3m4!1e1!3m2!1sQ8GMg9Ulg55yysyrp9sWCg!2e0'
    },
    {//21 ワインバーグ・クレセント (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxkYKEszbHDNpNhD4Bx01bA!2m2!1d-25.87289!2d29.24621!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.87289,29.24621,3a,75y,90t/data=!3m4!1e1!3m2!1sxkYKEszbHDNpNhD4Bx01bA!2e0'
    },
    {//北レバノン (レバノン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s31T5fGlsrjNYX70GgIT9cg!2m2!1d34.23558!2d35.66651!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.23558,35.66651,3a,75y,90t/data=!3m4!1e1!3m2!1s31T5fGlsrjNYX70GgIT9cg!2e0'
    },
    {//Ranch Rd 385 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj-AuBoo1SFjUMA03kkiKlw!2m2!1d30.48603!2d-99.44901!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.48603,-99.44901,3a,75y,90t/data=!3m4!1e1!3m2!1sj-AuBoo1SFjUMA03kkiKlw!2e0'
    },
    {//আমতা, 西ベンガル (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5a1cnuqNwprhn4pJtCO9IQ!2m2!1d22.59285!2d88.00933!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.59285,88.00933,3a,75y,90t/data=!3m4!1e1!3m2!1s5a1cnuqNwprhn4pJtCO9IQ!2e0'
    },
    {//ตำบล นาหม่อม, ソンクラー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2bFgy_iltOaIFdjO0sYpHg!2m2!1d6.95735!2d100.58473!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.95735,100.58473,3a,75y,90t/data=!3m4!1e1!3m2!1s2bFgy_iltOaIFdjO0sYpHg!2e0'
    },
    {//ヌサトゥンガラティムール (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spU6eVHqyqba9cjWCevKtmg!2m2!1d-9.64721!2d124.37236!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.64721,124.37236,3a,75y,90t/data=!3m4!1e1!3m2!1spU6eVHqyqba9cjWCevKtmg!2e0'
    },
    {//MT-100 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSH7Ovyk7hRFw1DtDWvMgPg!2m2!1d-17.3463!2d-53.22387!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.3463,-53.22387,3a,75y,90t/data=!3m4!1e1!3m2!1sSH7Ovyk7hRFw1DtDWvMgPg!2e0'
    },
    {//5通り (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sty3Iq7jyjp1ctACkh8HbOg!2m2!1d10.47422!2d-84.96886!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.47422,-84.96886,3a,75y,90t/data=!3m4!1e1!3m2!1sty3Iq7jyjp1ctACkh8HbOg!2e0'
    },
    {//Tainui Bridge Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stI1T2pEON_HBP2WUgRBMcA!2m2!1d-37.56547!2d175.15237!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.56547,175.15237,3a,75y,90t/data=!3m4!1e1!3m2!1stI1T2pEON_HBP2WUgRBMcA!2e0'
    },
    {//仙台市, 宮城県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLbq4TM_44KUwrCCJuSa6XA!2m2!1d38.24458!2d140.8479!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.24458,140.8479,3a,75y,90t/data=!3m4!1e1!3m2!1sLbq4TM_44KUwrCCJuSa6XA!2e0'
    },
    {//México 15D (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sacHAIrmY-WW3pHkJNzsDBg!2m2!1d24.65365!2d-107.4965!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.65365,-107.4965,3a,75y,90t/data=!3m4!1e1!3m2!1sacHAIrmY-WW3pHkJNzsDBg!2e0'
    },
    {//R355 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHG_rYiI3AouQWp282A8Q8w!2m2!1d-29.88627!2d18.40322!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.88627,18.40322,3a,75y,90t/data=!3m4!1e1!3m2!1sHG_rYiI3AouQWp282A8Q8w!2e0'
    },
    {//チワワ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1cQUPR2Cr45hFt1d1vQsgQ!2m2!1d28.59907!2d-105.87327!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.59907,-105.87327,3a,75y,90t/data=!3m4!1e1!3m2!1s1cQUPR2Cr45hFt1d1vQsgQ!2e0'
    },
    {//5通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxGA9T4caxoSufXVuxnylZw!2m2!1d21.28881!2d-88.92926!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.28881,-88.92926,3a,75y,90t/data=!3m4!1e1!3m2!1sxGA9T4caxoSufXVuxnylZw!2e0'
    },
    {//237 タウン・ハイウェイ 9 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spk4p7Q_Dba809w6V2Abl7Q!2m2!1d44.53537!2d-72.02165!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.53537,-72.02165,3a,75y,90t/data=!3m4!1e1!3m2!1spk4p7Q_Dba809w6V2Abl7Q!2e0'
    },
    {//1088 ルイス・ベルトーリ・セーニオル高速道路 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHEuxSIdz3w3BNhxNCqgjMA!2m2!1d-27.21197!2d-49.76129!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.21197,-49.76129,3a,75y,90t/data=!3m4!1e1!3m2!1sHEuxSIdz3w3BNhxNCqgjMA!2e0'
    },
    {//1410 オールド・リバティー・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZZgslTq9zDTsvzzUy-OtwQ!2m2!1d31.22829!2d-90.46718!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.22829,-90.46718,3a,75y,90t/data=!3m4!1e1!3m2!1sZZgslTq9zDTsvzzUy-OtwQ!2e0'
    },
    {//マト・グロッソ・ド・スル州 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUqtnvGFg8ZKh3Tt2j3KmYQ!2m2!1d-22.04563!2d-55.14991!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.04563,-55.14991,3a,75y,90t/data=!3m4!1e1!3m2!1sUqtnvGFg8ZKh3Tt2j3KmYQ!2e0'
    },
    {//パラナ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sovz_ZPjRDZyQoxMZfY9Rsg!2m2!1d-23.00146!2d-50.10203!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.00146,-50.10203,3a,75y,90t/data=!3m4!1e1!3m2!1sovz_ZPjRDZyQoxMZfY9Rsg!2e0'
    },
    {//ブリラム (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2zIu8uWTJuZXd0KBafZRMQ!2m2!1d14.69893!2d102.88859!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.69893,102.88859,3a,75y,90t/data=!3m4!1e1!3m2!1s2zIu8uWTJuZXd0KBafZRMQ!2e0'
    },
    {//サン・ジェラウド通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc_yK3yWWuK4Q8MjGt8Usyw!2m2!1d-21.02162!2d-43.57152!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.02162,-43.57152,3a,75y,90t/data=!3m4!1e1!3m2!1sc_yK3yWWuK4Q8MjGt8Usyw!2e0'
    },
    {//321 イリマ・ストリート (ハワイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTYGI2rNOJsdngRe3bs53zg!2m2!1d21.49788!2d-158.03464!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.49788,-158.03464,3a,75y,90t/data=!3m4!1e1!3m2!1sTYGI2rNOJsdngRe3bs53zg!2e0'
    },
    {//2054 デプタード・エマヌエウ・ピニェイロ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scxawmVTxMrkeO5IMwXmTnw!2m2!1d-16.44819!2d-54.62531!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.44819,-54.62531,3a,75y,90t/data=!3m4!1e1!3m2!1scxawmVTxMrkeO5IMwXmTnw!2e0'
    },
    {//シムガ - カワーダ・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAt95UM7KRy-pii9o1zPvNA!2m2!1d22.00155!2d81.2433!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.00155,81.2433,3a,75y,90t/data=!3m4!1e1!3m2!1sAt95UM7KRy-pii9o1zPvNA!2e0'
    },
    {//1826 エクトル・マルケス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4nUxT1ezFCQ9TJWtCodvsg!2m2!1d-42.4676!2d-73.79233!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-42.4676,-73.79233,3a,75y,90t/data=!3m4!1e1!3m2!1s4nUxT1ezFCQ9TJWtCodvsg!2e0'
    },
    {//33498 US-30 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq4GlVwP9_lCeeDLGhOEt_A!2m2!1d42.52215!2d-111.40111!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.52215,-111.40111,3a,75y,90t/data=!3m4!1e1!3m2!1sq4GlVwP9_lCeeDLGhOEt_A!2e0'
    },
    {//プロロンガシオン・コンスティトゥジェンテス・オリエンテ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1THTRcAEL2gNTs7X7_gLvQ!2m2!1d20.60105!2d-100.29136!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.60105,-100.29136,3a,75y,90t/data=!3m4!1e1!3m2!1s1THTRcAEL2gNTs7X7_gLvQ!2e0'
    },
    {//Pattabiram, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBPiLpZxGUYGT_F7w9VWmSA!2m2!1d13.1237!2d80.07686!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.1237,80.07686,3a,75y,90t/data=!3m4!1e1!3m2!1sBPiLpZxGUYGT_F7w9VWmSA!2e0'
    },
    {//BR-040 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1so03nhHKvlxPE71Hf5iaOAw!2m2!1d-17.29369!2d-46.77369!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.29369,-46.77369,3a,75y,90t/data=!3m4!1e1!3m2!1so03nhHKvlxPE71Hf5iaOAw!2e0'
    },
    {//6753 State Hwy 43 (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQIMNEJm_DM_JNCUHqVFG2g!2m2!1d-39.09643!2d174.76613!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-39.09643,174.76613,3a,75y,90t/data=!3m4!1e1!3m2!1sQIMNEJm_DM_JNCUHqVFG2g!2e0'
    },
    {//イーガン, ミネソタ州 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5Fq7GxHNqvoqrnvGMsbyMw!2m2!1d44.80687!2d-93.205!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.80687,-93.205,3a,75y,90t/data=!3m4!1e1!3m2!1s5Fq7GxHNqvoqrnvGMsbyMw!2e0'
    },
    {//MG-402 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqAlwDgMwK1uLILD-UAnrww!2m2!1d-16.11484!2d-44.58364!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.11484,-44.58364,3a,75y,90t/data=!3m4!1e1!3m2!1sqAlwDgMwK1uLILD-UAnrww!2e0'
    },
    {//Google マップ (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl2TUdjTdl6IkyC5pkbpl9A!2m2!1d43.5761!2d104.4217!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.5761,104.4217,3a,75y,90t/data=!3m4!1e1!3m2!1sl2TUdjTdl6IkyC5pkbpl9A!2e0'
    },
    {//エデン・プレイリー, ミネソタ州 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2MeUPkvPOQpHeSNSrOVdSQ!2m2!1d44.8412!2d-93.48224!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.8412,-93.48224,3a,75y,90t/data=!3m4!1e1!3m2!1s2MeUPkvPOQpHeSNSrOVdSQ!2e0'
    },
    {//9985 ステージ・コーチ・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9FhNBbu5hb6Eiy624fVUYQ!2m2!1d31.39958!2d-84.11296!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.39958,-84.11296,3a,75y,90t/data=!3m4!1e1!3m2!1s9FhNBbu5hb6Eiy624fVUYQ!2e0'
    },
    {//カシーケ・アチャンバ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB-JGeVEIQohWmZbEepI23w!2m2!1d-1.72742!2d-78.59731!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.72742,-78.59731,3a,75y,90t/data=!3m4!1e1!3m2!1sB-JGeVEIQohWmZbEepI23w!2e0'
    },
    {//2 グッドウッド・ストリート (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3quBhOAbP7HYJXS789crSg!2m2!1d-27.55751!2d151.93259!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.55751,151.93259,3a,75y,90t/data=!3m4!1e1!3m2!1s3quBhOAbP7HYJXS789crSg!2e0'
    },
    {//マッキーズ・クリーク・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx2QVVdiQlsDrvaNYbvjSnw!2m2!1d-33.35713!2d148.36375!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.35713,148.36375,3a,75y,90t/data=!3m4!1e1!3m2!1sx2QVVdiQlsDrvaNYbvjSnw!2e0'
    },
    {//169 デラウェア・シティ・ポート・ペン・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfIVK52llscsh7UgR9pybXg!2m2!1d39.52702!2d-75.5783!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.52702,-75.5783,3a,75y,90t/data=!3m4!1e1!3m2!1sfIVK52llscsh7UgR9pybXg!2e0'
    },
    {//MA-132 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s50qWSqw2wWEAD7fkp_NjLQ!2m2!1d-7.10404!2d-46.24978!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.10404,-46.24978,3a,75y,90t/data=!3m4!1e1!3m2!1s50qWSqw2wWEAD7fkp_NjLQ!2e0'
    },
    {//チャラサ・カシュー・ファクトリー・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3fZ0M3rw3axxRsOJhc3IcA!2m2!1d15.90496!2d73.86392!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.90496,73.86392,3a,75y,90t/data=!3m4!1e1!3m2!1s3fZ0M3rw3axxRsOJhc3IcA!2e0'
    },
    {//502 サウス 1st アベニュー (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sr6pVO4zRX3Yo_idyDYaGfg!2m2!1d48.26885!2d-116.54786!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.26885,-116.54786,3a,75y,90t/data=!3m4!1e1!3m2!1sr6pVO4zRX3Yo_idyDYaGfg!2e0'
    },
    {//バンテアイ メアンチェイ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4a-KAghRTQoZoEFPnqC0sQ!2m2!1d13.68227!2d103.11278!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.68227,103.11278,3a,75y,90t/data=!3m4!1e1!3m2!1s4a-KAghRTQoZoEFPnqC0sQ!2e0'
    },
    {//PU-109 (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0mpazU75PQ0d_A9JnA1Bhw!2m2!1d-14.56705!2d-69.30133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.56705,-69.30133,3a,75y,90t/data=!3m4!1e1!3m2!1s0mpazU75PQ0d_A9JnA1Bhw!2e0'
    },
    {//5284 スコー・プレイリー・ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stkixz0JGF6tvg0ZfpuOSxg!2m2!1d42.29122!2d-88.83571!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.29122,-88.83571,3a,75y,90t/data=!3m4!1e1!3m2!1stkixz0JGF6tvg0ZfpuOSxg!2e0'
    },
    {//ボスケ通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sC_Sh_PDIoWuYdHmok-Hthg!2m2!1d19.72639!2d-98.96939!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.72639,-98.96939,3a,75y,90t/data=!3m4!1e1!3m2!1sC_Sh_PDIoWuYdHmok-Hthg!2e0'
    },
    {//310 イースト・リバー・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZxckp-BTYwFJhCR6UmwkRw!2m2!1d29.67664!2d-81.62009!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.67664,-81.62009,3a,75y,90t/data=!3m4!1e1!3m2!1sZxckp-BTYwFJhCR6UmwkRw!2e0'
    },
    {//カカハーティ, マディヤ・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDDe3avXMPajdQA3lF2R98w!2m2!1d24.56375!2d80.27598!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.56375,80.27598,3a,75y,90t/data=!3m4!1e1!3m2!1sDDe3avXMPajdQA3lF2R98w!2e0'
    },
    {//Lorong Kemajuan (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHDUgbtHWlq5MGX-vTlQ7eQ!2m2!1d5.97062!2d116.07081!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.97062,116.07081,3a,75y,90t/data=!3m4!1e1!3m2!1sHDUgbtHWlq5MGX-vTlQ7eQ!2e0'
    },
    {//95 ウィンストン・アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sa6sbo3sQHvXk0jofGXWGDA!2m2!1d36.11728!2d-88.51624!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.11728,-88.51624,3a,75y,90t/data=!3m4!1e1!3m2!1sa6sbo3sQHvXk0jofGXWGDA!2e0'
    },
    {//パラセイズ・ロード・サウスウェスト (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2cAKXIReFoT1eq6AwN4HYA!2m2!1d47.43593!2d-119.77698!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.43593,-119.77698,3a,75y,90t/data=!3m4!1e1!3m2!1s2cAKXIReFoT1eq6AwN4HYA!2e0'
    },
    {//ヌサトゥンガラティムール (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX055K5YUeTm1ohoDhGQlBA!2m2!1d-9.64552!2d119.36774!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.64552,119.36774,3a,75y,90t/data=!3m4!1e1!3m2!1sX055K5YUeTm1ohoDhGQlBA!2e0'
    },
    {//R612 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxJGnPiQ2VnpZooqfd2h-wg!2m2!1d-30.01998!2d29.92152!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.01998,29.92152,3a,75y,90t/data=!3m4!1e1!3m2!1sxJGnPiQ2VnpZooqfd2h-wg!2e0'
    },
    {//ハリスコ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sekGI1Uv1_mLRE02qdGXNjw!2m2!1d19.48092!2d-104.42702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.48092,-104.42702,3a,75y,90t/data=!3m4!1e1!3m2!1sekGI1Uv1_mLRE02qdGXNjw!2e0'
    },
    {//Jl. Yosomulyo (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOufAEgNELiHj8wRdNoY1AQ!2m2!1d-8.39774!2d114.15954!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.39774,114.15954,3a,75y,90t/data=!3m4!1e1!3m2!1sOufAEgNELiHj8wRdNoY1AQ!2e0'
    },
    {//東ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1secneNRtzWyWZtpXZEkVOFg!2m2!1d-7.17541!2d113.55392!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.17541,113.55392,3a,75y,90t/data=!3m4!1e1!3m2!1secneNRtzWyWZtpXZEkVOFg!2e0'
    },
    {//112 オールド・ハイウェイ 34 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFw6aVVzthC-Zmr9rC0Ntxw!2m2!1d40.81102!2d-91.08396!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.81102,-91.08396,3a,75y,90t/data=!3m4!1e1!3m2!1sFw6aVVzthC-Zmr9rC0Ntxw!2e0'
    },
    {//BR-421 (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfcK3CnyOU_DfBdNS1HCDXA!2m2!1d-10.57431!2d-63.59805!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.57431,-63.59805,3a,75y,90t/data=!3m4!1e1!3m2!1sfcK3CnyOU_DfBdNS1HCDXA!2e0'
    },
    {//P1 (チュニジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-F7RRL-yf8TSYqw8NyiPKw!2m2!1d35.88578!2d10.5746!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.88578,10.5746,3a,75y,90t/data=!3m4!1e1!3m2!1s-F7RRL-yf8TSYqw8NyiPKw!2e0'
    },
    {//デオーガー, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0_ialIUNTdWHPL6NxrzKHw!2m2!1d26.40409!2d72.27845!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.40409,72.27845,3a,75y,90t/data=!3m4!1e1!3m2!1s0_ialIUNTdWHPL6NxrzKHw!2e0'
    },
    {//13通り (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si60N0IHGNQC2szkBvLiWvg!2m2!1d8.65511!2d-82.94738!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.65511,-82.94738,3a,75y,90t/data=!3m4!1e1!3m2!1si60N0IHGNQC2szkBvLiWvg!2e0'
    },
    {//ตำบล คำบง, カーラシン (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8PA0mwbg_A5WzWwQiw1PVQ!2m2!1d16.69597!2d103.86878!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.69597,103.86878,3a,75y,90t/data=!3m4!1e1!3m2!1s8PA0mwbg_A5WzWwQiw1PVQ!2e0'
    },
    {//南スマトラ (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf-JRM6Asz-A0MaRq1Ce8FQ!2m2!1d-3.16083!2d103.18677!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.16083,103.18677,3a,75y,90t/data=!3m4!1e1!3m2!1sf-JRM6Asz-A0MaRq1Ce8FQ!2e0'
    },
    {//MEX 14 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb7Jtwu54uynYclMEstPjfQ!2m2!1d19.61259!2d-100.12382!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.61259,-100.12382,3a,75y,90t/data=!3m4!1e1!3m2!1sb7Jtwu54uynYclMEstPjfQ!2e0'
    },
    {//Jose Abad Santos Ave (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7MlWA4kT5_f6ac-QJ2-5jg!2m2!1d14.98135!2d120.61812!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.98135,120.61812,3a,75y,90t/data=!3m4!1e1!3m2!1s7MlWA4kT5_f6ac-QJ2-5jg!2e0'
    },
    {//東ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soX5016GxVHzZsxCqE9s3DQ!2m2!1d-8.01699!2d114.36622!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.01699,114.36622,3a,75y,90t/data=!3m4!1e1!3m2!1soX5016GxVHzZsxCqE9s3DQ!2e0'
    },
    {//3287 TN-269 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSqYJR_dmtgzNsJd0FBMd7Q!2m2!1d35.69836!2d-86.36395!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.69836,-86.36395,3a,75y,90t/data=!3m4!1e1!3m2!1sSqYJR_dmtgzNsJd0FBMd7Q!2e0'
    },
    {//115 アマンチノ・カヴァリェイロ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szRHPjyMFJF5jnMs8gCwkjQ!2m2!1d-24.5995!2d-52.79969!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.5995,-52.79969,3a,75y,90t/data=!3m4!1e1!3m2!1szRHPjyMFJF5jnMs8gCwkjQ!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snunSOk2QyMHEoDScMcmZbw!2m2!1d-19.34508!2d-41.2268!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.34508,-41.2268,3a,75y,90t/data=!3m4!1e1!3m2!1snunSOk2QyMHEoDScMcmZbw!2e0'
    },
    {//ハイバットプール, マハーラーシュトラ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ss2znrhOxJGOlbm4vmZPang!2m2!1d19.67548!2d74.85372!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.67548,74.85372,3a,75y,90t/data=!3m4!1e1!3m2!1ss2znrhOxJGOlbm4vmZPang!2e0'
    },
    {//764 ビクトリア・ロード (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQr-mONnlUTQpENdmmUbqQg!2m2!1d46.25329!2d-64.9001!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.25329,-64.9001,3a,75y,90t/data=!3m4!1e1!3m2!1sQr-mONnlUTQpENdmmUbqQg!2e0'
    },
    {//15 ジューリア M デ・オリヴェイラ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sp0pC07Y5lz1-9-edBf_lKQ!2m2!1d-16.00069!2d-51.3931!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.00069,-51.3931,3a,75y,90t/data=!3m4!1e1!3m2!1sp0pC07Y5lz1-9-edBf_lKQ!2e0'
    },
    {//E25 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQygDDNUpOA2Md5rz_A_UPQ!2m2!1d-1.97843!2d-79.60032!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.97843,-79.60032,3a,75y,90t/data=!3m4!1e1!3m2!1sQygDDNUpOA2Md5rz_A_UPQ!2e0'
    },
    {//3052 33rd アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5E3tJcXkWiAnklz9uCw4DA!2m2!1d41.44614!2d-97.36814!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.44614,-97.36814,3a,75y,90t/data=!3m4!1e1!3m2!1s5E3tJcXkWiAnklz9uCw4DA!2e0'
    },
    {//Jogipet, テランガーナ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8gwc1QhJb_7OlinEEjd7UQ!2m2!1d17.82935!2d78.07546!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.82935,78.07546,3a,75y,90t/data=!3m4!1e1!3m2!1s8gwc1QhJb_7OlinEEjd7UQ!2e0'
    },
    {//503 R. Campína Grande (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s75TKt3ZdSq8kjGOSTY5gww!2m2!1d-8.00271!2d-34.87515!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.00271,-34.87515,3a,75y,90t/data=!3m4!1e1!3m2!1s75TKt3ZdSq8kjGOSTY5gww!2e0'
    },
    {//4281 サン・ホセ・ロード (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI_1ySzniGFOZYNTMT_OaRA!2m2!1d35.18033!2d-114.50767!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.18033,-114.50767,3a,75y,90t/data=!3m4!1e1!3m2!1sI_1ySzniGFOZYNTMT_OaRA!2e0'
    },
    {//グアナフアト (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syyHpaFWYyOUMSzJSiUNaFg!2m2!1d21.09707!2d-101.55702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.09707,-101.55702,3a,75y,90t/data=!3m4!1e1!3m2!1syyHpaFWYyOUMSzJSiUNaFg!2e0'
    },
    {//A363 (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB9gUyUgBbHWw_ziJ7UNdgA!2m2!1d42.1277!2d77.00377!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.1277,77.00377,3a,75y,90t/data=!3m4!1e1!3m2!1sB9gUyUgBbHWw_ziJ7UNdgA!2e0'
    },
    {//11827 Co Rd 32 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spse6ZAck1jYIXWBF46YKAQ!2m2!1d32.23204!2d-88.3566!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.23204,-88.3566,3a,75y,90t/data=!3m4!1e1!3m2!1spse6ZAck1jYIXWBF46YKAQ!2e0'
    },
    {//A363 (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ss4lp2IzuYvwON2qoaOmxYg!2m2!1d42.33222!2d77.9807!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.33222,77.9807,3a,75y,90t/data=!3m4!1e1!3m2!1ss4lp2IzuYvwON2qoaOmxYg!2e0'
    },
    {//1 R. Vinte e Um de Abril (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxzr6FF_D2YVlehRuqsG1UA!2m2!1d-25.11677!2d-53.00431!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.11677,-53.00431,3a,75y,90t/data=!3m4!1e1!3m2!1sxzr6FF_D2YVlehRuqsG1UA!2e0'
    },
    {//A15 (ボツワナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSzXB-KxMKQmRgbsEtlNIWA!2m2!1d-21.99884!2d27.84717!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.99884,27.84717,3a,75y,90t/data=!3m4!1e1!3m2!1sSzXB-KxMKQmRgbsEtlNIWA!2e0'
    },
    {//Jl. Raya Halilulik-Betun (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIkWSmr8TJiDPjb2kn5QGGQ!2m2!1d-9.53245!2d124.92545!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.53245,124.92545,3a,75y,90t/data=!3m4!1e1!3m2!1sIkWSmr8TJiDPjb2kn5QGGQ!2e0'
    },
    {//ノースウェスト 110th ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2Yvtlfw1goH5xms34OQ-bA!2m2!1d37.98446!2d-96.84337!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.98446,-96.84337,3a,75y,90t/data=!3m4!1e1!3m2!1s2Yvtlfw1goH5xms34OQ-bA!2e0'
    },
    {//ビスア・マーグ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_jw5DqKagI_dtyIJsfcGcg!2m2!1d26.11637!2d83.85461!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.11637,83.85461,3a,75y,90t/data=!3m4!1e1!3m2!1s_jw5DqKagI_dtyIJsfcGcg!2e0'
    },
    {//SH16 (ブータン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRgWBV-0lKrhmNHyrJnHkpA!2m2!1d26.75335!2d89.36151!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.75335,89.36151,3a,75y,90t/data=!3m4!1e1!3m2!1sRgWBV-0lKrhmNHyrJnHkpA!2e0'
    },
    {//ビア・オク (パナマ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDBYi-H3U2iDURbhXgxCLrQ!2m2!1d8.04487!2d-80.7726!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.04487,-80.7726,3a,75y,90t/data=!3m4!1e1!3m2!1sDBYi-H3U2iDURbhXgxCLrQ!2e0'
    },
    {//3019 イースト・マーティンズ・グラント・サークル (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9laEisd_4tR1sfTkFXCJkQ!2m2!1d37.5358!2d-77.5924!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.5358,-77.5924,3a,75y,90t/data=!3m4!1e1!3m2!1s9laEisd_4tR1sfTkFXCJkQ!2e0'
    },
    {//E-411 (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdXdHO5qYJXA2SjE71i7VuA!2m2!1d-32.42308!2d-71.03082!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.42308,-71.03082,3a,75y,90t/data=!3m4!1e1!3m2!1sdXdHO5qYJXA2SjE71i7VuA!2e0'
    },
    {//1307 ディヴィジョン・ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sERDjCA-Khq7hRUU3P_M3Bw!2m2!1d41.87806!2d-84.03314!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.87806,-84.03314,3a,75y,90t/data=!3m4!1e1!3m2!1sERDjCA-Khq7hRUU3P_M3Bw!2e0'
    },
    {//Bibbulmun Track (オーストラリア南西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_jLQ0chYq7ed8BoAnbxFKg!2m2!1d-34.51313!2d116.10583!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.51313,116.10583,3a,75y,90t/data=!3m4!1e1!3m2!1s_jLQ0chYq7ed8BoAnbxFKg!2e0'
    },
    {//1320 11月20日通り (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg8aPojpzKkRbT3EbYDTRvw!2m2!1d25.26604!2d-111.77842!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.26604,-111.77842,3a,75y,90t/data=!3m4!1e1!3m2!1sg8aPojpzKkRbT3EbYDTRvw!2e0'
    },
    {//PR-7741 (プエルトリコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssRb8GKYORXydbwztFLa0aw!2m2!1d18.06566!2d-66.13727!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.06566,-66.13727,3a,75y,90t/data=!3m4!1e1!3m2!1ssRb8GKYORXydbwztFLa0aw!2e0'
    },
    {//リンポポ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM0rukNXzxHdpnIPrm-ExEg!2m2!1d-23.973!2d28.97361!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.973,28.97361,3a,75y,90t/data=!3m4!1e1!3m2!1sM0rukNXzxHdpnIPrm-ExEg!2e0'
    },
    {//パラナ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPErnbuOTCJZ9ja5cE_lc1w!2m2!1d-26.33688!2d-52.55988!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.33688,-52.55988,3a,75y,90t/data=!3m4!1e1!3m2!1sPErnbuOTCJZ9ja5cE_lc1w!2e0'
    },
    {//Coribe, バイーア州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_SYOa8tcrG19HF-dKjSIyg!2m2!1d-13.82816!2d-44.47137!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.82816,-44.47137,3a,75y,90t/data=!3m4!1e1!3m2!1s_SYOa8tcrG19HF-dKjSIyg!2e0'
    },
    {//ダクシン・バハラチャンドラナガー, トリプラ (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVjUMk-j3svinq6IV8fGKiA!2m2!1d23.28022!2d91.48015!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.28022,91.48015,3a,75y,90t/data=!3m4!1e1!3m2!1sVjUMk-j3svinq6IV8fGKiA!2e0'
    },
    {//2 カピタン・ジョゼー・オリヴァ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sy_l78LkCu8xRSSEQwczfTQ!2m2!1d-21.04662!2d-49.37951!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.04662,-49.37951,3a,75y,90t/data=!3m4!1e1!3m2!1sy_l78LkCu8xRSSEQwczfTQ!2e0'
    },
    {//Jl. Lkr. Sel. (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sajAmtTVnj4kPTqCyk6SrpA!2m2!1d-6.94458!2d106.94341!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.94458,106.94341,3a,75y,90t/data=!3m4!1e1!3m2!1sajAmtTVnj4kPTqCyk6SrpA!2e0'
    },
    {//5000 グリンツ・レイク・ロード (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxtQrRKfpH1yhhbMh8Dj3qg!2m2!1d48.39428!2d-123.63713!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.39428,-123.63713,3a,75y,90t/data=!3m4!1e1!3m2!1sxtQrRKfpH1yhhbMh8Dj3qg!2e0'
    },
    {//BR-267 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGCoVOP3I8IlxOt1IvwpnLA!2m2!1d-21.65129!2d-49.81055!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.65129,-49.81055,3a,75y,90t/data=!3m4!1e1!3m2!1sGCoVOP3I8IlxOt1IvwpnLA!2e0'
    },
    {//281 R. Howard Archibal Acheson Júnior (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBPgUN5iUIBjRCfoKkASj3Q!2m2!1d-23.60906!2d-46.83721!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.60906,-46.83721,3a,75y,90t/data=!3m4!1e1!3m2!1sBPgUN5iUIBjRCfoKkASj3Q!2e0'
    },
    {//自由州 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svkrkWr84HF6F3zFQGAAOoQ!2m2!1d-28.99786!2d26.56108!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.99786,26.56108,3a,75y,90t/data=!3m4!1e1!3m2!1svkrkWr84HF6F3zFQGAAOoQ!2e0'
    },
    {//ヌサトゥンガラティムール (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9PC3mq94X6RfCImD75-2Hg!2m2!1d-9.34635!2d124.58024!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.34635,124.58024,3a,75y,90t/data=!3m4!1e1!3m2!1s9PC3mq94X6RfCImD75-2Hg!2e0'
    },
    {//バティープ, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIWaOnxYF3y_FKj4fOTJNVw!2m2!1d24.88667!2d72.01238!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.88667,72.01238,3a,75y,90t/data=!3m4!1e1!3m2!1sIWaOnxYF3y_FKj4fOTJNVw!2e0'
    },
    {//Жемісті, 南カザフスタン (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZ3zlNxF7ShQ3iLISkpeeUg!2m2!1d41.49386!2d69.29875!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.49386,69.29875,3a,75y,90t/data=!3m4!1e1!3m2!1sZ3zlNxF7ShQ3iLISkpeeUg!2e0'
    },
    {//951 サン・ロレンソ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stmkeJjk9c8fZrey-b-pdzA!2m2!1d-32.80567!2d-63.87631!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.80567,-63.87631,3a,75y,90t/data=!3m4!1e1!3m2!1stmkeJjk9c8fZrey-b-pdzA!2e0'
    },
    {//にかほ市, 秋田県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scMXVwbB-9TwTZ6cDw9RIqQ!2m2!1d39.24282!2d139.92402!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.24282,139.92402,3a,75y,90t/data=!3m4!1e1!3m2!1scMXVwbB-9TwTZ6cDw9RIqQ!2e0'
    },
    {//52 アフトダローガ・バイカル (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skeLhebQeBW-AslUd2xv0kw!2m2!1d51.05494!2d107.81699!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.05494,107.81699,3a,75y,90t/data=!3m4!1e1!3m2!1skeLhebQeBW-AslUd2xv0kw!2e0'
    },
    {//Hương Sơn, ハティン (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2ijVOVsy_3ygI1zJ2i9RtQ!2m2!1d18.50671!2d105.4563!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.50671,105.4563,3a,75y,90t/data=!3m4!1e1!3m2!1s2ijVOVsy_3ygI1zJ2i9RtQ!2e0'
    },
    {//エクアドル 45 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slB3Djbt_BcKmDuGGvhikXg!2m2!1d-2.42271!2d-78.15219!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.42271,-78.15219,3a,75y,90t/data=!3m4!1e1!3m2!1slB3Djbt_BcKmDuGGvhikXg!2e0'
    },
    {//Ruta 7 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9DMVaDEA2aEYqCUxbdT3Hw!2m2!1d-46.74027!2d-72.77352!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-46.74027,-72.77352,3a,75y,90t/data=!3m4!1e1!3m2!1s9DMVaDEA2aEYqCUxbdT3Hw!2e0'
    },
    {//Багахангай - Чойр (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBdQUt0mRcAA3YdaWct8RHQ!2m2!1d46.40537!2d108.36236!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.40537,108.36236,3a,75y,90t/data=!3m4!1e1!3m2!1sBdQUt0mRcAA3YdaWct8RHQ!2e0'
    },
    {//121 ビジャグラン (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6xN1Gcll0WCBXsDj0_tRCQ!2m2!1d25.79394!2d-100.5964!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.79394,-100.5964,3a,75y,90t/data=!3m4!1e1!3m2!1s6xN1Gcll0WCBXsDj0_tRCQ!2e0'
    },
    {//バッククラ・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-I4BgcEK0mVwgB2EDE61Uw!2m2!1d-29.43519!2d151.16321!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.43519,151.16321,3a,75y,90t/data=!3m4!1e1!3m2!1s-I4BgcEK0mVwgB2EDE61Uw!2e0'
    },
    {//8595 National Highway 1 (オーストラリア中北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3uBwO3T_0Prc2Wha7RVLrw!2m2!1d-14.44258!2d132.23805!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.44258,132.23805,3a,75y,90t/data=!3m4!1e1!3m2!1s3uBwO3T_0Prc2Wha7RVLrw!2e0'
    },
    {//Khorixas, クネーネ (ナミビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGJjLqcYu3r8OYKtgkO7Q0g!2m2!1d-20.38092!2d14.9554!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.38092,14.9554,3a,75y,90t/data=!3m4!1e1!3m2!1sGJjLqcYu3r8OYKtgkO7Q0g!2e0'
    },
    {//ラッタ・ナシオナル・セキュンダリア 131 (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssT43mBy-Kr4FkSavtejl1Q!2m2!1d9.93985!2d-84.53473!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.93985,-84.53473,3a,75y,90t/data=!3m4!1e1!3m2!1ssT43mBy-Kr4FkSavtejl1Q!2e0'
    },
    {//221 クラリンド・セバスチアン・ダ・クーニャ通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6d9rxB83PmQJDy3AalSNDA!2m2!1d-26.91357!2d-48.7823!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.91357,-48.7823,3a,75y,90t/data=!3m4!1e1!3m2!1s6d9rxB83PmQJDy3AalSNDA!2e0'
    },
    {//長岡市, 新潟県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRu5m1Nl4x58ktCsPuJTU2g!2m2!1d37.5588!2d138.80977!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.5588,138.80977,3a,75y,90t/data=!3m4!1e1!3m2!1sRu5m1Nl4x58ktCsPuJTU2g!2e0'
    },
    {//アダムズ・フォレスト・サービス・ロード (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLO76nTL1K5cj1E-yg1B0pA!2m2!1d51.07975!2d-119.79243!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.07975,-119.79243,3a,75y,90t/data=!3m4!1e1!3m2!1sLO76nTL1K5cj1E-yg1B0pA!2e0'
    },
    {//14 ул. 40 Лет Лпк (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skhsv6zZUa9KWGVLib7soww!2m2!1d51.92781!2d108.05749!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.92781,108.05749,3a,75y,90t/data=!3m4!1e1!3m2!1skhsv6zZUa9KWGVLib7soww!2e0'
    },
    {//セール通り (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHKtYcr9Q5NaHvy49fCqVSQ!2m2!1d47.82635!2d-64.59764!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.82635,-64.59764,3a,75y,90t/data=!3m4!1e1!3m2!1sHKtYcr9Q5NaHvy49fCqVSQ!2e0'
    },
    {//フォール・リバー, マサチューセッツ州 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGboc9sZhkUgiSyJB5rhFyA!2m2!1d41.72027!2d-71.12111!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.72027,-71.12111,3a,75y,90t/data=!3m4!1e1!3m2!1sGboc9sZhkUgiSyJB5rhFyA!2e0'
    },
    {//9670 カウンティー・ロード 1150 イースト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swREQwQkUIh5DRuNCc1q7ZA!2m2!1d40.41278!2d-85.45398!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.41278,-85.45398,3a,75y,90t/data=!3m4!1e1!3m2!1swREQwQkUIh5DRuNCc1q7ZA!2e0'
    },
    {//ตำบล โพนสูง, ウドーンターニー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNqRfADk_wsgpzWL235c-kg!2m2!1d17.64803!2d103.23123!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.64803,103.23123,3a,75y,90t/data=!3m4!1e1!3m2!1sNqRfADk_wsgpzWL235c-kg!2e0'
    },
    {//オスケメン, 東カザフスタン (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfjD5G8eRIOAWOObGF3ZXqg!2m2!1d49.96563!2d82.59084!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.96563,82.59084,3a,75y,90t/data=!3m4!1e1!3m2!1sfjD5G8eRIOAWOObGF3ZXqg!2e0'
    },
    {//Route Nationale 2 Mare Longue (レユニオン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suycBiZSePKwyxG-dx1zfew!2m2!1d-21.36701!2d55.74574!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.36701,55.74574,3a,75y,90t/data=!3m4!1e1!3m2!1suycBiZSePKwyxG-dx1zfew!2e0'
    },
    {//ตำบล กุดสิมคุ้มใหม่, カーラシン (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb8ANuKOgUDAokcdvPocEQw!2m2!1d16.6861!2d104.07529!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.6861,104.07529,3a,75y,90t/data=!3m4!1e1!3m2!1sb8ANuKOgUDAokcdvPocEQw!2e0'
    },
    {//60 MT-170 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKpHIrx1h5SP0jVmYlsBM0g!2m2!1d-14.48729!2d-57.93048!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.48729,-57.93048,3a,75y,90t/data=!3m4!1e1!3m2!1sKpHIrx1h5SP0jVmYlsBM0g!2e0'
    },
    {//西伊豆町, 静岡県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM1OHkpkcsU2mJ-41wOq5AA!2m2!1d34.8002!2d138.75621!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.8002,138.75621,3a,75y,90t/data=!3m4!1e1!3m2!1sM1OHkpkcsU2mJ-41wOq5AA!2e0'
    },
    {//自由州 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk5K76ECsFTEIjwX7OALA4A!2m2!1d-28.77255!2d27.14799!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.77255,27.14799,3a,75y,90t/data=!3m4!1e1!3m2!1sk5K76ECsFTEIjwX7OALA4A!2e0'
    },
    {//2887 Co Rd 1459 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spGzWMMglDChkknCJwSck0Q!2m2!1d33.04932!2d-94.50036!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.04932,-94.50036,3a,75y,90t/data=!3m4!1e1!3m2!1spGzWMMglDChkknCJwSck0Q!2e0'
    },
    {//メドニン (チュニジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBO5lmIOs6fNyTTCvcxrC_A!2m2!1d33.82843!2d10.95431!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.82843,10.95431,3a,75y,90t/data=!3m4!1e1!3m2!1sBO5lmIOs6fNyTTCvcxrC_A!2e0'
    },
    {//カフェー・ゴヴェルナドール・ネイ・ブラガ高速道路 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saunsbeSEjqiLNSDP9hw44Q!2m2!1d-23.09544!2d-52.37535!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.09544,-52.37535,3a,75y,90t/data=!3m4!1e1!3m2!1saunsbeSEjqiLNSDP9hw44Q!2e0'
    },
    {//12 プロフェソール・ヴェーラ・ルーシア・ドス・サントス・プラド通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjarF7udcfUcbawxxc7qmdw!2m2!1d-12.80151!2d-42.17179!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.80151,-42.17179,3a,75y,90t/data=!3m4!1e1!3m2!1sjarF7udcfUcbawxxc7qmdw!2e0'
    },
    {//1449 エル・カミノ・ビレッジ・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slNtOXhhkwdrMRZ6J9CT3SQ!2m2!1d29.54994!2d-95.10701!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.54994,-95.10701,3a,75y,90t/data=!3m4!1e1!3m2!1slNtOXhhkwdrMRZ6J9CT3SQ!2e0'
    },
    {//ンコワンコワ-A, リンポポ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB2DIrbfksMcEzeZ0M9OThw!2m2!1d-23.88607!2d30.27944!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.88607,30.27944,3a,75y,90t/data=!3m4!1e1!3m2!1sB2DIrbfksMcEzeZ0M9OThw!2e0'
    },
    {//ブールバード・イースト (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-LthfadYuy_xG7hf5rAS1g!2m2!1d34.46474!2d-81.84394!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.46474,-81.84394,3a,75y,90t/data=!3m4!1e1!3m2!1s-LthfadYuy_xG7hf5rAS1g!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqGuhqB_R9z-S-ZU32_psHg!2m2!1d-20.1885!2d-41.9979!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.1885,-41.9979,3a,75y,90t/data=!3m4!1e1!3m2!1sqGuhqB_R9z-S-ZU32_psHg!2e0'
    },
    {//1882 ボルジェス・デ・メデイロス通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srDtBmD1czdYO5tSyq9FzLg!2m2!1d-24.71541!2d-53.74349!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.71541,-53.74349,3a,75y,90t/data=!3m4!1e1!3m2!1srDtBmD1czdYO5tSyq9FzLg!2e0'
    },
    {//フェロカリル通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssVzmVJPTVo6HrLcPBMOhuA!2m2!1d18.78144!2d-98.96579!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.78144,-98.96579,3a,75y,90t/data=!3m4!1e1!3m2!1ssVzmVJPTVo6HrLcPBMOhuA!2e0'
    },
    {//18321 Township Rd 474 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suc0WDi0yxmPfGlTDdnHwdQ!2m2!1d53.07634!2d-112.57253!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.07634,-112.57253,3a,75y,90t/data=!3m4!1e1!3m2!1suc0WDi0yxmPfGlTDdnHwdQ!2e0'
    },
    {//11 Дүнжингаравын гудамж (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s43l5IHcMvVh1W0Ey2Cq5eg!2m2!1d47.88625!2d106.90375!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.88625,106.90375,3a,75y,90t/data=!3m4!1e1!3m2!1s43l5IHcMvVh1W0Ey2Cq5eg!2e0'
    },
    {//8 カジェ 25 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swYl2AI7AkQD1A_lmzGv9Tw!2m2!1d10.60907!2d-72.98896!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.60907,-72.98896,3a,75y,90t/data=!3m4!1e1!3m2!1swYl2AI7AkQD1A_lmzGv9Tw!2e0'
    },
    {//3013 プレシデンテ・ロペス・ポルティージョ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swVIoouGwwEYjdz6W5Z2uWw!2m2!1d27.11942!2d-104.89995!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.11942,-104.89995,3a,75y,90t/data=!3m4!1e1!3m2!1swVIoouGwwEYjdz6W5Z2uWw!2e0'
    },
    {//トラナラパ＝サアグン自動車道 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCpopwJqT4jE6_b3nwBR3Bg!2m2!1d19.78052!2d-98.58556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.78052,-98.58556,3a,75y,90t/data=!3m4!1e1!3m2!1sCpopwJqT4jE6_b3nwBR3Bg!2e0'
    },
    {//Bằng Luân, フート (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sja3Z7YUIjHzsuL9EhfG__g!2m2!1d21.61698!2d105.09341!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.61698,105.09341,3a,75y,90t/data=!3m4!1e1!3m2!1sja3Z7YUIjHzsuL9EhfG__g!2e0'
    },
    {//PR-239 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8YAPQWQG5Ccl_E-1PiUPqw!2m2!1d-24.51909!2d-51.50708!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.51909,-51.50708,3a,75y,90t/data=!3m4!1e1!3m2!1s8YAPQWQG5Ccl_E-1PiUPqw!2e0'
    },
    {//401 リバ・ハイツ (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slBSsRrovYfR2wLizv3KvUQ!2m2!1d51.05461!2d-115.32563!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.05461,-115.32563,3a,75y,90t/data=!3m4!1e1!3m2!1slBSsRrovYfR2wLizv3KvUQ!2e0'
    },
    {//1248 WA-308 NE (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sumjqp-YHhLZHw5sjfpZ40g!2m2!1d47.70381!2d-122.66639!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.70381,-122.66639,3a,75y,90t/data=!3m4!1e1!3m2!1sumjqp-YHhLZHw5sjfpZ40g!2e0'
    },
    {//373 340th ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn7RD-ThLvIchHpUZy3XbEg!2m2!1d38.56622!2d-97.32059!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.56622,-97.32059,3a,75y,90t/data=!3m4!1e1!3m2!1sn7RD-ThLvIchHpUZy3XbEg!2e0'
    },
    {//北西州 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4yR614YYjhoN5VT1VvKp1A!2m2!1d-25.69483!2d27.44308!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.69483,27.44308,3a,75y,90t/data=!3m4!1e1!3m2!1s4yR614YYjhoN5VT1VvKp1A!2e0'
    },
    {//Pig Valley Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgOhttkZ_ymOcYCqaiqf-yA!2m2!1d-41.45398!2d173.06462!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-41.45398,173.06462,3a,75y,90t/data=!3m4!1e1!3m2!1sgOhttkZ_ymOcYCqaiqf-yA!2e0'
    },
    {//Jl. Raja Yohanes Ngongo Bani (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s35EADlNwawZ1RZ6ebW-OmA!2m2!1d-9.44576!2d119.23144!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.44576,119.23144,3a,75y,90t/data=!3m4!1e1!3m2!1s35EADlNwawZ1RZ6ebW-OmA!2e0'
    },
    {//515 リバ・パラシオ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9p2BfUhoSoPmWFkkh-wnrw!2m2!1d19.40985!2d-101.64216!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.40985,-101.64216,3a,75y,90t/data=!3m4!1e1!3m2!1s9p2BfUhoSoPmWFkkh-wnrw!2e0'
    },
    {//209 イースト・メイン・アベニュー (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAF1g2NcJKF9G8645z7KORw!2m2!1d35.26377!2d-81.17978!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.26377,-81.17978,3a,75y,90t/data=!3m4!1e1!3m2!1sAF1g2NcJKF9G8645z7KORw!2e0'
    },
    {//8115 Co Rd 144 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shOQ9dWpgQKFdNGLDEDH2VA!2m2!1d38.53655!2d-106.02347!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.53655,-106.02347,3a,75y,90t/data=!3m4!1e1!3m2!1shOQ9dWpgQKFdNGLDEDH2VA!2e0'
    },
    {//Co Rd 10 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srmbd4VakVwh4TI9wP8-qXg!2m2!1d34.61138!2d-101.83047!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.61138,-101.83047,3a,75y,90t/data=!3m4!1e1!3m2!1srmbd4VakVwh4TI9wP8-qXg!2e0'
    },
    {//サウス 3rd ウェスト・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sep_Polz42sDYXn_diHUatw!2m2!1d43.10919!2d-115.67822!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.10919,-115.67822,3a,75y,90t/data=!3m4!1e1!3m2!1sep_Polz42sDYXn_diHUatw!2e0'
    },
    {//105 ロペス・アギーレ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soThD769W6nxfHdss_obC9w!2m2!1d21.60341!2d-102.25671!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.60341,-102.25671,3a,75y,90t/data=!3m4!1e1!3m2!1soThD769W6nxfHdss_obC9w!2e0'
    },
    {//10 クアンセット・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLwwAhCho2lpAB6dwL64R-g!2m2!1d41.969!2d-70.07037!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.969,-70.07037,3a,75y,90t/data=!3m4!1e1!3m2!1sLwwAhCho2lpAB6dwL64R-g!2e0'
    },
    {//リベイラ道路 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMi24K-cqEnw5AWXISqT9rQ!2m2!1d-24.84306!2d-49.05559!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.84306,-49.05559,3a,75y,90t/data=!3m4!1e1!3m2!1sMi24K-cqEnw5AWXISqT9rQ!2e0'
    },
    {//香取市, 千葉県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgk4n202Qxi70EVteuNfqPg!2m2!1d35.8919!2d140.50286!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.8919,140.50286,3a,75y,90t/data=!3m4!1e1!3m2!1sgk4n202Qxi70EVteuNfqPg!2e0'
    },
    {//パラナ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snZiTfINF2KXCiGPD9taPug!2m2!1d-23.32389!2d-51.70295!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.32389,-51.70295,3a,75y,90t/data=!3m4!1e1!3m2!1snZiTfINF2KXCiGPD9taPug!2e0'
    },
    {//LMG-815 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svV2B6mSu8AEQFJxFYRXj1g!2m2!1d-22.22722!2d-44.25302!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.22722,-44.25302,3a,75y,90t/data=!3m4!1e1!3m2!1svV2B6mSu8AEQFJxFYRXj1g!2e0'
    },
    {//35 イダルゴ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYyB6cOFB3ktzwYbNLn7v4g!2m2!1d22.94646!2d-102.57102!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.94646,-102.57102,3a,75y,90t/data=!3m4!1e1!3m2!1sYyB6cOFB3ktzwYbNLn7v4g!2e0'
    },
    {//タロック・ベイベイ・ロード (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soRrF4UkOQeBoUSPUAAxWdA!2m2!1d10.58797!2d122.90637!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.58797,122.90637,3a,75y,90t/data=!3m4!1e1!3m2!1soRrF4UkOQeBoUSPUAAxWdA!2e0'
    },
    {//594 カジェ 6 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suVFpgUMu6Ec6A9dLrVVxzA!2m2!1d4.24002!2d-75.23978!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.24002,-75.23978,3a,75y,90t/data=!3m4!1e1!3m2!1suVFpgUMu6Ec6A9dLrVVxzA!2e0'
    },
    {//284 セントラル・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snNHwo8HrS-nydatcZVZ2HQ!2m2!1d41.53589!2d-73.11479!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.53589,-73.11479,3a,75y,90t/data=!3m4!1e1!3m2!1snNHwo8HrS-nydatcZVZ2HQ!2e0'
    },
    {//19 イダルゴ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJM13-XFwItGk5-8U0g7VOQ!2m2!1d20.47068!2d-97.71918!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.47068,-97.71918,3a,75y,90t/data=!3m4!1e1!3m2!1sJM13-XFwItGk5-8U0g7VOQ!2e0'
    },
    {//3566 Motsekuoa St (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0wp1Zc-n0uh21DV-8SaZHA!2m2!1d-28.51508!2d28.82186!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.51508,28.82186,3a,75y,90t/data=!3m4!1e1!3m2!1s0wp1Zc-n0uh21DV-8SaZHA!2e0'
    },
    {//Outapi, オムサティ (ナミビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLO-MbU23qdeieYJh00wvCQ!2m2!1d-17.50255!2d14.99402!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.50255,14.99402,3a,75y,90t/data=!3m4!1e1!3m2!1sLO-MbU23qdeieYJh00wvCQ!2e0'
    },
    {//シラウリ, ビハール (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svZ1vEiimcISbIr3z0MPYFg!2m2!1d26.60503!2d85.50925!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.60503,85.50925,3a,75y,90t/data=!3m4!1e1!3m2!1svZ1vEiimcISbIr3z0MPYFg!2e0'
    },
    {//101 フレイザー・ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sN7cSVHM-8SSSKvzMU7deIg!2m2!1d44.24637!2d-76.49257!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.24637,-76.49257,3a,75y,90t/data=!3m4!1e1!3m2!1sN7cSVHM-8SSSKvzMU7deIg!2e0'
    },
    {//399 ア・アルト・ララン自動車道 (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSDLyzMLZ9THC0wi9KjBzqw!2m2!1d-13.41024!2d-76.12916!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.41024,-76.12916,3a,75y,90t/data=!3m4!1e1!3m2!1sSDLyzMLZ9THC0wi9KjBzqw!2e0'
    },
    {//Jl. Labuhan Kayangan Newmont (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9IykEVqGD6zg_kUcC5Yygg!2m2!1d-8.48655!2d116.67197!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.48655,116.67197,3a,75y,90t/data=!3m4!1e1!3m2!1s9IykEVqGD6zg_kUcC5Yygg!2e0'
    },
    {//PR-493 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stzh3D3hYi2K1w2of2TX6JQ!2m2!1d-25.9027!2d-52.88415!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.9027,-52.88415,3a,75y,90t/data=!3m4!1e1!3m2!1stzh3D3hYi2K1w2of2TX6JQ!2e0'
    },
    {//446 R. das Américas (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUVcWy4X5ZTfnK0MWnkvWpg!2m2!1d-29.79246!2d-55.81012!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.79246,-55.81012,3a,75y,90t/data=!3m4!1e1!3m2!1sUVcWy4X5ZTfnK0MWnkvWpg!2e0'
    },
    {//ダヴァオ・デル・サー・プロビンシャル・ハイウェイ (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3hSoddw97dUY-9jJasCmkw!2m2!1d6.53953!2d125.48627!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.53953,125.48627,3a,75y,90t/data=!3m4!1e1!3m2!1s3hSoddw97dUY-9jJasCmkw!2e0'
    },
    {//194 R. Dionísia Campos Gonçalves (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_eKnTyBZSg4coG6FH1rXUw!2m2!1d-21.19474!2d-48.16346!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.19474,-48.16346,3a,75y,90t/data=!3m4!1e1!3m2!1s_eKnTyBZSg4coG6FH1rXUw!2e0'
    },
    {//150 スプール・ランチ・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqUpGp7a-iPPSloIDz5Psrg!2m2!1d35.49904!2d-105.93387!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.49904,-105.93387,3a,75y,90t/data=!3m4!1e1!3m2!1sqUpGp7a-iPPSloIDz5Psrg!2e0'
    },
    {//1287 イースト・アシュリー・ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZxtNRvZoueR9OikL3UIO4Q!2m2!1d36.187!2d-94.52937!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.187,-94.52937,3a,75y,90t/data=!3m4!1e1!3m2!1sZxtNRvZoueR9OikL3UIO4Q!2e0'
    },
    {//ニールド・レーン (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTXint5Z4yzYwlVF7DZjZmA!2m2!1d-37.2144!2d142.69824!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.2144,142.69824,3a,75y,90t/data=!3m4!1e1!3m2!1sTXint5Z4yzYwlVF7DZjZmA!2e0'
    },
    {//191 スミス・ストリート (カナダ大西洋側)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ss9OHgDBtN8DGD5Sq2AlFEA!2m2!1d45.73848!2d-63.87322!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.73848,-63.87322,3a,75y,90t/data=!3m4!1e1!3m2!1ss9OHgDBtN8DGD5Sq2AlFEA!2e0'
    },
    {//51 Jl. Jend. Sudirman (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skznJ-ItGIEAwanCBNsp98A!2m2!1d-0.62526!2d100.12244!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.62526,100.12244,3a,75y,90t/data=!3m4!1e1!3m2!1skznJ-ItGIEAwanCBNsp98A!2e0'
    },
    {//603 18th アベニュー・ノース (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL-vfP0PqdmdJt9LONuSdPg!2m2!1d33.70099!2d-78.87609!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.70099,-78.87609,3a,75y,90t/data=!3m4!1e1!3m2!1sL-vfP0PqdmdJt9LONuSdPg!2e0'
    },
    {//ブエサコ - ビリャモレノ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si-EKZVOTBqSVRdDZtF4dIw!2m2!1d1.36209!2d-77.16702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.36209,-77.16702,3a,75y,90t/data=!3m4!1e1!3m2!1si-EKZVOTBqSVRdDZtF4dIw!2e0'
    },
    {//サービス・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjE7ZyY67sFXw5_hlGVNkBw!2m2!1d15.97494!2d76.10736!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.97494,76.10736,3a,75y,90t/data=!3m4!1e1!3m2!1sjE7ZyY67sFXw5_hlGVNkBw!2e0'
    },
    {//6 フロスト・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg6PHIKtTHox_veKhCZcRKg!2m2!1d40.04306!2d-77.17921!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.04306,-77.17921,3a,75y,90t/data=!3m4!1e1!3m2!1sg6PHIKtTHox_veKhCZcRKg!2e0'
    },
    {//パラナ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sM1s8qieVNOJwpTymvHgOwg!2m2!1d-23.46868!2d-52.63129!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.46868,-52.63129,3a,75y,90t/data=!3m4!1e1!3m2!1sM1s8qieVNOJwpTymvHgOwg!2e0'
    },
    {//625 ディエゴ・シラン・ストリート (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-Aau0stHP4MMnk9BP_y_hw!2m2!1d15.92328!2d120.42346!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.92328,120.42346,3a,75y,90t/data=!3m4!1e1!3m2!1s-Aau0stHP4MMnk9BP_y_hw!2e0'
    },
    {//1995 ペドロ・デ・オーニャ (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIUuQ-oxUcUWcsW6RzOexbA!2m2!1d-18.47643!2d-70.30057!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.47643,-70.30057,3a,75y,90t/data=!3m4!1e1!3m2!1sIUuQ-oxUcUWcsW6RzOexbA!2e0'
    },
    {//Jl. Raya Dawar (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slKFQPBrbxnuv6OeOolab8g!2m2!1d1.06295!2d109.77273!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.06295,109.77273,3a,75y,90t/data=!3m4!1e1!3m2!1slKFQPBrbxnuv6OeOolab8g!2e0'
    },
    {//2360 ブライデン・ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfWAoprXHb-fjMHD_2GQrTw!2m2!1d39.95943!2d-82.93622!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.95943,-82.93622,3a,75y,90t/data=!3m4!1e1!3m2!1sfWAoprXHb-fjMHD_2GQrTw!2e0'
    },
    {//タコ・ポソ, チャコ州 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDDm-qaEFthixKGdx5jJZQw!2m2!1d-25.62195!2d-63.26657!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.62195,-63.26657,3a,75y,90t/data=!3m4!1e1!3m2!1sDDm-qaEFthixKGdx5jJZQw!2e0'
    },
    {//214 ラン・デュピュイ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKXVVi1JzMVT5Ya4C6jSITQ!2m2!1d45.08061!2d-73.01694!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.08061,-73.01694,3a,75y,90t/data=!3m4!1e1!3m2!1sKXVVi1JzMVT5Ya4C6jSITQ!2e0'
    },
    {//11 サン・フランシスコ・デ・アシス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sD34IpTma9WPFmz6mPsiVUA!2m2!1d-30.59647!2d-71.20008!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.59647,-71.20008,3a,75y,90t/data=!3m4!1e1!3m2!1sD34IpTma9WPFmz6mPsiVUA!2e0'
    },
    {//33 ゴルフ・アベニュー (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s49YO1nVQxe8MVq4-pg5AtQ!2m2!1d-35.3425!2d150.47381!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-35.3425,150.47381,3a,75y,90t/data=!3m4!1e1!3m2!1s49YO1nVQxe8MVq4-pg5AtQ!2e0'
    },
    {//RN89 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssnNjCh8XRcWaTfaSSmH3Ew!2m2!1d-27.94172!2d-63.42021!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.94172,-63.42021,3a,75y,90t/data=!3m4!1e1!3m2!1ssnNjCh8XRcWaTfaSSmH3Ew!2e0'
    },
    {//シェナンドア・レーン・ノースイースト (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqpMc-WTX8kbiBv-WrSj2hw!2m2!1d45.15826!2d-122.83908!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.15826,-122.83908,3a,75y,90t/data=!3m4!1e1!3m2!1sqpMc-WTX8kbiBv-WrSj2hw!2e0'
    },
    {//ルタ 4-アンドレス・アルティガス (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJ0pBmI51YX_2G5aRtsd-Qw!2m2!1d-30.43913!2d-56.50483!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.43913,-56.50483,3a,75y,90t/data=!3m4!1e1!3m2!1sJ0pBmI51YX_2G5aRtsd-Qw!2e0'
    },
    {//307 サウス・ブロード・ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOLqYyJkitKYZOQXdmb06AQ!2m2!1d44.16417!2d-94.0022!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.16417,-94.0022,3a,75y,90t/data=!3m4!1e1!3m2!1sOLqYyJkitKYZOQXdmb06AQ!2e0'
    },
    {//テミルタウ, カラガンダ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNZ7rG0w4bWqIcvq6nEH6XQ!2m2!1d50.04308!2d72.9366!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.04308,72.9366,3a,75y,90t/data=!3m4!1e1!3m2!1sNZ7rG0w4bWqIcvq6nEH6XQ!2e0'
    },
    {//10820 Co Rd 3 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skvcs3XtWaKttAg34r0eAhA!2m2!1d28.16305!2d-80.61587!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.16305,-80.61587,3a,75y,90t/data=!3m4!1e1!3m2!1skvcs3XtWaKttAg34r0eAhA!2e0'
    },
    {//ĐT756 (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sH2fDyOS5elVCiPzMVSBOQg!2m2!1d11.5738!2d106.74806!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.5738,106.74806,3a,75y,90t/data=!3m4!1e1!3m2!1sH2fDyOS5elVCiPzMVSBOQg!2e0'
    },
    {//RP25 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sD_1w5xCG5-aiIM_PP1PsaA!2m2!1d-28.37048!2d-66.17126!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.37048,-66.17126,3a,75y,90t/data=!3m4!1e1!3m2!1sD_1w5xCG5-aiIM_PP1PsaA!2e0'
    },
    {//サン・アグスティン＝ピタリト (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sexoesQJ42zUSbbIDT-pGDA!2m2!1d1.87773!2d-76.24812!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.87773,-76.24812,3a,75y,90t/data=!3m4!1e1!3m2!1sexoesQJ42zUSbbIDT-pGDA!2e0'
    },
    {//848 R. Expedicionário Rafael Bussarelo (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKaupk5Y_VPFMlEgBAyDjdQ!2m2!1d-27.12324!2d-49.99406!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.12324,-49.99406,3a,75y,90t/data=!3m4!1e1!3m2!1sKaupk5Y_VPFMlEgBAyDjdQ!2e0'
    },
    {//1371 Township Rd 12 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFgq5XPL5gitz-_fD-aFTYQ!2m2!1d43.36282!2d-80.69158!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.36282,-80.69158,3a,75y,90t/data=!3m4!1e1!3m2!1sFgq5XPL5gitz-_fD-aFTYQ!2e0'
    },
    {//1213 ノース・エルム・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGOY9x2Qlcu2L6IXy5uADmg!2m2!1d44.09751!2d-93.22354!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.09751,-93.22354,3a,75y,90t/data=!3m4!1e1!3m2!1sGOY9x2Qlcu2L6IXy5uADmg!2e0'
    },
    {//ตำบล นาดี, プラーチーンブリー (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbzTNfBPs-3RmC3hcXTsrQA!2m2!1d14.11735!2d101.78035!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.11735,101.78035,3a,75y,90t/data=!3m4!1e1!3m2!1sbzTNfBPs-3RmC3hcXTsrQA!2e0'
    },
    {//918 4th ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk259251a_aZ9qGuMN0hvMQ!2m2!1d42.61596!2d-113.67991!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.61596,-113.67991,3a,75y,90t/data=!3m4!1e1!3m2!1sk259251a_aZ9qGuMN0hvMQ!2e0'
    },
    {//エフィヘニオ・サパタ通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw3d1Sn9vm3L8VmuluraOfA!2m2!1d20.10277!2d-99.14552!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.10277,-99.14552,3a,75y,90t/data=!3m4!1e1!3m2!1sw3d1Sn9vm3L8VmuluraOfA!2e0'
    },
    {//バイーア州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxqp7RK8bzpwXsRxihnuTjQ!2m2!1d-11.78275!2d-39.11107!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.78275,-39.11107,3a,75y,90t/data=!3m4!1e1!3m2!1sxqp7RK8bzpwXsRxihnuTjQ!2e0'
    },
    {//レファガット・ドーリ・バスティン・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0U2wr5FVv5KYs5U9It3Qlg!2m2!1d23.75715!2d85.98407!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.75715,85.98407,3a,75y,90t/data=!3m4!1e1!3m2!1s0U2wr5FVv5KYs5U9It3Qlg!2e0'
    },
    {//332 ゴイアス通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRjh3oZK8kPmLJXRESts10Q!2m2!1d-14.01611!2d-49.15961!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.01611,-49.15961,3a,75y,90t/data=!3m4!1e1!3m2!1sRjh3oZK8kPmLJXRESts10Q!2e0'
    },
    {//Crnl. Gregorio Albarracín Lanchipa, タクナ (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stlCQwk5J9OuAhnglB23ZcQ!2m2!1d-18.02795!2d-70.24581!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.02795,-70.24581,3a,75y,90t/data=!3m4!1e1!3m2!1stlCQwk5J9OuAhnglB23ZcQ!2e0'
    },
    {//1206 イースト 6th ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2pq15kUD96blVmq2ty2XNA!2m2!1d35.62374!2d-95.95639!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.62374,-95.95639,3a,75y,90t/data=!3m4!1e1!3m2!1s2pq15kUD96blVmq2ty2XNA!2e0'
    },
    {//ローリンズ・フォード・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjJnHFUgGZZOAT9_KcIJSrQ!2m2!1d38.78319!2d-77.57867!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.78319,-77.57867,3a,75y,90t/data=!3m4!1e1!3m2!1sjJnHFUgGZZOAT9_KcIJSrQ!2e0'
    },
    {//リカルド・パルマ通り (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sE5oFkA6FBdA2wqAV9fsjcg!2m2!1d-8.46261!2d-76.46373!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.46261,-76.46373,3a,75y,90t/data=!3m4!1e1!3m2!1sE5oFkA6FBdA2wqAV9fsjcg!2e0'
    },
    {//NR57B (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb-IVoXl0xVO-Fdpl82Gerg!2m2!1d13.26058!2d102.76311!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.26058,102.76311,3a,75y,90t/data=!3m4!1e1!3m2!1sb-IVoXl0xVO-Fdpl82Gerg!2e0'
    },
    {//12月6日 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL5CrXZ7BHtB_QZOL7IEh1w!2m2!1d20.79728!2d-102.90164!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.79728,-102.90164,3a,75y,90t/data=!3m4!1e1!3m2!1sL5CrXZ7BHtB_QZOL7IEh1w!2e0'
    },
    {//Châu Đốc, アンザン省 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc2FVasPbocBcXRKeI8lq-w!2m2!1d10.71602!2d105.11573!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.71602,105.11573,3a,75y,90t/data=!3m4!1e1!3m2!1sc2FVasPbocBcXRKeI8lq-w!2e0'
    },
    {//パラナ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMaqmnIRYpgg2Fa1lwZPY3Q!2m2!1d-24.4941!2d-49.85621!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.4941,-49.85621,3a,75y,90t/data=!3m4!1e1!3m2!1sMaqmnIRYpgg2Fa1lwZPY3Q!2e0'
    },
    {//Jl. Pelabuh Baru (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swQ_Xa5A7NPFL4CNoO4NHjw!2m2!1d-1.47655!2d102.12213!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.47655,102.12213,3a,75y,90t/data=!3m4!1e1!3m2!1swQ_Xa5A7NPFL4CNoO4NHjw!2e0'
    },
    {//Bái Đính - Kim Tân (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGT-BUgbj6Q_BmKe_CxtQOw!2m2!1d20.15257!2d105.73216!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.15257,105.73216,3a,75y,90t/data=!3m4!1e1!3m2!1sGT-BUgbj6Q_BmKe_CxtQOw!2e0'
    },
    {//1872 センタービル・ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snSCEPfe_ZGSioSaAevF9Qg!2m2!1d38.92276!2d-82.46261!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.92276,-82.46261,3a,75y,90t/data=!3m4!1e1!3m2!1snSCEPfe_ZGSioSaAevF9Qg!2e0'
    },
    {//338 R. Trinta e Quatro (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPWSNDXPrZnNPnyLgfchygg!2m2!1d-14.6976!2d-47.52299!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.6976,-47.52299,3a,75y,90t/data=!3m4!1e1!3m2!1sPWSNDXPrZnNPnyLgfchygg!2e0'
    },
    {//83000 Jalan Muar (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sC_oe44Y1DHRZbp2px9QxNg!2m2!1d1.85525!2d102.83486!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.85525,102.83486,3a,75y,90t/data=!3m4!1e1!3m2!1sC_oe44Y1DHRZbp2px9QxNg!2e0'
    },
    {//3329 ゴールドフィンチ・テラス (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw287GB9fALseQTQmOwQSQg!2m2!1d26.88234!2d-82.30365!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.88234,-82.30365,3a,75y,90t/data=!3m4!1e1!3m2!1sw287GB9fALseQTQmOwQSQg!2e0'
    },
    {//R56 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5jcSrMh7FxLhz8jZPCyT6A!2m2!1d-31.46344!2d27.33562!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.46344,27.33562,3a,75y,90t/data=!3m4!1e1!3m2!1s5jcSrMh7FxLhz8jZPCyT6A!2e0'
    },
    {//7728 ディクソン・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjSxLmgGxVcaB-YwpGdPrVg!2m2!1d29.69901!2d-95.89734!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.69901,-95.89734,3a,75y,90t/data=!3m4!1e1!3m2!1sjSxLmgGxVcaB-YwpGdPrVg!2e0'
    },
    {//A ベイ 3A (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9gVmC3noq1GnQyZ73_MtLg!2m2!1d9.83162!2d-83.87246!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.83162,-83.87246,3a,75y,90t/data=!3m4!1e1!3m2!1s9gVmC3noq1GnQyZ73_MtLg!2e0'
    },
    {//Tutume, セントラル (ボツワナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDGvaD6w2-rMPxgP9ltUoMA!2m2!1d-20.50751!2d27.06353!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.50751,27.06353,3a,75y,90t/data=!3m4!1e1!3m2!1sDGvaD6w2-rMPxgP9ltUoMA!2e0'
    },
    {//道道2号 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX1X-YtKYR-jgGoczd4lFgQ!2m2!1d42.55314!2d141.07638!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.55314,141.07638,3a,75y,90t/data=!3m4!1e1!3m2!1sX1X-YtKYR-jgGoczd4lFgQ!2e0'
    },
    {//450 ウェスト・フィルモア・アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siMgzu7I5J42E36pNCHyzbw!2m2!1d40.99551!2d-91.9687!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.99551,-91.9687,3a,75y,90t/data=!3m4!1e1!3m2!1siMgzu7I5J42E36pNCHyzbw!2e0'
    },
    {//ゴイアス (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saKrBBx8pV5a-B-Ai1vuzbw!2m2!1d-17.71411!2d-50.8376!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.71411,-50.8376,3a,75y,90t/data=!3m4!1e1!3m2!1saKrBBx8pV5a-B-Ai1vuzbw!2e0'
    },
    {//ビナングナン, カラバルソン地方 (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swbj4BBpCU_8yLLhS2uv72w!2m2!1d14.47665!2d121.18821!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.47665,121.18821,3a,75y,90t/data=!3m4!1e1!3m2!1swbj4BBpCU_8yLLhS2uv72w!2e0'
    },
    {//Av. Dito Nogueira (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssRTQnl2z_Di3GWHDIC7_Mg!2m2!1d-14.47798!2d-59.59165!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.47798,-59.59165,3a,75y,90t/data=!3m4!1e1!3m2!1ssRTQnl2z_Di3GWHDIC7_Mg!2e0'
    },
    {//ベサル, ムプマランガ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smpcjd6_kXKzHRGIADA-eaw!2m2!1d-26.48248!2d29.44688!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.48248,29.44688,3a,75y,90t/data=!3m4!1e1!3m2!1smpcjd6_kXKzHRGIADA-eaw!2e0'
    },
    {//マディヤ・アスカーン, マディヤ・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZ6RE2TnkP48M-Jqi_KeKzA!2m2!1d23.7254!2d79.24447!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.7254,79.24447,3a,75y,90t/data=!3m4!1e1!3m2!1sZ6RE2TnkP48M-Jqi_KeKzA!2e0'
    },
    {//Laluan Persekutuan 3 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suBsGeGuJLOzCxBSGKzI21Q!2m2!1d3.01256!2d103.42692!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.01256,103.42692,3a,75y,90t/data=!3m4!1e1!3m2!1suBsGeGuJLOzCxBSGKzI21Q!2e0'
    },
    {//ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_UgOK1ikNsyZ02YGLpMehw!2m2!1d26.39456!2d80.89328!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.39456,80.89328,3a,75y,90t/data=!3m4!1e1!3m2!1s_UgOK1ikNsyZ02YGLpMehw!2e0'
    },
    {//210 ヴェル・アントーニオ・カミロ・ノゲイラ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9SS63Qfa_UvQSSqBfo-VeA!2m2!1d-22.40968!2d-51.52579!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.40968,-51.52579,3a,75y,90t/data=!3m4!1e1!3m2!1s9SS63Qfa_UvQSSqBfo-VeA!2e0'
    },
    {//940 セナドル・サウガード・フィーリョ通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYK4cBh6mMhtBg32lqCS0SA!2m2!1d-27.77082!2d-54.231!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.77082,-54.231,3a,75y,90t/data=!3m4!1e1!3m2!1sYK4cBh6mMhtBg32lqCS0SA!2e0'
    },
    {//Jalan Orkid 6 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAr8VwpbaHF2oBrOKuNbmOg!2m2!1d2.24519!2d103.03657!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@2.24519,103.03657,3a,75y,90t/data=!3m4!1e1!3m2!1sAr8VwpbaHF2oBrOKuNbmOg!2e0'
    },
    {//PY18 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shxD3wP0iAHosQgZr312xjg!2m2!1d-26.30226!2d-55.01567!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.30226,-55.01567,3a,75y,90t/data=!3m4!1e1!3m2!1shxD3wP0iAHosQgZr312xjg!2e0'
    },
    {//ヤングスタウン, オハイオ州 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1silDDzwPqZIclil-sSMf8ug!2m2!1d40.98515!2d-80.67098!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.98515,-80.67098,3a,75y,90t/data=!3m4!1e1!3m2!1silDDzwPqZIclil-sSMf8ug!2e0'
    },
    {//MR4 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfYsd1sN6XB67uomwTugSeg!2m2!1d-26.85294!2d30.95819!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.85294,30.95819,3a,75y,90t/data=!3m4!1e1!3m2!1sfYsd1sN6XB67uomwTugSeg!2e0'
    },
    {//312 QC-198 (カナダ大西洋側)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sATz8Gr3edswVsyx64YvN4g!2m2!1d48.82455!2d-64.50665!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.82455,-64.50665,3a,75y,90t/data=!3m4!1e1!3m2!1sATz8Gr3edswVsyx64YvN4g!2e0'
    },
    {//ルタ・パラグアリ＝ピリベブイ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slCgla-BdqikslVzmf9O52A!2m2!1d-25.57969!2d-57.11148!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.57969,-57.11148,3a,75y,90t/data=!3m4!1e1!3m2!1slCgla-BdqikslVzmf9O52A!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9QNH5TqTiSWssiqggrh66g!2m2!1d-20.38494!2d-42.26861!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.38494,-42.26861,3a,75y,90t/data=!3m4!1e1!3m2!1s9QNH5TqTiSWssiqggrh66g!2e0'
    },
    {//マリア・アラセリ・ビリャグラン (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soGB5RD3aTwIBjl4oRLx8Tw!2m2!1d-50.32163!2d-72.2515!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-50.32163,-72.2515,3a,75y,90t/data=!3m4!1e1!3m2!1soGB5RD3aTwIBjl4oRLx8Tw!2e0'
    },
    {//178 Co Rd 2201 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2PReDgb7at6dTfgdQ9ewjA!2m2!1d34.64712!2d-88.3966!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.64712,-88.3966,3a,75y,90t/data=!3m4!1e1!3m2!1s2PReDgb7at6dTfgdQ9ewjA!2e0'
    },
    {//RP9 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shJBoyHczruSJEmmVBqkEkg!2m2!1d-43.34909!2d-65.5083!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-43.34909,-65.5083,3a,75y,90t/data=!3m4!1e1!3m2!1shJBoyHczruSJEmmVBqkEkg!2e0'
    },
    {//カウンティー・ロード 5 ウェスト (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYyi2B9G2aRQd3FMqQv5oXA!2m2!1d48.34399!2d-101.87493!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.34399,-101.87493,3a,75y,90t/data=!3m4!1e1!3m2!1sYyi2B9G2aRQd3FMqQv5oXA!2e0'
    },
    {//コルカタ, 西ベンガル (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTwGHWItk2mP5sDq0y2MRAg!2m2!1d22.60553!2d88.41239!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.60553,88.41239,3a,75y,90t/data=!3m4!1e1!3m2!1sTwGHWItk2mP5sDq0y2MRAg!2e0'
    },
    {//3604 NB-315 (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sC7dp4ipWvLXiButR9Hdsaw!2m2!1d47.77262!2d-65.75875!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.77262,-65.75875,3a,75y,90t/data=!3m4!1e1!3m2!1sC7dp4ipWvLXiButR9Hdsaw!2e0'
    },
    {//270 レバノン (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVuanPL6l6-d1JEe9nMjzVQ!2m2!1d-37.89131!2d-67.79431!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.89131,-67.79431,3a,75y,90t/data=!3m4!1e1!3m2!1sVuanPL6l6-d1JEe9nMjzVQ!2e0'
    },
    {//1130 プレジデント・ストリート (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP9rnpjNKx9b01nQh7lE0kw!2m2!1d44.07495!2d-123.05572!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.07495,-123.05572,3a,75y,90t/data=!3m4!1e1!3m2!1sP9rnpjNKx9b01nQh7lE0kw!2e0'
    },
    {//RN38 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2-w3exrL2uFczLXf6esIsg!2m2!1d-30.83083!2d-64.9425!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.83083,-64.9425,3a,75y,90t/data=!3m4!1e1!3m2!1s2-w3exrL2uFczLXf6esIsg!2e0'
    },
    {//Estr. Alexandre Cunali (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sctc4jZw_TKAevhygZDp4Jg!2m2!1d-21.41208!2d-47.05813!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.41208,-47.05813,3a,75y,90t/data=!3m4!1e1!3m2!1sctc4jZw_TKAevhygZDp4Jg!2e0'
    },
    {//レジアン・デ・ラゴイーニャス道路 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl-6ek8WiUHc_k17o5QgBdw!2m2!1d-15.27947!2d-39.08275!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.27947,-39.08275,3a,75y,90t/data=!3m4!1e1!3m2!1sl-6ek8WiUHc_k17o5QgBdw!2e0'
    },
    {//7 アルキテクト・カルロス・ラソ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s53iq0S-6R2fDUrFPp_qo4A!2m2!1d19.40224!2d-99.19066!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.40224,-99.19066,3a,75y,90t/data=!3m4!1e1!3m2!1s53iq0S-6R2fDUrFPp_qo4A!2e0'
    },
    {//Rod. Desembargador Federal Leomar Amorim (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjDDhdNTmWgMNxM0cv2QlMA!2m2!1d-3.46896!2d-44.27962!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.46896,-44.27962,3a,75y,90t/data=!3m4!1e1!3m2!1sjDDhdNTmWgMNxM0cv2QlMA!2e0'
    },
    {//1270 Estr. do Assentamento do Incra (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIwQDLOWXsfccJSKl-IsnDA!2m2!1d-22.59333!2d-42.74343!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.59333,-42.74343,3a,75y,90t/data=!3m4!1e1!3m2!1sIwQDLOWXsfccJSKl-IsnDA!2e0'
    },
    {//ตำบล บ้านแปรง, ナコーンラーチャシーマ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svJdmvnImhYc6nQYJk0yXkw!2m2!1d15.34933!2d101.79288!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.34933,101.79288,3a,75y,90t/data=!3m4!1e1!3m2!1svJdmvnImhYc6nQYJk0yXkw!2e0'
    },
    {//ME-16 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLF6_JXqnb2W5rU3WxZiU0w!2m2!1d44.91455!2d-70.93675!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.91455,-70.93675,3a,75y,90t/data=!3m4!1e1!3m2!1sLF6_JXqnb2W5rU3WxZiU0w!2e0'
    },
    {//RN35 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVKInU-ixpzGEli5utEpOcA!2m2!1d-34.83952!2d-64.35336!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.83952,-64.35336,3a,75y,90t/data=!3m4!1e1!3m2!1sVKInU-ixpzGEli5utEpOcA!2e0'
    },
    {//イースト・ヴァンダービルト・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sECDCZT4y0_ZJ2Yrq-uaa2g!2m2!1d36.00794!2d-84.26728!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.00794,-84.26728,3a,75y,90t/data=!3m4!1e1!3m2!1sECDCZT4y0_ZJ2Yrq-uaa2g!2e0'
    },
    {//ラヤーン (カタール)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sna5PcmbctTAH9gEpldzDLQ!2m2!1d25.33278!2d51.32546!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.33278,51.32546,3a,75y,90t/data=!3m4!1e1!3m2!1sna5PcmbctTAH9gEpldzDLQ!2e0'
    },
    {//マリスカル・カスティージャ (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl1Lkz2WbeC45IDd_ywV3zQ!2m2!1d-12.22804!2d-75.15927!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.22804,-75.15927,3a,75y,90t/data=!3m4!1e1!3m2!1sl1Lkz2WbeC45IDd_ywV3zQ!2e0'
    },
    {//41 40 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8Y-4Jmx-UJTfF2Yu7QJ9nA!2m2!1d4.37286!2d-74.3868!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.37286,-74.3868,3a,75y,90t/data=!3m4!1e1!3m2!1s8Y-4Jmx-UJTfF2Yu7QJ9nA!2e0'
    },
    {//パサカオ, ビコール (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjNPi8PQNTAHPeqcl31rsmg!2m2!1d13.50407!2d123.03374!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.50407,123.03374,3a,75y,90t/data=!3m4!1e1!3m2!1sjNPi8PQNTAHPeqcl31rsmg!2e0'
    },
    {//モンテ・カルメロ道路 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPyYEbAltmqnvjhjxr4oRqw!2m2!1d-10.84772!2d-55.4522!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.84772,-55.4522,3a,75y,90t/data=!3m4!1e1!3m2!1sPyYEbAltmqnvjhjxr4oRqw!2e0'
    },
    {//707 オレンジ・グローブ・ブールバード (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGIS3iqjBaPPVP2W6kXq3Iw!2m2!1d34.1572!2d-118.13556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.1572,-118.13556,3a,75y,90t/data=!3m4!1e1!3m2!1sGIS3iqjBaPPVP2W6kXq3Iw!2e0'
    },
    {//ウムタタ, 東ケープ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saWwlZEaJmvKsw2le4chq-g!2m2!1d-31.61355!2d28.77568!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.61355,28.77568,3a,75y,90t/data=!3m4!1e1!3m2!1saWwlZEaJmvKsw2le4chq-g!2e0'
    },
    {//3003 RJ-135 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syD76VwQAbpFecGvvTlWU0w!2m2!1d-22.22722!2d-43.43556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.22722,-43.43556,3a,75y,90t/data=!3m4!1e1!3m2!1syD76VwQAbpFecGvvTlWU0w!2e0'
    },
    {//カバンカラン - バンタヤン・ロード (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbLaZokq2tTcmqAZpD_6MGA!2m2!1d9.7445!2d122.7632!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.7445,122.7632,3a,75y,90t/data=!3m4!1e1!3m2!1sbLaZokq2tTcmqAZpD_6MGA!2e0'
    },
    {//24066 アスペン・ドライブ・ノースウェスト (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2IRFl3bcsGFdTnzqIAbFlQ!2m2!1d51.1653!2d-114.24073!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.1653,-114.24073,3a,75y,90t/data=!3m4!1e1!3m2!1s2IRFl3bcsGFdTnzqIAbFlQ!2e0'
    },
    {//43098 プリマス・ロード (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCl8tqrdd6-CAXi_X49LT5Q!2m2!1d34.23728!2d-116.86217!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.23728,-116.86217,3a,75y,90t/data=!3m4!1e1!3m2!1sCl8tqrdd6-CAXi_X49LT5Q!2e0'
    },
    {//80 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-XeIADBeNQH1jBeItkrXYA!2m2!1d9.71286!2d-75.10383!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.71286,-75.10383,3a,75y,90t/data=!3m4!1e1!3m2!1s-XeIADBeNQH1jBeItkrXYA!2e0'
    },
    {//59 ジョアン・フランシスコ・リベイロ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sU0vJ75gZIbV_TZhKiGIMng!2m2!1d-24.09842!2d-48.36448!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.09842,-48.36448,3a,75y,90t/data=!3m4!1e1!3m2!1sU0vJ75gZIbV_TZhKiGIMng!2e0'
    },
    {//ตำบล ท่าใหญ่, チャイヤプーン (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szPkxuBqC5JaiM4_mIiG0Cg!2m2!1d16.06553!2d101.65469!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.06553,101.65469,3a,75y,90t/data=!3m4!1e1!3m2!1szPkxuBqC5JaiM4_mIiG0Cg!2e0'
    },
    {//ロレト通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIPf_HeS0O8giBLQQKSTg1g!2m2!1d-22.34476!2d-47.33399!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.34476,-47.33399,3a,75y,90t/data=!3m4!1e1!3m2!1sIPf_HeS0O8giBLQQKSTg1g!2e0'
    },
    {//198 ノース・オースティン・ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1ocS6FESvfnFyV5q_MOXIw!2m2!1d32.64928!2d-96.70981!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.64928,-96.70981,3a,75y,90t/data=!3m4!1e1!3m2!1s1ocS6FESvfnFyV5q_MOXIw!2e0'
    },
    {//US-60 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg4kClaxpOrVXwoJLVoUx8g!2m2!1d34.46828!2d-106.31101!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.46828,-106.31101,3a,75y,90t/data=!3m4!1e1!3m2!1sg4kClaxpOrVXwoJLVoUx8g!2e0'
    },
    {//Google マップ (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWlRf6rQsqF4qwU2Fs0ptUQ!2m2!1d5.75204!2d125.22998!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.75204,125.22998,3a,75y,90t/data=!3m4!1e1!3m2!1sWlRf6rQsqF4qwU2Fs0ptUQ!2e0'
    },
    {//SH 2 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sW6chZZ-0hnPz1gG76Uy7sA!2m2!1d21.17217!2d81.72154!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.17217,81.72154,3a,75y,90t/data=!3m4!1e1!3m2!1sW6chZZ-0hnPz1gG76Uy7sA!2e0'
    },
    {//ルタ・ナシオナル・セクンダリア 237 (コスタリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slYYNoDKtaRSw2zHvsi4Qww!2m2!1d8.94451!2d-83.10565!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@8.94451,-83.10565,3a,75y,90t/data=!3m4!1e1!3m2!1slYYNoDKtaRSw2zHvsi4Qww!2e0'
    },
    {//ロンドニア (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szaZeJXEjoHzs2lWZXNYlAw!2m2!1d-9.13727!2d-63.45935!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.13727,-63.45935,3a,75y,90t/data=!3m4!1e1!3m2!1szaZeJXEjoHzs2lWZXNYlAw!2e0'
    },
    {//2858 バック・ベール・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s46Gp8IHJGjxlGCModhAv8w!2m2!1d40.69437!2d-78.23167!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.69437,-78.23167,3a,75y,90t/data=!3m4!1e1!3m2!1s46Gp8IHJGjxlGCModhAv8w!2e0'
    },
    {//テンホ, クンディナマルカ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXHX9Tct20vO1M68xpQzBVw!2m2!1d4.88496!2d-74.15111!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.88496,-74.15111,3a,75y,90t/data=!3m4!1e1!3m2!1sXHX9Tct20vO1M68xpQzBVw!2e0'
    },
    {//Hoàn Lão, クアンチ (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqCkok0ud9_6RS0r-fJKRVw!2m2!1d17.5636!2d106.52781!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.5636,106.52781,3a,75y,90t/data=!3m4!1e1!3m2!1sqCkok0ud9_6RS0r-fJKRVw!2e0'
    },
    {//ハットン・ディコヤ, 中部州 (スリランカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0Ih6sAqFZpsixn431fY3TA!2m2!1d6.88663!2d80.59716!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.88663,80.59716,3a,75y,90t/data=!3m4!1e1!3m2!1s0Ih6sAqFZpsixn431fY3TA!2e0'
    },
    {//284 シーブリーズ・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-JPe39ZhVQMt0-5e9G5uzw!2m2!1d39.35587!2d-75.30004!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.35587,-75.30004,3a,75y,90t/data=!3m4!1e1!3m2!1s-JPe39ZhVQMt0-5e9G5uzw!2e0'
    },
    {//MT-241 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdEsBJWV8jsBcwie6VQzMfA!2m2!1d-15.03176!2d-55.1233!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.03176,-55.1233,3a,75y,90t/data=!3m4!1e1!3m2!1sdEsBJWV8jsBcwie6VQzMfA!2e0'
    },
    {//MA-034 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5T4YRNWFelOu6IFaoSSUOA!2m2!1d-4.63041!2d-43.11233!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.63041,-43.11233,3a,75y,90t/data=!3m4!1e1!3m2!1s5T4YRNWFelOu6IFaoSSUOA!2e0'
    },
    {//205 ドミンゴス・ブリト通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK9XdNBJlCBgBIDA10XZkuA!2m2!1d-13.41074!2d-46.30042!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.41074,-46.30042,3a,75y,90t/data=!3m4!1e1!3m2!1sK9XdNBJlCBgBIDA10XZkuA!2e0'
    },
    {//1300 N-505 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6aCHmQTu9Zx8Jqrd6r1Ohw!2m2!1d-36.63364!2d-71.81411!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-36.63364,-71.81411,3a,75y,90t/data=!3m4!1e1!3m2!1s6aCHmQTu9Zx8Jqrd6r1Ohw!2e0'
    },
    {//Int. Moro (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHIoHtMoBCR-BiCWsHjObyA!2m2!1d-34.15607!2d-58.96628!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.15607,-58.96628,3a,75y,90t/data=!3m4!1e1!3m2!1sHIoHtMoBCR-BiCWsHjObyA!2e0'
    },
    {//Google マップ (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx8u38Fjgwv6lq9b2GZVwZw!2m2!1d47.47272!2d101.47668!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.47272,101.47668,3a,75y,90t/data=!3m4!1e1!3m2!1sx8u38Fjgwv6lq9b2GZVwZw!2e0'
    },
    {//Tv. Lenhardt (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHuhBPsX0GOk0Gt7nLEll2g!2m2!1d-29.61503!2d-53.76254!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.61503,-53.76254,3a,75y,90t/data=!3m4!1e1!3m2!1sHuhBPsX0GOk0Gt7nLEll2g!2e0'
    },
    {//Google マップ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soQpei6xVSfEcO_K3cVs8DA!2m2!1d-33.80404!2d18.8861!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.80404,18.8861,3a,75y,90t/data=!3m4!1e1!3m2!1soQpei6xVSfEcO_K3cVs8DA!2e0'
    },
    {//モホトロング (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0SNZsWmCcNoYQ0aWOgLq_A!2m2!1d-29.28647!2d29.06888!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.28647,29.06888,3a,75y,90t/data=!3m4!1e1!3m2!1s0SNZsWmCcNoYQ0aWOgLq_A!2e0'
    },
    {//جادة وادي تصيئليم (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssl9oQHqybn1HCfdc_XFbVQ!2m2!1d31.71451!2d34.97575!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.71451,34.97575,3a,75y,90t/data=!3m4!1e1!3m2!1ssl9oQHqybn1HCfdc_XFbVQ!2e0'
    },
    {//カタマルカ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saRoMbBEm3CqMOQBn1rlKDw!2m2!1d-28.37788!2d-65.69644!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.37788,-65.69644,3a,75y,90t/data=!3m4!1e1!3m2!1saRoMbBEm3CqMOQBn1rlKDw!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svCo5EyCASENiNd9DyrV5eQ!2m2!1d-15.71287!2d-44.25696!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.71287,-44.25696,3a,75y,90t/data=!3m4!1e1!3m2!1svCo5EyCASENiNd9DyrV5eQ!2e0'
    },
    {//3444 ランドン・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1AzDUz2I9Rm-ENWdLgqjhA!2m2!1d37.42723!2d-79.18817!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.42723,-79.18817,3a,75y,90t/data=!3m4!1e1!3m2!1s1AzDUz2I9Rm-ENWdLgqjhA!2e0'
    },
    {//マジョス, グジャラート (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMtqXCV_oQDAz02ZDTXI7Qg!2m2!1d22.61377!2d70.3519!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.61377,70.3519,3a,75y,90t/data=!3m4!1e1!3m2!1sMtqXCV_oQDAz02ZDTXI7Qg!2e0'
    },
    {//中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSxz5YEb2IlJBCRM-2DqUlA!2m2!1d-7.78031!2d110.87153!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.78031,110.87153,3a,75y,90t/data=!3m4!1e1!3m2!1sSxz5YEb2IlJBCRM-2DqUlA!2e0'
    },
    {//クワレ, クウェール・カウンティー (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sADx-AzkrQf4rKkn7IpNgyQ!2m2!1d-4.17582!2d39.44564!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.17582,39.44564,3a,75y,90t/data=!3m4!1e1!3m2!1sADx-AzkrQf4rKkn7IpNgyQ!2e0'
    },
    {//1556 ワシントン・ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sH-MPpORAk82mdSsqiVkFgQ!2m2!1d41.4352!2d-91.02799!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.4352,-91.02799,3a,75y,90t/data=!3m4!1e1!3m2!1sH-MPpORAk82mdSsqiVkFgQ!2e0'
    },
    {//リオ・グランデ・ド・ノルテ州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAekG6I3LJB_JGdrZts1fbw!2m2!1d-6.34285!2d-36.07198!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.34285,-36.07198,3a,75y,90t/data=!3m4!1e1!3m2!1sAekG6I3LJB_JGdrZts1fbw!2e0'
    },
    {//ルイス・アウヴェス・アスンサン通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7KTRhBk3gexuBWT9AduP6w!2m2!1d-4.75838!2d-40.92673!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.75838,-40.92673,3a,75y,90t/data=!3m4!1e1!3m2!1s7KTRhBk3gexuBWT9AduP6w!2e0'
    },
    {//ゴイアス (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0n2tkJe84G5VKyfK2sdThw!2m2!1d-14.58051!2d-47.32799!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.58051,-47.32799,3a,75y,90t/data=!3m4!1e1!3m2!1s0n2tkJe84G5VKyfK2sdThw!2e0'
    },
    {//V S K バラサイ・メイン・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfeSv3H95Tmt72mJhuZ9VtQ!2m2!1d10.31551!2d78.15047!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.31551,78.15047,3a,75y,90t/data=!3m4!1e1!3m2!1sfeSv3H95Tmt72mJhuZ9VtQ!2e0'
    },
    {//649 ファン・アントニオ・ラバジェハ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sY9KIW9qBz7J_ZhfEGUvu0Q!2m2!1d-31.18909!2d-55.76463!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.18909,-55.76463,3a,75y,90t/data=!3m4!1e1!3m2!1sY9KIW9qBz7J_ZhfEGUvu0Q!2e0'
    },
    {//リブレ・ウニオン, ユカタン (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGep_wacvZXoEcvj8zuixdw!2m2!1d20.70594!2d-88.80841!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.70594,-88.80841,3a,75y,90t/data=!3m4!1e1!3m2!1sGep_wacvZXoEcvj8zuixdw!2e0'
    },
    {//451 イェーラリング＝ピンジェリー・ロード (オーストラリア南西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIez93Jjqv7OcKNFu4yvm_A!2m2!1d-32.59217!2d117.56667!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.59217,117.56667,3a,75y,90t/data=!3m4!1e1!3m2!1sIez93Jjqv7OcKNFu4yvm_A!2e0'
    },
    {//55 ジョアン・ジョゼー・サアド通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGOB1Ue5WEex6LiG6IKBfPw!2m2!1d-20.99854!2d-47.66376!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.99854,-47.66376,3a,75y,90t/data=!3m4!1e1!3m2!1sGOB1Ue5WEex6LiG6IKBfPw!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz2JmvULdvMcAiT_XckSS0w!2m2!1d-19.25127!2d-47.6792!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.25127,-47.6792,3a,75y,90t/data=!3m4!1e1!3m2!1sz2JmvULdvMcAiT_XckSS0w!2e0'
    },
    {//885 TO-141 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spaPgWv-7NN6PaoJvG7deUw!2m2!1d-13.04277!2d-48.40671!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.04277,-48.40671,3a,75y,90t/data=!3m4!1e1!3m2!1spaPgWv-7NN6PaoJvG7deUw!2e0'
    },
    {//中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smk2Glj3VkMbTqcRjyes8ZQ!2m2!1d-7.49873!2d110.24652!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.49873,110.24652,3a,75y,90t/data=!3m4!1e1!3m2!1smk2Glj3VkMbTqcRjyes8ZQ!2e0'
    },
    {//ペケ - ウラミタ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTgtjRnRvh1F018s10hZbMA!2m2!1d7.02823!2d-75.92214!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.02823,-75.92214,3a,75y,90t/data=!3m4!1e1!3m2!1sTgtjRnRvh1F018s10hZbMA!2e0'
    },
    {//Lüderitz (ナミビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sc8Elo8JGeTVj0FHkAeNNvQ!2m2!1d-26.65321!2d15.15607!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.65321,15.15607,3a,75y,90t/data=!3m4!1e1!3m2!1sc8Elo8JGeTVj0FHkAeNNvQ!2e0'
    },
    {//31 クリス・デ・ヴィラーズ・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbq_lqG1riSIgI7r9WSoyQA!2m2!1d-26.54024!2d30.00323!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.54024,30.00323,3a,75y,90t/data=!3m4!1e1!3m2!1sbq_lqG1riSIgI7r9WSoyQA!2e0'
    },
    {//1500 グレノーマ・ドライブ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOuCzKqwVsUG0K76asViEkg!2m2!1d38.29984!2d-90.39851!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.29984,-90.39851,3a,75y,90t/data=!3m4!1e1!3m2!1sOuCzKqwVsUG0K76asViEkg!2e0'
    },
    {//Vylathur, ケーララ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soCzVAeLl5UVrUS-x4uisog!2m2!1d10.64686!2d76.02307!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.64686,76.02307,3a,75y,90t/data=!3m4!1e1!3m2!1soCzVAeLl5UVrUS-x4uisog!2e0'
    },
    {//165 クリストーヴン・コロンボ通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_5W4du1zABxjYkEtwCMXKw!2m2!1d-27.75943!2d-54.48455!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.75943,-54.48455,3a,75y,90t/data=!3m4!1e1!3m2!1s_5W4du1zABxjYkEtwCMXKw!2e0'
    },
    {//ダルハン, ダルハン・オール (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8svfHA9dwAD06_yfc5q1Pg!2m2!1d49.4955!2d105.93284!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.4955,105.93284,3a,75y,90t/data=!3m4!1e1!3m2!1s8svfHA9dwAD06_yfc5q1Pg!2e0'
    },
    {//18C (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL8saKJgLrgq03uaPm8OIBQ!2m2!1d-8.48536!2d-74.82179!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.48536,-74.82179,3a,75y,90t/data=!3m4!1e1!3m2!1sL8saKJgLrgq03uaPm8OIBQ!2e0'
    },
    {//14 オヴラジュナヤ・ウーリツァ (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL4V8_PIjmMx38Cy-6gL4zA!2m2!1d51.28141!2d106.5146!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.28141,106.5146,3a,75y,90t/data=!3m4!1e1!3m2!1sL4V8_PIjmMx38Cy-6gL4zA!2e0'
    },
    {//マハーラーシュトラ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRQvcinC7y9TnTFu7vXuhtA!2m2!1d20.61551!2d78.40556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.61551,78.40556,3a,75y,90t/data=!3m4!1e1!3m2!1sRQvcinC7y9TnTFu7vXuhtA!2e0'
    },
    {//ティエス (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdfBPnDbHvNOptj8kmsrY8Q!2m2!1d14.96759!2d-16.82702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.96759,-16.82702,3a,75y,90t/data=!3m4!1e1!3m2!1sdfBPnDbHvNOptj8kmsrY8Q!2e0'
    },
    {//846 リオ・デ・ジャネイロ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDbu0CQHiSo-HfBFajSuYQw!2m2!1d-20.00408!2d-44.42863!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.00408,-44.42863,3a,75y,90t/data=!3m4!1e1!3m2!1sDbu0CQHiSo-HfBFajSuYQw!2e0'
    },
    {//8098 アビルトン・ロナコニング・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srXzK-t0u7x3A0ZXal_XzEg!2m2!1d39.66062!2d-79.06388!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.66062,-79.06388,3a,75y,90t/data=!3m4!1e1!3m2!1srXzK-t0u7x3A0ZXal_XzEg!2e0'
    },
    {//東部 (ルワンダ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGIg5el9SFKcfHTfNsZaBxQ!2m2!1d-2.045!2d30.62121!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.045,30.62121,3a,75y,90t/data=!3m4!1e1!3m2!1sGIg5el9SFKcfHTfNsZaBxQ!2e0'
    },
    {//RN118 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP0SD8GppkgDEK5iIPUUETg!2m2!1d-28.25517!2d-58.10403!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.25517,-58.10403,3a,75y,90t/data=!3m4!1e1!3m2!1sP0SD8GppkgDEK5iIPUUETg!2e0'
    },
    {//129 ベルフシフ・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0Y6Y8wFlRps68RtcgNQhEw!2m2!1d-32.91973!2d17.99415!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.91973,17.99415,3a,75y,90t/data=!3m4!1e1!3m2!1s0Y6Y8wFlRps68RtcgNQhEw!2e0'
    },
    {//72500 634 アベニュー (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKrLk-urlHS0je3kmWSXnoQ!2m2!1d40.33667!2d-95.93562!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.33667,-95.93562,3a,75y,90t/data=!3m4!1e1!3m2!1sKrLk-urlHS0je3kmWSXnoQ!2e0'
    },
    {//ポドル, サン・ルイ (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTbe4GlpH6rk143U_xNJpwA!2m2!1d16.63348!2d-14.94767!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.63348,-14.94767,3a,75y,90t/data=!3m4!1e1!3m2!1sTbe4GlpH6rk143U_xNJpwA!2e0'
    },
    {//コトパクシ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sY7MTvUbCNNm1wBEoI3lVoQ!2m2!1d-0.94933!2d-78.67524!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.94933,-78.67524,3a,75y,90t/data=!3m4!1e1!3m2!1sY7MTvUbCNNm1wBEoI3lVoQ!2e0'
    },
    {//E384 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slhhTXCMo1piLZs28a0W1lw!2m2!1d-0.9217!2d-80.20492!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.9217,-80.20492,3a,75y,90t/data=!3m4!1e1!3m2!1slhhTXCMo1piLZs28a0W1lw!2e0'
    },
    {//ポート・ハーコート, リバーズ (ナイジェリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI0Eqi3dTS8kD6xzfMlJ6ww!2m2!1d4.76471!2d7.11562!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.76471,7.11562,3a,75y,90t/data=!3m4!1e1!3m2!1sI0Eqi3dTS8kD6xzfMlJ6ww!2e0'
    },
    {//南スラウェシ (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFb1tp_6UPcMLysIJXTu7Rg!2m2!1d-4.026!2d119.59159!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.026,119.59159,3a,75y,90t/data=!3m4!1e1!3m2!1sFb1tp_6UPcMLysIJXTu7Rg!2e0'
    },
    {//メーサーイ郡, チエンラーイ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svjGhCqSq7zjIEhzua-p2Bw!2m2!1d20.43449!2d99.9046!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.43449,99.9046,3a,75y,90t/data=!3m4!1e1!3m2!1svjGhCqSq7zjIEhzua-p2Bw!2e0'
    },
    {//ตำบล โพธิ์ชัย, ノーンカーイ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOo3oQaXZwgnYiIVcJlfFEw!2m2!1d17.85631!2d102.77873!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.85631,102.77873,3a,75y,90t/data=!3m4!1e1!3m2!1sOo3oQaXZwgnYiIVcJlfFEw!2e0'
    },
    {//14 ロング・アイランド・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOXVtXTzb7u0hNyvFjom5qQ!2m2!1d31.94015!2d-81.06065!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.94015,-81.06065,3a,75y,90t/data=!3m4!1e1!3m2!1sOXVtXTzb7u0hNyvFjom5qQ!2e0'
    },
    {//フロレンシア - サン・パブロ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ss-AHLoLwC9lp2tipQ-sCKQ!2m2!1d1.67114!2d-77.02695!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.67114,-77.02695,3a,75y,90t/data=!3m4!1e1!3m2!1ss-AHLoLwC9lp2tipQ-sCKQ!2e0'
    },
    {//1 ノーヴァ III通り (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svt_b-g63WH0GNN5iyEMfzw!2m2!1d-1.72296!2d-48.87483!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.72296,-48.87483,3a,75y,90t/data=!3m4!1e1!3m2!1svt_b-g63WH0GNN5iyEMfzw!2e0'
    },
    {//1049 セミノール・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEVUkTv6j9np1nTHqbw3inA!2m2!1d28.54856!2d-81.77287!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.54856,-81.77287,3a,75y,90t/data=!3m4!1e1!3m2!1sEVUkTv6j9np1nTHqbw3inA!2e0'
    },
    {//01通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOtupMpUXI-VeKGNe1UcxIQ!2m2!1d-13.69361!2d-57.90439!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.69361,-57.90439,3a,75y,90t/data=!3m4!1e1!3m2!1sOtupMpUXI-VeKGNe1UcxIQ!2e0'
    },
    {//332 オビエ広場 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s75a-C1vrdzu3u0gpsLsEgA!2m2!1d45.6273!2d-73.81843!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.6273,-73.81843,3a,75y,90t/data=!3m4!1e1!3m2!1s75a-C1vrdzu3u0gpsLsEgA!2e0'
    },
    {//カスティーラ, ビコール (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF-fFwfpqp7gAj3knW9J7hA!2m2!1d12.92384!2d123.85428!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.92384,123.85428,3a,75y,90t/data=!3m4!1e1!3m2!1sF-fFwfpqp7gAj3knW9J7hA!2e0'
    },
    {//50550 US-20 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKagiP1qNXDaecBhekykWrg!2m2!1d44.40307!2d-122.38795!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.40307,-122.38795,3a,75y,90t/data=!3m4!1e1!3m2!1sKagiP1qNXDaecBhekykWrg!2e0'
    },
    {//南バーティナ行政区 (オマーン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKFWeUz4eG5n7UYDcxWoYnw!2m2!1d23.34801!2d57.78834!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.34801,57.78834,3a,75y,90t/data=!3m4!1e1!3m2!1sKFWeUz4eG5n7UYDcxWoYnw!2e0'
    },
    {//プログレソ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s89anNzSVaaBcSY8raMVowQ!2m2!1d16.37326!2d-96.60304!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.37326,-96.60304,3a,75y,90t/data=!3m4!1e1!3m2!1s89anNzSVaaBcSY8raMVowQ!2e0'
    },
    {//33 Hillcrest St (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snf8adlilLVazOZiMociiLw!2m2!1d-40.95391!2d175.6356!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-40.95391,175.6356,3a,75y,90t/data=!3m4!1e1!3m2!1snf8adlilLVazOZiMociiLw!2e0'
    },
    {//MDR104 (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHk1WXtygSWrJYFTjjzhmXQ!2m2!1d26.49477!2d72.67362!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.49477,72.67362,3a,75y,90t/data=!3m4!1e1!3m2!1sHk1WXtygSWrJYFTjjzhmXQ!2e0'
    },
    {//ガジェンドラガーダ, カルナータカ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6deZu4kEWKx8WJ9Hdpc_hw!2m2!1d15.71072!2d75.97741!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.71072,75.97741,3a,75y,90t/data=!3m4!1e1!3m2!1s6deZu4kEWKx8WJ9Hdpc_hw!2e0'
    },
    {//5961 SON 100 (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP_UDsysOaQ4Vsox5rPAXmA!2m2!1d28.8446!2d-111.97223!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.8446,-111.97223,3a,75y,90t/data=!3m4!1e1!3m2!1sP_UDsysOaQ4Vsox5rPAXmA!2e0'
    },
    {//606 ビクトリア・ロード・イースト (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOHohhsgq-T3nNY1UZvmKDw!2m2!1d50.99253!2d-118.19375!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.99253,-118.19375,3a,75y,90t/data=!3m4!1e1!3m2!1sOHohhsgq-T3nNY1UZvmKDw!2e0'
    },
    {//インターステート 20 フロンテージ・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgwlogfnZbHkLd_mFmx_eOA!2m2!1d32.26761!2d-101.47496!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.26761,-101.47496,3a,75y,90t/data=!3m4!1e1!3m2!1sgwlogfnZbHkLd_mFmx_eOA!2e0'
    },
    {//クルナ (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjTJIOiWpkb-PSf2KUHRK2A!2m2!1d23.1297!2d89.09629!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.1297,89.09629,3a,75y,90t/data=!3m4!1e1!3m2!1sjTJIOiWpkb-PSf2KUHRK2A!2e0'
    },
    {//147 マリーン・ドライブ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUgbjF8xEGABq764oJDe4aA!2m2!1d-30.86974!2d30.36698!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.86974,30.36698,3a,75y,90t/data=!3m4!1e1!3m2!1sUgbjF8xEGABq764oJDe4aA!2e0'
    },
    {//1515 イラリオ・ロドリゲス・マルピカ通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdKY-QCW8UT38pyq9t63l-A!2m2!1d18.14088!2d-94.43547!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.14088,-94.43547,3a,75y,90t/data=!3m4!1e1!3m2!1sdKY-QCW8UT38pyq9t63l-A!2e0'
    },
    {//Q-751 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPNxfMGOdLbcE0D0cGaP2Jw!2m2!1d-37.71336!2d-72.20962!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.71336,-72.20962,3a,75y,90t/data=!3m4!1e1!3m2!1sPNxfMGOdLbcE0D0cGaP2Jw!2e0'
    },
    {//20 パイロット・ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szOV4Dh61w2Po9OFIutJUhw!2m2!1d43.76062!2d-79.19829!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.76062,-79.19829,3a,75y,90t/data=!3m4!1e1!3m2!1szOV4Dh61w2Po9OFIutJUhw!2e0'
    },
    {//ボルタ (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sosrMg7Q1KTD6vk7C-EBsfA!2m2!1d6.24969!2d1.01649!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.24969,1.01649,3a,75y,90t/data=!3m4!1e1!3m2!1sosrMg7Q1KTD6vk7C-EBsfA!2e0'
    },
    {//ウーリツァ・マミロヴァ (キルギス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCjR9h3KC4tvyNb9soeKO9g!2m2!1d40.50094!2d72.77987!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.50094,72.77987,3a,75y,90t/data=!3m4!1e1!3m2!1sCjR9h3KC4tvyNb9soeKO9g!2e0'
    },
    {//タントユカ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sakDNgB_YkBnKoDMBFb_3dw!2m2!1d21.5766!2d-97.99161!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.5766,-97.99161,3a,75y,90t/data=!3m4!1e1!3m2!1sakDNgB_YkBnKoDMBFb_3dw!2e0'
    },
    {//4244 WI-73 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2ViQa0GLSs3eU_KOYYjYwQ!2m2!1d45.18657!2d-90.78149!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.18657,-90.78149,3a,75y,90t/data=!3m4!1e1!3m2!1s2ViQa0GLSs3eU_KOYYjYwQ!2e0'
    },
    {//セントラル (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbEWO2S12tJNvs2rcVyEBlw!2m2!1d5.43239!2d-0.57515!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.43239,-0.57515,3a,75y,90t/data=!3m4!1e1!3m2!1sbEWO2S12tJNvs2rcVyEBlw!2e0'
    },
    {//93 カジェ 99 B (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s27XGA2zoTd3yVCiZTqeBFQ!2m2!1d7.88183!2d-76.62732!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@7.88183,-76.62732,3a,75y,90t/data=!3m4!1e1!3m2!1s27XGA2zoTd3yVCiZTqeBFQ!2e0'
    },
    {//253 マウント・プレザント・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sw871dLk1BXz2d5voXFjEnw!2m2!1d-38.16716!2d144.31323!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.16716,144.31323,3a,75y,90t/data=!3m4!1e1!3m2!1sw871dLk1BXz2d5voXFjEnw!2e0'
    },
    {//15 ジョゼー・モレイラ・ドス・サントス通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saTpyhN_6aRPgFnw11ZIL2A!2m2!1d-14.49261!2d-46.11503!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-14.49261,-46.11503,3a,75y,90t/data=!3m4!1e1!3m2!1saTpyhN_6aRPgFnw11ZIL2A!2e0'
    },
    {//伊賀市, 三重県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szjzOKBnGk34_xno_iXDlrQ!2m2!1d34.74591!2d136.15674!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.74591,136.15674,3a,75y,90t/data=!3m4!1e1!3m2!1szjzOKBnGk34_xno_iXDlrQ!2e0'
    },
    {//Jl. Sungai Talang Hilir (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stb1WfQNJtvRRusO3Mnfe1Q!2m2!1d-0.26753!2d100.37272!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.26753,100.37272,3a,75y,90t/data=!3m4!1e1!3m2!1stb1WfQNJtvRRusO3Mnfe1Q!2e0'
    },
    {//4 PB-325 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgYKDjhDJbLLKtEgGMsP20g!2m2!1d-6.31112!2d-37.71684!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.31112,-37.71684,3a,75y,90t/data=!3m4!1e1!3m2!1sgYKDjhDJbLLKtEgGMsP20g!2e0'
    },
    {//Phong Hiệp, カマウ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKj-KOSvV03dE-nqsF7nqVw!2m2!1d9.34398!2d105.36378!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.34398,105.36378,3a,75y,90t/data=!3m4!1e1!3m2!1sKj-KOSvV03dE-nqsF7nqVw!2e0'
    },
    {//ダナン (ベトナム)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSSn0MpXEaCrm_TwxZtR1sA!2m2!1d15.54673!2d108.49643!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.54673,108.49643,3a,75y,90t/data=!3m4!1e1!3m2!1sSSn0MpXEaCrm_TwxZtR1sA!2e0'
    },
    {//ベイビュー・ロード (オーストラリア中北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sST8EE5vybVBO9wqhX_63Cg!2m2!1d-20.72409!2d116.88672!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.72409,116.88672,3a,75y,90t/data=!3m4!1e1!3m2!1sST8EE5vybVBO9wqhX_63Cg!2e0'
    },
    {//530 グリーン・クリーク・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smlJzwJFjEwsHZpaaNyJ2Fg!2m2!1d-31.80793!2d151.08029!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.80793,151.08029,3a,75y,90t/data=!3m4!1e1!3m2!1smlJzwJFjEwsHZpaaNyJ2Fg!2e0'
    },
    {//クルナ (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svOveB-xrCh878rgzAnpMkQ!2m2!1d23.55872!2d89.12032!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.55872,89.12032,3a,75y,90t/data=!3m4!1e1!3m2!1svOveB-xrCh878rgzAnpMkQ!2e0'
    },
    {//251 ルイス・ペレイラ・デ・カンポス通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smII3eGc8WTEAlhUxik1L2Q!2m2!1d-23.84918!2d-46.14129!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.84918,-46.14129,3a,75y,90t/data=!3m4!1e1!3m2!1smII3eGc8WTEAlhUxik1L2Q!2e0'
    },
    {//ピチャリ, クスコ (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sR8aeniPOdugBKme4ky07Vg!2m2!1d-12.50773!2d-73.82272!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.50773,-73.82272,3a,75y,90t/data=!3m4!1e1!3m2!1sR8aeniPOdugBKme4ky07Vg!2e0'
    },
    {//2127 コロラド・ストリート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syxGMm2gSap6ESwwbbt3Qyw!2m2!1d35.73084!2d-95.34322!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.73084,-95.34322,3a,75y,90t/data=!3m4!1e1!3m2!1syxGMm2gSap6ESwwbbt3Qyw!2e0'
    },
    {//ウィルソンズ・ロード (オーストラリア南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sStovQ0PyycLcqd1u5n1WEQ!2m2!1d-37.98581!2d141.09595!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.98581,141.09595,3a,75y,90t/data=!3m4!1e1!3m2!1sStovQ0PyycLcqd1u5n1WEQ!2e0'
    },
    {//N-97-Q (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOqVoh4XpwJ_rcrcGw63Teg!2m2!1d-37.12973!2d-72.20172!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.12973,-72.20172,3a,75y,90t/data=!3m4!1e1!3m2!1sOqVoh4XpwJ_rcrcGw63Teg!2e0'
    },
    {//México 80 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSp-CAlAT7tGZWgSK61OMIg!2m2!1d19.90162!2d-104.329!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.90162,-104.329,3a,75y,90t/data=!3m4!1e1!3m2!1sSp-CAlAT7tGZWgSK61OMIg!2e0'
    },
    {//4118 ノース・ヒューロン・バイウェイ (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGTy0H7tBUfS414BLQuk7-Q!2m2!1d46.01348!2d-84.44289!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.01348,-84.44289,3a,75y,90t/data=!3m4!1e1!3m2!1sGTy0H7tBUfS414BLQuk7-Q!2e0'
    },
    {//リバーサイド, カリフォルニア州 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVFmWJmwOhyBQNpL41zZIJg!2m2!1d33.93873!2d-117.41303!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.93873,-117.41303,3a,75y,90t/data=!3m4!1e1!3m2!1sVFmWJmwOhyBQNpL41zZIJg!2e0'
    },
    {//ウィロー・バレー・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spFNFD554rWCkx0O8rFw8pA!2m2!1d32.6302!2d-101.39171!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.6302,-101.39171,3a,75y,90t/data=!3m4!1e1!3m2!1spFNFD554rWCkx0O8rFw8pA!2e0'
    },
    {//サン・ヘロニモ - パハリート (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8MAW342b-xdoBedbiNtr-A!2m2!1d6.40393!2d-75.69932!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.40393,-75.69932,3a,75y,90t/data=!3m4!1e1!3m2!1s8MAW342b-xdoBedbiNtr-A!2e0'
    },
    {//チワワ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXC2OrORmshTlEKK0kL6tWQ!2m2!1d29.74955!2d-107.93269!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.74955,-107.93269,3a,75y,90t/data=!3m4!1e1!3m2!1sXC2OrORmshTlEKK0kL6tWQ!2e0'
    },
    {//ミラグロス, ビコール (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKxqyTI8ZrZyPdEGWEyqztQ!2m2!1d12.25119!2d123.5283!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.25119,123.5283,3a,75y,90t/data=!3m4!1e1!3m2!1sKxqyTI8ZrZyPdEGWEyqztQ!2e0'
    },
    {//AB-873 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smwsHGZn_plTumafggOTeeA!2m2!1d50.3684!2d-112.10526!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.3684,-112.10526,3a,75y,90t/data=!3m4!1e1!3m2!1smwsHGZn_plTumafggOTeeA!2e0'
    },
    {//505 オークウッド・ドライブ (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEf8MGNGLuKRf-lTyPFBTEQ!2m2!1d42.91878!2d-89.39532!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.91878,-89.39532,3a,75y,90t/data=!3m4!1e1!3m2!1sEf8MGNGLuKRf-lTyPFBTEQ!2e0'
    },
    {//Google マップ (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssXsHcsWg5s28_TGUqx9Ulw!2m2!1d48.72908!2d98.25442!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.72908,98.25442,3a,75y,90t/data=!3m4!1e1!3m2!1ssXsHcsWg5s28_TGUqx9Ulw!2e0'
    },
    {//335 シマン・ルイース・ナシメント通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swAWrcelEhnbUolKN3fBHug!2m2!1d-11.21722!2d-41.86057!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.21722,-41.86057,3a,75y,90t/data=!3m4!1e1!3m2!1swAWrcelEhnbUolKN3fBHug!2e0'
    },
    {//K-679 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdOekEVl3JnycX3jBMlsfJw!2m2!1d-35.54333!2d-71.51576!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-35.54333,-71.51576,3a,75y,90t/data=!3m4!1e1!3m2!1sdOekEVl3JnycX3jBMlsfJw!2e0'
    },
    {//5 ファルコン・クレセント (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4T-pIsy88q7pTrMws9Rhqw!2m2!1d48.04027!2d-66.39733!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.04027,-66.39733,3a,75y,90t/data=!3m4!1e1!3m2!1s4T-pIsy88q7pTrMws9Rhqw!2e0'
    },
    {//ポンド・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8r3icSWAcJ1ASorKWQ6W2w!2m2!1d45.80038!2d-68.37693!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.80038,-68.37693,3a,75y,90t/data=!3m4!1e1!3m2!1s8r3icSWAcJ1ASorKWQ6W2w!2e0'
    },
    {//コンパルティル (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spvjZV45qdFLn9EltR7sjQw!2m2!1d22.91674!2d-98.06302!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.91674,-98.06302,3a,75y,90t/data=!3m4!1e1!3m2!1spvjZV45qdFLn9EltR7sjQw!2e0'
    },
    {//153 サンタ・クルス (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV2wDHG4wvmZf804HRTvI6A!2m2!1d22.15855!2d-101.9575!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.15855,-101.9575,3a,75y,90t/data=!3m4!1e1!3m2!1sV2wDHG4wvmZf804HRTvI6A!2e0'
    },
    {//QL37 (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sor9GYV-N_Kz1_jzvNa64oA!2m2!1d21.63868!2d105.70899!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.63868,105.70899,3a,75y,90t/data=!3m4!1e1!3m2!1sor9GYV-N_Kz1_jzvNa64oA!2e0'
    },
    {//高島市, 滋賀県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8KqPoMDY8WpPZ3WOcVYmCg!2m2!1d35.43193!2d136.02817!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.43193,136.02817,3a,75y,90t/data=!3m4!1e1!3m2!1s8KqPoMDY8WpPZ3WOcVYmCg!2e0'
    },
    {//バイーア州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMdCFaFfFA2klL8maLHPQrg!2m2!1d-10.13576!2d-40.04714!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.13576,-40.04714,3a,75y,90t/data=!3m4!1e1!3m2!1sMdCFaFfFA2klL8maLHPQrg!2e0'
    },
    {//1041 フォックスタウン・ヒル・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHSThp5sgU6Db7wo3r0HIBA!2m2!1d40.98592!2d-75.1555!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.98592,-75.1555,3a,75y,90t/data=!3m4!1e1!3m2!1sHSThp5sgU6Db7wo3r0HIBA!2e0'
    },
    {//7999 ピナル・ビュー・ドライブ (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sslt4K6j_HGG0F36sV7oBgQ!2m2!1d33.37218!2d-110.7797!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.37218,-110.7797,3a,75y,90t/data=!3m4!1e1!3m2!1sslt4K6j_HGG0F36sV7oBgQ!2e0'
    },
    {//チェルカヌ・ターラ - ベリッキール・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVb1oHNL_yLEDKW72CCOmdw!2m2!1d11.99995!2d75.33694!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.99995,75.33694,3a,75y,90t/data=!3m4!1e1!3m2!1sVb1oHNL_yLEDKW72CCOmdw!2e0'
    },
    {//898 ダマシオ・コルメネロ・コート (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFFZ4TOngL5MgPaDEwXSB4w!2m2!1d31.62174!2d-106.29573!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.62174,-106.29573,3a,75y,90t/data=!3m4!1e1!3m2!1sFFZ4TOngL5MgPaDEwXSB4w!2e0'
    },
    {//イブラヒンパットナム, アーンドラ・プラデーシュ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swGlB11XJIi9AJJ3BHZnjhA!2m2!1d16.58314!2d80.52815!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.58314,80.52815,3a,75y,90t/data=!3m4!1e1!3m2!1swGlB11XJIi9AJJ3BHZnjhA!2e0'
    },
    {//Gg. Beringin (カリマンタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syphlsTlumWmpm8JJB9VvnQ!2m2!1d-0.50511!2d117.15383!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.50511,117.15383,3a,75y,90t/data=!3m4!1e1!3m2!1syphlsTlumWmpm8JJB9VvnQ!2e0'
    },
    {//12430 184th ストリート・イースト (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVHBnVSQz8qE3NPIzigmxTQ!2m2!1d47.08736!2d-122.25921!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.08736,-122.25921,3a,75y,90t/data=!3m4!1e1!3m2!1sVHBnVSQz8qE3NPIzigmxTQ!2e0'
    },
    {//68 エデンベール・サウス・ロード (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s66ZgXdN8dwB2p6YlmmQuhQ!2m2!1d-26.6282!2d151.84093!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.6282,151.84093,3a,75y,90t/data=!3m4!1e1!3m2!1s66ZgXdN8dwB2p6YlmmQuhQ!2e0'
    },
    {//ボリシャヤ・ロマノフカ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTlIr48dpJYHdfxFOFN-upg!2m2!1d54.32819!2d50.47265!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.32819,50.47265,3a,75y,90t/data=!3m4!1e1!3m2!1sTlIr48dpJYHdfxFOFN-upg!2e0'
    },
    {//イタベライ, ゴイアス (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOTx-uSZbyFVzhhTH4sBNzg!2m2!1d-16.03748!2d-49.79476!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.03748,-49.79476,3a,75y,90t/data=!3m4!1e1!3m2!1sOTx-uSZbyFVzhhTH4sBNzg!2e0'
    },
    {//5-A通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJjsyPIh3R9Np35vsgNVzFQ!2m2!1d-17.80663!2d-50.60054!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.80663,-50.60054,3a,75y,90t/data=!3m4!1e1!3m2!1sJjsyPIh3R9Np35vsgNVzFQ!2e0'
    },
    {//Rod. Deputado Júlio Redecker (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx4-RRDf1IjIYSfUtzRgRuw!2m2!1d-28.65873!2d-50.43832!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.65873,-50.43832,3a,75y,90t/data=!3m4!1e1!3m2!1sx4-RRDf1IjIYSfUtzRgRuw!2e0'
    },
    {//1573 セッテ・デ・セテンブロ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1safsSB_e79vfy6ifpka7eBg!2m2!1d-8.25031!2d-49.26158!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.25031,-49.26158,3a,75y,90t/data=!3m4!1e1!3m2!1safsSB_e79vfy6ifpka7eBg!2e0'
    },
    {//1955 ルイース・ジアロラ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8giPk954yODhlg5iFo0igA!2m2!1d-21.09371!2d-44.22143!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.09371,-44.22143,3a,75y,90t/data=!3m4!1e1!3m2!1s8giPk954yODhlg5iFo0igA!2e0'
    },
    {//南島原市, 長崎県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWsyD2dhAllLZ_wPAUKGR9Q!2m2!1d32.73206!2d130.3575!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.73206,130.3575,3a,75y,90t/data=!3m4!1e1!3m2!1sWsyD2dhAllLZ_wPAUKGR9Q!2e0'
    },
    {//バイーア州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6t-ad7f563UTPPR6Sj5ubQ!2m2!1d-17.39086!2d-40.23717!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.39086,-40.23717,3a,75y,90t/data=!3m4!1e1!3m2!1s6t-ad7f563UTPPR6Sj5ubQ!2e0'
    },
    {//Jalan Istana Bukit Tanah (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbwkq54YDGYIVdtdWwYBs9A!2m2!1d6.1915!2d102.16659!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.1915,102.16659,3a,75y,90t/data=!3m4!1e1!3m2!1sbwkq54YDGYIVdtdWwYBs9A!2e0'
    },
    {//PY18 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8PqtgCNpfcixUIy7PhBriw!2m2!1d-25.95936!2d-56.52423!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.95936,-56.52423,3a,75y,90t/data=!3m4!1e1!3m2!1s8PqtgCNpfcixUIy7PhBriw!2e0'
    },
    {//R52 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAU2FhsLtgdxmA_animIELg!2m2!1d-26.26963!2d26.02721!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.26963,26.02721,3a,75y,90t/data=!3m4!1e1!3m2!1sAU2FhsLtgdxmA_animIELg!2e0'
    },
    {//778 マヌエル・ロドリゲス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWhQ2E9LudmVEzv5lJY2ucA!2m2!1d-33.2768!2d-70.88336!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.2768,-70.88336,3a,75y,90t/data=!3m4!1e1!3m2!1sWhQ2E9LudmVEzv5lJY2ucA!2e0'
    },
    {//292 1st ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swfiSwzZv_7hY4qbfpqQWnQ!2m2!1d40.22221!2d-76.85065!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.22221,-76.85065,3a,75y,90t/data=!3m4!1e1!3m2!1swfiSwzZv_7hY4qbfpqQWnQ!2e0'
    },
    {//I-77 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snZl6_hbIHqsUvSpSC0WiAQ!2m2!1d37.99001!2d-81.33256!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.99001,-81.33256,3a,75y,90t/data=!3m4!1e1!3m2!1snZl6_hbIHqsUvSpSC0WiAQ!2e0'
    },
    {//706 コーニッシュ・ドライブ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saheGKGOedSqeYva4ghAG3g!2m2!1d33.04342!2d-117.2903!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.04342,-117.2903,3a,75y,90t/data=!3m4!1e1!3m2!1saheGKGOedSqeYva4ghAG3g!2e0'
    },
    {//RS-342 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sO99UMb2LqnEvcPZ06mZNFQ!2m2!1d-28.13172!2d-54.05746!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.13172,-54.05746,3a,75y,90t/data=!3m4!1e1!3m2!1sO99UMb2LqnEvcPZ06mZNFQ!2e0'
    },
    {//中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1s2Pq7BdtuecQgpsiqcm7Q!2m2!1d-7.03266!2d110.53353!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.03266,110.53353,3a,75y,90t/data=!3m4!1e1!3m2!1s1s2Pq7BdtuecQgpsiqcm7Q!2e0'
    },
    {//自由州 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxtL1vJLesYXV7dNOR7cDMA!2m2!1d-28.81347!2d27.65285!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.81347,27.65285,3a,75y,90t/data=!3m4!1e1!3m2!1sxtL1vJLesYXV7dNOR7cDMA!2e0'
    },
    {//ゴヴェルナドール・マーリオ・コーヴァス高速道路 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snNqKS67TnjKrvunF8iRtYA!2m2!1d-25.88092!2d-48.79329!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.88092,-48.79329,3a,75y,90t/data=!3m4!1e1!3m2!1snNqKS67TnjKrvunF8iRtYA!2e0'
    },
    {//RP221 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9AByXubbo9GuZVNS76CZiA!2m2!1d-27.11086!2d-54.46429!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.11086,-54.46429,3a,75y,90t/data=!3m4!1e1!3m2!1s9AByXubbo9GuZVNS76CZiA!2e0'
    },
    {//20580 MN-27 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQc_YpSwUXkWkoE56CagZew!2m2!1d45.88959!2d-94.9405!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.88959,-94.9405,3a,75y,90t/data=!3m4!1e1!3m2!1sQc_YpSwUXkWkoE56CagZew!2e0'
    },
    {//10430 ウッドバイン・アベニュー (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZfCrKYjRHO1fa-SoBdJ0cA!2m2!1d43.89461!2d-79.37957!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.89461,-79.37957,3a,75y,90t/data=!3m4!1e1!3m2!1sZfCrKYjRHO1fa-SoBdJ0cA!2e0'
    },
    {//10604 405通り (プエルトリコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUNqp4WIGtTkUf_4SNU-cmQ!2m2!1d18.38393!2d-65.78708!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.38393,-65.78708,3a,75y,90t/data=!3m4!1e1!3m2!1sUNqp4WIGtTkUf_4SNU-cmQ!2e0'
    },
    {//サンタ・クルス, ミマロパ地方 (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1U_JJHOmWc2BEgmLBdnIyg!2m2!1d13.01601!2d120.75992!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.01601,120.75992,3a,75y,90t/data=!3m4!1e1!3m2!1s1U_JJHOmWc2BEgmLBdnIyg!2e0'
    },
    {//ドナータ・ストリート (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sig4rioixOVmn91FPDWRMUg!2m2!1d-28.00979!2d18.75323!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.00979,18.75323,3a,75y,90t/data=!3m4!1e1!3m2!1sig4rioixOVmn91FPDWRMUg!2e0'
    },
    {//2123 ベント・アバデ・デ・フレイタス通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgyqYG0GPJxu_1SB9rP1Hbw!2m2!1d-12.37446!2d-38.36898!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.37446,-38.36898,3a,75y,90t/data=!3m4!1e1!3m2!1sgyqYG0GPJxu_1SB9rP1Hbw!2e0'
    },
    {//38 リベルター (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stN8ce-O193bt_tFu_9azKA!2m2!1d-37.62735!2d-73.46686!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.62735,-73.46686,3a,75y,90t/data=!3m4!1e1!3m2!1stN8ce-O193bt_tFu_9azKA!2e0'
    },
    {//250 カボ・ウンベルト通り (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9bJSqWQSSjKX28iwA2SmEQ!2m2!1d-9.60253!2d-35.81895!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.60253,-35.81895,3a,75y,90t/data=!3m4!1e1!3m2!1s9bJSqWQSSjKX28iwA2SmEQ!2e0'
    },
    {//MT-322 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk1sD3Z0TWrTbyVZuGHDyHQ!2m2!1d-12.17099!2d-51.49747!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.17099,-51.49747,3a,75y,90t/data=!3m4!1e1!3m2!1sk1sD3Z0TWrTbyVZuGHDyHQ!2e0'
    },
    {//11112 ライト・ブラザーズ・ブールバード・ウェスト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKScekLRsU-irjp7thoYKPA!2m2!1d41.89122!2d-91.80974!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.89122,-91.80974,3a,75y,90t/data=!3m4!1e1!3m2!1sKScekLRsU-irjp7thoYKPA!2e0'
    },
    {//広島市, 広島県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBSA7YWez-PqX8pieXXD0mA!2m2!1d34.42709!2d132.45315!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.42709,132.45315,3a,75y,90t/data=!3m4!1e1!3m2!1sBSA7YWez-PqX8pieXXD0mA!2e0'
    },
    {//セルジッペ州 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHPflHWi9E6iZA5vH-HhImg!2m2!1d-10.61177!2d-36.93114!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.61177,-36.93114,3a,75y,90t/data=!3m4!1e1!3m2!1sHPflHWi9E6iZA5vH-HhImg!2e0'
    },
    {//Aussenkehr, カラス (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPvJPItXwp0r8VUaZQCZ4tw!2m2!1d-28.359!2d17.41204!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.359,17.41204,3a,75y,90t/data=!3m4!1e1!3m2!1sPvJPItXwp0r8VUaZQCZ4tw!2e0'
    },
    {//ビジャグラン＝リナレス (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBNmVBMjTMvjemEX-AL6T1g!2m2!1d24.83044!2d-99.55768!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.83044,-99.55768,3a,75y,90t/data=!3m4!1e1!3m2!1sBNmVBMjTMvjemEX-AL6T1g!2e0'
    },
    {//トーンク, ラージャスターン (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8nA-A9qoXfSLyx_c8qUxYQ!2m2!1d26.15012!2d75.78378!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.15012,75.78378,3a,75y,90t/data=!3m4!1e1!3m2!1s8nA-A9qoXfSLyx_c8qUxYQ!2e0'
    },
    {//MSR ジャンクション - ロペス - ブエナビスタ・ロード (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVPm9Oe1NKkO-MHo7kpjm_A!2m2!1d13.6886!2d122.47172!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.6886,122.47172,3a,75y,90t/data=!3m4!1e1!3m2!1sVPm9Oe1NKkO-MHo7kpjm_A!2e0'
    },
    {//BR-290 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDNqxNInl3vebr5uMmH7Wog!2m2!1d-30.23408!2d-54.77122!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.23408,-54.77122,3a,75y,90t/data=!3m4!1e1!3m2!1sDNqxNInl3vebr5uMmH7Wog!2e0'
    },
    {//ES-137 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLcVD2ppHc0uS5woyjbXDmA!2m2!1d-18.06452!2d-40.4799!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.06452,-40.4799,3a,75y,90t/data=!3m4!1e1!3m2!1sLcVD2ppHc0uS5woyjbXDmA!2e0'
    },
    {//ボリナオ・トレイル (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfcwPKNg0mzM-JcTFP1ZxPQ!2m2!1d16.2792!2d119.87638!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.2792,119.87638,3a,75y,90t/data=!3m4!1e1!3m2!1sfcwPKNg0mzM-JcTFP1ZxPQ!2e0'
    },
    {//ノース 6 (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7lU5P4yx58tkeWwh_xsc8Q!2m2!1d12.9118!2d-14.16747!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.9118,-14.16747,3a,75y,90t/data=!3m4!1e1!3m2!1s7lU5P4yx58tkeWwh_xsc8Q!2e0'
    },
    {//71 ボンベロ・マヌエル・ガルシア通り (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHaZsumKGSl5ZvMNI65IRLQ!2m2!1d-33.98216!2d-70.71839!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.98216,-70.71839,3a,75y,90t/data=!3m4!1e1!3m2!1sHaZsumKGSl5ZvMNI65IRLQ!2e0'
    },
    {//ソロク, 西スマトラ (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdC24_kT-wauV99JjBSZwlg!2m2!1d-0.79176!2d100.67227!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.79176,100.67227,3a,75y,90t/data=!3m4!1e1!3m2!1sdC24_kT-wauV99JjBSZwlg!2e0'
    },
    {//ロス・セドラレス, アルト・パラナ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHniuZgkGo9BBLKBDrE1anA!2m2!1d-25.76055!2d-54.712!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.76055,-54.712,3a,75y,90t/data=!3m4!1e1!3m2!1sHniuZgkGo9BBLKBDrE1anA!2e0'
    },
    {//アラヤット, ルソン中心部 (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF22WZisQ8FjLPXkgq-gmRg!2m2!1d15.14463!2d120.78996!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.14463,120.78996,3a,75y,90t/data=!3m4!1e1!3m2!1sF22WZisQ8FjLPXkgq-gmRg!2e0'
    },
    {//ティウィ, ビコール (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9fewh-feVHCdNLjUfAW61A!2m2!1d13.45015!2d123.66786!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.45015,123.66786,3a,75y,90t/data=!3m4!1e1!3m2!1s9fewh-feVHCdNLjUfAW61A!2e0'
    },
    {//ตำบล แม่ปะ, ターク (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0iV0fkV5n-WnXSpmg5PzOQ!2m2!1d16.75252!2d98.56599!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.75252,98.56599,3a,75y,90t/data=!3m4!1e1!3m2!1s0iV0fkV5n-WnXSpmg5PzOQ!2e0'
    },
    {//5884 FM3400 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTCm6KxPO_RPZeq7bsVDnnA!2m2!1d31.49448!2d-97.08232!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.49448,-97.08232,3a,75y,90t/data=!3m4!1e1!3m2!1sTCm6KxPO_RPZeq7bsVDnnA!2e0'
    },
    {//4365 シャープ・ポイント・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sITarDCZxcJQB7hwkW5rP7w!2m2!1d35.71913!2d-77.55807!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.71913,-77.55807,3a,75y,90t/data=!3m4!1e1!3m2!1sITarDCZxcJQB7hwkW5rP7w!2e0'
    },
    {//南スラウェシ (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV2DUWPlPE9CQTxng0S0Igw!2m2!1d-4.96894!2d119.61871!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.96894,119.61871,3a,75y,90t/data=!3m4!1e1!3m2!1sV2DUWPlPE9CQTxng0S0Igw!2e0'
    },
    {//74 R. dos Buritís (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqKrZVAuLdfsnmfY6h_5evA!2m2!1d-9.94425!2d-54.91542!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.94425,-54.91542,3a,75y,90t/data=!3m4!1e1!3m2!1sqKrZVAuLdfsnmfY6h_5evA!2e0'
    },
    {//81 Latkova vas (スロベニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szr9rRtaffKuHKzjhpjSIQA!2m2!1d46.25068!2d15.10182!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.25068,15.10182,3a,75y,90t/data=!3m4!1e1!3m2!1szr9rRtaffKuHKzjhpjSIQA!2e0'
    },
    {//51 Jl. Ahmad Yani (カリマンタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL2vCbBgzJuDRPy-NQ6TOtg!2m2!1d-2.38943!2d112.40979!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.38943,112.40979,3a,75y,90t/data=!3m4!1e1!3m2!1sL2vCbBgzJuDRPy-NQ6TOtg!2e0'
    },
    {//1211 ザ・ショアーズ・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slzGHJr4fqbrCsGhA9ek_PQ!2m2!1d31.985!2d-96.21629!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.985,-96.21629,3a,75y,90t/data=!3m4!1e1!3m2!1slzGHJr4fqbrCsGhA9ek_PQ!2e0'
    },
    {//104 (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfB3YIB-C8J3OF5wl1JTAJQ!2m2!1d46.04637!2d20.17648!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.04637,20.17648,3a,75y,90t/data=!3m4!1e1!3m2!1sfB3YIB-C8J3OF5wl1JTAJQ!2e0'
    },
    {//3326 シュトラースベルク (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJS1vmyvVFRIQ47IJgETHuw!2m2!1d48.6013!2d16.60747!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.6013,16.60747,3a,75y,90t/data=!3m4!1e1!3m2!1sJS1vmyvVFRIQ47IJgETHuw!2e0'
    },
    {//N6 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srPQcLu0vX49APlBcXy8Akw!2m2!1d-30.44372!2d26.8208!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.44372,26.8208,3a,75y,90t/data=!3m4!1e1!3m2!1srPQcLu0vX49APlBcXy8Akw!2e0'
    },
    {//Jalan Chamang (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szoXkMc2dTqgud2qqbK61Uw!2m2!1d3.51145!2d101.8691!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.51145,101.8691,3a,75y,90t/data=!3m4!1e1!3m2!1szoXkMc2dTqgud2qqbK61Uw!2e0'
    },
    {//ゲレロ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stzkCnKVvwU0bK0ceEOz43g!2m2!1d17.34073!2d-99.09625!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.34073,-99.09625,3a,75y,90t/data=!3m4!1e1!3m2!1stzkCnKVvwU0bK0ceEOz43g!2e0'
    },
    {//1204 サンタ・キテーリア通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1se5z5rnck4Kph1Y64j1e8Wg!2m2!1d-20.08826!2d-43.40964!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.08826,-43.40964,3a,75y,90t/data=!3m4!1e1!3m2!1se5z5rnck4Kph1Y64j1e8Wg!2e0'
    },
    {//Fv30 (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxxxe2UZZOHQXBtigEpxnvg!2m2!1d62.58571!2d11.36647!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.58571,11.36647,3a,75y,90t/data=!3m4!1e1!3m2!1sxxxe2UZZOHQXBtigEpxnvg!2e0'
    },
    {//9 ロザ・ボナール通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sti1UtKf-Ji-E1chq0fOFYg!2m2!1d48.45761!2d1.45595!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.45761,1.45595,3a,75y,90t/data=!3m4!1e1!3m2!1sti1UtKf-Ji-E1chq0fOFYg!2e0'
    },
    {//130 R. Olga Jianasi Pelliccioni (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sB8rhE6Zh31Zcwsg3olsQ2g!2m2!1d-21.06904!2d-47.90065!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.06904,-47.90065,3a,75y,90t/data=!3m4!1e1!3m2!1sB8rhE6Zh31Zcwsg3olsQ2g!2e0'
    },
    {//1852 ウェスト・クレンシャー・ストリート (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAUzXx5K7-qktLlAORTV59A!2m2!1d43.50629!2d-116.43474!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.50629,-116.43474,3a,75y,90t/data=!3m4!1e1!3m2!1sAUzXx5K7-qktLlAORTV59A!2e0'
    },
    {//Lexbyvägen (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg33CcM3SiyXkIg4pEnHbZg!2m2!1d57.74498!2d12.12642!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@57.74498,12.12642,3a,75y,90t/data=!3m4!1e1!3m2!1sg33CcM3SiyXkIg4pEnHbZg!2e0'
    },
    {//レ・コンブ (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDbOoobueOe5glgqd8QQnrQ!2m2!1d45.8566!2d3.60188!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.8566,3.60188,3a,75y,90t/data=!3m4!1e1!3m2!1sDbOoobueOe5glgqd8QQnrQ!2e0'
    },
    {//B5199 (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0MfR7Awlo_Jyi8FoMHzWSw!2m2!1d53.42585!2d-2.81928!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.42585,-2.81928,3a,75y,90t/data=!3m4!1e1!3m2!1s0MfR7Awlo_Jyi8FoMHzWSw!2e0'
    },
    {//ビア・プリンシパル・コルドバ (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szPtzpBBN0cDznd7cDnZn8w!2m2!1d0.84944!2d-77.57215!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.84944,-77.57215,3a,75y,90t/data=!3m4!1e1!3m2!1szPtzpBBN0cDznd7cDnZn8w!2e0'
    },
    {//25 15891 (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svIfvN5h5us2iLcQhpNErkw!2m2!1d63.50068!2d29.6103!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.50068,29.6103,3a,75y,90t/data=!3m4!1e1!3m2!1svIfvN5h5us2iLcQhpNErkw!2e0'
    },
    {//489 Via Martiri della Libertà (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s921rVZEYPdO8lRzsqT9qoA!2m2!1d44.92355!2d11.05199!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.92355,11.05199,3a,75y,90t/data=!3m4!1e1!3m2!1s921rVZEYPdO8lRzsqT9qoA!2e0'
    },
    {//226 クラウス・アベニュー (ハワイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sosW4fH5mXA-XKj9kkR7IPA!2m2!1d19.72526!2d-155.0364!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.72526,-155.0364,3a,75y,90t/data=!3m4!1e1!3m2!1sosW4fH5mXA-XKj9kkR7IPA!2e0'
    },
    {//1 クピエツカ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2peNgcJjENI7FTTwxuk2Gw!2m2!1d53.56799!2d23.12974!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.56799,23.12974,3a,75y,90t/data=!3m4!1e1!3m2!1s2peNgcJjENI7FTTwxuk2Gw!2e0'
    },
    {//A22 (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1w_OnoLTSifQLu1yt-dd-Q!2m2!1d46.46583!2d11.30673!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.46583,11.30673,3a,75y,90t/data=!3m4!1e1!3m2!1s1w_OnoLTSifQLu1yt-dd-Q!2e0'
    },
    {//キシイー＝ケロカ＝ソーティク・ロード (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIBEKPgwrrNQJnvmVwxMUlg!2m2!1d-0.76241!2d35.01077!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-0.76241,35.01077,3a,75y,90t/data=!3m4!1e1!3m2!1sIBEKPgwrrNQJnvmVwxMUlg!2e0'
    },
    {//Jl. RA Kartini (カリマンタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sf5riyhHbtTWlEA51wTB7Xg!2m2!1d-3.02233!2d114.38905!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.02233,114.38905,3a,75y,90t/data=!3m4!1e1!3m2!1sf5riyhHbtTWlEA51wTB7Xg!2e0'
    },
    {//ロンバルディア (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJB5mh10yFA57zZNm5inI-Q!2m2!1d45.28159!2d10.07129!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.28159,10.07129,3a,75y,90t/data=!3m4!1e1!3m2!1sJB5mh10yFA57zZNm5inI-Q!2e0'
    },
    {//Vĩnh Hưng - Biên Giới (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8YnOcDBAS4D7E6uTRK8TYw!2m2!1d10.92341!2d105.7289!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.92341,105.7289,3a,75y,90t/data=!3m4!1e1!3m2!1s8YnOcDBAS4D7E6uTRK8TYw!2e0'
    },
    {//34 Kristiinankatu (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6Ao0uFkbNtedfhhk-RJqvg!2m2!1d62.2702!2d21.39544!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.2702,21.39544,3a,75y,90t/data=!3m4!1e1!3m2!1s6Ao0uFkbNtedfhhk-RJqvg!2e0'
    },
    {//ニューデリー, デリー (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slV7_HWcEQxZf0yDK6j9hzw!2m2!1d28.53484!2d77.28032!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.53484,77.28032,3a,75y,90t/data=!3m4!1e1!3m2!1slV7_HWcEQxZf0yDK6j9hzw!2e0'
    },
    {//ジュアノム・マルトゥレイ通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn68_B13Ix06CgWMUNhj1XA!2m2!1d39.5045!2d-0.40383!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.5045,-0.40383,3a,75y,90t/data=!3m4!1e1!3m2!1sn68_B13Ix06CgWMUNhj1XA!2e0'
    },
    {//パザルジク (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKBxUzk7PKfV5wPAqRxKJyw!2m2!1d42.20493!2d24.33085!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.20493,24.33085,3a,75y,90t/data=!3m4!1e1!3m2!1sKBxUzk7PKfV5wPAqRxKJyw!2e0'
    },
    {//リシュコヴォ＝トロイツコエ・アフトダローガ (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-dFJ2CJxQWrZr6ymbRFImg!2m2!1d52.19893!2d35.55991!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.19893,35.55991,3a,75y,90t/data=!3m4!1e1!3m2!1s-dFJ2CJxQWrZr6ymbRFImg!2e0'
    },
    {//2380 カレーラ 22 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYKpsWCHwvBpHnewhc0D1nQ!2m2!1d9.30095!2d-75.3917!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.30095,-75.3917,3a,75y,90t/data=!3m4!1e1!3m2!1sYKpsWCHwvBpHnewhc0D1nQ!2e0'
    },
    {//62 ヴォーダン通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saO4dvIrCUo6HrhzWkp_b9A!2m2!1d50.92809!2d7.09777!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.92809,7.09777,3a,75y,90t/data=!3m4!1e1!3m2!1saO4dvIrCUo6HrhzWkp_b9A!2e0'
    },
    {//4025 ウェスト・レイク・チャンネル・ロード (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg29av-tg2eGjIPolzxIGHA!2m2!1d42.67026!2d-113.08906!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.67026,-113.08906,3a,75y,90t/data=!3m4!1e1!3m2!1sg29av-tg2eGjIPolzxIGHA!2e0'
    },
    {//コムニスチチェスカヤ・ウーリツァ (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYnXQV5nPIeS3QIP_LfszsA!2m2!1d56.74373!2d85.38875!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.74373,85.38875,3a,75y,90t/data=!3m4!1e1!3m2!1sYnXQV5nPIeS3QIP_LfszsA!2e0'
    },
    {//ドルフ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJwg4-UKi0rOBqFOJ_Ui8vA!2m2!1d47.15675!2d7.63936!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.15675,7.63936,3a,75y,90t/data=!3m4!1e1!3m2!1sJwg4-UKi0rOBqFOJ_Ui8vA!2e0'
    },
    {//17 ブロードウェイ (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sexvwixZK6uy14tgpL68tzA!2m2!1d53.54678!2d-1.50161!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.54678,-1.50161,3a,75y,90t/data=!3m4!1e1!3m2!1sexvwixZK6uy14tgpL68tzA!2e0'
    },
    {//N17 (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sA91pUpiDIppPUljMLowTdA!2m2!1d54.03011!2d-8.75619!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.03011,-8.75619,3a,75y,90t/data=!3m4!1e1!3m2!1sA91pUpiDIppPUljMLowTdA!2e0'
    },
    {//ブリャンスク (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDtZDE4ePnujUJNyiU270DA!2m2!1d53.37119!2d34.0529!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.37119,34.0529,3a,75y,90t/data=!3m4!1e1!3m2!1sDtZDE4ePnujUJNyiU270DA!2e0'
    },
    {//アラー＝チャンディ＝コイルワー・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9TjF9vzzBlOHDQRFnPvj_A!2m2!1d25.56807!2d84.69317!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.56807,84.69317,3a,75y,90t/data=!3m4!1e1!3m2!1s9TjF9vzzBlOHDQRFnPvj_A!2e0'
    },
    {//パラナ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4Dvs0SR_7Mc6YY-TBmXHcg!2m2!1d-24.73101!2d-51.35825!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.73101,-51.35825,3a,75y,90t/data=!3m4!1e1!3m2!1s4Dvs0SR_7Mc6YY-TBmXHcg!2e0'
    },
    {//1240 Estr. Gilberto Palú (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTw2iQ8e1j0IiSBaYzkjPRw!2m2!1d-25.78374!2d-49.31016!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.78374,-49.31016,3a,75y,90t/data=!3m4!1e1!3m2!1sTw2iQ8e1j0IiSBaYzkjPRw!2e0'
    },
    {//52 ペーター＝ゲーリング通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snh9S0EVsPbRCMR56xaVYsA!2m2!1d52.58621!2d13.89316!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.58621,13.89316,3a,75y,90t/data=!3m4!1e1!3m2!1snh9S0EVsPbRCMR56xaVYsA!2e0'
    },
    {//41 SR56 (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si6TihSxO38iu-LXUatnZew!2m2!1d45.93509!2d13.54777!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.93509,13.54777,3a,75y,90t/data=!3m4!1e1!3m2!1si6TihSxO38iu-LXUatnZew!2e0'
    },
    {//6 ティネンポット通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRXkAs_1vjRhIrJC7sejbJw!2m2!1d50.95264!2d3.20741!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.95264,3.20741,3a,75y,90t/data=!3m4!1e1!3m2!1sRXkAs_1vjRhIrJC7sejbJw!2e0'
    },
    {//ハルスベリ, エレブルー (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4J3QJ5XC8D_sPv6y1v2yCg!2m2!1d59.05411!2d15.13598!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.05411,15.13598,3a,75y,90t/data=!3m4!1e1!3m2!1s4J3QJ5XC8D_sPv6y1v2yCg!2e0'
    },
    {//2706 ブライトン・パーク (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVzhASLcINvcSuT-3ycqocA!2m2!1d29.45447!2d-98.35038!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.45447,-98.35038,3a,75y,90t/data=!3m4!1e1!3m2!1sVzhASLcINvcSuT-3ycqocA!2e0'
    },
    {//サン・パウロ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKtwuUG00t6y_Cx_w14w90w!2m2!1d-22.66542!2d-44.87906!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.66542,-44.87906,3a,75y,90t/data=!3m4!1e1!3m2!1sKtwuUG00t6y_Cx_w14w90w!2e0'
    },
    {//A4 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK36TzYPHRPjdA1EsmyI-gw!2m2!1d50.14286!2d19.44777!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.14286,19.44777,3a,75y,90t/data=!3m4!1e1!3m2!1sK36TzYPHRPjdA1EsmyI-gw!2e0'
    },
    {//18 ウーリツァ・チカロヴァ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szgsT1efnRK5-EEYUzQtl3w!2m2!1d59.54576!2d30.88866!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.54576,30.88866,3a,75y,90t/data=!3m4!1e1!3m2!1szgsT1efnRK5-EEYUzQtl3w!2e0'
    },
    {//クレア (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFUaZiw_aBSqeFkmn8Jg-aw!2m2!1d52.99841!2d-8.58092!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.99841,-8.58092,3a,75y,90t/data=!3m4!1e1!3m2!1sFUaZiw_aBSqeFkmn8Jg-aw!2e0'
    },
    {//26 シュテンドルファー通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2afd_Z6n71_JWTFo1brvRA!2m2!1d53.19282!2d8.72392!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.19282,8.72392,3a,75y,90t/data=!3m4!1e1!3m2!1s2afd_Z6n71_JWTFo1brvRA!2e0'
    },
    {//Hringvegur (アイスランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sW9BkBIMDB72GjEuXYlfgdA!2m2!1d64.4313!2d-21.95729!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@64.4313,-21.95729,3a,75y,90t/data=!3m4!1e1!3m2!1sW9BkBIMDB72GjEuXYlfgdA!2e0'
    },
    {//阿久比町, 愛知県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1so76VSnI3KWUh5zYMyoj0mQ!2m2!1d34.9416!2d136.9069!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.9416,136.9069,3a,75y,90t/data=!3m4!1e1!3m2!1so76VSnI3KWUh5zYMyoj0mQ!2e0'
    },
    {//BR-471 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7nrp5gBQqWBLQ4D_-M9CVw!2m2!1d-31.5457!2d-52.56503!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.5457,-52.56503,3a,75y,90t/data=!3m4!1e1!3m2!1s7nrp5gBQqWBLQ4D_-M9CVw!2e0'
    },
    {//BR-429 (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx_wLpuW7tpBW3AkVH6xgbA!2m2!1d-11.20055!2d-61.92744!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.20055,-61.92744,3a,75y,90t/data=!3m4!1e1!3m2!1sx_wLpuW7tpBW3AkVH6xgbA!2e0'
    },
    {//1684 イースト・ハーデン・ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sur8XSP5Owg0tNaypXkRoWw!2m2!1d36.0475!2d-79.36549!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.0475,-79.36549,3a,75y,90t/data=!3m4!1e1!3m2!1sur8XSP5Owg0tNaypXkRoWw!2e0'
    },
    {//モンテ・デ・ブレーニャ (カナリア諸島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5vZRVpFtp5LK3UA2YjwbVA!2m2!1d28.62258!2d-17.7624!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.62258,-17.7624,3a,75y,90t/data=!3m4!1e1!3m2!1s5vZRVpFtp5LK3UA2YjwbVA!2e0'
    },
    {//29 ブル・ド・ラ・リヴィエール (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saTQHhjUVY8vWVGIMiBJPXw!2m2!1d48.0428!2d-68.59889!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.0428,-68.59889,3a,75y,90t/data=!3m4!1e1!3m2!1saTQHhjUVY8vWVGIMiBJPXw!2e0'
    },
    {//1741 クアトロ・デ・ジューリョ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF_HwXSYGyy_c4IQtERIM1g!2m2!1d-12.73437!2d-56.51547!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.73437,-56.51547,3a,75y,90t/data=!3m4!1e1!3m2!1sF_HwXSYGyy_c4IQtERIM1g!2e0'
    },
    {//メーオー (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sS_AOmik0AavEJ6Hb6BB_2A!2m2!1d54.15294!2d-9.21332!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.15294,-9.21332,3a,75y,90t/data=!3m4!1e1!3m2!1sS_AOmik0AavEJ6Hb6BB_2A!2e0'
    },
    {//4079 マスコーカ・ロード 169 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWptLH-KCocsq1hXFo7tvcg!2m2!1d45.09746!2d-79.64067!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.09746,-79.64067,3a,75y,90t/data=!3m4!1e1!3m2!1sWptLH-KCocsq1hXFo7tvcg!2e0'
    },
    {//マト・グロッソ・ド・スル州 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snAIoJSGY9OrIzemXG8UVRg!2m2!1d-22.65909!2d-55.18287!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.65909,-55.18287,3a,75y,90t/data=!3m4!1e1!3m2!1snAIoJSGY9OrIzemXG8UVRg!2e0'
    },
    {//西ベンガル (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqFdh9K2vVZiqLaR-SeX7eQ!2m2!1d26.40455!2d89.42227!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.40455,89.42227,3a,75y,90t/data=!3m4!1e1!3m2!1sqFdh9K2vVZiqLaR-SeX7eQ!2e0'
    },
    {//サン・パウロ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjk1hhmzelyAZQqfA6Cmn5w!2m2!1d-21.42311!2d-46.73266!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.42311,-46.73266,3a,75y,90t/data=!3m4!1e1!3m2!1sjk1hhmzelyAZQqfA6Cmn5w!2e0'
    },
    {//62 Faluvägen (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGtUnT_6OUF0pCT6T8ecu3A!2m2!1d60.54128!2d16.27118!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.54128,16.27118,3a,75y,90t/data=!3m4!1e1!3m2!1sGtUnT_6OUF0pCT6T8ecu3A!2e0'
    },
    {//45 マイゼンブッシュ (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZfMIkWl8BBlijC3pFK7Hiw!2m2!1d52.41504!2d13.22024!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.41504,13.22024,3a,75y,90t/data=!3m4!1e1!3m2!1sZfMIkWl8BBlijC3pFK7Hiw!2e0'
    },
    {//JAL 401 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJQoC3m6zUliH-LjCijFweQ!2m2!1d19.88063!2d-103.58468!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.88063,-103.58468,3a,75y,90t/data=!3m4!1e1!3m2!1sJQoC3m6zUliH-LjCijFweQ!2e0'
    },
    {//Макаровка, モルドヴィア共和国 (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szdMKmX5_SieOhILrJwxXVg!2m2!1d54.15696!2d45.26582!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.15696,45.26582,3a,75y,90t/data=!3m4!1e1!3m2!1szdMKmX5_SieOhILrJwxXVg!2e0'
    },
    {//11 Moberg skogsväg (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8i9CnMHH37c88KheJ8i4HQ!2m2!1d62.96556!2d21.56625!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.96556,21.56625,3a,75y,90t/data=!3m4!1e1!3m2!1s8i9CnMHH37c88KheJ8i4HQ!2e0'
    },
    {//29 вулиця Солдатської слави (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCnC8QsQ-lPwuzwXo9K82Gw!2m2!1d50.86843!2d32.40272!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.86843,32.40272,3a,75y,90t/data=!3m4!1e1!3m2!1sCnC8QsQ-lPwuzwXo9K82Gw!2e0'
    },
    {//130 ピー・リッジ・ハイウェイ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSDzZxtwQyj3leRIxhm6myg!2m2!1d34.81373!2d-81.58937!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.81373,-81.58937,3a,75y,90t/data=!3m4!1e1!3m2!1sSDzZxtwQyj3leRIxhm6myg!2e0'
    },
    {//Google マップ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1Wli-P8_ImLpCkN9qGQzIA!2m2!1d-29.18491!2d30.00718!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.18491,30.00718,3a,75y,90t/data=!3m4!1e1!3m2!1s1Wli-P8_ImLpCkN9qGQzIA!2e0'
    },
    {//グラース, プロバンス＝アルプ＝コートダジュール (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSvfzX3f7LHJdjs3K-msm8A!2m2!1d43.6339!2d6.95237!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.6339,6.95237,3a,75y,90t/data=!3m4!1e1!3m2!1sSvfzX3f7LHJdjs3K-msm8A!2e0'
    },
    {//タラカン, 北カリマンタン (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svwAui4KkrVnro0d5gQlffQ!2m2!1d3.33513!2d117.57182!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@3.33513,117.57182,3a,75y,90t/data=!3m4!1e1!3m2!1svwAui4KkrVnro0d5gQlffQ!2e0'
    },
    {//41 コンバッテンティ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7snOS43jJZdsZPjCxC2k0Q!2m2!1d41.17407!2d16.14038!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.17407,16.14038,3a,75y,90t/data=!3m4!1e1!3m2!1s7snOS43jJZdsZPjCxC2k0Q!2e0'
    },
    {//38 ヴァルジェラ通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stDER9f5yaepMy_cqc1aKJQ!2m2!1d44.93023!2d8.21769!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.93023,8.21769,3a,75y,90t/data=!3m4!1e1!3m2!1stDER9f5yaepMy_cqc1aKJQ!2e0'
    },
    {//Jl. Halilulik - Atambua (小スンダ列島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0W91Hjdk5QSHrcOjcNXghg!2m2!1d-9.23623!2d124.86485!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.23623,124.86485,3a,75y,90t/data=!3m4!1e1!3m2!1s0W91Hjdk5QSHrcOjcNXghg!2e0'
    },
    {//1 ラ・ピーニャ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQw6Ia64dxWVAlCTauxAEdw!2m2!1d40.70439!2d14.51406!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.70439,14.51406,3a,75y,90t/data=!3m4!1e1!3m2!1sQw6Ia64dxWVAlCTauxAEdw!2e0'
    },
    {//ルタ・プロビンシアル 49S (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMVKPDQQZnOfK43EzWcbppQ!2m2!1d-31.89964!2d-61.83681!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.89964,-61.83681,3a,75y,90t/data=!3m4!1e1!3m2!1sMVKPDQQZnOfK43EzWcbppQ!2e0'
    },
    {//ノービサード, ボイボディナ (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stdTVQOY5E4TWQGrLgsof3A!2m2!1d45.24111!2d19.83539!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.24111,19.83539,3a,75y,90t/data=!3m4!1e1!3m2!1stdTVQOY5E4TWQGrLgsof3A!2e0'
    },
    {//MP SH 52 (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sutNtaLZho8jhD1LG7AB7LA!2m2!1d24.34655!2d81.48345!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.34655,81.48345,3a,75y,90t/data=!3m4!1e1!3m2!1sutNtaLZho8jhD1LG7AB7LA!2e0'
    },
    {//А162 (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVOyxLGsMJ2Mz-0w50b94nQ!2m2!1d51.15238!2d90.60914!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.15238,90.60914,3a,75y,90t/data=!3m4!1e1!3m2!1sVOyxLGsMJ2Mz-0w50b94nQ!2e0'
    },
    {//110 DJ177A (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4TrhWnny5QyasmfJ-GR9Yw!2m2!1d47.43035!2d25.75564!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.43035,25.75564,3a,75y,90t/data=!3m4!1e1!3m2!1s4TrhWnny5QyasmfJ-GR9Yw!2e0'
    },
    {//Vrnjačka Banja (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQfoJcU_eBJ-rFL9AgGPx9A!2m2!1d43.62694!2d20.89368!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.62694,20.89368,3a,75y,90t/data=!3m4!1e1!3m2!1sQfoJcU_eBJ-rFL9AgGPx9A!2e0'
    },
    {//サッスナージュ, オーヴェルニュ＝ローヌ＝アルプ (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smRhkdaJoLD8ANCApFiqwZg!2m2!1d45.21234!2d5.66491!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.21234,5.66491,3a,75y,90t/data=!3m4!1e1!3m2!1smRhkdaJoLD8ANCApFiqwZg!2e0'
    },
    {//D8 (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saIZzAV5m2djp3c4pFtXIYg!2m2!1d43.15867!2d17.2421!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.15867,17.2421,3a,75y,90t/data=!3m4!1e1!3m2!1saIZzAV5m2djp3c4pFtXIYg!2e0'
    },
    {//CV-919 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQIk0Moz7w_9SgBWUrpkRnA!2m2!1d38.10194!2d-0.90148!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.10194,-0.90148,3a,75y,90t/data=!3m4!1e1!3m2!1sQIk0Moz7w_9SgBWUrpkRnA!2e0'
    },
    {//62 Shag Point Rd (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swtLpHn5tLbOE8BwTwdtFMg!2m2!1d-45.46139!2d170.81552!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-45.46139,170.81552,3a,75y,90t/data=!3m4!1e1!3m2!1swtLpHn5tLbOE8BwTwdtFMg!2e0'
    },
    {//128 25通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_XLckm404EJ6SnknWMuaDw!2m2!1d20.74608!2d-89.47841!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.74608,-89.47841,3a,75y,90t/data=!3m4!1e1!3m2!1s_XLckm404EJ6SnknWMuaDw!2e0'
    },
    {//A-447 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swTK3Le-7aORAsSwGULvr3g!2m2!1d38.25793!2d-5.41755!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.25793,-5.41755,3a,75y,90t/data=!3m4!1e1!3m2!1swTK3Le-7aORAsSwGULvr3g!2e0'
    },
    {//マハーラーナ・プラタップ・シン・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHFyIwD0_x8unbgVuerjAdQ!2m2!1d27.18617!2d73.74324!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.18617,73.74324,3a,75y,90t/data=!3m4!1e1!3m2!1sHFyIwD0_x8unbgVuerjAdQ!2e0'
    },
    {//12302 コネリー・ウェイ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9wCi7fDVusI1OHnnc9CtSA!2m2!1d35.37246!2d-119.13909!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.37246,-119.13909,3a,75y,90t/data=!3m4!1e1!3m2!1s9wCi7fDVusI1OHnnc9CtSA!2e0'
    },
    {//Gumare, 北西部 (ボツワナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s54KgC9oB4s-_L1LejmaNrw!2m2!1d-19.37051!2d22.15539!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.37051,22.15539,3a,75y,90t/data=!3m4!1e1!3m2!1s54KgC9oB4s-_L1LejmaNrw!2e0'
    },
    {//メキシコ＝ベラクルス自動車道 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ1yshpgZuwJHmma_YZPB_g!2m2!1d19.54628!2d-98.74949!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.54628,-98.74949,3a,75y,90t/data=!3m4!1e1!3m2!1sQ1yshpgZuwJHmma_YZPB_g!2e0'
    },
    {//26374 サウス・サツマ・ロード (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smWI6WkMSzm8qxhSHLvl44A!2m2!1d30.41811!2d-90.7717!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.41811,-90.7717,3a,75y,90t/data=!3m4!1e1!3m2!1smWI6WkMSzm8qxhSHLvl44A!2e0'
    },
    {//アーラーシュテット, ニーダーザクセン (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZ0fI_183vh8reDNgQw0OkA!2m2!1d53.38379!2d9.42069!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.38379,9.42069,3a,75y,90t/data=!3m4!1e1!3m2!1sZ0fI_183vh8reDNgQw0OkA!2e0'
    },
    {//3638 タンクレド・ネーヴェス通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqjjHcIu38-KH-SRi50RY9g!2m2!1d-25.47637!2d-53.6144!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.47637,-53.6144,3a,75y,90t/data=!3m4!1e1!3m2!1sqjjHcIu38-KH-SRi50RY9g!2e0'
    },
    {//33 ノリッジ・ロード (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1supF4ZkXnhde7sE4a1DtOOA!2m2!1d52.53967!2d1.36994!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.53967,1.36994,3a,75y,90t/data=!3m4!1e1!3m2!1supF4ZkXnhde7sE4a1DtOOA!2e0'
    },
    {//Prästagårdsvägen (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s53FR5-FIcCVNKnEBdcQGJg!2m2!1d57.5025!2d15.15349!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@57.5025,15.15349,3a,75y,90t/data=!3m4!1e1!3m2!1s53FR5-FIcCVNKnEBdcQGJg!2e0'
    },
    {//126 ホークテ・カデイク (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shyXCcOE6PHB6mq7H8uxggg!2m2!1d52.36894!2d4.91681!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.36894,4.91681,3a,75y,90t/data=!3m4!1e1!3m2!1shyXCcOE6PHB6mq7H8uxggg!2e0'
    },
    {//29 スクーナー・ウェイ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX1Os1V612MG9vc9SX75TIw!2m2!1d50.85413!2d-1.28377!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.85413,-1.28377,3a,75y,90t/data=!3m4!1e1!3m2!1sX1Os1V612MG9vc9SX75TIw!2e0'
    },
    {//197 Niemikyläntie (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_ayWB7X2qeZyiTiJek17_g!2m2!1d63.00502!2d28.64282!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@63.00502,28.64282,3a,75y,90t/data=!3m4!1e1!3m2!1s_ayWB7X2qeZyiTiJek17_g!2e0'
    },
    {//38 Р10 (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgSVtu9c5nB02vjH8sxzq4g!2m2!1d49.20117!2d32.44941!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.20117,32.44941,3a,75y,90t/data=!3m4!1e1!3m2!1sgSVtu9c5nB02vjH8sxzq4g!2e0'
    },
    {//アンタルヤ (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqh4cAgDG1i7rKpi7LQcGww!2m2!1d36.60113!2d31.80413!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.60113,31.80413,3a,75y,90t/data=!3m4!1e1!3m2!1sqh4cAgDG1i7rKpi7LQcGww!2e0'
    },
    {//18750 ハードスクラブル・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-3OYun7vmY1JWP2t1ALUsQ!2m2!1d38.59588!2d-75.42157!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.59588,-75.42157,3a,75y,90t/data=!3m4!1e1!3m2!1s-3OYun7vmY1JWP2t1ALUsQ!2e0'
    },
    {//E65 (アルバニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn_06JaYBSUrMXTLlApJKYA!2m2!1d41.47611!2d20.81626!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.47611,20.81626,3a,75y,90t/data=!3m4!1e1!3m2!1sn_06JaYBSUrMXTLlApJKYA!2e0'
    },
    {//1465 Township Hwy 71 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGc1a-XanC3k3CuRExxGfUg!2m2!1d41.10219!2d-82.76851!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.10219,-82.76851,3a,75y,90t/data=!3m4!1e1!3m2!1sGc1a-XanC3k3CuRExxGfUg!2e0'
    },
    {//OAX 15 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0HR6PPR69aquGZzh56sUdg!2m2!1d17.64149!2d-97.98303!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.64149,-97.98303,3a,75y,90t/data=!3m4!1e1!3m2!1s0HR6PPR69aquGZzh56sUdg!2e0'
    },
    {//11 ラッファエッロ・サンツィオ通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTyqhZ1tv9G8yvEXMZBM3-Q!2m2!1d43.6078!2d13.50623!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.6078,13.50623,3a,75y,90t/data=!3m4!1e1!3m2!1sTyqhZ1tv9G8yvEXMZBM3-Q!2e0'
    },
    {//97 イタリア通り (シチリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_B9xhLQk2e-9Kka_yzqyfQ!2m2!1d37.17707!2d15.13101!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.17707,15.13101,3a,75y,90t/data=!3m4!1e1!3m2!1s_B9xhLQk2e-9Kka_yzqyfQ!2e0'
    },
    {//Kızılcahamam, アンカラ県 (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saLj2my-GT13ZsuN9Xom5qA!2m2!1d40.47483!2d32.65471!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.47483,32.65471,3a,75y,90t/data=!3m4!1e1!3m2!1saLj2my-GT13ZsuN9Xom5qA!2e0'
    },
    {//7 B4393 (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0GDayGEBneKS5fFhphg25Q!2m2!1d52.73343!2d-3.00141!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.73343,-3.00141,3a,75y,90t/data=!3m4!1e1!3m2!1s0GDayGEBneKS5fFhphg25Q!2e0'
    },
    {//663 サルミエント (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSNdVvP4OIolM1LkFd0D_ZA!2m2!1d-34.94188!2d-58.61318!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.94188,-58.61318,3a,75y,90t/data=!3m4!1e1!3m2!1sSNdVvP4OIolM1LkFd0D_ZA!2e0'
    },
    {//R-168 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJNAGu7EtcgVMEYYgUjPXiA!2m2!1d-37.68756!2d-72.55877!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-37.68756,-72.55877,3a,75y,90t/data=!3m4!1e1!3m2!1sJNAGu7EtcgVMEYYgUjPXiA!2e0'
    },
    {//アム・アイスヴァイアー (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0HKUQs5jGtLzWNkQQQYKXQ!2m2!1d47.9601!2d11.18691!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.9601,11.18691,3a,75y,90t/data=!3m4!1e1!3m2!1s0HKUQs5jGtLzWNkQQQYKXQ!2e0'
    },
    {//ラ・シャペル＝アニヨン, オーヴェルニュ＝ローヌ＝アルプ (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjx-B2J6Uy4AdDPBmv-Iydw!2m2!1d45.63283!2d3.606!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.63283,3.606,3a,75y,90t/data=!3m4!1e1!3m2!1sjx-B2J6Uy4AdDPBmv-Iydw!2e0'
    },
    {//BR-242 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQbB1EEY5dLL0XrENnA7DpA!2m2!1d-12.41319!2d-46.45852!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-12.41319,-46.45852,3a,75y,90t/data=!3m4!1e1!3m2!1sQbB1EEY5dLL0XrENnA7DpA!2e0'
    },
    {//22 ルイス・デ・ラ・セルダ通り (カナリア諸島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snobHmtBGCOe66iArn5sYHg!2m2!1d28.02418!2d-15.41493!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.02418,-15.41493,3a,75y,90t/data=!3m4!1e1!3m2!1snobHmtBGCOe66iArn5sYHg!2e0'
    },
    {//シタラパッカム, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9XWauzyCcl2LDcxh5jeCCw!2m2!1d12.87866!2d80.19135!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.87866,80.19135,3a,75y,90t/data=!3m4!1e1!3m2!1s9XWauzyCcl2LDcxh5jeCCw!2e0'
    },
    {//280 ヴィンテ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7szXDNQEARo5AA41ORl_Uw!2m2!1d-8.98148!2d-48.17016!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.98148,-48.17016,3a,75y,90t/data=!3m4!1e1!3m2!1s7szXDNQEARo5AA41ORl_Uw!2e0'
    },
    {//ミル・クリーク・ドライブ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sloLMJLqSWy8xVN3pR-gMUg!2m2!1d40.79035!2d-74.05103!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.79035,-74.05103,3a,75y,90t/data=!3m4!1e1!3m2!1sloLMJLqSWy8xVN3pR-gMUg!2e0'
    },
    {//Р328 (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZ9BtoJwppFWHGOOc7Q8SkQ!2m2!1d55.2464!2d63.2676!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.2464,63.2676,3a,75y,90t/data=!3m4!1e1!3m2!1sZ9BtoJwppFWHGOOc7Q8SkQ!2e0'
    },
    {//'S' 656 (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sETM8L_8KzKHzi4JY0l2h-A!2m2!1d59.66666!2d12.54029!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.66666,12.54029,3a,75y,90t/data=!3m4!1e1!3m2!1sETM8L_8KzKHzi4JY0l2h-A!2e0'
    },
    {//リオ・ネグロ (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIhpp9lJwQHJA3ypYaQM6zw!2m2!1d-32.60692!2d-56.79082!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.60692,-56.79082,3a,75y,90t/data=!3m4!1e1!3m2!1sIhpp9lJwQHJA3ypYaQM6zw!2e0'
    },
    {//チャッティスガル (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFWvNzeK_uj_igmv-tbYXDg!2m2!1d22.28933!2d82.16838!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.28933,82.16838,3a,75y,90t/data=!3m4!1e1!3m2!1sFWvNzeK_uj_igmv-tbYXDg!2e0'
    },
    {//ガリシア州 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIL7-z0JsD1WHynr6tFwKGQ!2m2!1d42.28817!2d-8.03607!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.28817,-8.03607,3a,75y,90t/data=!3m4!1e1!3m2!1sIL7-z0JsD1WHynr6tFwKGQ!2e0'
    },
    {//1102 パリッシュ・ドライブ (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svXKe1vFKyKU3tufMZuTiCA!2m2!1d39.07125!2d-77.12926!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.07125,-77.12926,3a,75y,90t/data=!3m4!1e1!3m2!1svXKe1vFKyKU3tufMZuTiCA!2e0'
    },
    {//26 オウテイロ通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBIVT7_qWwkRuJMlwqXefjg!2m2!1d40.28169!2d-7.11888!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.28169,-7.11888,3a,75y,90t/data=!3m4!1e1!3m2!1sBIVT7_qWwkRuJMlwqXefjg!2e0'
    },
    {//メヒコ州 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxII5JblCo8IRpKSZliqwVw!2m2!1d18.97927!2d-99.93499!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.97927,-99.93499,3a,75y,90t/data=!3m4!1e1!3m2!1sxII5JblCo8IRpKSZliqwVw!2e0'
    },
    {//ストックホルム (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP6d3ryMbu7AkdFbxbOQsjg!2m2!1d59.39027!2d17.81442!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.39027,17.81442,3a,75y,90t/data=!3m4!1e1!3m2!1sP6d3ryMbu7AkdFbxbOQsjg!2e0'
    },
    {//ストーン・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNUxXTr1b7COR6z51z5JclA!2m2!1d44.39522!2d-103.48151!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.39522,-103.48151,3a,75y,90t/data=!3m4!1e1!3m2!1sNUxXTr1b7COR6z51z5JclA!2e0'
    },
    {//MS-430 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSOM1Kaf3Q_F1qRam41VA9Q!2m2!1d-19.37682!2d-54.97516!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.37682,-54.97516,3a,75y,90t/data=!3m4!1e1!3m2!1sSOM1Kaf3Q_F1qRam41VA9Q!2e0'
    },
    {//41 フォンテーヌ通り (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUO3NIejkMZyJXbehU7fl2g!2m2!1d45.13804!2d-72.3763!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.13804,-72.3763,3a,75y,90t/data=!3m4!1e1!3m2!1sUO3NIejkMZyJXbehU7fl2g!2e0'
    },
    {//12 クラウバスグラーベン通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8xhnmiCKYdgF4YuHJxQj9w!2m2!1d47.32853!2d14.90184!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.32853,14.90184,3a,75y,90t/data=!3m4!1e1!3m2!1s8xhnmiCKYdgF4YuHJxQj9w!2e0'
    },
    {//Opština Rožaje (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCThBB12Pry51v9OmTWoWVw!2m2!1d42.84356!2d20.13082!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.84356,20.13082,3a,75y,90t/data=!3m4!1e1!3m2!1sCThBB12Pry51v9OmTWoWVw!2e0'
    },
    {//ベール・ロード (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgwbNTf2iLklmx3xEIfLYFA!2m2!1d51.19554!2d0.28419!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.19554,0.28419,3a,75y,90t/data=!3m4!1e1!3m2!1sgwbNTf2iLklmx3xEIfLYFA!2e0'
    },
    {//OH-73 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s387aDgV2XUy43BaX-_fO6w!2m2!1d39.46304!2d-83.81564!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.46304,-83.81564,3a,75y,90t/data=!3m4!1e1!3m2!1s387aDgV2XUy43BaX-_fO6w!2e0'
    },
    {//DW302 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBpQGMxuVfQ8BYgqIy16kXQ!2m2!1d52.25045!2d15.8604!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.25045,15.8604,3a,75y,90t/data=!3m4!1e1!3m2!1sBpQGMxuVfQ8BYgqIy16kXQ!2e0'
    },
    {//セキオトフスカヤ・ウーリツァ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1gqb4VBplZMp4Fg2I8Cx2A!2m2!1d54.46071!2d36.23746!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.46071,36.23746,3a,75y,90t/data=!3m4!1e1!3m2!1s1gqb4VBplZMp4Fg2I8Cx2A!2e0'
    },
    {//140 DC42 (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIz3fu43rfCH3m9F7htUQ0A!2m2!1d46.7846!2d23.8193!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.7846,23.8193,3a,75y,90t/data=!3m4!1e1!3m2!1sIz3fu43rfCH3m9F7htUQ0A!2e0'
    },
    {//モスクワ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWhO5SRUhFrbnu8Yw376k0A!2m2!1d55.89144!2d37.57676!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.89144,37.57676,3a,75y,90t/data=!3m4!1e1!3m2!1sWhO5SRUhFrbnu8Yw376k0A!2e0'
    },
    {//ジューリア・フランス通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLouTwgWteA8uhbyYZjwwbA!2m2!1d-18.97781!2d-47.46154!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.97781,-47.46154,3a,75y,90t/data=!3m4!1e1!3m2!1sLouTwgWteA8uhbyYZjwwbA!2e0'
    },
    {//30 ボーデルシュヴィング通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soBKnv00KaXhCKKXfe4g8jQ!2m2!1d51.92156!2d7.84982!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.92156,7.84982,3a,75y,90t/data=!3m4!1e1!3m2!1soBKnv00KaXhCKKXfe4g8jQ!2e0'
    },
    {//4324 ホームウッド・レーン (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVUMAjHn7tjSx8TI7ywKejg!2m2!1d27.9399!2d-82.03792!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.9399,-82.03792,3a,75y,90t/data=!3m4!1e1!3m2!1sVUMAjHn7tjSx8TI7ywKejg!2e0'
    },
    {//シティ・オブ・タブク, コルディリラ管理地区 (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6mT1snplv7iayDz7OcqcIA!2m2!1d17.39184!2d121.48742!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.39184,121.48742,3a,75y,90t/data=!3m4!1e1!3m2!1s6mT1snplv7iayDz7OcqcIA!2e0'
    },
    {//11 Warburton St (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYmw-bFiYtczv9ymV7cbXdw!2m2!1d-42.47241!2d171.18579!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-42.47241,171.18579,3a,75y,90t/data=!3m4!1e1!3m2!1sYmw-bFiYtczv9ymV7cbXdw!2e0'
    },
    {//ムリアス・デ・パレーデス, カスティーリャ・イ・レオン (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siG01ERcrKiPaXgHv7Lde8g!2m2!1d42.80844!2d-6.22367!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.80844,-6.22367,3a,75y,90t/data=!3m4!1e1!3m2!1siG01ERcrKiPaXgHv7Lde8g!2e0'
    },
    {//ドッソル, アティラウ (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slnfQRyQ8-g3cd8sX47GhUA!2m2!1d47.54531!2d52.97719!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.54531,52.97719,3a,75y,90t/data=!3m4!1e1!3m2!1slnfQRyQ8-g3cd8sX47GhUA!2e0'
    },
    {//AB-2A (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssf5s1-VkA8yaHTYSmvxHKw!2m2!1d50.59746!2d-113.88162!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.59746,-113.88162,3a,75y,90t/data=!3m4!1e1!3m2!1ssf5s1-VkA8yaHTYSmvxHKw!2e0'
    },
    {//ハダースフィールド・ロード (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbC7dXZh9ujswiP30o0J1bA!2m2!1d53.52026!2d-2.02586!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.52026,-2.02586,3a,75y,90t/data=!3m4!1e1!3m2!1sbC7dXZh9ujswiP30o0J1bA!2e0'
    },
    {//Sistem Lingkaran-Lebuhraya Kajang (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXcka7v8i3Rpp68_gLwxIdQ!2m2!1d2.98427!2d101.82635!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@2.98427,101.82635,3a,75y,90t/data=!3m4!1e1!3m2!1sXcka7v8i3Rpp68_gLwxIdQ!2e0'
    },
    {//RO-383 (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1vTImXYM9c9tr82rv0y7RA!2m2!1d-11.47994!2d-61.47443!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.47994,-61.47443,3a,75y,90t/data=!3m4!1e1!3m2!1s1vTImXYM9c9tr82rv0y7RA!2e0'
    },
    {//1507 ローヌ通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srw0DGF-_yWFSGQollcjPAw!2m2!1d43.74686!2d5.19834!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.74686,5.19834,3a,75y,90t/data=!3m4!1e1!3m2!1srw0DGF-_yWFSGQollcjPAw!2e0'
    },
    {//ヴェストラン県 (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0l4OAcvs3nVd0SzhzswwSA!2m2!1d60.9278!2d5.0538!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.9278,5.0538,3a,75y,90t/data=!3m4!1e1!3m2!1s0l4OAcvs3nVd0SzhzswwSA!2e0'
    },
    {//ถ. นิตโย (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slBF5G4ggQn5eFwsC84zeDw!2m2!1d17.37988!2d103.75772!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.37988,103.75772,3a,75y,90t/data=!3m4!1e1!3m2!1slBF5G4ggQn5eFwsC84zeDw!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBaxizRBAEakT1xd1ALzMhQ!2m2!1d-21.89981!2d-45.65858!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.89981,-45.65858,3a,75y,90t/data=!3m4!1e1!3m2!1sBaxizRBAEakT1xd1ALzMhQ!2e0'
    },
    {//バラナード＝クッパックカッド・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHJSew_sD0lAcSwAa9WLrbA!2m2!1d9.69628!2d76.3573!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.69628,76.3573,3a,75y,90t/data=!3m4!1e1!3m2!1sHJSew_sD0lAcSwAa9WLrbA!2e0'
    },
    {//ウェスト 2nd ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sziMf7lCxSMS44Wp6ouXUQQ!2m2!1d41.78751!2d-89.69831!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.78751,-89.69831,3a,75y,90t/data=!3m4!1e1!3m2!1sziMf7lCxSMS44Wp6ouXUQQ!2e0'
    },
    {//カムループス, ブリティッシュコロンビア州 (ブリティッシュコロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smmETO5SFLRv0cxx2RWgKSA!2m2!1d50.74085!2d-120.3584!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.74085,-120.3584,3a,75y,90t/data=!3m4!1e1!3m2!1smmETO5SFLRv0cxx2RWgKSA!2e0'
    },
    {//ムニチピオ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sad8tht9gs0CiYYhN0G15jA!2m2!1d41.27245!2d14.68022!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.27245,14.68022,3a,75y,90t/data=!3m4!1e1!3m2!1sad8tht9gs0CiYYhN0G15jA!2e0'
    },
    {//エンストーン, イングランド (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sy753ENCnjZuBoymuStY00A!2m2!1d51.92188!2d-1.45406!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.92188,-1.45406,3a,75y,90t/data=!3m4!1e1!3m2!1sy753ENCnjZuBoymuStY00A!2e0'
    },
    {//マグダレナ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sstqMrRJlJspL1KsMR4LNZA!2m2!1d10.01137!2d-74.66146!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.01137,-74.66146,3a,75y,90t/data=!3m4!1e1!3m2!1sstqMrRJlJspL1KsMR4LNZA!2e0'
    },
    {//A3 (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDBTvmwjuC9bJbHhgXV7j4Q!2m2!1d44.83427!2d20.27347!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.83427,20.27347,3a,75y,90t/data=!3m4!1e1!3m2!1sDBTvmwjuC9bJbHhgXV7j4Q!2e0'
    },
    {//リッチフィールド, イリノイ州 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scZTOl4oxHlyyc4egAEYILg!2m2!1d39.17512!2d-89.68492!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.17512,-89.68492,3a,75y,90t/data=!3m4!1e1!3m2!1scZTOl4oxHlyyc4egAEYILg!2e0'
    },
    {//41 シスタニョネ通り (サルデーニャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slW7bYSx7JZhEZ2CHJn_QDA!2m2!1d40.28601!2d8.48531!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.28601,8.48531,3a,75y,90t/data=!3m4!1e1!3m2!1slW7bYSx7JZhEZ2CHJn_QDA!2e0'
    },
    {//トゥーラ州 (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMkgGNx7W7Iku6cmSWQMK9A!2m2!1d53.41572!2d38.67591!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.41572,38.67591,3a,75y,90t/data=!3m4!1e1!3m2!1sMkgGNx7W7Iku6cmSWQMK9A!2e0'
    },
    {//229 17-D通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRimdCHPiKT482Hd-BRosQw!2m2!1d18.64193!2d-91.81523!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.64193,-91.81523,3a,75y,90t/data=!3m4!1e1!3m2!1sRimdCHPiKT482Hd-BRosQw!2e0'
    },
    {//DK41 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smxgltxBegd9GF1py729aeg!2m2!1d50.42071!2d17.46663!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.42071,17.46663,3a,75y,90t/data=!3m4!1e1!3m2!1smxgltxBegd9GF1py729aeg!2e0'
    },
    {//Taborište, シサク＝モスラヴィナ (スロベニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUT2ZNnMuegDtM_BYcp9mTA!2m2!1d45.4002!2d16.30689!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.4002,16.30689,3a,75y,90t/data=!3m4!1e1!3m2!1sUT2ZNnMuegDtM_BYcp9mTA!2e0'
    },
    {//75 オリスターノ通り (サルデーニャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfsbP43DsTTH8Db9-jwL2HQ!2m2!1d39.53589!2d8.63757!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.53589,8.63757,3a,75y,90t/data=!3m4!1e1!3m2!1sfsbP43DsTTH8Db9-jwL2HQ!2e0'
    },
    {//98 Κοιμήσεως Θεοτόκου (ギリシャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shAGAqhwrhXYkn3aysT0E4Q!2m2!1d37.84741!2d21.24644!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.84741,21.24644,3a,75y,90t/data=!3m4!1e1!3m2!1shAGAqhwrhXYkn3aysT0E4Q!2e0'
    },
    {//2 ミツキエビツァ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srbdIOPVcQMBfFzd4yIAeGQ!2m2!1d52.21597!2d22.71003!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.21597,22.71003,3a,75y,90t/data=!3m4!1e1!3m2!1srbdIOPVcQMBfFzd4yIAeGQ!2e0'
    },
    {//16 Jl. Soekarno (スマトラ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slQI_KnJ3QKzDbod4o_eK4A!2m2!1d1.39882!2d97.16146!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.39882,97.16146,3a,75y,90t/data=!3m4!1e1!3m2!1slQI_KnJ3QKzDbod4o_eK4A!2e0'
    },
    {//DJ586 (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8o5QrpJvCcQbxFLg19tzyg!2m2!1d45.36994!2d21.75044!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.36994,21.75044,3a,75y,90t/data=!3m4!1e1!3m2!1s8o5QrpJvCcQbxFLg19tzyg!2e0'
    },
    {//ヴェルヌー＝アン＝ガティンヌ, ヌーヴェル＝アキテーヌ (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEDMF7SjGz4cHkiD5P44knA!2m2!1d46.62121!2d-0.52125!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.62121,-0.52125,3a,75y,90t/data=!3m4!1e1!3m2!1sEDMF7SjGz4cHkiD5P44knA!2e0'
    },
    {//マウント・ジョッキー・ロード (クイーンズランド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbhgNeMpipOJ3LJju8uTfgQ!2m2!1d-27.29788!2d152.16039!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.29788,152.16039,3a,75y,90t/data=!3m4!1e1!3m2!1sbhgNeMpipOJ3LJju8uTfgQ!2e0'
    },
    {//1112 R. Nerval Figueiredo (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sn9vs7nrN7UXayUTUOV4wpQ!2m2!1d-17.6423!2d-41.74212!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-17.6423,-41.74212,3a,75y,90t/data=!3m4!1e1!3m2!1sn9vs7nrN7UXayUTUOV4wpQ!2e0'
    },
    {//1 ルンゴラーゴ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQPJxGU-GC8LlBSyeufVcTg!2m2!1d43.12899!2d12.05449!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.12899,12.05449,3a,75y,90t/data=!3m4!1e1!3m2!1sQPJxGU-GC8LlBSyeufVcTg!2e0'
    },
    {//15 アレクサンドル通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3RndQ_Xd3dKu4Fp4z4yBQw!2m2!1d49.5246!2d5.8891!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.5246,5.8891,3a,75y,90t/data=!3m4!1e1!3m2!1s3RndQ_Xd3dKu4Fp4z4yBQw!2e0'
    },
    {//ヴァルミア・マズーリ県 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sG3Splk4uO65sRlWaGM6Dwg!2m2!1d54.32829!2d20.46538!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.32829,20.46538,3a,75y,90t/data=!3m4!1e1!3m2!1sG3Splk4uO65sRlWaGM6Dwg!2e0'
    },
    {//ティカリ・カード, ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqz54Ygp_uluMv2znjBQQTg!2m2!1d26.93087!2d80.68797!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.93087,80.68797,3a,75y,90t/data=!3m4!1e1!3m2!1sqz54Ygp_uluMv2znjBQQTg!2e0'
    },
    {//4140 オロンガポー - バガロン・ロード (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjBUg8uBC8CmH-ToQHN-9vg!2m2!1d14.85346!2d120.24648!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.85346,120.24648,3a,75y,90t/data=!3m4!1e1!3m2!1sjBUg8uBC8CmH-ToQHN-9vg!2e0'
    },
    {//847 カステロ・ブランコ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sof0ibPgePGflx4502aYtDQ!2m2!1d-7.55268!2d-49.69777!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.55268,-49.69777,3a,75y,90t/data=!3m4!1e1!3m2!1sof0ibPgePGflx4502aYtDQ!2e0'
    },
    {//9620 NS-224 (カナダ大西洋側)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swOdcx0O9wyMKHV8fFj2JwQ!2m2!1d45.11285!2d-63.01148!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.11285,-63.01148,3a,75y,90t/data=!3m4!1e1!3m2!1swOdcx0O9wyMKHV8fFj2JwQ!2e0'
    },
    {//カンポート (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj71OJdkaoCoKpQeYkwSL9Q!2m2!1d10.8607!2d104.41947!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.8607,104.41947,3a,75y,90t/data=!3m4!1e1!3m2!1sj71OJdkaoCoKpQeYkwSL9Q!2e0'
    },
    {//CUV-2172 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYYdxq0j6d5E_yN5at88XZw!2m2!1d40.13945!2d-2.50514!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.13945,-2.50514,3a,75y,90t/data=!3m4!1e1!3m2!1sYYdxq0j6d5E_yN5at88XZw!2e0'
    },
    {//NH 306 (バングラデシュ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBThGTNdD3a1-ryb-kioRAA!2m2!1d24.41128!2d92.72452!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.41128,92.72452,3a,75y,90t/data=!3m4!1e1!3m2!1sBThGTNdD3a1-ryb-kioRAA!2e0'
    },
    {//台南市 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfiLyhSAvv1iULl5vUNqa-A!2m2!1d23.14581!2d120.41797!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.14581,120.41797,3a,75y,90t/data=!3m4!1e1!3m2!1sfiLyhSAvv1iULl5vUNqa-A!2e0'
    },
    {//26 Zavrtnica (スロベニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1mQei0SiEi4Dw-um20Yzbg!2m2!1d45.78614!2d15.07213!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.78614,15.07213,3a,75y,90t/data=!3m4!1e1!3m2!1s1mQei0SiEi4Dw-um20Yzbg!2e0'
    },
    {//イングランド (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWE6VtpTN_MxgHuLI4IXATQ!2m2!1d52.32133!2d-2.3091!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.32133,-2.3091,3a,75y,90t/data=!3m4!1e1!3m2!1sWE6VtpTN_MxgHuLI4IXATQ!2e0'
    },
    {//905 エンリケ・ブルム (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9yh7u4Y0pfjkhdbiBDMoLw!2m2!1d-34.77229!2d-55.22475!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.77229,-55.22475,3a,75y,90t/data=!3m4!1e1!3m2!1s9yh7u4Y0pfjkhdbiBDMoLw!2e0'
    },
    {//2 ジョゼー・サン・ジューニオル通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDlOs8rz71hDroc9JPgJIBg!2m2!1d-21.97226!2d-44.89503!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.97226,-44.89503,3a,75y,90t/data=!3m4!1e1!3m2!1sDlOs8rz71hDroc9JPgJIBg!2e0'
    },
    {//Poljana Vojnićka, カルロヴァカ ズパニーヤ (クロアチア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8TPHl18PPWu8281mbjPbzg!2m2!1d45.31661!2d15.64822!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.31661,15.64822,3a,75y,90t/data=!3m4!1e1!3m2!1s8TPHl18PPWu8281mbjPbzg!2e0'
    },
    {//プーリア (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srw1k6q7dnnNL1y9EGl8ZWg!2m2!1d39.88623!2d18.24048!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.88623,18.24048,3a,75y,90t/data=!3m4!1e1!3m2!1srw1k6q7dnnNL1y9EGl8ZWg!2e0'
    },
    {//647 R. Abdom Viêira (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stxLlZtuvgo5bLwgz-gKFdQ!2m2!1d-3.73022!2d-39.56117!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-3.73022,-39.56117,3a,75y,90t/data=!3m4!1e1!3m2!1stxLlZtuvgo5bLwgz-gKFdQ!2e0'
    },
    {//B185 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMCUte7QUBP1zbQnA9_g8MQ!2m2!1d51.76322!2d11.91133!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.76322,11.91133,3a,75y,90t/data=!3m4!1e1!3m2!1sMCUte7QUBP1zbQnA9_g8MQ!2e0'
    },
    {//Сургут, サマラ (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shm5cLGPHCgqWexEFOsrU1Q!2m2!1d53.92148!2d51.21663!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.92148,51.21663,3a,75y,90t/data=!3m4!1e1!3m2!1shm5cLGPHCgqWexEFOsrU1Q!2e0'
    },
    {//PE-34L (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sE2YhMTN7iVdDM4qzm0lthQ!2m2!1d-15.11314!2d-69.5226!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-15.11314,-69.5226,3a,75y,90t/data=!3m4!1e1!3m2!1sE2YhMTN7iVdDM4qzm0lthQ!2e0'
    },
    {//4373 フィルモ・デ・マットス通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbzRDKjDerqyxKzcFoL41DA!2m2!1d-19.04662!2d-57.64346!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.04662,-57.64346,3a,75y,90t/data=!3m4!1e1!3m2!1sbzRDKjDerqyxKzcFoL41DA!2e0'
    },
    {//サカリヤ (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sukpJbCNZcujhAq9B8u9sfA!2m2!1d41.05042!2d30.78824!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.05042,30.78824,3a,75y,90t/data=!3m4!1e1!3m2!1sukpJbCNZcujhAq9B8u9sfA!2e0'
    },
    {//イングランド (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLfV-pmuow0AqVawGCH3yyA!2m2!1d52.76585!2d1.56358!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.76585,1.56358,3a,75y,90t/data=!3m4!1e1!3m2!1sLfV-pmuow0AqVawGCH3yyA!2e0'
    },
    {//15 NS-366 (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNH6iub1JjIOQpQSf1fvR5g!2m2!1d45.85027!2d-64.17123!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.85027,-64.17123,3a,75y,90t/data=!3m4!1e1!3m2!1sNH6iub1JjIOQpQSf1fvR5g!2e0'
    },
    {//3 コレージュ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRZj1epISr7JaBpu3vSiEuQ!2m2!1d49.65135!2d2.56591!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.65135,2.56591,3a,75y,90t/data=!3m4!1e1!3m2!1sRZj1epISr7JaBpu3vSiEuQ!2e0'
    },
    {//モレアック, ブルターニュ (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soY0eUvkbVQhHGIWJH3KYbw!2m2!1d47.93331!2d-2.85155!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.93331,-2.85155,3a,75y,90t/data=!3m4!1e1!3m2!1soY0eUvkbVQhHGIWJH3KYbw!2e0'
    },
    {//53 ミュールハウゼナー通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZSGigoY5V6s4OdPDYE9Dnw!2m2!1d49.2264!2d8.72117!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.2264,8.72117,3a,75y,90t/data=!3m4!1e1!3m2!1sZSGigoY5V6s4OdPDYE9Dnw!2e0'
    },
    {//299 オーク・ビュー・ウェイ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sT5iHdy47JQXElrAxLUEvuQ!2m2!1d33.90853!2d-84.8408!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.90853,-84.8408,3a,75y,90t/data=!3m4!1e1!3m2!1sT5iHdy47JQXElrAxLUEvuQ!2e0'
    },
    {//5597 US-26 (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sejiQT8yv7YsE0qxY4EDpIw!2m2!1d44.24378!2d-117.5126!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.24378,-117.5126,3a,75y,90t/data=!3m4!1e1!3m2!1sejiQT8yv7YsE0qxY4EDpIw!2e0'
    },
    {//31 4921 (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCkBpvSsNgPN3MbF2uHcYKg!2m2!1d47.8585!2d22.38061!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.8585,22.38061,3a,75y,90t/data=!3m4!1e1!3m2!1sCkBpvSsNgPN3MbF2uHcYKg!2e0'
    },
    {//サン・フェリペ, ルソン中心部 (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGVTo5m_gBkSDDJHBUwkp8w!2m2!1d15.03507!2d120.0846!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.03507,120.0846,3a,75y,90t/data=!3m4!1e1!3m2!1sGVTo5m_gBkSDDJHBUwkp8w!2e0'
    },
    {//23 アンジェリ通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb2dIDaBweAuMJQcwgkTGgg!2m2!1d45.58071!2d12.32881!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.58071,12.32881,3a,75y,90t/data=!3m4!1e1!3m2!1sb2dIDaBweAuMJQcwgkTGgg!2e0'
    },
    {//21015 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOnruvuc90bvUyndPiVuqnA!2m2!1d50.00779!2d12.81049!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.00779,12.81049,3a,75y,90t/data=!3m4!1e1!3m2!1sOnruvuc90bvUyndPiVuqnA!2e0'
    },
    {//247 エクセキエル・サラス・コロノビ (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXjpjhRJDaZI7JNZO8C-m9A!2m2!1d-39.86054!2d-72.79944!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-39.86054,-72.79944,3a,75y,90t/data=!3m4!1e1!3m2!1sXjpjhRJDaZI7JNZO8C-m9A!2e0'
    },
    {//K6122 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqX1_ejGYxwKUSLN4exGwVA!2m2!1d47.79534!2d8.84477!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.79534,8.84477,3a,75y,90t/data=!3m4!1e1!3m2!1sqX1_ejGYxwKUSLN4exGwVA!2e0'
    },
    {//ウェールズ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sShC3vb6dSpc16YnenrnWlw!2m2!1d53.22078!2d-3.00124!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.22078,-3.00124,3a,75y,90t/data=!3m4!1e1!3m2!1sShC3vb6dSpc16YnenrnWlw!2e0'
    },
    {//347 シルバー・ティップ・ドライブ (アラスカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWY-Osq4JaLuctCl9wTDDSA!2m2!1d61.60431!2d-149.12181!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.60431,-149.12181,3a,75y,90t/data=!3m4!1e1!3m2!1sWY-Osq4JaLuctCl9wTDDSA!2e0'
    },
    {//5 カリル・デ・ロス・ペロス (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAdllJi7pGS-jalUXYSdZGw!2m2!1d37.96795!2d-1.09769!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.96795,-1.09769,3a,75y,90t/data=!3m4!1e1!3m2!1sAdllJi7pGS-jalUXYSdZGw!2e0'
    },
    {//8 Betongvägen (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQaCAMzB-ZSHG74XIQI4dDw!2m2!1d59.60209!2d16.25522!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.60209,16.25522,3a,75y,90t/data=!3m4!1e1!3m2!1sQaCAMzB-ZSHG74XIQI4dDw!2e0'
    },
    {//ボゴソ - タークワ・ロード (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-22hc1Eh-dAqOGXZVDciPg!2m2!1d5.34745!2d-1.98758!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.34745,-1.98758,3a,75y,90t/data=!3m4!1e1!3m2!1s-22hc1Eh-dAqOGXZVDciPg!2e0'
    },
    {//950 ランソン道路 (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUl4tLgz3mCVxBZKzblyGhA!2m2!1d43.54388!2d5.05963!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.54388,5.05963,3a,75y,90t/data=!3m4!1e1!3m2!1sUl4tLgz3mCVxBZKzblyGhA!2e0'
    },
    {//54 ул. Иларион Макариополски (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s39TlLG-BwUHePlrnGQFraQ!2m2!1d41.56903!2d23.71699!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.56903,23.71699,3a,75y,90t/data=!3m4!1e1!3m2!1s39TlLG-BwUHePlrnGQFraQ!2e0'
    },
    {//パサダ・デ・アルカラ通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stFm_erg8zA4Gvf3GfFZvpA!2m2!1d36.4237!2d-5.45085!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.4237,-5.45085,3a,75y,90t/data=!3m4!1e1!3m2!1stFm_erg8zA4Gvf3GfFZvpA!2e0'
    },
    {//K13 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sC81lHEO6vY4QQqlYL-CReA!2m2!1d6.1176!2d100.85612!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.1176,100.85612,3a,75y,90t/data=!3m4!1e1!3m2!1sC81lHEO6vY4QQqlYL-CReA!2e0'
    },
    {//ジャガナスバッティ, 西ベンガル (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCkh-xwU2yH6OmLR59miaYw!2m2!1d22.71214!2d88.2179!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.71214,88.2179,3a,75y,90t/data=!3m4!1e1!3m2!1sCkh-xwU2yH6OmLR59miaYw!2e0'
    },
    {//ロストッカー通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg4gR3V7MTtOE1n6GF-e-cw!2m2!1d51.14786!2d6.89195!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.14786,6.89195,3a,75y,90t/data=!3m4!1e1!3m2!1sg4gR3V7MTtOE1n6GF-e-cw!2e0'
    },
    {//クレタ島 (クレタ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syXj9EzcADszyZjCg48ihrA!2m2!1d35.05073!2d24.85648!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.05073,24.85648,3a,75y,90t/data=!3m4!1e1!3m2!1syXj9EzcADszyZjCg48ihrA!2e0'
    },
    {//195 ラヴァン通り (オンタリオ・ケベック)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sq7ozfzYskJKaQ29Y-fyjmw!2m2!1d47.65157!2d-70.18041!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.65157,-70.18041,3a,75y,90t/data=!3m4!1e1!3m2!1sq7ozfzYskJKaQ29Y-fyjmw!2e0'
    },
    {//Львовка, ベルゴロド (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szHaJxc17TVec2huzFc9KuA!2m2!1d50.58155!2d37.96489!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.58155,37.96489,3a,75y,90t/data=!3m4!1e1!3m2!1szHaJxc17TVec2huzFc9KuA!2e0'
    },
    {//22106 カジェ 7B (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGMfO7IYF_zdlvOqAZ0bPzg!2m2!1d11.0134!2d-74.24432!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.0134,-74.24432,3a,75y,90t/data=!3m4!1e1!3m2!1sGMfO7IYF_zdlvOqAZ0bPzg!2e0'
    },
    {//コモン・ロード (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm7C70Zb3fkA3SOSkWDe0ng!2m2!1d52.85136!2d-0.03373!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.85136,-0.03373,3a,75y,90t/data=!3m4!1e1!3m2!1sm7C70Zb3fkA3SOSkWDe0ng!2e0'
    },
    {//31 ロッジ・レーン (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saF2atdNB3W85KXwu9tgw0Q!2m2!1d53.25921!2d-0.47267!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.25921,-0.47267,3a,75y,90t/data=!3m4!1e1!3m2!1saF2atdNB3W85KXwu9tgw0Q!2e0'
    },
    {//アフトダローガ・ウッスリ (ロシア極東)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRD3OQPX9GbWJzJXsJQYEBA!2m2!1d44.69959!2d133.03697!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.69959,133.03697,3a,75y,90t/data=!3m4!1e1!3m2!1sRD3OQPX9GbWJzJXsJQYEBA!2e0'
    },
    {//Р152 (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIck8g0ZOvCzv7X5yVn6zbQ!2m2!1d56.84977!2d41.59415!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.84977,41.59415,3a,75y,90t/data=!3m4!1e1!3m2!1sIck8g0ZOvCzv7X5yVn6zbQ!2e0'
    },
    {//3798 State Hwy V (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTT0pMNtaDYNDQw8imR9OUA!2m2!1d36.63268!2d-90.57103!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.63268,-90.57103,3a,75y,90t/data=!3m4!1e1!3m2!1sTT0pMNtaDYNDQw8imR9OUA!2e0'
    },
    {//310 Kevitsantie (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0CDDAAYNwYm33NOPWyMUIQ!2m2!1d67.69652!2d26.87831!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@67.69652,26.87831,3a,75y,90t/data=!3m4!1e1!3m2!1s0CDDAAYNwYm33NOPWyMUIQ!2e0'
    },
    {//ウッタル・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKNvxnZq3XpkCS3I5VDhVaA!2m2!1d26.38303!2d81.26527!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.38303,81.26527,3a,75y,90t/data=!3m4!1e1!3m2!1sKNvxnZq3XpkCS3I5VDhVaA!2e0'
    },
    {//541 アブドン・フエンテアルバ (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF-5Ci4k-pAXvZ5vxfLdmqA!2m2!1d-35.73669!2d-72.53423!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-35.73669,-72.53423,3a,75y,90t/data=!3m4!1e1!3m2!1sF-5Ci4k-pAXvZ5vxfLdmqA!2e0'
    },
    {//A507 (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spBqaKq29WWz4RG-SX1RMFA!2m2!1d51.99846!2d-0.1932!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.99846,-0.1932,3a,75y,90t/data=!3m4!1e1!3m2!1spBqaKq29WWz4RG-SX1RMFA!2e0'
    },
    {//Jln Industri B3 (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGTRr01GMXWSdwn5Cd_u2sQ!2m2!1d2.21071!2d102.6917!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@2.21071,102.6917,3a,75y,90t/data=!3m4!1e1!3m2!1sGTRr01GMXWSdwn5Cd_u2sQ!2e0'
    },
    {//الطیبة, フジャイラ (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-sZzHuKqp3vFwDB5s36Mgg!2m2!1d25.40351!2d56.15207!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.40351,56.15207,3a,75y,90t/data=!3m4!1e1!3m2!1s-sZzHuKqp3vFwDB5s36Mgg!2e0'
    },
    {//142 482 (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9h5HSR_Q4ZqEpRMfXkkSrQ!2m2!1d62.30365!2d29.64206!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.30365,29.64206,3a,75y,90t/data=!3m4!1e1!3m2!1s9h5HSR_Q4ZqEpRMfXkkSrQ!2e0'
    },
    {//サン・パウロ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4FYykF81HN8tbOvH-sKilA!2m2!1d-20.67302!2d-47.3091!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-20.67302,-47.3091,3a,75y,90t/data=!3m4!1e1!3m2!1s4FYykF81HN8tbOvH-sKilA!2e0'
    },
    {//712 Co Rd 206 (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTSOZ5Xe4yXjqXsxei3j83A!2m2!1d27.56954!2d-98.28137!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.56954,-98.28137,3a,75y,90t/data=!3m4!1e1!3m2!1sTSOZ5Xe4yXjqXsxei3j83A!2e0'
    },
    {//4152 Co Rd 159 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgVdlpYqigBEz2TUVOfjDDQ!2m2!1d30.65246!2d-84.44924!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@30.65246,-84.44924,3a,75y,90t/data=!3m4!1e1!3m2!1sgVdlpYqigBEz2TUVOfjDDQ!2e0'
    },
    {//FL-5 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAnwnG_FuiPNTeHAeU3m-rA!2m2!1d25.06235!2d-80.47408!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.06235,-80.47408,3a,75y,90t/data=!3m4!1e1!3m2!1sAnwnG_FuiPNTeHAeU3m-rA!2e0'
    },
    {//3 Norrängsvägen (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX40g1Z9ydk2c_no3-CuPTQ!2m2!1d60.39015!2d25.27396!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.39015,25.27396,3a,75y,90t/data=!3m4!1e1!3m2!1sX40g1Z9ydk2c_no3-CuPTQ!2e0'
    },
    {//クラスノダール地方 (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqGRbYLQk4-IC8K3OPfwJJw!2m2!1d45.36463!2d40.55182!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.36463,40.55182,3a,75y,90t/data=!3m4!1e1!3m2!1sqGRbYLQk4-IC8K3OPfwJJw!2e0'
    },
    {//コペケン, オイギンス (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sntl0E66XLPHfVM7CG31BtA!2m2!1d-34.24849!2d-70.92988!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.24849,-70.92988,3a,75y,90t/data=!3m4!1e1!3m2!1sntl0E66XLPHfVM7CG31BtA!2e0'
    },
    {//エミリア・ロマーニャ (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTjc44DriaAgtffJfd1mA0A!2m2!1d44.47893!2d9.78049!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.47893,9.78049,3a,75y,90t/data=!3m4!1e1!3m2!1sTjc44DriaAgtffJfd1mA0A!2e0'
    },
    {//102 ウーリツァ・プーシキナ (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjjxOgIe4cJLRCfSqk2gp_Q!2m2!1d45.39779!2d39.38333!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.39779,39.38333,3a,75y,90t/data=!3m4!1e1!3m2!1sjjxOgIe4cJLRCfSqk2gp_Q!2e0'
    },
    {//4 フラウエンドルファー通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7lBlWRYnagwgGZGQUGH-TA!2m2!1d51.43127!2d13.7275!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.43127,13.7275,3a,75y,90t/data=!3m4!1e1!3m2!1s7lBlWRYnagwgGZGQUGH-TA!2e0'
    },
    {//840 County Rd 51 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK6s4tClU4NuTB-Zx2_x1CA!2m2!1d45.21258!2d-96.08171!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.21258,-96.08171,3a,75y,90t/data=!3m4!1e1!3m2!1sK6s4tClU4NuTB-Zx2_x1CA!2e0'
    },
    {//14 Muluklar Sk. (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svF5GLR2XVlUVz4wl7H13BQ!2m2!1d36.95421!2d36.1966!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.95421,36.1966,3a,75y,90t/data=!3m4!1e1!3m2!1svF5GLR2XVlUVz4wl7H13BQ!2e0'
    },
    {//シュチェティー, ウースチー (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sofsRLIlZDD4QXZqgU27KwQ!2m2!1d50.45887!2d14.3793!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.45887,14.3793,3a,75y,90t/data=!3m4!1e1!3m2!1sofsRLIlZDD4QXZqgU27KwQ!2e0'
    },
    {//DJ203A (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szS-BhTWd_3HaaurZeJ_fwA!2m2!1d45.35582!2d27.05873!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.35582,27.05873,3a,75y,90t/data=!3m4!1e1!3m2!1szS-BhTWd_3HaaurZeJ_fwA!2e0'
    },
    {//中スラウェシ (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sv2fkCY45eLgas6PMAUayHg!2m2!1d0.21741!2d119.93251!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@0.21741,119.93251,3a,75y,90t/data=!3m4!1e1!3m2!1sv2fkCY45eLgas6PMAUayHg!2e0'
    },
    {//44 FV-20 (カナリア諸島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smdRWQSzC_ZbAcunaAs85xQ!2m2!1d28.4825!2d-13.98362!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.4825,-13.98362,3a,75y,90t/data=!3m4!1e1!3m2!1smdRWQSzC_ZbAcunaAs85xQ!2e0'
    },
    {//ボヤカ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQKNAvjnJjefUnbB6zvuShw!2m2!1d6.02713!2d-73.4533!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.02713,-73.4533,3a,75y,90t/data=!3m4!1e1!3m2!1sQKNAvjnJjefUnbB6zvuShw!2e0'
    },
    {//8 ул. Кавала (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sedTYwvDWGZlbZ8FXdiCM8Q!2m2!1d41.84354!2d26.07614!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.84354,26.07614,3a,75y,90t/data=!3m4!1e1!3m2!1sedTYwvDWGZlbZ8FXdiCM8Q!2e0'
    },
    {//29 ネラ通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk5_xhEwhrgAjSkblQMBZGw!2m2!1d44.63037!2d-1.08859!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.63037,-1.08859,3a,75y,90t/data=!3m4!1e1!3m2!1sk5_xhEwhrgAjSkblQMBZGw!2e0'
    },
    {//35 パラウ・ドゥルセト通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTX68hR4kC3e8VYgN3_jXNQ!2m2!1d41.37095!2d1.16155!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.37095,1.16155,3a,75y,90t/data=!3m4!1e1!3m2!1sTX68hR4kC3e8VYgN3_jXNQ!2e0'
    },
    {//NR1 (ルワンダ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXeF7SQg0qpfmU575lwA0og!2m2!1d-2.21071!2d29.79672!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.21071,29.79672,3a,75y,90t/data=!3m4!1e1!3m2!1sXeF7SQg0qpfmU575lwA0og!2e0'
    },
    {//2 ラ・ロシュ (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz6XqDZl1QvKCNIVjqUXwAA!2m2!1d46.93591!2d6.60682!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.93591,6.60682,3a,75y,90t/data=!3m4!1e1!3m2!1sz6XqDZl1QvKCNIVjqUXwAA!2e0'
    },
    {//Google マップ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdTjDouYCDhXqjNXtk_gtCw!2m2!1d-22.42714!2d31.307!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.42714,31.307,3a,75y,90t/data=!3m4!1e1!3m2!1sdTjDouYCDhXqjNXtk_gtCw!2e0'
    },
    {//284 1st ストリート (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqW19uQzjpOf_561Ma8eYzw!2m2!1d44.95866!2d-89.6305!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.95866,-89.6305,3a,75y,90t/data=!3m4!1e1!3m2!1sqW19uQzjpOf_561Ma8eYzw!2e0'
    },
    {//シャンボン＝シュル＝ヴエーズ, ヌーヴェル＝アキテーヌ (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZ1PKpG5mYiq8GF6vfkoQDg!2m2!1d46.20639!2d2.42927!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.20639,2.42927,3a,75y,90t/data=!3m4!1e1!3m2!1sZ1PKpG5mYiq8GF6vfkoQDg!2e0'
    },
    {//7417 (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSgpUUd9VJqOUUwRBn2EWDw!2m2!1d46.80306!2d16.48095!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.80306,16.48095,3a,75y,90t/data=!3m4!1e1!3m2!1sSgpUUd9VJqOUUwRBn2EWDw!2e0'
    },
    {//5 Alangonkatu (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svN_ZrdwcUWTVjRuPPg5m1g!2m2!1d61.76155!2d23.07858!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.76155,23.07858,3a,75y,90t/data=!3m4!1e1!3m2!1svN_ZrdwcUWTVjRuPPg5m1g!2e0'
    },
    {//N-6 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srtCbjFlOINCG6pjioZAMhw!2m2!1d43.26802!2d-8.20327!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.26802,-8.20327,3a,75y,90t/data=!3m4!1e1!3m2!1srtCbjFlOINCG6pjioZAMhw!2e0'
    },
    {//6 Hlboká (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdv3KbmnWrzAJ3yy6H6LQCQ!2m2!1d47.9878!2d17.61563!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.9878,17.61563,3a,75y,90t/data=!3m4!1e1!3m2!1sdv3KbmnWrzAJ3yy6H6LQCQ!2e0'
    },
    {//バンガ, ソクサージェン地方 (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sS0j8hR9lCgKQuqQGYY-gEg!2m2!1d6.4447!2d124.74761!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.4447,124.74761,3a,75y,90t/data=!3m4!1e1!3m2!1sS0j8hR9lCgKQuqQGYY-gEg!2e0'
    },
    {//シワス (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbfznD_-7foVqRABVOkN-aQ!2m2!1d39.30116!2d36.38766!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.30116,36.38766,3a,75y,90t/data=!3m4!1e1!3m2!1sbfznD_-7foVqRABVOkN-aQ!2e0'
    },
    {//R385 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seXFbJmvh1qLZKnHLCLYS2Q!2m2!1d-28.2644!2d23.55168!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-28.2644,23.55168,3a,75y,90t/data=!3m4!1e1!3m2!1seXFbJmvh1qLZKnHLCLYS2Q!2e0'
    },
    {//1506 イースト 9th ストリート (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWYjMxq4b9qKBy4D5kvXLwg!2m2!1d45.59584!2d-121.17087!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.59584,-121.17087,3a,75y,90t/data=!3m4!1e1!3m2!1sWYjMxq4b9qKBy4D5kvXLwg!2e0'
    },
    {//24 Jaakontie (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szpkuGaUcqcz6wJd-OFcVHA!2m2!1d61.0854!2d23.42723!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.0854,23.42723,3a,75y,90t/data=!3m4!1e1!3m2!1szpkuGaUcqcz6wJd-OFcVHA!2e0'
    },
    {//PR-471 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIeGofn3eMTf39mw6V0dQLg!2m2!1d-25.23297!2d-53.1619!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.23297,-53.1619,3a,75y,90t/data=!3m4!1e1!3m2!1sIeGofn3eMTf39mw6V0dQLg!2e0'
    },
    {//テノム, サバ (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJfPbR8EvInEun_CH1YnolQ!2m2!1d5.13463!2d115.95168!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.13463,115.95168,3a,75y,90t/data=!3m4!1e1!3m2!1sJfPbR8EvInEun_CH1YnolQ!2e0'
    },
    {//202 サン・マルティン (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP9BcwKi4g2sA7NoRxh4UnA!2m2!1d-33.38236!2d-64.72638!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.38236,-64.72638,3a,75y,90t/data=!3m4!1e1!3m2!1sP9BcwKi4g2sA7NoRxh4UnA!2e0'
    },
    {//ソンダバーダ, アーンドラ・プラデーシュ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sp-51xS-ZbVMSyh6tA_xLPw!2m2!1d13.58901!2d79.34146!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.58901,79.34146,3a,75y,90t/data=!3m4!1e1!3m2!1sp-51xS-ZbVMSyh6tA_xLPw!2e0'
    },
    {//10 ガリシア通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjt7A22_z6kNx4b_Yh1iDIw!2m2!1d42.05598!2d-6.64218!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.05598,-6.64218,3a,75y,90t/data=!3m4!1e1!3m2!1sjt7A22_z6kNx4b_Yh1iDIw!2e0'
    },
    {//8 ヴァイトルト通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb-PQ7AsUyMXxVwxa7f1otg!2m2!1d49.02138!2d12.08608!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.02138,12.08608,3a,75y,90t/data=!3m4!1e1!3m2!1sb-PQ7AsUyMXxVwxa7f1otg!2e0'
    },
    {//Logarska Dolina (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgwICoO9x-w7vP_BcROOiqQ!2m2!1d46.40514!2d14.60572!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.40514,14.60572,3a,75y,90t/data=!3m4!1e1!3m2!1sgwICoO9x-w7vP_BcROOiqQ!2e0'
    },
    {//大田原市, 栃木県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfo-i5Pc7hny3MB9DjCkMDA!2m2!1d36.80138!2d140.0895!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.80138,140.0895,3a,75y,90t/data=!3m4!1e1!3m2!1sfo-i5Pc7hny3MB9DjCkMDA!2e0'
    },
    {//クカス (アルバニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syiUomPCSEFstKqAnDwdaKQ!2m2!1d42.04591!2d20.42933!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.04591,20.42933,3a,75y,90t/data=!3m4!1e1!3m2!1syiUomPCSEFstKqAnDwdaKQ!2e0'
    },
    {//135 35 (イスラエル・パレスチナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sT1K8-xdbd5ijQGG-x6NwXg!2m2!1d31.4135!2d35.77638!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.4135,35.77638,3a,75y,90t/data=!3m4!1e1!3m2!1sT1K8-xdbd5ijQGG-x6NwXg!2e0'
    },
    {//カナバイプードゥール, タミル·ナードゥ州 (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk0n_w3nomNwdZCj0pHuk6w!2m2!1d12.64863!2d78.64091!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@12.64863,78.64091,3a,75y,90t/data=!3m4!1e1!3m2!1sk0n_w3nomNwdZCj0pHuk6w!2e0'
    },
    {//中スラウェシ (スラウェシ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sinUbp8VJGp3b2OulxJQiGQ!2m2!1d-2.5371!2d121.96395!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.5371,121.96395,3a,75y,90t/data=!3m4!1e1!3m2!1sinUbp8VJGp3b2OulxJQiGQ!2e0'
    },
    {//MS-228 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spoiM5tWiVLPM2bImmuJQBw!2m2!1d-19.25856!2d-57.30752!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.25856,-57.30752,3a,75y,90t/data=!3m4!1e1!3m2!1spoiM5tWiVLPM2bImmuJQBw!2e0'
    },
    {//サンクト・ペテルブルグ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfoR-Rp0Q0ZgukYR05RZyFA!2m2!1d59.86115!2d30.24648!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.86115,30.24648,3a,75y,90t/data=!3m4!1e1!3m2!1sfoR-Rp0Q0ZgukYR05RZyFA!2e0'
    },
    {//ポリ, サタクンタ (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMYYrFHMJyLtAgXaWvwMNjw!2m2!1d61.45194!2d21.85361!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.45194,21.85361,3a,75y,90t/data=!3m4!1e1!3m2!1sMYYrFHMJyLtAgXaWvwMNjw!2e0'
    },
    {//Попелевка, ブリャンスク (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGTFlHLuwJz7Z9O8WKOoM5g!2m2!1d52.97805!2d33.02344!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.97805,33.02344,3a,75y,90t/data=!3m4!1e1!3m2!1sGTFlHLuwJz7Z9O8WKOoM5g!2e0'
    },
    {//6 ズフフ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqwejjtECx0Xedd2FPys40A!2m2!1d51.21834!2d22.69063!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.21834,22.69063,3a,75y,90t/data=!3m4!1e1!3m2!1sqwejjtECx0Xedd2FPys40A!2e0'
    },
    {//KaGaula, リンポポ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9q3kMPEptJGrOKJ7Cuaong!2m2!1d-23.30923!2d30.89501!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.30923,30.89501,3a,75y,90t/data=!3m4!1e1!3m2!1s9q3kMPEptJGrOKJ7Cuaong!2e0'
    },
    {//ラナガート, 西ベンガル (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPCZIVdS2ooeXBxr8KoV4TA!2m2!1d23.15591!2d88.56809!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.15591,88.56809,3a,75y,90t/data=!3m4!1e1!3m2!1sPCZIVdS2ooeXBxr8KoV4TA!2e0'
    },
    {//4 Jannebergsvägen (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sumFX8tHzAoRRhpL9GboV_Q!2m2!1d56.19099!2d14.84553!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.19099,14.84553,3a,75y,90t/data=!3m4!1e1!3m2!1sumFX8tHzAoRRhpL9GboV_Q!2e0'
    },
    {//アセア通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLqn7DYFVwHdofO4f1hApDA!2m2!1d43.66843!2d-8.04826!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.66843,-8.04826,3a,75y,90t/data=!3m4!1e1!3m2!1sLqn7DYFVwHdofO4f1hApDA!2e0'
    },
    {//41 SP229 (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-rPS7XjFKEMKr4ffnrYJPw!2m2!1d41.02764!2d14.61139!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.02764,14.61139,3a,75y,90t/data=!3m4!1e1!3m2!1s-rPS7XjFKEMKr4ffnrYJPw!2e0'
    },
    {//65 フラテッリ・バリゼッリ通り (スイス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBAK561ldMCaZ8L02B1dfzQ!2m2!1d45.88875!2d8.40686!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.88875,8.40686,3a,75y,90t/data=!3m4!1e1!3m2!1sBAK561ldMCaZ8L02B1dfzQ!2e0'
    },
    {//7199 サイドロード 2 イースト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1HdRQsbdsAfw-O-gCqlgGA!2m2!1d43.96582!2d-80.70291!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.96582,-80.70291,3a,75y,90t/data=!3m4!1e1!3m2!1s1HdRQsbdsAfw-O-gCqlgGA!2e0'
    },
    {//Pešćeno, クラピンスコ ザゴルスカ (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDI226X9y4P0TWWsH1plk1g!2m2!1d46.05447!2d16.21333!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.05447,16.21333,3a,75y,90t/data=!3m4!1e1!3m2!1sDI226X9y4P0TWWsH1plk1g!2e0'
    },
    {//チアパス (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZyDOInJxMh9MnkDKqwh3mQ!2m2!1d17.09494!2d-91.49457!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@17.09494,-91.49457,3a,75y,90t/data=!3m4!1e1!3m2!1sZyDOInJxMh9MnkDKqwh3mQ!2e0'
    },
    {//44515 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJoPxwjM6lUiwYDSgYNwzqw!2m2!1d50.01706!2d17.37153!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.01706,17.37153,3a,75y,90t/data=!3m4!1e1!3m2!1sJoPxwjM6lUiwYDSgYNwzqw!2e0'
    },
    {//マーニャ・グレチャ通り (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5LWA4E5cxFyQnmN2VkIX6g!2m2!1d40.46438!2d17.26956!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.46438,17.26956,3a,75y,90t/data=!3m4!1e1!3m2!1s5LWA4E5cxFyQnmN2VkIX6g!2e0'
    },
    {//Bajino brdo (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqfPogN3vvFVChv2Bl2iqlw!2m2!1d44.37485!2d20.23192!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.37485,20.23192,3a,75y,90t/data=!3m4!1e1!3m2!1sqfPogN3vvFVChv2Bl2iqlw!2e0'
    },
    {//イバ, ルソン中心部 (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soVqYM55nO59WwBjB0_bQkg!2m2!1d15.33427!2d120.001!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.33427,120.001,3a,75y,90t/data=!3m4!1e1!3m2!1soVqYM55nO59WwBjB0_bQkg!2e0'
    },
    {//プレオブラジェニエ, 沿海地方 (ロシア極東)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1jCEODza6pMKUsL2SeBK4Q!2m2!1d42.90307!2d133.88978!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.90307,133.88978,3a,75y,90t/data=!3m4!1e1!3m2!1s1jCEODza6pMKUsL2SeBK4Q!2e0'
    },
    {//5 ウォルチェレン・クローズ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCvNu6-Hak0Cj-YGDzitHCg!2m2!1d51.23532!2d1.39827!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.23532,1.39827,3a,75y,90t/data=!3m4!1e1!3m2!1sCvNu6-Hak0Cj-YGDzitHCg!2e0'
    },
    {//Επαρ. Οδ. Πολιανής - Δυρραχίου (ギリシャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTUZjOqeqS1_AtLf5BuODTA!2m2!1d37.17817!2d22.19728!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.17817,22.19728,3a,75y,90t/data=!3m4!1e1!3m2!1sTUZjOqeqS1_AtLf5BuODTA!2e0'
    },
    {//コラシン (クロアチア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slxqfZYvUzIdEUwUfYlTNbw!2m2!1d42.71921!2d19.36658!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.71921,19.36658,3a,75y,90t/data=!3m4!1e1!3m2!1slxqfZYvUzIdEUwUfYlTNbw!2e0'
    },
    {//ミナスジェライス州 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRjTMatzK1mHzNkhYueeR8g!2m2!1d-18.68926!2d-41.32876!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.68926,-41.32876,3a,75y,90t/data=!3m4!1e1!3m2!1sRjTMatzK1mHzNkhYueeR8g!2e0'
    },
    {//Ülejõe põik (エストニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqUn5E8kTQEJVBjU6VpswWA!2m2!1d58.99571!2d26.88209!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@58.99571,26.88209,3a,75y,90t/data=!3m4!1e1!3m2!1sqUn5E8kTQEJVBjU6VpswWA!2e0'
    },
    {//6 L426 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHhQbOMY7rFT4ejIohd23Lw!2m2!1d51.98102!2d9.25452!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.98102,9.25452,3a,75y,90t/data=!3m4!1e1!3m2!1sHhQbOMY7rFT4ejIohd23Lw!2e0'
    },
    {//2719 Rod. Ou Saída p/ União (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjGxd3DYCjX5l0QnoAomRmA!2m2!1d-4.20356!2d-42.89861!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-4.20356,-42.89861,3a,75y,90t/data=!3m4!1e1!3m2!1sjGxd3DYCjX5l0QnoAomRmA!2e0'
    },
    {//ザ・パッチズ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spdgiUwybRKzSd54UHG-qeQ!2m2!1d51.77565!2d-3.79209!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.77565,-3.79209,3a,75y,90t/data=!3m4!1e1!3m2!1spdgiUwybRKzSd54UHG-qeQ!2e0'
    },
    {//สก.2052 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLyZqNUv9bCOpPN-d7IKA7A!2m2!1d13.827!2d102.14461!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.827,102.14461,3a,75y,90t/data=!3m4!1e1!3m2!1sLyZqNUv9bCOpPN-d7IKA7A!2e0'
    },
    {//55 Str. ボンチウ (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scOEIsWGqz5U2w634NU-i1A!2m2!1d44.95587!2d24.2203!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.95587,24.2203,3a,75y,90t/data=!3m4!1e1!3m2!1scOEIsWGqz5U2w634NU-i1A!2e0'
    },
    {//ターナ・リバー・カウンティー (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbs955qZUpeMDR3uqBTDnIQ!2m2!1d-1.18996!2d39.82947!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.18996,39.82947,3a,75y,90t/data=!3m4!1e1!3m2!1sbs955qZUpeMDR3uqBTDnIQ!2e0'
    },
    {//Tamil Oli Main Rd (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGTOnwTkb-2dYBe6cytn-Qw!2m2!1d11.95679!2d79.83001!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.95679,79.83001,3a,75y,90t/data=!3m4!1e1!3m2!1sGTOnwTkb-2dYBe6cytn-Qw!2e0'
    },
    {//パラナ (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ_WuQvGmYNbN-kkZZ-9EtA!2m2!1d-24.48754!2d-51.13509!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.48754,-51.13509,3a,75y,90t/data=!3m4!1e1!3m2!1sQ_WuQvGmYNbN-kkZZ-9EtA!2e0'
    },
    {//E485 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saVNIfMsXTvFFePsLbOTh4w!2m2!1d-1.87429!2d-79.96562!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.87429,-79.96562,3a,75y,90t/data=!3m4!1e1!3m2!1saVNIfMsXTvFFePsLbOTh4w!2e0'
    },
    {//自由州 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssdXKPc8qJUkCKxesIonn0w!2m2!1d-29.05114!2d27.23966!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.05114,27.23966,3a,75y,90t/data=!3m4!1e1!3m2!1ssdXKPc8qJUkCKxesIonn0w!2e0'
    },
    {//3424 (リトアニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sp56KhIdtKUWBzAt4y2ZxVw!2m2!1d55.61312!2d23.5546!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.61312,23.5546,3a,75y,90t/data=!3m4!1e1!3m2!1sp56KhIdtKUWBzAt4y2ZxVw!2e0'
    },
    {//バックローニヤ, マディヤ・プラデーシュ (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7ulu24wsoMsplWJ2W6xO6Q!2m2!1d24.73335!2d79.63826!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.73335,79.63826,3a,75y,90t/data=!3m4!1e1!3m2!1s7ulu24wsoMsplWJ2W6xO6Q!2e0'
    },
    {//シナロア (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sY461uaMtgjJwCYs3dTrTDg!2m2!1d24.90053!2d-107.60207!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.90053,-107.60207,3a,75y,90t/data=!3m4!1e1!3m2!1sY461uaMtgjJwCYs3dTrTDg!2e0'
    },
    {//27 ハイメ・フェラン通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNvbvkh67IzLw2b1t_bPpHQ!2m2!1d40.44767!2d-3.32603!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.44767,-3.32603,3a,75y,90t/data=!3m4!1e1!3m2!1sNvbvkh67IzLw2b1t_bPpHQ!2e0'
    },
    {//ジョゼー・デ・カルヴァーリョ通り (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2dq_DSlU3bMxg4CCls10ow!2m2!1d-19.96504!2d-54.8907!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.96504,-54.8907,3a,75y,90t/data=!3m4!1e1!3m2!1s2dq_DSlU3bMxg4CCls10ow!2e0'
    },
    {//ハタイ (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1T2CVmK7TFl9s6-vmP07ug!2m2!1d36.12533!2d36.27059!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.12533,36.27059,3a,75y,90t/data=!3m4!1e1!3m2!1s1T2CVmK7TFl9s6-vmP07ug!2e0'
    },
    {//Contorno Viário Paulo Macarini (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMsXzyfJUDLtUIgWc2BFT4A!2m2!1d-27.32275!2d-51.61265!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.32275,-51.61265,3a,75y,90t/data=!3m4!1e1!3m2!1sMsXzyfJUDLtUIgWc2BFT4A!2e0'
    },
    {//15 вулиця Декабристів (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shvYjgztZeTlOpRkimsy1Pw!2m2!1d50.58275!2d27.60804!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.58275,27.60804,3a,75y,90t/data=!3m4!1e1!3m2!1shvYjgztZeTlOpRkimsy1Pw!2e0'
    },
    {//69 R. Vitório Dezorzi (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2WrpHwzMKRxsS9DCmccuZw!2m2!1d-27.50226!2d-54.09848!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.50226,-54.09848,3a,75y,90t/data=!3m4!1e1!3m2!1s2WrpHwzMKRxsS9DCmccuZw!2e0'
    },
    {//Podhradie (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szu0TyYP78pB1mW4kDSXOuw!2m2!1d48.2277!2d18.60972!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.2277,18.60972,3a,75y,90t/data=!3m4!1e1!3m2!1szu0TyYP78pB1mW4kDSXOuw!2e0'
    },
    {//600 セシーリア・デ・アウヴァレンガ・フレイレ・ピメンテウ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sinGDn6ayK4Iq4nNLZVqcCQ!2m2!1d-21.91605!2d-50.51471!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.91605,-50.51471,3a,75y,90t/data=!3m4!1e1!3m2!1sinGDn6ayK4Iq4nNLZVqcCQ!2e0'
    },
    {//RN16 (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s39a_pPXZfkhJQePpcREkPQ!2m2!1d-26.27318!2d-61.73707!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.27318,-61.73707,3a,75y,90t/data=!3m4!1e1!3m2!1s39a_pPXZfkhJQePpcREkPQ!2e0'
    },
    {//вул. Симона Петлюри (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skvmeM82jgOgCkKoNLicWPw!2m2!1d51.8864!2d33.53311!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.8864,33.53311,3a,75y,90t/data=!3m4!1e1!3m2!1skvmeM82jgOgCkKoNLicWPw!2e0'
    },
    {//303 (北マケドニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snQhi17GnvuHwlYKEQkGf-w!2m2!1d41.50658!2d21.26756!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.50658,21.26756,3a,75y,90t/data=!3m4!1e1!3m2!1snQhi17GnvuHwlYKEQkGf-w!2e0'
    },
    {//2713 ティンバーレーン・ウェイ・サウスウェスト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIJRgHLNT6q51pzpX84jw3A!2m2!1d47.46019!2d-94.92093!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.46019,-94.92093,3a,75y,90t/data=!3m4!1e1!3m2!1sIJRgHLNT6q51pzpX84jw3A!2e0'
    },
    {//А181 (ロシア極東)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shGKBkvzRGicAbZXDsHkvcg!2m2!1d44.54344!2d135.65412!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.54344,135.65412,3a,75y,90t/data=!3m4!1e1!3m2!1shGKBkvzRGicAbZXDsHkvcg!2e0'
    },
    {//Manamakhotheng, 北西州 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1snUY0olp49ye8mBSoAvxRvQ!2m2!1d-25.11024!2d27.19777!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-25.11024,27.19777,3a,75y,90t/data=!3m4!1e1!3m2!1snUY0olp49ye8mBSoAvxRvQ!2e0'
    },
    {//6 アンドラー (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqZ2UAyr9QvdtAIHTEFMrug!2m2!1d50.30277!2d6.29628!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.30277,6.29628,3a,75y,90t/data=!3m4!1e1!3m2!1sqZ2UAyr9QvdtAIHTEFMrug!2e0'
    },
    {//398 アントーニオ・フェリーシオ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s158jgTfU_zjVE_J3NIzBkA!2m2!1d-19.00784!2d-45.9583!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.00784,-45.9583,3a,75y,90t/data=!3m4!1e1!3m2!1s158jgTfU_zjVE_J3NIzBkA!2e0'
    },
    {//زوق مكايل (レバノン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s85b0rvWnxOH04s4NT3XOaQ!2m2!1d33.95696!2d35.6387!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.95696,35.6387,3a,75y,90t/data=!3m4!1e1!3m2!1s85b0rvWnxOH04s4NT3XOaQ!2e0'
    },
    {//AC 592 (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4OPfIxXdyBx9HyXAkQU_Wg!2m2!1d64.20895!2d18.72405!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@64.20895,18.72405,3a,75y,90t/data=!3m4!1e1!3m2!1s4OPfIxXdyBx9HyXAkQU_Wg!2e0'
    },
    {//382 エアポート・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9uAKMnvfoypjsOlSL2sAAQ!2m2!1d41.15313!2d-78.81652!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.15313,-78.81652,3a,75y,90t/data=!3m4!1e1!3m2!1s9uAKMnvfoypjsOlSL2sAAQ!2e0'
    },
    {//12 ビア・ア・オンサガ (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVcFY9AKOz6NeZc7UeWc9JA!2m2!1d6.22546!2d-72.7797!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.22546,-72.7797,3a,75y,90t/data=!3m4!1e1!3m2!1sVcFY9AKOz6NeZc7UeWc9JA!2e0'
    },
    {//70 ハイブルームラーン (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s071g7p-Ox5HGRHTL0w12YQ!2m2!1d51.37516!2d4.45401!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.37516,4.45401,3a,75y,90t/data=!3m4!1e1!3m2!1s071g7p-Ox5HGRHTL0w12YQ!2e0'
    },
    {//B4235 (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1su_6XW_dA2W9J64KrmNMGCg!2m2!1d51.67846!2d-2.82563!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.67846,-2.82563,3a,75y,90t/data=!3m4!1e1!3m2!1su_6XW_dA2W9J64KrmNMGCg!2e0'
    },
    {//13 Albatrossveien (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbv2m8VRwqeI9WBlstU-ryQ!2m2!1d59.11452!2d10.21068!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.11452,10.21068,3a,75y,90t/data=!3m4!1e1!3m2!1sbv2m8VRwqeI9WBlstU-ryQ!2e0'
    },
    {//ロンプール (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seqCAc_-5TMUOBLI4MFynzQ!2m2!1d26.10805!2d88.85356!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@26.10805,88.85356,3a,75y,90t/data=!3m4!1e1!3m2!1seqCAc_-5TMUOBLI4MFynzQ!2e0'
    },
    {//طریق محضة- أبو بادي (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWylfMibI7-OBo-GnRYG5Qg!2m2!1d24.63976!2d55.99019!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.63976,55.99019,3a,75y,90t/data=!3m4!1e1!3m2!1sWylfMibI7-OBo-GnRYG5Qg!2e0'
    },
    {//184 バリオヌエボ (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sYs09jS4lMHE3J4CkRjScnQ!2m2!1d-32.84909!2d-68.79836!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.84909,-68.79836,3a,75y,90t/data=!3m4!1e1!3m2!1sYs09jS4lMHE3J4CkRjScnQ!2e0'
    },
    {//ミニストロ・セギ (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sldo44A_Rr4DvJKlH2UyQjw!2m2!1d-33.23201!2d-60.31743!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.23201,-60.31743,3a,75y,90t/data=!3m4!1e1!3m2!1sldo44A_Rr4DvJKlH2UyQjw!2e0'
    },
    {//390 D291 (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sx2R1ImIrs2qkFCKzgedZ3w!2m2!1d44.30966!2d0.0751!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.30966,0.0751,3a,75y,90t/data=!3m4!1e1!3m2!1sx2R1ImIrs2qkFCKzgedZ3w!2e0'
    },
    {//北ケープ州 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPaYT4Fd5BlbO5EUiogDr0w!2m2!1d-32.16726!2d20.86089!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-32.16726,20.86089,3a,75y,90t/data=!3m4!1e1!3m2!1sPaYT4Fd5BlbO5EUiogDr0w!2e0'
    },
    {//メジャー・ディストリクト・ロード (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZovQhDALfvDNfLveOU3NJw!2m2!1d22.78861!2d75.75322!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.78861,75.75322,3a,75y,90t/data=!3m4!1e1!3m2!1sZovQhDALfvDNfLveOU3NJw!2e0'
    },
    {//245 ノース・メサ・パーク・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJjXrtqnHmn_aYkPZa_YsSQ!2m2!1d35.8926!2d-106.27685!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.8926,-106.27685,3a,75y,90t/data=!3m4!1e1!3m2!1sJjXrtqnHmn_aYkPZa_YsSQ!2e0'
    },
    {//10 (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMSFUU2knqyKQxC3i0JMXsw!2m2!1d1.08441!2d-77.63171!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.08441,-77.63171,3a,75y,90t/data=!3m4!1e1!3m2!1sMSFUU2knqyKQxC3i0JMXsw!2e0'
    },
    {//525 ジュセリーノ・クビチェック通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sstSIwegMY_vrnhRbTRPVoA!2m2!1d-16.93588!2d-40.68383!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-16.93588,-40.68383,3a,75y,90t/data=!3m4!1e1!3m2!1sstSIwegMY_vrnhRbTRPVoA!2e0'
    },
    {//28 バーンゼンアレー (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_9TDnAXirRdW38nBsuQYbw!2m2!1d53.5076!2d10.25994!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.5076,10.25994,3a,75y,90t/data=!3m4!1e1!3m2!1s_9TDnAXirRdW38nBsuQYbw!2e0'
    },
    {//ツルチャンスケ・テプリツェ, ジリナ (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sh1cwdTbs_t5Hn01JPlsvJA!2m2!1d48.86037!2d18.83872!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.86037,18.83872,3a,75y,90t/data=!3m4!1e1!3m2!1sh1cwdTbs_t5Hn01JPlsvJA!2e0'
    },
    {//アロヨ・デ・ラ・ポサ通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMGBGBMFDmT3d3hBGY-eKrw!2m2!1d40.6919!2d-3.52653!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.6919,-3.52653,3a,75y,90t/data=!3m4!1e1!3m2!1sMGBGBMFDmT3d3hBGY-eKrw!2e0'
    },
    {//クラースラヴァ, Krāslavas novads (ラトビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHoVF9bO5G1bxoNzx-howUg!2m2!1d55.895!2d27.12945!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.895,27.12945,3a,75y,90t/data=!3m4!1e1!3m2!1sHoVF9bO5G1bxoNzx-howUg!2e0'
    },
    {//12 ヴィチナーレ・ルーナ・エ・ソーレ・プルニッツェッダ通り (サルデーニャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssrrGSt7ApdS36FS777zcuQ!2m2!1d40.72989!2d8.57955!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.72989,8.57955,3a,75y,90t/data=!3m4!1e1!3m2!1ssrrGSt7ApdS36FS777zcuQ!2e0'
    },
    {//52 オーベレ・ミュルクゲン (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZGuR6Wb1rCr93-UOyZM7NA!2m2!1d46.79542!2d7.64348!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.79542,7.64348,3a,75y,90t/data=!3m4!1e1!3m2!1sZGuR6Wb1rCr93-UOyZM7NA!2e0'
    },
    {//20 ア・ラ・モラ通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPUTeWf2_loeH4qeTzc-i1A!2m2!1d19.45631!2d-100.49701!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.45631,-100.49701,3a,75y,90t/data=!3m4!1e1!3m2!1sPUTeWf2_loeH4qeTzc-i1A!2e0'
    },
    {//インデペンデンシア (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDS84780_r9DniLqCvMhdTQ!2m2!1d21.33167!2d-97.7518!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.33167,-97.7518,3a,75y,90t/data=!3m4!1e1!3m2!1sDS84780_r9DniLqCvMhdTQ!2e0'
    },
    {//4072 (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slDwZeoCnfOEl9GuedXi4Zg!2m2!1d43.25727!2d25.9649!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.25727,25.9649,3a,75y,90t/data=!3m4!1e1!3m2!1slDwZeoCnfOEl9GuedXi4Zg!2e0'
    },
    {//14 Turgaus g. (ラトビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKvANQF1DQeO3agZTe_XVag!2m2!1d55.80384!2d23.55083!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.80384,23.55083,3a,75y,90t/data=!3m4!1e1!3m2!1sKvANQF1DQeO3agZTe_XVag!2e0'
    },
    {//62 (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVrlPRHJkCOeKR5K0mpDdYw!2m2!1d6.49791!2d-74.35899!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.49791,-74.35899,3a,75y,90t/data=!3m4!1e1!3m2!1sVrlPRHJkCOeKR5K0mpDdYw!2e0'
    },
    {//15 ヤナ・コジェトゥルスキエゴ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqm6OUJ310byu4zCKRq09gA!2m2!1d51.9549!2d20.13373!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.9549,20.13373,3a,75y,90t/data=!3m4!1e1!3m2!1sqm6OUJ310byu4zCKRq09gA!2e0'
    },
    {//364 (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVx5TPS-u9AuJTBnL_bWzBw!2m2!1d64.56765!2d20.90432!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@64.56765,20.90432,3a,75y,90t/data=!3m4!1e1!3m2!1sVx5TPS-u9AuJTBnL_bWzBw!2e0'
    },
    {//9 ルイージ・マッフェイ通り (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWroH5ljXBnE9iYVr_2E0nA!2m2!1d45.92423!2d10.89835!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.92423,10.89835,3a,75y,90t/data=!3m4!1e1!3m2!1sWroH5ljXBnE9iYVr_2E0nA!2e0'
    },
    {//3 クシェンザ・ピョトラ・スカルギ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgOXrOS0oh9pXpzX4oR-jOA!2m2!1d53.139!2d17.60499!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.139,17.60499,3a,75y,90t/data=!3m4!1e1!3m2!1sgOXrOS0oh9pXpzX4oR-jOA!2e0'
    },
    {//128 プレ・グレル (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqYK51rNsDoBTHZDbVoNpKQ!2m2!1d45.30031!2d0.74029!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.30031,0.74029,3a,75y,90t/data=!3m4!1e1!3m2!1sqYK51rNsDoBTHZDbVoNpKQ!2e0'
    },
    {//59 桂林南路 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSYz77Vutm5YgWdqY9FcPfA!2m2!1d22.74223!2d121.14804!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.74223,121.14804,3a,75y,90t/data=!3m4!1e1!3m2!1sSYz77Vutm5YgWdqY9FcPfA!2e0'
    },
    {//K3234 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sF0pg3fWPIi6rCyE9q21TQw!2m2!1d48.94252!2d10.05412!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.94252,10.05412,3a,75y,90t/data=!3m4!1e1!3m2!1sF0pg3fWPIi6rCyE9q21TQw!2e0'
    },
    {//1838 ナロウズ・ヒル・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVlRshpdNAszuQlObjR00IQ!2m2!1d40.56761!2d-75.14297!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.56761,-75.14297,3a,75y,90t/data=!3m4!1e1!3m2!1sVlRshpdNAszuQlObjR00IQ!2e0'
    },
    {//61258 Township Hwy 8 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCv1jpmkSjozHfSqyrtoDXA!2m2!1d39.2997!2d-82.53814!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.2997,-82.53814,3a,75y,90t/data=!3m4!1e1!3m2!1sCv1jpmkSjozHfSqyrtoDXA!2e0'
    },
    {//ア・サン・ニコラス・デ・バリ通り (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seyDIrjYUwGoMw55dh4aDCw!2m2!1d9.25843!2d-75.86669!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.25843,-75.86669,3a,75y,90t/data=!3m4!1e1!3m2!1seyDIrjYUwGoMw55dh4aDCw!2e0'
    },
    {//ペードロ・イーヴォ・カンポス通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0ubl4XgbKswwwjXbtR17Jw!2m2!1d-26.57955!2d-52.32865!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.57955,-52.32865,3a,75y,90t/data=!3m4!1e1!3m2!1s0ubl4XgbKswwwjXbtR17Jw!2e0'
    },
    {//アンダコージョ, コキンボ (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svATzjwRVa87EW6R1lC0Hlg!2m2!1d-30.22666!2d-71.07854!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-30.22666,-71.07854,3a,75y,90t/data=!3m4!1e1!3m2!1svATzjwRVa87EW6R1lC0Hlg!2e0'
    },
    {//411 AL-130 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s57ef46wjCffKL5YIfsqFMA!2m2!1d-9.74146!2d-37.4336!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.74146,-37.4336,3a,75y,90t/data=!3m4!1e1!3m2!1s57ef46wjCffKL5YIfsqFMA!2e0'
    },
    {//650 フロンチノ・ロドリーゲス通り (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sy73dif3dP_XnibC0-t8p8g!2m2!1d-26.72836!2d-53.5102!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-26.72836,-53.5102,3a,75y,90t/data=!3m4!1e1!3m2!1sy73dif3dP_XnibC0-t8p8g!2e0'
    },
    {//シエムリアップ (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssF7nFFtHn1IUsEWEpmLDfA!2m2!1d13.30151!2d104.05246!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@13.30151,104.05246,3a,75y,90t/data=!3m4!1e1!3m2!1ssF7nFFtHn1IUsEWEpmLDfA!2e0'
    },
    {//31511 Range Rd 20 (カナダ平原州)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_H5HY-5UOZ9LDt-qd7nrKg!2m2!1d51.69304!2d-114.1434!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.69304,-114.1434,3a,75y,90t/data=!3m4!1e1!3m2!1s_H5HY-5UOZ9LDt-qd7nrKg!2e0'
    },
    {//319A (カンボジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-z3cs05OKRTwBJxXPnXPtw!2m2!1d11.069!2d106.10278!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.069,106.10278,3a,75y,90t/data=!3m4!1e1!3m2!1s-z3cs05OKRTwBJxXPnXPtw!2e0'
    },
    {//ミシオネス (アルゼンチン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swKI31uokP9-FF3aTPA33bQ!2m2!1d-27.52098!2d-58.55996!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.52098,-58.55996,3a,75y,90t/data=!3m4!1e1!3m2!1swKI31uokP9-FF3aTPA33bQ!2e0'
    },
    {//21023 ウェスト・リバー・ロード (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbj3YgpO8urveXKVwEkkilA!2m2!1d42.1557!2d-83.16367!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.1557,-83.16367,3a,75y,90t/data=!3m4!1e1!3m2!1sbj3YgpO8urveXKVwEkkilA!2e0'
    },
    {//50 スリーブナマン・ロード (北アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1so8kDrVCCCNLCLWr376yEOA!2m2!1d54.19724!2d-6.03278!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.19724,-6.03278,3a,75y,90t/data=!3m4!1e1!3m2!1so8kDrVCCCNLCLWr376yEOA!2e0'
    },
    {//33 マギストラリナヤ・ウーリツァ (ロシア中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si_0dRv9f2XrEWUNitUgHmg!2m2!1d54.57559!2d73.62702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.57559,73.62702,3a,75y,90t/data=!3m4!1e1!3m2!1si_0dRv9f2XrEWUNitUgHmg!2e0'
    },
    {//ハイフォン (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sz5G-C2BXDNDT-g2Ubv6kPg!2m2!1d20.81798!2d106.64145!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.81798,106.64145,3a,75y,90t/data=!3m4!1e1!3m2!1sz5G-C2BXDNDT-g2Ubv6kPg!2e0'
    },
    {//ポトカルパチェ県 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sXriyUSKYLCvnZffAoR0owg!2m2!1d50.8189!2d22.05857!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.8189,22.05857,3a,75y,90t/data=!3m4!1e1!3m2!1sXriyUSKYLCvnZffAoR0owg!2e0'
    },
    {//71 A4063 (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sb1YNLdlLJXxCNiOebbHNbw!2m2!1d51.60432!2d-3.64841!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.60432,-3.64841,3a,75y,90t/data=!3m4!1e1!3m2!1sb1YNLdlLJXxCNiOebbHNbw!2e0'
    },
    {//Carr Puerto Rico 2 (プエルトリコ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl-EQXxrybgLenvDN-6vZ2w!2m2!1d18.47415!2d-66.85842!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.47415,-66.85842,3a,75y,90t/data=!3m4!1e1!3m2!1sl-EQXxrybgLenvDN-6vZ2w!2e0'
    },
    {//Бозвелийско, バルナ (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smeTpik11AXv526qL1AGVXA!2m2!1d43.05164!2d27.44325!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.05164,27.44325,3a,75y,90t/data=!3m4!1e1!3m2!1smeTpik11AXv526qL1AGVXA!2e0'
    },
    {//ΙΑΣΙΟΥ (アルバニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shGl79sObfr1A27bedAQflg!2m2!1d39.62387!2d20.83154!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.62387,20.83154,3a,75y,90t/data=!3m4!1e1!3m2!1shGl79sObfr1A27bedAQflg!2e0'
    },
    {//172 ブリストル・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRXmzzatE6nSHgwwvaNakqw!2m2!1d44.02066!2d-69.52861!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.02066,-69.52861,3a,75y,90t/data=!3m4!1e1!3m2!1sRXmzzatE6nSHgwwvaNakqw!2e0'
    },
    {//ペロイ, イストリア (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sMinKUDWrobxMWv7JvOjDdA!2m2!1d44.95575!2d13.7881!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.95575,13.7881,3a,75y,90t/data=!3m4!1e1!3m2!1sMinKUDWrobxMWv7JvOjDdA!2e0'
    },
    {//ハノーファー, ニーダーザクセン (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK2Hs0x6Z9keZxAediI9WtA!2m2!1d52.36779!2d9.82701!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.36779,9.82701,3a,75y,90t/data=!3m4!1e1!3m2!1sK2Hs0x6Z9keZxAediI9WtA!2e0'
    },
    {//エスキシェヒル (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stU_QdtaIpa2anxdLDeyJbw!2m2!1d39.75451!2d30.94995!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.75451,30.94995,3a,75y,90t/data=!3m4!1e1!3m2!1stU_QdtaIpa2anxdLDeyJbw!2e0'
    },
    {//111 (デンマーク)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVreJvvx5-t71_CEK0p2K7A!2m2!1d56.17934!2d12.56312!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.17934,12.56312,3a,75y,90t/data=!3m4!1e1!3m2!1sVreJvvx5-t71_CEK0p2K7A!2e0'
    },
    {//デスフォード・レーン (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smDsBSF8i5A-ylGiUeCA0wg!2m2!1d52.63634!2d-1.2448!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.63634,-1.2448,3a,75y,90t/data=!3m4!1e1!3m2!1smDsBSF8i5A-ylGiUeCA0wg!2e0'
    },
    {//ザ・グランド・カナル・ウェイ (アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9ov0URqS24k-IIPlvY9O1Q!2m2!1d53.27923!2d-7.47697!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.27923,-7.47697,3a,75y,90t/data=!3m4!1e1!3m2!1s9ov0URqS24k-IIPlvY9O1Q!2e0'
    },
    {//ディウルベル (セネガル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sShKHNYnH4L7e1UBQ06snxw!2m2!1d14.69827!2d-16.26655!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.69827,-16.26655,3a,75y,90t/data=!3m4!1e1!3m2!1sShKHNYnH4L7e1UBQ06snxw!2e0'
    },
    {//451 Peräseinäjoentie (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGW3_gAlqDde_FYzubgyTew!2m2!1d62.59061!2d23.52765!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.59061,23.52765,3a,75y,90t/data=!3m4!1e1!3m2!1sGW3_gAlqDde_FYzubgyTew!2e0'
    },
    {//プジョル, オキシタニ (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5MCzxnN_iH8kOjIhuHwSAw!2m2!1d43.76657!2d3.32259!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.76657,3.32259,3a,75y,90t/data=!3m4!1e1!3m2!1s5MCzxnN_iH8kOjIhuHwSAw!2e0'
    },
    {//ウェールズ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGvn9qerZaut6tHIcTjO0mA!2m2!1d52.10477!2d-3.55279!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.10477,-3.55279,3a,75y,90t/data=!3m4!1e1!3m2!1sGvn9qerZaut6tHIcTjO0mA!2e0'
    },
    {//ラヌイ・サークル (ハワイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s1FgUw-3omKDEt-pdUnQR-w!2m2!1d20.89386!2d-156.43836!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.89386,-156.43836,3a,75y,90t/data=!3m4!1e1!3m2!1s1FgUw-3omKDEt-pdUnQR-w!2e0'
    },
    {//736 シティー・ハイウェイ 6 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqeFoTNSYx0uhIbG872MKCA!2m2!1d38.3603!2d-88.34733!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.3603,-88.34733,3a,75y,90t/data=!3m4!1e1!3m2!1sqeFoTNSYx0uhIbG872MKCA!2e0'
    },
    {//ミリタリー・ベース (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sph99SpiWihVymPPZKr_GjQ!2m2!1d-24.66862!2d28.82066!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-24.66862,28.82066,3a,75y,90t/data=!3m4!1e1!3m2!1sph99SpiWihVymPPZKr_GjQ!2e0'
    },
    {//216 М29 (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smfVp7ilf5YFoJFuW6ST9dA!2m2!1d44.48689!2d41.79877!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.48689,41.79877,3a,75y,90t/data=!3m4!1e1!3m2!1smfVp7ilf5YFoJFuW6ST9dA!2e0'
    },
    {//ペルナンブコ (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4waHkYz81B7pd_kzvASKnA!2m2!1d-7.87112!2d-35.56884!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.87112,-35.56884,3a,75y,90t/data=!3m4!1e1!3m2!1s4waHkYz81B7pd_kzvASKnA!2e0'
    },
    {//1338 Owaka Valley Rd (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scIeP8e2pwQ0zQPtJWtdRzw!2m2!1d-46.39448!2d169.51793!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-46.39448,169.51793,3a,75y,90t/data=!3m4!1e1!3m2!1scIeP8e2pwQ0zQPtJWtdRzw!2e0'
    },
    {//CU-1251 (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2yor2Gy43rposj2XeF95IA!2m2!1d-13.46918!2d-72.14902!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-13.46918,-72.14902,3a,75y,90t/data=!3m4!1e1!3m2!1s2yor2Gy43rposj2XeF95IA!2e0'
    },
    {//リオグランデ・ド・スル州 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1si6bEmehuCzyAWKlc51lWBA!2m2!1d-29.26746!2d-54.39683!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.26746,-54.39683,3a,75y,90t/data=!3m4!1e1!3m2!1si6bEmehuCzyAWKlc51lWBA!2e0'
    },
    {//34 вулиця Шевченка (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siwYZduFUktDhe_E3qaQh9Q!2m2!1d48.33896!2d30.23395!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.33896,30.23395,3a,75y,90t/data=!3m4!1e1!3m2!1siwYZduFUktDhe_E3qaQh9Q!2e0'
    },
    {//20 エンペドラダ通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sqWtcB36bMSZnzyFZ9jQ-Aw!2m2!1d39.91599!2d-5.17413!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.91599,-5.17413,3a,75y,90t/data=!3m4!1e1!3m2!1sqWtcB36bMSZnzyFZ9jQ-Aw!2e0'
    },
    {//195 Laivanrakentajantie (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdVAz4kr4QBIxDf9nWu9PDA!2m2!1d60.80537!2d21.39356!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.80537,21.39356,3a,75y,90t/data=!3m4!1e1!3m2!1sdVAz4kr4QBIxDf9nWu9PDA!2e0'
    },
    {//2 ジャン＝ルイ・エティエンヌ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sNmGQ-F6sPLJvhRn1FQcZPQ!2m2!1d49.18053!2d6.14556!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.18053,6.14556,3a,75y,90t/data=!3m4!1e1!3m2!1sNmGQ-F6sPLJvhRn1FQcZPQ!2e0'
    },
    {//157 レビット・ロード (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbNNdukSTwpxre-KKnAagBw!2m2!1d43.31313!2d-71.34702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.31313,-71.34702,3a,75y,90t/data=!3m4!1e1!3m2!1sbNNdukSTwpxre-KKnAagBw!2e0'
    },
    {//49 デュランヒル・ロード (イギリス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRR6wmMgI869KFINke7lNVA!2m2!1d54.89157!2d-2.90254!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.89157,-2.90254,3a,75y,90t/data=!3m4!1e1!3m2!1sRR6wmMgI869KFINke7lNVA!2e0'
    },
    {//5000 ボンポルトー (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-QJwWPeryhsGR8wLLF1QMA!2m2!1d43.16706!2d6.52116!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.16706,6.52116,3a,75y,90t/data=!3m4!1e1!3m2!1s-QJwWPeryhsGR8wLLF1QMA!2e0'
    },
    {//ドンピエール, グラン・テスト地域圏 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOyYhuoCCR-xhHMEhSSKWtw!2m2!1d48.24703!2d6.56699!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.24703,6.56699,3a,75y,90t/data=!3m4!1e1!3m2!1sOyYhuoCCR-xhHMEhSSKWtw!2e0'
    },
    {//BR-421 (ボリビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shZszr2Lgo794Kod51KG-hQ!2m2!1d-10.70286!2d-64.87367!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-10.70286,-64.87367,3a,75y,90t/data=!3m4!1e1!3m2!1shZszr2Lgo794Kod51KG-hQ!2e0'
    },
    {//ダーチナヤ・ウーリツァ (ベラルーシ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxc28HRr1yeNxJVgZxXFkJA!2m2!1d55.03663!2d32.72012!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.03663,32.72012,3a,75y,90t/data=!3m4!1e1!3m2!1sxc28HRr1yeNxJVgZxXFkJA!2e0'
    },
    {//10 ドクター・ベルナール・ゴドル通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srvej4fYTK_liCLquL-oogA!2m2!1d43.4835!2d-1.49577!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.4835,-1.49577,3a,75y,90t/data=!3m4!1e1!3m2!1srvej4fYTK_liCLquL-oogA!2e0'
    },
    {//スリガオ - ダヴァオ・コースタル・ロード (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szZuc46wdtxa6owKUxQR1Bw!2m2!1d9.57951!2d125.64111!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@9.57951,125.64111,3a,75y,90t/data=!3m4!1e1!3m2!1szZuc46wdtxa6owKUxQR1Bw!2e0'
    },
    {//2839 (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s91PSsuh3FoDt3jRREzoynQ!2m2!1d48.65327!2d20.22111!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.65327,20.22111,3a,75y,90t/data=!3m4!1e1!3m2!1s91PSsuh3FoDt3jRREzoynQ!2e0'
    },
    {//25 Jezerska (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKgiJylfNEUUs4ixf9HZ4vA!2m2!1d44.87381!2d20.61112!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.87381,20.61112,3a,75y,90t/data=!3m4!1e1!3m2!1sKgiJylfNEUUs4ixf9HZ4vA!2e0'
    },
    {//26 コントラーダ・ヴィヴァラ (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSaWWN8LK8XeZvU7Nqx9ozw!2m2!1d41.81003!2d14.59044!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.81003,14.59044,3a,75y,90t/data=!3m4!1e1!3m2!1sSaWWN8LK8XeZvU7Nqx9ozw!2e0'
    },
    {//1346 AL-51 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQnE-aiGuNxurnXS8Mpgnww!2m2!1d31.94874!2d-85.50187!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.94874,-85.50187,3a,75y,90t/data=!3m4!1e1!3m2!1sQnE-aiGuNxurnXS8Mpgnww!2e0'
    },
    {//40 カーナンリー・ロード (北アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s4TRpwh8yzIMdN1fEb4xpdw!2m2!1d54.8567!2d-7.13296!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.8567,-7.13296,3a,75y,90t/data=!3m4!1e1!3m2!1s4TRpwh8yzIMdN1fEb4xpdw!2e0'
    },
    {//436 OH-59 (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZXfNZ3K9pa8HzzedFyzXIQ!2m2!1d41.15791!2d-81.24845!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.15791,-81.24845,3a,75y,90t/data=!3m4!1e1!3m2!1sZXfNZ3K9pa8HzzedFyzXIQ!2e0'
    },
    {//4 75636. Sk. (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sEX0rpmO-CmXX-1vH3yOK_Q!2m2!1d37.02469!2d35.2753!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.02469,35.2753,3a,75y,90t/data=!3m4!1e1!3m2!1sEX0rpmO-CmXX-1vH3yOK_Q!2e0'
    },
    {//13 グリーン・ロード (北アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHwhj1JKXHqjvSAkGXtXbUg!2m2!1d55.12939!2d-6.73659!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.12939,-6.73659,3a,75y,90t/data=!3m4!1e1!3m2!1sHwhj1JKXHqjvSAkGXtXbUg!2e0'
    },
    {//16 イリニ通り (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5ttuMXDCIVoWnNsAYMrBjQ!2m2!1d47.52387!2d21.63611!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.52387,21.63611,3a,75y,90t/data=!3m4!1e1!3m2!1s5ttuMXDCIVoWnNsAYMrBjQ!2e0'
    },
    {//26 ダインルスト通り (ベネルクス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syXIBk4XUOg1IUPkZwkrptA!2m2!1d52.37722!2d4.59083!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.37722,4.59083,3a,75y,90t/data=!3m4!1e1!3m2!1syXIBk4XUOg1IUPkZwkrptA!2e0'
    },
    {//イースタン・シエラ・シニック・バイウェイ (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sL4KL84TfHSC8ZLH3V3eMWQ!2m2!1d37.78571!2d-119.0227!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.78571,-119.0227,3a,75y,90t/data=!3m4!1e1!3m2!1sL4KL84TfHSC8ZLH3V3eMWQ!2e0'
    },
    {//RP259 (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1siZw8npzC-kPoiF8Ui2fTmg!2m2!1d-31.69684!2d-68.55838!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.69684,-68.55838,3a,75y,90t/data=!3m4!1e1!3m2!1siZw8npzC-kPoiF8Ui2fTmg!2e0'
    },
    {//CE-375 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svpqft3ZwGcXemwKx8Fgyhw!2m2!1d-6.72096!2d-39.75635!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.72096,-39.75635,3a,75y,90t/data=!3m4!1e1!3m2!1svpqft3ZwGcXemwKx8Fgyhw!2e0'
    },
    {//アマプール, テランガーナ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQ-C__YH8wnygJNahV075Og!2m2!1d16.44209!2d77.8123!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@16.44209,77.8123,3a,75y,90t/data=!3m4!1e1!3m2!1sQ-C__YH8wnygJNahV075Og!2e0'
    },
    {//11 イグナシオ・サラゴサ通り (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sTd2YZyReYHG1rIuA86TW_g!2m2!1d19.38638!2d-96.97246!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@19.38638,-96.97246,3a,75y,90t/data=!3m4!1e1!3m2!1sTd2YZyReYHG1rIuA86TW_g!2e0'
    },
    {//ペルナンブコ (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sThi15Mx0nnUwRv9FV6tdXA!2m2!1d-8.47857!2d-35.013!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.47857,-35.013,3a,75y,90t/data=!3m4!1e1!3m2!1sThi15Mx0nnUwRv9FV6tdXA!2e0'
    },
    {//A テオスティトラ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQaxPAeFzZPXrzB6C7pW2Gw!2m2!1d21.14159!2d-98.61354!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@21.14159,-98.61354,3a,75y,90t/data=!3m4!1e1!3m2!1sQaxPAeFzZPXrzB6C7pW2Gw!2e0'
    },
    {//20 グーデヌス通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1so0ea_oUqcJgCD1_3KLaHFg!2m2!1d52.235!2d7.97856!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.235,7.97856,3a,75y,90t/data=!3m4!1e1!3m2!1so0ea_oUqcJgCD1_3KLaHFg!2e0'
    },
    {//25 V. István király útja (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssIEkhBnHuRXxA2Eyfk-__A!2m2!1d48.38402!2d21.64607!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.38402,21.64607,3a,75y,90t/data=!3m4!1e1!3m2!1ssIEkhBnHuRXxA2Eyfk-__A!2e0'
    },
    {//ナタックカルパラヤン・ロード (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shrsQR8J3Y4V8rxN4M4IRtg!2m2!1d10.63286!2d77.02987!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.63286,77.02987,3a,75y,90t/data=!3m4!1e1!3m2!1shrsQR8J3Y4V8rxN4M4IRtg!2e0'
    },
    {//サラワク (マレーシア (ボルネオ))
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCM8dd9nF18lPljydO8EJFQ!2m2!1d4.17719!2d114.32725!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.17719,114.32725,3a,75y,90t/data=!3m4!1e1!3m2!1sCM8dd9nF18lPljydO8EJFQ!2e0'
    },
    {//24 Brattbakken (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szKfKICQ2KRdsVYXxKKaw8g!2m2!1d59.44529!2d10.64292!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.44529,10.64292,3a,75y,90t/data=!3m4!1e1!3m2!1szKfKICQ2KRdsVYXxKKaw8g!2e0'
    },
    {//Dwight D. Eisenhower Hwy (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP-aKpSc6C4E27XWgO5bMyQ!2m2!1d41.57288!2d-106.15428!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.57288,-106.15428,3a,75y,90t/data=!3m4!1e1!3m2!1sP-aKpSc6C4E27XWgO5bMyQ!2e0'
    },
    {//アルスーア, ガリシア州 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOCMz-uYN_RxtxgRvz6KVzw!2m2!1d42.94555!2d-8.17082!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.94555,-8.17082,3a,75y,90t/data=!3m4!1e1!3m2!1sOCMz-uYN_RxtxgRvz6KVzw!2e0'
    },
    {//1045 エル・ラダル (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s96wGxLU3CB1gBPvmTzldUw!2m2!1d-38.4468!2d-71.88964!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-38.4468,-71.88964,3a,75y,90t/data=!3m4!1e1!3m2!1s96wGxLU3CB1gBPvmTzldUw!2e0'
    },
    {//フィゲイレド道路 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soiJmDs_-D7xfdxeXGRI2kQ!2m2!1d-6.27187!2d-39.93093!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-6.27187,-39.93093,3a,75y,90t/data=!3m4!1e1!3m2!1soiJmDs_-D7xfdxeXGRI2kQ!2e0'
    },
    {//67 Kaniža (クロアチア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suGY-rq4dF8C-EAQ3XKWrBg!2m2!1d44.53255!2d15.34902!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.53255,15.34902,3a,75y,90t/data=!3m4!1e1!3m2!1suGY-rq4dF8C-EAQ3XKWrBg!2e0'
    },
    {//LI-121 (ペルー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1ssnmjCZIrV5uaQjIxA74IAg!2m2!1d-8.31945!2d-78.42204!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-8.31945,-78.42204,3a,75y,90t/data=!3m4!1e1!3m2!1ssnmjCZIrV5uaQjIxA74IAg!2e0'
    },
    {//4 Hammarbacksvägen (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sll1Lrq8Gwn5YQWKA-tcxxw!2m2!1d60.15812!2d15.18697!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.15812,15.18697,3a,75y,90t/data=!3m4!1e1!3m2!1sll1Lrq8Gwn5YQWKA-tcxxw!2e0'
    },
    {//24 ゲイ・ストリート (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6aWV1s9zv8awcVXuibkwGg!2m2!1d44.11082!2d-69.11181!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.11082,-69.11181,3a,75y,90t/data=!3m4!1e1!3m2!1s6aWV1s9zv8awcVXuibkwGg!2e0'
    },
    {//DW813 (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV450JK2skxiXH4rhQNjPFw!2m2!1d51.92707!2d22.85422!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.92707,22.85422,3a,75y,90t/data=!3m4!1e1!3m2!1sV450JK2skxiXH4rhQNjPFw!2e0'
    },
    {//イングランド (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOuVhzawNGFc4JHIEsccWUw!2m2!1d52.8025!2d-0.89702!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.8025,-0.89702,3a,75y,90t/data=!3m4!1e1!3m2!1sOuVhzawNGFc4JHIEsccWUw!2e0'
    },
    {//アシム (ガーナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sFfXn1mPi3f3g4KSDcBV2rg!2m2!1d4.86341!2d-2.2425!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.86341,-2.2425,3a,75y,90t/data=!3m4!1e1!3m2!1sFfXn1mPi3f3g4KSDcBV2rg!2e0'
    },
    {//1 ボロン通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sfiXrwKkXks_LxOVNyeMqfQ!2m2!1d49.57015!2d5.34991!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.57015,5.34991,3a,75y,90t/data=!3m4!1e1!3m2!1sfiXrwKkXks_LxOVNyeMqfQ!2e0'
    },
    {//ドゥラン, グアヤス (エクアドル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRZeFFx9y8oA9Ms4k1-OJcQ!2m2!1d-2.16165!2d-79.80718!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-2.16165,-79.80718,3a,75y,90t/data=!3m4!1e1!3m2!1sRZeFFx9y8oA9Ms4k1-OJcQ!2e0'
    },
    {//ул. „ген. Никола Жеков“ (ブルガリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2t2gV5hty-4cMR4sC6TMNg!2m2!1d42.73775!2d23.29917!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.73775,23.29917,3a,75y,90t/data=!3m4!1e1!3m2!1s2t2gV5hty-4cMR4sC6TMNg!2e0'
    },
    {//3 Rue Clos Ler (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZVIAQr93PHzo_aqlRVal4w!2m2!1d47.62555!2d-2.64693!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.62555,-2.64693,3a,75y,90t/data=!3m4!1e1!3m2!1sZVIAQr93PHzo_aqlRVal4w!2e0'
    },
    {//109 モルガン通り (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5mwGRndK4OPmVCz4TDFqjA!2m2!1d45.13477!2d-71.81977!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.13477,-71.81977,3a,75y,90t/data=!3m4!1e1!3m2!1s5mwGRndK4OPmVCz4TDFqjA!2e0'
    },
    {//カミリング, ルソン中心部 (ルソン島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sP1i3WaehZH_adgOYUstDZA!2m2!1d15.70477!2d120.45367!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@15.70477,120.45367,3a,75y,90t/data=!3m4!1e1!3m2!1sP1i3WaehZH_adgOYUstDZA!2e0'
    },
    {//カイヌー (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s08ObU_zZOBaES6cH80AUfw!2m2!1d64.29293!2d29.06888!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@64.29293,29.06888,3a,75y,90t/data=!3m4!1e1!3m2!1s08ObU_zZOBaES6cH80AUfw!2e0'
    },
    {//199 Coast Rd (ニュージーランド北島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPJiiaQ2_f-JGREIE3OzxLQ!2m2!1d-41.29025!2d174.95032!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-41.29025,174.95032,3a,75y,90t/data=!3m4!1e1!3m2!1sPJiiaQ2_f-JGREIE3OzxLQ!2e0'
    },
    {//キトゥイ (ケニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stl-Y-02zTx5pOejmX-a0PQ!2m2!1d-1.81064!2d38.10513!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-1.81064,38.10513,3a,75y,90t/data=!3m4!1e1!3m2!1stl-Y-02zTx5pOejmX-a0PQ!2e0'
    },
    {//7 ボチカイ・イシトヴァーン通り (スロバキア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s395e4GpcfCxWURXKOk7HNQ!2m2!1d47.93181!2d21.06706!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.93181,21.06706,3a,75y,90t/data=!3m4!1e1!3m2!1s395e4GpcfCxWURXKOk7HNQ!2e0'
    },
    {//ルブリン (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBuktiNfxmB-xIrX6hSOg4A!2m2!1d51.35404!2d23.32458!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.35404,23.32458,3a,75y,90t/data=!3m4!1e1!3m2!1sBuktiNfxmB-xIrX6hSOg4A!2e0'
    },
    {//コール (アラブ首長国連邦)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2isi3WPVqj08ZQv7tKwIgA!2m2!1d25.79858!2d51.59411!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.79858,51.59411,3a,75y,90t/data=!3m4!1e1!3m2!1s2isi3WPVqj08ZQv7tKwIgA!2e0'
    },
    {//115 ブラックス・ロード・サウスウェスト (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9IgOYBKGiTXEBgNKYycdjg!2m2!1d40.00073!2d-82.67169!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.00073,-82.67169,3a,75y,90t/data=!3m4!1e1!3m2!1s9IgOYBKGiTXEBgNKYycdjg!2e0'
    },
    {//331 ビクーニャ・マケンナ (チリ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGiW7UOH85sWgb8cFwPhT4g!2m2!1d-31.63007!2d-71.16454!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-31.63007,-71.16454,3a,75y,90t/data=!3m4!1e1!3m2!1sGiW7UOH85sWgb8cFwPhT4g!2e0'
    },
    {//4 Kastanjegatan (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2tcYCTrr2C7gN2hqmnEBNg!2m2!1d59.635!2d17.06855!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.635,17.06855,3a,75y,90t/data=!3m4!1e1!3m2!1s2tcYCTrr2C7gN2hqmnEBNg!2e0'
    },
    {//406 キンタ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slKSs24O6_OpLZDeo_7X0NQ!2m2!1d29.35921!2d-107.73528!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@29.35921,-107.73528,3a,75y,90t/data=!3m4!1e1!3m2!1slKSs24O6_OpLZDeo_7X0NQ!2e0'
    },
    {//6 Triq Il-Qolla Is-Safra (マルタ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjAShc3FkzBIO8UiW4CFGMA!2m2!1d36.07179!2d14.25485!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@36.07179,14.25485,3a,75y,90t/data=!3m4!1e1!3m2!1sjAShc3FkzBIO8UiW4CFGMA!2e0'
    },
    {//チェロハラ・スカイウェイ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1soDbx8BZPUyDCaRp50V8AEQ!2m2!1d35.34587!2d-84.23656!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.34587,-84.23656,3a,75y,90t/data=!3m4!1e1!3m2!1soDbx8BZPUyDCaRp50V8AEQ!2e0'
    },
    {//35 リオ・サンティアゴ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2fd6dMhuOTJl5eTV66GeGA!2m2!1d25.07759!2d-108.0532!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.07759,-108.0532,3a,75y,90t/data=!3m4!1e1!3m2!1s2fd6dMhuOTJl5eTV66GeGA!2e0'
    },
    {//21 ユジュニ・ミクロライオン (モンゴル)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGAvSxOr6J6QlMAIE5hh7eQ!2m2!1d51.50698!2d104.14721!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.50698,104.14721,3a,75y,90t/data=!3m4!1e1!3m2!1sGAvSxOr6J6QlMAIE5hh7eQ!2e0'
    },
    {//JAL 314 (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCm6Ao-QaKMUTP8R9EMpJiA!2m2!1d20.63543!2d-102.03818!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.63543,-102.03818,3a,75y,90t/data=!3m4!1e1!3m2!1sCm6Ao-QaKMUTP8R9EMpJiA!2e0'
    },
    {//152 ルンゴマーレ・ジュゼッペ・ジャルディーナ (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVg7pImPAsB6gBFQnkdVrEw!2m2!1d38.03207!2d14.00182!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@38.03207,14.00182,3a,75y,90t/data=!3m4!1e1!3m2!1sVg7pImPAsB6gBFQnkdVrEw!2e0'
    },
    {//SP-261 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5sNzhNEFLcHQ60BeBhDcUA!2m2!1d-23.22123!2d-49.25986!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-23.22123,-49.25986,3a,75y,90t/data=!3m4!1e1!3m2!1s5sNzhNEFLcHQ60BeBhDcUA!2e0'
    },
    {//SP86 (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK7nkRnEUdiZy_nJiMbcvxA!2m2!1d41.77022!2d14.33278!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.77022,14.33278,3a,75y,90t/data=!3m4!1e1!3m2!1sK7nkRnEUdiZy_nJiMbcvxA!2e0'
    },
    {//I-10 (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZThci3sJimGYZveH7Q4F8Q!2m2!1d32.70707!2d-111.48557!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.70707,-111.48557,3a,75y,90t/data=!3m4!1e1!3m2!1sZThci3sJimGYZveH7Q4F8Q!2e0'
    },
    {//M41 (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sPuZNXLTpVD8XrP0raid-mw!2m2!1d42.62202!2d73.89104!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.62202,73.89104,3a,75y,90t/data=!3m4!1e1!3m2!1sPuZNXLTpVD8XrP0raid-mw!2e0'
    },
    {//17 アムリングシュタットアー通り (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srBLTyFYey1niXy8V9mvGSA!2m2!1d49.85752!2d11.00598!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.85752,11.00598,3a,75y,90t/data=!3m4!1e1!3m2!1srBLTyFYey1niXy8V9mvGSA!2e0'
    },
    {//マト・グロッソ・ド・スル州 (ブラジル中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s52gF7AfCmSnm2bmr8O18xQ!2m2!1d-21.77154!2d-55.30766!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.77154,-55.30766,3a,75y,90t/data=!3m4!1e1!3m2!1s52gF7AfCmSnm2bmr8O18xQ!2e0'
    },
    {//ジャノス・デ・クイバ - ヤルマル (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9BLDpmws4o-vHy33-Qmo2g!2m2!1d6.94406!2d-75.42518!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@6.94406,-75.42518,3a,75y,90t/data=!3m4!1e1!3m2!1s9BLDpmws4o-vHy33-Qmo2g!2e0'
    },
    {//カジェホン・ジェコラ (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBZzUGmC2BVBSIfrsRlTwpg!2m2!1d27.41787!2d-110.2448!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@27.41787,-110.2448,3a,75y,90t/data=!3m4!1e1!3m2!1sBZzUGmC2BVBSIfrsRlTwpg!2e0'
    },
    {//カルカー, 中央ヴィサヤ (フィリピン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sraxXbou3DYgkgtU4WwKunQ!2m2!1d10.10974!2d123.63095!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@10.10974,123.63095,3a,75y,90t/data=!3m4!1e1!3m2!1sraxXbou3DYgkgtU4WwKunQ!2e0'
    },
    {//台中 (台湾)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stb2grEVqfe-5dij_XCEW8g!2m2!1d24.31574!2d121.2979!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@24.31574,121.2979,3a,75y,90t/data=!3m4!1e1!3m2!1stb2grEVqfe-5dij_XCEW8g!2e0'
    },
    {//4950 NC-53 (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX2LEPn5PgLmh-tQGq_iWUQ!2m2!1d34.54297!2d-78.00611!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@34.54297,-78.00611,3a,75y,90t/data=!3m4!1e1!3m2!1sX2LEPn5PgLmh-tQGq_iWUQ!2e0'
    },
    {//565 Taka-Keljontie (フィンランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3OzUzPud6xXXNWUpwXakGw!2m2!1d62.21448!2d25.60321!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.21448,25.60321,3a,75y,90t/data=!3m4!1e1!3m2!1s3OzUzPud6xXXNWUpwXakGw!2e0'
    },
    {//16270 サウスウェスト 272nd ストリート (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sS3Gs66nKpvCQilU5SOMgRQ!2m2!1d25.51309!2d-80.4552!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@25.51309,-80.4552,3a,75y,90t/data=!3m4!1e1!3m2!1sS3Gs66nKpvCQilU5SOMgRQ!2e0'
    },
    {//ウェールズ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBGDxdrG8Dw3PjVjQYF64IQ!2m2!1d52.29247!2d-3.60686!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.29247,-3.60686,3a,75y,90t/data=!3m4!1e1!3m2!1sBGDxdrG8Dw3PjVjQYF64IQ!2e0'
    },
    {//2183 ラーキン・ロード (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRyYkbz2VwY_ja0QHa_Zrgg!2m2!1d39.38533!2d-121.65324!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.38533,-121.65324,3a,75y,90t/data=!3m4!1e1!3m2!1sRyYkbz2VwY_ja0QHa_Zrgg!2e0'
    },
    {//R-69 (カザフスタン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9RFDrE-s_wbSjSq7QJ8xQw!2m2!1d45.08001!2d64.68776!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.08001,64.68776,3a,75y,90t/data=!3m4!1e1!3m2!1s9RFDrE-s_wbSjSq7QJ8xQw!2e0'
    },
    {//ウェールズ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCZVQTdkNlzTkb_8gcn9K9w!2m2!1d52.75307!2d-3.81269!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.75307,-3.81269,3a,75y,90t/data=!3m4!1e1!3m2!1sCZVQTdkNlzTkb_8gcn9K9w!2e0'
    },
    {//Mohanpur, 西ベンガル (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWSmYYAd4AZy7plB2JZLASQ!2m2!1d23.28401!2d87.7369!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@23.28401,87.7369,3a,75y,90t/data=!3m4!1e1!3m2!1sWSmYYAd4AZy7plB2JZLASQ!2e0'
    },
    {//バル (セルビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_M9S37lwuxSdbDbXYXGKBg!2m2!1d42.25578!2d18.97759!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.25578,18.97759,3a,75y,90t/data=!3m4!1e1!3m2!1s_M9S37lwuxSdbDbXYXGKBg!2e0'
    },
    {//K18 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUEgZdXMAusRvtLMvOp2TvA!2m2!1d52.28365!2d9.12148!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.28365,9.12148,3a,75y,90t/data=!3m4!1e1!3m2!1sUEgZdXMAusRvtLMvOp2TvA!2e0'
    },
    {//RP11 (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLWL91AizIPQaN2ucdq1xwA!2m2!1d-27.01287!2d-54.68625!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-27.01287,-54.68625,3a,75y,90t/data=!3m4!1e1!3m2!1sLWL91AizIPQaN2ucdq1xwA!2e0'
    },
    {//日田市, 大分県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1swtHQV_S6d8B1sTOjw9jMkw!2m2!1d33.22871!2d131.08638!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.22871,131.08638,3a,75y,90t/data=!3m4!1e1!3m2!1swtHQV_S6d8B1sTOjw9jMkw!2e0'
    },
    {//54 вулиця Гетьмана Полуботка (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sg9VaCSq_MTkKuR6ANXIEsw!2m2!1d51.49929!2d31.31215!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.49929,31.31215,3a,75y,90t/data=!3m4!1e1!3m2!1sg9VaCSq_MTkKuR6ANXIEsw!2e0'
    },
    {//カシャリアス, サンタレン (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sBSh8NjLgJGBNacNe-Zu1Vw!2m2!1d39.70435!2d-8.54985!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@39.70435,-8.54985,3a,75y,90t/data=!3m4!1e1!3m2!1sBSh8NjLgJGBNacNe-Zu1Vw!2e0'
    },
    {//B246 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syPvlG3j-cdu9LhUhG3Qhhg!2m2!1d52.04589!2d11.12872!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@52.04589,11.12872,3a,75y,90t/data=!3m4!1e1!3m2!1syPvlG3j-cdu9LhUhG3Qhhg!2e0'
    },
    {//5 Ringvägen (ノルウェー北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sln5W55vvnxKyGruFxRnaEg!2m2!1d65.83825!2d24.12572!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@65.83825,24.12572,3a,75y,90t/data=!3m4!1e1!3m2!1sln5W55vvnxKyGruFxRnaEg!2e0'
    },
    {//Jēkabpils novads (ラトビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1svSmp75r3ExhCpsclKun1ow!2m2!1d56.13221!2d25.93469!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@56.13221,25.93469,3a,75y,90t/data=!3m4!1e1!3m2!1svSmp75r3ExhCpsclKun1ow!2e0'
    },
    {//海老名市, 神奈川県 (日本)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sGM9yoo3bxwWH6Kn6Gasn1g!2m2!1d35.47626!2d139.43393!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.47626,139.43393,3a,75y,90t/data=!3m4!1e1!3m2!1sGM9yoo3bxwWH6Kn6Gasn1g!2e0'
    },
    {//BA-451 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxDseXsDVJompHLC6j7j9dw!2m2!1d-11.05064!2d-44.51652!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-11.05064,-44.51652,3a,75y,90t/data=!3m4!1e1!3m2!1sxDseXsDVJompHLC6j7j9dw!2e0'
    },
    {//ペンブローク, ウェールズ (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scXcv2qPKZmuVlykQ2U3_Ww!2m2!1d51.68485!2d-4.92419!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.68485,-4.92419,3a,75y,90t/data=!3m4!1e1!3m2!1scXcv2qPKZmuVlykQ2U3_Ww!2e0'
    },
    {//ティフアナ, バハカリフォルニア (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8m08tGY-x7t6jP0dSJ_3bA!2m2!1d32.42598!2d-116.94423!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.42598,-116.94423,3a,75y,90t/data=!3m4!1e1!3m2!1s8m08tGY-x7t6jP0dSJ_3bA!2e0'
    },
    {//ランジング・ロード (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQDHLABJCGY9Qed-LquXrQw!2m2!1d31.93898!2d-109.84723!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@31.93898,-109.84723,3a,75y,90t/data=!3m4!1e1!3m2!1sQDHLABJCGY9Qed-LquXrQw!2e0'
    },
    {//1347 アンシエンヌ・ルート・ド・コンブルー (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sHVahhHw_qjYejPqBIJHCVg!2m2!1d45.92566!2d6.62776!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.92566,6.62776,3a,75y,90t/data=!3m4!1e1!3m2!1sHVahhHw_qjYejPqBIJHCVg!2e0'
    },
    {//166 RJ-230 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7kQcFSSjG_k6RNe3KefbWA!2m2!1d-21.13534!2d-41.68187!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-21.13534,-41.68187,3a,75y,90t/data=!3m4!1e1!3m2!1s7kQcFSSjG_k6RNe3KefbWA!2e0'
    },
    {//サン・マルティン・カバジェロ (メキシコ南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1smEhh8RTUN6qMuwEbB8MsAA!2m2!1d18.018!2d-102.28194!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.018,-102.28194,3a,75y,90t/data=!3m4!1e1!3m2!1smEhh8RTUN6qMuwEbB8MsAA!2e0'
    },
    {//11 Elgvegen (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSvKE-DiQUd8TVnBJpkP52Q!2m2!1d60.71666!2d10.62009!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.71666,10.62009,3a,75y,90t/data=!3m4!1e1!3m2!1sSvKE-DiQUd8TVnBJpkP52Q!2e0'
    },
    {//Knarvik, ヴェストラン県 (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJJAC60eCf6vP9Z1gIAX8rQ!2m2!1d60.55023!2d5.3058!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.55023,5.3058,3a,75y,90t/data=!3m4!1e1!3m2!1sJJAC60eCf6vP9Z1gIAX8rQ!2e0'
    },
    {//2293 D56 (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sdX2Tnj9tcLhXNM3chT5ptw!2m2!1d43.55135!2d2.2758!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.55135,2.2758,3a,75y,90t/data=!3m4!1e1!3m2!1sdX2Tnj9tcLhXNM3chT5ptw!2e0'
    },
    {//126 エドバルダ・デンボフスキエゴ (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1skn15ho0NhCYYJYC_MHT90g!2m2!1d51.10584!2d17.10889!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@51.10584,17.10889,3a,75y,90t/data=!3m4!1e1!3m2!1skn15ho0NhCYYJYC_MHT90g!2e0'
    },
    {//2 ヘートヴェゼール通り (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sykD595PS6ix3ZXb0mvxQGg!2m2!1d46.81163!2d19.99881!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.81163,19.99881,3a,75y,90t/data=!3m4!1e1!3m2!1sykD595PS6ix3ZXb0mvxQGg!2e0'
    },
    {//Google マップ (フェロー諸島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1st9yG2To3sYpxWrN_taGfhw!2m2!1d62.28952!2d-7.0061!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@62.28952,-7.0061,3a,75y,90t/data=!3m4!1e1!3m2!1st9yG2To3sYpxWrN_taGfhw!2e0'
    },
    {//TAM 66 (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUi9fOpo77CoF-ZrIEQkDrw!2m2!1d22.85174!2d-99.3467!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@22.85174,-99.3467,3a,75y,90t/data=!3m4!1e1!3m2!1sUi9fOpo77CoF-ZrIEQkDrw!2e0'
    },
    {//2 オクターヴ・フイエ通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suVvteERm8JeHbpRUoa8gwQ!2m2!1d45.44996!2d4.36337!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.44996,4.36337,3a,75y,90t/data=!3m4!1e1!3m2!1suVvteERm8JeHbpRUoa8gwQ!2e0'
    },
    {//プレイベン (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sztcK73f8fKs3mjwgl4Nqpw!2m2!1d11.59061!2d105.21237!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@11.59061,105.21237,3a,75y,90t/data=!3m4!1e1!3m2!1sztcK73f8fKs3mjwgl4Nqpw!2e0'
    },
    {//129 Egebjergvej (デンマーク)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suarhaXzCo0LpHKzLbeJOjw!2m2!1d55.90337!2d11.66842!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.90337,11.66842,3a,75y,90t/data=!3m4!1e1!3m2!1suarhaXzCo0LpHKzLbeJOjw!2e0'
    },
    {//Google マップ (アメリカ南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjM0KpDUpe4FRw2mw9Y7BKw!2m2!1d35.68972!2d-79.04895!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.68972,-79.04895,3a,75y,90t/data=!3m4!1e1!3m2!1sjM0KpDUpe4FRw2mw9Y7BKw!2e0'
    },
    {//Radnička (クロアチア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shZWxKaY0qwK8azWkECJF6g!2m2!1d44.38908!2d19.10119!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.38908,19.10119,3a,75y,90t/data=!3m4!1e1!3m2!1shZWxKaY0qwK8azWkECJF6g!2e0'
    },
    {//1311 R. José Francisco Allgaier (ブラジル南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saGBq-mJYE0_I0MTc3R_Brw!2m2!1d-29.46508!2d-52.07597!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-29.46508,-52.07597,3a,75y,90t/data=!3m4!1e1!3m2!1saGBq-mJYE0_I0MTc3R_Brw!2e0'
    },
    {//L163 (オーストリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sCrxG7wpZbRhY8ZxzI6-LtA!2m2!1d48.0203!2d16.62618!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.0203,16.62618,3a,75y,90t/data=!3m4!1e1!3m2!1sCrxG7wpZbRhY8ZxzI6-LtA!2e0'
    },
    {//カルトラ, ヒーウ (エストニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sAWMjvQak45wAPBENm65coA!2m2!1d58.99005!2d22.75449!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@58.99005,22.75449,3a,75y,90t/data=!3m4!1e1!3m2!1sAWMjvQak45wAPBENm65coA!2e0'
    },
    {//1292 シャトルズ・ロード (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sI1pSJHFyhhj-QCxuPBLZNw!2m2!1d32.83626!2d-98.08791!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.83626,-98.08791,3a,75y,90t/data=!3m4!1e1!3m2!1sI1pSJHFyhhj-QCxuPBLZNw!2e0'
    },
    {//Jl. Jend. Sudirman (マレー半島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seWG8QtLwldQZD8ZYVSprRg!2m2!1d1.61984!2d101.64851!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@1.61984,101.64851,3a,75y,90t/data=!3m4!1e1!3m2!1seWG8QtLwldQZD8ZYVSprRg!2e0'
    },
    {//CHIH 11D (メキシコ北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s8Rty-YheG2H3e5VGp3xYrg!2m2!1d28.54374!2d-107.47418!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.54374,-107.47418,3a,75y,90t/data=!3m4!1e1!3m2!1s8Rty-YheG2H3e5VGp3xYrg!2e0'
    },
    {//103 Sundsbyvägen (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1seQTd5tpFSkRfWQWxMFogIA!2m2!1d58.03523!2d11.66688!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@58.03523,11.66688,3a,75y,90t/data=!3m4!1e1!3m2!1seQTd5tpFSkRfWQWxMFogIA!2e0'
    },
    {//1678 イースト・バトラー・アベニュー (アメリカ山岳部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s3vqndTSbpsRGvQe9nsXhkg!2m2!1d35.25438!2d-114.03268!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.25438,-114.03268,3a,75y,90t/data=!3m4!1e1!3m2!1s3vqndTSbpsRGvQe9nsXhkg!2e0'
    },
    {//DJ182B (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scotb_NcVpsGFL8aVixz7CA!2m2!1d47.49592!2d23.42328!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.49592,23.42328,3a,75y,90t/data=!3m4!1e1!3m2!1scotb_NcVpsGFL8aVixz7CA!2e0'
    },
    {//1047 Dipton-Castlerock Rd (ニュージーランド南島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s_2regkMJEeQRHtM7wz_eMw!2m2!1d-45.80541!2d168.37621!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-45.80541,168.37621,3a,75y,90t/data=!3m4!1e1!3m2!1s_2regkMJEeQRHtM7wz_eMw!2e0'
    },
    {//ア・サン・マルティン・デ・バルベニ通り (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0eqrWM45YFY4a4B3lS7nFw!2m2!1d41.73488!2d-4.45453!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.73488,-4.45453,3a,75y,90t/data=!3m4!1e1!3m2!1s0eqrWM45YFY4a4B3lS7nFw!2e0'
    },
    {//テュゼール通り (ハンガリー)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWlp4ZKp-RuFiKy6SawbglA!2m2!1d46.06233!2d18.20872!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.06233,18.20872,3a,75y,90t/data=!3m4!1e1!3m2!1sWlp4ZKp-RuFiKy6SawbglA!2e0'
    },
    {//4343 デスカンソ・アベニュー (アメリカ西海岸)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sUv0cIH64rnpiF4qbWVNrPA!2m2!1d33.97091!2d-117.71104!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@33.97091,-117.71104,3a,75y,90t/data=!3m4!1e1!3m2!1sUv0cIH64rnpiF4qbWVNrPA!2e0'
    },
    {//6 Kranvägen (スウェーデン南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s-1HFAciRDYmYQDELr3d6OQ!2m2!1d59.22915!2d14.42445!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.22915,14.42445,3a,75y,90t/data=!3m4!1e1!3m2!1s-1HFAciRDYmYQDELr3d6OQ!2e0'
    },
    {//3 Priemyselná (ポーランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s5fi40g9ZoNr2Tq0FAkNibg!2m2!1d49.03871!2d19.7111!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.03871,19.7111,3a,75y,90t/data=!3m4!1e1!3m2!1s5fi40g9ZoNr2Tq0FAkNibg!2e0'
    },
    {//DR1270 (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sScoQAdrtmJRksCDye9_bzw!2m2!1d-34.23501!2d19.41276!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-34.23501,19.41276,3a,75y,90t/data=!3m4!1e1!3m2!1sScoQAdrtmJRksCDye9_bzw!2e0'
    },
    {//東ケープ (南アフリカ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sZxdxKpQO0gCwQOahyJkkfA!2m2!1d-33.80689!2d24.90026!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-33.80689,24.90026,3a,75y,90t/data=!3m4!1e1!3m2!1sZxdxKpQO0gCwQOahyJkkfA!2e0'
    },
    {//2 プージュ通り (フランス南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s58JZmRFMS86yubXFp3ocmQ!2m2!1d45.7938!2d1.12155!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.7938,1.12155,3a,75y,90t/data=!3m4!1e1!3m2!1s58JZmRFMS86yubXFp3ocmQ!2e0'
    },
    {//19 вулиця Миру (ウクライナ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sl-s3FG8yiMZrx0n9pdzgwQ!2m2!1d49.94619!2d35.90375!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@49.94619,35.90375,3a,75y,90t/data=!3m4!1e1!3m2!1sl-s3FG8yiMZrx0n9pdzgwQ!2e0'
    },
    {//N342 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm4yFHhj_qODa8ftmOG0Qow!2m2!1d40.09048!2d-8.3418!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.09048,-8.3418,3a,75y,90t/data=!3m4!1e1!3m2!1sm4yFHhj_qODa8ftmOG0Qow!2e0'
    },
    {//R132 (北アイルランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1stPpfdl2DQoVSq4pqIWlBqg!2m2!1d54.0409!2d-6.37061!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@54.0409,-6.37061,3a,75y,90t/data=!3m4!1e1!3m2!1stPpfdl2DQoVSq4pqIWlBqg!2e0'
    },
    {//Bờ Y, クアンガイ (ラオス)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sT8F4D9t6dQbQNkMeTnMaMg!2m2!1d14.73164!2d107.63537!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@14.73164,107.63537,3a,75y,90t/data=!3m4!1e1!3m2!1sT8F4D9t6dQbQNkMeTnMaMg!2e0'
    },
    {//DJ720A (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJ2o7C6prz2Nq0YAa-wEM_A!2m2!1d44.84449!2d25.67719!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.84449,25.67719,3a,75y,90t/data=!3m4!1e1!3m2!1sJ2o7C6prz2Nq0YAa-wEM_A!2e0'
    },
    {//170 ゲンツェ通り (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szQlOm1ab668MOM9mwvEc5A!2m2!1d50.84286!2d4.00924!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.84286,4.00924,3a,75y,90t/data=!3m4!1e1!3m2!1szQlOm1ab668MOM9mwvEc5A!2e0'
    },
    {//中部ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1saEv16YubXGy1ZdpQosmI_A!2m2!1d-7.18614!2d109.88414!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.18614,109.88414,3a,75y,90t/data=!3m4!1e1!3m2!1saEv16YubXGy1ZdpQosmI_A!2e0'
    },
    {//マルドングリー, マハーラーシュトラ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spJIIZ3y5uFwx_V7_0EHPbw!2m2!1d20.59318!2d79.87824!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@20.59318,79.87824,3a,75y,90t/data=!3m4!1e1!3m2!1spJIIZ3y5uFwx_V7_0EHPbw!2e0'
    },
    {//7956 County Road 14 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sj2SWuqXpkekwnm7gBTaEyw!2m2!1d43.81737!2d-75.53315!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.81737,-75.53315,3a,75y,90t/data=!3m4!1e1!3m2!1sj2SWuqXpkekwnm7gBTaEyw!2e0'
    },
    {//38 K570 (タイ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sKMS3lPNjoIteObH6jqdieg!2m2!1d5.81353!2d100.76446!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@5.81353,100.76446,3a,75y,90t/data=!3m4!1e1!3m2!1sKMS3lPNjoIteObH6jqdieg!2e0'
    },
    {//20090 County Rd 2 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDeKZv9XVFiZqDhXlMtF0Mw!2m2!1d45.1183!2d-74.51674!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@45.1183,-74.51674,3a,75y,90t/data=!3m4!1e1!3m2!1sDeKZv9XVFiZqDhXlMtF0Mw!2e0'
    },
    {//アルバラド＝ピエドラス (コロンビア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sk51fztHiqOXL0FXhX3qi7w!2m2!1d4.56214!2d-74.95036!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@4.56214,-74.95036,3a,75y,90t/data=!3m4!1e1!3m2!1sk51fztHiqOXL0FXhX3qi7w!2e0'
    },
    {//6 ヴィチナーレ・モンタニェゼ通り (サルデーニャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sSLXp7d8RX585oLB1Grwt2w!2m2!1d40.57335!2d8.32789!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.57335,8.32789,3a,75y,90t/data=!3m4!1e1!3m2!1sSLXp7d8RX585oLB1Grwt2w!2e0'
    },
    {//プレジデンテ・ジュセリーノ・クビチェック高速道路 (ブラジル北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s0Yldb-z6DJFVCzGKjh84Mg!2m2!1d-7.203!2d-41.40893!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.203,-41.40893,3a,75y,90t/data=!3m4!1e1!3m2!1s0Yldb-z6DJFVCzGKjh84Mg!2e0'
    },
    {//マールケダル, フランデレン地域 (フランス北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s2WbFcoOPtUs1L_vZTUpC2w!2m2!1d50.79047!2d3.5897!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.79047,3.5897,3a,75y,90t/data=!3m4!1e1!3m2!1s2WbFcoOPtUs1L_vZTUpC2w!2e0'
    },
    {//132 マリア・レオポウジナ通り (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1suDTQdobiiVK6_P3YUxBiNw!2m2!1d-18.23057!2d-43.61083!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-18.23057,-43.61083,3a,75y,90t/data=!3m4!1e1!3m2!1suDTQdobiiVK6_P3YUxBiNw!2e0'
    },
    {//アーケシュフース県 (ノルウェー南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s71THgeOZmIQH1rPQE7nL8w!2m2!1d60.03712!2d11.54569!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@60.03712,11.54569,3a,75y,90t/data=!3m4!1e1!3m2!1s71THgeOZmIQH1rPQE7nL8w!2e0'
    },
    {//AMG-4020 (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1srvl4E5mcg2mhV9UpwT8-3w!2m2!1d-19.35334!2d-42.15343!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-19.35334,-42.15343,3a,75y,90t/data=!3m4!1e1!3m2!1srvl4E5mcg2mhV9UpwT8-3w!2e0'
    },
    {//71 Atotxarreka Bidea (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sOT3qRM9ovDNqBKoj7CLluA!2m2!1d43.29401!2d-2.00114!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.29401,-2.00114,3a,75y,90t/data=!3m4!1e1!3m2!1sOT3qRM9ovDNqBKoj7CLluA!2e0'
    },
    {//DSA-181 (スペイン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sD2VxBMsXiJ1CTXf-Gzn8_w!2m2!1d40.37774!2d-5.7298!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.37774,-5.7298,3a,75y,90t/data=!3m4!1e1!3m2!1sD2VxBMsXiJ1CTXf-Gzn8_w!2e0'
    },
    {//Palamutçuk, アイドゥン (トルコ西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sm5AJ_sl7wuZrYU2YnO5q-A!2m2!1d37.73821!2d28.75457!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.73821,28.75457,3a,75y,90t/data=!3m4!1e1!3m2!1sm5AJ_sl7wuZrYU2YnO5q-A!2e0'
    },
    {//アブルッツォ (イタリア南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sp9njuvyzBjw8ErBrHUyqXw!2m2!1d42.38486!2d13.6621!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@42.38486,13.6621,3a,75y,90t/data=!3m4!1e1!3m2!1sp9njuvyzBjw8ErBrHUyqXw!2e0'
    },
    {//オブエスド・スラフスカ (リトアニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1spXhoaaZBnU3Y93xEmMT8cA!2m2!1d55.05374!2d21.6804!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.05374,21.6804,3a,75y,90t/data=!3m4!1e1!3m2!1spXhoaaZBnU3Y93xEmMT8cA!2e0'
    },
    {//マルケ (イタリア北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sLZWNuPDQJu2B6AWS_EzU-A!2m2!1d43.65142!2d12.48691!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.65142,12.48691,3a,75y,90t/data=!3m4!1e1!3m2!1sLZWNuPDQJu2B6AWS_EzU-A!2e0'
    },
    {//Str. ペトレ・イスピレスク (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sIkiOK55XC5APBoVjutOCOw!2m2!1d44.21045!2d26.90612!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.21045,26.90612,3a,75y,90t/data=!3m4!1e1!3m2!1sIkiOK55XC5APBoVjutOCOw!2e0'
    },
    {//ブロッキスヒル・ロード (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgYUvIQv8MzaAyQjI63lsiQ!2m2!1d50.90471!2d-1.57525!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@50.90471,-1.57525,3a,75y,90t/data=!3m4!1e1!3m2!1sgYUvIQv8MzaAyQjI63lsiQ!2e0'
    },
    {//39 フランチェスコ・クリスピ通り (シチリア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sV0eRHLZFFwZmIG3cqKcEIA!2m2!1d37.77648!2d12.87847!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.77648,12.87847,3a,75y,90t/data=!3m4!1e1!3m2!1sV0eRHLZFFwZmIG3cqKcEIA!2e0'
    },
    {//2825 ランパサス・ドライブ (アメリカ中部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sgb7e_P7Qaw3s-Uy7c77BXA!2m2!1d32.95402!2d-96.31001!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@32.95402,-96.31001,3a,75y,90t/data=!3m4!1e1!3m2!1sgb7e_P7Qaw3s-Uy7c77BXA!2e0'
    },
    {//RP58 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxIOYCyeg52Cn4tTkeMDHyw!2m2!1d-41.40933!2d-66.05058!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-41.40933,-66.05058,3a,75y,90t/data=!3m4!1e1!3m2!1sxIOYCyeg52Cn4tTkeMDHyw!2e0'
    },
    {//RP48 (パタゴニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s7LjzIhF7m8Yiz2wYV41qxQ!2m2!1d-44.01905!2d-67.25633!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-44.01905,-67.25633,3a,75y,90t/data=!3m4!1e1!3m2!1s7LjzIhF7m8Yiz2wYV41qxQ!2e0'
    },
    {//69 P291 (ジョージア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sK6MFdXtLagD6CpKGgQXiRQ!2m2!1d43.48612!2d43.76412!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.48612,43.76412,3a,75y,90t/data=!3m4!1e1!3m2!1sK6MFdXtLagD6CpKGgQXiRQ!2e0'
    },
    {//41 Selbäcksvägen (スウェーデン北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sRmzD8fYL8Aji4FCzVtuGDg!2m2!1d61.00329!2d14.51062!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@61.00329,14.51062,3a,75y,90t/data=!3m4!1e1!3m2!1sRmzD8fYL8Aji4FCzVtuGDg!2e0'
    },
    {//Gerede - Gürbulak Otoyolu (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1slgmj2zplSRGurZqmdi0uhQ!2m2!1d40.86491!2d35.34362!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.86491,35.34362,3a,75y,90t/data=!3m4!1e1!3m2!1slgmj2zplSRGurZqmdi0uhQ!2e0'
    },
    {//デリー (インド北部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sDi9023cZIgeilaTGxrF4tA!2m2!1d28.59846!2d76.95571!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@28.59846,76.95571,3a,75y,90t/data=!3m4!1e1!3m2!1sDi9023cZIgeilaTGxrF4tA!2e0'
    },
    {//バレー・レーン (イングランド)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1shgEaM-egnTOhNLh7gxa9OQ!2m2!1d53.00234!2d-0.7808!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@53.00234,-0.7808,3a,75y,90t/data=!3m4!1e1!3m2!1shgEaM-egnTOhNLh7gxa9OQ!2e0'
    },
    {//45 ポドゴルナヤ・ウーリツァ (ロシア西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1scBtx5spBd60JD9Hsy3K6qg!2m2!1d55.84511!2d48.55863!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@55.84511,48.55863,3a,75y,90t/data=!3m4!1e1!3m2!1scBtx5spBd60JD9Hsy3K6qg!2e0'
    },
    {//ユクセコバ, ハッキャリ (トルコ東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sxvi2NNgwDcEJzyD0gzkSrw!2m2!1d37.5607!2d44.26005!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@37.5607,44.26005,3a,75y,90t/data=!3m4!1e1!3m2!1sxvi2NNgwDcEJzyD0gzkSrw!2e0'
    },
    {//BR-364 (アマゾン)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sbNpNl5sST6SklQoUj4fe8A!2m2!1d-9.31603!2d-63.14692!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-9.31603,-63.14692,3a,75y,90t/data=!3m4!1e1!3m2!1sbNpNl5sST6SklQoUj4fe8A!2e0'
    },
    {//3749 NY-19 (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1szI8GJhvZPiYSXmHFoT3r3Q!2m2!1d43.23138!2d-77.92834!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@43.23138,-77.92834,3a,75y,90t/data=!3m4!1e1!3m2!1szI8GJhvZPiYSXmHFoT3r3Q!2e0'
    },
    {//Epar.Od. Skalas Leptokarias - Larisas (ギリシャ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sJffx7W2lEl6kD_L7l9nXtA!2m2!1d40.11674!2d22.48807!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@40.11674,22.48807,3a,75y,90t/data=!3m4!1e1!3m2!1sJffx7W2lEl6kD_L7l9nXtA!2e0'
    },
    {//C96 (チュニジア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sQO_2vZzsbzgkNco4uQNiNA!2m2!1d35.49639!2d11.01336!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@35.49639,11.01336,3a,75y,90t/data=!3m4!1e1!3m2!1sQO_2vZzsbzgkNco4uQNiNA!2e0'
    },
    {//ガリイ通り (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sWyNffEIrVsOE9jx2z4atZg!2m2!1d47.39876!2d24.73804!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@47.39876,24.73804,3a,75y,90t/data=!3m4!1e1!3m2!1sWyNffEIrVsOE9jx2z4atZg!2e0'
    },
    {//147 R. Vice Pref. Manoel Teixeira de Almeida (ブラジル南東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s9lk_kbT_WbLCNt3AeRrk6A!2m2!1d-22.78655!2d-48.13342!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-22.78655,-48.13342,3a,75y,90t/data=!3m4!1e1!3m2!1s9lk_kbT_WbLCNt3AeRrk6A!2e0'
    },
    {//840 ヘリテイジ・レーン (アメリカ中西部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sVKwei5_2pYJ5jLj5Ld9aXg!2m2!1d41.50813!2d-83.72655!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@41.50813,-83.72655,3a,75y,90t/data=!3m4!1e1!3m2!1sVKwei5_2pYJ5jLj5Ld9aXg!2e0'
    },
    {//Banjaran, 西ジャワ (ジャワ島・バリ島)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX9lgk0MnaJNQiHdISZod9w!2m2!1d-7.04766!2d107.58027!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@-7.04766,107.58027,3a,75y,90t/data=!3m4!1e1!3m2!1sX9lgk0MnaJNQiHdISZod9w!2e0'
    },
    {//ナルバ, イダ＝ヴィル (エストニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1s6SIMSpy9oXVwUeXgkPk1OQ!2m2!1d59.37961!2d28.16955!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@59.37961,28.16955,3a,75y,90t/data=!3m4!1e1!3m2!1s6SIMSpy9oXVwUeXgkPk1OQ!2e0'
    },
    {//27 K3023 (ドイツ)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1salhAUC_kQpZFX3ZhbuHbSg!2m2!1d48.54633!2d10.29994!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@48.54633,10.29994,3a,75y,90t/data=!3m4!1e1!3m2!1salhAUC_kQpZFX3ZhbuHbSg!2e0'
    },
    {//コンダプール, テランガーナ (インド南部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sjILb65fsWCdG-D-AHN4phg!2m2!1d18.44305!2d78.44676!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@18.44305,78.44676,3a,75y,90t/data=!3m4!1e1!3m2!1sjILb65fsWCdG-D-AHN4phg!2e0'
    },
    {//430 ラン・デ・ゼラブル (アメリカ北東部)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1sX2BbfBneQEyyLui1FGbMCg!2m2!1d46.28652!2d-70.87855!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@46.28652,-70.87855,3a,75y,90t/data=!3m4!1e1!3m2!1sX2BbfBneQEyyLui1FGbMCg!2e0'
    },
    {//378 (ルーマニア)
        embedUrl: 'https://www.google.com/maps/embed?pb=!6m8!1m7!1syN6yqwR-LB9d1usLY12Wig!2m2!1d44.4695!2d21.29674!3f0!4f0!5f0.4',
        answerUrl: 'https://www.google.com/maps/@44.4695,21.29674,3a,75y,90t/data=!3m4!1e1!3m2!1syN6yqwR-LB9d1usLY12Wig!2e0'
    },
];
