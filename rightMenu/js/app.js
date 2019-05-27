document.oncontextmenu = function (e) {
    //禁用右键菜单
    e.preventDefault()
}
// 使用id和class获取dom方法的不同
// var aa= document.getElementById('divcss').getAttribute('data-toggle')
var ele = document.getElementsByClassName('divcss')[0];
var fun_a = ele.getAttribute('data-toggle');
ele.onmousedown = function (e) {
    if (e.button == 1) {
        var sss = document.getElementsByClassName('ss')[0];
        if (sss) {
            ele.removeChild(sss)
        }
        var divd = document.createElement('div');
        divd.style.height = 20 + 'px';
        divd.style.width = 50 + 'px';
        divd.style.background = '#ff0';
        divd.style.position = 'absolute';
        divd.style.top = e.y + 'px';
        divd.style.left = e.x + 'px';
        divd.className = 'ss';
        ele.appendChild(divd)
    }
    if(e.button==2){
        var mun=document.getElementById('pos');
        mun.style.display='block';
        mun.style.top=e.y+'px';
        mun.style.left=e.x+'px'
    }else{
        var mun=document.getElementById('pos');
        mun.style.display='none'
    }
};
var height, width;
/**
 * 监控页面变化
 */
window.onresize = function () {
    height = ele.scrollHeight;
    width = ele.scrollWidth;
    //设置宽和高的比例，常用比例 4:3 16:9
    var setH = (3 * width) / 4;
    document.getElementById('divcss').style.height = setH + 'px'
}