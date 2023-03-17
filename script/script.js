'use strict';

const x = 4;
const y = 5;
const r = 10;
const z = Math.sqrt(x ** 2 + y ** 2);
const msg = z <= r ? 'Данная точка лежит внутри окружности' : 'Данная точка лежит за пределами окружности';
alert(msg);
