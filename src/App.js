import React, { useState } from 'react';
import './App.css';
import Child from './child';

function App() {
  const [count, setCount] = useState(0);
  console.log("parent render");
  return (
    <div className="App">
      <h1>Parent Dom</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>You Parent clicked {count} times</p>
      <Child />
    </div>
  );
}

export default App;
