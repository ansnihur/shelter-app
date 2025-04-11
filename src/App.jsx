import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div className='app-container'>
      <HomePage/>

      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  )
}

export default App;
