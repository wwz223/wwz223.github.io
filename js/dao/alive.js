//定义一个父类
class alive {
  //按当前方向移动以步
  step(range = this.speed) {
    switch (this.direction) {
      case "left":
        this.x -= range;
        break;
      case "right":
        this.x += range;
        break;
      case "up":
        this.y -= range;
        break;
      case "down":
        this.y += range;
        break;
    }
  }
  //按当前相反的方向返回一步
  reStep(range = 3) {
    switch (this.direction) {
      case "left":
        this.x += range;
        break;
      case "right":
        this.x -= range;
        break;
      case "up":
        this.y += range;
        break;
      case "down":
        this.y -= range;
        break;
    }
  }

  //判断该物体是否与传入的物体相撞
  hitOther(block) {
    let x1 = this.x - block.width;
    let x2 = this.x + this.width;
    let y1 = this.y - block.height;
    let y2 = this.y + this.height;
    let blockX = block.x;
    let blockY = block.y;
    if (blockX > x1 && blockX < x2 && blockY > y1 && blockY < y2) {
      return true;
    } else {
      return false;
    }
    // let block = praises[i];
    // let x1 = this.x + this.width / 2;
    // let y1 = this.y - this.height / 2;
    // let x2 = block.x + block.width / 2;
    // let y2 = block.y - block.height / 2;
    // let tWidth = (this.width + block.width) / 2;
    // let tHeight = (this.height + block.height) / 2;
    // let dx = Math.abs(x1 - x2);
    // let dy = Math.abs(y1 - y2);
    // if (dx < tWidth && dy < tHeight) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  //判断该物体是否与传入的一组物体相撞
  isHitOthers(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (this.hitOther(arr[i])) {
        return true;
      }
    }
    return false;
  }
}
