# ex-6-css-parsing

In this exercise, you'll identify selectors in a CSS file that use vendor-prefixed properties.

Your function should take as its arguments:

- The full path to a CSS file. Use the Node File System API -- specifically, the `readFile` method -- to read the file.
- A callback to call when processing is complete. The callback should receive two arguments: an error object, if any errors were encountered; and an array of rules that use vendor prefixes.

Use the [rework/css](https://github.com/reworkcss/css) CSS parser to generate an object that represents the contents of the CSS file, which you can then traverse to identify places where vendor prefixes are used.

When the tests pass, running test.js will output "tests ok"; if any tests fail, you will see errors instead.
