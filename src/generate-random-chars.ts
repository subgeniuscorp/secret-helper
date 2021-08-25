import constants from './config/index';

const { DEFAULT_RANDOM_STRING_LENGTH } = constants;

interface IGenerateRandomString {
  length?: number;
}

export default function generateRandomString({ length }: IGenerateRandomString = {}): string {
  const len = length || DEFAULT_RANDOM_STRING_LENGTH;
  const set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ';
  const setLen = set.length;
  let result = '';
  for (let i = 0; i < len; i++) {
    const p = Math.floor(Math.random() * setLen);
    result += set[p];
  }
  return result;
}
