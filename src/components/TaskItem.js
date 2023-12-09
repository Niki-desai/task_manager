import React from 'react';

const TaskItem = ({ task, completeTask, deleteTask, editTask }) => {

    const handleComplete = () => {
        completeTask(task.id);
    };

    const handleDelete = () => {
        deleteTask(task.id);
    };

    const handleEdit = () => {
        editTask(task.id);
    };


    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <div className="mt-4">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={handleComplete}
                >
                    Complete
                </button>
                <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={handleDelete}
                >
                    Delete
                </button>

            </div>
        </div>
    );
};

export default TaskItem;
