export {};
const generateSalt = require('./generate-salt');
const { createHash, validateHash } = require('./hash');
const generateApiKey = require('./generate-api-key');

interface MainConfig {
  saltLength?: number;
  apiKeyLength?: number;
};

interface ValidateHashClosure {
  hashValue: string;
  valueToCompare: string;
}

function main({ 
  saltLength,
  apiKeyLength,
}: MainConfig) {
  return {
    generateSalt: (): string => generateSalt(saltLength),
    createHash: (str: string): string => createHash({ str, saltLength }),
    generateApiKey: (): string => generateApiKey({ length: apiKeyLength }),
    validateHash: ({ hashValue, valueToCompare}: ValidateHashClosure): boolean =>
      validateHash({ hashValue, valueToCompare }),
  }
}

module.exports = main;
