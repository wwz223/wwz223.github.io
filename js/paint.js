/********画场景*******/
function paintBg() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(gameImg.bg[4], 0, 0, canvasWidth, canvasHeight);
  blocks.map((item) => {
    if (!item.canGo) {
      item.draw();
    }
  });
  praises.map((item) => {
    if (!item.haveEaten) {
      item.draw();
    }
  });
  liveEnemy.map((item) => {
    item.draw();
  });
  hero.draw();
  if (playCount === 2) {
    hero2.draw();
  }
  ctx.font = `${blockWidth - 10}px bold 黑体`;
  // 设置颜色
  ctx.fillStyle = "black";
  // 设置水平对齐方式
  ctx.textAlign = "center";
  // 设置垂直对齐方式
  ctx.textBaseline = "middle";
  // 绘制文字（参数：要写的字，x坐标，y坐标）
  ctx.fillText(`剩余时间:「${countDown}」`, 25 * blockWidth, 15);
}

/**********画game开始图*********/
function paintLogo() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(gameImg.bg[0], 0, 0, canvasWidth, canvasHeight);
}

/**********画gameover*********/
function paintGameover() {
  // alert("游戏结束");
  // paintLogo();
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(gameImg.bg[1], 0, 0, canvasWidth, canvasHeight);
}

/**********加载中*********/
function loading() {
  this.index = 0;

  function loading() {
    this.index % 1 == 0 &&
      ctx.drawImage(
        gameImg.gameLoad[index],
        0,
        canvas.height - gameLoad[0].height
      );
    this.index += 0.5;
    if (this.index > 3) {
      curPhase = PHASE_PLAY;
      this.index = 0;
    }
  }
  return loading;
}
