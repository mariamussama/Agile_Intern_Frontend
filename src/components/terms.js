import React from 'react';
import './terms.css';
import Nav_bar from './nav_bar';
import { ReactComponent as Logo } from './images/logo.svg';
import ReactDOM from 'react-dom/client';

function Terms() {
  return (
    <div className="Terms">
      <Nav_bar/>
          <div class="container">
          <div className='Logo-box'>
          <Logo viewBox='-50 -50 700 700'/></div>
          <div className='title'>Terms & Conditions</div>
         <div className='terms-content'> Our terms and Conditions</div>
      </div> 
    </div>

  );
}

export default Terms;