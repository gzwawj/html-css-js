class Calculate {

  static set setData(v) {
    this.w = v[0];
    this.h = v[1];
  }

  static getHeight(width) {
    let height = (this.h * width) / this.w;
    return height;
  }

  static getWidth(height) {
    let width = (this.w * height) / this.h;
    return width;
  }
}