'use strict'
// 関数レベルの厳格モード構文

let play = document.getElementsByClassName("play");

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
  let clash2Play = document.getElementsByClassName("clash1Play")[0];
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


let durmKey =document.addEventListener("keydown", (event) => {  
  switch (event.key){
    case "h":
      hihat();
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

    case "m":
      floor();r
    break;

    case "m":
      floor();
    break;

    case "e":
      kick();
    break;

    default:
      console.log(event.key);
    console.log("readyEvent")
  }
  
})
