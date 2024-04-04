const service = require('./service');

describe('Service', () => {
  describe('call', () => {
    it('returns "Hello world"', () => {
      const result = service.call();
      expect(result).toBe('Hello world');
    });
  });
});
