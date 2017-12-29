const data = require('../../data/MOCK_DATA.json');

/*
 * hasMultipleUppercase
 *
 * A function that checks to see if a string contains
 * more than two uppercase characters.
 * Should not match a string with only one uppercase.
 * Should match a string with multiple uppercase chars
 * together, or separate, e.g. `ABCdef` and `AbcDef`
 *
 * Returns either `null` or the matched set and index.
 */
function hasMultipleUppercase(str) {
    const regexp = /[A-Z].*[A-Z]/;

    return str.match(regexp);
}


/*
 * getPasswordsWithAtLeastTwoCapitalLetters
 *
 * A method that returns an array of passwords that contain
 * _at least_ two capital letters. >=2 (greater than or equal to 2)
 *
 */
const getPasswordsWithAtLeastTwoCapitalLetters = function() {
    const passwordsWithAtLeastTwoCapitalLetters = data.reduce((passwords, entry) => {
        if (hasMultipleUppercase(entry.password) !== null) {
            passwords.push(entry.password);
        }

        return passwords;
    }, []);

    return passwordsWithAtLeastTwoCapitalLetters;
};

getPasswordsWithAtLeastTwoCapitalLetters();


/*
 * getPeopleWithAtLeastThreeCities
 *
 * A method that returns an array *of names only* of the
 * people who have at least three cities.
 * The array should be alphabetically sorted on the last name.
 *
 */

const getPeopleWithAtLeastThreeCities = function() {
    const peopleWithAtLeastThreeCitiesObject = [];

    data.forEach((entry) => {
        const numCities = Object.keys(entry.cities).length;
        if (numCities >= 3) {
            peopleWithAtLeastThreeCitiesObject.push(entry);
        }
    });

    // take peopleWithAtLeastThreeCitiesObject array
    // and sort it (in place) alphabetically by last name
    peopleWithAtLeastThreeCitiesObject.sort((a, b) => {
        if (a.last.toLowerCase() < b.last.toLowerCase()) return -1;
        if (a.last.toLowerCase() > b.last.toLowerCase()) return 1;

        return 0;
    });

    // reduce peopleWithAtLeastThreeCitiesObject
    // start with new empty array which gets first+last as a string, no longer an object inside - but it's already sorted
    // var peopleWithAtLeastThreeCities = [ 'Elyse Holladay', 'Ashley Watkins'];
    const peopleWithAtLeastThreeCities = peopleWithAtLeastThreeCitiesObject.reduce((names, entry) => {
        names.push(`${entry.first } ${ entry.last}`);

        return names;
    }, []); // , []); is the initial value e.g. names = []; empty array

    return peopleWithAtLeastThreeCities;
};

getPeopleWithAtLeastThreeCities();


/*
 * getSouthernHemispherePeople
 *
 * method that returns an array of id's of people
 * who live or have lived in the southern hemisphere
 * (latitude less than 0).
 *
 */

const getSouthernHemispherePeople = function() {
    const southernHemispherePeople = [];

    data.forEach((entry) => {
        // if the current lat is less than 0
        if (entry.lat < 0) {
            // add the id of that entry to the new array
            southernHemispherePeople.push(entry.id);
        } else {
            // if it is NOT, filter out any entries whose cities object has a city with a lat greater than 0
            const southernHemisphereCitiesPerPerson = entry.cities.filter((city) => city.lat < 0);
            // if one of them is, add that id to the new array
            if (southernHemisphereCitiesPerPerson.length > 0) {
                southernHemispherePeople.push(entry.id);
            }
            // combine 105-107 to use Array.some()
            // const sHCpP = entry.cities.some()
        }
        // if it's not in either of those, do nothing
    });

    //console.log("number of entries with a latitude less than 0 is " + southernHemispherePeople.length); // should be 589

    return southernHemispherePeople;
};

getSouthernHemispherePeople();

module.exports = { getPasswordsWithAtLeastTwoCapitalLetters, getPeopleWithAtLeastThreeCities, getSouthernHemispherePeople };
