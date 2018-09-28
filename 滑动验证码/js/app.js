var canvasfun = (e)=> {
    var canvas = document.getElementById('c');
    var can = canvas.getContext('2d');
    can.clearRect(0,0,300,260);
    can.fillStyle='rgb(112,116,243)';
    can.fillRect(0,0,300,260);
    can.clearRect(100,30,20,20);

    var canvas1=document.createElement('canvas');
    var can1=canvas1.getContext('2d');
    can1.clearRect(0,0,300,260);
    can1.fillStyle='rgb(255,0,0)';
    can1.beginPath();

    //can.rect(20, 20, 50, 50);
    can1.moveTo(20+e,20);
    can1.lineTo(20+e,40);
    can1.lineTo(40+e,40);
    can1.lineTo(40+e,20);
    can1.fill();

    can.drawImage(canvas1,10,10);
}

var $=function(selector){
        return document.querySelector(selector);
    },
    box=$('.drag'),
    bg=$('.bg'),
    text=$('.text'),
    btn=$('.btn'),
    success=false,
    distance=box.offsetWidth - btn.offsetWidth;

//添加鼠标按下事件
btn.onmousedown=function(e){
    console.log(e);
    btn.style.transition = "";
    bg.style.transition = "";

    var e=e || window.event;
    var downX=e.clientX;

    document.onmousemove=function(e){
        var e=e || window.event;
        var moveX=e.clientX;

        canvasfun(moveX-downX)
        console.log(10);

        var offsetX=moveX-downX;
        if(offsetX>distance){
            offsetX=distance;
        }
        if(offsetX<0){
            offsetX=0;
        }
        btn.style.left=offsetX+'px';
        bg.style.width=offsetX+'px';
        if(offsetX == distance){
            text.innerHTML='验证通过';
            btn.color='lightgreen';
            btn.innerHTML='&radic;';
            bg.style.backgroundColor='lightgreen';

            success=true;

            btn.onmousedown=null;
            document.onmousemove=null;

            setTimeout(() => {
                alert('验证通过');
            }, 1000);
        }


    }

    document.onmouseup=function(e){
        if(success){
            return
        }else{
            btn.style.left=0;
            bg.style.width=0;
            btn.style.transition='left 1s ease';
            bg.style.transition='width 1s ease';
            canvasfun(0);
        }
        document.onmousemove=null;
        document.onmouseup=null;
    }

}