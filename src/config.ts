import { LintInitConfig } from './LintInitConfig';

export const config: LintInitConfig = {
  packageName: PACKAGE_NAME,
  commandName: PACKAGE_NAME,
  version: PACKAGE_VERSION,
  eslint: [
    {
      id: 'js-base',
      name: 'JavaScript',
      config: {},
    },
    {
      id: 'js-react',
      name: 'JavaScript + React',
      config: {},
    },
    {
      id: 'ts-base',
      name: 'TypeScript',
      config: {},
    },
    {
      id: 'ts-react',
      name: 'TypeScript + React',
      config: {},
    },
  ],
  stylelint: [
    {
      id: 'css',
      name: 'CSS',
      config: {},
    },
    {
      id: 'scss',
      name: 'SCSS',
      config: {},
    },
    {
      id: 'less',
      name: 'LESS',
      config: {},
    },
  ],
  markdownlint: {},
  prettier: {},
};
