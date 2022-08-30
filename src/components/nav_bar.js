import React from 'react';
import './nav_bar.css';
import Popup from 'reactjs-popup';
import Icon from './images/icon.png';
function nav_bar() {
  return (
    <div className="nav_bar">
      <div className='user'>
      <img src={Icon} alt='Icon' className="icon-img"></img>
      <Popup trigger={<href className="popup">Mariam, U</href>} >
      <div className='popup-content'>Log Out</div>
      </Popup>
      </div>
    <li>
      <a href="/">Home</a>
      <a href="/req">Find Helper</a>
      <a href="/about_us">About Us</a>
      <a href="/contact_us">Contact Us</a>
      <a href="/terms">Terms & Conditions</a>
    </li>
  </div>

  );
}

export default nav_bar;