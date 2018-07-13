class RGBColor {
  constructor(r = 0, g = 0, b = 0) {
    this.R = r;
    this.G = g;
    this.B = b;
  }

  set R(val) {
    this.r = RGBColor.validateRGBnumber(val);
  }

  set G(val) {
    this.g = RGBColor.validateRGBnumber(val);
  }

  set B(val) {
    this.b = RGBColor.validateRGBnumber(val);
  }

  get RGBmatrix() {
    return [this.r, this.g, this.b];
  }

  get RGBstring() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }

  get RGBobject() {
    return { r: this.r, g: this.g, b: this.b };
  }

  changeToRandomColor() {
    this.R = Math.floor(Math.random() * 255);
    this.G = Math.floor(Math.random() * 255);
    this.B = Math.floor(Math.random() * 255);
  }

  changeColorTo(r, g, b) {
    this.R = r;
    this.G = g;
    this.B = b;
  }

  static validateRGBnumber(value) {
    let number = Number(value);
    if (Number.isNaN(number)) {
      throw new Error(`${value} is not a number`);
    }

    if (number < 0) {
      number = 0;
    }

    if (number > 255) {
      number = 255;
    }

    return number;
  }
}

export default RGBColor;
