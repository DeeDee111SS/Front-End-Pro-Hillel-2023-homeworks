'use strict';

(function () {
    
    const sum = (() => {
        let total = 0;        
        return (num) => {
            total += num;
            return total;
        };        
    })();
    
    alert(sum(3));
    alert(sum(5));
    alert(sum(20));

})();






