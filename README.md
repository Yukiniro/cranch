# cranch

![NPM](https://img.shields.io/npm/l/cranch?color=blue&style=flat-square) ![npm](https://img.shields.io/npm/v/cranch?color=blue&style=flat-square)

## Why cranch?

Ever found yourself spending more time brainstorming the perfect branch name than actually coding? If so, you just need to type `c` or `cranch`.

```shell
c
```

or

```shell
cranch
```

## Intro

`cranch` is a tiny library to create a random branch name. You know, it is a very difficult thing to think of a great name.

## Install

```shell
npm install cranch -g
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
cranch [-rv --revert]
```

`revert-xxxxxx`
