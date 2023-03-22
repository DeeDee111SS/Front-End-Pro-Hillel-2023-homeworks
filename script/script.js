'use strict';

const fib = (n = 1) => {
    let prev = 0;
    let next = 1;
    for(let i = 0; i < n; i++){
        let temp = next;
        next = prev + next;
        prev = temp;
    }
    return prev;
}

const a = +prompt('Enter the number', '');
alert(fib(a));