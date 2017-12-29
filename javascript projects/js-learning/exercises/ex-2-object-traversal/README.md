# ex-2-object-traversal

In this exercise, you will work with data in the data directory. This data represents people who currently live in a location (represented by the `lat` and `lon` properties), and who have in the past lived in one or more locations (represented by the `cities` property, which contains an array of objects containing `lat` and `lon` properties).

Write code in index.js that makes the tests in test.js pass, specifically:

- A `getPasswordsWithAtLeastTwoCapitalLetters` method that returns an array of passwords that contain _at least_ two capital letters.
- A `getPeopleWithAtLeastThreeCities` method that returns an array of names of the people who have at least three cities. The array should be alphabetically sorted on the last name.
- A `getSouthernHemispherePeople` method that returns an array of id's of people who live or have lived in the southern hemisphere (latitude less than 0).

When the tests pass, running test.js will output "tests ok"; if any tests fail, you will see errors instead.
