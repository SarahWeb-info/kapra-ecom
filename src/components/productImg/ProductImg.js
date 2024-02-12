import React from 'react'
import { BsHeart, BsCart } from 'react-icons/bs';

export default function ProductImg({imgObj , cartFunc = null , detailFunc=null , wishListFunc = null}) {
    let {imgSrc ,imgAlt = "" , imgClass = "" ,  imgBtns = null } = imgObj ;

    return (
      <div className={`productImg resizeImgHover ${imgClass}`}>
        
        <img src={imgSrc} alt={imgAlt} />
  
        {imgBtns && (
          <div className='productImg-Btns'>
            {imgBtns.includes('cart') && <button  onClick={cartFunc && (() => cartFunc())}><BsCart /></button>}
            {imgBtns.includes('heart') && <button onClick={wishListFunc && (() => wishListFunc())} ><BsHeart /></button>}
            {imgBtns.includes('detail') && <button  onClick={detailFunc && (() => detailFunc())}><BsCart /></button>}
          </div>
        )}
      </div>
    );
  }
  