import React from "react";
import "./Carousel.css";

function importAll(r) {
  return r.keys().map(r);
}

export default function Carousel() {
  // Import all .jpg files from assets/images
  const images = importAll(require.context("../../../assets/Gallery", false, /\.jpg$/));


  return (
    <div className="card-outer-area">
<h1 className="text-center craft">Crafted With Love</h1>
    <div className="cards-container">
      {images.map((src, index) => (
        <div key={index} className="card">
          <img src={src} alt={`Image ${index + 1}`} />
          <div className="card-overlay">
            <p>Our Arts</p>
          </div>
        </div>
      ))}
    </div></div>
  );
}
