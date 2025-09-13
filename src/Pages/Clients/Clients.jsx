import React, { useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles
import './Clients.css';  // Your custom CSS

import icon1 from '../../assets/clientsONE.jpg';
import icon2 from '../../assets/Clientstwo.jpg';
import icon3 from '../../assets/ClientsThree.jpg';
import icon4 from '../../assets/clientsfour.jpg';
import icon5 from '../../assets/clientfive.png';
// import icon5 from '../../assets/icon5.jpg';
// import icon6 from '../../assets/icon6.jpg';
// import icon7 from '../../assets/icon7.jpg';
// import icon8 from '../../assets/icon8.jpg';
// import icon9 from '../../assets/icon9.jpg';
// import icon10 from '../../assets/icon10.jpg';
// import icon11 from '../../assets/icon11.jpg';
// import icon12 from '../../assets/icon12.jpg';

// Define a list of Clients with unique ids
const Clientslogo = [
  { id: 1, name: 'icon1', src: icon1 },
  { id: 2, name: 'icon2', src: icon2 },
  { id: 3, name: 'icon3', src: icon3 },
  { id: 4, name: 'icon4', src: icon4 },
  { id: 5, name: 'icon5', src: icon5 },
  // { id: 6, name: 'icon6', src: icon6 },
  // { id: 7, name: 'icon7', src: icon7 },
  // { id: 8, name: 'icon8', src: icon8 },
  // { id: 9, name: 'icon9', src: icon9 },
  // { id: 10, name: 'icon10', src: icon10 },
  // { id: 11, name: 'icon11', src: icon11 },
  // { id: 12, name: 'icon12', src: icon12 },
];

function Clients() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  // Customize AOS here
  }, []);

  return (
    <>        
      <h1 className='agnee-clients text-center  '>Our Clients</h1>
      <div className="logo-container">
        {Clientslogo.map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={logo.name}
            className="grayscale"  // Default class is grayscale
            data-aos="fade-up"  // AOS animation
          />
        ))}
      </div>
     
    </>
  );
}

export default Clients;
