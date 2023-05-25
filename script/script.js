'use strict';

void function () {

    const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    const todoItemsContainer = document.getElementById('todoItems');
    const todoForm = document.getElementById('todoForm');

    const setTodoItems = () => localStorage.setItem('todoItems', JSON.stringify(todoItems));    

    const addTodoItem = (title, description) => {
        const newItem = {
            title,
            description
        };
        todoItems.push(newItem);
        setTodoItems();
    };

    const deleteTodoItem = (index) => {
        if (index >= 0 && index < todoItems.length) {
            todoItems.splice(index, 1);
            setTodoItems();
        }
    };

    const displayTodoItems = () => {
        todoItemsContainer.innerHTML = '';

        for (let i = 0; i < todoItems.length; i++) { 
            const todoItem = todoItems[i];
            const itemCard = document.createElement('div');

            itemCard.classList.add('col-4');
            itemCard.innerHTML = `<div class="taskWrapper">                                 
                                    <div class="taskHeading">${todoItem.title}</div>
                                    <div class="taskDescription">${todoItem.description}</p>
                                    <button class="btn btn-danger delete-button btn-sm" data-index="${i}">
                                        <i class="bi bi-trash"></i>
                                        <span>Remove</span>
                                    </button>
                                </div>`;
            todoItemsContainer.appendChild(itemCard);
        }
    };

    const handleContainerClick = (event) => {
        event.stopPropagation();

        const deleteButton = event.target.closest('.delete-button');
        if (deleteButton) {
            const index = deleteButton.getAttribute('data-index');
            deleteTodoItem(index);
            displayTodoItems();
        }
    };

    todoItemsContainer.addEventListener('click', handleContainerClick); 
    
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const title = document.querySelector('input[name="title"]').value;
        const description = document.querySelector('textarea[name="description"]').value;

        addTodoItem(title, description);        
        displayTodoItems();

        todoForm.reset();
    });

    displayTodoItems();
}();