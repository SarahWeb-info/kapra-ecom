import React from 'react';
import { BsHeart, BsCart } from 'react-icons/bs';
import { SiCodereview } from 'react-icons/si';
import './productCard.css';

import ProductText from '../productText/ProductText';
import ProductPrice from '../productPrice/ProductPrice';
import StarRating from '../productStarRating/ProductStarRating';

export default function ProductCard({ myCard  , detailFunc = null , miniCartFunc = null }) {

  const { main, colouredDiv, img , title =null , para = null , prices = null , rating = null } = myCard;

  return (
    <div className={`productCard ${main.mainClass}`} style={main.style} >
    { colouredDiv && <div className={` ${colouredDiv.additionalClass} colouredDiv`}></div> }

    { img && cardImg( img , miniCartFunc , detailFunc ) }

    { title && <ProductText  textClass = "productTitle"  text = {title.title}  maxTextLength = {title.maxTextLength}  /> }
    { para && <ProductText  textClass = "productPara"  text = {para.para}  maxTextLength = {para.maxTextLength}  /> }
  
    { prices && <ProductPrice priceClass = {prices.show}  currency = {prices.currency}  discountPrice = {prices.discount}  origPrice = {prices.origPrice} /> }
    { rating && <StarRating additionalClass={rating.show} totalStars={rating.total} goldenStars ={rating.achieved} /> }

    <a className='customDarkBtn col-hoverBtn cartBtn' href='/product' >EXPLORE</a>
    
  </div>
  );
}

function cardImg(imgObj , miniCartFunc , detailFunc) {
  
  let {imgSrc, imgBtns } = imgObj ;

  return (
    <div className='productImg resizeImgHover'>
      
      <img src={imgSrc} alt="" />

      {imgBtns && (
        <div className='productImg-Btns'>
          {imgBtns.includes('cart') && <button  onClick={detailFunc && (() => miniCartFunc())}><BsCart /></button>}
          {imgBtns.includes('heart') && <button><BsHeart /></button>}
          {imgBtns.includes('detail') && <button  onClick={detailFunc && (() => detailFunc())}><SiCodereview /></button>}
        </div>
      )}
    </div>
  );
}
