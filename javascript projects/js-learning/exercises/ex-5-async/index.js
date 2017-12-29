// export a function that increments a counter from a start value 
// to an end value at a certain interval.

// The function takes an object as its sole argument.

// This object will have the following properties:
// `start`: a start value for a counter
// `end`: an end value for a counter
// `delay`: the time in milliseconds that should elapse between incrementing the counter
// `onIncrement`: a function to call with the current counter value each time the counter is incremented
// `callback`: a function to call after the counter reaches its end value

const counter = function(object) {
    var num = object.start;
    console.log(`the num is equal to obj.start ${object.start} and is ${num}.`);

    const increment = function() {
        if (num > object.end) {
            object.callback();
        } else {
            num += 1;
            console.log(`the num is now ${num}.`);
            object.onIncrement(num);
            setTimeout(increment, object.delay);
        }
    };

    increment();
}


module.exports = counter;