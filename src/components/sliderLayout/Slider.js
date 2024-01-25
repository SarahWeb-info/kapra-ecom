import React, { useState , useEffect} from 'react';
import { BsArrowLeftShort ,  BsArrowRightShort } from "react-icons/bs";
import ProductCard from "../productCards/ProductCard";
import './slider.css';

export default function Slider({ productsList = []}) {

  const [productDiv , setProductDiv ] = useState();
  const [leftPosition ,setLeftPosition ] = useState(0);
  let marginPx = 4 ;

  const [leftArrowOpacity , setLeftArrowOpacity ] = useState(1);
  const [rightArrowOpacity , setRightArrowOpacity ] = useState(1);

  useEffect(() => {
    let sliderContainer = document.getElementsByClassName("sliderProductCard-Container")[0];
    let sliderContainerSize = sliderContainer.getBoundingClientRect().width;

    const resizeProductCard = () => {
      if (window.innerWidth < 650) {
        setProductDiv(sliderContainerSize/2);
      } else {
        setProductDiv(sliderContainerSize/3);
      }
    };
  
    window.addEventListener('resize', resizeProductCard);
  
    resizeProductCard();
    return () => {
      window.removeEventListener('resize', resizeProductCard);
    };
  }, []);

  //if I click on left Arrow , the setLeftPosition goes in minus
  const sliderNavLeft = () => {

    let sizeOfScrollingDiv = productsList.length * (productDiv+marginPx) ;
    
    sizeOfScrollingDiv = -1 * sizeOfScrollingDiv ;
    
    let markUpPos = leftPosition- (productDiv+marginPx) 
    
    if (sizeOfScrollingDiv !== markUpPos) {
      setLeftPosition(leftPosition-productDiv-marginPx );
      setLeftArrowOpacity(1);
      setRightArrowOpacity(1);
    }else{
      setRightArrowOpacity(0);
    }

  };
  
  const sliderNavRight =()=>{
    if ((Math.floor(leftPosition)) < 1  ) {
      setLeftPosition(leftPosition+productDiv+marginPx );
      setLeftArrowOpacity(1);
      setRightArrowOpacity(1);
    }else{
        setLeftArrowOpacity(0);
      }

    };
  

  return (
    <div className='slider'>

        <div className='inlineBetween sliderNavigations'>
            <span className='sliderNavLeft' onClick={sliderNavRight} style={{opacity : `${leftArrowOpacity}`}}>
            <BsArrowLeftShort />
            </span>
            
            <span className='sliderNavRight' onClick={sliderNavLeft} style={{opacity : `${rightArrowOpacity}` , textAlign : 'right'} }>
            <BsArrowRightShort />
            </span>
        </div>

      <div className='sliderProductCard-Container'>

        <div className='sliderInner' style={{left : `${leftPosition}px` }}>

        {productsList &&
          productsList.map((item, index) => {
            let styling = {
              width: `${productDiv - marginPx}px`,
              minWidth: `${productDiv - marginPx}px`,
              marginRight: `${marginPx + marginPx}px`,
            };
            
            let myCard = {
              main: { mainClass: "productCard productCard-Column productColumn-imgHover", style: styling },
              colouredDiv: { additionalClass: "shadow" },
              img: { imgSrc: `${item.img}`},
              para: { para: `${item.title}`, maxTextLength: 60 },
              prices: { currency: `${item.currency}`, discount: `${item.discount}`, origPrice: `${item.price}`, show: "full" },
            };

            return (
              <ProductCard
                key={index}
                myCard={myCard}
              />
            );
          })}
        </div>
      </div>
    </div>  

  )
}
