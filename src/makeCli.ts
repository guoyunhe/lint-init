import { cancel, intro, isCancel, multiselect, outro, select, spinner } from '@clack/prompts';
import chalk from 'chalk';
import { LintInitConfig } from './LintInitConfig';
import enMessages from './i18n/en.json';
import zhMessages from './i18n/zh.json';
import { runCommand } from './runCommand';

export async function makeCli(config: LintInitConfig) {
  const messages = process.env['LANG']?.startsWith('zh') ? zhMessages : enMessages;

  console.log('');

  intro('🚀 ' + chalk.bold(chalk.cyan(config.packageName)) + ' ' + chalk.dim('v' + config.version));

  const linterOptions: { label: string; value: string; hint?: string }[] = [];

  if (config.eslint) {
    linterOptions.push({ value: 'eslint', label: 'ESLint' });
  }
  if (config.stylelint) {
    linterOptions.push({ value: 'stylelint', label: 'Stylelint' });
  }
  if (config.markdownlint) {
    linterOptions.push({ value: 'markdownlint', label: 'Markdownlint' });
  }
  if (config.prettier) {
    linterOptions.push({ value: 'prettier', label: 'Prettier' });
  }

  const linters = await multiselect({
    message: '🧰 ' + messages.linters,
    options: linterOptions,
    required: true,
  });

  if (isCancel(linters)) {
    cancel('👋 ' + messages.cancel);
    process.exit(0);
  }

  const ci = await select({
    message: '🚥 ' + messages.ci,
    options: [
      { value: 'github-action', label: 'GitHub Action' },
      { value: 'gitlab-ci', label: 'GitLab CI' },
    ],
  });

  if (isCancel(ci)) {
    cancel('👋 ' + messages.cancel);
    process.exit(0);
  }

  const installCommand = await select<any, string>({
    message: '📦 ' + messages.install,
    options: [
      { value: 'npm update', label: 'npm update' },
      { value: 'pnpm update', label: 'pnpm update' },
      { value: 'yarn update', label: 'yarn update' },
      { value: null, label: messages.skip },
    ],
  });

  if (isCancel(installCommand)) {
    cancel('👋 ' + messages.cancel);
    process.exit(0);
  }

  if (installCommand) {
    const s = spinner();
    s.start('📦 ' + messages.installing);
    const code = await runCommand(installCommand);
    if (code === null) {
      s.stop('👋 ' + messages.cancel);
    } else if (code === 0) {
      s.stop('📦 ' + messages.installed);
    } else {
      s.stop('📦 ' + code + messages.installed);
    }
  }

  outro(
    '🎉 ' + messages.thank + '\n      ' + chalk.underline('https://github.com/guoyunhe/lint-init'),
  );
}
