/*  MAy 15 2022 
Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
create the function that takes in two arrays and returns true or false, based on a perfect match */

const eqArrays = function(arr1, arr2) {
    if (arr2.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  module.exports = eqArrays;
 eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));