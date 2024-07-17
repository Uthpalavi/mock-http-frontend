import React, { useEffect, useState } from 'react';

interface TaskProgressBarProps {
  duration: number;
  isCompleted: boolean;
}

const TaskProgressBar: React.FC<TaskProgressBarProps> = ({ duration, isCompleted }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isCompleted) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + (100 / duration);
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [duration, isCompleted]);

  return (
    <div>
      <progress value={progress} max="100"></progress>
    </div>
  );
};

export default TaskProgressBar;
