module.exports = {
  // clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
