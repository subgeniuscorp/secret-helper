export { };
const bcrypt = require('bcryptjs');
import generateSalt from './generate-salt';
const { DEFAULT_SALT_ROUNDS } = require('./config');

interface CreateHashParams {
  valueToHash: string;
  saltRounds: number;
};

export async function createHash({
  valueToHash,
  saltRounds,
}: CreateHashParams): Promise<string> {
  const rounds = saltRounds || DEFAULT_SALT_ROUNDS;
  const salt = await generateSalt({ saltRounds: rounds });
  return await bcrypt.hash(valueToHash, salt);
};

interface ValidateHashParams {
  hashValue: string;
  valueToCompare: string;
};

export async function validateHash({
  hashValue,
  valueToCompare,
}: ValidateHashParams): Promise<boolean> {
  return await bcrypt.compare(valueToCompare, hashValue)
};

