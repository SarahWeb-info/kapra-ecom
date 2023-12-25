import React, { useState , useEffect} from 'react';
import { BsArrowLeftShort ,  BsArrowRightShort , BsHeart , BsCart } from "react-icons/bs";
import productsList from '../backend/getProductList';

export default function CatSlider() {

  const [leftArrowOpacity , setLeftArrowOpacity ] = useState(1);
  const [rightArrowOpacity , setRightArrowOpacity ] = useState(1);

  const [moveLeft, setmoveLeft] = useState(0);
    
  const leftArrow = () => {

    let scrollDiv = productsList.length * 40 - 100;
    scrollDiv = scrollDiv* -1;

    if (moveLeft > scrollDiv) {
      setmoveLeft(moveLeft-100) ;
      setLeftArrowOpacity(1);
      setRightArrowOpacity(1);
    }else{
      setRightArrowOpacity(0);
    }

  };
  
  const rightArrow =()=>{

    if (moveLeft!== 0) {
      setmoveLeft(moveLeft+100);
      setLeftArrowOpacity(1);
      setRightArrowOpacity(1);
    }else{
      setLeftArrowOpacity(0);
    }

  };
  

  return (
    <div className='d-flex flex-column' style={{width:`100vw`, position : 'relative'}}>
      
      <div className='productListStatus'></div>

      <div className='product-Arrows'>
        <span className='leftArrow' onClick={rightArrow} style={{opacity : `${leftArrowOpacity}`}}>
          <BsArrowLeftShort />
        </span>
        
        <span className='rightArrow' onClick={leftArrow} style={{opacity : `${rightArrowOpacity}` , justifyContent : 'flex-end'} }>
          <BsArrowRightShort />
        </span>
      </div>

      <div className='productDiv-container catProductDiv-container' >

        <div className='scrollingProductDiv' style={{left : `${moveLeft}vw` }}  >

        {productsList &&
          productsList.map((item, index) => (
            <div key={index} className='fadeAdDiv catDiv' style={{ backgroundImage: `url(${item.img})` }}>
                
                <div className='fadeHover'></div>
                <a className='fadeLabel'>Shop Now</a>
                <div className='fadeLine'></div>

                <a className='fadeHoverBtn'>Checknow</a>
            
            </div>
          )
        )}

        </div>
      </div>
    </div>  

  )
}
