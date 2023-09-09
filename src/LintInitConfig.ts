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
  /**
   * Enable ESLint support
   */
  eslint?: Partial<ESLintInitConfig> | ESLintInitConfig[];
  /**
   * Enable Stylelint support
   */
  stylelint?: Partial<StylelintInitConfig> | StylelintInitConfig[];
  /**
   * Enable Markdownlint support
   */
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

interface ESLintInitConfig {
  /**
   * Display name of the preset, e.g. ESLint + React, ESLint + React + TypeScript
   */
  name: string;
  /**
   * Identifier of the preset, e.g. eslint-react, eslint-react-typescript
   */
  value: string;
  /**
   * devDependencies of the preset
   */
  deps?: Record<string, string>;
  /**
   * ESLint configureation of the preset
   */
  config: any;
  /**
   * .eslintignore rules of the preset
   */
  ignore?: string[];
}

interface StylelintInitConfig {
  /**
   * Display name of the preset, e.g. Stylelint + CSS, Stylelint + LESS
   */
  name: string;
  /**
   * Identifier of the preset, e.g. stylelint-base, stylelint-less
   */
  value: string;
  /**
   * devDependencies of the preset
   */
  deps?: Record<string, string>;
  /**
   * Stylelint configureation of the preset
   */
  config: any;
  /**
   * .stylelintignore rules of the preset
   */
  ignore?: string[];
}
