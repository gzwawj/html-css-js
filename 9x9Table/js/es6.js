/**
 * es6语法
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /*正序*/
  zx() {
    for (let i = this.x; i <= this.y; i++) {
      let str = "";
      for (let j = this.x; j <= i; j++) {
        str += "|" + i + "*" + j + "=" + (i * j)+"\t";
      }
      str += "|";
      console.log(str);
    }
  }
  /*倒叙*/
  dx(){
    for (let i=this.y;i>=this.x;i--) {
      let str="";
      for (let j=this.x;j<=i;j++){
        str += "|" + i + "*" + j + "=" + (i * j)+"\t";
      }
      str+="|";
      console.log(str);
    }
  }
}

var ss = new Point(1, 9);
ss.zx();
ss.dx();
