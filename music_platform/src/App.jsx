import { useState } from 'react'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import { LandingPage } from './LandingPage'
import { Login } from './Login'

function App() {
  return (
  <>
      <LandingPage />
      <Login />  
  </>
  )
}

export default App
