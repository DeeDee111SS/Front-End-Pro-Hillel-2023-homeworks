'use strict';

// Task#1

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const positAndSum = (arr) => {
    const positSum = arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
    const positCount = arr.reduce((count, num) => num > 0 ? count + 1 : count, 0);
    return ` sum = ${positSum} \n number = ${positCount}`;
}

// Task#2

const minElNum = (arr) => {
    const minEl = arr.reduce((min, num) => num < min ? num : min, 0);
    const minElIndex = arr.indexOf(minEl);
    return `${minEl}, ${minElIndex}`;
}

// Task#3

const maxElNum = (arr) => {
    const maxEl = arr.reduce((max, num) => num > max ? num : max, 0);
    const maxElIndex = arr.indexOf(maxEl);
    return `${maxEl}, ${maxElIndex}`;
} 

// Task#4

const negatNum = (arr) => {
    const arrNegat = arr.filter((el) => el < 0);
    return arrNegat.length;
}

// Task#5

const oddPositNum = (arr) => {
    const arrOddPosit = arr.filter((el) => el > 0 && el % 2 !== 0);
    return arrOddPosit.length;
}

// Task#6

const evenPositNum = (arr) => {
    const arrEvenPosit = arr.filter((el) => el > 0 && el % 2 === 0);
    return arrEvenPosit.length;
}

// Task#7

const evenPositSum = (arr) => {
    const arrSum = arr.reduce((sum, el) => {
        if (el > 0 && el % 2 === 0) return sum + el;
        return sum;
    }, 0);
    return arrSum;
}

// Task#8

const oddPositSum = (arr) => {
    const arrSum = arr.reduce((sum, el) => {
        if (el > 0 && el % 2 !== 0) return sum + el;
        return sum;
    }, 0);
    return arrSum;
}

// Task#9

const positMult = (arr) => {
    const arrMult = arr.reduce((mult, el) => el > 0 ? mult * el : mult, 1);
    return arrMult;
}

// Task#10

const maxOnly = (arr) => {
    const maxEl = arr.reduce((max, num) => num > max ? num : max, 0);
    const maxOnlyArr = arr.map((el) => el === maxEl ? el : 0);    
    return maxOnlyArr;
}