import { ImageFilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ImageFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
