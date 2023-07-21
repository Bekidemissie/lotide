
const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };
  
  
  
  const findKeyByValue = function(obj, value) {
    for (const key in obj) {
      if (obj[key] === value)
        return key;
    }
  };
  
  console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"))
  
  
  
  module.exports = findKeyByValue;