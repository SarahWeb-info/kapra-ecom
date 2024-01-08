import React from 'react'
import Img1 from '../imgs/img1.jpg';
import Img2 from '../imgs/img2.jpg';
import Img3 from '../imgs/img3.jpg';
import Img4 from '../imgs/img4.jpg';
import '../css/home.css';
import HomeProductList from '../components/sliderLayout/HomeProductList';
import CatSlider from '../components/sliderLayout/CatSlider';

import MyCarousel from '../components/MyCarousal';


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

      <HomeProductList heading = "Unstitched"  bannerImg = "img1" />
      <HomeProductList  heading = "Ready to Wear"  bannerImg = "img2" />

      <video
        id="myVideo"
        controls 
        autoPlay 
        loop 
        src={require(`../imgs/sampleVideo.mp4`)}
        className='bannerVideo my-5'
      ></video>

      <h3 className='headings w-100 text-center my-3'>Shop by catagory</h3>
      <CatSlider />

      <h3 className='headings w-100 text-center my-3'>shoppable lookups</h3>

      <div className='d-flex flex-column flex-lg-row  justify-content-center'>

        <div className='d-flex flex-row gridDiv-container'>
          
          <div className='fadeAdDiv gridDivlg' style={{ backgroundImage: `url(${Img1})` }}>
            
            <div className='fadeHover'></div>
            <a className='fadeLabel'>Shop Now</a>
            <div className='fadeLine'></div>

            <a className='fadeHoverBtn'>Checknow</a>
        
          </div>

          <div className='d-flex flex-column'>

            <div className='fadeAdDiv gridDiv' style={{ backgroundImage: `url(${Img2})` }}>
              
              <div className='fadeHover'></div>
              <a className='fadeLabel'>Shop Now</a>
              <div className='fadeLine'></div>

              <a className='fadeHoverBtn'>Checknow</a>
          
            </div>

            <div className='fadeAdDiv gridDiv' style={{ backgroundImage: `url(${Img3})` }}>
              
              <div className='fadeHover'></div>
              <a className='fadeLabel'>Shop Now</a>
              <div className='fadeLine'></div>

              <a className='fadeHoverBtn'>Checknow</a>
          
            </div>

          </div>        

        </div>

        <div className='d-flex flex-row  gridDiv-container'>

          <div className='d-flex flex-column'>

            <div className='fadeAdDiv gridDiv' style={{ backgroundImage: `url(${Img2})` }}>
              
              <div className='fadeHover'></div>
              <a className='fadeLabel'>Shop Now</a>
              <div className='fadeLine'></div>

              <a className='fadeHoverBtn'>Checknow</a>
          
            </div>

            <div className='fadeAdDiv gridDiv' style={{ backgroundImage: `url(${Img3})` }}>
              
              <div className='fadeHover'></div>
              <a className='fadeLabel'>Shop Now</a>
              <div className='fadeLine'></div>

              <a className='fadeHoverBtn'>Checknow</a>
          
            </div>

          </div>        

          <div className='fadeAdDiv gridDivlg' style={{ backgroundImage: `url(${Img1})` }}>
            
            <div className='fadeHover'></div>
            <a className='fadeLabel'>Shop Now</a>
            <div className='fadeLine'></div>

            <a className='fadeHoverBtn'>Checknow</a>
        
          </div>
        
        </div>
      </div>



    </div>
  )
}
