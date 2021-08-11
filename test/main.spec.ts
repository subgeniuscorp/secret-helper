import sh from '../src/index';

describe('Secret Helper', () => {

  it('can create an API key WITH a length specified', () => {
    const LENGTH = 20;
    const apiKey = sh.generateApiKey({ length: LENGTH });
    expect(typeof apiKey).toBe('string');
    expect(apiKey.length).toBe(LENGTH);
  });

  it('can create an API key WITHOUT a length specified', () => {
    const apiKey = sh.generateApiKey();
    expect(typeof apiKey).toBe('string');
    expect(apiKey.length).toBe(30);
  });

  it('can create a hash for a secret', async done => {
    const password = '!P@$$w0rD';
    const hash = await sh.createHash({
      valueToHash: password,
      saltRounds: 10,
    });
    expect(typeof hash).toBe('string');
    done();
  });

  it('can create a hash for a secret without salt length', async done => {
    const password = '!P@$$w0rD';
    const hash = await sh.createHash({
      valueToHash: password,
    });
    expect(typeof hash).toBe('string');
    done();
  }, 50000);

  it('can validate a hash for a secret', async done => {
    const password = '!P@$$w0rD';
    const hash = await sh.createHash({
      valueToHash: password,
    });
    const isHashValid = await sh.validateHash({
      hashValue: hash,
      valueToCompare: password,
    });
    expect(isHashValid).toBe(true);
    done();
  });

  it('can generate a salt', async done => {
    const salt = await sh.generateSalt();
    expect(typeof salt).toBe('string');
    done();
  });

  describe('#generateRandomString', () => {
    it('Creates a string of the right length', () => {
      const LENGTH = 5;
      const result = sh.generateRandomString({ length: LENGTH });
      expect(result.length).toBe(5);
    });

    it('Contains letters and numbers only', () => {
      const LENGTH = 5;
      const regexp = /^[0-9a-zA-Z]+$/;
      const result = sh.generateRandomString({ length: LENGTH });
      const isValidLettersAndNumbersOnly = result.match(regexp);
      expect(!!isValidLettersAndNumbersOnly).toBe(true);
    });

    it('Creates a string of length 10 when no length is supplied', () => {
      expect(sh.generateRandomString().length).toBe(10)
    })
  })
});
