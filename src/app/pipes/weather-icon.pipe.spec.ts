import { WeatherIconPipe } from './weather-icon.pipe';

describe('WeatherIconPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('validate transform if icon is empty', () => {
    const pipe = new WeatherIconPipe();
    expect(pipe.transform()).toBe(undefined);
  });
  
  it('validate transform if icon is `10b`', () => {
    const pipe = new WeatherIconPipe();
    expect(pipe.transform('10b')).toContain('10b.png');
  });
});
