import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from './Navbar'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className='contact__container'>
        <FontAwesomeIcon icon='fa-brands fa-discord' />
        <div className='contact__email-container'>
          The best way to reach be is via email:
          <h2>brandonrstone@gmail.com</h2>
        </div>
        <div className='contact__discord-container'>Test</div>
      </div>
    </>
  )
}
