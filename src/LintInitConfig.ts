import { Config } from 'prettier';

export interface LintInitConfig {
  /**
   * Package name of the lint-init tool, e.g. @org-name/lint-init, awesome-lint-init
   */
  packageName: string;
  /**
   * Command name of the lint-init tool, e.g. lint-init, awesome-lint-init
   */
  commandName: string;
  /**
   * Package version of the lint-init tool
   */
  version: string;
  eslint?: {
    enabled?: boolean;
  };
  /**
   * Enable stylelint support
   */
  stylelint?: StylelintInitRootConfig;
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

interface StylelintInitRootConfig {
  dependencies?: Record<string, string>;
  config?: any;
  ignore?: string[];
  /**
   * If you have several stylelint config for different types of projects, use this.
   */
  presets?: StylelintInitPresetConfig[];
}

interface StylelintInitPresetConfig {
  name: string;
  value: string;
  dependencies?: Record<string, string>;
  config?: any;
  ignore?: string[];
}
