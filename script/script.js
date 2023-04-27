'use strict';

void function () { 

    const getPalindrome = (num, steps = 0) => {
        let reversedNum = num.toString().split('').reverse().join('');
        if (num === Number(reversedNum)) {
            return {
                result: reversedNum,
                steps: steps
            }
        } else {
            return getPalindrome(Number(num) + Number(reversedNum), steps + 1);        
        }
    }
    
}();


