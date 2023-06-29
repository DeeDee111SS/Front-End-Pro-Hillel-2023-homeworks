'use strict';

void function () {

    const newString = "abracadabra";

    function uniqSymbolsCount(newString) {
        const uniqSymbols = new Set();

        for (const symbol of newString) {
            uniqSymbols.add(symbol);
        }

        return uniqSymbols.size;
    }

    console.log(uniqSymbolsCount(newString));

}();

