import React from 'react';
import Setting from '../../assets/images/Setting.png';
import Calendar from '../../assets/images/Calendar.png';
import Category from '../../assets/images/Category.png';
import Chart from '../../assets/images/Chart.png';
import Document from '../../assets/images/Document.png';
import Notification from '../../assets/images/Notification.png';
import Ticket from '../../assets/images/Ticket.png';
import Logo from '../../assets/images/Logo.png';
import x from '../../assets/images/x.png';
import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ navbarStatus, openSidebar }) => {
    
  return (
    <nav className={navbarStatus ? 'navbar navbar--open' : 'navbar'}>
        <div className='navbar__icon'>
            <div className='navbar__icon__left'>
                <img src={Logo} alt='logo-img' className='navbar__icon__left__logo-image'/>
                <p className='navbar__icon__left__title'>Base</p> 
            </div> 
            <div  className='navbar__icon__right'>
                <img src={x} alt='cross-icon' className='navbar__icon__right__cross-image' onClick={openSidebar}/>
            </div>
        </div>
        <div className='navbar__main-content'>
            <Link to='not-found' className='navbar__main-content__content'>
                <img src={Category} alt="Dashboard" className='navbar__main-content__content__logo'/>
                <li className='navbar__main-content__content__label'>Dashboard</li>
            </Link>
            <Link to='upload'  className='navbar__main-content__content'>
                <img src={Chart} alt='Upload' className='navbar__main-content__content__logo'/>
                <li className='navbar__main-content__content__label'>Upload</li>
            </Link>
            <Link to='not-found'  className='navbar__main-content__content'>
                <img src={Ticket} alt='Invoice' className='navbar__main-content__content__logo' style={{filter: 'brightness(0) invert(0.65)'}}/>
                <li className='navbar__main-content__content__label'>Invoice</li>
            </Link>
            <Link to='not-found' className='navbar__main-content__content'>
                <img src={Document} alt='Schedule' className='navbar__main-content__content__logo'/>
                <li className='navbar__main-content__content__label'>Schedule</li>
            </Link>
            <Link to='not-found' className='navbar__main-content__content'>
                <img src={Calendar} alt='Calendar' className='navbar__main-content__content__logo'/>
                <li className='navbar__main-content__content__label'>Calendar</li> 
            </Link>
            <Link to='not-found' className='navbar__main-content__content'>
                <img src={Notification} alt='Notification' className='navbar__main-content__content__logo'/>
                <li className='navbar__main-content__content__label'>Notification</li>
            </Link>
            <Link to='not-found'  className='navbar__main-content__content'>
                <img src={Setting} alt='Settings' className='navbar__main-content__content__logo'/> 
                <li className='navbar__main-content__content__label'>Settings</li>
            </Link>
        </div>
        
    </nav>
  )
}

export default Navbar;
