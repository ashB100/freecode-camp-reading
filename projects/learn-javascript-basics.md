# Lesson 1. 

* Store values in variables
* String datatype 
* Use a built-in string function
* Create your own function

## String Datatype
**Strings** are letters, numbers and any other characters inside single quotes or double quotes.  

To store values, like ```1``` or ```true``` or ```"Hello"``` we use **variables**.  

## Variables
Variables are declared using ```var``` or ```let``` or ```const```. ```let``` and ```const``` were introduced in ES6.  

Variables are assigned/given values by using either var/let/const keyword, followed by the name of the variable followed by ```=``` and then the value you want to assign.

e.g.
```
const userName = "ashnita01";
```

## Function Declaration

Functions, like variables, must be declared.   

Functions are declared using:
* ```function``` keyword, a space,
* followed by the name of function 
* followed by parenthesis ```()```
* then the body of the function goes inside the ```{}```
* put the first ```{``` on the same line as the function keyword 

Functions can have values passed to them. In the parenthesis you give names to the variables that will refer 
to the value that are passed to the function. These variables are called the function's **parameters**.

e.g. 
```
function isLonger(parameter1, parameter2) {
  // Checks if parameters passed in are of type string
  // Returns true if parameter1 is longer otherwise it returns false
  
  if (typeof parameter1 === 'string' and typeof parameter2 === 'string') {
    return parameter1.length > parameter2.length;
  }
}
```

**Note:** 
1. The type of a variable can be checked with the ```typeof`` operator.
2. length is a property available on String datatypes.

## Function Execution
Just declaring a function will not run it. A function just sits there and does nothing until it is called/executed/run.   

You call a function by stating the name of the function followed by parenthesis, providing the values you want to pass to the function inside the parenthesis. 

The values provided to a function are called its **arguments**. If a function expects more than one value you separate the values by putting
commas between them.

e.g. 
```
isLonger('Hey there!', 'Hi, how you doing');
```

**Exercise 1:**

Store the following string into a variable.

"I like JavaScript"

**Exercise 2:**

Use the built-in string function called **replace** to replace the word "like" in your sentence with "absolutely love". 
The replace function takes two values, the string to takeout and the string to swap in. 

e.g. 
```"my string".replace("my", "Our");```

**Exercise 3:**

Create your own function called ```makeMoreExciting``` that adds exclamation marks at the end of a given string!

```function makeMoreExciting(plainString) {
  return plainString + '!!!!'
}
```

The makeMoreExciting function takes a string and returns a new string. 

**Note:** The expression ```boringString + '!!!!'``` does not change the boringString. 
The function also didn't update boringString with ```=```.

Values are returned by a function using the ```return``` keyword.
If a function doesn't have a ```return``` statement or if it doesn't provide a value to return, it returns the value ```undefined``` by default.

e.g. 

**Exercise 4:**

Make another function called ```yellIt``` which does the following:
* takes a string as a parameter
* changes any letters in the string to uppercase
* adds exclamation marks at the end of the string 
* returns the changed string

**Tips:**
* We already created a function to add exclamation marks at the end of a string. You can use that function. 
* Use the built-in string function called ```toUpperCase()``` to change the string to uppercase.

Test your function by calling it with different sentences.

e.g. 
```
let sentence = 'I need a nap'; 
yellIt(sentence);
```

** Exercise 5: **

The following introduces uses Array datatype as well as String.

Write a function called palindrome, which returns true if a word which reads the same backward as forward, e.g. 'racecar', or 'madam'.

```
function palindrome(word) {
  return word === word.split("").reverse().join("");
}
```

