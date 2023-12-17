import { describe, it, expect } from "vitest";
import { generateGitBranchName } from "./utils";

describe("generateGitBranchName", () => {
  it("should return a string", () => {
    const branchName = generateGitBranchName();
    expect(typeof branchName).toBe("string");
  });

  it("should not contain any characters other than lowercase letters, numbers, hyphens, underscores, and slashes", () => {
    const branchName = generateGitBranchName();
    // eslint-disable-next-line no-useless-escape
    expect(branchName).toMatch(/^[\d/_a-z\-]*$/);
  });

  it("should not start or end with a slash or dot", () => {
    const branchName = generateGitBranchName();
    expect(branchName).not.toMatch(/^\./);
    expect(branchName).not.toMatch(/\.$/);
    expect(branchName).not.toMatch(/^\//);
    expect(branchName).not.toMatch(/\/$/);
  });

  it("should not contain consecutive slashes", () => {
    const branchName = generateGitBranchName();
    expect(branchName).not.toMatch(/\/\//);
  });
});
