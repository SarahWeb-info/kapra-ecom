import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../imgs/img1.jpg';
import Img2 from '../imgs/img2.jpg';
import Img3 from '../imgs/img3.jpg';
import Img4 from '../imgs/img4.jpg';
import '../css/home.css';
import HomeProductList from '../components/homeProductList';

export default function Home() {


  return (

    <div>
     <Carousel className='topCarousel'>
        <Carousel.Item interval={2000}>
          <div className='topCarousel-inner'>
            <img src={Img1} alt="" />
            <a href="http://" target="_blank" rel="noopener noreferrer">Explore Now</a>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div className='topCarousel-inner'>
            <img src={Img2} alt="" />
            <a href="http://" target="_blank" rel="noopener noreferrer">Explore Now</a>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div className='topCarousel-inner'>
            <img src={Img3} alt="" />
            <a href="http://" target="_blank" rel="noopener noreferrer">Explore Now</a>
          </div>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <div className='topCarousel-inner'>
            <img src={Img4} alt="" />
            <a href="http://" target="_blank" rel="noopener noreferrer">Explore Now</a>
          </div>
        </Carousel.Item>
 
      </Carousel>

      <HomeProductList />
      <HomeProductList />

      

      Home
    </div>
  )
}
