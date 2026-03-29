import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // You can delete App.css or keep it if needed
import './index.css'; // We'll rely mainly on index.css for global styles

function App() {
  // === PHASE 4: STATE MANAGEMENT ===
  // useState holds our 'tasks' array. 
  // setTasks is the function we use to update this array.
  // When setTasks is called, React "re-renders" the UI automatically.
  
  // === PHASE 5: PERSISTENCE (Loading from localStorage) ===
  const [tasks, setTasks] = useState(() => {
    // This function runs ONE TIME when the component starts up.
    // It checks the browser's storage to see if we had tasks saved previously.
    const savedTasks = localStorage.getItem('lumina-tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      // Default placeholder task if nothing is saved
      return [
        { id: 1, text: 'Learn React Components', completed: true },
        { id: 2, text: 'Master useState hook', completed: false },
      ];
    }
  });

  // === PHASE 5: PERSISTENCE (Saving to localStorage) ===
  // useEffect "watches" the 'tasks' array. Every time it changes,
  // it runs this block of code to save the array to the browser's storage.
  useEffect(() => {
    localStorage.setItem('lumina-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handler to add a new task.
  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // simple unique ID based on current time
      text: text,
      completed: false
    };
    // We update state without modifying the original array (immutability)
    setTasks([...tasks, newTask]);
  };

  // Handler to toggle a task's completion status.
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handler to delete a task forever.
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">LuminaTasks</h1>
      
      {/* We pass the 'addTask' function as a prop 'onAdd' */}
      <TaskForm onAdd={addTask} />
      
      {/* We pass the 'tasks' array and the handlers down as props */}
      <TaskList 
        tasks={tasks} 
        onToggle={toggleTask} 
        onDelete={deleteTask} 
      />
    </div>
  );
}

export default App;
