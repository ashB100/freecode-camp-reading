## To Dos

* add ESLint to the repo ✅
* set up eslint as "recommended" config option, path `exercises/`, defaults elsewhere  ✅
* run linting in exercises/ and fix errors ✅
* fix/silence no-console ✅

### Errors

Interesting that running `lint-fix` would change my functions to arrow functions! var / const didn't surprise me nearly as much as that.

It also added `names.push(`${entry.first } ${ entry.last}`);` the backticks in this push. Why? --> interpolation, this could be a longer string, e.g. (`This person's name is ${entry.first} ${entry.last}.`)
