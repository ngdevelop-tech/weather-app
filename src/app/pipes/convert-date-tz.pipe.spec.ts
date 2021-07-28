import { ConvertDateTzPipe } from './convert-date-tz.pipe';

describe('ConvertDateTzPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertDateTzPipe();
    expect(pipe).toBeTruthy();
  });
  it('validate convert date tz pipe', () => {
    const pipe = new ConvertDateTzPipe();
    expect(pipe.transform(150000, 0)).toBeTruthy(150000000);
  });
});
