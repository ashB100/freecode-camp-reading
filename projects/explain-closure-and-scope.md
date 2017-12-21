
# Understanding Scope and Closure 

## Execution Context

When a function returns, either by the ```return``` statement or by reaching the end of a 
function block, in this case it implicitly returns ```undefined```, it has to go back 
to where it was called from. 

The browser must remember the context from which the function was called.

## Call Stack
Browsers maintain these execution contexts using a "stack". A stack is a Last In First Out (LIFO) 
data structure. Things are added (pushed) to and deleted (popped) only from the top of the stack.

Therefore, the current or “running” execution context is always the top item in the stack.

When your code is first executed it is in the global context.

Each time we execute a function we create an execution context of that function.

```
(function() {
  let defaultWho = "there";
  
  function greet(who) {
    console.log("Hello, " + (who || defaultWho));
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

window (global)
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
window (global)

## Lexical Environment
In JavaScript, every function and code block has an object called Lexical Environment. 

The Lexical Environment object has two parts:
* Environment Record - which is another object that has all the local variables as its properties
and other information, like the value of ```this```.
* A reference to the outer lexical environment. 

This basically means that a function has access to its own local variables and parameters and 
the local variables and parameters of its outer functions.

## Scope chain
When a code wants to access a variable, it is first searched in the inner Lexical Environment,
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


All functions when created receive a hidden property ```[[Environment]]`` with 
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
