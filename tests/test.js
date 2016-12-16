'use strict'

const test = require('blue-tape')
const moneris = require('../index')

test('empty parameters', t => {
  return t.shouldFail(moneris({}, {}), TypeError)
})

test('invalid country code parameters', t => {
  return t.shouldFail(moneris({ store_id: '', api_token: '', country_code: 'none' }, { type: 'purchase' }), TypeError)
})
