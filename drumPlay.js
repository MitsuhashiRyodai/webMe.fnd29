'use strict'
// 関数レベルの厳格モード構文

/**
 * DrumKit PlayCommand
 * マウスクリックもしくはキーボード入力で音声がなる仕組み
 */

function clash1(){
  // 初回以外だったら音声ファイルを巻き戻す
  let clash1Play = document.getElementsByClassName("clash1Play")[0];
  if( typeof( clash1Play.currentTime ) != 'undefined' )
    {
      clash1Play.currentTime = 0;
    }

  clash1Play.play();
  console.log("clickSymbal1");
}

function clash2(){
	// 初回以外だったら音声ファイルを巻き戻す
  let clash2Play = document.getElementsByClassName("clash2Play")[0];
	if( typeof( clash2Play.currentTime ) != 'undefined' )
    {
      clash2Play.currentTime = 0;
    }

  clash2Play.play();
  console.log("clickSymbal2");
}


function hihat(){
	// 初回以外だったら音声ファイルを巻き戻す
  let hihatPlay = document.getElementsByClassName("hihatPlay")[0];
	if( typeof( hihatPlay.currentTime ) != 'undefined' )
    {
      hihatPlay.currentTime = 0;
    }

  hihatPlay.play();
  console.log("clickHat");
}

function ride(){
	// 初回以外だったら音声ファイルを巻き戻す
  let ridePlay = document.getElementsByClassName("ridePlay")[0];
	if( typeof( ridePlay.currentTime ) != 'undefined' )
    {
      ridePlay.currentTime = 0;
    }

  ridePlay.play();
  console.log("clickRide");
}

function kick(){
	// 初回以外だったら音声ファイルを巻き戻す
  let kickPlay = document.getElementsByClassName("kickPlay")[0];
	if( typeof( kickPlay.currentTime ) != 'undefined' )
    {
      kickPlay.currentTime = 0;
    }

  kickPlay.play();
  console.log("clickKick");
}

function snare(){
	// 初回以外だったら音声ファイルを巻き戻す
  let snarePlay = document.getElementsByClassName("snarePlay")[0];
	if( typeof( snarePlay.currentTime ) != 'undefined' )
    {
      snarePlay.currentTime = 0;
    }

  snarePlay.play();
  console.log("clickSnare");
}

function tom1(){
	// 初回以外だったら音声ファイルを巻き戻す
  let tom1Play = document.getElementsByClassName("tom1Play")[0];
	if( typeof( tom1Play.currentTime ) != 'undefined' )
    {
      tom1Play.currentTime = 0;
    }

  tom1Play.play();
  console.log("clickTom1");
}

function tom2(){
	// 初回以外だったら音声ファイルを巻き戻す
  let tom2Play = document.getElementsByClassName("tom2Play")[0];
	if( typeof( tom2Play.currentTime ) != 'undefined' )
    {
      tom2Play.currentTime = 0;
    }

  tom2Play.play();
  console.log("clickTom2");
}

function floor(){
	// 初回以外だったら音声ファイルを巻き戻す
  let floorPlay = document.getElementsByClassName("floorPlay")[0];
	if( typeof( floorPlay.currentTime ) != 'undefined' )
    {
      floorPlay.currentTime = 0;
    }

  floorPlay.play();
  console.log("clickFloor");
}

/**
 * キーボード入力での音声再生
 */


let durmKey =document.addEventListener("keydown", (event) => {  
  const symbalColor ="#fff352";
  const attackColor ="#6663377c";
  const taikoColor ="#f0f1dc";
  let clash1Style =document.getElementsByClassName("symbal")[0].style.backgroundColor ;
  let clash2Style =document.getElementsByClassName("symbal")[1].style.backgroundColor ;
  let hihatStyle =document.getElementsByClassName("symbal")[2].style.backgroundColor ;
  let rideStyle =document.getElementsByClassName("symbal")[3].style.backgroundColor ;

  switch (event.key){
    case "h":
      hihatStyle = attackColor;
      hihat();
      hihatStyle = symbalColor;
      break;

    case "r":
      clash1();
    break; 

    case "o":
      clash2();
    break;

    case "i":
      ride();
    break;

    case "f" :
      snare();
      break;

    case "j" :
      snare();
      break;

    case "t":
      tom1();
    break;

    case "u":
      tom1();
    break;

    case "g":
      tom2();
    break;

    case "k":
      tom2();
    break;

    case "b":
      floor();
    break;

    case "m":
      floor();
    break;

    case " ":
      kick();
    break;

    case "e":
      kick();
    break;

    default:
      console.log(event.key);
      console.log("No Attached Sound")
  }
})


/**
 * BeatBox用処理
 * 各音声ノードをクリックしたら、音声がなる。
 * クリックした際に、色が変わり、有効かどうかのon/offを切り替えられる。
 * 再生ボタンをおした際に、有効化したノードの部分だけ音声がなる状態でループ再生される。
 * ループ再生の際、DrumKitも連動して表示が変わる。
 */


let hihatBox = [];
hihatBox = document.getElementsByName("hihatNote");
console.log(hihatBox);

let snareBox = [];
snareBox = document.getElementsByName("snareNote");
console.log(snareBox);

let bassBox = [];
bassBox = document.getElementsByName("bassNote");
console.log(bassBox);



function playBeat(num){
  num = 0;
  console.log(num);
  // console.log(num + 1 + "回目");
  if (hihatBox[num].innerText === "1"){
      hihatBox[num].onclick();
  }
  if (snareBox[num].innerText === "1"){
    snareBox[num].onclick();
  }
  if (bassBox[num].innerText === "1"){
    bassBox[num].onclick();
  }

  if(typeof num !== "number")
  {
    if(num === hihatBox.length){
      num = 0;
    }else if(num < hihatBox.length){
      num = num + 1;
    }else{
      num = 0;
    }
  }
}

function playLoop(){
  let tempo = 60 /document.getElementById("tempo").value;
  console.log(tempo);

  let num = 0;
  console.log(num);
  console.log("start");

  let beatLoop;
  if (!beatLoop) {
   beatLoop = setInterval(playBeat(num),tempo);
  }
}


function stopBeat(){
  clearInterval(beatLoop);
  beatLoop = null;
  console.log("stop");
}

let startBtn = document.getElementById("start");
let stopBtn  = document.getElementById("stop");
startBtn.addEventListener("click", playLoop(),false);
stopBtn.addEventListener("click", stopBeat(),false);

// noteOn/Off
function noteSwitch(){

  for(const h  in hihatBox){
    console.log(h);
  }
}

let noteOn = document.getElementsByClassName("noteBox");
noteOn.addEventListener("click",noteSwitch(),false);
