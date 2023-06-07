/* Implement without which will return a subset of a given array, removing unwanted elements.
This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
*/

const without = fuction(array, itemsToRemove)
{
    let newarray = [];
    for (let i = 0; i < array.length; i++) {
        // iterate the first array 
        for (let j = 0; j < itemsToRemove.length; j++) {
          //
           
          if (array[i] === itemsToRemove[j]) {
            break;
          }
          if (itemsToRemove.length - 1 === j) {
            newArray.push(array[i]);
           
          }
        }
      }
      return newArray;
    };
  const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
    module.exports = without;

