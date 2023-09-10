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
    packageJson.devDependencies = { ...packageJson.devDependencies, ...options.eslint.deps };

    if (options.eslint.config) {
      await writeFile(
        join(projectPath, '.eslintrc.json'),
        JSON.stringify(options.eslint.config, null, 2),
        'utf8',
      );
    }

    if (options.eslint.ignore) {
      await writeFile(join(projectPath, '.eslintignore'), options.eslint.ignore, 'utf8');
    }
  } else {
    await Promise.all(
      await glob(['.eslintrc', '.eslintrc.*', '.eslintignore'], { cwd: projectPath }),
    );
    delete packageJson.eslintConfig;
  }

  if (options.stylelint) {
    packageJson.devDependencies = { ...packageJson.devDependencies, ...options.stylelint.deps };

    if (options.stylelint.config) {
      await writeFile(
        join(projectPath, '.stylelintrc.json'),
        JSON.stringify(options.stylelint.config, null, 2),
        'utf8',
      );
    }

    if (options.stylelint.ignore) {
      await writeFile(join(projectPath, '.stylelintignore'), options.stylelint.ignore, 'utf8');
    }
  } else {
    await Promise.all(
      await glob(['.stylelintrc', '.stylelintrc.*', '.stylelintignore'], { cwd: projectPath }),
    );
    delete packageJson.stylelint;
  }

  if (options.prettier) {
    packageJson.devDependencies = { ...packageJson.devDependencies, ...options.prettier.deps };

    if (options.prettier.config) {
      await writeFile(
        join(projectPath, '.prettierrc.json'),
        JSON.stringify(options.prettier.config, null, 2),
        'utf8',
      );
    }

    if (options.prettier.ignore) {
      await writeFile(join(projectPath, '.prettierignore'), options.prettier.ignore, 'utf8');
    }
  } else {
    await Promise.all(
      await glob(['.prettierrc', '.prettierrc.*', '.prettierignore'], { cwd: projectPath }),
    );
    delete packageJson.prettier;
  }

  packageJson = sortPackageJson(packageJson);

  await writeFile(join(projectPath, 'package.json'), JSON.stringify(packageJson, null, 2), 'utf8');
}
