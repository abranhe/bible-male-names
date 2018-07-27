
<p align="center">
	<a href="https://www.npmjs.com/package/permutated"><img src="https://cdn.abraham.gq/projects/bible-male-names/abraham.png" width="30%" height="30%"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/bible-male-names">Bible-Male-Names</a>: get male names from <a href="https://www.google.com/search?q=The+Bible">The Bible</a>
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/bible-male-names"><img src="https://img.shields.io/travis/abranhe/bible-male-names.svg?logo=travis" /></a>
	<a href="https://github.com/xojs/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/bible-male-names/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/bible-male-names.svg" /></a>
</p>

# Install

```
$ npm install bible-male-names
```

> ![notice](https://png.icons8.com/color/30/000000/error.png) Notice
>
> Since there are over 2000+ names it could take a while

# Usage

```js
const bibleMaleNames = require('bible-male-names');

bibleMaleNames.rand();
//=> 'Abraham'
```

# API

**rand()**

Type: `function`

> Return Bible male name

**.all**

Type: `array`

Over [2000+](https://github.com/abranhe/bible-male-names/blob/master/bible-male-names.json) bible male names.

# CLI

```
$ bible-male-names --help

	Examples
		$ bible-male-names
		Abraham

		$ bible-male-names --all
		Aaron
		Abagtha
		Abda
		...

		Options
			--all   Get all names
```

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# Related

[bible-female-names](https://github.com/abranhe/bible-female-names):  📖  get female names from The Bible 👗


# License

[MIT](https://github.com/abranhe/bible-male-names/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
