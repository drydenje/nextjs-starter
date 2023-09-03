module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/'],
  testMatch: ['**/app/**/*.test.[tj]s?(x)', '**/src/**/*.test.[tj]s?(x)'],
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
