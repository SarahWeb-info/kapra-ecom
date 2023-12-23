import React, { useState , useEffect} from 'react';
// import Img1 from '../imgs/img1.jpg';
import productsList from '../backend/getProductList';
import { BsArrowLeftShort ,  BsArrowRightShort , BsHeart , BsCart } from "react-icons/bs";

export default function HomeProductList({heading='Collection' , bannerImg = "img1"}) {
  let innerWidth = window.innerWidth;
  const [productDivSize , setProductDivSize] = useState(40);
  const [totalProductsVeiw , setTotalProductsVeiw] = useState(productDivSize*2);
  const [leftArrowOpacity , setLeftArrowOpacity ] = useState(1);
  const [rightArrowOpacity , setRightArrowOpacity ] = useState(1);

  useEffect(() => {
    return () => {
      if (innerWidth < 992) {
        setProductDivSize(40);
        setTotalProductsVeiw(productDivSize*2) ;
      }else{
        setProductDivSize(20);
        setTotalProductsVeiw(60) ;
      }
    };
  }, [innerWidth]);

  const [moveLeft, setmoveLeft] = useState(0);
    
  const leftArrow = () => {
    let scrollDiv = productsList.length * 40 - totalProductsVeiw;
    scrollDiv = scrollDiv* -1;
    if (moveLeft > scrollDiv) {
      setmoveLeft(moveLeft-totalProductsVeiw) ;
      setLeftArrowOpacity(1);
      setRightArrowOpacity(1);
    }else{
      setRightArrowOpacity(0);
    }
  };
  
  const rightArrow =()=>{
    if (moveLeft!== 0) {
      setmoveLeft(moveLeft+totalProductsVeiw);
      setLeftArrowOpacity(1);
      setRightArrowOpacity(1);
    }else{
      setLeftArrowOpacity(0);
    }
  };

  return (
    <div className='productList-container'>

      <div className='productListBanner'>
 
        <p>{heading}</p>
        <div className='exploreBanner'>
            <img src={require(`../imgs/${bannerImg}.jpg`)} alt="" />
            
            <a href="http://">Explore</a>
        </div>

      </div>

    <div className='d-flex flex-column' style={{width:`${totalProductsVeiw}vw`,position : 'relative'}}>
        
        <div className='productListStatus'>
          <span>New</span>
          <span>Sale</span>
        </div>

        <div className='product-Arrows'>
            <span className='leftArrow' onClick={rightArrow} style={{opacity : `${leftArrowOpacity}`}}>
            <BsArrowLeftShort />
            </span>
            
            <span className='rightArrow' onClick={leftArrow} style={{opacity : `${rightArrowOpacity}` , justifyContent : 'flex-end'} }>
            <BsArrowRightShort />
            </span>
        </div>

      <div className='productDiv-container' style={{width:`${totalProductsVeiw}vw`}}>

        <div className='scrollingProductDiv' style={{left : `${moveLeft}vw` }}  >

        {productsList &&
          productsList.map((item, index) => (
            <div  key={index} className='productDiv' style = {{width : `${productDivSize}vw`}}>
              
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
          )
        )}

        </div>
      </div>
    </div>  
    </div>  
  )
}
