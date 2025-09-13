// import React, { useEffect, useRef } from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import './Contentone.css';
// import mainimage from '../../../assets/pixelcut-export.png';
// import Clients from "../../Clients/Clients";
// import HompageContentTwo from "./HompageContentTwo";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import HomepageContentThree from "./HomepageContentThree";
// import Carousel from "../Carousel/Carousel";
// import TimeLineData from "../../../TimeLineData/TimeLineData";
// import Calendar from "../../../Calendar/Calendar";
// import WorkingProgress from "../../../WorkingProgress/WorkingProgress";
// import { useNavigate } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function HomepageContentOne() {
//   const nav = useNavigate()
//  const handleabout = () => {
//     nav("/aboutus")
//   }
//   const nextSectionRef = useRef(null);

//   useEffect(() => {
//     AOS.init();  // Initialize AOS
//     AOS.refresh(); // Refresh on component mount
//   }, []);

//   // Function to scroll to the next section
//   const scrollToNextSection = () => {
//     nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
//   };
//   return (
//     <>
//     <div className="parallax container-fluid homepage-contain-er">
//         <div className=" mt-5 pt-5 ">
//       <ul className="bg-bubbles">
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//       <div className="content d-md-flex container main-div-fr-two">
//         <div className="mt-5 pt-5  me-auto" data-aos="fade-right">
//           <h1 className=" agnee-font">Welcome to Rente Ease</h1>
//           <p className=" text-secondary  mt-2 ">
//           Established in 2019, RentEase has grown to a team of over 150 dedicated professionals. We are committed to providing exceptional vehicle rental services across the UAE, backed by a strong track record and satisfied customers. Our experienced team utilizes the latest technology to meet all your rental needs, staying true to our vision, mission, and values to ensure excellence in every experience.


//           </p>
//           <button className="read-more btn btn-outline-primary mt-1" onClick={handleabout}>
//             Read more <IoIosArrowRoundForward />
//           </button>
//         </div>
//         <div className="mt-lg-5 pt-lg-2 ms-lg-5  " data-aos="fade-left">
//         <img src={mainimage} alt="maincontentimg" className="main-content-img  "  />
//       </div>
//       </div>
//       <h1 className="text-center "
//             onClick={scrollToNextSection}
//             style={{ cursor: "pointer", zIndex: 10, position: "relative" }} >  <RiArrowDropDownLine
//               className="icon-home-page display-1  "

//             /></h1> 
//       </div>
    
//     </div>
//     <HomepageContentThree />
//     <div ref={nextSectionRef}>
//         <HompageContentTwo />
//       </div>
//    <Carousel />
//     <Clients />
//     {/* <TimeLineData /> */}
// <Calendar /> 
// {/* <WorkingProgress /> */}
//     </>
//   );
// }

import React from "react";
import mainimage from "../../../assets/decors page ONE.jpg";
import "./Contentone.css";
import HomepageContentThree from "./HomepageContentThree";
import HompageContentTwo from "./HompageContentTwo";
import Service from "../../Service/Service";

export default function HomepageContentOne() {
  return (
    <div className="outer-div">

    <div className="homepage-full-image">
      <img src={mainimage} alt="maincontentimg" className="full-cover-img" />
    </div>
    <HomepageContentThree/>
<Service topMargin="50px" />
    </div>
  );
}
