# Currency Converter

In this project we will build a currency converter similar to [this one provided by Google](https://www.google.co.uk/search?q=currency+converter&oq=cu&aqs=chrome.0.69i59j69i60j69i61j69i60j69i57j35i39.1896j0j7&sourceid=chrome&ie=UTF-8).

In order to do currency conversion, we need exchange rates for the different countries. 

We will use this static JSON for the rates. This assumes GBP to be the base rate, 1.

```
  const RATES = {
    "AUD": 1.7429,
    "BGN": 2.2161,
    "BRL": 4.4385,
    "CAD": 1.7076,
    "CHF": 1.3222,
    "CNY": 8.8407,
    "CZK": 29.096,
    "DKK": 8.4352,
    "HKD": 10.45,
    "HRK": 8.551,
    "HUF": 355.15,
    "IDR": 18163,
    "ILS": 4.7176,
    "INR": 85.672,
    "JPY": 150.08,
    "KRW": 1455.7,
    "MXN": 25.64,
    "MYR": 5.4574,
    "NOK": 11.085,
    "NZD": 1.904,
    "PHP": 67.452,
    "PLN": 4.778,
    "RON": 5.2499,
    "RUB": 78.755,
    "SEK": 11.284,
    "SGD": 1.8013,
    "THB": 43.483,
    "TRY": 5.1673,
    "USD": 1.3377,
    "ZAR": 17.882,
    "EUR": 1.1331,
    "GBP": 1
  };
```
  
Once we start learning 'Promises' we can replace the static JSON with api call to get the current exchange rates.

## Formula for currency conversion

```
  Converted Amount = Amount you want to convert / rateFrom * rateTo
```

## User Stories

* Users should be able to enter the amount they want to convert.
* Users should be able to select which currency they want to convert from.
* Users should be able to select which currency they want to convert to.
* Users should be able to see the amount converted in the currency they're converting to. 
* When either the amount, currency from, or currency to changes the converted amount should be calculated.

## JavaScript skills that we'll get to practice are:
* Creating functions, variables, scope
* Using Objects
* Reading from DOM
* Writing to DOM
* Event handling

## More advanced skills we can build after a while are
* Promises
* Separating our code into modules so we have separation of concerns

## Functional Programming

We want to write our application in a declarative way. To write in a declarative way means that our code should describe what to 
do rather than how to do it. We can do this by using functions. 

**For example, instead of writing something like this:**

 ```
  (function() {
    'use strict';
    
    ...
   for(var i=0; i< i.length; i++) {
    if (rate[i] === currencyFrom) {
      rateFrom = rate[i];
      break;
    }
   }
   
   for(var i=0; i< i.length; i++) {
    if (rate[i] === currencyTo) {
      rateTo = rate[i];
      break;
    }
   }
  })()
```
  
**A declarative way would be:** 
  
```
    rateFrom = getRateForCurrency(currencyFrom);
    rateTo = getRateForCurrency(currencyTo);
```
  
The function names should be descriptive of the the task. 
  
The information needed by the functions should be passed to them. 

## Tips - for if you need some help getting started on how to tackle this app

* In your index.html create the markup for:
  * entering amount
  * selecting currencyFrom
  * selecting currencyTo
  * displaying converted amount
* Get the amountFrom, currencyFrom, currencyTo from the DOM. 
* Lookup the ratesFrom, ratesTo for the entered currencies from the rates Object.
  * E.g. ratesFrom = RATES[currencyFrom]
* Pass the amount, rateFrom, rateTo, to a function that will do the conversion. 
* The formula for conversion is: amountTo = amountFrom / rateFrom * rateTo.
* Once you're ready for this, add events for amount, currencyFrom and currencyTo elements using addEventListener('input', eventHandlerFunction)
