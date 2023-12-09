import React from 'react';

const CompletedTasks = ({ tasks }) => {
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Completed Tasks</h2>
            <div className="grid gap-4">
                {completedTasks.length > 0 ? (
                    completedTasks.map((task) => (
                        <div
                            key={task.id}
                            className="bg-green-200 rounded-lg p-4 shadow-md"
                        >
                            <h3 className="text-xl font-semibold">{task.title}</h3>
                            <p className="text-gray-600">{task.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No completed tasks yet!</p>
                )}
            </div>
        </div>
    );
};

export default CompletedTasks;
