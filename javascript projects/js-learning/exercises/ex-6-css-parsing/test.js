/* eslint-env node */
const assert = require('assert');
const path = require('path');

const reporter = require('./index');

const expected = [
    'html',
    'hr',
    'button',
    'html input[type="button"]',
    'input[type="reset"]',
    'input[type="submit"]',
    'input[type="search"]',
    'input[type="search"]::-webkit-search-cancel-button',
    'input[type="search"]::-webkit-search-decoration',
    'a',
    '.page-wrapper',
    '.intro header',
    '.intro header h1',
    '.intro header h2',
    '.intro .summary',
    '.intro .preamble',
    '.intro .preamble p:last-child',
    '.main',
    '.main footer',
    '.main .explanation',
    '.main .explanation h3',
    '.main .explanation h3',
    '.main .participation',
    '.main .benefits',
    '.main .requirements',
    '.main .requirements',
    '.main .requirements h3',
    '.main .requirements h3',
    '.main .requirements::before',
    '.sidebar .design-selection h3',
    '.sidebar .design-selection nav ul li',
    '.sidebar .design-archives',
    '.sidebar .design-archives h3',
    '.sidebar .design-archives h3',
    '.sidebar .design-archives ul li',
    '.sidebar .zen-resources',
    '.sidebar .zen-resources h3',
    '.sidebar .zen-resources h3',
    '.sidebar .zen-resources ul li'
];

const expectedMap = expected.reduce((map, sel) => {
    map[sel] = map[sel] ? map[sel] + 1 : 1;

    return map;
}, {});

const expectedTests = 3;
let doneTests = 0;

reporter(path.join(__dirname, 'test.css'), (err, result) => {
    console.log("test one");
    if (err) {
        throw err;
    }

    const resultMap = result.reduce((map, sel) => {
        map[sel] = map[sel] ? map[sel] + 1 : 1;

        return map;
    }, {});

    Object.keys(expectedMap).forEach((sel) => {
        assert.equal(
            expectedMap[sel],
            resultMap[sel],
            `Should have ${expectedMap[sel]} of ${sel}`
        );
    });
    doneTests++;
});

reporter('fakepath', (err) => {
    assert(err);
    console.log("test two");
    doneTests++;
});

reporter(path.join(__dirname, 'invalid.css'), (err) => {
    assert(err);
    console.log("test three");
    doneTests++;
});

process.on('beforeExit', () => {
    assert.equal(expectedTests, doneTests, 'all tests executed');
    console.log('tests ok'); // eslint-disable-line
});
