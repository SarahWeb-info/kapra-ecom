import React , {useContext} from 'react'
import MyContext from '../../context/globalContext/globalContext';
import Slider from './Slider';

export default function HomeSliderContainer({mainClass = "homeSliderContainer" ,  heading='Collection' , bannerImg = "img1" , catagroy }) {
  const { productData } = useContext( MyContext ) ;

  return (
    <div className={mainClass}>
      {mainClass=== "homeSliderContainer"?(
      <div>
 
        <h3 className='myLabels px-2'>{heading}</h3>
        <div className='exploreBanner resizeImgHover'>
            <img src={require(`../../imgs/${bannerImg}.jpg`)} alt="" />
            
            <a href="http://"  className='customDarkBtn'>Explore</a>
        </div>

      </div>
      ):null}
      
      <div>
         
        <div className='sliderFilters'>
          <span>New</span>
          <span>Sale</span>
        </div>
         
        <Slider productsList={productData} />
      </div>
    </div>  
  )
}
