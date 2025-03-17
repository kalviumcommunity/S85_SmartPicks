import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Entity from '../components/entity'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Name : Vansh Thapar </h1>
    <ul>
      <li>E-Mail : vanshthapar@gmail.com</li>
      <li>Phone Number : 9876543210</li>
      <li>Address : White House U.S.A</li>
    </ul>
    <Entity/>
    </>
  )
}

export default App
