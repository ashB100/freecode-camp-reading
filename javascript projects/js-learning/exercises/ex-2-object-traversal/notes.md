# notes

* had some trouble getting test to use functions from index despite index already being required. you have to export each function individually from index, you don't get just the file contents by requiring it.

`function square(number) { stuff }` vs `var square = function(number) { stuff }`

> Function expressions are convenient when passing a function as an argument to another function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code), as in this example:

```
console.log(square(5));
/* ... */
function square(n) { return n * n; }
```

The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.

Note: This works only when defining the function using the above syntax (i.e. `function funcName(){}`). The code below will not work. That means, function hoisting only works with function declaration and not with function expression.

WILL NOT WORK
```
console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // TypeError: square is not a function
var square = function(n) {
  return n * n;
}
```

QUESTION: why do we normally default to `var foo = function` — to make it NOT possible to hoist?

* note to self: mock data is an ARRAY of OBJECTS with another ARRAY (cities) in it with more OBJECTS (lat/lon) inside cities
* in looking at the mock data, i get the feeling that the fact that some of the lat/lon for cities is quoted as strings and some isn't is going to bite me in the butt later :grimacing:


* regex 👿


* edge cases:
    * check if it's null
    * works with umlauts, etc
    * non-roman characters? yikes


```
var regexp = /[A-Z].*[A-Z]/;
return str.match(regexp);
```
will either be null or return the match
for example [ 'ihaveFIVEUppercase', index: 0, input: 'ihaveFIVEUppercase' ]
output is kinda weird sometimes but if it's not null it matches the check of having 2+ uppercase! yay!


### part 2

```
var fruits = [
    { type: 'apples', colors: [ 'red', 'green', 'pink' ] },
    { type: 'oranges', color: 'orange' },
    { type: 'bananas', color: 'yellow' }
];

fruits.forEach(function(fruit){
    // can't do fruit.colors.length because you don't know which one to check since it's in a foreach
    console.log(fruit.colors);
});
```

accessing objects in an array... one day i will get this memorized 😬


```

var fruits = [
    { type: 'apples', colors: [ 'red', 'green', 'pink' ] },
    { type: 'oranges', colors: ['orange'] },
    { type: 'bananas', colors: ['yellow', 'blue'], texture: 'mushy' }
];

// var number = Object.keys(fruits[2]).length; // 3
fruits.forEach(function(fruit){
    var number = Object.keys(fruit.colors).length;
    console.log(number);
});
```

this works - checking the array / object length


> A `getPeopleWithAtLeastThreeCities` method that returns an array of names

**of names** — oh, very tricky!


// map or filter = something w/ every item in array
// reduce = you want back only a subset

see: https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter


### TODO

* in getPasswords, investigate using `reduce` instead of two steps - making a passwords array and then using filter. ✅
* in ThreeCities, look at using `map`
