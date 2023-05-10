'use strict';

void function () {
    
    const createTable = () => {
        const table = document.createElement('table');
        table.classList.add('table');

        for (let i = 0; i < 10; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('td');
                const num = i * 10 + j + 1;
                cell.textContent = num;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }        
        document.body.prepend(table);        
    }
    createTable();

}();
