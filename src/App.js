import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [name, setName] = useState('');
  const [test, setTest] = useState('')
  const [state, setState] = useState([]);
  const [isOn, setIsOn] = useState({ active: false })
  const handleSubmit = (e) => {
    e.preventDefault();
    setTest(name)
  }

  useEffect(() => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        setState(data)
      })
      .catch(err => 'something went wrong')
  }, [test])

  console.log(isOn)


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: 'pink' }}>Please input your name:</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" id="name"
          name="name"
        />
        <button type="submit">Submit</button>
      </form>

      <h2 className={isOn.active ? "light" : "dark"}>Your name is: {state.name}</h2>
      <h2 className={isOn.active ? "light" : "dark"}>and your age is: {state.age}</h2>
      <div className="col-sm-4 col-sm-offset-4">
        <div
          className={isOn.active ? "square switch-on" : 'square switch-off'}
          onClick={() => setIsOn({ active: !isOn.active })} >
          {isOn.active ? 'ON' : 'OFF'}
        </div>
      </div>
      <div className={isOn.active ? "bg-light light-on" : "bg-light light-off"} />

    </div>
  );
}

export default App;
