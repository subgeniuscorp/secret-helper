const secretHelper = require('../src/index');

describe('Secret Helper', () => {
  it('can create an API key of the right length', () => {
    const LENGTH = 20;
    const config = { apiKeyLength: LENGTH };
    const sh = secretHelper(config);
    const apiKey = sh.generateApiKey();
    expect(typeof apiKey).toBe('string');
    expect(apiKey.length).toBe(LENGTH);
  });

  it('can create a hash for a secret', async done => {
    const config = { saltLength: 10 };
    const sh = secretHelper(config);
    const password = '!P@$$w0rD';
    const hash = await sh.createHash(password);
    expect(typeof hash).toBe('string');
    done();
  });

  it('can validate a hash for a secret', async done => {
    const config = { saltLength: 10 };
    const sh = secretHelper(config);
    const password = '!P@$$w0rD';
    const hash = await sh.createHash(password);
    const isHashValid = await sh.validateHash({
      hashValue: hash,
      valueToCompare: password,
    });
    expect(isHashValid).toBe(true);
    done();
  });

  it('can generate a random salt of the right length', () => {
    const LENGTH = 10;
    const config = { saltLength: LENGTH };
    const sh = secretHelper(config);
    const salt = sh.generateSalt();
    expect(salt.length).toBe(LENGTH);
  });

  it('can create salt containing letters and numbers only', () => {
    const LENGTH = 10;
    const config = { saltLength: LENGTH };
    const sh = secretHelper(config);
    const salt = sh.generateSalt();

    const regexp = /^[0-9a-zA-Z]+$/;
    const result = salt.match(regexp);
    expect(!!result).toBe(true);
  });
});