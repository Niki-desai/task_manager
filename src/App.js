import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);


  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null); // Clear the editing task after update
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-200 focus:text-gray-200"
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/completed"
                className="text-white hover:text-gray-200 focus:text-gray-200"
              >
                Completed Tasks
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container mx-auto flex-grow p-8">
          <Routes>
            <Route path="/" element={<><TaskList tasks={tasks} completeTask={completeTask}
              deleteTask={deleteTask} editTask={editTask} />  <TaskForm addTask={addTask}
                updateTask={updateTask}
                taskToEdit={editingTask}
                cancelEdit={cancelEdit} /> </>} />
            <Route path="/completed" element={<CompletedTasks tasks={tasks} />} />
          </Routes>

          {editingTask && (
            <TaskForm
              task={editingTask}
              updateTask={updateTask}
              cancelEdit={() => setEditingTask(null)}
            />
          )}


        </div>
      </div>
    </Router>
  );
}

export default App;
