import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [name, setName] = useState('');
  const [state, setState] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
  }

  useEffect(() => {
    fetch('https://api.agify.io/?name=')
      .then(response => response.json())
      .then(data => {
        setState(data)
      })
      .catch(err => 'something went wrong')
  }, [])

  console.log(state)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" id="name"
          name="name"
        />
        <button type="submit">Submit</button>
      </form>
      <h2>{}</h2>
    </div>
  );
}

export default App;
