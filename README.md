# node-moneris

> A wrapper to access the Moneris API.

[![NPM version](https://badge.fury.io/js/moneris.svg)](http://badge.fury.io/js/moneris) [![Build Status](https://travis-ci.org/shaynair/moneris-js.svg?branch=master)](https://travis-ci.org/shaynair/moneris-js?branch=master)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[Installation](#installation) |
[Usage](#usage) |
[Example](#example) |
[License](#license)

## Installation

With [npm](https://npmjs.org/):

```bash
npm install moneris --save
```

Note: You need **an engine that supports ES6 (e.g. Babel or Node 4.0+)**.

## Usage

**`moneris(credentials, req[, extended])`**

Queries the Moneris API with the information provided.

- `credentials`: **Required.** An object with the following fields.
  - `api_token`: **Required.** Your API token.
  - `store_id`: **Required.** Your store ID.
  - `test`: Optional. If true, uses Moneris Test endpoints. You can get a `api_token` and `store_id` for this endpoint from Moneris's Documentation. `false` by default.
- `req`: **Required.** An object with the following fields.
  - `type`: **Required.** The type of the request you wish to post.
  - ...All other fields that pertain to that type of request.
- `extended`: Optional. Certain types of requests require additional parameters, including but not limited to CVD, AVS, etc. This is an object that will add directly to the sent data (whereas `req` will create its own child element)

## Example

See `tests/testPurchase.js`

## License

[MIT](http://g14n.info/mit-license)