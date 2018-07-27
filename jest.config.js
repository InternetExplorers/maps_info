const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/jest.config**',
    '!**/webpack.config**',
    '!**/bundle**',
  ],
  transform: { '^.+\\.js$': 'babel-jest' },
};
