const middle = function(array) {
   
   let newArray = [];
    
    if (array.length === 1 || array.length === 2) {
      return newArray;
    } else if (array.length % 2 === 0) {
     let evenArr = (array.length - 1) / 2;
    
      let intDown = Math.floor(evenArr);
      let intUp = Math.ceil(evenArr);
    //console.log(intDown);
     // console.log(intUp);
      // console.log(`The indexes are ${intDown} and ${intUp}`);
      //console.log(`The elements are ${array[intDown]} and ${array[intUp]}`);
      newArray.push(array[intDown]);
      newArray.push(array[intUp]);
      return newArray;
    } else {
      let oddArr = (array.length - 1) / 2;
      // console.log("Index is ", oddArr);
      // console.log("Element is :", array[oddArr]);
      newArray.push(array[oddArr]);
      return newArray;
    }
  };
  
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
  module.exports = middle;