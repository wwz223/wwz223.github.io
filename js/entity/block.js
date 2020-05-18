class Block {
  constructor(i, j, style) {
    this.i = i;
    this.j = j;
    this.width = blockWidth;
    this.height = blockWidth;
    this.x = i * blockWidth;
    this.y = j * blockWidth;
    this.style = style;
    this.canGo = false; //是否可以通过
  }
  draw() {
    if (!this.canGo) {
      ctx.drawImage(
        gameImg.block[level - 1],
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }
}
