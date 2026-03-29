import React from 'react';

// This is a "Component". It receives data through "props".
// Think of props as arguments passed to a function.
const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <div 
        className="task-content" 
        onClick={() => onToggle(task.id)}
      >
        <div className={`checkbox ${task.completed ? 'completed' : ''}`}>
          {/* Simple SVG checkmark for the completed state */}
          <svg 
            className="checkbox-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className={`task-text ${task.completed ? 'completed' : ''}`}>
          {task.text}
        </span>
      </div>
      
      <button 
        className="delete-button" 
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        {/* Simple SVG trash can icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="18" 
          height="18" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  );
};

export default TaskItem;
