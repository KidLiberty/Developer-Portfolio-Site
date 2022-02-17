import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/App.css'

import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Crypto from './components/Crypto'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/crypto' element={<Crypto />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}
