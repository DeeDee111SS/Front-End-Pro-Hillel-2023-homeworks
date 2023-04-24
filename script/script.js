'use strict';
(function () {
    
    let calculator = {
        read: function () {
            this.a = +prompt('Enter the number', '')
            this.b = +prompt('Enter the number', '') 
        },
        sum: function () {
            return this.a + this.b
        },
        mul: function () {
            return this.a * this.b
        },
    };

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
    
})();

