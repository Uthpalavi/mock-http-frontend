import React from 'react';
import TaskList from './components/TaskList';
import Controls from './components/Controls';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Mock Http Services Forntend v1</h1>
      <Controls />
      <TaskList />
    </div>
  );
};

export default App;