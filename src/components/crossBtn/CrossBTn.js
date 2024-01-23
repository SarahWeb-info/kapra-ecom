import React from 'react'
import {  BsX } from "react-icons/bs";
import './crossBtn.css';

export default function CrossBTn({title="" , onClose }) { 
    
  return (
    <div className='crossBtnParent'>
        <span>{title}</span>
        <button className='crossBtn' onClick={onClose} ><BsX/></button>
    </div>
  )
}
