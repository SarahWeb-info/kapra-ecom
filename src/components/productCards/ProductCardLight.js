import React from 'react'
import Img from '../../imgs/img1.jpg';
import { BsHeart , BsCart } from "react-icons/bs";
import { SiCodereview } from "react-icons/si";
import './productCard.css';

export default function ProductCardLight({ title = "product" }) {
  return (
    <div className='productCard productCard-Column highlighted'>
      <div className='colouredDiv'></div>  
      
      <div className='productImg'>
        <img src={Img} alt="" />
        <div className='productImg-Btns'>
            <button><BsHeart /></button>
            <button><BsCart /></button>
            <button><SiCodereview /></button>
        </div>
      </div>

      <div className='productDetail'>
          <p className='title' style={{fontWeight : '600' , fontSize : '1.5rem'}}>{title}</p>  
          <p className='productLabels'>labels</p>
          <p>$ <span style={{ textDecoration: 'line-through',color : 'red' }}>23</span> 21 </p>
      </div>

    </div>
  )
}
