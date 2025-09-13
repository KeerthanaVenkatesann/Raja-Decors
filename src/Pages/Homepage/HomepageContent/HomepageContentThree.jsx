// import React from 'react'
// import imageforhome from '../../../assets/imageforhome.jpeg';
// import { IoIosArrowRoundForward } from 'react-icons/io';

// export default function HomepageContentThree() {
//     return (
//         <div className="parallax-two">
//           <div className="overlay"></div>
//           <div className="carousel-caption d-none d-md-block ">
//             <p className='fs-4 '>
//             Agnee Group of Companies excels in professional cleaning and environmental stewardship, transforming your spaces into pristine sanctuaries with 24/7 dedicated service.</p>
//             <button className='btn btn-outline-light mt-3'>Contact us <IoIosArrowRoundForward /></button>
//           </div>
//         </div>
//       );
// }

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaBirthdayCake, FaRing, FaTheaterMasks } from "react-icons/fa";
import { GiFlowers } from "react-icons/gi";
import { GiBalloons } from "react-icons/gi";

const CountClients = () => {
  const nav = useNavigate();
  const handleservice = () => {
    nav("/service");
  };
  const data = [
    { end: 15, label: "+Years of Cleaning Experience" },
    { end: 150, label: "+ Happy & Satisfied Customers" },
    { end: 1000, label: "Star Rating Excellent Services" },
    { end: 300, label: "+ inhouse staffs" },
    { end: 500, label: "Happy Clients" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const HomepageContentThree = () => {
    return (
      <div className="parallax-two">
        <div className="overlay"></div>
        <div className="carousel-caption d-none d-md-block">
          <h3 data-aos="fade-right" className=" "></h3>
          <p className="fs-4 my-auto title-home" data-aos="fade-left">
            <span className="title-two-agnee fs-3 text-light">
         Raja Decors – Where Celebrations Come Alive
            </span>
            <span className="title-two-agnee text-light">
            {/* Easy Booking Process */}
            </span>

            <span className="title-two-agnee fs-3 text-light">
            {/* Verified Owners & Vehicles */}
            </span>
            <span className="title-two-agnee text-light">
         
            </span>
          </p>
          <button
            className="btn btn-outline-light mt-3 fs-5 rounded-pill"
            data-aos="fade-right"
            onClick={handleservice}
          >
            Our Service <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    );
  };

  // const CountCard = ({ end, label }) => {
  //   return (
  //     <div className="countup-card card print">
  //       <h2>
  //         <CountUp end={end} duration={10} />
  //         <span className="text-danger">+</span>
  //       </h2>
  //       <p>{label}</p>
  //     </div>
  //   );
  // };
const services = [
     {
    
      title: "🌼Floral Elegance",
      desc: "Every flower tells a story. We design breathtaking floral arrangements that add fragrance, beauty, and elegance to your special day.",
      aos: "fade-up",
    },
    {

      title: "💍Dream Weddings",
      desc: "Step into the fairytale you’ve always imagined. From royal themes to modern romance, our wedding decorations set the stage for memories that last forever.",
      aos: "zoom-in",
    },
    {
      
      title: "✨Birthday Bliss",
      desc: "Turn birthdays into unforgettable adventures! Fun, colorful, and creative themes that bring a smile to every face – from kids to grown-ups.",
      aos: "flip-left",
    },
    {
    
      title: "🎈Balloon Wonders",
      desc: "From simple to spectacular, our balloon artistry adds joy, fun, and style to your celebrations.",
      aos: "fade-right",
    },
    {
     
      title: "🎪Stage Perfection",
      desc: "Make your stage the spotlight of your event. Elegant backdrops, creative props, and dazzling designs that steal the show.",
      aos: "fade-left",
    },
  ];

  return (
    <div>
      <HomepageContentThree/>
    
      <section className="pt-16 bg-gradient-to-b from-white to-gray-100 text-center">
        <h2
          className="text-4xl font-extrabold text-center  mb-12  p-5"
          data-aos="fade-up"
        >
          <span className=" p-3 w">   Our Signature Services  </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-16">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={service.aos}
              className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition duration-500 border-t-4 border-transparent hover:border-pink-400"
            >
             
              <h3 className="text-2xl font-semibold mb-3 ">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed bg-warning bg-opacity-25 pt-3">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
  

      </div>
  );
};

export default CountClients;
