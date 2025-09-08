import React from 'react'
import './Logo.css'
import logo from '../../../assets/WhatsApp_Image_2025-09-03_at_11.56.14_d7fff486-removebg-preview.png';

export default function Logo() {
  return (
      <div className="logo-div-agnee">
      <img alt="logo" src={logo} className="nav-main-logo" />
      <div className="logo-title">
        {/* <span className='title-one-agnee mt-md-5'>RAJA DECORS</span> */}
      </div>
    </div>
  )
}
