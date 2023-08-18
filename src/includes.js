"use strict";

export default includes = (searchElement, fromIndex = 0) => {
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === searchElement) return true;
  }
  return false;
};