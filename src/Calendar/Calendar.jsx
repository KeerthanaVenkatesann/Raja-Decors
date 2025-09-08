import React, { useEffect, useState } from 'react';
import moment from 'moment';
import contactushome from "../assets/contactushome.png";
import './Calendar.css';
import { IoIosArrowRoundForward } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LineAnimations from '../LineAnimations/LineAnimations';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
 const nav = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

const handlecontact = () =>{
nav('/contact-us')
}
 

  return (
    <>
    <div className='d-flex flex-column  flex-lg-row my-lg-5 py-lg-5 container'>
      <div className='col-lg-6 ' data-aos="fade-right">
      <div className="circle-container mt-md-5 mt-lg-0">
      <div className="circle circle-1">
      <img src="https://i.pinimg.com/originals/f5/fb/5e/f5fb5efe6b9f1d5f11f19e69f67f5ccf.gif" alt="Image 2" />
  
      </div>
      <div className="circle circle-2">
      <img src="https://i.pinimg.com/originals/52/e6/90/52e6903d708b92ba12daf16cd6a2abdb.gif" alt="Image 1" />

      </div>
      <div className="circle circle-3">
        <img src="https://i.pinimg.com/originals/83/82/46/838246de8678959f4bba399b9ddc2996.gif" alt="Image 3" />
      </div>
    </div>
      </div>
      <div className='col-lg-6 col-md-11 pt-5 contact-us-home px-md-5' data-aos="fade-left">
        <h1 className='mt-5 text-primary'>Contact us<span className='text-danger'>!</span></h1>
        <p className='fs-5 text-secondary my-lg-2'>
        At RentEase Group of Companies, we value every inquiry and are here to provide the support and information you need. Whether you're seeking rental partnerships, booking assistance, or general inquiries, our dedicated team is always ready to help.


        </p>
        <button className='btn btn-outline-primary my-lg-2'onClick={handlecontact}>
          Contact us <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
    <div className='mt-5 pt-5'>
    <LineAnimations /></div>
    </>
  );
};

export default Calendar;
