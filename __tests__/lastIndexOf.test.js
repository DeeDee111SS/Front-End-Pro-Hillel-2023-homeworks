import lastIndexOf from "../src/lastIndexOf.js";

describe("lastIndexOf function", () => {
  it("should return correct last index", () => {
    const arr = [1, 2, 3, 4, 5, 3];
    expect(lastIndexOf(arr, 3)).toBe(5);
  });

  it("should return -1 for non-existing element", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(lastIndexOf(arr, 6)).toBe(-1);
  });

  it("should search from specified index", () => {
    const arr = [1, 2, 3, 4, 5, 3];
    expect(lastIndexOf(arr, 3, 2)).toBe(2);
  });
});