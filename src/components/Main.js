import React, { useState, useEffect } from 'react'

export default function Main() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='main'>
      <div className='main-header'>
        I am a Web Developer with a focus on React.js
      </div>
      <div
        className='react-logo-container'
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <img src={require('../images/react-logo.png')} alt='React Logo' />
      </div>
    </section>
  )
}
