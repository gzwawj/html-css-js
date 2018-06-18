/**
 * new QRCode(element, option)
 * elemen       显示二维码的元素或该元素的 ID
 * option       参数说明
 * width        图像宽度
 * height       图像高度
 * typeNumber
 * colorDark    前景色
 * colorLight   背景色
 * correctLevel 容错级别，可设置为：
 * QRCode.CorrectLevel.L
 * QRCode.CorrectLevel.M
 * QRCode.CorrectLevel.Q
 * QRCode.CorrectLevel.H
 */
window.onload = function () {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 96,//设置宽高
        height: 96
    });
    qrcode.makeCode("http://www.baidu.com");
    document.getElementById("send").onclick = function () {
        qrcode.makeCode(document.getElementById("getval").value);
    }
}