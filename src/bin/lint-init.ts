#!/usr/bin/env node

import { intro, outro } from '@clack/prompts';
import chalk from 'chalk';
import enMessages from '../i18n/en.json';
import zhMessages from '../i18n/zh.json';

console.log('\n🪄 ', chalk.bold(chalk.cyan(PACKAGE_NAME)), chalk.dim('v' + PACKAGE_VERSION), '\n');

const messages = process.env['LANG']?.startsWith('zh') ? zhMessages : enMessages;

intro('🚀 ' + messages.intro);

outro('🎉 ' + messages.outro);
