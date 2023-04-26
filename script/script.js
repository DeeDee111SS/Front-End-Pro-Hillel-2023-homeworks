'use strict';

(function () {

    const arrX = [[[1, 2], [3, 4]], [[5, 6], [7, [7, [7, [7, [7, [7]]]], 8]]]];
    const flat = (...args) => {
        if (args.length > 1) throw new Error('Function accepts only 1 argument, too much arguments provided');
        const [arr] = args;
        const result = [];

        const flatter = (arr) => {
            for (let el of arr) {
                if (Array.isArray(el)) {
                    flatter(el);
                } else {
                    result.push(el);
                }
            }
        }
        flatter(arr);
        return result;
    }
    flat(arrX);
    
})();
