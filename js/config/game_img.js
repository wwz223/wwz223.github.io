
const imgName = {
  bg: ["start.png", "pause.png", "fail.png", "success.png", "background.png"],
  gameLoad: [
    "game_loading1.png",
    "game_loading2.png",
    "game_loading3.png",
    "game_loading4.png",
  ],
  block: [
    "blockStyle0.png",
    "blockStyle1.png",
    "blockStyle2.png",
    "blockStyle3.png",
  ],
  praise: ["praise.png", "key.png"],
  hero: [
    "hero(0).png",
    "hero(1).png",
    "hero(2).png",
    "hero(3).png",
    "hero(4).png",
    "hero(5).png",
    "hero(6).png",
    "hero(7).png",
    "hero(8).png",
    "hero(9).png",
    "hero(10).png",
    "hero(11).png",
    "hero(12).png",
    "hero(13).png",
    "hero(14).png",
    "hero(15).png",
  ],
  enemy: [
    [
      "eS1 (0).png",
      "eS1 (1).png",
      "eS1 (2).png",
      "eS1 (3).png",
      "eS1 (4).png",
      "eS1 (5).png",
      "eS1 (6).png",
      "eS1 (7).png",
      "eS1 (8).png",
      "eS1 (9).png",
      "eS1 (10).png",
      "eS1 (11).png",
      "eS1 (12).png",
      "eS1 (13).png",
      "eS1 (14).png",
      "eS1 (15).png",
    ],
    [
      "eS2 (0).png",
      "eS2 (1).png",
      "eS2 (2).png",
      "eS2 (3).png",
      "eS2 (4).png",
      "eS2 (5).png",
      "eS2 (6).png",
      "eS2 (7).png",
      "eS2 (8).png",
      "eS2 (9).png",
      "eS2 (10).png",
      "eS2 (11).png",
      "eS2 (12).png",
      "eS2 (13).png",
      "eS2 (14).png",
      "eS2 (15).png",
    ],
    [
      "eS3 (0).png",
      "eS3 (1).png",
      "eS3 (2).png",
      "eS3 (3).png",
      "eS3 (4).png",
      "eS3 (5).png",
      "eS3 (6).png",
      "eS3 (7).png",
      "eS3 (8).png",
      "eS3 (9).png",
      "eS3 (10).png",
      "eS3 (11).png",
      "eS3 (12).png",
      "eS3 (13).png",
      "eS3 (14).png",
      "eS3 (15).png",
    ],
    [
      "eS4 (0).png",
      "eS4 (1).png",
      "eS4 (2).png",
      "eS4 (3).png",
      "eS4 (4).png",
      "eS4 (5).png",
      "eS4 (6).png",
      "eS4 (7).png",
      "eS4 (8).png",
      "eS4 (9).png",
      "eS4 (10).png",
      "eS4 (11).png",
      "eS4 (12).png",
      "eS4 (13).png",
      "eS4 (14).png",
      "eS4 (15).png",
    ],
  ],
};

let gameImg = {
  bg: [],
  gameLoad: [],
  block: [],
  praise: [],
  hero: [],
  enemy: [[], [], [], []],
};

var progress = 1;
/*********加载状态的背景图片****/

/*********加载图片*********/
const initImages = () => {
  let bgImg = new Image();
  bgImg.src = "img/start.png";
  bgImg.onload = function () {
    ctx.drawImage(bgImg, 0, 0, canvasWidth, canvasHeight);
  };

  for (let i = 0; i < imgName.bg.length; i++) {
    gameImg.bg[i] = nImg(imgName.bg[i]);
  }
  for (let i = 0; i < imgName.gameLoad.length; i++) {
    gameImg.gameLoad[i] = nImg(imgName.gameLoad[i]);
  }
  for (let i = 0; i < imgName.block.length; i++) {
    gameImg.block[i] = nImg("block/" + imgName.block[i]);
  }
  for (let i = 0; i < imgName.praise.length; i++) {
    gameImg.praise[i] = nImg("praise/" + imgName.praise[i]);
  }
  for (let i = 0; i < imgName.hero.length; i++) {
    gameImg.hero[i] = nImg("hero/" + imgName.hero[i]);
  }
  for (let i = 0; i < imgName.enemy.length; i++) {
    for (let j = 0; j < imgName.enemy[i].length; j++) {
      gameImg.enemy[i][j] = nImg(`enemy/es${i + 1}/` + imgName.enemy[i][j]);
    }
  }
  function nImg(src) {
    var img = new Image();
    img.src = "img/" + src;
    img.onload = imgLoad;
    return img;
  }
  // 绘制游戏加载进度画面
  function imgLoad() {
    progress += 1;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // var text = progress + "%";
    // var tw = ctx.measureText(text).width;
    // ctx.font = "60px arial";
    // ctx.fillStyle = "red";
    // ctx.lineWidth = "0";
    // ctx.strokeStyle = "#888";
    // ctx.strokeText(text, (canvasWidth - tw) / 2, canvasHeight / 2);
    // ctx.fillText(text, (canvasWidth - tw) / 2, canvasHeight / 2);
    // ctx.drawImage(bgImg, 0, 0, canvasWidth, canvasHeight);
    // if (progress >= 6) {
    //   start();
    // }
  }
};
