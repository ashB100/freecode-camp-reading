# JavaScript Basics

These lessons are based on [JavaScript For Cats](http://jsforcats.com/).

## Workshop 1 
* Store values in variables
* String datatype 
* Use a built-in string function
* Create your own functions

### The String Datatype 
**Strings** are letters, numbers and any other characters inside single quotes, e.g. ```'A String'``` or double quotes, e.g. ```"A String"```.  


### Variables
To store values, like ```1``` or ```true``` or ```"Hello"``` we use **variables**.  

### To Declare Variables
Variables are declared using ```var```, ```let```, or ```const``` keywords.  

```let``` and ```const``` were introduced in ES6.  

**Try in console:**

```
var sentence;
```

Sentence is declared but **not initialized**, its default value is **undefined**

**Try in console:**

```
var sentence = "This is a string.";
console.log(sentence);
```
Sentence is initialized, meaning it is declared and assigned a value. 

#### var
Variable declarations using ```var``` are treated as if they are at the top of the function. This is called **hoisting**.

**Try in console**

```
function greet(name) {
  console.log('name', name);
  console.log('message', message);
  
  var message = "Hey there, ";
  
  console.log('message', message);
  
  return message + name;
}
```

You are able to use the variable ```message``` in ```console.log(message)``` before it was declared without getting an error. The ``console.log(message)`` gives the value ```undefined```. This is because of **hoisting**. Before running your code, the compiler first goes through and looks for all the declarations. All variables declared with ```var``` keyword are assigned the value of ```undefined```. 

So, the compiler treats your code more like this: 

```
function greet(name) {
  var message = undefined;
  
  console.log('name', name);
  console.log('message', message);
  
  message = "Hey there, ";
  
  console.log('message', message);
  
  return message + name;
}
```

The compiler then goes through the code a second time and runs the code, meaning, it evaluates expressions and runs statements. A fragment of code that produces a value is called an expression.

**Try in console**
```1;```
```!true;```
```let value = 3 * 12;```
```console.log(value);```


```var``` declarations outside functions are created in the global scope.

#### let
You can basically replace ```var``` with ```let``` to declare a variable. The difference between ```var``` and ```let``` is that ```let``` limits the variable scope only to the current code block.

A **block statement** is used to group zero or more statements. A block is created with a pair of curly brackets ```{}```.

**Try in console**

```
let count = 10;
{
  let count = 0;
  console.log('count from block', count);
}
console.log('count from outside block', count);
```

#### const
Variables declared using ```const``` are **constants** meaning their values cannot be changed once set. For this reason ```const``` variables must be initialized on declaration, meaning, they must be assigned a value when they are declared.

```
const maxSize = 10;
```

### To Assign Values to Variables

Variables are assigned or given values using ```=```.

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


