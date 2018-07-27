'use strict';
const cUa = require('consecutively-unique-array');
var bibleMaleNames = require('./bible-male-names.json');

exports.all = bibleMaleNames;
exports.rand = cUa(bibleMaleNames);
