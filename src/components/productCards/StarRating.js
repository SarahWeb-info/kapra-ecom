import React from 'react'
import {  BsStar ,BsStarFill } from "react-icons/bs";

export default function starRating({totalStars=5 , goldenStars =4}) {
  
  function convertPercentageToStars(percentage) {
    const starRating = (percentage / 100) * 5;

    const roundedRating = Math.round(starRating * 2) / 2;

    return roundedRating;
  }

  const starRatingValue = convertPercentageToStars((goldenStars / totalStars) * 100);
  const stars = Array.from({ length: starRatingValue }, (_, index) => index + 1);
  const emptyStars = Array.from({ length: totalStars - starRatingValue }, (_, index) => index + 1);

  return (
    <span className='inlineCenter' style={{color : '#f7f713',width : 'fit-content' ,minWidth : '80px' , maxWidth : '10vw' }}>
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
  )
}
