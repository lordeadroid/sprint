const {describe, it} = require("node:test");
const {deepStrictEqual} = require("assert");

const {loadData} = require("../src/sprint.js");

describe("loadData", function() {
  it("should give all the data of the file", function() {
    deepStrictEqual(loadData(), [0, 1, 100, 9]);
  });
});
