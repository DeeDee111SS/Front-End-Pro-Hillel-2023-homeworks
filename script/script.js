'use strict';
(function () {
    
    let calculator = {
        read: function () {
            this.a = +prompt('Enter the number', '');
            this.b = +prompt('Enter the number', '');
            if (isNaN(this.a) || this.a === 0) throw new Error('Invalid data');
            if (isNaN(this.b) || this.b === 0) throw new Error('Invalid data');
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

