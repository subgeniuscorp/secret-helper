export {};
const generateSalt = require('./generate-salt');
const { createHash, validateHash } = require('./hash');
const generateApiKey = require('./generate-api-key');
import { 
  IGenerateApiKey,
  IGenerateSalt,
  ICreateHash,
  ValidateHashClosure 
} from './interfaces';


const main = {
  generateSalt: ({ saltRounds = 0 }: IGenerateSalt = {}): string => generateSalt({ saltRounds }),
  createHash: ({ valueToHash, saltRounds = 0 }: ICreateHash): string => createHash({ valueToHash, saltRounds }),
  generateApiKey: ({ length = '' }: IGenerateApiKey = {}): string => generateApiKey({ length }),
  validateHash: ({ hashValue, valueToCompare}: ValidateHashClosure): boolean =>
    validateHash({ hashValue, valueToCompare }),
}

module.exports = main;
