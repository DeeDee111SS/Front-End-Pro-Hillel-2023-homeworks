'use strict';

void function () {
    
    const counter = (() => {
        let privateCounter = 0;
        let increaseCount = 0;
        let decreaseCount = 0;
        let valueCount = 0;

        const changeBy = (val) => {
            privateCounter += val;
        }

        return {
            increase: () => {
                changeBy(1);
                increaseCount++;
            },
            decrease: () => {
                changeBy(-1);
                decreaseCount++;
            },
            value: () => {
                valueCount++;
                return privateCounter;
            },
            getStatistic: () => {
                return {
                    increase: increaseCount,
                    decrease: decreaseCount,
                    value: valueCount
                };
            },
            reset: () => {
                return privateCounter = 0;
            }
        };
    })();
    
}();



