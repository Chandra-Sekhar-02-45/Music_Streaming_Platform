import { useState, useEffect } from 'react'
import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import { LandingPage } from './LandingPage'
import { Login } from './Login'
import { Navbar } from './Navbar'
import { Player } from './Player'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/login') {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [location])

  return (
  <>
  {!isLoggedIn && <Navbar />}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    {!isLoggedIn && <Player />}
  </>
  )
}

export default App
