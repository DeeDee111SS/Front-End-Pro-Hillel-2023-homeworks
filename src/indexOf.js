"use strict";

export default indexOf = (searchElement, fromIndex = 0) => {
  if (!fromIndex) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === searchElement) return i;
    }
    return -1;
  }
  for (let i = arr[fromIndex]; i < arr.length; i++) {
    if (arr[i] === searchElement) return i;
  }
  return -1;
};
