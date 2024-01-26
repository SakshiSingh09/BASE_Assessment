import React, { useState }  from 'react'
import { Outlet } from 'react-router-dom';
import Logo from '../Logo';
import Navbar from '../Navbar';
import './styles.scss'

const UserPage = () => {

  const [isTabActive, setTabStatus] = useState(false)

  const handleOnClick = () => {
    console.log(isTabActive)
        setTabStatus((prevStatus) => !prevStatus);
    }
  
  return (
    <div className='user-page'>
        <Logo openSidebar={handleOnClick}/>
        <Navbar navbarStatus={isTabActive} openSidebar={handleOnClick}/>
        <Outlet />         
    </div>
  )
}

export default UserPage
