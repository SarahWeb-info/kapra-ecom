import React from 'react'
import productsList from '../backend/getProductList';
import Slider from './Slider';

export default function HomeProductList({heading='Collection' , bannerImg = "img1"}) {

  return (
    <div className='productList-container'>

      <div className='productListBanner'>
 
        <p className='headings'>{heading}</p>
        <div className='exploreBanner resizeImgHover'>
            <img src={require(`../imgs/${bannerImg}.jpg`)} alt="" />
            
            <a href="http://"  className='customDarkBtn'>Explore</a>
        </div>

      </div>
      
      <Slider productsList={productsList} />
    </div>  
  )
}
