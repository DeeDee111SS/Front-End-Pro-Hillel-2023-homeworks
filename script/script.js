//          Task# 1

Boolean(Number('10')) + 1; // returns number '2'
'sub ' + Number(false); // returns string 'sub 0'
16 * '      91    '; // returns number '1456'
true - 70; // returns number '-69'
Number(1 + String(1)) + 1; // returns number '12'

console.log((Boolean(Number('10')) + 1), typeof (Boolean(Number('10')) + 1));
console.log(('sub ' + Number(false)), typeof ('sub ' + Number(false)));
console.log((16 * '      91    '), typeof (16 * '      91    '));
console.log((true - 70), typeof (true - 70));
console.log((Number(1 + String(1)) + 1), typeof (Number(1 + String(1)) + 1));

//           Task# 2

const a = prompt('Enter number of hours') * 3600;
alert(a);

// or prettier ->
// const a = prompt('Enter number of hours');
// const b = a * 3600;
// alert(`There are ${b} seconds in ${a} hours`);

//           Task# 3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);
