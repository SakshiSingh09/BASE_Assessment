import React from 'react';
import Setting from '../../assets/images/Setting.png';
import Calendar from '../../assets/images/Calendar.png';
import Category from '../../assets/images/Category.png';
import Chart from '../../assets/images/Chart.png';
import Document from '../../assets/images/Document.png';
import Notification from '../../assets/images/Notification.png';
import Ticket from '../../assets/images/Ticket.png';
import './styles.scss';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/not-found' className='navbar__content'>
            <img src={Category} alt="Dashboard" className='navbar__content__logo'/>
            <li className='navbar__content__label'>Dashboard</li>
        </Link>
        <Link to='upload'  className='navbar__content'>
            <img src={Chart} alt='Upload' className='navbar__content__logo'/>
            <li className='navbar__content__label'>Upload</li>
        </Link>
        <Link to='/not-found'  className='navbar__content'>
            <img src={Ticket} alt='Invoice' className='navbar__content__logo'/>
            <li className='navbar__content__label'>Invoice</li>
        </Link>
        <Link to='/not-found' className='navbar__content'>
            <img src={Document} alt='Schedule' className='navbar__content__logo'/>
            <li className='navbar__content__label'>Schedule</li>
        </Link>
        <Link to='/not-found' className='navbar__content'>
            <img src={Calendar} alt='Calendar' className='navbar__content__logo'/>
            <li className='navbar__content__label'>Calendar</li> 
        </Link>
        <Link to='/not-found' className='navbar__content'>
            <img src={Notification} alt='Notification' className='navbar__content__logo'/>
            <li className='navbar__content__label'>Notification</li>
        </Link>
        <Link to='/not-found'  className='navbar__content'>
            <img src={Setting} alt='Settings' className='navbar__content__logo'/> 
            <li className='navbar__content__label'>Settings</li>
        </Link>
        <Outlet />
    </nav>
  )
}

export default Navbar;
