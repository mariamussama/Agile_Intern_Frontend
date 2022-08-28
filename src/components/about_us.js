import React from 'react';
import './about_us.css';
import Nav_bar from './nav_bar';
import { ReactComponent as Logo } from './images/logo.svg';
import ReactDOM from 'react-dom/client';

function About_us() {
  return (
    <div className="About_us">
      <Nav_bar/>
          <div class="container">
          <div className='Logo-box'>
          <Logo viewBox='-50 -50 700 700'/></div>
          <div className='title'>About Us</div>
         <div className='about-content'>Description for about us</div>
      </div> 
    </div>

  );
}

export default About_us;