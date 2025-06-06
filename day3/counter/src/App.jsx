import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
  }

  const decreaseValue = () => {
  if(counter > 0){
    setCounter(counter - 1);
  }
}
  return (
    <>
      <div className="app-container">
        <div className="card">
             <h1>React Counter</h1>
          <h2>Counter Value : <span className="value">{counter}</span></h2>
          <div className="button-group">
            <button onClick={addValue} className="add-btn">Add Value</button>
            <button onClick={decreaseValue} className="decrease-btn">Decrease Value</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
