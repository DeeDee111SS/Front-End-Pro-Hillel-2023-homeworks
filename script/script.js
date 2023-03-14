'use strict';

// Задание 1

const a1 = +prompt('Введите число');
const msg1 = a1 === 0 ? 'Верно' : 'Неверно';
alert(msg1);

// Задание 2

const a2 = +prompt('Введите число');
const msg2 = a2 > 0 ? 'Верно' : 'Неверно';
alert(msg2);

// Задание 3

const a3 = +prompt('Введите число');
const msg3 = a3 < 0 ? 'Верно' : 'Неверно';
alert(msg3);

// Задание 4

const a4 = +prompt('Введите число');
const msg4 = a4 >= 0 ? 'Верно' : 'Неверно';
alert(msg4);

// Задание 5

const a5 = +prompt('Введите число');
const msg5 = a5 <= 0 ? 'Верно' : 'Неверно';
alert(msg5);

// Задание 6

const a6 = +prompt('Введите число');
const msg6 = a6 !== 0 ? 'Верно' : 'Неверно';
alert(msg6);

// Задание 7

const a7 = prompt('Введите строку');
const msg7 = a7 === 'test' ? 'Верно' : 'Неверно';
alert(msg7);

// Задание 8

const a8 = +prompt('Введите число');
const msg8 = a8 === 1 ? 'Верно' : 'Неверно';
alert(msg8);

// Задание 9

const a9 = +prompt('Введите число');
const msg9 = a9 > 0 && a9 < 5 ? 'Верно' : 'Неверно';
alert(msg9);

// // or ->
// const a9 = +prompt('Введите число');
// if(a9 > 0 && a9 < 5) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }

// Задание 10

const a10 = +prompt('Введите число');
switch (a10) {
    case 0:        
    case 2:
        alert(a10 + 7);
        break;    
    default:
        alert(a10 / 10);
}

// Задание 11

const a11 = +prompt('Введите первое число');
const b11 = +prompt('Введите второе число');

if (a11 <= 1 && b11 >= 3) {
    alert(a11 + b11);
} else {
    alert(a11 - b11);
}

// Задание 12

const a12 = +prompt('Введите первое число');
const b12 = +prompt('Введите второе число');

if ((a12 > 2 && a12 < 11) || b12 >= 6 && b12 < 14) {
    alert('Верно');
} else {
    alert('Неверно');
}

// Задание 13

const num = +prompt('Введите целое число от 1 до 4');
let result = '';

switch (num) {
    case 1:
        result = 'зима';
        break;  
    case 2:
        result = 'весна';
        break;  
    case 3:
        result = 'лето';
        break;  
    case 4:
        result = 'осень';
        break;   
}

// // or ->

// switch (num) {
//     case 1:
//         result = 'зима';
//         alert(result);
//         break;  
//     case 2:
//         result = 'весна';
//         alert(result);
//         break;  
//     case 3:
//         result = 'лето';
//         alert(result);
//         break;  
//     case 4:
//         result = 'осень';
//         alert(result);
//         break;    
//     default:
//         alert('Необходимо ввести целое число от 1 до 4');
// }
