import Tile from '../../src/core/tile';
import Point from '../../src/core/point';
import RGBColor from '../../src/core/rgb-color';

describe('Tile', () => {
  test('should be create a valid tile', () => {
    const point = new Point(1, 1);
    const color = new RGBColor();
    const tile = new Tile(point, color, 100, 100);

    expect(tile.Coord).toEqual(point.Coord);
    expect(tile.Width).toEqual(100);
    expect(tile.Height).toEqual(100);
    expect(tile.Size).toEqual({ width: 100, height: 100 });
  });

  test('should be throws an Error if the point is not a Point object', () => {
    const action = () => new Tile(1, 100, 100);

    expect(action).toThrowError();
  });

  test('should be throws an Error if the width is not a number', () => {
    const point = new Point(1, 1);
    const color = new RGBColor();
    const action = () => new Tile(point, color, 'a', 100);

    expect(action).toThrowError();
  });

  test('should be throws an Error if the height is not a number', () => {
    const point = new Point(1, 1);
    const color = new RGBColor();
    const action = () => new Tile(point, color, 100, 'n');

    expect(action).toThrowError();
  });
});
