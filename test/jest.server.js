/* eslint-disable */
const path = require('path')
/* eslint-enable */

module.exports = {
  ...require('./jest-common'),
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-node',
  // testMatch: ['**/*.server.test.*'],
}
