const {describe, it} = require("node:test");
const {deepStrictEqual} = require("assert");

const {loadData} = require("../src/sprint.js");

describe("loadData", function() {
  it("should give all the data of the file in object", function() {
    deepStrictEqual(loadData([0, 1, 100, 9]), {"0": 0, "1": 1, "2": 100, "3": 9});
  });
});
