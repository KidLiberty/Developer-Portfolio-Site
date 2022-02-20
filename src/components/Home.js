import React, { useState, useEffect } from 'react'

import Navbar from './Navbar'

export default function Home() {
  const [offsetY, setOffsetY] = useState(0)
  const [width, setWidth] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <div className='home__container'>
        <div className='home__landing-container'>
          <div>
            <div className='home__landing-header'>Hi,</div>
            <div className='home__landing-header'>I'm Brandon</div>
            <div className='home__landing-header'>Front End Web Developer</div>
          </div>

          <div
            className='react-logo-container'
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            <img
              className='main-content-img'
              src={require('../images/react-logo.png')}
              alt='React Logo'
              style={{ transform: `rotate(${offsetY * 2}deg)` }}
            />
          </div>
        </div>

        <div className='home__cards-container'>
          <div className='home__cards-grid'>
            <div className={`home__grid-card ${width > 1000 ? 'card-1' : ''}`}>
              <div className='card-1-text-container'>
                <div>Writing websites with React.js</div>
              </div>
              <div>Test</div>
            </div>
            <div className={`home__grid-card ${width > 1000 ? 'card-2' : ''}`}>
              <div className='card-2-text-container'>
                <div className='card-2-left-section'>
                  Writing websites with React.js
                </div>
                <div className='card-2-right-section'>Test</div>
              </div>
            </div>
            <div className={`home__grid-card ${width > 1000 ? 'card-3' : ''}`}>
              3
            </div>
            <div className={`home__grid-card ${width > 1000 ? 'card-4' : ''}`}>
              4
            </div>
            <div className={`home__grid-card ${width > 1000 ? 'card-5' : ''}`}>
              5
            </div>
            <div className={`home__grid-card ${width > 1000 ? 'card-6' : ''}`}>
              6
            </div>
            <div className={`home__grid-card ${width > 1000 ? 'card-7' : ''}`}>
              7
            </div>
          </div>
        </div>
        <div className='test-container'> Test</div>
      </div>
    </>
  )
}
