const { DEFAULT_SALT_LENGTH } = require('./config');

export default function generateSalt(len: Number): String {
  const length = len || DEFAULT_SALT_LENGTH;
  if (!length) {
    throw new Error('no length!');
  }
  const set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ'
  const setLen = set.length
  let salt = ''
  for (var i = 0; i < len; i++) {
    var p = Math.floor(Math.random() * setLen);
    salt += set[p];
  }
  return salt;
}
