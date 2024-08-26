import React from 'react';
import './Contact.css';
import Banner3 from '../Banner/Banner3';
const Contact = () => {
  return (
    <div>
      <Banner3/>
    <div className="contact-container">
      
      <div className="contact-info">
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services, Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        <div className="contact-details">
          <div className="detail-item">
            <span className="icon">📍</span>
            <p><strong>Address</strong><br />irinjalakuda, Thrissur, Kerala </p>
          </div>
          <div className="detail-item">
            <span className="icon">📞</span>
            <p><strong>Phone</strong><br />Mobile: +(91) 7907204559 <br />Hotline: +(91) 7356893072</p>
          </div>
          <div className="detail-item">
            <span className="icon">⏰</span>
            <p><strong>Working Time</strong><br />Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" placeholder="Abc" />

        <label htmlFor="email">Email address</label>
        <input type="email" id="email" placeholder="Abc@def.com" />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder="This is an optional" />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Hi! I’d like to ask about"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
