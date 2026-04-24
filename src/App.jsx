import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedRoutes from './component/ProtectedRoutes'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/home'
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  )
}

export default App;