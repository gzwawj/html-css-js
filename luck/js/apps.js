var config = new Object(), keyCode = new Object(), is_total = true, is_para = true, is_run = true, start_w;

keyCode = {
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z"
};

/**
 * 获取config参数
 * */
function getConfig() {
  var one, two, three, four, five, total, parameter, run, is_encryption;
  one = document.f1['one'].value;
  two = document.f1['two'].value;
  three = document.f1['three'].value;
  four = document.f1['four'].value;
  five = document.f1['five'].value;
  total = document.f1['total'].value;
  parameter = document.f1['parameter'].value;
  run:document.f1['run'].value;
  is_encryption = document.f1['is_encryption'].value;
  config = {
    prize: {
      one: {
        num: one,
        winners: {},
        error: '一等奖已经抽取完毕，请选择其他奖项！'
      },
      two: {
        num: two,
        winners: {},
        error: '二等奖已经抽取完毕，请选择其他奖项！'
      },
      three: {
        num: three,
        winners: {},
        error: '三等奖已经抽取完毕，请选择其他奖项！'
      },
      four: {
        num: four,
        winners: {},
        error: '四等奖已经抽取完毕，请选择其他奖项！'
      },
      five: {
        num: five,
        winners: {},
        error: '五等奖已经抽取完毕，请选择其他奖项！'
      }
    },
    total: total,
    parameter: parameter,
    run: run,
    is_encryption: is_encryption,
  };
  // var menu1 = document.getElementsByClassName('left-menu1');
  // for (var i = 0; i < menu1.length; i++) {
  //   menu1[i].style.display = 'none';
  // }
  // document.getElementsByClassName('left-menu2')[0].style.display = 'none';
  // document.getElementsByClassName('left-menu')[0].style.display = 'none';
  console.log(config)
}

/**
 * 总面板方法
 * @param z 总面板
 * @param c 参数面板
 * @param r 运行面板
 */
function totalFun(z, c, r) {
  if (is_total) {
    z.style.display = 'block';
    for (var i = 0; i < c.length; i++) {
      c[i].style.display = 'block';
    }
    r.style.display = 'block';
    is_total = !is_total
  } else {
    z.style.display = 'none';
    for (var i = 0; i < c.length; i++) {
      c[i].style.display = 'none';
    }
    r.style.display = 'none';
    is_total = !is_total
  }
}

/**
 * 参数方法
 * @param z 总面板
 * @param c 参数面板
 */
function parameterFun(z, c) {
  if (is_para) {
    z.style.display = 'block';
    for (var i = 0; i < c.length; i++) {
      c[i].style.display = 'block';
    }
    is_para = !is_para
  } else {
    z.style.display = 'none';
    for (var i = 0; i < c.length; i++) {
      c[i].style.display = 'none';
    }
    is_para = !is_para
  }
}

/**
 * 运行方法
 * @param z 总面板
 * @param r 运行
 */
function runFun(z, r) {
  if (is_run) {
    z.style.display = 'block';
    r.style.display = 'block';
    is_run = !is_run
  } else {
    z.style.display = 'none';
    r.style.display = 'none';
    is_run = !is_run
  }
}

/**
 * 设置页面元素的变化
 */
function centerFont() {
  var h_s, w_s, h_b, w_b, s_t, s_f;
  w_b = window.innerWidth;
  h_b = (w_b * 9) / 16;
  h_s = (h_b * 5) / 18;
  w_s = (w_b * 25) / 48;
  s_t = (h_b * 12) / 27;
  s_f = (w_b * 150) / start_w;
  document.getElementsByClassName('center-font')[0].style.height = h_s + 'px';
  document.getElementsByClassName('center-font')[0].style.width = w_s + 'px';
  document.getElementsByClassName('center-font')[0].style.top = s_t + 'px';
  document.getElementsByClassName('center-font')[0].style.lineHeight = h_s + 'px';
  document.getElementsByClassName('center-font')[0].style.fontSize = s_f + 'px';
}

var time = 0,
  key = 0,
  btn = true;
var data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

/**
 * 创建时间函数
 */
function runTime() {
  clearInterval(time);
  time = setInterval("showName()", 30)
}

/**
 * 页面显示名字
 */
function showName() {
  key = Math.floor(Math.random() * (data.length));
  var name = data[key];
  document.getElementsByClassName('center-font')[0].innerHTML = name
}

/**
 * 活动开始
 */
function btnStr() {
  var sel=document.getElementById('sel').value;
  if (btn) {
    if ((sel == config.prize.one) && (config.prize.one.num <= config.prize.one.winners.length)){
      alert(config.prize.one.error);
    }else if((sel == config.prize.two) && (config.prize.two.num <= config.prize.two.winners.length)){
      alert(config.prize.two.error);
    }else if((sel == config.prize.three) && (config.prize.three.num <= config.prize.three.winners.length)){
      alert(config.prize.three.error);
    }else if((sel == config.prize.four) && (config.prize.four.num <= config.prize.four.winners.length)){
      alert(config.prize.four.error);
    }else if((sel == config.prize.five) && (config.prize.five.num <= config.prize.five.winners.length)){
      alert(config.prize.five.error);
    }else{
      btn = false;
      document.getElementsByClassName('center-font')[0].innerHTML = '结束';
      startRun();
    }
  } else {
    btn = true;
    document.getElementsByClassName('center-font')[0].innerHTML = '开始';
    endRun()
  }
}

/**
 * 开始转动
 */
function startRun() {
  runTime();
}

/**
 * 停止转动
 */
function endRun() {
  clearInterval(time);
  var sel1=document.getElementById('sel').value;
  console.log(sel1)
  if (sel1 == config.prize.one) {
    data.splice(key, 1);
    config.prize.one.winners.push(data[key]);
    console.log(config.prize.one)
  }
}

/**
 * 页面加载完执行
 */
window.onload = function () {
  var bgimg = document.getElementsByClassName('bgImg')[0];
  bgimg.style.height = window.innerHeight + 'px';
  bgimg.style.width = window.innerWidth + 'px';
  //获得一开始的高度设置全局变量
  start_w = window.innerWidth;
  centerFont()
};
/**
 * 监控页面变化
 */
window.onresize = function () {
  var bgimg = document.getElementsByClassName('bgImg')[0];
  bgimg.style.height = window.innerHeight + 'px';
  bgimg.style.width = window.innerWidth + 'px';
  centerFont()
};
/**
 * 监控键盘
 */
var audio = document.getElementById("bgMusic");
window.onkeydown = function () {
  var key = event.keyCode,
    c = document.getElementsByClassName('left-menu1'),
    r = document.getElementsByClassName('left-menu2')[0],
    z = document.getElementsByClassName('left-menu')[0];


  if (event.keyCode == 13 || event.keyCode == 32) {
    if (audio.paused) {
      audio.play();
      btnStr();
    } else {
      audio.pause();
      btnStr();
    }
    audio.currentTime = 0;
  }

  // if (keyCode[key] == config.total) {
  //   totalFun(z, c, r);
  //   console.log('total')
  // } else if (keyCode[key] == config.parameter) {
  //   parameterFun(z, c);
  //   console.log('parameter')
  // } else if (keyCode[key] == config.run) {
  //   runFun(z, r);
  //   console.log('run')
  // } else {
  //   console.log('error')
  // }
  delete key
};