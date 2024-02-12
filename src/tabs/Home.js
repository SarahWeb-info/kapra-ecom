import React, { useEffect, useState } from 'react';
import Slider from '../components/sliderLayout/Slider';

import {dataCollection } from '../data/homePgData';
import MyCarousel from '../components/MyCarousal';
import ProductCardFadeHover from '../components/productCardFadeHover/ProductCardFadeHover';
import '../css/home.css';


export default function Home() {

  const [newhomeBanner, setHomeBanner] = useState();
  const [homeData, setHomeData] = useState();
    
  let callOnce = 0;

  useEffect(() => {
        
    const fetchData = async () =>{
      let { dataArr , homeBanner } = await dataCollection();
        //prepare home banner homeData 
        setHomeBanner( homeBanner );
        //prepare home banner homeData 
       setHomeData( dataArr );
      }  
      
      if(callOnce === 0){
        fetchData();
        callOnce = 1;
    }

  }, []);
  
  return (

    <div>

    {
      newhomeBanner &&
        <MyCarousel 
        class1 = "topCarousel" 
        class2="exploreBanner topCarousel-inner" 
        classBtn='customDarkBtn' 
        cusInterval = {2000}  
        customContent={newhomeBanner}
        />
      }

    {
      newhomeBanner && newhomeBanner.slice(0,3).map((item, index) => {

        let data = JSON.parse(homeData[index].data) ;

        return (
          <div key={index}>
            <HomeSliderContainer heading={item.titleContent} bannerImg={item.imgContent} data ={data}/>
          </div>
        );
      })
    }

      <video
        id="myVideo"
        controls 
        autoPlay 
        loop 
        src={require(`../imgs/sampleVideo.mp4`)}
        className='bannerVideo my-5'>
      </video>

      <h3 className='myLabels w-100 text-center my-3'>Shop by catagory</h3>
      
      <div className='d-flex flex-column flex-lg-row  justify-content-center' style={{gap : '2px'}}>

        <div className='gridDiv-container'>
        
          {newhomeBanner && <ProductCardFadeHover customClass1 = "gridDivlg" img= {newhomeBanner[2].imgContent} catName={newhomeBanner[2].titleContent} />}

          <div className='d-flex flex-column'>

            {newhomeBanner && <ProductCardFadeHover  img= {newhomeBanner[3].imgContent} catName={newhomeBanner[3].titleContent}/>}

            {newhomeBanner && <ProductCardFadeHover  img= {newhomeBanner[4].imgContent} catName={newhomeBanner[4].titleContent}/>}

          </div>        

        </div>

        <div className='gridDiv-container'>

          <div className='d-flex flex-column'>

            {newhomeBanner && <ProductCardFadeHover  img= {newhomeBanner[5].imgContent} catName={newhomeBanner[5].titleContent}/>}

            {newhomeBanner && <ProductCardFadeHover  img= {newhomeBanner[6].imgContent} catName={newhomeBanner[6].titleContent}/>}

          </div>        

          {newhomeBanner && <ProductCardFadeHover customClass1 = "gridDivlg"  img= {newhomeBanner[7].imgContent} catName={newhomeBanner[7].titleContent}/>}
        
        </div>

      </div>
    </div>
  )
}

function HomeSliderContainer({mainClass = "homeSliderContainer" ,  heading='Collection' , bannerImg = "" , data = []}) {

  return (
    <div className={mainClass}>
      {mainClass=== "homeSliderContainer"?(
      <div>
 
        <h3 className='myLabels px-2'>{heading}</h3>
        <div className='exploreBanner resizeImgHover'>
            <img src={bannerImg} alt="" />
            
            <a href={`/collection/${heading}`}  className='customDarkBtn'>Explore</a>
        </div>

      </div>
      ):null}
      
      <div>
         
        <div className='sliderFilters'>
          <span>New</span>
          <span>Sale</span>
        </div>
        
         {data && 
            <Slider productsList={data} />
         }
      </div>
    </div>  
  )
}


