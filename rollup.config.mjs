import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import fileSize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import { readFile, rm } from "fs/promises";
import { existsSync } from "fs";

const baseOutputConfig = {
  banner: "#! /usr/bin/env node",
};

function getConfig(libraryName) {
  return {
    external: ["commander", "chalk"],
    input: "src/index.ts",
    output: [
      {
        ...baseOutputConfig,
        file: `./dist/${libraryName}.js`,
        format: "cjs",
      },
    ],
    plugins: [
      json(),
      commonjs(),
      nodeResolve(),
      typescript({ tsconfig: "tsconfig.json" }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env"],
      }),
      fileSize(),
    ],
  };
}

export default (async () => {
  try {
    const isDistExists = existsSync("dist");
    if (isDistExists) {
      await rm("dist", { force: true, recursive: true });
    }
    const json = await readFile("./package.json", "utf8");
    const libraryName = JSON.parse(json).name;
    const config = getConfig(libraryName);
    return config;
  } catch (e) {
    console.log(e);
    return getConfig("my-project");
  }
})();
