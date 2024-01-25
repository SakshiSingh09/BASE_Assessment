import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Logo from '../Logo';
import Navbar from '../Navbar';
import './styles.scss'
import MainSection from '../MainSection'

const UserPage = () => {
  return (
    <div className='user-page'>
        <div className='sidebar'>
            <Logo />
            <Navbar />
        </div>
        <MainSection />
        {/* <Routes>
            <Route path='upload' element={<MainSection />}/>
            <Route path='not-found' element={<NotFoundPage />}/>
        </Routes> */}
         
    </div>
  )
}

export default UserPage
