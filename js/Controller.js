'use strict';

const Controller = {
    form: null,
    todoContainer: null,

    initListeners() {
        this.form.addEventListener('submit', this.formHandler.bind(this));
        window.addEventListener('DOMContentLoaded', this.prerenderTodos.bind(this));
        this.todoContainer.addEventListener('click', this.removeHandler.bind(this));
    },

    formHandler(event) {
        event.preventDefault();
        event.stopPropagation();

        const data = {};
        this.form.querySelectorAll('input, textarea, select').forEach(({ name, value }) => {
            data[name] = value;
        })
        const savedTodoItem = Model.postData(data);
        View.renderItem(savedTodoItem);
        this.form.reset();
    },

    prerenderTodos() {
        const savedData = Model.getData();
        savedData.forEach(item => View.renderItem(item));
    },

    removeHandler(event) {
        event.stopPropagation();
        if (!event.target.closest('.delete-button')) return;
        const todoId = event.target.getAttribute('data-id');
        Model.removeDataById(todoId);
        event.target.closest('.col-4').remove();
    },

    init(formSelector, blockSelector) {
        if (typeof formSelector !== 'string') throw new Error('Form selector should be a string');
        const form = document.querySelector(formSelector);
        if (!(form instanceof HTMLElement)) throw new Error('Form not valid HTML element');

        if (typeof blockSelector !== 'string') throw new Error('Block selector should be a string');
        const block = document.querySelector(blockSelector);
        if (!(block instanceof HTMLElement)) throw new Error('Block not valid HTML element');

        this.form = form;
        this.todoContainer = block;
        View.setContainer(block);

        this.initListeners();
    }
}