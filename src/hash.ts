export {};
const bcrypt = require('bcrypt');
const { DEFAULT_SALT_LENGTH } = require('./config');

interface CreateHashParams {
  valueToHash: string;
  saltRounds?: number;
};

async function createHash({
  valueToHash,
  saltRounds,
}: CreateHashParams): Promise<string> {
  const rounds = saltRounds || DEFAULT_SALT_LENGTH;
  return await bcrypt.hash(valueToHash, rounds);
};

interface ValidateHashParams {
  hashValue: string;
  valueToCompare: string;
};

async function validateHash({
  hashValue,
  valueToCompare,
}: ValidateHashParams): Promise<boolean> {
  return await bcrypt.compare(valueToCompare, hashValue)
};

module.exports = {
  createHash,
  validateHash,
};
