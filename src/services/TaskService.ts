import axios from 'axios';

const API_URL = 'https://localhost:7285/api/Task';

export const submitTasks = async (taskDurations: number[]) => {
  try {
    console.log('***********',taskDurations);
    const response = await axios.post(`${API_URL}/submit_tasks`,  taskDurations , {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('///////////////////', taskDurations);
    return response.data;
  } catch (error) {
    console.error('Error submitting tasks:', error);
    console.log('***********Error submitting tasks:', error);
    throw error;
  }
};

export const startProcessing = () => {
  return axios.post(`${API_URL}/start`);
};

export const stopProcessing = () => {
  return axios.post(`${API_URL}/stop`);
};

export const getTasks = () => {
  return axios.get(`${API_URL}/tasks`);
};
