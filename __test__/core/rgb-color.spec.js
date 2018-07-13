import RGBColor from './../../src/core/rgb-color';
import { exec } from 'child_process';

describe('rgb-color', () => {
  test('should be create a valid RgbColor', () => {
    const action = () => new RGBColor();

    expect(action).not.toThrowError();
  });

  test('should be throws a Error with not send a valid number to rgb color', () => {
    const action = () => new RGBColor(' a', 0, 2);

    expect(action).toThrowError();
  });

  test('should be crete a valid rgb colors', () => {
    let rgb = new RGBColor();

    expect(rgb.RGBstring).toEqual('rgb(0,0,0)');
    expect(rgb.RGBmatrix).toEqual([0, 0, 0]);
    expect(rgb.RGBobject).toEqual({ r: 0, g: 0, b: 0 });

    rgb = new RGBColor(-1, -1, -1);
    expect(rgb.RGBstring).toEqual('rgb(0,0,0)');
    expect(rgb.RGBmatrix).toEqual([0, 0, 0]);
    expect(rgb.RGBobject).toEqual({ r: 0, g: 0, b: 0 });

    rgb = new RGBColor(300, 300, 300);
    expect(rgb.RGBstring).toEqual('rgb(255,255,255)');
    expect(rgb.RGBmatrix).toEqual([255, 255, 255]);
    expect(rgb.RGBobject).toEqual({ r: 255, g: 255, b: 255 });

    rgb = new RGBColor(0, 100, 255);
    expect(rgb.RGBstring).toEqual('rgb(0,100,255)');
    expect(rgb.RGBmatrix).toEqual([0, 100, 255]);
    expect(rgb.RGBobject).toEqual({ r: 0, g: 100, b: 255 });
  });

  test('should be return a valid rgb number', () => {
    expect(RGBColor.validateRGBnumber(-50)).toEqual(0);
    expect(RGBColor.validateRGBnumber(550)).toEqual(255);
    expect(RGBColor.validateRGBnumber(5)).toEqual(5);
  });

  test('should be throws a error if the valud is not a number', () => {
    const action = () => RGBColor.validateRGBnumber(' a');

    expect(action).toThrowError();
  });

  test('should be make a valid rgb color', () => {
    const rgb = new RGBColor();
    const backup = JSON.parse(JSON.stringify(rgb));

    rgb.changeToRandomColor();

    expect(backup.RGBstring).not.toEqual(rgb.RGBstring);
  });

  test('should be change to outer valid rgb color', () => {
    const rgb = new RGBColor();
    rgb.changeColorTo(300, 3, -1);

    expect(rgb.RGBstring).toEqual('rgb(255,3,0)');
    expect(rgb.RGBmatrix).toEqual([255, 3, 0]);
    expect(rgb.RGBobject).toEqual({ r: 255, g: 3, b: 0 });
  });
});
