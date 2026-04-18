import { useState } from 'react'
import './App.css'
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
