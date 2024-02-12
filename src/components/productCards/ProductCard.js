import React from 'react';

import './productCard.css';

import ProductImg from '../productImg/ProductImg';
import ProductText from '../productText/ProductText';
import ProductPrice from '../productPrice/ProductPrice';
import StarRating from '../productStarRating/ProductStarRating';

export default function ProductCard({ myCard  , detailFunc = null , wishListFunc = null }) {

  const { main, colouredDiv, img , title =null , id=0 , para = null , prices = null , rating = null } = myCard;
  
  return (
    <div className={`productCard ${main.mainClass}`} style={main.style} >

    { colouredDiv && <div className={` ${colouredDiv.additionalClass} colouredDiv`}></div> }

    {img && <ProductImg imgObj={img} wishListFunc={wishListFunc} detailFunc={detailFunc} />}

    { title && <ProductText  textClass = "productTitle"  text = {title.title}  maxTextLength = {title.maxTextLength}  /> }
    { para && <ProductText  textClass = "productPara"  text = {para.para}  maxTextLength = {para.maxTextLength}  /> }
  
    { prices && <ProductPrice priceClass = {prices.show}  currency = {prices.currency}  discountPrice = {prices.discount}  origPrice = {prices.origPrice} /> }
    { rating && <StarRating additionalClass={rating.show} totalStars={rating.total} goldenStars ={rating.achieved} /> }

    <a className='customDarkBtn col-hoverBtn cartBtn' href={`/product/${id}`} >EXPLORE</a>
    
  </div>
  );
}
