#!/usr/bin/env node
'use strict';
var meow = require('meow');
var bibleMaleNames = require('./');

var cli = meow([
	'Examples',
	'  $ bible-male-names',
	'  Abraham',
	'',
	'  $ bible-male-names --all',
	'  Aaron',
	'  Abagtha',
	'  Abda',
	'  ...',
	'',
	'Options',
	'  --all   Get all names'
]);

console.log(cli.flags.all ? bibleMaleNames.all.join('\n') : bibleMaleNames.rand());
