#!/usr/bin/env node

import { program } from 'commander';
const program = new program();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0')
  .option('-V, --version', 'output the version number')
  .helpOption('-e, --HELP', 'output usage information')
  .option(
    '-f, --format [type]',
    'output format: plain, stylish, json',
    'stylish'
  )
  .argument('<filepath1>', '<filepath2>')
  .action((filepath1, filepath2) => {
    const options = program.opts().format;
    const result = gendiff(filepath1, filepath2, options);
    console.log(result);
  });

program.parse();
