import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/navbar.css'

import HomeIcon from '@material-ui/icons/Home';


function Navbar() {
  return (
    <>
      <nav className='horizontal-navbar'>
        <ul>
          <li><Link to='/'><HomeIcon /></Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar