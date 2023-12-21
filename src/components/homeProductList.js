import React, { useState } from 'react'
import Img1 from '../imgs/img1.jpg';
import productsList from '../backend/getProductList';
import { BsArrowLeftShort ,  BsArrowRightShort , BsHeart , BsCart } from "react-icons/bs";

export default function HomeProductList() {
    
  const [moveLeft, setmoveLeft] = useState(30);
  
  const leftArrow = () => {
    let scrollDiv = productsList.length * 25 - 90;
    scrollDiv = scrollDiv* -1;
    console.log(scrollDiv);
    if (moveLeft > scrollDiv) {
      setmoveLeft(moveLeft-30) ;
    }else{
      setmoveLeft(30) ;
    }
  };

  const rightArrow =()=>{
    if (moveLeft!== 30) {
      setmoveLeft(moveLeft+30);
    }
  };

  return (
    <>
      <div className='collectionHeading'>
        <p>Unstiched</p>
        <div>
          <span>New</span>
          <span>Sale</span>
        </div>

      </div>

      <div className='collectionNavigateArrows'>
        <span className='leftArrow' onClick={rightArrow}>
          <BsArrowLeftShort />
        </span>
        
        <span className='rightArrow' onClick={leftArrow}>
          <BsArrowRightShort />
        </span>
      </div>

      <div className='collectionDiv'>
        <div className='collectionDivBannerImg'>
          <img src={Img1} alt="" />
        </div>

        <div className='sectionProductDiv'  style={{left : `${moveLeft}vw` }} >

        {productsList &&
          productsList.map((item, index) => (
                  
                  <div  key={index} className='productDiv'>
                    
                    <div>
                    <a href="http://"><img src={item.img} alt="" className='productDivImg'  /> </a>
                      <span className='productDivBtns'>
                        <button><BsHeart /></button>
                        <button><BsCart /></button>
                      </span>
                    </div>
                    <a href="http://">{item.title}</a>
                    <p><span style={{textDecoration:'line-through'}}>{item.currency} {item.discount}</span><span style={{color : 'var(--highlighter)'}}>{item.currency} {item.price}</span></p>
                  </div>
                      
              ))}


        </div>
      </div>
    </>  
  )
}
