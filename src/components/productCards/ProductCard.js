import React , {useState} from 'react';
import { BsHeart, BsCart , BsStarFill , BsDashLg , BsPlusLg} from 'react-icons/bs';
import { SiCodereview } from 'react-icons/si';
import './productCard.css';
import TruncateText from '../../frontendFunc/TrancateText';
import StarRating from './StarRating';

export default function ProductDialog({ myCard  , detailFunc = null , miniCartFunc = null , cartFunc = null  }) {

  const { main, colouredDiv, img , title =null , para = null , prices = null , rating = null  ,availability = null , quantity = false , cartBtn = null , additionaldata = null } = myCard;
  
  return (
    <div className={`${main.mainClass}`} style={main.style} >
    { colouredDiv && <div className={`colouredDiv ${colouredDiv.additionalClass}`}></div> }

    { img && cardImg( img , miniCartFunc , detailFunc ) }

    { title && cardTitle( title ) }
    { para && cardPara( para ) }

    { prices && cardPrice( prices ) }
    { availability && cardAvailability(availability) }

    { rating && cardRating( rating ) }
    { quantity && quantityDiv()}
    { cartBtn && <button className='customDarkBtn col-hoverBtn cartBtn'>{cartBtn}</button> }
    { additionaldata && <div className='additionaldata'>{additionaldata}</div> }
    
  </div>
  );
}

function cardImg(imgObj , miniCartFunc , detailFunc) {
  
  let {imgSrc, imgBtns } = imgObj ;

  return (
    <div className='productImg resizeImgHover'>
      
      <img src={imgSrc} alt="" />

      {imgBtns && (
        <div className='productImg-Btns'>
          {imgBtns.includes('cart') && <button  onClick={detailFunc && (() => miniCartFunc())}><BsCart /></button>}
          {imgBtns.includes('heart') && <button><BsHeart /></button>}
          {imgBtns.includes('detail') && <button  onClick={detailFunc && (() => detailFunc())}><SiCodereview /></button>}
        </div>
      )}
    </div>
  );
}

function shortenText(shortenedName, size) {

  if (shortenedName.includes('-')) {
    shortenedName = shortenedName.split('-')[1];
  }

  if (shortenedName.length > size) {
    shortenedName = TruncateText(shortenedName,  size );
  }

  return shortenedName;
}

function cardTitle(titleInfo) {
  let shortenedText = shortenText(titleInfo.title, titleInfo.maxlength);

  return <span className='productTitle'>{shortenedText}</span>;
}

function cardPara(paraInfo) {
  let shortenedText = shortenText(paraInfo.para, paraInfo.maxlength);

  return <span className='productPara'>{shortenedText}</span>;
}

function cardAvailability(stockInfo) {
  
    return( 
        <div className='yScroll'>
            {stockInfo.slice(0, 12).map((item, index) => {
            return(
                <div  key={index}>
                <b>{item.attr} :</b><span>{item.value}</span>
                </div>  
            );
            })}
        </div>  
    );

} 

function cardPrice(priceInfo) {
  return (
  <span className={`${priceInfo.show}`}>
    {priceInfo.discount && (
      <span style={{ textDecoration: 'line-through', color: 'red' , whiteSpace : 'pre'}}>
        {priceInfo.currency}{priceInfo.discount}{' '}
      </span>
    )}
    {priceInfo.currency}<strong>{priceInfo.origPrice}</strong>
  </span>);
}

function cardRating(rating) {
  return (
    <div className={`${rating.show}`}>
      <StarRating totalStars={rating.total} goldenStars ={rating.achieved} />
    </div>
  );
}

function quantityDiv() {

    let quantity = 1 ;

    const minusQuantity=()=>{
        if (parseInt(quantity)>0) {
            quantity-- ; 
         }
    }
    
    const plusQuantity=()=>{
        quantity++ ; 
    }
    
    return (
      <div className='qauntityDiv'>
        <button onClick={minusQuantity}><BsDashLg /></button>
        <p>{quantity}</p>
        <button onClick={plusQuantity}><BsPlusLg /></button>
      </div>
  )
}