import React from 'react'

export default function ProductPrice({ priceClass = "" , currency = "$" , discountPrice = null , origPrice = ""}) {
  return (
    <span className={`productPrice ${priceClass}`}>
    {discountPrice && (
      <span style={{ textDecoration: 'line-through', color: 'red' , whiteSpace : 'pre'}}>
        {currency}{discountPrice}{' '}
      </span>
    )}
    {currency}<strong>{origPrice}</strong>
  </span>
  );
}
