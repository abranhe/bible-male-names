import {expectType} from 'tsd';
import bibleMaleNames = require('.');

expectType<readonly string[]>(bibleMaleNames.all);
expectType<string>(bibleMaleNames.random());