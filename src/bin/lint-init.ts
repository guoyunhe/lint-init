#!/usr/bin/env node

import { intro, multiselect, outro, select } from '@clack/prompts';
import chalk from 'chalk';
import enMessages from '../i18n/en.json';
import zhMessages from '../i18n/zh.json';

(async () => {
  const messages = process.env['LANG']?.startsWith('zh') ? zhMessages : enMessages;

  console.log('');

  intro(
    '🚀 ' +
      chalk.bold(chalk.cyan(PACKAGE_NAME)) +
      ' ' +
      chalk.dim('v' + PACKAGE_VERSION) +
      ' by guoyunhe'
  );

  const linters = await multiselect({
    message: messages.linters,
    options: [
      { value: 'eslint', label: 'ESLint', hint: 'JS, TS, React, Vue' },
      { value: 'stylelint', label: 'Stylelint', hint: 'CSS, SCSS, LESS' },
      {
        value: 'prettier',
        label: 'Prettier',
        hint: 'HTML, Markdown, CSS, SCSS, LESS, JS, TS, React, Vue',
      },
    ],
    required: true,
  });

  const ci = await select({
    message: messages.ci,
    options: [
      { value: 'github-action', label: 'GitHub Action' },
      { value: 'gitlab-ci', label: 'GitLab CI' },
    ],
  });

  outro(
    '🎉 ' + messages.thank + '\n      ' + chalk.underline('https://github.com/guoyunhe/lint-init')
  );
})();
