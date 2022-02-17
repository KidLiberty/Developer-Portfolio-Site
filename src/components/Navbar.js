import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav'>
      <Link className='logo' to='/'>
        Brandon
      </Link>
      <ul className='link-list'>
        <li className='link'>
          <Link to='#'>About Me</Link>
        </li>
        <li className='link'>
          <Link to='/crypto'>Crypto</Link>
        </li>
        <li className='link'>
          <Link to='#'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}
