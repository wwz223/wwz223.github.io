/*********初始值***/

/******定时器******/
let intervalEngine = null; //定时器

/******游戏配置*****/
let curPhase = PHASE_DOWNLOAD; //游戏状态
let audioOpen = true; //音效是否开启
let gameScore; //游戏分数
let countDown; //游戏倒计时
let count; //计数器，渲染次数
let level; //第几关

/******玩家属性*******/
let playCount = 1; //玩家数量

/******关卡属性*******/
let OPEN_DOOR = false; //是否开启通往下一关的大门
let enemyCount; //敌人数量
let heroSpeed; //英雄速度
let enemySpeed; //敌人速度
let increaseRange; //敌人数量的增长速度

/****游戏场景*****/
let hero; //构造玩家1
let hero2; //构造玩家2
let liveEnemy; // 构建敌人
let blocks; //构建墙壁
let praises; //构建奖品