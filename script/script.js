'use strict';

function padString(str, l, sym = '', par = true) {
    if (!str) return 'some error in arg "string"';
    if (!l) return 'some error in arg "length"';
    if (str.length === +l) return str;
    if (str.length > +l) return str.substr(0, +l);
    if (sym === '') return 'need some symbol in arg "symbol"';
    if (par === true) {
        let newStr = str;
        for (let i = 0; i < l - str.length; i++) {
            newStr = newStr + sym;
        }
        return newStr;
    } else if (par === false) {
        let newStr = str;
        for (let i = 0; i < l - str.length; i++) {
            newStr = sym + newStr;
        }
        return newStr;
    } else {
        return 'some error in arg "parameter"';
    }
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));

