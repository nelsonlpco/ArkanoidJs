import Wall from './../src/wall';
import Tile from '../src/core/tile';
import RGBColor from './../src/core/rgb-color';
import Point from './../src/core/point';

describe('Wall', () => {
  test('should be create a valid wall', () => {
    const action = () => new Wall(200, 200);

    expect(action).not.toThrowError();
  });
/*
  test('create a wall of 4 tiles 200x200', () => {
    const wall = new Wall(200, 200);
    wall.makeWall(4);

    const tile1 = new Tile(new Point(0, 0), new RGBColor(), 50, 50);
    const tile2 = new Tile(new Point(55, 0), new RGBColor(), 50, 50);
    const tile3 = new Tile(new Point(0, 55), new RGBColor(), 50, 50);
    const tile4 = new Tile(new Point(55, 55), new RGBColor(), 50, 50);

    const mock = [tile1, tile2, tile3, tile4];

    expect(wall.getTiles()).toEqual(mock);
  });
  */
});
