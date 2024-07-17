import React from 'react';

interface TaskItemProps {
  id: number;
  duration: number;
  isCompleted: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, duration, isCompleted }) => {
  return (
    <div>
      <p>Task ID: {id} | Duration: {duration}s | Completed: {isCompleted ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default TaskItem;
