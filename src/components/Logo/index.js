import React from 'react'
import Logos from '../../assets/images/Logo.png';
import Tab from '../../assets/images/Tab_Bar.png';
import NotificationBell from '../../assets/images/Vector.png';
import UserLogo from '../../assets/images/Mask Group.png'
import './styles.scss'

const Logo = ({ openSidebar }) => {
  
  return (
    <div className='main-heading'>
      <div className='main-heading__logo'>
        <img src={Tab} alt='tab-img' className='main-heading__logo__tabs-img' onClick={openSidebar}/>    
        <img src={Logos} alt='logo-img' className='main-heading__logo__image'/>
        <p className='main-heading__logo__title'>Base</p>      
      </div>
      <div className='main-heading__searchbar'>
            <img src={NotificationBell} alt='notification-bell' className='main-heading__searchbar__notification-bell'/>
            <img src={UserLogo} alt='user-logo' className='ain-heading__searchbar__profile-img'/>
      </div>
    </div>
      
  )
}

export default Logo
