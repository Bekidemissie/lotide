# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bekidemissie/lotide`

**Require it:**

`const _ = require('@/bekidemissie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([])`: Returns the first item in an array; undefined if the array is empty
* `function2(tail:)`: Returns everything but the first item in an array; returns an empty array if provided array is empty.
* `function4(middle:)`: Returns the middle-most element(s) of a given array; for arrays with one or two elements, return an empty array.
* `function5(without:)`: Returns a subset of a given array, removing unwanted elements
* `function6(flatten:)` : Returns a flattened version of the inputted array.
* `function8(countOnly:)`: Returns counts for a specific subset of inputted items; limited to strings.
* `function9(countLetters:)`: Returns counts for the given characters of a inputted string.
* `function10(letterPositions:)`: Returns all the indicies (zero-based positions) in the string where each character is found.
* `function11(findKeyByValue:)` : Returns the first key containing the value of the inputted object and value. If no key with the given value is found, return undefined.
* `function12(map:)`  Returns a new array based on a map function which takes in two arguements: An array to map, and a callback function.
* `function13(takeUntil:)` : Returns a truthy value based on a given array and callback which are passed as parameters of the takeUntil function.
* `function14(findKey)`:Returns a truthy value based on a given object and callback which are passed as parameters of the findKey function. If no key is found, return undefined.



