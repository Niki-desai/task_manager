import React, { useEffect, useState } from 'react';

const TaskForm = ({ addTask, updateTask, taskToEdit, cancelEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) return;
        // addTask({ id: Date.now(), title, description });
        // setTitle('');
        // setDescription('');
        if (taskToEdit) {
            updateTask({ ...taskToEdit, title, description });
            cancelEdit();
        } else {
            addTask({ id: Date.now(), title, description });
            setTitle('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded-md px-3 py-2 mb-3"
            />
            <textarea
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded-md px-3 py-2 mb-3"
            ></textarea>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                {taskToEdit ? 'Update Task' : 'Add Task'}
            </button>
            {taskToEdit && (
                <button
                    type="button"
                    onClick={cancelEdit}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
                >
                    Cancel
                </button>
            )}
        </form>
    );
};

export default TaskForm;
