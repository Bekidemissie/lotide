const assert = require('chai').assert;
//const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


describe("#eqArrays", () => {
  it(" returns true [1, 2, 3], [1, 2, 3]); ", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

it("returns false for [1, 2, 3], [3, 2, 1])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
});


 //eqArrays([1, 2, 3], [1, 2, 3]); // => true
 //eqArrays([1, 2, 3], [3, 2, 1]); // => false
 //assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // pass