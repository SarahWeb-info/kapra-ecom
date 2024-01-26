import React from 'react'

import {homeBanner} from '../data/homePgData';
import HomeSliderContainer from '../components/sliderLayout/HomeSliderContainer';
import MyCarousel from '../components/MyCarousal';
import ProductCardFadeHover from '../components/productCardFadeHover/ProductCardFadeHover';

import '../css/home.css';

export default function Home() {

  return (

    <div>

      <MyCarousel 
          class1 = "topCarousel" 
          class2="exploreBanner topCarousel-inner" 
          classBtn='customDarkBtn' 
          cusInterval = {2000}  
          customContent={homeBanner}
      />

      <HomeSliderContainer heading = "Grocery"  bannerImg = "img1" catagroy = "food" />
      <HomeSliderContainer heading = "Home Appliances"  bannerImg = "img2" catagroy = "home-appliances" />

      <video
        id="myVideo"
        controls 
        autoPlay 
        loop 
        src={require(`../imgs/sampleVideo.mp4`)}
        className='bannerVideo my-5'
      ></video>

      <h3 className='myLabels w-100 text-center my-3'>Shop by catagory</h3>

      <HomeSliderContainer mainClass = "catSliderContainer" />

      <h3 className='myLabels w-100 text-center my-3'>shoppable lookups</h3>

      <div className='d-flex flex-column flex-lg-row  justify-content-center' style={{gap : '2px'}}>

        <div className='gridDiv-container'>
        
          <ProductCardFadeHover customClass1 = "gridDivlg" />

          <div className='d-flex flex-column'>

            <ProductCardFadeHover />

            <ProductCardFadeHover />

          </div>        

        </div>

        <div className='gridDiv-container'>

          <div className='d-flex flex-column'>

            <ProductCardFadeHover />

            <ProductCardFadeHover />

          </div>        

          <ProductCardFadeHover customClass1 = "gridDivlg" />
        
        </div>
      </div>

    </div>
  )
}
