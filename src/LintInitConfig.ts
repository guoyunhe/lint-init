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
  eslint?: Partial<ESLintInitPreset> | ESLintInitPreset[];
  /**
   * Enable Stylelint support
   */
  stylelint?: Partial<StylelintInitPreset> | StylelintInitPreset[];
  /**
   * Enable Markdownlint support
   */
  markdownlint?: {
    /**
     * devDependencies of the preset
     */
    deps?: Record<string, string>;
    /**
     * Prettier configuration object or package name of shareable configuration. If not specified,
     * Prettier will read `.editorconfig` settings or use built-in defaults.
     * @see https://prettier.io/docs/en/options
     */
    config?: string | Config;
    /**
     * .prettierignore
     */
    ignore?: string;
  };
  /**
   * Enable Prettier support
   */
  prettier?: {
    /**
     * devDependencies of the preset
     */
    deps?: Record<string, string>;
    /**
     * Prettier configuration object or package name of shareable configuration. If not specified,
     * Prettier will read `.editorconfig` settings or use built-in defaults.
     * @see https://prettier.io/docs/en/options
     */
    config?: string | Config;
    /**
     * .prettierignore
     */
    ignore?: string;
  };
  /**
   * EditorConfig settings
   */
  editorconfig?: string;
}

export interface ESLintInitPreset {
  /**
   * Display name of the preset, e.g. ESLint + React, ESLint + React + TypeScript
   */
  name: string;
  /**
   * Identifier of the preset, used for command line option, e.g. --eslint react-typescript
   */
  id: string;
  /**
   * devDependencies
   */
  deps?: Record<string, string>;
  /**
   * ESLint configureation
   */
  config: any;
  /**
   * .eslintignore
   */
  ignore?: string;
}

interface StylelintInitPreset {
  /**
   * Display name of the preset, e.g. Stylelint + CSS, Stylelint + LESS
   */
  name: string;
  /**
   * Identifier of the preset, used for command line option, e.g. --stylelint scss
   */
  id: string;
  /**
   * devDependencies
   */
  deps?: Record<string, string>;
  /**
   * Stylelint configureation
   */
  config: any;
  /**
   * .stylelintignore
   */
  ignore?: string;
}
