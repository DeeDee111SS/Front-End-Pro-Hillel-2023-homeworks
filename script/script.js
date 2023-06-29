'use strict';

void function () {    

    const goods = [
        ["футболка", 15],
        ["шорты", 25],
        ["носки", 5],
    ];

    function summary(goods) {
        const goodsMap = new Map();

        for (const [good, price] of goods) {
            goodsMap.set(good, price);
        }

        let summary = 0;
        
        for (const price of goodsMap.values()) {
            summary += price;
        }

        return summary;
    }

    console.log(summary(goods));
    
}();

