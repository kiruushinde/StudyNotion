import React, { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (

    <div className='w-screen h-screen bg-black flex flex-col overflow-x-hidden'>

      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />

      {/* creating routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLoggedIn={setLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setLoggedIn} />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </div>

  )
}

export default App