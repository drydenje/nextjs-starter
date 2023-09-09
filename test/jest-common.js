// jest.config.mjs
// import nextJest from "next/jest";

// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: "./",
// });

// // Add any custom config to be passed to Jest
// /** @type {import('jest').Config} */
// const config = {
//   // Add more setup options before each test is run
//   // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

//   testEnvironment: "jest-environment-jsdom",
// };

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config);

// the above code uses import statements, but couldn't get it to work that way. Disabling this specific rule until I can figure it out
/* eslint-disable */
const nextJest = require('next/jest');
const path = require('path');
const rootD = path.join(__dirname, '..');
require('dotenv').config();

/* eslint-enable */

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
// const createJestConfig = nextJest({ dir: './' });
const createJestConfig = nextJest({ dir: rootD });

// Any custom config you want to pass to Jest
const customJestConfig = {
  rootDir: path.join(__dirname, '..'),
  roots: ['<rootDir>/src/'],
  // testPathDirs: ['<rootDir>/src', '<rootDir>/app'],
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // testEnvironment: 'jest-environment-node',
  // jest will resolve anything in these folders as node modules
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    // path.join(__dirname, '../app'),
    path.join(__dirname),
  ],

  // Don't need this, wasn't tripping an error (outdated?)
  // supposed to help compile *.module.css files
  // Configure Jest: Support Importing CSS files with moduleNameMapper
  // need to make this file too
  // '\\.css$': require.resolve('./style-mock.js'),

  // collectCoverageFrom: [
  //   '**/src/**/*.{js,jsx,ts,tsx}',
  //   '**/app/**/*.{js,jsx,ts,tsx}',
  //   // '**/*.{js,jsx,ts,tsx}',
  //   // '!**/*.d.ts',
  //   // '!**/node_modules/**',
  //   // '!<rootDir>/out/**',
  //   // '!<rootDir>/.next/**',
  //   // '!<rootDir>/*.config.*',
  //   // '!<rootDir>/coverage/**',
  // ],
};

// console.log('RD:', customJestConfig.rootDir)
// console.log('MD:', customJestConfig.moduleDirectories)
// console.log('ROOTS:', customJestConfig.roots)

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
