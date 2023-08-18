// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}`,
}

// module.exports = {
//   // type check typescript files
//   '**/*.(ts|tsx)': () => 'npm run tsc --noEmit',

//   // lint then format ts and js files
//   '**/*.(ts|tsx|js)': (filenames) => [
//     `npm run lint --fix ${filenames.join(' ')}`,
//     `npx prettier --write ${filenames.join(' ')}`,
//   ],

//   // format markdown and json
//   '**/*.(md|json)': (filenames) =>
//     `npx prettier --write ${filenames.join(' ')}`,
// }
