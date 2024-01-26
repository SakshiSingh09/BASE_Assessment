import React from 'react'
import MainHeading from '../MainHeading'
import FileUpload from '../FileUpload'
import './styles.scss';

const MainSection = () => {
  return (
    <div className="main-section">
        <MainHeading />
        <FileUpload />
    </div>
  )
}

export default MainSection
