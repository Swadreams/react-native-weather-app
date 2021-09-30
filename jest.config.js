module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native-community|react-native|redux-persist|@react-native-firebase||@react-navigation))',
  ],
  transform: {
    '^[./a-zA-Z0-9$_-]+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/node_modules/react-native/jest/assetFileTransformer.js',
  },
  moduleNameMapper: {
    '^src(\\/?.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: [
    './setup-jest.js',
    './setup-jest-after-env.js',
    './__mocks__',
    './src/@types',
    '.png',
    '.gif',
  ],
  modulePaths: ['<rootDir>'],
  setupFiles: ['<rootDir>/setup-jest.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest-after-env.js'],
  globals: {
    window: {},
  },
};
