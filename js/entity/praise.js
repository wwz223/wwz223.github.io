class Praise {
  constructor(i, j, style) {
    this.i = i;
    this.j = j;
    this.width = blockWidth - 15;
    this.height = blockWidth - 15;
    this.x = i * blockWidth + 10;
    this.y = j * blockWidth + 10;
    this.style = style;
    this.isKey = false;
    this.haveEaten = false;
  }
  draw() {
    if (this.isKey) {
      ctx.drawImage(gameImg.praise[1], this.x, this.y, this.width, this.height);
    } else {
      ctx.drawImage(gameImg.praise[0], this.x, this.y, this.width, this.height);
    }
  }
}
