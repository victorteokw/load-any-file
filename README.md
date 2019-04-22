# Load It!
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][cov-image]][cov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-image-dev]][daviddm-url-dev]
[![License][license-image]][license-url]
[![PR Welcome][pr-image]][pr-url]

Load any file in any format.

## Design

The design philosophy behind this package is allowing developer to use any
language he/she prefered to write configuration files.

And this utility is mean to be used by packages that requires configuration
files.

Do not use this for loading program files.

## Installation

```bash
npm i load-it -s
```

## Usage

``` js
const config = loadIt('./config.cson');
const config = loadIt('./config.json');
const config = loadIt('./config.ts');
const config = loadIt('./config.js');
const config = loadIt('./config.yaml');
```

## API

### loadIt(location)

Returns the module exported by the file.

## License

MIT © [Zhang Kai Yu][license-url]

[npm-image]: https://badge.fury.io/js/load-it.svg
[npm-url]: https://npmjs.org/package/load-it
[travis-image]: https://travis-ci.org/zhangkaiyulw/load-it.svg?branch=master
[travis-url]: https://travis-ci.org/zhangkaiyulw/load-it
[cov-image]: https://codecov.io/gh/zhangkaiyulw/load-it/branch/master/graph/badge.svg
[cov-url]: https://codecov.io/gh/zhangkaiyulw/load-it
[daviddm-image]: https://david-dm.org/zhangkaiyulw/load-it.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zhangkaiyulw/load-it
[daviddm-image-dev]: https://david-dm.org/zhangkaiyulw/load-it/dev-status.svg
[daviddm-url-dev]: https://david-dm.org/zhangkaiyulw/load-it?type=dev
[license-image]: https://img.shields.io/github/license/zhangkaiyulw/load-it.svg
[license-url]: https://github.com/zhangkaiyulw/load-it/blob/master/LICENSE
[pr-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: https://github.com/zhangkaiyulw/load-it/blob/master/CONTRIBUTING.md
