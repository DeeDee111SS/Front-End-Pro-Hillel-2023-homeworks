'use strict';

// Task#1

const arr1 = ['a', 'b', 'c', 'd'];
alert(`${arr1[0]}+${arr1[1]}, ${arr1[2]}+${arr1[3]}`)

// Task#2

const arr2 = [2, 5, 3, 9];
const result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3];
alert(result2);

// Task#3

const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
alert(arr3[1][0]);

// Task#4

const obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
alert(obj.js[0]);


// Task#5

const arr4 = [];
for (let i = 0; i < 20; i++) {
    arr4[i] = 'x'.repeat(i+1);
}

// Task#6

const arr5 = [];
for (let i = 0; i < 20; i++) {
    arr5[i] = `${i+1}`.repeat(i+1);
}

// Task#7

const arr6 = [];
const arrayFill = (item, index) => {
    for (let i = 0; i < index; i++) {
        arr6[i] = item;
    }
};
arrayFill('x', 5);

// Task#8

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8];
const f1 = () => {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr7.length; i++) {
        sum += arr7[i];
        count++;
  
        if (sum > 10) {
            break;
        }
        
    }
    return count;
}
f1();

// Task#9

const arr8 = [1, 2, 3, 4, 5, 6, 7, 8];
const f2 = () => {
    for (let i = 0; i < arr8.length; i++) {
        arr8.unshift(arr8.splice(i, 1))
    }
}
f2();

// Task#10 

const arr10 = [[1, 2, 3], [4, 5], [6]];
let result10 = 0;
for (let key in arr10) {
    for (let item in arr10[key]) {
        result10 += arr10[key][item];
    }
}
alert(result10);

// Task#11

const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const arrSum = () => arr11.flat(Infinity).reduce((sum, current) => sum + current, 0);
alert(arrSum());
