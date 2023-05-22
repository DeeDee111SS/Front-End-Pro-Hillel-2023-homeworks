'use strict';

void function () {
    
    const form = document.querySelector('#form');
    const inputs = form.querySelectorAll('input, textarea, select');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        event.stopPropagation();
        
        const data = {};
        inputs.forEach(({ name, value }) => data[name] = value);

        console.log(data); 
    });
    
}();

