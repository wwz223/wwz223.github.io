/*********开始游戏**************/
function start() {
  bgm.src = gameAudio.playing;
  bgm.loop = true;
  bgm.play();
  initBlockAndPraise(); //初始化地图布局
  curPhase = PHASE_PLAY;
  clearInterval(intervalEngine);
  intervalEngine = setInterval(gameEngine, 50);
}

/*********重新开始游戏*************/
function reStart() {
  bgm.src = gameAudio.playing;
  bgm.loop = true;
  bgm.play();
  initData(); //初始化所有数据
  initBlockAndPraise(); //初始化地图布局
  curPhase = PHASE_PLAY;
  clearInterval(intervalEngine);
  intervalEngine = setInterval(gameEngine, 50);
}

function loading() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(gameImg.gameLoad[count % 4], 0, 0, canvasWidth, canvasHeight);
  setTimeout();
}

/*******游戏暂停*******/
function drawPause() {
  if (curPhase === PHASE_PLAY) {
    bgm.pause();
    curPhase = PHASE_PAUSE;
    ctx.drawImage(
      gameImg.bg[1],
      canvasWidth / 2 - 300,
      canvasHeight / 2 - 200,
      600,
      400
    );
  }
}

/*******游戏继续*******/
function drawContinue() {
  if (curPhase === PHASE_PAUSE) {
    bgm.play();
    curPhase = PHASE_PLAY;
  }
}

//游戏结束
function gameover() {
  bgm.src = gameAudio.gameover;
  bgm.loop = false;
  bgm.play();
  curPhase = PHASE_GAMEOVER;
  ctx.drawImage(gameImg.bg[2], 0, 0, canvasWidth, canvasHeight);
  clearInterval(intervalEngine);
}

//游戏成功
function success() {
  bgm.src = gameAudio.success;
  bgm.loop = false;
  bgm.play();
  clearInterval(intervalEngine);
  ctx.drawImage(gameImg.bg[3], 0, 0, canvasWidth, canvasHeight);
}

//点击游戏界面
canvas.onclick = function () {
  if (
    curPhase === PHASE_DOWNLOAD ||
    curPhase === PHASE_READY ||
    curPhase === PHASE_PAUSE
  ) {
    drawContinue();
  } else if (curPhase === PHASE_PLAY) {
    drawPause();
  }
};

//设置玩家数量
function setPlayCount() {
  if (curPhase !== PHASE_PLAY) {
    playCount = parseInt(document.getElementById("playCount").value);
  }
}

//选择游戏难度
function setDifficulty() {
  let value = parseInt(document.getElementById("gameDifficulty").value);
  if (value === 1) {
    gameDifficulty = DIFFICUT_EASY;
  } else {
    gameDifficulty = DIFFICUT_HARD;
  }
}

//关闭或开启音效的点击事件
function setAudio() {
  let value = parseInt(document.getElementById("audioOpen").value);
  let audio = document.getElementById("audio_bgm");
  let audio_jinbi = document.getElementById("audio_jinbi");
  value === 1 ? (audioOpen = true) : (audioOpen = false);
  if (!audioOpen) {
    audio.volume = 0;
    audio_jinbi.volume = 0;
  } else {
    audio.volume = 0.5;
    audio_jinbi.volume = 0.5;
  }
}
