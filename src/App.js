import './App.css';
import React, { useState } from 'react';
import Forms from './components/Forms'
import Display from './components/Display'

function App() {

  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <header className="App-header">

        <Forms tasks = {tasks} setTasks={setTasks} />

        <Display tasks = {tasks} setTasks={setTasks} />

      </header>
    </div>
  );
}

export default App;
