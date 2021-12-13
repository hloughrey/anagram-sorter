<h1 align="center">Anagram Assignment</h1>

# Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [The Task](#the-task)
  - [The Data](#the-data)
  - [Expected Output](#expected-output)
- [Getting Started](#getting-started)
  - [Development](#development)
  - [Testing](#testing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## The Task

Write a program that takes as argument the path to a file containing one word per line, groups the words that are anagrams to each other, and writes to the standard output each of these groups.

The groups should be separated by newlines and the words inside each group by commas.

### The Data

You can make the following assumptions about the data in the files:

- The words in the input file are ordered by size
- Production files will not fit into memory all at once (but all the words of the same size would)
- The words are not necessarily actual English words, for example, “abc” and “cba” are both considered words for the sake of this exercise.

The files provided in the `Data` folder are just sample input data to help you reason about the problem. Production files will be much bigger.

### Expected Output

```bash
abc,bac,cba
unf,fun
hello
```

## Getting Started

Requirements:

- node v14.17.x

### Development

```bash
yarn
yarn dev
```

### Testing

```bash
yarn
yarn test

// Coverage report
yarn test --coverage
```
