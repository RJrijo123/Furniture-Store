import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import image from '../Assets/scandinavian-interior-mockup-wall-decal-background 1.png';

const Hero = () => {
    const navigate = useNavigate(); 

  const handleBuyNow = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='hero'>
      <div className="hero-right">
        <img src={image} alt="" />
        <div className="hero-box">
          <h2>New Arrival</h2>
          <h1>Discover Our New Collection</h1>
          <p>Explore our latest collection, crafted with care and designed to elevate your style. Unveil a new you with our exclusive range that combines comfort and elegance.</p>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
