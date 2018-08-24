class Ascii {

  static set setData(v) {
    this.data = v.data;
    this.num = v.num;
  }

  static getAscii() {
    let result = [];
    let data = this.data.split('');
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let ascii = item.charCodeAt().toString(this.num);
      result.push(parseInt(ascii));
    }
    return result;
  }

  static getString() {
    let result = [];
    let data = this.data;
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let ascii = parseInt(item, this.num);
      let val = String.fromCharCode(ascii);
      result.push(val);
    }
    return result;
  }

}

// export default Ascii;