# DB Console
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][cov-image]][cov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-image-dev]][daviddm-url-dev]
[![License][license-image]][license-url]
[![PR Welcome][pr-image]][pr-url]

The database REPL console for modern node.js app.

## Install

```bash
npm install --save-dev db-console
```

## Usage

Create a config file named `.dbconsolerc.json` with the following contents.

``` js
module.exports = {
  mongodb: {
    url: "your db url",
    options: {}
  },
  modelsDir: "models"
}
```

And then `db-console` to start repl!

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
