// import React from "react";
// import "./About.css";
// import Aboutushead from "./Aboutushead";
// import aboutusimg from "../../src/assets/about us.jpeg";
// import { IoShieldCheckmarkOutline } from "react-icons/io5";
// import { SiCcleaner } from "react-icons/si";
// import { FaRegCalendarCheck } from "react-icons/fa6";
// import { MdOutlineMail } from "react-icons/md";
// import { BsEmojiGrin } from "react-icons/bs";
// import TimeLineData from "../TimeLineData/TimeLineData";

// const Aboutus = () => {
//   return (
//     <div>
//       <Aboutushead />

//       <div className="about-us-card  mt-5 pt-5 d-lg-flex container">
//         <div className="col-lg-8 ">
//           <h5 className="ms-1 font-new text-opacity-50 fs-4">
//             Raja Decors
//             {/* <SiCcleaner className="text-danger text-opacity-50 mx-2" /> */}
//           </h5>
//           <p className="col-md-12 col-lg-10 fs-6  mt-4">
          
//           </p>
//         </div>

//         <div className="col-lg-4 col-md-12 text-center">
//           <img src={aboutusimg} alt="" className="about-us-image " />
//         </div>
//       </div>
//       <div className="whole-about mt-5  pt-5">
//         <div className=" col-md-10  mx-auto     ">
//           <div className="para-about">
//             <div className="title-about-vision my-2 font-new text-opacity-75">
//               {" "}
//               <IoShieldCheckmarkOutline className="title-about-vision text-danger text-opacity-50 mx-2 " />
//               Our Vision
//             </div>
//             <p>
//               {" "}
//               To meet the growing demand for vehicle rentals by leveraging the latest technology
//                and ensuring complete customer satisfaction.
//             </p>
//           </div>
//           <div className="para-about">
//             <div className="title-about-vision my-2 font-new text-opacity-75">
//               <IoShieldCheckmarkOutline className="title-about-vision text-danger text-opacity-50 mx-2" />
//               Our Mission
//             </div>
//             <p>
//               {" "}
//               Our mission is to uphold our motto, "RentEase Group of Companies," by providing our customers with high-quality, reliable, and efficient vehicle rental solutions—whether for individual needs or business fleets. We are committed to supporting, training, and motivating our team to ensure a safe,
//               seamless, and customer-focused rental experience every day.
//             </p>
//           </div>
//           <div className="para-about">
//             <div className="title-about-vision my-2 font-new text-opacity-75">
//               <IoShieldCheckmarkOutline className="title-about-vision text-danger text-opacity-50 mx-2" />
//               Core Values
//             </div>
//             <p>
//             At RentEase, reliability is the foundation of everything we do. We prioritize clear communication, follow through on our promises, and always keep our customers' goals at the forefront. Whether you're a customer, vendor, or team member, we’re committed to delivering exactly what you need—right when you need it. Count on us to never let you down.
//             </p>
//             <p>
//               At RentEase, we value, reliability because we care deeply about our
//               employees & customers.
//             </p>

//             <p>
//             At RentEase, we believe our employees are our greatest asset. We foster a culture rooted in professionalism, pride, integrity, commitment, compassion, camaraderie, and care—values that drive our legacy of excellence.
//             </p>
//             <p>
//               All the activities of the RentEase are carried out by a strong
//               complement of professionally qualified and experienced personnel.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* <div className="card-last-about container col-md-7 mx-auto">
//         <div className="col-4 text-center">
//           <div className="apoint-card mx-auto"><FaRegCalendarCheck /></div>
//           <h4 className=" text-opacity-50">Book Appointment</h4>
//           <p className="text-secondary text-opacity-75 w-75 mx-auto">Just call us or fill the form with your requirement</p>
//         </div>
//         <div className="col-4 text-center">
//           <div className="apoint-card mx-auto "><MdOutlineMail /></div>
//           <h4 className=" text-opacity-50">Get Quotation</h4>
//           <p className="text-secondary text-opacity-75 w-75 mx-auto">Get an instant quotation for the work involved</p>
//         </div>
//         <div className="col-4 text-center">
//           <div className="apoint-card mx-auto "><BsEmojiGrin /></div>
//           <h4 className=" text-opacity-50">Sparkling home</h4>
//           <p className="text-secondary text-opacity-75 w-75 mx-auto">Leave it to us! We will make your home extra sparkle now!</p>
//         </div>
        
//       </div> */}

//       <TimeLineData />
//     </div>
//   );
// };

// export default Aboutus;




import React from "react";
import "./About.css";
import Aboutushead from "./Aboutushead";
import aboutusimg from "../../src/assets/about us.png";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import TimeLineData from "../TimeLineData/TimeLineData";

const Aboutus = () => {
  return (
    <div className="pt-5">
      <Aboutushead  className="about-us-card-outer pt-5 "/>
<div className="about-us-card-outer pt-5 mt-5 pb-3">
      <div className="about-us-card mt-5 pt-5 d-lg-flex container">
        <div className="col-lg-8">
          <h5 className="ms-1 font-new fs-4 mt-5">
            About Us
          </h5>
          <p className="col-md-12 col-lg-10 fs-6 mt-4 text-light">
            At Raja Decors, we transform ordinary spaces into extraordinary
            experiences. With creativity, craftsmanship, and a passion for design,
            we bring elegance and uniqueness to every project — from homes to
            events and commercial spaces.
          </p>
        </div>

        <div className="col-lg-4 col-md-12 text-center">
          <img src={aboutusimg} alt="About Raja Decors" className="about-us-image" />
        </div>
      </div></div>

      <div className="whole-about mt-5 pt-5">
        <div className="col-md-10 mx-auto">
          {/* Vision */}
          <div className="para-about">
            <div className="title-about-vision my-2 font-new text-opacity-75">
              <IoShieldCheckmarkOutline className="title-about-vision text-danger text-opacity-50 mx-2" />
              Our Vision
            </div>
            <p>
              To be the most trusted name in decor and design by delivering
              timeless elegance, innovative ideas, and a personalized touch that
              makes every space truly memorable.
            </p>
          </div>

          {/* Mission */}
          <div className="para-about">
            <div className="title-about-vision my-2 font-new text-opacity-75">
              <IoShieldCheckmarkOutline className="title-about-vision text-danger text-opacity-50 mx-2" />
              Our Mission
            </div>
            <p>
              Our mission is to create stunning, customized decor solutions that
              reflect our clients’ style and aspirations. From weddings to
              corporate events, and from interiors to exteriors, we ensure every
              project radiates beauty, precision, and excellence.
            </p>
          </div>

          {/* Core Values */}
          <div className="para-about">
            <div className="title-about-vision my-2 font-new text-opacity-75">
              <IoShieldCheckmarkOutline className="title-about-vision text-danger text-opacity-50 mx-2" />
              Core Values
            </div>
            <p>
              At Raja Decors, creativity and reliability are at the heart of
              everything we do. We believe in clear communication, delivering on
              promises, and always exceeding customer expectations.
            </p>
            <p>
              We value professionalism, innovation, and teamwork, ensuring every
              design we create blends beauty with functionality.
            </p>
            <p>
              Our commitment to quality craftsmanship and customer satisfaction
              has built long-lasting relationships and a reputation for
              excellence in the decor industry.
            </p>
          </div>
        </div>
      </div>

      <TimeLineData />
    </div>
  );
};

export default Aboutus;
