export {};
const crypto = require('crypto');
const generateSalt = require('./generate-salt');
const { DEFAULT_SALT_LENGTH } = require('./config');

function md5(string: String): String {
  return crypto.createHash('md5').update(string).digest('hex');
}

interface Config {
  str: string;
  saltLength?: number;
};

function createHash({ str, saltLength }: Config): string {
  const length = saltLength || DEFAULT_SALT_LENGTH;
  const salt = generateSalt(length);
  const hash = md5(str + salt);
  return salt + hash;
}

module.exports = createHash;
