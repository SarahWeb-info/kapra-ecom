import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../imgs/img1.jpg';
import Img2 from '../imgs/img2.jpg';
import Img3 from '../imgs/img3.jpg';
import Img4 from '../imgs/img4.jpg';
import '../css/home.css';
import HomeProductList from '../components/HomeProductList';
import CatSlider from '../components/CatSlider';


export default function Home() {

  return (

    <div>
     <Carousel className='topCarousel'>
        <Carousel.Item interval={2000}>
          <div className='exploreBanner topCarousel-inner'>
            <img src={Img1} alt="" />
            <a href="http://" target="_blank" rel="noopener noreferrer" className='customDarkBtn'>Explore Now</a>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div className='exploreBanner topCarousel-inner'>
            <img src={Img2} alt="" />
            <a href="http://" target="_blank" rel="noopener noreferrer" className='customDarkBtn'>Explore Now</a>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div className='exploreBanner topCarousel-inner'>
            <img src={Img3} alt="" />
            <a href="http://" target="_blank" rel="noopener noreferrer" className='customDarkBtn'>Explore Now</a>
          </div>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <div className='exploreBanner topCarousel-inner'>
            <img src={Img4} alt="" />
            <a href="http://" target="_blank" rel="noopener noreferrer" className='customDarkBtn'>Explore Now</a>
          </div>
        </Carousel.Item>
 
      </Carousel>

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
