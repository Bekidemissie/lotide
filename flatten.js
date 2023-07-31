

const flatten = function(array) {
  
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (let x = 0; x < array[i].length; x++) {
          newArray.push(array[i][x]);
    
        }
        
      } else {
        newArray.push(array[i]);
      } }
       console.log(newArray);
    
    return newArray;
    
  };
  flatten([1, 2, [3, 4], 5, [6]]);
  
  module.exports = flatten;