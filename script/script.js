'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


const indexOf = (searchElement, fromIndex = 0) => {
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
}

const lastIndexOf = (searchElement, fromIndex) => {
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
}

const find = (callback) => {
    for (let i = 0; i < arr.length; i++) { 
        if (callback(arr[i], i, arr)) return arr[i];
    }
    return undefined;
}

const findIndex = (callback) => { 
    for (let i = 0; i < arr.length; i++) { 
        if (callback(arr[i], i, arr)) return i;
    }
    return -1;
}

const includes = (searchElement, fromIndex = 0) => {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) return true;        
    }
  return false;
}

const every = (callback) => { 
    for (let i = 0; i < arr.length; i++) { 
        if (!callback(arr[i], i, arr)) return false;
    }
    return true;
}

const some = (callback) => { 
    for (let i = 0; i < arr.length; i++) { 
        if (callback(arr[i], i, arr)) return true;
    }
    return false;
}
