import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/layout.css';

function Layout() {
  return (
    <>
        <Header />

        <div className='main-content'>
            <Outlet />
        </div>

        <Footer />
    </>
  )
}

export default Layout