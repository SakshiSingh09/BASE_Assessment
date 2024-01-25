import React from 'react'
import './styles.scss'

const NotFoundPage = () => {
  return (
    <div className='main-section-error-page'>
        <div className='main-section-error-page__not-found'>
            <h1 className='main-section-error-page__not-found__error-status'>404</h1>
            <h1>Page Not Found!!</h1>
        </div>
    </div>
  )
}

export default NotFoundPage
