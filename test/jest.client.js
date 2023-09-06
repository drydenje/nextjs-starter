/* eslint-disable */
const getConfig = require('./jest-common');
/* eslint-disable */

module.exports = (async function () {
  const common = await getConfig();
  const config = {
    ...common,
    // rootDir: path.join(__dirname, '..'),
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/'],
    testMatch: [
      // '**/*.[jt]s?(x)',
      '**/src/**/*.test.[tj]s?(x)',
      '!**/src/**/*.server.test.[tj]s?(x)',
      '**/app/**/*.test.[tj]s?(x)',
      '!**/app/**/*.server.test.[tj]s?(x)',
      // '**/app/**/*.[jt]s?(x)',
      // '**/src/**/*.*|(\\.|/)(test|spec))\\.jsx?$',
      // '**/src/**/*.test.[tj]s?(x)',
    ],
    coverageThreshold: {
      // setting global thresholds to warn when code coverage starts to regress
      global: {
        statements: 42,
        branches: 23,
        lines: 41,
        functions: 38,
      },
      // we can set thresholds on individual files
      './src/navigation/index.ts': {
        statements: 0,
        branches: 80,
        functions: 100,
        lines: 0,
      },
    },
  };

  return config;
})();
