

const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i ++) {
      if (sentence[i] === ' ') {
        continue;
      }
      if(results[sentence[i]]) {
        let oldArray = results[sentence[i]];
        results[sentence[i]] = [...oldArray, i];
      } else {
        results[sentence[i]] = [i];
      }
    }
    return results;
  };
  // this function to help to identfiy two value are equal or not 
  const eqArrays = function (arr1, arr2) {
    if(arr1.length != arr2.length){  // this if statement check the array length not equal
      return false;
    } 
    for(let i = 0; i < arr1.length; i++) {        // this for loop to check the all array value are equal
      if(arr1[i] !== arr2[i]) {
        return false;
      } 
    }
    return true;
  };
  
  const assertArraysEqual = function (arr1, arr2) {  // this function identify much or not
    if (eqArrays(arr1, arr2)) {
      console.log('match');
    } else {
      console.log('no match');
    }
  };
  
   //assertArraysEqual(letterPositions("hello").e, [1]);
  
  module.exports = letterPositions;