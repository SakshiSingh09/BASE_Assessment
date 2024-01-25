import React from 'react'
import { Outlet } from 'react-router-dom';
import Logo from '../Logo';
import Navbar from '../Navbar';
import './styles.scss'

const UserPage = () => {
  return (
    <div className='user-page'>
        <div className='sidebar'>
            <Logo />
            <Navbar />
        </div>
        <Outlet />         
    </div>
  )
}

export default UserPage
