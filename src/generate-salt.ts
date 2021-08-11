const bcrypt = require('bcryptjs');
const { DEFAULT_SALT_ROUNDS } = require('./config');

interface IGenerateSalt {
  saltRounds?: number;
}

export default function generateSalt({
  saltRounds,
}: IGenerateSalt = {}): Promise<string> {
  const rounds = saltRounds || DEFAULT_SALT_ROUNDS;
  return bcrypt.genSalt(rounds);
}
