# ex-5-async

Write code in index.js that makes the tests in test.js pass, specifically:

- index.js should export a function that increments a counter from a start value to an end value at a certain interval. The function takes an object as its sole argument. This object will have the following properties:
    - `start`: a start value for a counter
    - `end`: an end value for a counter
    - `delay`: the time in milliseconds that should elapse between incrementing the counter
    - `onIncrement`: a function to call with the current counter value each time the counter is incremented
    - `callback`: a function to call after the counter reaches its end value

When the tests pass, running test.js will output "tests ok"; if any tests fail, you will see errors instead.
