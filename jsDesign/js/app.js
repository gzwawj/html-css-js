var sel = document.getElementById('sel');
sel.observes = [];
sel.attach = function (obj) {
    this.observes[this.observes.length] = obj;
}

sel.detach = function (obj) {
    for (var i = 0; i < this.observes.length; i += 1) {
        if (this.observes[i] === obj) {
            delete this.observes[i];
        }
    }
}

sel.onchange = sel.notify = function () {
    for (var i = 0; i < this.observes.length; i += 1) {
        this.observes[i].update(this);
    }
}


var test2 = document.getElementById('test2');
var test3 = document.getElementById('test3');
test2.update = function (sel) {
    if (sel.value == '1') {
        this.innerHTML = '足球新闻';
    } else if (sel.value == '0') {
        this.innerHTML = '宋明星来了';
    }
}

test3.update = function (sel) {
    if (sel.value == '1') {
        this.innerHTML = '大众汽车';
    } else if (sel.value == '0') {
        this.innerHTML = '化妆品好好好';
    }
}


sel.attach(test2);
sel.attach(test3);


function drop() {
    sel.detach(test3);
}
