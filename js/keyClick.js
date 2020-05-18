/********键盘点击时间监听 */
document.onkeydown = function (event) {
  var e = event || window.event || arguments.callee.caller.arguments[0];
  e.preventDefault();
  if (e && e.keyCode == 37 && hero.canChangWay(blocks, "left")) {
    // 按方向键左
    hero.direction = "left";
  }
  if (e && e.keyCode == 38 && hero.canChangWay(blocks, "up")) {
    // 按方向键上
    hero.direction = "up";
  }
  if (e && e.keyCode == 39 && hero.canChangWay(blocks, "right")) {
    // 按方向键右
    hero.direction = "right";
  }
  if (e && e.keyCode == 40 && hero.canChangWay(blocks, "down")) {
    // 按方向键下
    hero.direction = "down";
  }

  //玩家2的键盘点击
  if (playCount === 2) {
    if (e && e.keyCode == 65 && hero2.canChangWay(blocks, "left")) {
      // 按方向键左
      hero2.direction = "left";
    }
    if (e && e.keyCode == 87 && hero2.canChangWay(blocks, "up")) {
      // 按方向键上
      hero2.direction = "up";
    }
    if (e && e.keyCode == 68 && hero2.canChangWay(blocks, "right")) {
      // 按方向键右
      hero2.direction = "right";
    }
    if (e && e.keyCode == 83 && hero2.canChangWay(blocks, "down")) {
      // 按方向键下
      hero2.direction = "down";
    }

    //救助(按空格加接触)
    if (e && e.keyCode == 32 && hero2.hitOther(hero)) {
      if (hero.state === "dead") {
        hero.state = "alive";
        hero.speed = heroSpeed;
      } else if (hero2.state === "dead") {
        hero2.state = "alive";
        hero2.speed = heroSpeed;
      }
    }
  }
};
