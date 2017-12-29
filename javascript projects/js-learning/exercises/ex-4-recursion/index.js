const arrays = require('../../data/arraysOfArrays');
/*
 * sum
 *
 * A recursive function that adds up all of the numbers
 * in an array, and all the numbers in a sub-array.
 *
 * Returns the sum of a set of numbers, as a number.
 */

// const foo = [ 1, [ 2, 3, 4, 5, [ 6, 7, 8 ] ] ]; // 36
// const foo = [ 2, 5, [ 3, 4 ], 8 ]; // 22
// const foo = [ 2, 4, 5 ];
const foo = [ 1, [ 8 ], 5 ];


const sum = function(param) {
    return param.reduce(function(total, elem) {
        // console.log("total is " + total);
        // console.log("elem is " + elem + " — isArray(elem) is " + Array.isArray(elem));

        // check to see if elem (the item being iterated over) is an array
        if (Array.isArray(elem) === false) {
            total += elem;
            // console.log("now the total is " + total);
            // if it IS NOT: add it to the accumulator (total)
            // if it IS: call function recursively to see if elem is an array...
        } else {
            // console.log("i must be an array");
            total += sum(elem);
        }
        return total;
    }, 0);
}

// console.log(sum(arrays) ); // 36
// console.log("test arrays[0]: should be 36, is: " + sum(arrays[0]) ); // 36
// console.log("test arrays[1]: should be 72, is: " +  sum(arrays[1]) ); // 72
// console.log("test arrays[2]: should be 1, is: " +  sum(arrays[2]) ); // 1
// console.log("test arrays[3]: should be 3, is: " +  sum(arrays[3]) ); // 3


module.exports = sum;
