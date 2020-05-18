class Enemy extends alive {
  constructor(i, j, style, speed) {
    super();
    this.actor = "enemy";
    this.i = i;
    this.j = j;
    this.width = blockWidth - 5;
    this.height = blockWidth - 5;
    this.x = i * blockWidth;
    this.y = j * blockWidth;
    this.direction = "right";
    this.style = style;
    this.speed = speed;
    this.index = 0;
  }

  draw() {
    if (count % 3 == 0) {
      this.index >= 3 ? (this.index = 0) : this.index++;
    }
    let i = 0;
    switch (this.direction) {
      case "up":
        i = this.index;
        console.log('i',i)
        ctx.drawImage(
          gameImg.enemy[level - 1][i],
          this.x,
          this.y,
          this.width,
          this.height
        );
        break;
      case "down":
        i = this.index + 4;
        ctx.drawImage(
          gameImg.enemy[level - 1][i],
          this.x,
          this.y,
          this.width,
          this.height
        );
        break;
      case "left":
        i = this.index + 8;
        ctx.drawImage(
          gameImg.enemy[level - 1][i],
          this.x,
          this.y,
          this.width,
          this.height
        );
        break;
      case "right":
        i = this.index + 12;
        ctx.drawImage(
          gameImg.enemy[level - 1][i],
          this.x,
          this.y,
          this.width,
          this.height
        );
      default:
        break;
    }
  }
  move() {
    let range = this.speed;
    this.step(range);
    if (this.isHitOthers(blocks)) {
      this.reStep(range);
      this.reDirection();
    }
    if (this.hitOther(hero)) {
      // curPhase = PHASE_GAMEOVER;
      hero.state = "dead";
      hero.speed = 0;
    }
    if (playCount === 2 && this.hitOther(hero2)) {
      // curPhase = PHASE_GAMEOVER;
      hero2.state = "dead";
      hero2.speed = 0;
    }
    this.draw();
  }
  //与奖品发生碰撞
  hitPraise(praises) {
    if (praises.length > 0) {
      for (let i = 0; i < praises.length; i++) {
        if (praises[i].haveEaten === false && this.hitOther(praises[i])) {
          praises[i].haveEaten = true;
          gameScore++;
        }
      }
    }
  }
  reDirection() {
    let directions = ["left", "right", "up", "down"];
    let number = Math.floor(Math.random() * 4);
    this.direction = directions[number];
  }
}
