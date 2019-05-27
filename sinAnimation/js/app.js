(function () {
    /**
     * 创建页面元素
     * @returns {HTMLDivElement}
     */
    var createDiv=function () {
      var div=document.createElement('div');
        div.style.width = 480 + 'px';
        div.style.height = 320 + 'px';
        div.style.background = '#000';
        div.style.position = 'relative';
        div.id='sinDiv';
        return div;
    };
    document.body.appendChild(createDiv());
    var fastSin = function (steps) {
        var table = [],
            ang = 0,
            angStep = (Math.PI * 2) / steps;
        do {
            table.push(Math.sin(ang));
            ang += angStep;
        }
        while (ang < Math.PI * 2);
        return table;
    };
    var sinTable = fastSin(4096),
        drawTarget = document.getElementById('sinDiv'),
        divs = '',
        i, bars, x = 0;
    /**
     * 设置元素位置
     * @param ang
     * @param freq
     * @param height
     */
    var drawGraph = function (ang, freq, height) {
        var height2 = height * 2;
        for (var i = 0; i < 480; i++) {
            bars[i].style.top = 160 - height + sinTable[(ang + (i * freq)) & 4095] * height + 'px';
            bars[i].style.height = height2 + 'px';
        }
    };
    for (i = 0; i < 480; i++) {
        divs += '<div style="position:absolute;width:1px;height:40px;' + 'background-color:#0d0;top:0px;left:' + i + 'px";></div>';
    }
    drawTarget.innerHTML += divs;
    bars = drawTarget.children;
    setInterval(function () {
        drawGraph(x * 50, 32 - (sinTable[(x * 30) & 4095] * 20), 50 - (sinTable[(x * 30) & 4095] * 30));
        x++;
    }, 10);
})();
