#!/usr/bin/env node
'use strict';
const meow = require('meow');
const open = require('opn');
const bibleMaleNames = require('./');

const search = 'https://www.google.com/search?q=';

const cli = meow(`
	Examples
		$ bible-male-names
		Abraham

		$ bible-male-names --all
		Aaron
		Abagtha
		Abda
		...

		Options
			--all      Get all names
			--who-was  Search on Google for the name
`);

let name = bibleMaleNames.rand();

console.log(cli.flags.all ? bibleMaleNames.all.join('\n') : name);

if(cli.flags.whoWas){
	open(search + 'Who+was+' + name + '+in+The+Bible')
	process.exit();
}
