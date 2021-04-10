export {};
const bcrypt = require('bcrypt');
const { DEFAULT_SALT_LENGTH } = require('./config');

interface CreateHashParams {
  str: string;
  saltLength?: number;
};

async function createHash({
  str,
  saltLength,
}: CreateHashParams): Promise<string> {
  const saltRounds = saltLength || DEFAULT_SALT_LENGTH;
  return await bcrypt.hash(str, saltRounds);
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
