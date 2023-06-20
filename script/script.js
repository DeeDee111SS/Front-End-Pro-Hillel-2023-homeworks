'use strict';

void function () {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    const customIterator = (arr) => {
        let index = 0;
  
        return {
            next() {
                if (index < arr.length) {
                    return { value: arr[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    };

    const myIterator = customIterator(arr);

    let result = myIterator.next();

    while (!result.done) {
        console.log(result.value);
        result = myIterator.next();
    };
    
}();


