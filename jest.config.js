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
const nextJest = require('next/jest')

/* eslint-enable */

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

// Any custom config you want to pass to Jest
const customJestConfig = {
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: 'jest-environment-jsdom',

  // Don't need this, wasn't tripping an error (outdated?)
  // supposed to help compile *.module.css files
  // Configure Jest: Support Importing CSS files with moduleNameMapper
  // need to make this file too
  // '\\.css$': require.resolve('./test/style-mock.js'),
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)
