const playAction = function () {
  //时间减少
  if (count % 20 === 0) {
    countDown--;
  }
  // time.innerHTML = "「剩余时间：" + countDown + "」";
  //主角移动
  hero.move();
  if (playCount === 2) {
    hero2.move();
  }
  //增加敌人
  if (count % increaseRange === 0 && liveEnemy.length < 20) {
    const enemy = new Enemy(12, 15, 1, 6);
    liveEnemy.push(enemy);
  }
  //敌人移动
  liveEnemy.map((item) => {
    item.move();
  });
  let deadState = ["dead", "out"];
  let play1dead = deadState.includes(hero.state);
  let play1out = hero.x > canvasWidth;
  let play2dead = false;
  let play2out = false;
  if (playCount === 2) {
    play2dead = deadState.includes(hero2.state);
    play2out = hero2.x > canvasWidth;
  }

  let dead1 = playCount === 1 && play1dead; //一个玩家的情况
  let dead2 = playCount === 2 && play1dead && play2dead; //两个玩家的情况
  //判断游戏是否结束
  if (countDown === 0 || dead1 || dead2) {
    curPhase = PHASE_GAMEOVER;
  }

  let out1 = playCount === 1 && play1out; //一个玩家的情况
  let out2 = playCount === 2 && play1out && play2out; //两个玩家都通过游戏的情况
  let out3 =
    playCount === 2 && ((play1dead && play2out) || (play2dead && play1out)); //一个用户通过，另一个死亡
  //判断是否通过当前关卡
  if (OPEN_DOOR && (out1 || out2 || out3)) {
    if (out3 && play1dead) {
      //用户2通过，用户1挂掉
      hero.state = "out";
    } else if (out3 && play2dead) {
      //用户1通过，用户2挂掉
      hero2.state = "out";
    }
    if (level === 4) {
      curPhase = PHASE_SUCCESS; //第4关通过，游戏通关
    } else {
      //level加1，通往下一关
      level++;
      start();
    }
  }
  paintBg();
};

const loadAction = function () {
  loading();
};

function gameEngine() {
  count++;
  // scoreDiv.innerHTML = "分数：" + gameScore;
  switch (curPhase) {
    case PHASE_DOWNLOAD:
      break;
    case PHASE_READY:
      paintLogo();
      break;
    case PHASE_LOADING:
      loadAction();
      break;
    case PHASE_PLAY:
      //检测碰撞
      playAction();
      break;
    case PHASE_PAUSE:
      drawPause();
      break;
    case PHASE_GAMEOVER:
      gameover();
      break;
    case PHASE_SUCCESS:
      success();
      break;
  }
  //   requestAnimationFrame(gameEngine);
}
