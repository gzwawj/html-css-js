/**
 * 1 可以设置抽奖参数使用指定键盘指令显示面板：
 *      1）设置奖项，如：一等奖、二等奖、三等奖
 *      2）设置奖项名额，如：一等奖3个人、二等奖5个人、三等奖10个人
 *      3）设置不同键盘指令显示不同的控制面板，分为总面板，参数设置面板，执行面板
 *
 * 2 数据设置：
 *      1）使用明文数据
 *      2）使用加密数据
 * 3 构建方式：
 *      1）直接书写
 *      2）webpack构建
 */

$(".right-start").on("click", function () {
    $(".right-nav").css("display", "block");
});
$(".glyphicon").on("click", function () {
    $(".right-nav").css("display", "none");
});
$(".bgImg").on("click", function () {
    $(".right-nav").css("display", "none");
});

var heightbody = $(window).height();
$(".bgImg").css("height", heightbody);
var withs = parseInt(($(window).width() - 1100) / 2);
$(".Active-area").css("left", withs);
var heights = parseInt(($(window).height() - 224) / 2);
$(".Active-area").css("top", heights);
window.onresize = function () {
    var heightbody = $(window).height();
    $(".bgImg").css("height", heightbody);
    var withs = parseInt(($(window).width() - 1100) / 2);
    $(".Active-area").css("left", withs);
    var heights = parseInt(($(window).height() - 224) / 2);
    $(".Active-area").css("top", heights);
};

$.ajax({
    url: "./server/app.php",
    type: "POST",
    dataType: "json",
    async: false,
    success: function (data) {
        $('#shuju').val(JSON.stringify(data));
    }
});
var data_1 = new Array();
var data_2 = JSON.parse($("#shuju").val());
var data = data_1.concat(data_2);
console.log(data);

//        var aa=Base64Model.ajaxData("server.php");
//        var data=Base64Model.data(aa);
//        console.log(data);
//抽奖开始
var p1Num = 3;//一等奖
var p2Num = 5;//二等奖
var p3Num = 10;//三等奖

var p0Winner = new Array();
var p1Winner = new Array();//一等奖中奖者
var p2Winner = new Array();//二等奖中奖者
var p3Winner = new Array();//三等奖中奖者

var btn = true;//按钮状态
var key = 0;//中奖下标
var time = 0;

function runTime() {
    clearInterval(time);
    time = setInterval(trunNum, 30);
}

//活动开始
function btnStr() {
    if (btn) {
        if ((p1Winner.length >= p1Num) && (p2Winner.length >= p2Num) && (p3Winner.length >= p3Num)) {
            $('.btnStr').hide();
            alert("所有抽奖已经结束！");
        } else if (($("#sel-1").val() == 3) && (p3Winner.length >= p3Num)) {
            alert("三等奖已经抽取完毕，请选择其他奖项！");
        } else if (($("#sel-1").val() == 2) && (p2Winner.length >= p2Num)) {
            alert("二等奖已经抽取完毕，请选择其他奖项！");
        } else if (($("#sel-1").val() == 1) && (p1Winner.length >= p1Num)) {
            alert("一等奖已经抽取完毕，请选择其他奖项！");
        } else {
            btn = false;
            $('.btnStr').removeClass('btn-primary').addClass('btn-warning').text("结束");
            startTrun();
        }
    } else {
        btn = true;
        $('.btnStr').removeClass('btn-warning').addClass('btn-primary').text("开始抽奖");
        endTrun();
    }
}

function trunNum() {
    key = Math.floor(Math.random() * (data.length));
    var name = data[key];
    $(".Active-status").text(name);
}

//开始转动
function startTrun() {
    runTime();
}

//停止转动
function endTrun() {
    clearInterval(time);
    if ($("#sel-1").val() == 3) {
        data.splice(key, 1);
        p3Winner.push(data[key]);

    } else if ($("#sel-1").val() == 2) {
        data.splice(key, 1);
        p2Winner.push(data[key]);

    } else if ($("#sel-1").val() == 1) {
        data.splice(key, 1);
        p1Winner.push(data[key]);

    } else {
        p0Winner.push(data[key]);
        data.splice(key, 1);

        console.log(p0Winner);
    }
}

var audio = document.getElementById("bgMusic");
//点击按钮
$(".btnStr").on("click", function () {
    if (audio.paused) {
        audio.play();
        btnStr();
    } else {
        audio.pause();
        btnStr();
    }
    audio.currentTime = 0;
});

//点击键盘
document.onkeydown = cdk;

function cdk() {
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
}