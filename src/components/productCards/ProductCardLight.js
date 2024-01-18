import React from 'react';
import { BsHeart, BsCart } from 'react-icons/bs';
import { SiCodereview } from 'react-icons/si';
import './productCard.css';
import TruncateText from '../../frontendFunc/TrancateText';
import StarRating from './StarRating';

export default function ProductCardLight({ myCard  , detailFunc = null , miniCartFunc = null }) {

  const { main, colouredDiv, img , title =null , para = null , prices = null , rating = null } = myCard;
  
  return (
    <div className={`productCard ${main.mainClass}`} style={main.style} >
    { colouredDiv && <div className={`colouredDiv ${colouredDiv.additionalClass}`}></div> }

    { img && cardImg( img , miniCartFunc , detailFunc ) }

    { title && cardTitle( title ) }
    { para && cardPara( para ) }
  
    <div className='cardBody'>
      { prices && cardPrice( prices ) }
      { rating && cardRating( rating ) }
    </div>

    <button className='customDarkBtn col-hoverBtn'>EXPLORE</button>
    
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