// const path = require('path')
/* eslint-disable */
const getConfig = require('./jest-common')
/* eslint-disable */
// console.log('common:', common)

const a = 0

;(async function () {
  var common = await getConfig()
  console.log(common)
})()

// common().then((config) => {
//   console.log(config)
// })

module.exports = {
  // ...require('./jest-common.js'),
  // ...config,
  // rootDir: path.join(__dirname, '..'),
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/'],
  // testMatch: [
  // '**/*.[jt]s?(x)',

  // '**/app/**/*.[jt]s?(x)',
  // '**/src/**/*.test.[tj]s?(x)',
  // '**/src/**/*.*|(\\.|/)(test|spec))\\.jsx?$',
  // '**/src/**/*.test.[tj]s?(x)',
  // ],
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
}

// console.log(module.exports)
