import React from 'react';
import './About.css';
import aboutImage from '../Assets/montage.png';
import Banner5 from '../Banner/Banner5';

const About = () => {
  return (
    <div>
      <Banner5/>
    
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <div className="about-divider"></div>
        <div className="about-text">
          <p>
            Welcome to Furniro, where we are passionate about providing high-quality furniture
            that brings style, comfort, and functionality to your living spaces. Our mission is 
            to offer a wide range of beautifully designed furniture that caters to different tastes 
            and budgets, ensuring that everyone can create their dream home.
          </p>
          <img src={aboutImage} alt="About Us" className="about-image" />
          <p>
            Our journey began with a simple idea: to create furniture that is not only aesthetically 
            pleasing but also durable and practical. Over the years, we have grown into a trusted 
            brand known for our commitment to quality and customer satisfaction.
          </p>
          <p>
            Whether you're looking for modern, contemporary, or classic designs, we have something 
            for everyone. Our team of skilled artisans and designers work tirelessly to bring you 
            the latest trends and timeless pieces that you will cherish for years to come.
          </p>
        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  </div>
  );
}

export default About;
