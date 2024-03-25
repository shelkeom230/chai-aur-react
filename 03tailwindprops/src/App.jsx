import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
     {/* <h1 className='text-3xl bg-blue-600 rounded-md'>vite with tailwind</h1> */}
     <Card/>
    </div>
  )
}

export default App
