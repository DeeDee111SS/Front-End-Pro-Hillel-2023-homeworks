import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addNote, removeNote, resetForm, clearNotes } from "../store/actions";
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const TodoBox = () => {

    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();
    const [titleInputValue, setTitleInputValue] = useState("");
    const [taskInputValue, setTaskInputValue] = useState("");

    const handleTitleInputChange = (event) => {
        setTitleInputValue(event.target.value);
    };

    const handleTaskInputChange = (event) => {
        setTaskInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (titleInputValue.trim() === "" || taskInputValue.trim() === "") return;

        const newNote = {
        id: uuidv4(),
        title: titleInputValue,
        task: taskInputValue,
        };

        dispatch(addNote(newNote));
        setTitleInputValue("");
        setTaskInputValue("");
    };

    const handleRemoveNote = (id) => {
        dispatch(removeNote(id));
    };

    const handleFormReset = () => {
        setTitleInputValue("");
        setTaskInputValue("");
        dispatch(resetForm());
    };

    const handleRemoveAllNotes = () => {
        dispatch(clearNotes());
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