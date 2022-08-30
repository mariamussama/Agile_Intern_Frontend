import React from 'react';
import './contact_us.css';
import Nav_bar from './nav_bar';
import { ReactComponent as Logo } from './images/logo.svg';

function Contact_us() {
  return (
    <div className="Contact_us">
      <Nav_bar/>
          <div className="container">
          <div className='Logo-box'>
          <Logo viewBox='-50 -50 700 700'/></div>
          <div className='title'>Contact Us</div>
         <div className='contact-content'>Contact Us content</div>
      </div> 
    </div>

  );
}

export default Contact_us;