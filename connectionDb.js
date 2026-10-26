'use strict'
// 関数レベルの厳格モード構文

/**
 * DBconnection
 * 
 */
const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

// DB接続設定
const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "testdb",
    user: "postgres",
    password: process.env.DB_PASSWORD
});

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

    default:
      console.log(event.key);
      console.log("No Attached Sound")
  }
})

