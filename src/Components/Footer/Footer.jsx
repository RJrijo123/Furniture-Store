import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h1>Funiro.</h1>
          <address>
            Irinjalakuda Thrissur,<br />
            Kerala
          </address>
        </div>
        <div className="footer-links">
          <div>
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="/">Payment Options</a></li>
              <li><a href="/">Returns</a></li>
              <li><a href="/">Privacy Policies</a></li>
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
            <div className="newsletter">
              <input type="email" placeholder="Enter Your Email Address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
