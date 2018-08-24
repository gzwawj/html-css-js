function calculateData(data) {
  let calculate = document.querySelector('#calculate').value;
  if (calculate === '1') {
    Calculate.setData = [4, 3]
  }
  if (calculate === '2') {
    Calculate.setData = [16, 9]
  }
  return {w: Calculate.getWidth(data), h: Calculate.getHeight(data)}
}

function demo1(e) {
  if (e.value > 0) {
    let wh = calculateData(e.value);
    document.querySelector('#width').value = wh.w;
  } else {
    alert('请填写大于0的数');
    e.value = "";
  }
}

function demo2(e) {
  if (e.value > 0) {
    let wh = calculateData(e.value);
    document.querySelector('#height').value = wh.h;
  } else {
    alert('请填写大于0的数');
    e.value = "";
  }
}

