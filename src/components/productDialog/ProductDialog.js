import React, {useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {  BsX } from "react-icons/bs";
import productDetail from '../../data/getProductDetail';
import ProductText from '../productText/ProductText';
import ProductPrice from '../productPrice/ProductPrice';
import StarRating from '../productStarRating/ProductStarRating';
import QuantityDiv from '../productQuantityDiv/QuantityDiv';

import './productDialog.css';

export default function ProductDialog({ onClose , goToCart ,itemId,origPrice,discountPrice}) {

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange=(x)=>{
    setQuantity(x);
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

    <div className='centerFixed regularBg dialog'>
      <button onClick={hideFadeBg} className='cross'><BsX /></button>
      
      <div className='dialogBanner'>
        
        <div className='alertBg productTag '>40%</div>
          <Carousel>
          {productDetail.allImagesArr.map((item, index) => {
            return(
              <Carousel.Item key={index}>
                <div>
                  <img src={item} alt="" />
                </div>
              </Carousel.Item>
              );
            })}
          </Carousel>
      </div>

        <div className='flexColumn  align-content-center  dialogDetail' style={{ justifyContent : 'space-evenly'}}>

        { productDetail.title && <ProductText  textClass = "py-4"  text = {productDetail.title}  maxTextLength = {100}  /> }  
          
          <div className='inlineBetween'>
            { origPrice && <ProductPrice currency = {productDetail.priceCurrency}  discountPrice = {discountPrice}  origPrice = {origPrice} /> }
            
            <p>
              {productDetail.inventory > 0 ? (
                <i style={{ color: 'green' }}>In stock</i>
              ) : (
                <i style={{ color: 'red' }}>Sold Out</i>
              )}
            </p>
            <p></p>
          
          </div>
          
          <div className='inlineBetween'>                
            { productDetail.starRating && <StarRating goldenStars ={productDetail.starRating} /> }          
          </div>

          <div className='inlineBetween'>

            <QuantityDiv handleQuantityChange = {handleQuantityChange} />      

            <button className='my-2 customDarkBtn' onClick={showCart}> Add to Cart </button>
            <span></span>
          </div>  

          <div className='productFeatures'>
            {productDetail.additionalFeaturesArr.slice(0, 12).map((item, index) => {
              return(
                <div  key={index}>
                  <b>{item.attr} :</b><span>{item.value}</span>
                </div>  
              );
            })}           
          </div>  
        
      </div> 
  </div>    
    </>
  )
}
