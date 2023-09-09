import { Config } from 'prettier';

export interface LintInitConfig {
  packageName: string;
  commandName: string;
  version: string;
  eslint?: {
    enabled?: boolean;
  };
  stylelint?: {
    enabled?: boolean;
  };
  markdownlint?: {
    enabled?: boolean;
    config?: string;
  };
  prettier?: {
    enabled: boolean;
    /**
     * Prettier configuration object or package name of shareable configuration. If not specified,
     * Prettier will read `.editorconfig` settings or use built-in defaults.
     * @see https://prettier.io/docs/en/options
     */
    config?: string | Config;
  };
}
