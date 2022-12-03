#! /usr/bin/env node

import { name, version } from "../package.json";
import { program } from "commander";
const chalk = require("chalk");

program
  .name(name)
  .version(version)
  .description("Cranch can help you to checkout a random name branch");

program
  .command("cranch")
  .option("-v, --version", "print the version of cranch")
  .option("-f, --feat", "checkout a branch with with feat prefix name")
  .option("-fi, --fix", "checkout a branch with with fix prefix name")
  .option("-d, --doc", "checkout a branch with with doc prefix name")
  .option("-s, --style", "checkout a branch with with style prefix name")
  .option("-r, --refactor", "checkout a branch with with refactor prefix name")
  .option("-p, --perf", "checkout a branch with with perf prefix name")
  .option("-t, --test", "checkout a branch with with test prefix name")
  .option("-c, --chore", "checkout a branch with with chore prefix name")
  .option("-r, --revert", "checkout a branch with with revert prefix name")
  .action(() => {
    console.log(chalk.blue("test"));
    console.log(options);
  });

program.parse();

const options = program.opts();

console.log(chalk.blue("test"));
console.log(options);

export {};
