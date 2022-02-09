import React from 'react'

export default function Navbar() {
  return (
    <div className='nav'>
      <span className='title'>Brandon</span>
      <ul className='link-list'>
        <li className='link'>
          <a href='#'>About Me</a>
        </li>
        <li className='link'>
          <a href='#'>Projects</a>
        </li>
        <li className='link'>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </div>
  )
}
