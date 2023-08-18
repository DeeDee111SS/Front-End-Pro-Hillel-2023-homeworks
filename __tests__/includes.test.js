import includes from "../src/includes.js";

const arr = [1, 2, 3, 4, 5];

describe("includes function", () => {
  it("should return true if element exists", () => {    
    expect(includes(arr, 3)).toBe(true);
  });

  it("should return false if element does not exist", () => {    
    expect(includes(arr, 6)).toBe(false);
  });
});
