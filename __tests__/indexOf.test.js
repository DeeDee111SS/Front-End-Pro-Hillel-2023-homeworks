import indexOf from "../src/indexOf.js";

describe("indexOf function", () => {
  it("should return correct index", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(indexOf(arr, 3)).toBe(2);
  });

  it("should return -1 for non-existing element", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(indexOf(arr, 6)).toBe(-1);
  });

  it("should search from specified index", () => {
    const arr = [1, 2, 3, 4, 5, 3];
    expect(indexOf(arr, 3, 3)).toBe(5);
  });
});
