import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

import Aos from 'aos'
import 'aos/dist/aos.css'
import NFTGallery from './NFTGallery'

export default function Crypto() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <div className='crypto-container'>
        <div className='crypto-title'>
          <div>Crypto.</div>
          <img
            className='BTC-logo'
            src={require('../images/BTC_logo.png')}
            data-aos='fade'
            alt='BTC Logo'
          />
          <img
            className='ETH-logo'
            src={require('../images/ETH_logo.png')}
            data-aos='fade'
            alt='ETH Logo'
          />
          <img
            className='SOL-logo'
            src={require('../images/SOL_logo.png')}
            data-aos='fade'
            alt='SOL Logo'
          />
          <img
            className='AVAX-logo'
            src={require('../images/AVAX_logo.png')}
            data-aos='fade'
            alt='AVAX Logo'
          />
        </div>
        <div className='crypto-content'>
          <NFTGallery />
        </div>
      </div>
    </>
  )
}
