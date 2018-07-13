class Wall {
  constructo(width, height) {
    this.Width = width;
    this.Height = height;
    this.wallBoard = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  set Width(val) {
    if (Number.isNaN(Number(val))) {
      throw new Error(`${val} is not a number`);
    }

    this.width = val;
  }

  set Height(val) {
    if (Number.isNaN(Number(val))) {
      throw new Error(`${val} is not a number`);
    }

    this.height = val;
  }

  makeRandomWall() {
    const maxTiles = this.wallBoard[0].length * this.wallBoard.length;
    const numberOfBricks = Math.floor(Math.random() * maxTiles);
    const tileWidth = this.width / this.wallBoard[0].length;
    const tileHeight = this.width / this.wallBoard.length;


  }
}

export default Wall;
