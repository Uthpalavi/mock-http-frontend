import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import TaskProgressBar from './TaskProgressBar';
import { getTasks } from '../services/TaskService';

interface Task {
  id: number;
  duration: number;
  isCompleted: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskItem id={task.id} duration={task.duration} isCompleted={task.isCompleted} />
          {/* <TaskProgressBar duration={task.duration} isCompleted={task.isCompleted} /> */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
