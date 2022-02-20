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
            <div className='home__landing-header'>I'm Brandon.</div>
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

        <div className='home__cards-grid-container'>
          <div className='home__cards-grid'>
            <div className='grid-card-1'>
              <div className='grid-card-1-text'>
                My passion is developing responsive, dymanic websites in React
              </div>
            </div>
            <div className='grid-card-2'>
              <div className='grid-card-2-text'></div>
              <div className='grid-card-2-title'>Title</div>
            </div>
            <div className='grid-card-3'>
              <div className='grid-card-3-text'>Card 3</div>
              <div className='grid-card-3-title'>Title</div>
            </div>
            <div className='grid-card-4'>
              <div className='grid-card-4-text'>Card 4</div>
              <div className='grid-card-4-title'>Title</div>
            </div>
            <div
              className='grid-card-5'
              style={{ backgroundPositionX: `${offsetY * 0.055}%` }}
            >
              <div className='grid-card-5-text'>
                Inspired to pursure standards resulting in create
              </div>
              <div className='grid-card-5-title'>
                <span>
                  <span>Eye-catching </span>User Interfaces
                </span>
              </div>
            </div>
            <div className='grid-card-6'>
              <div className='grid-card-6-card first'>Programming</div>
              <div className='grid-card-6-card'>Styling</div>
              <div className='grid-card-6-card last'>Cryptocurrency</div>
            </div>
          </div>
        </div>
        <div className='test-container'> Test</div>
      </div>
    </>
  )
}
