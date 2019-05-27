// import _ from "lodash";

/**
 * 创建ul元素和设置元素样式
 * @returns {HTMLUListElement}
 */
function setUl() {
    let ul = document.createElement('ul');
    ul.style.width = 100 + 'px';
    ul.style.background = 'red';
    ul.style.padding = 10 + 'px';
    ul.onclick=function(){
        rightMenuDisplay()
    };
    return ul;
}

/**
 * 创建li元素和设置元素样式
 * @param e
 * @returns {HTMLLIElement}
 */
function setLi(e) {
    let li = document.createElement('li');
    li.style.width = 100 + 'px';
    li.style.height = 40 + 'px';
    li.style.background = 'blue';
    li.style.color = '#ff0';
    li.innerHTML = e;
    // li.innerHTML = _.join(['ul', 'li', e], '\n');
    // 给li绑定事件
    li.onmousedown = function (e) {
        setRight(e, this)
    };
    li.onclick=function(){
        rightMenuDisplay()
    };
    return li;
}

/**
 * 设置右键菜单选项
 * @param e 右键菜单返回参数
 * @param t this变量
 */
function setRight(e) {
    if (e.button == 2) {
        console.log('右键');
        let menu = setRightMenu(e);
        let rightMenu = document.getElementById('rightMenu');
        if (rightMenu) {
            if (rightMenu !== e.target) {
                //获取当前元素的父节点下的子节点，相当于兄弟节点
                let childs = e.target.parentNode.childNodes;
                //通过map函数遍历输出每个元素，es6语法
                Array.prototype.map.call(childs, function (s) {
                    // 判断是否有菜单元素，如果有就删除
                    if (s.children[0]) {
                        s.removeChild(s.children[0])
                    }
                });
                e.target.appendChild(menu)
            }
        } else {
            e.target.appendChild(menu)
        }
    }
}

/**
 * 创建右键菜单选项
 * @param e 右键菜单返回参数
 * @returns {HTMLDivElement}
 */
function setRightMenu(e) {
    let div = setRightMenuDiv(e);
    let editButton = setRightMenuButton();
    editButton.innerHTML = "修改";
    // editButton.innerHTML = _.join(['修', '改'], '\n');
    editButton.onclick=function(){
        alert('修改')
    };
    div.appendChild(editButton);
    let delButton = setRightMenuButton();
    delButton.innerHTML = '删除';
    delButton.onclick = function(s){
        let delDom=this.parentNode.parentNode;
        setDelButton(delDom)
    };
    div.onclick=function(){
        rightMenuDisplay()
    };
    div.appendChild(delButton);
    return div;
}

function setDelButton(e) {
    document.getElementsByTagName('ul')[0].removeChild(e)
}

/**
 * 创建右键菜单区域，跟随鼠标位置决定
 * @param e 右键菜单返回参数
 * @returns {HTMLDivElement}
 */
function setRightMenuDiv(e) {
    let div = document.createElement('div');
    div.style.width = 80 + 'px';
    div.style.background = '#8a6d3b';
    div.style.boxSizing = 'border-box';
    div.style.padding = 10 + 'px';
    div.style.position = 'absolute';
    div.style.top = e.y + 'px';
    div.style.left = e.x + 'px';
    div.id = 'rightMenu';
    return div;
}

/**
 * 创建菜单按钮和样式
 * @returns {HTMLButtonElement}
 */
function setRightMenuButton() {
    let button = document.createElement('button');
    button.style.width = 60 + 'px';
    button.style.boxSizing = 'border-box';
    button.style.margin = '4px 0';
    return button;
}

/**
 * 设置右键菜单的隐藏
 */
function rightMenuDisplay(){
    document.getElementById('rightMenu').style.display = 'none';
}

/**
 * 创建li列表
 * @param num
 * @returns {HTMLUListElement}
 */
function createDOM(num = 3) {
    let ul = setUl();
    for (let i = 1; i <= num; i++) {
        let li = setLi(i);
        // 给ul添加li子元素
        ul.appendChild(li);
    }
    return ul;
}

document.oncontextmenu = function (e) {
    // 禁用默认右键菜单
    e.preventDefault();
};
document.body.appendChild(createDOM(6));