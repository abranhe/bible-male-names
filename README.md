
<p>
	<a href="https://www.npmjs.com/package/bible-male-names"><img src="https://cdn.abranhe.com/projects/bible-male-names/abraham.png" width="30%" height="30%"></a>
	<br>
	<br>
</p>

# bible-male-names

> Get over 2000+ male names from [The Bible](https://www.google.com/search?q=The+Bible)

[![](https://img.shields.io/travis/abranhe/bible-male-names.svg?logo=travis)](https://travis-ci.org/abranhe/bible-male-names)
[![](https://abranhe.com/badge.svg)](https://github.com/abranhe)
[![](https://cdn.abranhe.com/badges/cash-me.svg)](https://cash.me/$abranhe)
[![](https://cdn.abranhe.com/badges/patreon.svg)](https://patreon.com/abranhe)
[![](https://img.shields.io/github/license/abranhe/bible-male-names.svg)](https://github.com/abranhe/bible-male-names/blob/master/license)
[![](https://img.shields.io/npm/v/bible-male-names.svg)](https://npmjs.com/package/bible-male-names)

## Install

```
$ npm install bible-male-names
```

Names from [biblegateway.com](https://www.biblegateway.com/resources/all-men-bible/Alphabetical-Order-All-Men)

## Usage

```js
const bibleMaleNames = require('bible-male-names');

bibleMaleNames.random();
//=> 'Abraham'
```

## API

### random()

Type: `function`

Return a random male name from The Bible.

### .all

Type: `string[]`

Over [2000+](https://github.com/abranhe/bible-male-names/blob/master/names.json) male names from The Bible.

## Related

- [bible-male-names-cli](https://github.com/abranhe/bible-male-names-cli) CLI for this module
- [bible-female-names](https://github.com/abranhe/bible-female-names): Get female names from The Bible 👗
- [merry-christmas](https://github.com/abranhe/merry-christmas) Get amazing Christmas greetings messages 🎄


## License

MIT © [Carlos Abraham](https://abranhe.com)
