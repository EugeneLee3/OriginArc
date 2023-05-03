import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.css'

function Home() {
  return (
    <>
        <div className='landing-banner'>

          <div className='big-title'>
            Welcome to the Character Name Generator
          </div>
          
          <div className='big-button'>
            <Link to='/generate'>Generate Names</Link>
          </div>
          

        </div>
    </>
  )
}

export default Home