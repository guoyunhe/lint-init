import { LintInitConfig } from './LintInitConfig';

export const config: LintInitConfig = {
  packageName: PACKAGE_NAME,
  commandName: PACKAGE_NAME,
  version: PACKAGE_VERSION,
  eslint: [
    {
      name: 'JavaScript',
      config: {},
    },
    {
      name: 'JavaScript + React',
      config: {},
    },
    {
      name: 'TypeScript',
      config: {},
    },
    {
      name: 'TypeScript + React',
      config: {},
    },
  ],
  stylelint: {},
  markdownlint: {},
  prettier: {},
};
