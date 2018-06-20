/**
 * Created by guo5z on 2018/1/10.
 */
var Base64Model = (function () {
    var ajaxData = function (url) {
        var ajaxData;
        $.ajax({
            url: url,
            type: "post",
            dataType: "JSON",
            async: false,
            success: function (data) {
                ajaxData = data;
            }
        });
        return ajaxData;
    };
    /**
     * 数据解密
     * @param data
     * @returns {string[]}
     */
    var dataAction = function (data) {
        var key = CryptoJS.enc.Utf8.parse(data.key); //CryptoJS.MD5("111111");
        var iv = CryptoJS.enc.Utf8.parse(data.iv);
        var received = data.data;
        var Base64Data = CryptoJS.enc.Base64.parse(received);

        var ddd = CryptoJS.AES.decrypt({
            ciphertext: Base64Data,
            salt: ""
        }, key, {iv: iv});

        var dada = ddd.toString(CryptoJS.enc.Utf8);
        var res = dada.split(",");
        return res;
    };
    /**
     * 加密测试
      * @returns {string}
     */
    var dataDecode=function () {
        var pwd = "123456";
        var key = CryptoJS.enc.Utf8.parse("96e79218965eb72c92a549dd5a330112"); //CryptoJS.MD5("111111");
        var iv  = CryptoJS.enc.Utf8.parse('1234567812345678');

        var encrypted = CryptoJS.AES.encrypt(pwd, key, {iv:iv});
        return encrypted.toString();
    }

    return {data: dataAction, ajaxData: ajaxData}
})();
