interface IGenerateRandomString {
  length: number;
}

function generateRandomString({ length }: IGenerateRandomString): string {
  const ERR_MESSAGE = 'Error: No length specified in generateRandomString function';
  if (!length) throw new Error(ERR_MESSAGE);
  const set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ';
  const setLen = set.length;
  let salt = '';
  for (let i = 0; i < length; i++) {
    const p = Math.floor(Math.random() * setLen);
    salt += set[p];
  }
  return salt;
}

module.exports = generateRandomString;
