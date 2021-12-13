module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', 'cobertura'],
  moduleNameMapper: {
    '@latitude55/lib': '<rootDir>/src/lib',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
