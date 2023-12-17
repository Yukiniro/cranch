#! /usr/bin/env node

import { execSync } from "node:child_process";
import { program } from "commander";
import chalk from "chalk";
import { name, version } from "../package.json";
import { generateGitBranchName } from "./utils";

program
  .name(name)
  .version(version)
  .description("Cranch can help you to checkout a random name branch");

program
  .option("-v, --version", "print the version of cranch")
  .option("-f, --feat", "checkout a branch with with feat prefix name")
  .option("-fi, --fix", "checkout a branch with with fix prefix name")
  .option("-d, --doc", "checkout a branch with with doc prefix name")
  .option("-s, --style", "checkout a branch with with style prefix name")
  .option("-r, --refactor", "checkout a branch with with refactor prefix name")
  .option("-p, --perf", "checkout a branch with with perf prefix name")
  .option("-t, --test", "checkout a branch with with test prefix name")
  .option("-c, --chore", "checkout a branch with with chore prefix name")
  .option("-rv, --revert", "checkout a branch with with revert prefix name")
  .action((options) => {
    const type = Object.keys(options)[0];
    const id = generateGitBranchName();
    const branchName = type ? `${type}-${id}` : id;
    execSync(`git checkout -b ${branchName}`);
    console.log(chalk.blue(`Checkout ${branchName} success.`));
  });

program.parse(process.argv);

export {};
