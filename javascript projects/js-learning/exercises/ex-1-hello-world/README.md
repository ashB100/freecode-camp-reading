# ex-1-hello-world

From the root of this repository, run the following:

```
node --inspect --debug-brk exercises/ex-1-hello-world/index.js
```

This will display a chrome-devtools URL in your terminal. In Chrome, enter that URL in the address bar. (You can also follow the instructions in [this article](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27).)

In the Sources panel of the devtools, navigate to the index.js file under the file:// section. (It should be the file displayed by default.) You'll see that execution is paused on the line `sayIt('hello world')`.

Use the [step debugger](https://developers.google.com/web/tools/chrome-devtools/javascript/reference#stepping) to step into the function; the debugger should now be paused on the first line inside of the `sayIt` function. Hover your mouse over the `phrase` argument being passed to `console.log`; notice how you can see the value that is being passed (`'hello world'`);

Press the play/pause button in the debugger to resume execution.

Next, run the code without using the debugger:

```
node exercises/ex-1-hello-world/index.js
```

It should immediately run to completion, logging "hello world" to the terminal.
