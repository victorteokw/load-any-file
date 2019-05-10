# Load Any File!
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
npm i load-any-file -s
```

## Usage

To load this package, for javaScript:
```js
const loadFile = require('load-any-file');
```
For TypeScript:
```ts
import loadFile from 'load-any-file';
```

Load Any File supports a wide variety of formats.

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
const myJsonModule = loadFile('./aries.json');
const myJsModule = loadFile('./taurus.js');
const myTsModule = loadFile('./gemini.ts');
const myCsonModule = loadFile('./leo.cson');
const myCoffeeModule = loadFile('./virgo.coffee');
const myYamlModule = loadFile('./libra.yaml');
```

Most of times, you don't need to specify the extension. Having Load Any File
figure out the extension and format for you.

```
/foo
├── .babelrc.json
├── package.json
└── server.js
```

```js
const babelConfig = loadFile('./.babelrc'); // resolves to the json config
```

```
/foo
├── .babelrc.yaml
├── package.json
└── server.js
```

```js
const babelConfig = loadFile('./.babelrc'); // resolves to the yaml config
```

If a directory with the name user specified exists, Load Any File tries to load
the index file.

```
/foo
└── myModule
    └── index.ts
```

```js
const babelConfig = loadFile('./myModule'); // resolves to 'myModule/index.ts'
```

If a file exists but without extension, Load Any File treats it as a data file.
This means, Load Any File tries to load it as 'json', 'cson' or 'yaml'. If it
can't be parsed by any parser, it throws an error. This enables configuration
files without extension to be written in any format.

```
/foo
└── .eslintrc
```

```js
// figure out the file type and load it
const babelConfig = loadFile('./.eslintrc');
```

## API

### loadFile(location: string): any;

Returns the module exported by the file.

### loadFile.resolve(location: string): string;

Returns the module's file system location.

## Change Log

- 1.1.0 (2019-05-10)
  - added loadFile.resolve for returning file location
- 1.0.1 (2019-04-23)
  - added documentation for requiring this package
  - added change log
- 1.0.0 (2019-04-23)
  - basic functionality

## License

MIT © [Zhang Kai Yu][license-url]

[npm-image]: https://badge.fury.io/js/load-any-file.svg
[npm-url]: https://npmjs.org/package/load-any-file
[travis-image]: https://travis-ci.org/zhangkaiyulw/load-any-file.svg?branch=master
[travis-url]: https://travis-ci.org/zhangkaiyulw/load-any-file
[cov-image]: https://codecov.io/gh/zhangkaiyulw/load-any-file/branch/master/graph/badge.svg
[cov-url]: https://codecov.io/gh/zhangkaiyulw/load-any-file
[daviddm-image]: https://david-dm.org/zhangkaiyulw/load-any-file.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zhangkaiyulw/load-any-file
[daviddm-image-dev]: https://david-dm.org/zhangkaiyulw/load-any-file/dev-status.svg
[daviddm-url-dev]: https://david-dm.org/zhangkaiyulw/load-any-file?type=dev
[license-image]: https://img.shields.io/github/license/zhangkaiyulw/load-any-file.svg
[license-url]: https://github.com/zhangkaiyulw/load-any-file/blob/master/LICENSE
[pr-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: https://github.com/zhangkaiyulw/load-any-file/blob/master/CONTRIBUTING.md
