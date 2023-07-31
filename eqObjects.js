const assertEqual = require('./assertEqual');
const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
     console.log("start of loop", array1[i]);
      if (array1[i] !== array2[i]) {
   console.log("non match found", array1[i], array2[i]);
        return false;
      }
    }
    return true;
  };
  
  const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
         console.log("reached");
        // console.log(object1[key]);
        // console.log(object2[key]);
        if (eqArrays(object1[key], object2[key]) === false) {
          // console.log(object1[key]);
          // console.log(object2[key]);
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };

  assertEqual(eqObjects(ab, ba), true);
  eqObjects(ab, ba);
  module.exports = eqObjects;