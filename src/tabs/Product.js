import React from 'react'
import ProductCardLight from '../components/productCards/ProductCardLight'

export default function Product() {
  let prices = {
    currency : "$" ,
    discountPrice : "20",
    originalPrice : "30"
  }

  let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem facilis unde earum qui itaque eaque sunt doloribus eos id fuga iure, dolorum consequatur illum asperiores necessitatibus adipisci soluta. Animi?";
    
  return (
    <div>
        <div className='columnCenter ' style={{ width : '100vw' , height : '80vh' , overflow : 'hidden'  }}>
          {/* <ProductCardLight imgTitle="product" imgTags = "40%" imgBtns={false} title = "product" stars={3} prices = {prices} propPara = {para} /> */}
          <ProductCardLight 
              title="product"
              width = {"20vw"}
              height = {"40vh"}
              cardLayout ="productCard-Hoverable"
              cardTheme = "highlighted"
              imgBtns= {true}
              para={"item.title"}
              prices = {prices} 
            />
        </div>
    </div>
  )
}
