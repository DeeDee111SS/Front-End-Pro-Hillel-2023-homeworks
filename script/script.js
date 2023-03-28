'use strict';

const padString = (str, l, sym = '', par = true) => {
    if (typeof str !== 'string') throw new Error('First arg should be a string');
    if (typeof l !== 'number' || Number.isNaN(l) || !isFinite(l) ) {
        throw new Error('Second arg should be a number');
    }
    if (str.length === l) return str;
    if (str.length > l) return str.substring(0, l);

    if (typeof sym !== 'string' || sym.length !== 1) throw new Error ('Sym arg should be a string with 1 length');
    if (typeof par !== 'boolean') throw new Error('par arg should be a boolean');

    const symbols = sym.repeat(l - str.length);
    return par ? str + symbols : symbols + str;
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));


