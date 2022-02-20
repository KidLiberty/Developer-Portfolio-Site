import React, { useState, useEffect } from 'react'

import Navbar from './Navbar'

export default function Home() {
  const [offsetY, setOffsetY] = useState(0)
  const [cardOneHovered, setCardOneHovered] = useState(false)
  const [cardTwoHovered, setCardTwoHovered] = useState(false)
  const [cardThreeHovered, setCardThreeHovered] = useState(false)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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
            </div>
            <div className='grid-card-4'>
              <div className='grid-card-4-title'>LOL</div>
            </div>
            <div
              className='grid-card-5'
              style={{ backgroundPositionX: `${offsetY * 0.055}%` }}
            >
              <div className='grid-card-5-text'>
                Inspired to pursue standards resulting in
              </div>
              <div className='grid-card-5-title'>
                <span>
                  <span>Eye-catching </span>User Interfaces
                </span>
              </div>
            </div>
            <div className='grid-card-6'>
              <div
                className='grid-card-6-card-1'
                onMouseEnter={() => setCardOneHovered(!cardOneHovered)}
                onMouseLeave={() => setCardOneHovered(!cardOneHovered)}
              >
                <div className='grid-card-6-card-1-title'>Programming</div>
                {cardOneHovered === true && (
                  <div className='grid-card-6-card-1-text'>
                    Starting as a hobby, to an undergrad study - to now a career
                  </div>
                )}
              </div>
              <div
                className='grid-card-6-card-2'
                onMouseEnter={() => setCardTwoHovered(!cardTwoHovered)}
                onMouseLeave={() => setCardTwoHovered(!cardTwoHovered)}
              >
                <div className='grid-card-6-card-2-title'>Style</div>
                {cardTwoHovered === true && (
                  <div className='grid-card-6-card-2-text'>
                    Starting as a hobby, to an undergrad study - to now a career
                  </div>
                )}
              </div>
              <div
                className='grid-card-6-card-3'
                onMouseEnter={() => setCardThreeHovered(!cardThreeHovered)}
                onMouseLeave={() => setCardThreeHovered(!cardThreeHovered)}
              >
                <div className='grid-card-6-card-3-title'>Cryptocurrency</div>
                {cardThreeHovered === true && (
                  <div className='grid-card-6-card-2-text'>
                    In pursuit to take my skills to the space of Decentralized
                    Finance.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='test-container'> Test</div>
      </div>
    </>
  )
}
