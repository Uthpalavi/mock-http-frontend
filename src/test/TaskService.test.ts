import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { submitTasks, startProcessing, stopProcessing, getTasks } from '../services/TaskService';

// Create a mock adapter instance
const mock = new MockAdapter(axios);

describe('API Service', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should submit tasks', async () => {
    const taskDurations = [10, 16, 13, 19, 25, 21];
    const response = { status: 202 };

    mock.onPost('https://localhost:7285/task/submit_tasks').reply(202, response);

    const result = await submitTasks(taskDurations);

    expect(result.status).toBe(202);
  });

  it('should start processing tasks', async () => {
    const response = { status: 200 };

    mock.onPost('https://localhost:7285/task/start').reply(200, response);

    const result = await startProcessing();

    expect(result.status).toBe(200);
  });

  it('should stop processing tasks', async () => {
    const response = { status: 200 };

    mock.onPost('https://localhost:7285/task/stop').reply(200, response);

    const result = await stopProcessing();

    expect(result.status).toBe(200);
  });

  it('should get all tasks', async () => {
    const tasks = [
      { id: 1, duration: 10, isCompleted: false },
      { id: 2, duration: 20, isCompleted: false }
    ];

    mock.onGet('https://localhost:7285/task/tasks').reply(200, tasks);

    const result = await getTasks();

    expect(result.status).toBe(200);
    expect(result.data).toEqual(tasks);
  });
});
