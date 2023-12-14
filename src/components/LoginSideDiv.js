import React from 'react';
import {  BsX  } from "react-icons/bs";

export default function CheckoutSideDiv({ onClose }) {

    const handleHide = () => {
        console.log("in handle hide");
        if (onClose) {
          onClose();
        }
      }
  
    return (
    <>
      <div className='noBtn d-inline-flex justify-content-end align-items-center'>
        <BsX onClick={handleHide} />
      </div>  
      login
    </>
  )
}
