import Point from '../../src/core/point';

describe('Point', () => {
  test('Should be make a point', () => {
    const point = new Point(2, 3);
    const point2 = new Point('2', '3');

    expect(point.Coord).toEqual({ x: 2, y: 3 });
    expect(point.X).toEqual(2);
    expect(point.Y).toEqual(3);

    expect(point2.Coord).toEqual({ x: 2, y: 3 });
    expect(point2.X).toEqual(2);
    expect(point2.Y).toEqual(3);
  });

  test('should be throws an error if the x point is not a number', () => {
    const mockFunction = () => { new Point('a', 2); };

    expect(mockFunction).toThrowError();
  });

  test('should be throws an error if the y point is not a number', () => {
    const mockFunction = () => { new Point(2, 'a'); };

    expect(mockFunction).toThrowError();
  });

});
