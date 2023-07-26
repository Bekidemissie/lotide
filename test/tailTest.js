const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
    it("returns 2,3 for [1, 2, 3]", () => {
      assert.strictEqual(tail([1, 2, 3], [2,3]));
    });
});

describe("#tail", () => {
    it("returns Lighthouse , Labs for [Hello , Lighthouse, Labs]", () => {
        assert.strictEqual( tail(["Hello", "Lighthouse", "Labs"] , ["Lighthouse", "Labs"]))
    });
});