'use strict';
(function () {
    
    const numInRange = () => Math.floor(Math.random() * 100) + 1;
    const generateRandomNum = () => {
        const arrOfNums = [];
        const numGenenerator = () => {
            if (arrOfNums.length === 100) return NaN;
            const randomNum = numInRange();
            if (arrOfNums.includes(randomNum)) return numGenenerator();
            arrOfNums.push(randomNum);
            return randomNum;
        }        
        return numGenenerator;
    }
    const numGeneneratorInstance = generateRandomNum();
    alert(numGeneneratorInstance());

})();

