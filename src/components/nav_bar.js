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
      <a href="/about_us">About Us</a>
      <a href="/contact_us">Contact Us</a>
      <a href="/terms">Terms & Conditions</a>
    </li>
  </div>

  );
}

export default nav_bar;