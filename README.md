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
const secretHelper = require("secret-helper");

const config = {
  saltLength: 5, // defaults to 30
  apiKeyLength: 20, // defaults to 30
};

const sh = secretHelper(config);
```

### Create new API key

Use the `generateApiKey` method to generate a new API key consisting of random alphanumeric characters.

The API key length is defined in the config. It defaults to `30`.

```javascript
const apiKey = sh.generateApiKey();
// => 438ae36953

// NOTE: API key length defaults to 30 if not provided in config
```

### Create a salt

The salt length is defined in the setup. It defaults to `30`.

```javascript
const salt = sh.generateSalt();
// => wEa1g
```

### Create a hash

```javascript
const hash = sh.createHash("some string");
//=> maTsufd8d07db203eb64bf039de1d38d84aae
```

### Validate a hash

```javascript
const isValid = sh.validateHash({
  hashValue: "jQHg1ed6d0b28cb5be10171f15204b9626990",
  valueToCompare: "some string",
});
// => true
```
