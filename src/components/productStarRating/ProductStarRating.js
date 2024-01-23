import React from 'react'
import {  BsStar ,BsStarFill } from "react-icons/bs";

export default function ProductStarRating({additionalClass = "" , totalStars=5 , goldenStars =4}) {
  
  function convertPercentageToStars(x) {
    
    const precentage = (x / 100) * 5;
    
    const roundedRating = precentage.toFixed(1);

    return roundedRating;
  }

  const starRatingValue = convertPercentageToStars(goldenStars);
  const stars = Array.from({ length: starRatingValue }, (_, index) => index + 1);
  const emptyStars = Array.from({ length: totalStars - stars.length }, (_, index) => index + 1);

  return (

    <div className={`productRating ${additionalClass}`}>

      <span className='inlineBetween' style={{color : '#f7f713',width : 'fit-content' ,minWidth : '80px' , maxWidth : '10vw' }}>
      {stars.map((_, index) => {
        return( 
          <span key={index}><BsStarFill /></span>
          );
        })}
      {emptyStars.map((_, index) => {
        return( 
          <span key={index}><BsStar /></span>
          );
        })}
      </span>

    </div>
  )
}
