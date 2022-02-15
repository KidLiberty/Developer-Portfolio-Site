import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/App.css'

import Main from './components/Main'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import NFTGallery from './components/NFTGallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Main />
      <Projects />
      <NFTGallery />
      <Footer />
    </div>
  )
}
