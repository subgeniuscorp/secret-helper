export {};
const generateSalt = require('./generate-salt');
const createHash = require('./create-hash');
const generateApiKey = require('./generate-api-key');

interface MainConfig {
  saltLength?: number;
  apiKeyLength?: number;
};

function main({ 
  saltLength,
  apiKeyLength,
}: MainConfig) {
  return {
    generateSalt: (): string => generateSalt(saltLength),
    createHash: (str: string): string => createHash({ str, saltLength }),
    generateApiKey: (): string => generateApiKey({ length: apiKeyLength }),
  }
}

module.exports = main;
