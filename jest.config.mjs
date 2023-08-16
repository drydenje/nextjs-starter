import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // the path to next.config.js and .env files in your test environment
  dir: './';
});

// add any custom config to be passed to Jest
//** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config);