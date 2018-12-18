module.exports = {
  roots: ['<rootDir>/src/ts/'],
  transform: {
    '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$':
      '<rootDir>/node_modules/ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/ts/**/*.(tsx?|ts?)'],
  moduleFileExtensions: ['js', 'ts', 'tsx']
};
