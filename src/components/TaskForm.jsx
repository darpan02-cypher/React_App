import React, { useState } from 'react';

// This component handles user input to create new tasks.
const TaskForm = ({ onAdd }) => {
  // We use local state here just to hold the typed value
  // before the user hits "Add".
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing when the form is submitted
    
    // Only add if the string isn't just spaces
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue(''); // Clear the input after adding
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
