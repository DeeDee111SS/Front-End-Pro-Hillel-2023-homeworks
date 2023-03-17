'use strict';

const a = prompt('Сколько Вам лет?', '');
const b = +a.substring(a.length - 1);
const c = +a.substring(a.length - 2);

if (isNaN(a)) {
    alert(`${a} - странное число, попробуйте еще раз)`);
} else if (b === 1 && c !== 11) {
    alert(`${a} год - замечательный возраст)`);
} else if (c > 10 && c < 15) {
    alert(`${a} лет - замечательный возраст)`);
} else if (b === 2 || b === 3 || b === 4) {
    alert(`${a} года - замечательный возраст)`);
} else {
    alert(`${a} лет - замечательный возраст)`);
}

