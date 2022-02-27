import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/**/*spec.ts'],
  testEnvironment: 'node',
  collectCoverage: true,
  errorOnDeprecated: true,
};

export default config;
