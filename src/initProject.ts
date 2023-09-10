import glob from 'fast-glob';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import sortPackageJson from 'sort-package-json';
import {
  ESLintInitPreset,
  MarkdownlintInitPreset,
  PrettierInitPreset,
  StylelintInitPreset,
} from './LintInitConfig';

export interface InitProjectOptions {
  eslint?: ESLintInitPreset | null | undefined;
  stylelint?: StylelintInitPreset | null | undefined;
  markdownlint?: MarkdownlintInitPreset | null | undefined;
  prettier?: PrettierInitPreset | null | undefined;
  editorconfig?: string | null | undefined;
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

  packageJson = sortPackageJson(packageJson);

  await writeFile(join(projectPath, 'package.json'), JSON.stringify(packageJson, null, 2), 'utf8');
}
