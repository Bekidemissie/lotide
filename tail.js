
const tail = function (arr) {
  let newarray = [];

  for (let i = 1; i < arr.length; i++) {
    newarray.push(arr[i])

  }
  console.log(newarray);
  return newarray;
  

};
const result = tail(["Hello", "Lighthouse", "Labs"]);
module.exports = tail;

//console.log(result);