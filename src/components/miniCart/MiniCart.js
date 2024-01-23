import React, {useState ,useEffect} from 'react';
import {  BsX } from "react-icons/bs";
import ProductText from '../productText/ProductText';
import QuantityDiv from '../productQuantityDiv/QuantityDiv';
import ProductPrice from "../productPrice/ProductPrice";
import './miniCart.css';

export default function MiniCart({ onClose , goToCart , productId , propTitle , currency , origPrice ,discountPrice}) {

  const [title, setTitle] = useState(propTitle);
  const [quantity, setQuantity] = useState(1);
  
  const hideFadeBg = () => {
    if (onClose) {
      onClose();
    }
  }

  const handleQuantityChange=(x)=>{
    setQuantity(x);
  }

  const showCart =()=>{
    goToCart(productId , quantity );
  }

  return (
    <>
    <div className='fadeBg' onClick={hideFadeBg} style={{zIndex:'104'}}></div>

      <div className='centerFixed miniCart'>
        
        <button onClick={hideFadeBg} className='cross'><BsX /></button>

        <div className='columnEvenly' style={{background: 'white'}}>
          
          <ProductText  textClass = "productTitle"  text = {title}  maxTextLength = {50}  />

          <ProductPrice currency = {currency}  discountPrice = {discountPrice}  origPrice = {origPrice} />

          <QuantityDiv handleQuantityChange = {handleQuantityChange} additionalClass = " shadowIn " />

          <button className='customDarkBtn'  onClick={showCart}> Add to Cart </button>
        </div> 
      </div>  
    </>
  )
}
