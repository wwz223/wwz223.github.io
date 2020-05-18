class Hero extends alive {
  constructor(i, j, speed = 3, direction = "left") {
    super();
    this.actor = "hero";
    this.state = "alive";
    this.i = i;
    this.j = j;
    this.width = blockWidth - 10;
    this.height = blockWidth - 10;
    this.x = i * blockWidth + 5;
    this.y = j * blockWidth + 5;
    this.direction = direction;
    this.speed = speed;
    this.index = 0;
  }
  setPosition(i, j) {
    this.y = j * blockWidth + 5;
    this.x = i * blockWidth + 5;
  }
  draw() {
    if (count % 3 == 0) {
      this.index >= 3 ? (this.index = 0) : this.index++;
    }
    let i = 0;
    if (this.state === "alive") {
      switch (this.direction) {
        case "up":
          i = this.index;
          ctx.drawImage(
            gameImg.hero[i],
            this.x,
            this.y,
            this.width,
            this.height
          );
          break;
        case "down":
          i = this.index + 4;
          ctx.drawImage(
            gameImg.hero[i],
            this.x,
            this.y,
            this.width,
            this.height
          );
          break;
        case "left":
          i = this.index + 8;
          ctx.drawImage(
            gameImg.hero[i],
            this.x,
            this.y,
            this.width,
            this.height
          );
          break;
        case "right":
          i = this.index + 12;
          ctx.drawImage(
            gameImg.hero[i],
            this.x,
            this.y,
            this.width,
            this.height
          );
        default:
          break;
      }
    } else if (this.state === "dead") {
      ctx.drawImage(gameImg.hero[0], this.x, this.y, this.width, this.height);
    }
  }
  move() {
    let range = this.speed;
    this.step(range);
    if (this.actor === "hero") {
      this.hitPraise(praises);
    }
    if (this.isHitOthers(blocks)) {
      this.reStep(range);
    } else {
    }
  }
  //判断是否可以转弯（这里判断移动之后是否会发生碰撞，判断完回到原来位置和原来方向，并返回布尔值显示是否可改变方向）
  canChangWay(blocks, dic) {
    let preDirection = this.direction;
    this.direction = dic;
    let range = this.width / 2;
    this.step(range);
    if (this.isHitOthers(blocks)) {
      this.reStep(range);
      this.direction = preDirection;
      return false;
    } else {
      this.reStep(range);
      this.direction = preDirection;
      return true;
    }
  }

  //与奖品发生碰撞
  hitPraise(praises) {
    if (praises.length > 0) {
      for (let i = 0; i < praises.length; i++) {
        if (praises[i].haveEaten === false && this.hitOther(praises[i])) {
          if (praises[i].isKey) {
            praises[i].haveEaten = true;
            blocks[blocks.length - 29].canGo = true;
            blocks.splice(blocks.length - 29, 1);
            OPEN_DOOR = true;
            gameScore += 10;
          } else {
            praises[i].haveEaten = true;
            jinbi.src = gameAudio.jinbi;
            jinbi.loop = false;
            jinbi.play();
            gameScore++;
          }
        }
      }
    }
  }
}
