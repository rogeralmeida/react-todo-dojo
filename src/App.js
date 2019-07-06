import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <label htmlFor="create-task">task:</label>
      <input type="text" id="create-task" />
      <hr/>
      <div id='actions'>
        <ul>
          <li>Action 1</li>
          <li>Action 1</li>
          <li>Action 1</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
