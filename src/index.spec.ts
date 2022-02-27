import { hello } from '.';

describe('hello() のテスト', () => {
  let log: jest.SpyInstance;

  beforeEach(() => {
    log = jest.spyOn(console, 'log').mockReturnValue();
  });

  afterEach(() => {
    log.mockRestore();
  });

  it('Hello. と出力', () => {
    hello();
    expect(log).toHaveBeenNthCalledWith(1, 'Hello.');
  });
});
