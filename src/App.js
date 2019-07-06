import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <label htmlFor="create-task">task:</label>
      <input type="text" id="create-task" />
      <hr/>
      <div className="row">
        <div id="tasks-todo" className="col">
          <h2>To do:</h2>
          <ul>
            <li>Action 1</li>
            <li>Action 1</li>
            <li>Action 1</li>
          </ul>
        </div>
        <div id="tasks-done" className="col">
          <h2>Done:</h2>
          <ul>
            <li>Action 1</li>
            <li>Action 1</li>
            <li>Action 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
