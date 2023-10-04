import React, { useState } from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const TodoBox = () => {
    const [notes, setNotes] = useState([]);
    const [titleInputValue, setTitleInputValue] = useState('');
    const [taskInputValue, setTaskInputValue] = useState('');

    const handleTitleInputChange = (event) => {
        setTitleInputValue(event.target.value);
    };

    const handleTaskInputChange = (event) => {
        setTaskInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (titleInputValue.trim() === '' || taskInputValue.trim() === '') return;

        const newNote = {
            id: uuidv4(),
            title: titleInputValue,
            task: taskInputValue,
        };
        const updatedNotes = [newNote, ...notes];
        setNotes(updatedNotes);
        setTitleInputValue('');
        setTaskInputValue('');
    };

    const handleRemoveNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    };

    const handleFormReset = () => {
        setTitleInputValue('');
        setTaskInputValue('');
    };

    const handleRemoveAllNotes = () => {
        setNotes([]);
    };

    return (
        <main>
            <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <form id="todoForm" onSubmit={handleFormSubmit} onReset={handleFormReset}>
                            <div className="mb-3">
                                <label className="form-label">Task title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Title"
                                    required=""
                                    value={titleInputValue}
                                    onChange={handleTitleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Task body</label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    placeholder="Task body"
                                    cols="30"
                                    rows="10"
                                    required=""
                                    value={taskInputValue}
                                    onChange={handleTaskInputChange}
                                ></textarea>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        value="Create Task!"
                                    />
                                    <input
                                        type="reset"
                                        value="Очистить"
                                        className="btn btn-warning"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-danger remove-all"
                                    onClick={handleRemoveAllNotes}
                                >
                                    Удалить все
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-8">
                        <div className="row" id="todoItems">
                            {notes.map((note) => (
                                <Item
                                    key={note.id}
                                    title={note.title}
                                    task={note.task}
                                    onRemove={() => handleRemoveNote(note.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TodoBox;