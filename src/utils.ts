import { nanoid } from "nanoid";

function generateGitBranchName(): string {
  let branchName = nanoid(8);
  // eslint-disable-next-line no-useless-escape
  branchName = branchName.replace(/[^\d/_a-z\-]/g, "-"); // 替换所有不符合规则的字符
  branchName = branchName.replace(/^\.|\/$|\.\.|\/\/+/g, "-"); // 确保字符串不以斜杠或点开始或结束，不包含连续的斜杠或点
  return branchName;
}

export { generateGitBranchName };
