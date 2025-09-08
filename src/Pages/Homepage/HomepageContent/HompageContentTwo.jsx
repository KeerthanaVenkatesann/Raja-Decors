// import React from "react";
// import { FaBroom, FaBuilding, FaSprayCan, FaPaintBrush, FaCouch, FaHome, FaTools } from "react-icons/fa"; // Example icons, replace with your own
// import './Contentone.css';
// export default function HomepageContentTwo() {
//   const services = [
//     {
//       title: "Building Cleaning Service",
//       description: "Ensure your building's cleanliness and hygiene with our top-notch cleaning solutions.",
//       icon: <FaBuilding />,
//     },
//     {
//       title: "Floor Cleaning Service",
//       description:"Keep your floors spotless and shining with our expert cleaning and maintenance services.",
//       icon: <FaBroom />,
//     },
//     {
//       title: "Office Cleaning Service",
//       description:"Maintain a professional and welcoming workspace with our tailored office cleaning services.",
//       icon: <FaHome />,
//     },
//     {
//       title: "Residential Cleaning Service",
//       description: "We bring cleanliness and comfort to your home with detailed residential cleaning services.",
//       icon: <FaCouch />,
//     },
//     {
//       title: "Carpet Care",
//       description: "Extend the life of your carpets with our specialized cleaning and care solutions.",
//       icon: <FaTools />,
//     },
//     {
//       title: "General Cleaning Service",
//       description: "From dusting to deep cleaning, we handle all your cleaning needs with efficiency and care.",
//       icon: <FaBroom />,
//     },
//     {
//       title: "Spraying & Pest Control",
//       description: "Protect your home or office from pests with our safe and effective pest control services.",
//       icon: <FaSprayCan />,
//     },
//     {
//       title: "Painting & Paint Service",
//       description: "Give your space a fresh look with our professional interior and exterior painting services.",
//       icon: <FaPaintBrush />,
//     },
//   ];

//   return (
//     <div className="homepage-content mt-5">
//       <h1 className="text-center  agnee-service-font my-5">Services</h1>
//       <div className="container">
//         <div className="row m-2">
//           {services.map((service, index) => (
//             <div className="col-md-6 mb-4 " key={index}>
//               <div className="service-item d-flex align-items-start">
//                 <div className="service-icon  mr-3 mx-4">
//                   {service.icon}
//                 </div>
//                 <div className="mt-3">
//                   <h5 className="service-agnee-d-font">{service.title}</h5>
//                   <p className="mt-2">{service.description}</p>
//                 </div>
//               </div>
//               <div className="service-line"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect } from "react";
import { FaTools } from "react-icons/fa";
import { FaCar, FaBicycle, FaBriefcase, FaCarAlt, FaTruck, FaWrench, FaCalendarAlt } from 'react-icons/fa';

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import './Contentone.css';
import OutdoorBirthday from "../../../assets/Birthday.jpg";
import BirthdayHall from "../../../assets/Birthdayhalldecor.jpg";
import Marriage from "../../../assets/marriage.jpg";
import Reception from "../../../assets/Reception.jpg";
import Office from "../../../assets/office.jpg";
import GrandHall from "../../../assets/decortwoimg.jpg";

export default function HomepageContentTwo() {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
  {
    title: "Outdoor Birthday Celebration",
    description:
      "Celebrate under the open sky with vibrant themes, fresh floral setups, and dazzling lights. We create magical outdoor birthday moments that stay forever in your heart.",
    image: OutdoorBirthday,
  },
  {
    title: "Elegant Birthday Halls",
    description:
      "Transform simple halls into wonderlands! From balloons to backdrops, our decorations bring fun, color, and excitement to every birthday party.",
    image: BirthdayHall,
  },
  {
    title: "Marriage Decorations",
    description:
      "Step into your dream wedding with grand floral mandaps, traditional décor, and elegant setups that make your big day truly divine.",
    image: Marriage,
  },
  {
    title: "Reception Glamour",
    description:
      "Welcome your guests with luxury and style. Our reception decorations include sparkling lights, creative stage designs, and floral elegance for picture-perfect moments.",
    image: Reception,
  },
  {
    title: "Corporate & Office Events",
    description:
      "From product launches to office parties, we design professional yet lively decorations that add class and energy to your workplace celebrations.",
    image: Office,
  },
  {
    title: "Grand Hall Décor",
    description:
      "Turn grand halls into breathtaking celebration spaces. With stylish drapes, floral artistry, and modern lighting, we create décor that wows every guest.",
    image: GrandHall,
  },
];

  

  return (
   <div className="container ">
  <div className="row justify-content-center">
    {services.map((service, index) => (
      <div
        className="col-md-6 mb-4 d-flex mt-5"
        key={index}
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      >
        <div className="card border-0 shadow rounded-3 service-card h-100 d-flex flex-column">
          <img
            src={service.image}
            alt={service.title}
            className="card-img-top service-img"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title service-agnee-d-font">{service.title}</h5>
            <p className="card-text text-light flex-grow-1">{service.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  );
}
