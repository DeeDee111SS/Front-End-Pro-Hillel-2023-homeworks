import some from "../src/some.js";

describe("some function", () => {
  it("should return true if any element passes the test", () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (element) => element > 3;
    expect(some(arr, callback)).toBe(true);
  });

  it("should return false if no element passes the test", () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (element) => element > 5;
    expect(some(arr, callback)).toBe(false);
  });
});
