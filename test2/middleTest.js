
const assert = require('chai').assert;
const middle = require('../middle');
module.exports = middle;

describe("# middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
        assert.deepEqual( middle([1, 2, 3, 4,5]) , [  3 ])
    });
  });