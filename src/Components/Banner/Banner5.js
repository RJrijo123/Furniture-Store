import React from 'react';
import './Banner.css';
import banner from './Group 78.png';

const Banner5 = () => {
  return (
    <div className="banner">
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>About</h1>
        <p>
          <span>Home</span> &gt; <span>About</span>
        </p>
      </div>
    </div>
  );
}

export default Banner5;
