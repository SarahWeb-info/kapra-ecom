import React from 'react';
import {  BsX  } from "react-icons/bs";
import '../css/sidedivs.css';

export default function CheckoutSideDiv({ onClose }) {

    const handleHide = () => {
        console.log("in handle hide");
        if (onClose) {
          onClose();
        }
      }
  
    const showInput =(e)=>{
      
      const inputDiv = e.currentTarget.closest('.inputDiv');
      const input = inputDiv.querySelector('input');
      input.style.display = 'block';
    }
      
    return (
    <div className='loginSideDiv' >
      <div className='crossBtnParent'>
        <span>Login</span>
        <button className='crossBtn' onClick={handleHide} ><BsX/></button>
      </div>

      <form action="">

        <div onClick={(e)=>showInput(e)} className='inputDiv'>
          <label htmlFor="signInEmail">Email <span className='highlighter'>*</span></label>
          <input type="text" id="signInEmail" />
        </div>

        <div onClick={(e)=>showInput(e)} className='inputDiv'>
          <label htmlFor="signInPassword">Password <span className='highlighter'>*</span></label>
          <input type="text" id="signInPassword" />
        </div>


        <a href="http://" target="_blank" rel="noopener noreferrer">Forgot your password? </a>

        <button type="submit" className='sideMenuBtns'>Sign In</button>

        <a href="http://" target="_blank" rel="noopener noreferrer">New Customer? Create an account</a>
      </form>
    </div>
  )
}
