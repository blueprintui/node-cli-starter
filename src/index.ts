import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export function run() {
  const argv = yargs(hideBin(process.argv)).argv;
  console.log(`--path = ${path.resolve(argv.path)}`);
}

run();
