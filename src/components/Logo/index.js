import React from 'react'
import Subtract from '../../assets/images/Subtract.png';
import './styles.scss'

const Logo = () => {
  return (
    <div className='logo'>
        <img src={Subtract} alt='logo-img' className='logo__image'/>
        <p className='logo__title'>Base</p>      
    </div>
  )
}

export default Logo
