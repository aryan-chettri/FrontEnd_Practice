import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);


  // let counter = 5;

  const addValue = () =>{

    // counter = counter + 1;

    if(!(counter<20)){
      setCounter(counter);
    }

    else{
      setCounter(counter+1);
    }

    // console.log('clicked', Math.random);
  }

  const substractValue = () =>{

     if(!(counter>0)){
      setCounter(counter);
     }
     else{
      setCounter(counter-1);
     }
     

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <button onClick={substractValue}>Decrease Value</button>
    </>
  )
}

export default App
