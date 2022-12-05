# cranch

![NPM](https://img.shields.io/npm/l/ssprojet?color=blue&style=flat-square) ![npm](https://img.shields.io/npm/v/ssprojet?color=blue&style=flat-square)

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

```shel
cranch -f
```

It will checkout a branch named `feat-xxxxxx`.

### -f or --feat

```shel
cranch [-f --feat]
```

`feat-xxxxxx`

### -f or --feat

```shel
cranch [-f --feat]
```

`feat-xxxxxx`

### -fi or --fix

```shel
cranch [-fi --fix]
```

`fix-xxxxxx`

### -d or --doc

```shel
cranch [-d --doc]
```

`doc-xxxxxx`

### -s or --style

```shel
cranch [-s --style]
```

`style-xxxxxx`

### -r or --refactor

```shel
cranch [-r --refactor]
```

`refactor-xxxxxx`

### -p or --perf

```shel
cranch [-f --perf]
```

`perf-xxxxxx`

### -t or --test

```shel
cranch [-t --test]
```

`test-xxxxxx`

### -c or --chore

```shel
cranch [-c --chore]
```

`chore-xxxxxx`

### -r or --revert

```shel
cranch [-r --revert]
```

`revert-xxxxxx`
