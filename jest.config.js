module.exports = {
  'collectCoverage': true,
  'coverageDirectory': 'coverage',
  'moduleNameMapper': {
    '\\.css$': '<rootDir>/__mocks__/cssMock.js'
  },
  'setupFilesAfterEnv': [
    '<rootDir>/src/setupTests.js'
  ],
  'testEnvironment': 'jsdom',
  'transformIgnorePatterns': [
    '/node_modules/(?!(d3-?|internmap|delaunator|robust-predicates))'
  ]
};
