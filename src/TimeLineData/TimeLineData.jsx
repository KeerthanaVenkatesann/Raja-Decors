// import React, { useEffect } from "react";
// import "./TimeLineData.css"; 
// import Aos from "aos";
// import Clients from "../Pages/Clients/Clients";
// import LineAnimations from "../LineAnimations/LineAnimations";

// const timelineData = [
//   { id: 1, title: "K.M Car Rentals", subtitle: "Sedans & Hatchbacks", description: "K.M Car Rentals offers a wide range of sedans and hatchbacks for daily and long-term rental to suit your travel needs." },
//   { id: 2, title: "KM Vans & Trucks", subtitle: "Al Ain & Abu Dhabi", description: "KM Vans & Trucks provides reliable van and truck rentals for moving and transport services across Al Ain and Abu Dhabi." },
//   { id: 3, title: "Safa Vehicle Hire", subtitle: "SUV & 4x4 - Abu Dhabi", description: "Safa Vehicle Hire specializes in renting out SUVs and 4x4s, perfect for off-road adventures and city driving." },
//   { id: 4, title: "Al Sadaf Rentals", subtitle: "Luxury Cars - Electra St, Abu Dhabi", description: "Al Sadaf Rentals offers luxury car rentals, ideal for special occasions, corporate events, and VIP transportation." },
//   { id: 5, title: "Sadaf Car Leasing", subtitle: "Mussafah, Abu Dhabi", description: "Sadaf Car Leasing offers competitive pricing on car rentals, catering to both short-term and long-term needs." },
//   { id: 6, title: "EMG Vehicle Rentals", subtitle: "Abu Dhabi", description: "EMG Vehicle Rentals is your go-to for a variety of vehicles, from compact cars to family-sized options." },
//   { id: 7, title: "Easy Pick Rentals", subtitle: "Abu Dhabi", description: "Easy Pick Rentals offers a fleet of vehicles, including sedans and SUVs, to meet your everyday rental needs." },
//   { id: 8, title: "Al Mushrif Car Hire", subtitle: "Abu Dhabi", description: "We offer affordable car hire services at Al Mushrif, ensuring convenient transportation for everyone." },
//   { id: 9, title: "Wear Mart Car Rentals", subtitle: "Al Falah & Mussafah - Abu Dhabi", description: "Wear Mart Car Rentals provides flexible rental options for vehicles that keep your travel comfortable and hassle-free." },
//   { id: 10, title: "The H Auto Rentals", subtitle: "Sole Proprietorship LLC", description: "The H Auto Rentals offers professional vehicle rental services with flexible terms and affordable pricing." },
//   { id: 11, title: "Senan Vehicle Hire", subtitle: "UMQ", description: "Senan Vehicle Hire specializes in short-term car rentals, offering a wide selection of vehicles at competitive rates." },
//   { id: 12, title: "Smile Rite Rent-A-Car", subtitle: "Khalifa City", description: "Smile Rite Rent-A-Car ensures a smooth, comfortable driving experience with a fleet of well-maintained vehicles." },
//   { id: 13, title: "Emirates Car Rentals", subtitle: "Abu Dhabi", description: "Emirates Car Rentals offers reliable vehicles for all your transport needs, whether for business or leisure." },
//   { id: 14, title: "Whitefield Car Hire", subtitle: "Khalifa Park", description: "Whitefield Car Hire provides budget-friendly options for all kinds of rental vehicles, tailored to your journey." },
//   { id: 15, title: "One to Ten Vehicle Rentals", subtitle: "Sole Proprietorship LLC - Abu Dhabi", description: "One to Ten Vehicle Rentals offers a diverse range of rental cars, catering to individuals and businesses alike." },
//   { id: 16, title: "New Alwafa Rent-A-Car", subtitle: "Abu Dhabi", description: "New Alwafa Rent-A-Car provides affordable car rental services to help you explore Abu Dhabi and beyond." },
//   { id: 17, title: "Lulu Vehicle Rentals", subtitle: "UMQ", description: "Lulu Vehicle Rentals offers a large selection of cars for both short-term and long-term rentals, ensuring a perfect fit for your needs." },
//   { id: 18, title: "Musafah City Car Rentals", subtitle: "Abu Dhabi", description: "Musafah City Car Rentals offers a variety of vehicles at great rates, ensuring convenience for residents and visitors alike." },
//   { id: 19, title: "Al Madina Rent-A-Car", subtitle: "Abu Dhabi", description: "Al Madina Rent-A-Car guarantees a seamless rental experience with our wide selection of vehicles in Abu Dhabi." },
//   { id: 20, title: "Al Arz Car Rentals", subtitle: "Dubai", description: "Al Arz Car Rentals specializes in providing premium vehicles for rent in Dubai, offering quality service and affordable rates." },
//   { id: 21, title: "Rainbow Vehicle Hire", subtitle: "Abu Dhabi", description: "Rainbow Vehicle Hire offers reliable, safe, and affordable vehicle rental services in Abu Dhabi." },
// ];


