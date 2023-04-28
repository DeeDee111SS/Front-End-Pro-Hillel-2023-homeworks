'use strict';

void function () {
    
    const arr = Array.from(document.body.children[0].childNodes);
    let numOfEl = 0;
    const liText = [];
    
    for (let li of arr) {
        if (li.nodeName === 'LI') {
            console.log(li);
            liText.push(li.innerHTML);
            numOfEl++;
        }
    }

    console.log(numOfEl);
    console.log(liText);
        
}();
