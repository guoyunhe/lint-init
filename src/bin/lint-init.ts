#!/usr/bin/env node

import { intro, outro } from '@clack/prompts';
import chalk from 'chalk';
import enMessages from '../i18n/en.json';
import zhMessages from '../i18n/zh.json';

const messages = process.env['LANG']?.startsWith('zh') ? zhMessages : enMessages;

console.log('');

intro(
  '🚀 ' +
    chalk.bold(chalk.cyan(PACKAGE_NAME)) +
    ' ' +
    chalk.dim('v' + PACKAGE_VERSION) +
    ' by guoyunhe'
);

outro(
  '🎉 ' + messages.thank + '\n      ' + chalk.underline('https://github.com/guoyunhe/lint-init')
);
