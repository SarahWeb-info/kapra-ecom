import React from 'react'

import HomeSliderContainer from '../components/sliderLayout/HomeSliderContainer';
import MyCarousel from '../components/MyCarousal';
import ProductCard2 from '../components/productCards/ProductCard2';

import '../css/home.css';

export default function Home() {

  let homeBanner = [    {
    titleContent: null,
    btnContent: 'Explore Now',
    link : '/collection' ,
    imgContent: 'img1',
    altContent: 'Get Dynamic Web Apps',
  },
  {
    titleContent: null,
    btnContent: 'Explore Now',
    link : '/collection' ,
    imgContent: 'img2',
    altContent: 'Get Dynamic Web Apps',
  },
  {
    titleContent: null,
    btnContent: 'Explore Now',
    link : '/collection' ,
    imgContent: 'img3',
    altContent: 'Get Dynamic Web Apps',
  },
];

  return (

    <div>
      
      <MyCarousel 
          class1 = "topCarousel" 
          class2="exploreBanner topCarousel-inner" 
          classBtn='customDarkBtn' 
          cusInterval = {2000}  
          customContent={homeBanner}
      />

      <HomeSliderContainer heading = "Unstitched"  bannerImg = "img1" />
      <HomeSliderContainer heading = "Ready to Wear"  bannerImg = "img2" />

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
        
          <ProductCard2 customClass1 = "gridDivlg" />

          <div className='d-flex flex-column'>

            <ProductCard2 />

            <ProductCard2 />

          </div>        

        </div>

        <div className='gridDiv-container'>

          <div className='d-flex flex-column'>

            <ProductCard2 />

            <ProductCard2 />

          </div>        

          <ProductCard2 customClass1 = "gridDivlg" />
        
        </div>
      </div>



    </div>
  )
}
