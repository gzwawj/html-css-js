let canvasfun = (c, e) => {
    let x = e.x, y = e.y, w = e.w, h = e.h;
    let can1 = document.getElementById('c');
    let c1 = can1.getContext('2d');
    c1.clearRect(0, 0, 300, 150);
    c1.fillStyle = 'rgb(112,116,243)';
    c1.fillRect(0, 0, 300, 150);
    c1.clearRect(x, y, w, h);

    let can2 = document.createElement('canvas');
    let c2 = can2.getContext('2d');
    c2.clearRect(0, 0, 300, 150);
    c2.fillStyle = 'rgb(255,0,0)';
    c2.fillRect(0 + c, y, w, h);

    c1.drawImage(can2, 0, 0);
}

let $ = function (selector) {
        return document.querySelector(selector);
    },
    box = $('.drag'),
    bg = $('.bg'),
    text = $('.text'),
    btn = $('.btn'),
    distance = box.offsetWidth - btn.offsetWidth;

let obj = {w: 40, h: 40}
let randomObj = () => {
    obj.x = randomNum(40, 300 - 40);
    obj.y = randomNum(40, 150 - 40);
}
let randomNum = (min, max) => {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
}


//画布初始化
randomObj();
canvasfun(0, obj);
//添加鼠标按下事件
btn.onmousedown = (e) => {
    btn.style.transition = "";
    bg.style.transition = "";
    let downX = e.clientX || window.event.clientX;
    let offsetX = 0;
    document.onmousemove = (e) => {
        let moveX = e.clientX || window.event.clientX;
        offsetX = moveX - downX;
        if (offsetX > distance) {
            offsetX = distance;
        }
        if (offsetX < 0) {
            offsetX = 0;
        }
        canvasfun(offsetX, obj)
        btn.style.left = offsetX + 'px';
        bg.style.width = offsetX + 'px';

    }

    document.onmouseup = (e) => {
        if (offsetX - obj.x >= -2 && offsetX - obj.x <= 2) {
            text.innerHTML = '验证通过';
            btn.color = 'lightgreen';
            btn.innerHTML = '&radic;';
            btn.style.left = '258px';
            bg.style.width = '100%';
            bg.style.backgroundColor = 'lightgreen';

            btn.onmousedown = null;
            document.onmousemove = null;
        } else {
            btn.style.left = 0;
            bg.style.width = 0;
            btn.style.transition = 'left 1s ease';
            bg.style.transition = 'width 1s ease';
            randomObj();
            canvasfun(0, obj);
        }
        document.onmousemove = null;
        document.onmouseup = null;
    }

}