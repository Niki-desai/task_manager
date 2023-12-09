import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, completeTask, deleteTask, editTask }) => {
    const [showIncomplete, setShowIncomplete] = useState(false);

    const incompleteTasks = tasks.filter((task) => !task.completed || showIncomplete);

    const handleToggleIncomplete = () => {
        setShowIncomplete(!showIncomplete);
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const reorderedTasks = Array.from(incompleteTasks);
        const [removed] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, removed);

        // Update the state or trigger a function to update the tasks order
        // For example:
        // setTasks(reorderedTasks);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Tasks</h2>
            <button
                onClick={handleToggleIncomplete}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            >
                {showIncomplete ? 'Show Incomplete Tasks' : 'Show All Tasks'}
            </button>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="taskList">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {incompleteTasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <TaskItem
                                                task={task}
                                                completeTask={completeTask}
                                                deleteTask={deleteTask}
                                                editTask={editTask}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default TaskList;
