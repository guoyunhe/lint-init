import glob from 'fast-glob';
import { readFile } from 'fs/promises';
import { join } from 'path';
import {
  ESLintInitPreset,
  MarkdownlintInitPreset,
  PrettierInitPreset,
  StylelintInitPreset,
} from './LintInitConfig';

export interface InitProjectOptions {
  eslint?: ESLintInitPreset | null;
  stylelint?: StylelintInitPreset | null;
  markdownlint?: MarkdownlintInitPreset | null;
  prettier?: PrettierInitPreset | null;
  editorconfig?: string;
}

export async function initProject(projectPath: string, options: InitProjectOptions) {
  let packageJson: any = {};

  try {
    const packageJsonRaw = await readFile(join(projectPath, 'package.json'), 'utf8');
    packageJson = JSON.parse(packageJsonRaw);
  } catch (e) {
    //
  }

  if (!packageJson.devDependencies) {
    packageJson.devDependencies = {};
  }

  if (options.eslint) {
    packageJson.eslintConfig = options.eslint.config;
    packageJson.devDependencies = { ...packageJson.devDependencies, ...options.eslint.deps };
  } else {
    await Promise.all(
      await glob(['.eslintrc', '.eslintrc.*', '.eslintignore'], { cwd: projectPath }),
    );
    delete packageJson.eslintConfig;
  }
}
