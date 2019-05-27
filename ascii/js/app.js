function demo1() {
  let obj = document.querySelector('#demo1').value;
  if (obj) {
    let d1 = {
      data: obj,
      num: document.querySelector('#num').value
    };
    Ascii.setData = d1;
    document.querySelector('#demo2').value = Ascii.getAscii();
  } else {
    alert('不能为空');
  }
}

function demo2() {
  let obj = document.querySelector('#demo2').value;
  if (obj) {
    let d2 = {
      data: obj.split(","),
      num: document.querySelector('#num').value
    };
    Ascii.setData = d2;
    document.querySelector('#demo1').value = Ascii.getString().join('');
  } else {
    alert('不能为空');
  }
}