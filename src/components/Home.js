import React, { useState, useEffect } from 'react'

import Navbar from './Navbar'

export default function Home() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

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
            <div className='home__main-content-card'>
              <div className='home__main-content-card-text'>
                The concept of Decentralized Finance has fascinated me from the
                beginning.
              </div>
              <div className='home__main-content-card-title'>DeFi</div>
            </div>
            <div className='home__main-content-card'>
              <div className='home__main-content-card-text'>
                The concept of Decentralized Finance has fascinated me from the
                beginning.
              </div>
              <div className='home__main-content-card-title'>DeFi</div>
            </div>
            <div className='home__main-content-card'>
              <div className='home__main-content-card-text'>
                The concept of Decentralized Finance has fascinated me from the
                beginning.
              </div>
              <div className='home__main-content-card-title'>DeFi</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
