import React from 'react'
import './styles.scss'
import Apple from '../../assets/images/apple.png';
import Google from '../../assets/images/google-icon.png';
import { Link } from 'react-router-dom';
import Github from '../../assets/images/Github.png'
import Twitter from '../../assets/images/Twitter.png';
import LinkedIn from '../../assets/images/LinkedIn.png';
import Discord from '../../assets/images/Discord.png';
import BASE_LOGO from '../../assets/images/BASE_LOGO.png';
import BASE_EXTRACT from '../../assets/images/BASE_EXTRACT.png'

const SignInPage = () => {
  return (
    <div className='signin-page'>
      <div className='signin-page__left-section'>
        <div  className='signin-page__left-section__logo'>
          <img src={BASE_LOGO} alt='base-logo' className='signin-page__left-section__logo__base-main'/>
          <img src={BASE_EXTRACT} alt='base-extract' className='signin-page__left-section__logo__base-extract'/>
        </div>
        <div className='signin-page__left-section__heading'>
          BASE
        </div>
        <div className='signin-page__left-section__contacts-frame'>
          <img src={Github} alt='github-icon'/>
          <img src={Twitter} alt='twitter-icon'/>
          <img src={LinkedIn} alt='linkedin-icon'/>
          <img src={Discord} alt='discord-icon'/>
        </div>
      </div>
      <div className='signin-page__right-section'>
        <div className='signin-page__right-section__signin-form'>
          <p className='signin-page__right-section__signin-form__heading'>Sign In</p>
          <p className='signin-page__right-section__signin-form__sub-heading'>Sign in to your account</p>
          <div className='signin-page__right-section__signin-form__accounts'>
            <div  className='signin-page__right-section__signin-form__accounts__icon'>
              <img src={Google} alt='google-icon'/>
              <p>Sign in with Google</p>
            </div>
            <div className='signin-page__right-section__signin-form__accounts__icon'>
              <img src={Apple} alt='apple-icon'/>
              <p>Sign in with Apple</p>
            </div>
          </div>
          <div className='signin-page__right-section__signin-form__form'>
            <div className='signin-page__right-section__signin-form__form__container'>
              <div className='signin-page__right-section__signin-form__form__container__form-content'>
                <label>Email Address</label>
                <br />
                <input type='email' value='johndoe@gmail.com' disabled/>
              </div>
              <div className='signin-page__right-section__signin-form__form__container__form-content'>
                <label>Password</label>
                 <br />
                <input type='password' alt='••••••••' value='••••••••' disabled/>
              </div>          
              <p>Forgot Password?</p>
              <Link to='/user-page'>
                <button type='submit'>Sign In</button>
              </Link>
            </div>
            <p className='signin-page__right-section__signin-form__form__register-text'>Don't have an account? <span>Register Here</span></p>
          </div>            
        </div>
      </div>    
    </div>
  )
}

export default SignInPage
