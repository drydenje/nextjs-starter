/* eslint-disable */
const path = require('path');
const getConfig = require('./jest-common');
/* eslint-enable */

module.exports = (async function () {
  const common = await getConfig();
  const config = {
    ...common,
    coverageDirectory: path.join(__dirname, '../coverage/server'),
    testEnvironment: 'jest-environment-node',
    testMatch: [
      '!**/src/**/*.test.[tj]s?(x)',
      '**/src/**/*.server.test.[tj]s?(x)',
      '!**/app/**/*.test.[tj]s?(x)',
      '**/app/**/*.server.test.[tj]s?(x)',
    ],
  };

  return config;
})();

console.log(module.exports);
