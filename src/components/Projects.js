import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className='projects-container'>
      <h2 className='projects-header'>Projects</h2>
      <div className='projects-grid'>
        <div className='grid-item' data-aos='fade-up'>
          <div className='grid-content'>-Content-</div>
          <div className='grid-content-description'>Coming Soon!</div>
        </div>
        <div className='grid-item' data-aos='fade-up'>
          <div className='grid-content'>-Content-</div>
          <div className='grid-content-description'>Coming Soon!</div>
        </div>
        <div className='grid-item' data-aos='fade-up'>
          <div className='grid-content'>-Content-</div>
          <div className='grid-content-description'>Coming Soon!</div>
        </div>
        <div className='grid-item' data-aos='fade-up'>
          <div className='grid-content'>-Content-</div>
          <div className='grid-content-description'>Coming Soon!</div>
        </div>
        <div className='grid-item' data-aos='fade-up'>
          <div className='grid-content'>-Content-</div>
          <div className='grid-content-description'>Coming Soon!</div>
        </div>
      </div>
    </div>
  )
}
