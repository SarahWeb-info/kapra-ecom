import React, {useState ,useEffect} from 'react';
import {  BsX , BsDashLg , BsPlusLg } from "react-icons/bs";
import TruncateText from '../../backend/TrancateText';

export default function MiniCart({ onClose , goToCart , propTitle , origPrice ,discountPrice}) {

  const [quantity, setQuantity] = useState(1);
  const [ title , setTitle ] = useState(propTitle);
  
  useEffect(() => {
    setTitle(TruncateText(title, 100));
  }, [title]);

  const minusQuantity=()=>{
    if (parseInt(quantity)>0) {
      setQuantity(parseInt(quantity)-1);
    }
  }

  const plusQuantity=()=>{
      setQuantity(parseInt(quantity)+1);
  }

  const hideFadeBg = () => {
    if (onClose) {
      onClose();
    }
  }

  const showCart =()=>{
    goToCart();
  }

  return (
    <>
    <div className='fadeBg' onClick={hideFadeBg} style={{zIndex:'104'}}></div>

      <div className='centerFixed miniCart'>
        
        <button onClick={hideFadeBg} className='cross'><BsX /></button>
        <div className='dialogDetail align-items-center' style={{background: 'white'}}>
          <strong className='py-4'>{title}</strong>
          <p><span style={{ textDecoration: 'line-through',color : 'red' }}>{origPrice}</span> {discountPrice}  </p>

          <div className='qauntityDiv'>
            <button onClick={minusQuantity}><BsDashLg /></button>
            <p>{quantity}</p>
            <button onClick={plusQuantity}><BsPlusLg /></button>
          </div>  

          <button className='customDarkBtn'  onClick={showCart}> Add to Cart </button>
        </div> 
      </div>  
    </>
  )
}
