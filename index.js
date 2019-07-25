'use strict';
const cUa = require('consecutively-unique-array');
const bibleMaleNames = require('./names.json');

exports.all = bibleMaleNames;
exports.random = cUa(bibleMaleNames);
