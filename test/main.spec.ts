const sh = require('../src/index');

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

  it('can create a hash for a secret without salt round', async done => {
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

  it('can generate a random salt of the right length', () => {
    const LENGTH = 10;
    const salt = sh.generateSalt({ length: LENGTH });
    expect(salt.length).toBe(LENGTH);
  });

  it('can generate a random salt when length is not specified', () => {
    const salt = sh.generateSalt();
    expect(salt.length).toBe(30);
  });

  it('can create salt containing letters and numbers only', () => {
    const LENGTH = 30;
    const salt = sh.generateSalt({ length: LENGTH });

    const regexp = /^[0-9a-zA-Z]+$/;
    const result = salt.match(regexp);
    expect(!!result).toBe(true);
  });
});