'use strict';

(function () {
    
    //Task #1

    const getFactorial = (num) => {
        if (num === 0) return 1;        
        return num * getFactorial(num - 1);       
    }
    
    //Task #2

    const pow = (num, degree) => {
        if (degree === 0) return 1;
        return num * pow(num, degree - 1);
    }

    //Task #3

    const recurSum = (a, b) => {
        if (b === 0) return a;
        return recurSum(++a, --b);
    }
    
})();
