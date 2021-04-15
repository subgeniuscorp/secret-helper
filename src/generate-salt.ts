const bcrypt = require('bcryptjs');
const { DEFAULT_SALT_ROUNDS } = require('./config');

interface IGenerateSalt {
  saltRounds: number;
}

function generateSalt({ saltRounds = 0 }: IGenerateSalt): String {
  const rounds = saltRounds || DEFAULT_SALT_ROUNDS;
  return bcrypt.genSalt(rounds);
}

module.exports = generateSalt
