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

let ctx = canvas.getContext("2d"); //获取canvas的画图工具

initGame(); //初始化游戏
