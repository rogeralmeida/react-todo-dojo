import React from 'react';
import './App.css';

function MainTodoCard(props) {
  return (
    <div className={props.boxStyle}>
      <h2 className="card-header">Todo</h2>
      <div className="card-body">
        <ul>
          <li>Action 1</li>
          <li>Action 1</li>
          <li>Action 1</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <label htmlFor="create-task">task:</label>
      <input type="text" id="create-task" />
      <hr/>
      <div className="row">
        <MainTodoCard boxStyle="card text-white bg-success col mx-3"/>
        <MainTodoCard boxStyle="card text-white bg-danger col mx-3"/>
      </div>
    </div>
  );
}

export default App;