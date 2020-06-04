/****初始化所有数据（游戏重新开始的时候调用）*******/
function initData() {
  level = 1;
  liveEnemy = [];
  blocks = [];
  praises = [];
  enemyCount = 6;
  enemySpeed = 2;
  countDown = 10;
  gameScore = 0;
  heroSpeed = 5;
  count = 0;
  increaseRange = 1250;
  curPhase = PHASE_DOWNLOAD;

  hero = new Hero(5, 17, heroSpeed, "right");
  if (playCount === 2) {
    hero2 = new Hero(5, 1, heroSpeed, "right");
  }
}

/*****初始化本关卡的配置（通往下一关的时候调用）******/
function initLevelData() {
  hero.setPosition(1, 17);
  if (playCount === 2) {
    hero2.setPosition(1, 1);
  }
  countDown = 120;
  liveEnemy = [];
  blocks = [];
  praises = [];
  enemySpeed = 2 + level / 2;
  increaseRange = 1500 - 250 * level;
}

/********初始化地图布局****/
function initBlockAndPraise() {
  initLevelData();
  const map = maps[level - 1];
  enemyCount = 6 + level;
  for (let i = 0; i < enemyCount; i++) {
    const enemy = new Enemy(12, 15, level, enemySpeed);
    liveEnemy.push(enemy);
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 0) {
        const block = new Block(j, i, level);
        blocks.push(block);
      } else if (map[i][j] === 1) {
        const praise = new Praise(j, i, level);
        praises.push(praise);
      }
    }
  }

  //随机使某个奖品为本关的钥匙
  // praises[praises.length - 1].isKey = true;
  let number = Math.floor(Math.random() * praises.length);
  praises[number].isKey = true;
}

const initGame = function () {
  bgm.pause();
  initImages();
  initData(); //初始化所有数据
  curPhase = PHASE_READY;
  clearInterval(intervalEngine);
};
