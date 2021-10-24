module.exports = {
  'collectCoverage': true,
  'coverageDirectory': 'coverage',
  'moduleNameMapper': {
    '\\.css$': '<rootDir>/__mocks__/cssMock.js'
  },
  'setupFilesAfterEnv': [
    '<rootDir>/src/setupTests.js'
  ],
  'testEnvironment': 'jsdom'
};
