'use strict';

const number = +prompt("Введите число:");
if (number < 1 || isNaN(number)) console.log("NaN");
if (number === 1) console.log("Это единица");

let divisor = 2;
while (divisor <= number) {
    if (number === divisor) {
        console.log(`Число ${number} - простое`);
        break;
    }
    if (number % divisor === 0) {
        console.log(`Наименьший делитель числа ${number} - число ${divisor}`);
        break;
    }    
    divisor++;
}