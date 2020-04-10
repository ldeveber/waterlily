module.exports = {
    rootDir: './',
    moduleFileExtensions: [ 'js', 'json' ],
    transform: {
      // should be above any other js transform like babel-jest
      '^.+\\.stories\\.js$': '@storybook/addon-storyshots/injectFileName',
      '^.+\\.js$': 'babel-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    transformIgnorePatterns: [ 'node_modules/(?!react-syntax-highlighter)' ], // fixed in storybook 6.0
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/file-mock.js',
      '\\.(css|scss)$': '<rootDir>/tests/__mocks__/style-mock.js'
    },
    reporters: [
      [ 'jest-nyancat-reporter', { 'suppressErrorReporter': false } ],
    //   'default'
    ],
    collectCoverageFrom: [
      'src/**/*.js'
    ],
    coveragePathIgnorePatterns: [
      'src/index.js',
      '/node_modules/',
    ],
    // these should match sonar !
    coverageThreshold: {
      global: {
        branches: 65,
        functions: 80,
        lines: 65,
        statements: 80
      },
      './src/**/*.js': { // per file
        branches: 65,
        functions: 80,
        lines: 65,
        statements: 80
      }
    },
    setupFilesAfterEnv: [
      'jest-enzyme',
      './node_modules/jest-enzyme/lib/index.js',
      './tests/jest.setup.js',
    ],
    snapshotSerializers: [
      'enzyme-to-json/serializer'
    ],
    testEnvironment: 'enzyme',
    testEnvironmentOptions: {
      enzymeAdapter: 'react16'
    }
  };
