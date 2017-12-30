* why is mock data `json` and arrays data `js`?

const sum = foo.reduce(function(sum, elem) {
    // console.log("elem is " + elem);
    // console.log("is " + elem + " an array? — " + Array.isArray(elem));

    // check to see if elem (the item being iterated over) is an array
    if(Array.isArray(elem) === false) {
        sum = sum + elem;
        console.log(sum);
        // if it IS NOT: add it to the accumulator (sum)
        // if it IS: call function recursively to see if elem is an array...
    } else {
        console.log("i must be an array");

    }
}, 0);
