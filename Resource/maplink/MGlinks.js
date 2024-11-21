const streetViews = [
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
    }
    /*
    ,{
        embedUrl: '',
        answerUrl: '',
        lat: ,
        lng:
    }
    */
];