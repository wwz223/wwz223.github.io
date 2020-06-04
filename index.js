let scoreDiv = document.getElementById("score"); //分数实体
// let time = document.getElementById("time"); //倒计时实体
let bgm = document.getElementById("audio_bgm"); //音乐播放器实体
let jinbi = document.getElementById("audio_jinbi"); //金币音效
let canvas = document.getElementById("canvas"); //canvas画板实体
/*********Canvas的属性基本值************/
const canvasHeight = window.innerHeight - 150; //canvas高度
const canvasWidth = (canvasHeight * 28) / 19; //canvas宽度
const blockWidth = canvasHeight / 19; //每个格子的宽度

canvas.width = canvasWidth; //设置游戏界面的宽度
canvas.height = canvasHeight; //设置游戏界面的高度

const ctx = canvas.getContext("2d"); //获取canvas的画图工具

initGame(); //初始化游戏

// const websocket = new WebSocket("ws://localhost:3000/");
// websocket.onopen = function () {
//   console.log("websocket open");
//   // 发送消息放在这里
//   document.getElementById("send").onclick = function () {
//     var txt = document.getElementById("sendTxt").value;
//     if (txt) {
//       websocket.send(txt);
//     }
//   };
// };
// websocket.onclose = function () {
//   console.log("websocket close");
// };
// // 只接收字符串参数，所以在服务端相传对象过来可以用JSON先转换成字符串，然后在这边转成对象
// websocket.onmessage = function (e) {
//   console.log(e.data);
//   var mes = JSON.parse(e.data);
//   showMessage(mes.data, mes.type);
// };

// // 显示消息函数
// function showMessage(str, type) {
//   var div = document.createElement("div");
//   if (type == "enter") {
//     div.style.color = "red";
//   } else if (type == "message") {
//     div.style.color = "blue";
//   } else if (type == "leave") {
//     div.style.color = "green";
//   }
//   div.innerHTML = str;
//   document.body.appendChild(div);
// }
