
const assertEqual = require('./assertEqual');
const countLetters = function (str) {
  let finalResult = {};
  for (let letters of str){
    if(letters === ' ') {
      continue;
    } 
    if(finalResult[letters]) {
      finalResult[letters] += 1;
    } else {
      finalResult[letters] = 1;
    }
  }
  console.log(finalResult);
  return finalResult;
};  


console.log(assertEqual(countLetters("lighthouse in the house")["l"], 1));
console.log(assertEqual(countLetters("lighthouse in the house")["o"], 2));



module.exports = countLetters;