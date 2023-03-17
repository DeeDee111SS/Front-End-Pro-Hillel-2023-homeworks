'use strict';

// Task # 1

const x = 10;
const y = 7;
const msg = x > y ? 'x больше, чем y' : 'x не больше, чем y';
console.log(msg);

// Task # 2

const num = +prompt('Введите число', '');

if (num % 2 === 0) {
    alert('Число ' + num + ' четное');
} else {
    alert('Число ' + num + ' нечетное');
}

// Task # 3

const num1 = +prompt('Введите целое число', '');
const num1str = String(num1);

if (num1 > 0) {
    switch (num1str.length) {
        case 1:
            alert('Число ' + num1 + ' однозначное положительное');
            break;
        case 2:
            alert('Число ' + num1 + ' двузначное положительное');
            break;
        case 3:
            alert('Число ' + num1 + ' трехзначное положительное');
            break;
        default:
            alert('Число ' + num1 + ' многозначное положительное');
    }
} else if (num1 < 0) {
    switch (num1str.length) {
        case 2:
            alert('Число ' + num1 + ' однозначное отрицательное');
            break;
        case 3:
            alert('Число ' + num1 + ' двузначное отрицательное');
            break;
        case 4:
            alert('Число ' + num1 + ' трехзначное отрицательное');
            break;
        default:
            alert('Число ' + num1 + ' многозначное отрицательное');
    }
} else {
    alert('Число 0 - это ноль')
}

// Task # 4

const n1 = +prompt('Введите первое число', '');
const n2 = +prompt('Введите второе число', '');
const n3 = +prompt('Введите третье число', '');

if (n2 > n1 && n3 > n2) {
    alert('Число ' + n3 + ' является наибольшим');
} else if (n2 > n1 && n3 < n2) {
    alert('Число ' + n2 + ' является наибольшим');
} else {
    alert('Число ' + n1 + ' является наибольшим');
}

// Task # 5

const a = +prompt('Введите длину первой стороны', '');
const b = +prompt('Введите длину второй стороны', '');
const c = +prompt('Введите длину третьей стороны', '');

if (a === 0 || b === 0 || c === 0)  {
    alert('Это уже не треугольник, т.к. одна из сторон равна нулю');
} else if (a + b < c || a + c < b || b + c < a)  { 
    alert('Треугольник с такими длинами сторон не может существовать');
} else {
    alert('Треугольник с такими длинами сторон может существовать');
}