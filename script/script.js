'use strict';

(function () {
    
    const ladder = {
        step: 0,
        up: function() {
            this.step++;
            return this;
        },
        down: function() {
            this.step--;
            return this;
        },
        showStep: function() { 
            alert(this.step);
            return this.step;
        }
    };

    ladder.up().up().down().showStep(); 
    
})();

