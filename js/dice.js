// JavaScript Document

getdice6 = new Array(
    "00_Cheese_Academy/img/6d1.gif", 
    "../img/6d2.gif",
    "../img/6d3.gif",
    "../img/6d4.gif",
    "../img/6d5.gif",
    "../img/6d6.gif");

count = 20;	//　点滅させる回数
mSec = 50;	//　点滅速度（1秒＝1000）

function getDice1() {
    var dice1 = Math.floor(Math.random() * 6);
    document.imgdice1.src =  getdice6[dice1];          
    document.getElementById('condice1').innerHTML = (dice1 + 1);
    count--;
        if (count >=1 )  { tim = setTimeout("getDice1()",mSec);}
        if (count ==0 )  { count = 20 ;} 
}

function getDice2() {
	var dice2 = Math.floor(Math.random() * 6);
	var dice3 = Math.floor(Math.random() * 6);
	var dice4 = Math.floor(Math.random() * 6);
	document.imgdice2.src =  getdice6[dice2];     
	document.imgdice3.src =  getdice6[dice3];
	document.imgdice4.src =  getdice6[dice4];           
	document.getElementById('condice2').innerHTML = (dice2 + 1) + (dice3 + 1) + (dice4 + 1);
	count--;
	if (count >=1 )	{ tim = setTimeout("getDice2()",mSec);}
	if (count ==0 )	{ count = 20 ;} 
}

function ring() {
    document.getElementById("DiceSound").play();
    var dicering = document.getElementById("DiceSound");
    dicering.volume = 0.1;
    }

// オーバーレイ

    document.addEventListener('DOMContentLoaded', function(){
        // オーバレイを開閉する関数
        const overlay = document.getElementById('overlay');
        function overlayToggle() {
          overlay.classList.toggle('overlay-on');
        }
        // 指定した要素に対して上記関数を実行するクリックイベントを設定
        const clickArea = document.getElementsByClassName('overlay-event');
        for(let i = 0; i < clickArea.length; i++) {
          clickArea[i].addEventListener('click', overlayToggle, false);
        }
        
        // イベントに対してバブリングを停止
        function stopEvent(event) {
          event.stopPropagation();
        }
        const overlayInner = document.getElementById('overlay-inner');
        overlayInner.addEventListener('click', stopEvent, false);
        
      }, false);

      $('.slider').slick({
        arrows: false,//左右の矢印はなし
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
        speed: 6900,//スライドのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
        pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
        cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
        slidesToShow: 4,//スライドを画面に4枚見せる
        slidesToScroll: 1,//1回のスライドで動かす要素数
        responsive: [
          {
          breakpoint: 769,//モニターの横幅が769px以下の見せ方
          settings: {
            slidesToShow: 2,//スライドを画面に2枚見せる
          }
        },
        {
          breakpoint: 426,//モニターの横幅が426px以下の見せ方
          settings: {
            slidesToShow: 1.5,//スライドを画面に1.5枚見せる
          }
        }
      ]
      });      
