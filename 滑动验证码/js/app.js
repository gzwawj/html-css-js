let canvasfun = (e) => {
    let can1 = document.getElementById('c');
    let c1 = can1.getContext('2d');
    c1.clearRect(0, 0, 300, 260);
    c1.fillStyle = 'rgb(112,116,243)';
    c1.fillRect(0, 0, 300, 260);
    c1.clearRect(100, 20, 20, 20);

    let can2 = document.createElement('canvas');
    let c2 = can2.getContext('2d');
    c2.clearRect(0, 0, 300, 260);
    c2.fillStyle = 'rgb(255,0,0)';
    c2.beginPath();

    c2.moveTo(0 + e, 20);
    c2.lineTo(0 + e, 40);
    c2.lineTo(20 + e, 40);
    c2.lineTo(20 + e, 20);
    c2.fill();

    c1.drawImage(can2, 0, 0);
}

let $ = function (selector) {
        return document.querySelector(selector);
    },
    box = $('.drag'),
    bg = $('.bg'),
    text = $('.text'),
    btn = $('.btn'),
    success = false,
    distance = box.offsetWidth - btn.offsetWidth;

//画布初始化
canvasfun(0);
//添加鼠标按下事件
btn.onmousedown = (e) => {
    btn.style.transition = "";
    bg.style.transition = "";
    let downX = e.clientX || window.event.clientX;

    document.onmousemove = (e) => {
        let moveX = e.clientX || window.event.clientX;
        let offsetX = moveX - downX;
        if (offsetX > distance) {
            offsetX = distance;
        }
        if (offsetX < 0) {
            offsetX = 0;
        }
        canvasfun(offsetX)
        btn.style.left = offsetX + 'px';
        bg.style.width = offsetX + 'px';
        if (offsetX == distance) {
            text.innerHTML = '验证通过';
            btn.color = 'lightgreen';
            btn.innerHTML = '&radic;';
            bg.style.backgroundColor = 'lightgreen';

            success = true;
            btn.onmousedown = null;
            document.onmousemove = null;
            setTimeout(() => {
                alert('验证通过');
            }, 1000);
        }
    }

    document.onmouseup = (e) => {
        if (success) {
            return
        } else {
            btn.style.left = 0;
            bg.style.width = 0;
            btn.style.transition = 'left 1s ease';
            bg.style.transition = 'width 1s ease';
            canvasfun(0);
        }
        document.onmousemove = null;
        document.onmouseup = null;
    }

}