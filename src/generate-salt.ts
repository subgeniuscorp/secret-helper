import bcrypt from 'bcryptjs';
import constants from './config/index';

const { DEFAULT_SALT_ROUNDS } = constants;

interface IGenerateSalt {
  saltRounds?: number;
}

export default function generateSalt({
  saltRounds,
}: IGenerateSalt = {}): Promise<string> {
  const rounds = saltRounds || DEFAULT_SALT_ROUNDS;
  return bcrypt.genSalt(rounds);
}
