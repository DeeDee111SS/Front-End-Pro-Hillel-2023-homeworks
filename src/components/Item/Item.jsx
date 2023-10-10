import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ noteId, title, task, onRemove }) => {
    return (        
        <div className="col-4">
            <Link to={`/note/${noteId}`}>
                <div className="taskWrapper">
                    <div className="taskHeading">{title}</div>
                    <div className="taskDescription">{task}</div>
                    <hr/>
                    <label className="completed form-check">
                        <input data-item-id={noteId} type="checkbox" className="form-check-input"/>
                        <span>Завершено ?</span>
                    </label>
                    <hr/>
                    <button 
                        className="btn btn-danger delete-btn" 
                        data-item-id={noteId} 
                        onClick={onRemove}>Удалить</button>
                </div>
            </Link>
        </div>    
    );
};

export default Item;