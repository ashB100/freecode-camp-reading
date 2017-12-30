/* eslint-disable no-console */

const assert = require('assert');

const data = require('../../data/MOCK_DATA.json');
const T = require('./index');

const passwordsWithAtLeastTwoCapitalLetters = T.getPasswordsWithAtLeastTwoCapitalLetters(data);

assert.equal(passwordsWithAtLeastTwoCapitalLetters.length, 928);
assert.equal(passwordsWithAtLeastTwoCapitalLetters[3], 'qiTyYy');


const peopleWithAtLeastThreeCities = T.getPeopleWithAtLeastThreeCities(data);

assert.equal(peopleWithAtLeastThreeCities[0], 'Lusa Abramovicz');
assert.equal(peopleWithAtLeastThreeCities[peopleWithAtLeastThreeCities.length - 1], 'Ajay Zuppa');


const southernHemispherePeople = T.getSouthernHemispherePeople(data);

assert.equal(southernHemispherePeople.length, 589);

console.log('tests ok');
