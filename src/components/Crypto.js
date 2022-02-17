import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

import Aos from 'aos'
import 'aos/dist/aos.css'

import NFTGallery from './NFTGallery'

export default function Crypto() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScrollY = () => setOffsetY(window.scrollY)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY)

    return () => {
      window.removeEventListener('scroll', handleScrollY)
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className='crypto-container'>
        <div className='crypto-title'>
          <span className='crypto-title-text-container-1'>Crypto.</span>
          <span
            style={{ transform: `translateX(${offsetY * 0.05}px)` }}
            className='crypto-title-text-container-2'
          ></span>
          <span className='crypto-title-text-container-3'></span>
          <span
            className='crypto-title-text-container-4'
            style={{ transform: `translateX(${offsetY * -0.75}px)` }}
          ></span>
          <span
            style={{ transform: `translateX(${offsetY * 0.85}px)` }}
            className='crypto-title-text-container-5'
          ></span>
          <div
            className='BTC-logo'
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            <img
              src={require('../images/BTC_logo.png')}
              data-aos='fade'
              alt='BTC Logo'
              style={{ transform: `rotate(${offsetY * 0.05}deg)` }}
            />
          </div>
          <div
            className='ETH-logo'
            style={{ transform: `translateY(${offsetY * 0.75}px)` }}
          >
            <img
              src={require('../images/ETH_logo.png')}
              data-aos='fade'
              alt='ETH Logo'
            />
          </div>
          <div
            className='SOL-logo'
            style={{
              transform: `translateY(${offsetY * 0.15}px)`
            }}
          >
            <img
              className='SOL-logo'
              src={require('../images/SOL_logo.png')}
              data-aos='fade'
              alt='SOL Logo'
            />
          </div>
          <div
            className='AVAX-logo'
            style={{
              transform: `translateY(${offsetY * 0.25}px)`
            }}
          >
            <img
              className='AVAX-logo'
              src={require('../images/AVAX_logo.png')}
              data-aos='fade'
              alt='AVAX Logo'
              style={{ transform: `rotate(${offsetY * -0.05}deg)` }}
            />
          </div>
          <div
            className='DOT-logo'
            style={{
              transform: `translateY(${offsetY * 0.9}px)`
            }}
          >
            <img
              className='DOT-logo'
              src={require('../images/DOT_logo.png')}
              data-aos='fade'
              alt='DOT Logo'
              style={{ transform: `rotate(${offsetY * 1}deg)` }}
            />
          </div>
        </div>
        <div className='crypto-content'>
          <NFTGallery />
        </div>
      </div>
    </>
  )
}
