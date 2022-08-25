import React from 'react';
import './nav_bar.css';
import Popup from 'reactjs-popup';
import ReactDOM from 'react-dom/client';
import{Link} from "react-router-dom";

function nav_bar() {
  return (
    <div class="nav_bar">
    <li>
      <a href="/">Home</a>
      <a href="/req">Find Helper</a>
      <Popup trigger={<href className="popup"> About Us</href>} >
      <div>Popup content here !!</div>
      </Popup>
      <a href="">Contact Us</a>
      <Popup trigger={<href className="popup"> Terms & Conditions</href>} >
      <div>Terms & Conditions !!</div>
      </Popup>
    </li>
  </div>

  );
}

export default nav_bar;