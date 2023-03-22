'use strict';

// Task#1

let result = 0;
for (let i = 9; i < 20; i++) {
    result = result + (i + 1) + (i < 19 ? ", " : '');
}
console.log(result);

// Task#2

let result1 = 0;
for (let i = 9; i < 20; i++) {
    result1 = result1 + (i + 1) ** 2 + ' ';
}
console.log(result1);

// Task#3

let result2 = 0;
for (let i = 1; i <= 10; i++) {
    result2 = result2 + (i * 7) + ' ';
}
console.log(result2);

// Task#4

let result3 = 0;
for (let i = 1; i <= 15; i++) {
    result3 += i;
}
console.log(result3);

// Task#5

let result4 = 1;
for (let i = 15; i <= 35; i++) {
    result4 = result4 * i;
}
console.log(result4);

// Task#6

let result5 = 0;
for (let i = 1; i <= 500; i++) {
    result5 += i;
}
console.log(result5/500);

// Task#7

let result6 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) result6 += i;
}
console.log(result6);

// Task#8

let result7 = 0;
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) result7 = result7 + i + ' ';
}
console.log(result7);

// Task#9

let a = +prompt('Insert number', '');

let result8 = 0;
for (let i = 1; i < a; i++) {
    if (a % i === 0) result8 = result8 + i + ' ';
}
console.log(result8);

// Task#10

let result9 = 0;
for (let i = 1; i < a; i++) {
    if (a % i === 0 && i % 2 === 0) result9 = result9 + i + ' ';
}
console.log(result9);

// Task#11

let result10 = 0;
for (let i = 1; i < a; i++) {
    if (a % i === 0 && i % 2 === 0) result10 += i;
}
console.log(result10);

// Task#12

for (let j = 1; j <= 10; j++) {
    let result11 = 0;
    for (let i = 1; i <= 10; i++) {
        result11 = result11 + (i * j) + ' ';
    }
    console.log(result11);
}
