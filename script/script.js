'use strict';

// Задание 1

const year = +prompt('In what year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//     alert( 'Это слишком рано...' );
// } else if (year > 2015 && year < 2020) {
//     alert( 'Это поздновато' );
// } else if (year > 2020) {
//     alert( 'нет не правильно - чуть меньше' );
// }  else if(isNaN(year)) {
//     alert('Пшел вон!')
// } else {
//     alert( 'Верно!' );
// } ->

if (year < 2015 || (year > 2015 && year < 2020) || year >= 2020 || Number.isNaN(year)) {
    alert('Wrong:(');
} else {
    alert('Right!');
}

// or better will be ->
// if (year === 2015) {
//     alert ('Right!');
// } else {
//     alert ('Wrong:(');
// }

// Задание 2

const numOrStr = prompt('Input number or string');
console.log(numOrStr)

// if(numOrStr === null) {
//     console.log('вы отменили')
// } else if( numOrStr.trim() === '' ) { // numOrStr.trim() - ?
//     console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

switch (true) {
    case (numOrStr === null):
        console.log('You canceled')
        break;
    case (numOrStr === ''):
        console.log('Empty String');
        break;
    case Number.isNaN(+numOrStr):
        console.log('Number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}


