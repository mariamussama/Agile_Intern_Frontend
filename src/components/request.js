import React from 'react';
import Nav_bar from './nav_bar';
import './request.css';
import ReactDOM from 'react-dom/client';
import Select from 'react-select';
import{useNavigate} from "react-router-dom";
import{useRef} from 'react';


function Request() {
  
  let navigate = useNavigate();

  const NameInputRef=useRef();
  const EmailInputRef=useRef();
  const AddressInputRef=useRef();
  const LandlineInputRef=useRef();
  const BudgetInputRef=useRef();
  const MobileInputRef=useRef();
  const LanguageInputRef=useRef();
  const KidsInputRef=useRef();
  const DateInputRef=useRef();
  const DaysInputRef=useRef();

  function submitHandler(event){
    event.preventDefault();
    const enteredName=NameInputRef.current.value;
    const enteredEmail=EmailInputRef.current.value;
    const enteredAddress=AddressInputRef.current.value;
    const enteredLandline=LandlineInputRef.current.value;
    const enteredBudget=BudgetInputRef.current.value;
    const enteredMobile=MobileInputRef.current.value;
    const enteredLanguage=LanguageInputRef.current.value;
    const enteredKids=KidsInputRef.current.value;
    const enteredDate=DateInputRef.current.value;
    const enteredDays=DaysInputRef.current.value;

    const data={
      Name: enteredName,
      Email: enteredEmail,
      Address:enteredAddress,
      Landline:enteredLandline,
      Budget:enteredBudget,
      Mobile:enteredMobile,
      Language:enteredLanguage,
      Kids:enteredKids,
      Date:enteredDate,
      Days:enteredDays,
    };

    console.log(data);
    navigate('/done');
  }
  return (
    <div className="Request">
      <Nav_bar/>
      <div class='req_title'>
        Request a Nanny
      </div>
      <div class='req_subtitle'>
        You are just few steps away!
      </div>
      <div class='req_container'>
        <div class='guide'>
        Please fill all the fileds are required
        </div>
              <form action="#" onSubmit={submitHandler}>
        <div class="user-details">
          <div class="input-box">
            <span class="details"><img src={require('./images/Name.jpeg')} alt="Full name"/> </span>
            <input type="text" placeholder="Contact Person Name" required ref={NameInputRef}></input>
          </div>
          <div class="input-box">
            <span class="details"><img src={require('./images/Email.jpeg')} alt="Email"/> </span>
            <input type="text" placeholder="Contact Person Email" required ref={EmailInputRef}></input>
          </div>
          <div class="input-box">
            <span class="details"><img src={require('./images/address.jpeg')}alt="address"/> </span>
            <input type="text" placeholder="Address"  required ref={AddressInputRef}></input>

          </div>
          <div class="input-box">
            <span class="details"><img src={require('./images/Landline.jpeg')}alt="Landline"/> </span>
            <input type="text" placeholder="Land Line" required ref={LandlineInputRef}></input>
          </div>
          <div class="input-box">
            <span class="details"><img src={require('./images/Phone.jpeg')} alt="Phone"/> </span>
            <input type="text" placeholder="Moblie" required ref={MobileInputRef}></input>
          </div>
          <div class="input-box">
            <span class="details"><img src={require('./images/Budget.jpeg')} alt="Full name"/> </span>
            <input type="text" placeholder="Budget" required ref={BudgetInputRef}></input>
          </div>
        <div class="input-box">
          <span class="details"><img src={require('./images/Language.jpeg')} alt="Full name"/> </span>
          <select required id='Languages' ref={LanguageInputRef}  className='select'>
            <option value="">Prefered Language</option>
            <option value='Arabic'> Arabic</option>
            <option value='English'> English</option>
          </select>
        </div>
      <div class="input-box">
        <span class="details"><img src={require('./images/Kids.jpeg')}alt="Full name"/> </span>
        <input type="text" placeholder="Kids Age Group" required ref={KidsInputRef}></input>
      </div>
      <div class="input-box">
        <span class="details"><img src={require('./images/Calender.jpeg')} alt="Full name" position='absolute'/> </span>
        <input type="text" placeholder="Starting Day yyyy/mm/dd" required ref={DateInputRef}></input>
      </div>
      </div>
      <div  className='Days'>
      <label>
          <input type="checkbox" value='Saturday' ref={DaysInputRef} /> Saturday
      </label>
      <label>
          <input type="checkbox" value='Sunday' ref={DaysInputRef} /> Sunday
      </label>
    <input type='checkbox' value='monday'>
    </input>Monday
    <input type='checkbox' value='tuesday'>
    </input>Tuesday
    <input type='checkbox' value='wednesday'>
    </input>Wednesday
    <input type='checkbox' value='thursday'>
    </input>Thursday
    <input type='checkbox' value='friday'>
    </input>Friday
  </div>
      <div class="button"  >
    <input type="submit" value="Request Now"></input>
  </div>
      </form>
    </div>
    </div>

  );
}


export default Request;