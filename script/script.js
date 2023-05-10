'use strict';

void function () {

    const array = [1, 2, [1.1, 1.2, ['a', 'b', 'c'], 1.3], 3];

    const generateList = (array) => {
        const ul = document.createElement('ul');

        array.map((item) => {
            const li = document.createElement('li');

            if (Array.isArray(item)) {
                li.appendChild(generateList(item));
            } else {
                li.textContent = item;
            }
            
            ul.appendChild(li);
        });
        return ul;
    }

    document.querySelector('body').appendChild(generateList(array));
    
}();