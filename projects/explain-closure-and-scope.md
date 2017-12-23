
# Understanding Scope and Closure 

## Overview
TODO

## Execution Context

When a function returns, either by the ```return``` statement or by reaching the end of a 
function block, it has to go back to where it was called from.

The browser needs to remember the place from which the function was called.

## Call Stack
Browsers maintain where we are in our code using a "stack". 

What is a stack? 

Stack is a Last In First Out (LIFO) data structure. Items are added to the **top** of the stack and removed from the
**top** of the stack.

Each time we enter a function (by calling the function), it is added to the stack, our lovely callstack. When the function returns it is 
taken off the stack. 

So:
* When your code is first executed it is in the global context.
* The current or “running” execution context is always the top item in the call stack.
* If the currently running function (lets say functionOne) then calls another function (functionTwo), functionOne stays on the stack (as it has not returned yet), functionTwo becomes the current function and is added to the top of the stack. 

```
mySillyCommunication.js
(function() {
  
  function greet(who) {
    console.log("Hello" + who);
  }

  function sendOff(sentiment) {
    console.log("Bye, " + sentiment);
  }
  
  function communicate() {
    greet("Marcin");
    sendOff("have a good trip");
  }
  
  communicate();
  
})()

```

The flow of control for this code could be shown like this:
```
  IIFE 
    communicate  
      greet  
        console.log  
      greet  
    communicate  
      sendOff  
        console.log  
      sendOff  
    communicate  
  IIFE 
```

## Lexical Environment
In JavaScript, every function, code block and script has an object called Lexical Environment. 

**The Lexical Environment object has two parts:**
* Environment Record - which is an **object** that has all the **local variables as its properties**
and other information, like the value of ```this```.
* A reference to the outer lexical environment. 

>This basically means that a function has access to its own **local variables** and **parameters** and 
>**the local variables and parameters of its outer functions**.

## Scope chain
When a code tries to access a variable, it is first searched in the inner Lexical Environment,
then in the outer, then the more outer and so on until the end of the chain, which is window in
the browser. 

If a variable is not found anywhere, you will get an ```Uncaught ReferenceError: variableName is not defined``` error. 

What is a closure?

A closure is created when one function returns another function, 
The inner function has access to the variables in the outer functions scope,
even after the outer function has returned. 

**Try in console:**

```
function makeCounter() {
  let count = 0;
  
  return function() {
    return count++;
  }
}

let counter1 = makeCounter();
let counter2 = makeCounter();

counter1();
counter1();

counter2();
```

For every call to makeCounter() a new function Lexical Environment is created
with its own ```count```.


All functions when created receive a hidden property ```[[Environment]]``` with 
the reference to the Lexical Environment of their creation. That's a way how 
the function knows where it was made.

When ```makeCounter()``` is called, its Lexical Environment is created. This includes:
* its local variables and parameters and 
* a reference to the outer lexical enviroment in ```[[Environment]]```. 

e.g. makeCounter()'s lexical environment:
* count
* global

e.g. counter1()'s lexical enviroment:
* no local variables
* count
* global

When counter1() runs, it looks for count in its own local environment, doesn't find it, then looks for it
in makeCounter(). 

When makeCounter() call finished some time ago, its Lexical Environment was retained in memory, 
because there’s a nested function with [[Environment]] referencing it.

Generally, a Lexical Environment object lives as long as there is a function which may use it. 
And when there are none, it is cleared.

## Notes
* If a function doesn't have a return statement it implicitly returns ```undefined```.
* Adding to a stack data structure is called push and deleting from a stack is called pop.
* JavaScript engines have only one callstack which means only one function can be running at a time.
