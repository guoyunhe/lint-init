import { LintInitConfig } from 'lint-init-framework';
import { markdownlint } from './markdownlint';
import { presets } from './presets';
import { prettier } from './prettier';

export const config: LintInitConfig = {
  packageName: 'lint-init',
  commandName: 'lint-init',
  version: PACKAGE_VERSION,
  presets,
  markdownlint,
  prettier,
};
