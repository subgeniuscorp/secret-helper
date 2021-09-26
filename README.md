<img src="./img/secret_helper.png" width="150px">

# Secret helper

Helper module that:

- Creates API keys
- Creates salts
- Creates hashes
- Validates hashes
- Creates random strings

## Installation

```bash
npm i @subgeniuscorp/secret-helper
```

## Usage

### Setup

```javascript
const sh = require("@subgeniuscorp/secret-helper")
```

### Create new API key

Use the `generateApiKey` method to generate a new API key consisting of random alphanumeric characters.

The API key length is defined in the config. It defaults to `30`.

```javascript
const apiKey = sh.generateApiKey();
// => 438ae36953

// If you'd like an API key of a specific length
const apiKey = sh.generateApiKey({ length: 20 });

// NOTE: API key length defaults to 30 if not provided.
```

### Create a salt

The salt length is defined in the setup. It defaults to `30`.

```javascript
const salt = await sh.generateSalt();
// => wEa1g

const salt = await sh.generateSalt({ saltRounds: 10 });

// NOTE: Salt length defaults to 10 if not provided.
```

### Create a hash

Note: `createHash` returns a promise.

```javascript
const hash = await sh.createHash({
  valueToHash: "some string",
  saltLength: 10,
});
//=> maTsufd8d07db203eb64bf039de1d38d84aae

const hash = await sh.createHash({
  valueToHash: "some string",
});
// Note: saltLength defaults to 10 if not provided.
```

### Validate a hash

Note: `validateHash` returns a promise.

```javascript
const isValid = await sh.validateHash({
  hashValue: "jQHg1ed6d0b28cb5be10171f15204b9626990",
  valueToCompare: "some string",
});
// => true
```

### Generate a random string

```javascript
const randomStr = sh.generateRandomString({ length: 5 });
// => 4Hf3d
```

length defaults to 10 if not provided.
```javascript
const randomStr = sh.generateRandomString();
// => dB8roaA2lK
```

## Test

To run tests:
```bash
npm run test
```

