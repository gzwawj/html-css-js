function change_img1(x) {
    SF.wheel(event, x)
}

var SF = (function () {
    var wheel = function wheel(event, x) {
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail) {
            delta = -event.detail / 3;
        }
        if (delta)
            handle(delta, x);
    };

    function handle(delta, x) {
        var s = delta + ": ";
        if (delta < 0) {
            x.width = x.width - 10;
            x.height = x.height - 10;
            if (x.width < 60 || x.height < 60) {
                x.height = 60;
                x.width = 60;
            } else {
                x.width = x.width - 10;
                x.height = x.height - 10;
            }
        } else {
            x.width = x.width + 10;
            x.height = x.height + 10;
            if (x.width > 1000 || x.height > 1000) {
                x.height = 60;
                x.width = 60;
            } else {
                x.width = x.width + 10;
                x.height = x.height + 10;
            }
        }
    }

    if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;
    return {wheel: wheel}
})();