'use strict';

let a = +prompt('Enter number', '');
let temp = 0;

for (let i = 1; i < a; i++) {
    if (a % i === 0) temp = temp + i + ' ';
    if (temp !== '1 ') break;        
}

const result = temp !== '1 ' || a === 1 ? false : true; 
console.log(result);

