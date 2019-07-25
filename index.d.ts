import names = require('./names.json');

declare const bibleMaleNames: {
	/**
	Get over 2000+ male names from the bible.

	@example
	```
	import bibleMaleNames = require('bible-male-names');

	bibleMaleNames.all;
	//=> ['Aaron', 'Abagtha', …]
	```
	*/
	readonly all: Readonly<typeof names>;

	/**
	Get a random male name from the bible.

	@example
	```
	import bibleMaleNames = require('bible-male-names');

	bibleMaleNames.random();
	//=> 'Abraham'
	```
	*/
	random(): string;
};

export = bibleMaleNames;