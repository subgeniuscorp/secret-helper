export {};
const crypto = require('crypto');
const { DEFAULT_API_KEY_LENGTH: defaultLength } = require('./config');

interface Config {
  length?: number;
};

function generateApiKey({ length }: Config): string {
  const apiKeyLength = length || defaultLength;
  if (!apiKeyLength) throw new Error('API Key length not defined.');
  return crypto.randomBytes(64).toString('hex').slice(0, apiKeyLength);
}

module.exports = generateApiKey;
