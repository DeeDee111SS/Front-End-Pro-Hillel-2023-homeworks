'use strict';

const volume = 48;
const weight = 0.075;
const price = 13;
const numOfPotPerLit = 4;

const weirdChef = (volume, weight, price, numOfPotPerLit) => {
    let potPrice = weight*numOfPotPerLit*volume*price;
    return 'need ' + Math.ceil(potPrice) + ' ₴ of cash';
}

console.log(weirdChef(volume, weight, price, numOfPotPerLit));