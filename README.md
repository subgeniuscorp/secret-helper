<p align="center">
  <img src="./img/secret_helper.png">
</p>

# Secret helper

Helper module that helps to:

- Create API keys
- Create salts
- Create hashes
- Validates hashes

## Installation

```bash
npm i @subgeniuscorp/secret-helper
```

## Usage

### Setup

```javascript
const sh = require("@subgeniuscorp/secret-helper");
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
const salt = sh.generateSalt();
// => wEa1g

const salt = sh.generateSalt({ length: 30 });

// NOTE: Salt length defaults to 30 if not provided.
```

### Create a hash

Note: `createHash` returns a promise.

```javascript
const hash = await sh.createHash({
  valueToHash: 'some string',
  saltRounds: 10,
});
//=> maTsufd8d07db203eb64bf039de1d38d84aae

const hash = await sh.createHash({
  valueToHash: 'some string',
});
// Note: saltRounds defaults to 30 if not provided.

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
