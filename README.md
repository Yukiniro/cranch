# cranch

![NPM](https://img.shields.io/npm/l/cranch?color=blue&style=flat-square) ![npm](https://img.shields.io/npm/v/cranch?color=blue&style=flat-square)

## Intro

`cranch` is a tiny library to create a random branch name. You know, it is a very difficult thing to think of a great name.

## Install

```shell
npm install cranch -g
```

## How to Use

You just type the `cranch` and press enter key in the command line interface. And you will get new branch with a random name from current branch. _git checkout -b xxx_

```shell
cranch
```

## Options

`cranch` support some option to create a prefix name.

```shell
cranch -f
```

It will checkout a branch named `feat-xxxxxx`.

### -f or --feat

```shell
cranch [-f --feat]
```

`feat-xxxxxx`

### -fi or --fix

```shell
cranch [-fi --fix]
```

`fix-xxxxxx`

### -d or --doc

```shell
cranch [-d --doc]
```

`doc-xxxxxx`

### -s or --style

```shell
cranch [-s --style]
```

`style-xxxxxx`

### -r or --refactor

```shell
cranch [-r --refactor]
```

`refactor-xxxxxx`

### -p or --perf

```shell
cranch [-f --perf]
```

`perf-xxxxxx`

### -t or --test

```shell
cranch [-t --test]
```

`test-xxxxxx`

### -c or --chore

```shell
cranch [-c --chore]
```

`chore-xxxxxx`

### -r or --revert

```shell
cranch [-r --revert]
```

`revert-xxxxxx`
