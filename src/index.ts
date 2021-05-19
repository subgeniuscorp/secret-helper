export {};
const generateSalt = require('./generate-salt');
const { createHash, validateHash } = require('./hash');
const generateApiKey = require('./generate-api-key');
const generateRandomString = require('./generate-random-chars');
import { 
  IGenerateApiKey,
  IGenerateSalt,
  ICreateHash,
  ValidateHashClosure,
  IGenerateRandomString,
} from './types';


const main = {
  generateSalt: ({ saltRounds = 0 }: IGenerateSalt = {}): string => generateSalt({ saltRounds }),
  createHash: ({ valueToHash, saltRounds = 0 }: ICreateHash): string => createHash({ valueToHash, saltRounds }),
  generateApiKey: ({ length = '' }: IGenerateApiKey = {}): string => generateApiKey({ length }),
  validateHash: ({ hashValue, valueToCompare}: ValidateHashClosure): boolean =>
    validateHash({ hashValue, valueToCompare }),
  generateRandomString: ({ length }: IGenerateRandomString) => generateRandomString({ length }),
}

module.exports = main;
