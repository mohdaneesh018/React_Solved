import { useState } from 'react'
import './App.css'
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './component/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          } />
      </Routes>
    </>
  )
}

export default App
