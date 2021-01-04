import React, { useState, useEffect, useContext } from 'react';

import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList, editTask, edit } = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleChange = ({ target: { value } }) => setTitle(value);

    const handleSubmit = e => {
        e.preventDefault();

        if (!edit) {
            addTask(title);
            setTitle('');
        } else {
            editTask(title, edit.id);
        }
    }

    useEffect(() => edit ? setTitle(edit.title) : setTitle(''), [edit]);

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                className="task-input" 
                type="text" 
                placeholder="Add a task..." 
                required
                value={title}
                onChange={handleChange}    
            />
            <div className="button">
                <button className="btn add-task-btn" type="submit">
                    {edit ? 'Edit Task' : 'Add Task'}
                </button>
                <button className="btn clear-btn" onClick={clearList}>Clear</button>
            </div>
        </form>
    )
}

export default TaskForm;