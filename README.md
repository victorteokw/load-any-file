# Load It!
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][cov-image]][cov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-image-dev]][daviddm-url-dev]
[![License][license-image]][license-url]
[![PR Welcome][pr-image]][pr-url]

Load any file you want to load in any format.

## Design Philosophy

The design philosophy behind this package is allowing developer to use any
language he/she preferred to write configuration files.

And this utility is mean to be used by packages that require configuration
files.

It's not recommended to use this for loading program files.

## Installation

```bash
npm i load-it -s
```

## Usage

Load It supports a wide variety of formats.

```
/foo
├── aries.json
├── taurus.js
├── gemini.ts
├── leo.cson
├── virgo.coffee
└── libra.yaml
```

``` js
const myJsonModule = loadIt('./aries.json');
const myJsModule = loadIt('./taurus.js');
const myTsModule = loadIt('./gemini.ts');
const myCsonModule = loadIt('./leo.cson');
const myCoffeeModule = loadIt('./virgo.coffee');
const myYamlModule = loadIt('./libra.yaml');
```

Most of times, you don't need to specify the extension. Having Load It figure
out the extension and format for you.

```
/foo
├── .babelrc.json
├── package.json
└── server.js
```

```js
const babelConfig = loadIt('./.babelrc'); // resolves to the json config
```

```
/foo
├── .babelrc.yaml
├── package.json
└── server.js
```

```js
const babelConfig = loadIt('./.babelrc'); // resolves to the yaml config
```

If a directory with the name user specified exists, Load It tries to load the
index file.

```
/foo
└── myModule
    └── index.ts
```

```js
const babelConfig = loadIt('./myModule'); // resolves to 'myModule/index.ts'
```

If a file exists but without extension, Load It treats it as a data file. This
means, Load It tries to load it as 'json', 'cson' or 'yaml'. If it can't be
parsed by any parser, it throws an error. This enables configuration files
without extension to be written in any format.

```
/foo
└── .eslintrc
```

```js
// figure out the file type and load it
const babelConfig = loadIt('./.eslintrc');
```

## API

### declare function loadIt(location: string): any;

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
