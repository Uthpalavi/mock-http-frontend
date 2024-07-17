import React, { useState } from 'react';
import { submitTasks, startProcessing, stopProcessing } from '../services/TaskService';

const Controls: React.FC = () => {
  const [taskDurations, setTaskDurations] = useState<number[]>([]);

  const handleTaskDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.split(',').map(Number);
    setTaskDurations(value);
  };

  const handleSubmitTasks = async () => {
    await submitTasks(taskDurations);
  };

  const handleStart = async () => {
    await startProcessing();
  };

  const handleStop = async () => {
    await stopProcessing();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task durations (comma separated)"
        onChange={handleTaskDurationChange}
      />
      <button onClick={handleSubmitTasks}>Submit Tasks</button>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Controls;
