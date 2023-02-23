module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testRegex: 'src/tests/.*\\.test\\.js$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};