'use strict';

const mainFunction = (callback) => {
    const num1 = +prompt('Enter the first number', '');
    const num2 = +prompt('Enter the second number', '');

    if (typeof num1 !== 'number') throw new Error('num1 should be a number');
    if (typeof num2 !== 'number') throw new Error('num2 should be a number');
    
    return Number(callback(num1, num2));
}

const callbackExponentiation = (a, b) => {
    const result = a ** b;
    alert(result);
}

const callbackMultiplication = (a, b) => {
    const result = a * b;
    alert(result);
}

const callbackDivision = (a, b) => {
    const result = a / b;
    alert(result);
}

const callbackModulo = (a, b) => {
    const result = a / b;
    alert(result);
}

mainFunction(callbackExponentiation);