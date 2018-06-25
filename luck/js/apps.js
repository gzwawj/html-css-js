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
  // var one, two, three, four, five, total, parameter, run, is_encryption,
  config = {
    can: {
      one: document.f1['one'].value,
      two: document.f1['two'].value,
      three: document.f1['three'].value,
      four: document.f1['four'].value,
      five: document.f1['five'].value,
    },
    total: document.f1['total'].value,
    parameter: document.f1['parameter'].value,
    run: document.f1['run'].value,
    is_encryption: document.f1['is_encryption'].value,
  };

  var menu1 = document.getElementsByClassName('left-menu1');
  for (var i = 0; i < menu1.length; i++) {
    menu1[i].style.display = 'none';
  }
  document.getElementsByClassName('left-menu2')[0].style.display = 'none';
  document.getElementsByClassName('left-menu')[0].style.display = 'none';
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
window.onkeydown = function () {
  var key = event.keyCode,
    c = document.getElementsByClassName('left-menu1'),
    r = document.getElementsByClassName('left-menu2')[0],
    z = document.getElementsByClassName('left-menu')[0];

  if (keyCode[key] == config.total) {
    totalFun(z, c, r);
    console.log('total')
  } else if (keyCode[key] == config.parameter) {
    parameterFun(z, c);
    console.log('parameter')
  } else if (keyCode[key] == config.run) {
    runFun(z, r);
    console.log('run')
  } else {
    console.log('error')
  }
  delete key
};