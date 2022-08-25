import React from 'react';
import './home.css';
import Nav_bar from './nav_bar';
import { ReactComponent as Logo } from './images/logo.svg';
import ReactDOM from 'react-dom/client';
import{useNavigate} from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/req';
    navigate(path);
  };
  return (
    <div className="Home">
      <Nav_bar/>
          <div class="container">
          <div className='Logo-box'>
          <Logo viewBox='-50 -50 700 700'/></div>
          <div className='title'>Looking for a Nanny ?</div>
         <div className='home-content'>You came to the right place</div>
         <button className='request' onClick={routeChange} >Request a Helper Now</button>
      </div> 
    </div>

  );
}

export default Home;