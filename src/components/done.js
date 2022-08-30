import React from 'react';
import Nav_bar from './nav_bar';
import './done.css';
import { ReactComponent as Recieved } from './images/Recieved.svg';
import{useNavigate} from 'react-router-dom';

function Done() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/';
    navigate(path);
  };
  return (
    <div className="Done">
        <Nav_bar/>
        <div className='submit'>
        We have successfully received your request and we will contact you soon
        </div>
        <div className='Recieved'>
          <Recieved width="1100" height="600" viewBox='0 0 350 450'/>
        </div>
        <button className='Return' onClick={routeChange} >Return Home</button>
    </div>

  );
}
export default Done;