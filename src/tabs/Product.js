import React from 'react'
import ProductCardLight from '../components/productCards/ProductCardLight'

export default function Product() {
  return (
    <div>
        productCard
        <div style={{ display: 'flex' , flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center' , width : '100vw' , height : '80vh' , overflow : 'hidden'  }}>
          <ProductCardLight />

        </div>
    </div>
  )
}
