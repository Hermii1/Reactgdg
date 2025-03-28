// src/components/TaskManager.jsx
import React, { useState } from 'react';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({ title: '', description: '', dueDate: '', completed: false });
    const [editIndex, setEditIndex] = useState(null);
    const [filter, setFilter] = useState('all');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: name === 'completed' ? e.target.checked : value });
    };

    const addOrUpdateTask = () => {
        if (editIndex !== null) {
            const updatedTasks = tasks.map((t, index) => (index === editIndex ? task : t));
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            setTasks([...tasks, task]);
        }
        setTask({ title: '', description: '', dueDate: '', completed: false });
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const editTask = (index) => {
        setTask(tasks[index]);
        setEditIndex(index);
    };

    const filteredTasks = tasks.filter((t) => {
        if (filter === 'completed') return t.completed;
        if (filter === 'incomplete') return !t.completed;
        return true;
    });

    return (
        <div>
            <h1>Task Manager</h1>
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Task Title"
            />
            <input
                type="text"
                name="description"
                value={task.description}
                onChange={handleChange}
                placeholder="Task Description"
            />
            <input
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
            />
            <label>
                <input
                    type="checkbox"
                    name="completed"
                    checked={task.completed}
                    onChange={handleChange}
                />
                Completed
            </label>
            <button onClick={addOrUpdateTask}>{editIndex !== null ? 'Update Task' : 'Add Task'}</button>

            <h2>Filter Tasks</h2>
            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>

            <ul>
                {filteredTasks.map((t, index) => (
                    <li key={index}>
                        <h3>{t.title}</h3>
                        <p>{t.description}</p>
                        <p>Due Date: {t.dueDate}</p>
                        <p>Status: {t.completed ? 'Completed' : 'Incomplete'}</p>
                        <button onClick={() => editTask(index)}>Edit</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;