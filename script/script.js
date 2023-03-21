'use strict';

const num = +prompt('Введите число', '');
const pow = +prompt('Введите степень', '');

function toThePower(num, pow = 1) {    
    if (isNaN(num) || isNaN(pow)) return 'some error';
    return (num ** pow);
}

const result = toThePower(num, pow);
alert(result);
