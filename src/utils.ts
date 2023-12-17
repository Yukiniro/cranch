import { nanoid } from "nanoid";

function generateRandomLetter(): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateGitBranchName(): string {
  let branchName = nanoid(8);
  // 替换所有不符合规则的字符为随机字母
  branchName = branchName.replace(/[^\d/_a-z]/g, generateRandomLetter);
  // 确保字符串不以斜杠或点开始或结束，不包含连续的斜杠或点
  branchName = branchName.replace(/^\.|\/$|\.\.|\/\/+/g, generateRandomLetter);
  return branchName;
}

export { generateGitBranchName };
