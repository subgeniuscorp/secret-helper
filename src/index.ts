export {};
const generateSalt = require('./generate-salt');
const { createHash, validateHash } = require('./hash');
const generateApiKey = require('./generate-api-key');
import { IGenerateApiKey, IGenerateSalt, ICreateHash } from './interfaces';

interface MainConfig {
  saltLength?: number;
  apiKeyLength?: number;
};

interface ValidateHashClosure {
  hashValue: string;
  valueToCompare: string;
}

const main = {
  generateSalt: ({ length = 0 }: IGenerateSalt = {}): string => generateSalt(length),
  createHash: ({ valueToHash, saltRounds = 0 }: ICreateHash): string => createHash({ valueToHash, saltRounds }),
  generateApiKey: ({ length = '' }: IGenerateApiKey = {}): string => generateApiKey({ length }),
  validateHash: ({ hashValue, valueToCompare}: ValidateHashClosure): boolean =>
    validateHash({ hashValue, valueToCompare }),
}

module.exports = main;
