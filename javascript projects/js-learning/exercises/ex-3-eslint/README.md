# ex-3-eslint

In this exercise, you will add ESLint to the repo, using the [eslint-plugin-indeed](https://code.corp.indeed.com/frontend/eslint-plugin-indeed) project. Use the instructions in the README there to install and set up ESLint (make sure that you are pointed at the internal NPM registry, per the instructions there).

After you install eslint-plugin-indeed, you will need to set it up. Again, follow the instructions in the README. Choose the "recommended" config option, and use `exercises/` as the path to your JS files. Accept the defaults for other questions.

After you have set up ESLint, run `npm run lint` from the root of the repo. You'll want to fix any errors it finds, with the exception of the `no-console` error in the index.js for the first exercise, and in the test.js files. Read the ESLint documentation to learn how to silence a `no-console` error (or other errors) in certain cases.
