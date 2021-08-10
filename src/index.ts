export { };
import generateSalt from './generate-salt';
import { createHash, validateHash } from './hash';
import generateApiKey from './generate-api-key';
import generateRandomString from './generate-random-chars';
import {
  IGenerateApiKey,
  IGenerateSalt,
  ICreateHash,
  ValidateHashClosure,
  IGenerateRandomString,
} from './types';


export default {
  generateSalt: ({ saltRounds = 0 }: IGenerateSalt = {}): Promise<string> => generateSalt({ saltRounds }),
  createHash: ({ valueToHash, saltRounds = 0 }: ICreateHash): Promise<string> => createHash({ valueToHash, saltRounds }),
  generateApiKey,
  validateHash: ({ hashValue, valueToCompare }: ValidateHashClosure): Promise<boolean> =>
    validateHash({ hashValue, valueToCompare }),
  generateRandomString: ({ length }: IGenerateRandomString) => generateRandomString({ length }),
}
