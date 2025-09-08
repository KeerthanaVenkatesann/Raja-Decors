// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./Carousel.css"; // Import custom CSS
// import { LuCheckCircle } from "react-icons/lu";

// export default function Carousel() {
//   return (
//     <div className="container-fluid  parallax-three-c">
//        <ul className="bg-bubbles-three">
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
//       <div className="row  container">
//         {/* Carousel Section */}
//         <div className="col-md-4 mb-4 ">

//           <div
//             id="carouselExampleIndicators"
//             className="carousel slide mt-5 pt-3"
//             data-ride="carousel"
//           >
//             <ol className="carousel-indicators">
//               <li
//                 data-target="#carouselExampleIndicators"
//                 data-slide-to="0"
//                 className="active list-carousel"
//               ></li>
//               <li
//                 data-target="#carouselExampleIndicators"
//                 data-slide-to="1"
//                 className="list-carousel"
//               ></li>
//               <li
//                 data-target="#carouselExampleIndicators"
//                 data-slide-to="2"
//                 className="list-carousel"
//               ></li>
//             </ol>
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <img
//                   className="d-block "
//                   src="https://i.pinimg.com/564x/26/f5/9d/26f59de18de919c7fef90ea5a897c0a0.jpg"
//                   alt="First slide"
//                 />
//                 <div className="carousel-caption d-none d-md-block"></div>
//               </div>
//               <div className="carousel-item">
//                 <img
//                   className="d-block "
//                   src="https://i.pinimg.com/564x/68/02/52/6802520296eb80c07a8846832f110669.jpg"
//                   alt="Second slide"
//                 />
//                 <div className="carousel-caption d-none d-md-block"></div>
//               </div>
//               <div className="carousel-item">
//                 <img
//                   className="d-block "
//                   src="https://i.pinimg.com/564x/9e/1b/77/9e1b774f900da65901f3694a641a26e2.jpg"
//                   alt="Third slide"
//                 />
//                 <div className="carousel-caption d-none d-md-block"></div>
//               </div>
//             </div>
//             <a
//               className="carousel-control-prev"
//               href="#carouselExampleIndicators"
//               role="button"
//               data-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//             </a>
//             <a
//               className="carousel-control-next"
//               href="#carouselExampleIndicators"
//               role="button"
//               data-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//             </a>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="col-md-8 mb-4">
//           <div className=" h-100">
//             <div className="card-body">
//               <h5 className="card-title fs-1 text-primary">
//                 Why Us<span className="text-danger">?</span>
//               </h5>
//               <p className="card-text ">
//               <LuCheckCircle style={{ color: 'red' }} className="mx-2 text-danger"/>We Will Make Absolutely Any Place Clean, Neat & Tidy.
//               </p>
//               <p className="card-text ">
//               <LuCheckCircle style={{ color: 'red' }} className="mx-2 text-danger"/>Customer satisfaction is our prime concern. We have no arguments
//                 with competitors who charge less. They know what quality &
//                 service they provide.
//               </p>
//               <p className="card-text "><LuCheckCircle style={{ color: 'red' }} className="mx-2 text-danger" />Agnee, is endeavoring to make available of internationally experienced / certified professionals with having thorough knowledge of House Keeping to offer the best talent and skills to their esteemed clients.</p>
//               <p className="card-text "><LuCheckCircle style={{ color: 'red' }} className="mx-2 text-danger" />We incorporate health & safety and environment (HSE) management systems in all phases & our business activities and have pledged continuous improvement to protect the safety of our people & the environment.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Carousel.css"; // Import custom CSS
import { LuCheckCircle } from "react-icons/lu";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

export default function Carousel() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing option
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="container-fluid parallax-three-c">
      <ul className="bg-bubbles-three">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="row container carousel-div-why-us">
        {/* Carousel Section */}
        <div className="col-lg-4  mb-4" data-aos="fade-right">
          <div
            id="carouselExampleIndicators"
            className="carousel slide mt-5 pt-3"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active list-carousel"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
                className="list-carousel"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
                className="list-carousel"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block  slide-img"
                  src="https://i.pinimg.com/736x/e9/e5/1f/e9e51fd9ff5bac016bf5d2e33ee6bf2c.jpg"
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block  slide-img"
                  src="https://i.pinimg.com/736x/9e/ee/63/9eee63e07f307298ee67426cc422fbeb.jpg"
                  alt="Second slide"
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block  slide-img"
                  src="https://i.pinimg.com/736x/40/94/c3/4094c3317acf535325bd79071b6f480f.jpg"
                  alt="Third slide"
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>

        {/* Content Section */}
        <div className="col-lg-8 mb-4" data-aos="fade-left">
          <div className="h-100">
            <div className="card-body">
              <h5 className="card-title why-us text-primary">
                Why Us<span className="text-danger">?</span>
              </h5>
              <p className="card-text ">
                <LuCheckCircle
                  style={{ color: "red" }}
                  className="mx-2 text-danger"
                />
                We’ll Make Every Journey Smooth, Safe, and Stress-Free.
              </p>
              <p className="card-text ">
                <LuCheckCircle
                  style={{ color: "red" }}
                  className="mx-2 text-danger"
                />
                Customer satisfaction is our top priority. While some may offer
                lower prices, we stand by the unmatched quality and service we
                provide.
              </p>
              <p className="card-text ">
                <LuCheckCircle
                  style={{ color: "red" }}
                  className="mx-2 text-danger"
                />
                RentEase is committed to providing internationally experienced
                and certified professionals with in-depth knowledge of the
                rental industry, ensuring the best talent and skills are
                available to our valued customers.
              </p>
              <p className="card-text ">
                <LuCheckCircle
                  style={{ color: "red" }}
                  className="mx-2 text-danger"
                />
                At RentEase, we integrate health, safety, and environmental
                (HSE) management systems into every aspect of our operations. We
                are committed to continuous improvement, ensuring the safety of
                our customers, employees, and the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
