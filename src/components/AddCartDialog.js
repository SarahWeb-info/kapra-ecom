import React , { useState } from 'react';
import {  BsX } from "react-icons/bs";

export default function AddCartDialog({ onClose , goToCart ,propertyName="" , productImgArr = null , productPriceArr = null }) {
  
  const [currency, setCurrency] = useState("$");
  const [priceDisplay, setPriceDisplay] = useState(null);
  const [attributeDisplay, setAttributeDisplay] = useState(null);
  
  const updateCartData = (id ) => {
    
    productPriceArr.forEach(element => {

      if (parseInt(element.productId) === parseInt(id)) {
        setPriceDisplay(element.discountPrice);
        setAttributeDisplay(element.productAttr);
        setCurrency(element.currency);
      }

    });
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
      <div className='fadeBg'  onClick={hideFadeBg} style={{zIndex:'104'}}></div>
      
      <div className='centerFixed  regularBg flexColumn justify-content-center align-items-start p-5' style={{zIndex:'105' , width : 'fit-content' , height : 'fit-content'}}> 
        <button onClick={hideFadeBg} className='cross'><BsX /></button>
        
        {productImgArr && 
          <>
          <p>Selected {propertyName} : {attributeDisplay} </p>
          <p> price : {currency} {priceDisplay} </p>
          
          <div className='inlineList'>
            
            {productImgArr.map((item, index) => {
              return(
                <div key={index} className='column' onClick ={()=>updateCartData(item.propertyValueId )} >
                  {/* <b>{item.colorStr}</b> */}
                  <span style={{display : 'block' , width : '100%' , height : '5px' , backgroundColor : `${item.color}`}}></span>
                  {/* <b>{item.propertyValueId}</b> */}
                  {/* <b>{item.totalOrders}</b> */}
                  <img src={item.propertyImageMainMobile} alt="" width="50px" height="50px" />
                </div>  
              );
            })}             
          
          </div>      
          </>
        }
        <button className='my-2 customDarkBtn' disabled={!attributeDisplay}  onClick={showCart} > Add to Cart </button>

      </div>
    </>
  )
}
