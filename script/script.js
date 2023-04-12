'use strict';

// Task#1

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const positAndSum = () => {
    const arrTemp = [];
    for (let key in arr) {
        if (arr[key] > 0) arrTemp.push(arr[key]);
    };
    const arrSum = arrTemp.reduce((sum, current) => sum + current, 0);
    return ` sum = ${arrSum} \n number = ${arrTemp.length}`;
}

// Task#2

const minEl = () => {
    let temp = 0;
    let index = 0;
    for (let key in arr) {
        if (arr[key] < temp) {
            temp = arr[key];
            index = key;
        }
    }
    return `${temp}, ${index}`;
}

// Task#3

const maxEl = () => {
    let temp = 0;
    let index = 0;
    for (let key in arr) {
        if (arr[key] > temp) {
            temp = arr[key];
            index = key;
        }
    }
    return `${temp}, ${index}`;
}

// Task#4

const negatNum = () => {
    const arrTemp = [];
    for (let key in arr) {
        if (arr[key] < 0) arrTemp.push(arr[key]);
    };
    return arrTemp.length;
}

// Task#5

const oddPositNum = () => {
    const arrTemp = [];
    for (let key in arr) {
        if (arr[key] > 0 && arr[key] % 2 !== 0) arrTemp.push(arr[key]);
    };
    return arrTemp.length;
}

// Task#6

const evenPositNum = () => {
    const arrTemp = [];
    for (let key in arr) {
        if (arr[key] > 0 && arr[key] % 2 === 0) arrTemp.push(arr[key]);
    };
    return arrTemp.length;
}

// Task#7

const evenPositSum = () => {
    const arrTemp = [];
    for (let key in arr) {
        if (arr[key] > 0 && arr[key] % 2 === 0) arrTemp.push(arr[key]);
    };
    const arrSum = arrTemp.reduce((sum, current) => sum + current, 0);
    return arrSum;
}

// Task#8

const oddPositSum = () => {
    const arrTemp = [];
    for (let el of arr) {
        if (el > 0 && el % 2 !== 0) arrTemp.push(el);
    };
    const arrSum = arrTemp.reduce((sum, current) => sum + current, 0);
    return arrSum;
}

// Task#9

const positMult = () => {
    const arrTemp = [];
    for (let el of arr) {
        if (el > 0) arrTemp.push(el);
    };
    const arrSum = arrTemp.reduce((sum, current) => sum * current, 1);
    return arrSum;
}

// Task#10

const maxOnly = () => {
    let temp = 0;
    for (let el of arr) {
        if (el > temp) temp = el;           
    }
    const maxOnlyArr = arr.map((el) => el === temp ? el : 0);    
    return maxOnlyArr;
}
