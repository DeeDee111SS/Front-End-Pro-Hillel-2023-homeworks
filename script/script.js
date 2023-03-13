// Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не равны - false.

function ifEqual(a, b) {
    return a === b;
}
console.log(ifEqual(1, 1));
console.log(ifEqual(1, 2));

// Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

function moreThanTen(c, d) {
    return c + d > 10;
}
console.log(moreThanTen(6, 5));
console.log(moreThanTen(5, 5));

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.

function ifNegative(e) {
    return e < 0;
}
console.log(ifNegative(-1));
console.log(ifNegative(1));