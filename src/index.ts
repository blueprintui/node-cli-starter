#!/usr/bin/env node --experimental-strip-types --disable-warning=ExperimentalWarning

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const cli = yargs(hideBin(process.argv))
  .scriptName('ncs')
  .version('0.0.0')
  .usage('$0 <cmd> [args]');

cli.command('$0', 'show help', () => { }, async () => {
  console.log(await cli.getHelp());
});

cli.command('greet [message]', 'create a greeting', (yargs) => {
  return yargs
    .positional('message', {
      describe: 'message to greet'
    })
}, (argv) => {
  const greeting = argv.message || 'world';
  const capitalized = argv.capitalize ? greeting.toUpperCase() : greeting;
  console.log(`hello, ${capitalized}!`);
})
    .option('capitalize', {
      alias: 'c',
      type: 'boolean',
      description: 'Capitalize the message'
    })
    .parse()
