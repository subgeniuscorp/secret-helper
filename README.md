# Secret helper

## Installation

```bash
npm i @subgeniuscorp/secret-helper
```

## Usage

### Setup

```javascript
const secretHelper = require("secret-helper");

const config = {
  saltLength: 10, // defaults to 30
  apiKeyLength: 20, // defaults to 30
};

const sh = secretHelper(config);

const hash = sh.createHash("some string");
// Eg: maTsufd8d07db203eb64bf039de1d38d84aae
```

### Create new API key

Use the `generateApiKey` method to generate a new API key consisting of random alphanumeric characters. 

The API key length is defined in the config. It defaults to `30`.

```javascript
const desiredLengthOfApiKey = 10;
const apiKey = sh.generateApiKey({ length: desiredLengthOfApiKey });
// => 438ae36953

// NOTE: length defaults to 30

const anotherApiKey = sh.generateApiKey()
// => maTsufd8d07db203eb64bf039de1d38d84aae
```

### Create a salt

The salt length is defined in the setup. It defaults to `30`.

```javascript
const salt = sh.generateSalt();
// => wEa1g
```
