# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jilliankmartin/lotide`

**Require it:**

`const _ = require('@jilliankmartin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: A function that returns the first element in an array.
* `tail`: A function that returns the last element in an array.
* `middle`: A function that returns the middle element in an array.
* `assertArraysEqual`: A function that compares the two arrays and prints out a message telling you if they match or not.
* `assertEqual`: A function that compares the two values it takes in and prints out a message telling you if they match or not.
* `assertObjectsEqual`: A function that compares the two objects and prints out a message telling you if they match or not.
* `countLetters`: A function that takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
* `countOnly`: A function that takes in a collection of items and returns counts for a specific subset of those items.
* `eqArrays`: A function that takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: A function that takes in two objects and returns true or false, based on a perfect match.
* `findKey`: Scans an object and returns the first key where a particular value appears.
* `findKeyByValue`: When given an object and a value, this function scans the object and returns the first key which contains the given value
* `flatten`: description
* `letterPositions`: When given a string, this function which will return all the indices in the string where the character is found.
* `map`: Receives an array and a callback function, and will perform said callback on the array, and return a new array populated only with items where the callback evaluated to true.
* `takeUntil`: When given an array and a callback function, this function will perform the callback function on the array and return the modified array
* `without`: When given an array and an item we want removed from that array, this function returns the original array, minus the item we wanted removed.
