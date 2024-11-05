

const streetViews = [
    {//アンタナナリボ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748056745!6m8!1m7!1s6za1FUktl2TfG4VvuQQymg!2m2!1d-18.92413604984545!2d47.5303773151325!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/mq85emWsLafHGUgB6',
        lat: -18.924136,
        lng: 47.5303773
    }, 
    {//アンドランジトラ国立公園
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748169063!6m8!1m7!1sw1IFREiC31x8UdNct80Ajg!2m2!1d-22.09643716388154!2d46.76869654909648!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/rVVMPr38iQb4vsoh6',
        lat: -22.0964372,
        lng: 46.7686965
    }
    ,{//国立公園の岩多め1
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730726253071!6m8!1m7!1s4D7-lrcLTiafY6efa0FVlg!2m2!1d-22.09642316343795!2d46.76034570742027!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/xWHRfSMN5b7bp9nL7',
        lat: -22.0964232,
        lng:46.7603457
    }, 
    {//RN8
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729558515149!6m8!1m7!1sT3l8G1-u-whp-D_ON55Ahg!2m2!1d-20.24951093684258!2d44.41981496911148!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/CDihGVEvPw7FqANb6',
        lat: -20.2495109,
        lng: 44.419815
    }, 
    {//RN8(徒歩の部分)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730726619193!6m8!1m7!1seL-3OGU-czYrogEkL5rN7g!2m2!1d-20.14838633255006!2d44.51538865537876!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/x5xiefg2yMbEnHeA6',
        lat: -20.1483863,
        lng: 44.5153887
    }, 
    {//トゥリアラ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748280172!6m8!1m7!1sqphmHGtMyYIaivwXMslUnw!2m2!1d-23.35543941590885!2d43.66870509739654!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sbDbVz9FUCLNjZ77A',
        lat: -23.3554394,
        lng: 43.6687051
    }
    ,{//トゥリアラ2
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724321508!6m8!1m7!1sc_X4NDZzl3-3FOq_2dYPYA!2m2!1d-23.35365062068085!2d43.66923911621851!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/wBCc5KwziNvP1DQL9',
        lat: -23.3536506,
        lng:43.6692391
    },
     {//女が多いあの船
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748408119!6m8!1m7!1sVg5fwWp5wLwMtCHhNAWn9A!2m2!1d-13.47998450787207!2d48.37172165082281!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/bfeN9cythqbN1GiDA',
        lat: -13.4799845,
        lng: 48.3717217
    }, 
    {//ディストリクト・ダンバンジャ
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1729748562605!6m8!1m7!1sask63xylYk6fD8PUJ1muQA!2m2!1d-13.67461862265171!2d48.45172214761642!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/X6dqrR3krNra2FV37',
        lat: -13.6746186,
        lng: 48.4517221
    },
    {//ディストリクト・ダンバンジャ(橋の近く)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725999854!6m8!1m7!1sFrmp1NylpUpFY_bYE9zHFw!2m2!1d-13.68730411938349!2d48.45371870309766!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AG2pR2neruMsWTCw7',
        lat: -13.6873041,
        lng: 48.4537187
    },
    {//ディストリクト・ダンバンジャ近くの海(小型船)
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730815861574!6m8!1m7!1sP7Qpa2HiIWquuRl5Tu4eGg!2m2!1d-13.58267811928074!2d48.39504656283499!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/AG2pR2neruMsWTCw7',
        lat: -13.5826781,
        lng: 48.3950466
    },
    {//汚い浜
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724690462!6m8!1m7!1sY0dpY8sDH_LNFWpjuNoavw!2m2!1d-20.74116513783829!2d43.99953603075323!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/D7kAUChNssFu7wWn7',
        lat: -20.7411651,
        lng:43.999536
    }, 
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730090709878!6m8!1m7!1stKUM144w5Yf-08d0HkQm7Q!2m2!1d-18.58059556766276!2d43.92752626189974!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/gLVutAhFU4ouzbtP7',
        lat: -18.5805956,
        lng: 43.9275263
    }, 
    {//海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730091165054!6m8!1m7!1sbArHCxPbFNF2EzbKkHtNHg!2m2!1d-18.31949764124678!2d43.74608570625899!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BUnTnA9stRoK17ed7',
        lat: -18.3194976,
        lng: 43.7460857
    }
    ,{//アンダヴァドアカ海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724798556!6m8!1m7!1sfvxJIH_AYPDtvSUJ9BuI8g!2m2!1d-21.9716415921272!2d43.25675981461625!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BDnDxdNteiu5t5g67',
        lat: -21.9716416,
        lng:43.2567598
    }
    ,{//アンダヴァドアカ海
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724798556!6m8!1m7!1sfvxJIH_AYPDtvSUJ9BuI8g!2m2!1d-21.9716415921272!2d43.25675981461625!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/BDnDxdNteiu5t5g67',
        lat: -21.9716416,
        lng:43.2567598
    }
    ,{//アンダヴァドアカ乾燥地面
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730726349694!6m8!1m7!1sYcraxSQ6om396c4rFkzeOw!2m2!1d-22.05544579891835!2d43.26221641113803!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/YUGu4BzuxfV2iCFW7',
        lat: -22.0554458,
        lng:43.2622164
    }
    ,{//乾いた荒地
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724885388!6m8!1m7!1sJbBAm-TAz9nigyqlsNcMjg!2m2!1d-23.55213227050574!2d43.77643510193955!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/Zi3TzSsUVWKMfFvL6',
        lat: -23.5521323,
        lng:43.7764351
    }
    ,{//トゥリアラ近くの河口
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730724980077!6m8!1m7!1sp6sxi7zs5CVzZ5-xXTpJEg!2m2!1d-23.56760442744431!2d43.76168480064482!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/KDc7UPEnUiKqGwkY6',
        lat: -23.5676044,
        lng:43.7616848
    }
    ,{//ディストリクトしたの村
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725145187!6m8!1m7!1sbjFKsRRqHgscPLUPqGBYPg!2m2!1d-13.81064243158316!2d48.47175577273575!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/kVrWXLnxrJk8ArzEA',
        lat: -13.8106424,
        lng:48.4717558
    }
    ,{//ディストリクトしたの川
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725329884!6m8!1m7!1siEc2MIPx1Y2m-yEMvyBFDg!2m2!1d-13.75537784822737!2d48.46022392238019!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/dQL9R3eWZV2kiFZw5',
        lat: -13.7553778,
        lng:48.4602239
    }
    ,{
        embedUrl: 'https://www.google.com/maps/embed?pb=!4v1730725856853!6m8!1m7!1s_yXLjUQXdOUrC8ocOpM0kw!2m2!1d-23.57253966247112!2d43.76202358662786!3f0!4f0!5f0.4',
        answerUrl: 'https://maps.app.goo.gl/sYbjP1zVKup5JBxR7',
        lat: -23.5725397,
        lng:43.7620236
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
