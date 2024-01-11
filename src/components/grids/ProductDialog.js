import React, {useState ,useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {  BsX , BsStar ,BsStarFill , BsDashLg , BsPlusLg } from "react-icons/bs";
import productDetail from '../../backend/getProductDetail';
import TruncateText from '../../functions/TrancateText';

export default function ProductDialog({ onClose , goToCart ,itemId,origPrice,discountPrice}) {

  const [quantity, setQuantity] = useState(1);
  const [ title , setTitle ] = useState(productDetail.title);
  
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
  
  function convertPercentageToStars(percentage) {
    const starRating = (percentage / 100) * 5;
  
    const roundedRating = Math.round(starRating * 2) / 2;
  
    return roundedRating;
  }
  
  const starRating = convertPercentageToStars(productDetail.starRating);
  const stars = Array.from({ length: starRating }, (_, index) => index + 1);
  const noStars = 5-stars ;
  const emptyStars = Array.from({ length: noStars }, (_, index) => index + 1);

  return (
    <>
    <div className='fadeBg' onClick={hideFadeBg} style={{zIndex:'104'}}></div>

      <div className='centerFixed dialog'>
        <button onClick={hideFadeBg} className='cross'><BsX /></button>
        
        <div className='dialogBanner'>
          
          <div className='productTag productTagBottom'>40%</div>
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

          <div className='dialogDetail py-4 px-2'>
            <strong className='py-4'>{title}</strong>
            <div className='d-flex flex-row justify-content-between'>
              <p>{productDetail.priceCurrency} <span style={{ textDecoration: 'line-through',color : 'red' }}>{origPrice}</span> {discountPrice} </p>
              <p>
                {productDetail.inventory > 0 ? (
                  <i style={{ color: 'green' }}>In stock</i>
                ) : (
                  <i style={{ color: 'red' }}>Sold Out</i>
                )}
              </p>
              <p></p>
            </div>
                   
          <div style={{color : '#f7f713'}}>
          {stars.map((_, index) => {
            return( 
              <span key={index}><BsStarFill /></span>
              );
            })}
          {emptyStars.map((_, index) => {
            return( 
              <span key={index}><BsStar /></span>
              );
            })}
          </div> 

          <div className='d-flex flex-row justify-content-between align-item-center'>
            <div className='qauntityDiv'>
              <button onClick={minusQuantity}><BsDashLg /></button>
              <p>{quantity}</p>
              <button onClick={plusQuantity}><BsPlusLg /></button>
            </div>  

            <button className='customDarkBtn' onClick={showCart}> Add to Cart </button>
            <span></span>
          </div>  

          <div className='yScroll'>
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
