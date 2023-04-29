import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.css'

function Home() {
  return (
    <>
        <div className='landing-banner'>
          
          <Link to='/generate'>use the tool!</Link>

        </div>
    </>
  )
}

export default Home