import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
      username : "hitesh",
      age: 21
  }

  let myArr = [1, 2, 3]
  

  return (
    <>
      <h1 className='bg-blue-100'>React JS</h1>
      <h1 className="text-5xl md:text-6xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-indigo-500 hover:scale-105 transition-transform duration-300">
  Discover Your True Potential</h1>

  <Card channel = "Home bitch Shruti" someObject = {myObj} someArr = {myArr}/>
  <Card channel = "Shruti Nigga home dog" />

    </>
  )
}

export default App