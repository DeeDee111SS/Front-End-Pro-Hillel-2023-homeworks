import React from 'react';

const Item = ({key, title, task, onRemove }) => {
    return (        
        <div className="col-4">
            <div className="taskWrapper">
                <div className="taskHeading">{title}</div>
                <div className="taskDescription">{task}</div>
                <hr/>
                <label className="completed form-check">
                    <input data-item-id={key} type="checkbox" className="form-check-input"/>
                    <span>Завершено ?</span>
                </label>
                <hr/>
                <button 
                    className="btn btn-danger delete-btn" 
                    data-item-id={key} 
                    onClick={onRemove}>Удалить</button>
            </div>
        </div>    
    );
};

export default Item;