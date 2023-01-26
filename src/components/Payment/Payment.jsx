import React from 'react'
import { NavLink } from 'react-router-dom'
import './Payment.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import Toast from './Toast';



function Payment({closePayment}) {
  const [toast, setToast] = useState(false);
  
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userPaymentOption, setuserPaymentOption] = useState('');
  const [userCardHolderName, setuserCardHolderName] = useState('');
  const [userCardExpiry, setuserCardExpiry] = useState('');
  const [userCardCVV, setuserCardCVV] = useState('');

  const handleFirstName = (e) => {
    setfirstName(e.target.value);
    // console.log(firstName); 
  }

  const handleUserEmail = (e) => {
    setuserEmail(e.target.value);
  }

  const handleuserPaymentOption = (e) => {
    setuserPaymentOption(e.target.value);
  }

  const handleuserCardHolderName = (e) => {
    setuserCardHolderName(e.target.value);
  }

  const handleuserCardExpiry = (e) => {
    setuserCardExpiry(e.target.value);
  }

  const handleuserCardCVV = (e) => {
    setuserCardCVV(e.target.value);
  }

  const handleLastName = (e) => {
    setlastName(e.target.value);
    // console.log(firstName); 
  }

  

  const Popup = () => {
    setToast(true);
    // closePayment();
    setTimeout(() => {
      closePayment()
    },2000);
    
  }

  return (
    // <NavLink>
    <div className='wrapper'>
    
    <div className='payment'>
    <h1>Payment</h1>
    {toast && <Toast/>}
    <div className='pay-detail'>
    <label htmlFor="" >First Name:</label>
    <input type="text" placeholder='First Name Here' onChange={(e) => handleFirstName(e)} value={firstName}/>
    <label htmlFor="">Last Name:</label>
    <input type="text" placeholder='Last Name here' onChange={(e) => handleLastName(e)} value={lastName}/>
    <label htmlFor="">Email:</label>
    <input type="email" placeholder='Email here' onChange={(e) => handleUserEmail(e)} value={userEmail}/>
    </div>
    <div className='payment-option'>
    <label htmlFor="">Payment Option</label>
    <select name="payment" id="" onChange={(e) => handleuserPaymentOption(e)} value={userPaymentOption}>
    <option value="Credit card">Credit card</option>
    <option value="Debit card">Debit card</option>
    <option value="UPI">UPI</option>
    </select>
    </div>
    <div className="card-detail">
     <label htmlFor="">Card holder Name</label>
     <input type="text" onChange={(e) => handleuserCardHolderName(e)} value={userCardHolderName}/>
     <label htmlFor="">Expiration</label>
     <input type="date" onChange={(e) => handleuserCardExpiry(e)} value={userCardExpiry}/>
     <label htmlFor="">CVV</label>
     <input type="password" maxLength="3" onChange={(e) => handleuserCardCVV(e)} value={userCardCVV}/>
    </div>
    <div className="button-container">
      <button className='btn-danger' onClick={closePayment}>Cancel</button>
      <button className='btn-success' onClick={Popup}>Proceed</button>
    </div>
    </div>
    </div>


    //  {/* </NavLink> */}
  )
}

export default Payment
