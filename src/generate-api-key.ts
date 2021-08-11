import crypto from 'crypto';
import constants from './config/index';

const { DEFAULT_API_KEY_LENGTH } = constants;

interface Config {
  length?: number;
};

export default function generateApiKey({ length }: Config = {}): string {
  const apiKeyLength = length || DEFAULT_API_KEY_LENGTH;
  if (!apiKeyLength) throw new Error('API Key length not defined.');
  return crypto.randomBytes(64).toString('hex').slice(0, apiKeyLength);
}
