import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <label htmlFor="create-task">task:</label>
      <input type="text" id="create-task" />
      <hr/>
      <div className="row">

        <div className="card text-white bg-success col mx-3">
          <h2 className="card-header">Todo</h2>
          <div className="card-body">
            <ul>
              <li>Action 1</li>
              <li>Action 1</li>
              <li>Action 1</li>
            </ul>
          </div>
        </div>
        <div className="card text-white bg-danger col mx-3">
          <h2 className="card-header">Done</h2>
          <div className="card-body">
            <ul>
              <li>Action 1</li>
              <li>Action 1</li>
              <li>Action 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