// const TimeLineData = () => {
//     useEffect(() => {
//         Aos.init({ duration: 600 }); // Initialize AOS
//       }, []);
//   return (
//     <section id="timeline" className="mt-5">
//     <Clients />
//       <div className="demo-card-wrapper ">
  
//         {timelineData.map((item) => (
//           <div className={`demo-card  demo-card--step${item.id}`} key={item.id}  data-aos="fade-up">
      
//             <div className="head">
//               <div className="number-box text-danger">
//                 <span>{item.id < 10 ? `0${item.id}` : item.id}</span>
//               </div>
//               <h2><span className="small">{item.title}</span> {item.subtitle}</h2>
//             </div>
//             <div className="work-clients">
//               <p>{item.description}</p>
             
//             </div>
//           </div>
//         ))}
//       </div>
//       <LineAnimations />
//     </section>
//   );
// };

// export default TimeLineData;



import React, { useEffect } from "react";
import "./TimeLineData.css"; 
import Aos from "aos";
import "aos/dist/aos.css";
import Clients from "../Pages/Clients/Clients";
import LineAnimations from "../LineAnimations/LineAnimations";

const timelineData = [
  { id: 1, title: "Wedding Wonders", subtitle: "Grand & Elegant", description: "Transform your wedding into a breathtaking celebration with custom floral designs, lighting, and thematic setups that reflect your love story." },
  { id: 2, title: "Royal Stage Designs", subtitle: "For Every Occasion", description: "We craft stunning stages with modern artistry and traditional touch — the perfect focal point for weddings, receptions, and events." },
  { id: 3, title: "Home Interiors", subtitle: "Luxury Living Spaces", description: "From cozy corners to lavish living rooms, we create interior designs that blend beauty, comfort, and functionality." },
  { id: 4, title: "Corporate Events", subtitle: "Stylish & Professional", description: "Make lasting impressions with creative decor for conferences, product launches, and office celebrations." },
  { id: 5, title: "Floral Fantasy", subtitle: "Fresh & Artistic", description: "Exclusive floral arrangements and installations that bring vibrance, fragrance, and elegance to any occasion." },
  { id: 6, title: "Creative Lighting", subtitle: "Glow with Elegance", description: "Set the mood with enchanting lighting concepts — from fairy lights to chandeliers, we redefine ambiance." },
  { id: 7, title: "Cultural Themes", subtitle: "Tradition Meets Innovation", description: "Unique thematic setups inspired by Indian culture, art, and heritage, brought to life with modern decor ideas." },
  { id: 8, title: "Outdoor Magic", subtitle: "Lawn & Garden Events", description: "Transform open spaces into dream venues with creative tents, stages, and eco-friendly installations." },
];

const TimeLineData = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true }); // AOS initialization
  }, []);

  return (
    <section id="timeline" className="mt-5">
      <Clients />
      <div className="demo-card-wrapper">
        {timelineData.map((item, index) => (
          <div
            className={`demo-card demo-card--step${item.id}`}
            key={item.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            <div className="head">
              <div className="number-box text-danger">
                <span>{item.id < 10 ? `0${item.id}` : item.id}</span>
              </div>
              <h2>
                <span className="small">{item.title}</span> {item.subtitle}
              </h2>
            </div>
            <div
              className="work-clients"
              data-aos="zoom-in"
              data-aos-delay={200 + index * 100}
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <LineAnimations /> */}
    </section>
  );
};

export default TimeLineData;
