import React from 'react';
import './Inspiration.css';
import Inspirations from "../Assets/Products.png";
import { useNavigate } from 'react-router-dom';

const Inspiration = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/shop'); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="inspiration-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>50+ Beautiful rooms inspiration</h1>
          <p>
            Our designer already made a lot of beautiful <br></br>prototype of rooms that inspire you.
          </p>
          <button className="explore-button" onClick={handleNavigation}>
            Explore More
          </button>
        </div>
        <div className="image-section">
          <div className="image-wrapper" onClick={handleNavigation}>
            <img src={Inspirations} alt="Room 1" />
            <div className="image-caption">
              <p>01 — Bed Room</p>
              <h2>Inner Peace</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
