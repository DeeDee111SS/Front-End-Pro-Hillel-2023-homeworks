'use strict';

void function () {

    class Hamburger {
        size = null;
        stuffing = null;
        toppings = null;

        static SIZE_SMALL = {
            cost: 50,
            cal: 20,
        };
        static SIZE_BIG = {
            cost: 100,
            cal: 40,
        };
        static STUFFING_CHEESE = {
            cost: 10,
            cal: 20,
        };
        static STUFFING_SALAD = {
            cost: 20,
            cal: 5,
        };
        static STUFFING_POTATO = {
            cost: 15,
            cal: 10,
        };
        static TOPPING_MAYO = {
            cost: 15,
            cal: 0,
        };
        static TOPPING_SAUCE = {
            cost: 20,
            cal: 5,
        };

        constructor(size, stuffing) {
            this.size = size;
            this.stuffing = stuffing;
            this.toppings = [];
        }

        addTopping(topping) {
            this.toppings.push(topping);
        }

        calculateCal() {
            let totalCalories = this.size.cal + this.stuffing.cal;
            this.toppings.forEach((topping) => {
                totalCalories += topping.cal;
            });
            return totalCalories;
        }

        calculatePrice() {
            let totalPrice = this.size.cost + this.stuffing.cost;
            this.toppings.forEach((topping) => {
                totalPrice += topping.cost;
            });
            return totalPrice;
        }
    }

    const hamburger = new Hamburger(
        Hamburger.SIZE_SMALL,
        Hamburger.STUFFING_CHEESE
    );
    
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
    console.log("Calories: " + hamburger.calculateCal() + " cal");
    console.log("Price: " + hamburger.calculatePrice() + " tugriks");
    hamburger.addTopping(Hamburger.TOPPING_SAUCE);
    console.log("Price with sauce: " + hamburger.calculatePrice() + " tugriks");
    
}();

