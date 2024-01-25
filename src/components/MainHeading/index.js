import React from 'react';
import './styles.scss';
import NotificationBell from '../../assets/images/Vector.png';
import UserLogo from '../../assets/images/Mask Group.png'

const MainHeading = () => {
  return (
    <div className='main-page'>
      <div className='main-page__header'>
        <div className='main-page__header__text'>
            Upload CSV
        </div>
        <div className='main-page__header__searchbar'>
            <img src={NotificationBell} alt='notification-bell' className='main-page__header__searchbar__notification-bell'/>
            <img src={UserLogo} alt='user-logo' className='main-page__header__searchbar__profile-img'/>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default MainHeading
