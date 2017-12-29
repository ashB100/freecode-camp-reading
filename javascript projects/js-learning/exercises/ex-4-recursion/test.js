/* eslint-disable no-console */

const assert = require('assert');

const arrays = require('../../data/arraysOfArrays');
const sum = require('./index');

assert.equal(sum(arrays[0]), 36);
assert.equal(sum(arrays[1]), 72);
assert.equal(sum(arrays[2]), 1);
assert.equal(sum(arrays[3]), 3);

console.log('tests ok');
