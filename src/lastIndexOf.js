"use strict";

export default lastIndexOf = (searchElement, fromIndex) => {
  if (!fromIndex) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === searchElement) return i;
    }
    return -1;
  }
  for (let i = arr.length - 1; i >= arr[fromIndex]; i--) {
    if (arr[i] === searchElement) return i;
  }
  return -1;
};