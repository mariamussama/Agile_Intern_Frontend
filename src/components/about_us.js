import React from 'react';
import './about_us.css';
import Nav_bar from './nav_bar';
import { ReactComponent as Logo } from './images/logo.svg';

function About_us() {
  return (
    <div className="About_us">
      <Nav_bar/>
          <div className="container">
          <div className='Logo-box'>
          <Logo viewBox='-50 -50 700 700'/></div>
          <div className='title'>About Us</div>
         <div className='about-content'>If your life is a bit busy and you need a trusted source to help out with your kids at home,
         here is the right place to come.</div>
      </div> 
    </div>

  );
}

export default About_us;