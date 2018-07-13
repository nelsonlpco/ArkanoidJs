import Point from './point';
import RGBColor from './rgb-color';

class Tile {
  constructor(point, color, width, height) {
    this.Color = color;
    this.Point = point;
    this.Width = width;
    this.Height = height;
  }

  set Color(value) {
    if (!(value instanceof RGBColor)) {
      throw new Error('the color is invalid');
    }

    this.color = value;
  }

  get Color() {
    return this.color;
  }

  set Point(value) {
    if (!(value instanceof Point)) {
      throw new Error('the point is invalid');
    }

    this.point = value;
  }

  get Point() {
    return this.point;
  }

  set Width(value) {
    if (Number.isNaN(Number(value))) {
      throw new Error(`${value} is not a number`);
    }

    this.width = Number(value);
  }

  get Width() {
    return this.width;
  }

  set Height(value) {
    if (Number.isNaN(Number(value))) {
      throw new Error(`${value} is not a number`);
    }

    this.height = Number(value);
  }

  get Height() {
    return this.height;
  }

  get Size() {
    return { width: this.width, height: this.height };
  }

  get Coord() {
    return this.Point.Coord;
  }
}

export default Tile;
