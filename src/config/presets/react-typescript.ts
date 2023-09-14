import { InitPreset } from 'lint-init-framework';

export const reactTypeScriptPreset: InitPreset = {
  id: 'react-typescript',
  name: 'React (TypeScript)',
  eslint: {
    deps: {
      // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
      '@typescript-eslint/eslint-plugin': '^6.7.0',
      // https://www.npmjs.com/package/@typescript-eslint/parser
      '@typescript-eslint/parser': '^6.7.0',
      // https://www.npmjs.com/package/eslint-config-prettier
      'eslint-config-prettier': '^9.0.0',
      // https://www.npmjs.com/package/eslint-plugin-jest
      'eslint-plugin-jest': '^27.2.3',
      // https://www.npmjs.com/package/eslint-plugin-prettier
      'eslint-plugin-prettier': '^4.2.1',
      'eslint-plugin-react': '^7.32.2',
      'eslint-plugin-react-hooks': '^4.6.0',
    },
    config: {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
      },
    },
  },
  stylelint: {
    config: {
      extends: [],
    },
  },
};
