'use strict';

void function () {
    
    const arr = Array.from(document.body.children[0].childNodes);
    for (let li of arr) {
        if (li.nodeName === 'LI') {
            console.log(li);
        }
    }

    const attrValue = [];
    const attrName = [];    
    const attributes =  Array.from(document.querySelector('ul').attributes);
    for (let el of attributes) { 
        attrValue.push(el.value);
        attrName.push(el.name);
    }
    console.log(attrValue);
    console.log(attrName);

    document.querySelector('ul li:last-child').innerHTML = 'Привет меня зовут Dima';
    document.querySelector('ul li:first-child').setAttribute('data-my-name', 'Dima');
    document.querySelector('ul').removeAttribute('data-dog-tail');
        
}();
