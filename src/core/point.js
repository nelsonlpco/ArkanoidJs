class Point {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }

  set X(x) {
    if (Number.isNaN(Number(x))) {
      throw new Error(`${x} is not a number`);
    }

    this.x = Number(x);
  }

  get X() {
    return this.x;
  }

  set Y(y) {
    if (Number.isNaN(Number(y))) {
      throw new Error(`${y} is not a number`);
    }
    this.y = Number(y);
  }

  get Y() {
    return this.y;
  }

  get Coord() {
    return { x: this.X, y: this.Y };
  }

  static distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

export default Point;
