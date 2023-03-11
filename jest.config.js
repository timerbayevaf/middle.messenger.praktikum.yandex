/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$':
      '<rootDir>/src/utils/test/file-mock.ts',
  },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
