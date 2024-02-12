import React, {useState  , useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {  BsX } from "react-icons/bs";
import MyContext from '../../context/globalContext/globalContext';
import {addToCartData} from '../../data/addCart';

import ProductText from '../productText/ProductText';
import ProductPrice from '../productPrice/ProductPrice';
import StarRating from '../productStarRating/ProductStarRating';
import QuantityDiv from '../productQuantityDiv/QuantityDiv';

import './productDialog.css';

export default function ProductDialog({ onClose , item }) {

  const { cartDisplayFunc } = useContext(MyContext);

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
    addToCartData(item ,item.id , quantity );
    cartDisplayFunc();
  }

  return (
    <>
    <div className='fadeBg' onClick={hideFadeBg} style={{zIndex:'104'}}></div>

    <div className='centerFixed regularBg dialog'>
      <button onClick={hideFadeBg} className='cross'><BsX /></button>
      
      <div className='dialogBanner'>
        
        <div className='alertBg productTag '>40%</div>
          <Carousel>
          {item.images.map((imgData, index) => {
            return(
              <Carousel.Item key={index}>
                <div>
                  <img src={itemData} alt="" />
                </div>
              </Carousel.Item>
              );
            })}
          </Carousel>
      </div>

        <div className='flexColumn  align-content-center  dialogDetail' style={{ justifyContent : 'space-evenly'}}>

        { item.title && <ProductText  textClass = "py-4"  text = {item.title}  maxTextLength = {100}  /> }  
          
          <div className='inlineBetween'>
            { item.price && <ProductPrice currency = "$"  discountPrice = {item.discountPercentage}  origPrice = {item.price} /> }
            
            <p>
              {item.stock > 0 ? (
                <i style={{ color: 'green' }}>In stock {item.stock} items</i>
              ) : (
                <i style={{ color: 'red' }}>Sold Out</i>
              )}
            </p>
            <p></p>
          
          </div>
          
          <div className='inlineBetween'>                
            { item.rating && <StarRating goldenStars ={item.rating} /> }          
          </div>

          <div className='inlineBetween'>

            <QuantityDiv handleQuantityChange = {handleQuantityChange} />      

            <button className='my-2 customDarkBtn' onClick={showCart}> Add to Cart </button>
            <span></span>
          </div>  
        
      </div> 
  </div>    
    </>
  )
}
