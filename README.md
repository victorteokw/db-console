# DB Console
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][cov-image]][cov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-image-dev]][daviddm-url-dev]
[![License][license-image]][license-url]
[![PR Welcome][pr-image]][pr-url]

The database REPL console for modern node.js app.

## Design Philosophy

There isn't a tool in javaScript world which behaves similar to Ruby on Rails'
`rails console`. This is really a handy feature: opening up an REPL console and
executing some model commands. However, javaScript is more like a split world.
I want to make a generic console tool to hook into different ORM environments.

## Install

It's recommended to install this locally to your package.

```bash
npm install --save-dev db-console
```

And add the following to your `scripts` field in `package.json`.

```
"console": "db-console"
```

## Configuration

DB Console read configurations from several places.

1. `dbConsole` field in `package.json`
2. configuration file which default name is `.dbconsolerc`
3. command line arguments

### Precedence

Configuration file take precedence over `dbConsole` field. And command line
arguments have the highest precedence. You can overwrite any configuration with
command line arguments.

### Free Format

You can write configuration file in any format you want. If the file doesn't
have extension, DB Console tries to treat it as `json`, `cson` or `yaml` and
load. If the file has extension, supported types include `js`, `json`, `ts`,
`coffee`, `cson` and `yaml`.

### Customizable

You can use `--config-file` to make DB Console load the configuration file you
want. In this case, the default configuration file is ignored.

### Options

* `-h, --help`
view db-console's help

* `-v, --version`
view db-console's version

* `-c, --config-file string`
the config file to load

* `-H, --history-file string`
the history file to use

* `-o, --orm string`
the orm library of the models

* `-d, --db string`
the database connection url

* `-m, --models string, regexp, [string], [regexp]`
model files matcher

* `-b, --model-base-directory string`
executing model files matcher in this directory

* `-p, --prompt string`
the shape of the prompt

## Supported ORMs

- mongoose
- sequelize
- sequelize-typescript
- typegoose
- typeorm

## License

MIT © [Zhang Kai Yu][license-url]

[npm-image]: https://badge.fury.io/js/db-console.svg
[npm-url]: https://npmjs.org/package/db-console
[travis-image]: https://travis-ci.org/zhangkaiyulw/db-console.svg?branch=master
[travis-url]: https://travis-ci.org/zhangkaiyulw/db-console
[cov-image]: https://codecov.io/gh/zhangkaiyulw/db-console/branch/master/graph/badge.svg
[cov-url]: https://codecov.io/gh/zhangkaiyulw/db-console
[daviddm-image]: https://david-dm.org/zhangkaiyulw/db-console.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zhangkaiyulw/db-console
[daviddm-image-dev]: https://david-dm.org/zhangkaiyulw/db-console/dev-status.svg
[daviddm-url-dev]: https://david-dm.org/zhangkaiyulw/db-console?type=dev
[license-image]: https://img.shields.io/github/license/zhangkaiyulw/db-console.svg
[license-url]: https://github.com/zhangkaiyulw/db-console/blob/master/LICENSE
[pr-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: https://github.com/zhangkaiyulw/db-console/blob/master/CONTRIBUTING.md
