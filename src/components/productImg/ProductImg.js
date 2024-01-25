import React from 'react'
import { BsHeart, BsCart } from 'react-icons/bs';
import { SiCodereview } from 'react-icons/si';

export default function ProductImg({imgObj , miniCartFunc = null , detailFunc=null , wishListFunc = null}) {
    let {imgSrc ,imgAlt = "" , imgClass = "" ,  imgBtns = null } = imgObj ;

    return (
      <div className={`productImg resizeImgHover ${imgClass}`}>
        
        <img src={imgSrc} alt={imgAlt} />
  
        {imgBtns && (
          <div className='productImg-Btns'>
            {imgBtns.includes('cart') && <button  onClick={detailFunc && (() => miniCartFunc())}><BsCart /></button>}
            {imgBtns.includes('heart') && <button onClick={wishListFunc && (() => wishListFunc())} ><BsHeart /></button>}
            {imgBtns.includes('detail') && <button  onClick={detailFunc && (() => detailFunc())}><SiCodereview /></button>}
          </div>
        )}
      </div>
    );
  }
  