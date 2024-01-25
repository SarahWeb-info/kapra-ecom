import React , {useState , useEffect } from 'react';
import CrossBTn from '../crossBtn/CrossBTn';
import {  BsFillCartXFill ,  BsTrash } from "react-icons/bs";
import ProductText from '../productText/ProductText';
import ProductPrice from '../productPrice/ProductPrice';

import Img from '../../imgs/img1.jpg';

export default function CheckoutSideDiv({ onClose }) {
    const [ emptyCart , setEmptyCart] = useState(false);
    const [ showDiv , setShowDiv ] = useState(' -100%');
    
    useEffect(() => {
      return () => {
        setShowDiv('0');
      };
    }, []);
  
    const handleHide = () => {
      console.log("in handle hide");
      if (onClose) {
        onClose();
      }
    }
    
    const smpData = [
      {
        img : Img ,
        title : "Three peice kurti",
        discountPrice : "4000" ,
        origPrice : "500"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        discountPrice : "4000" ,
        origPrice : "500"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        discountPrice : "4000" ,
        origPrice : "500"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        discountPrice : "4000" ,
        origPrice : "500"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        discountPrice : "4000" ,
        origPrice : "500"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        discountPrice : "4000" ,
        origPrice : "500"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        discountPrice : "4000" ,
        origPrice : "500"
      }
    ]

    const [discountTotal, setDiscountTotal] = useState(0);
    const [origTotal, setOrigTotal] = useState(0);

    useEffect(() => {
        // Calculate subtotal of discountPrice
        const discountSubtotal = smpData.reduce((accumulator, product) => accumulator + parseInt(product.discountPrice), 0);
        
        // Calculate subtotal of origPrice
        const origSubtotal = smpData.reduce((accumulator, product) => accumulator + parseInt(product.origPrice), 0);
        
        setDiscountTotal(discountSubtotal) ;
        setOrigTotal(origSubtotal);

      }, [smpData]);

    return (
    <div className="regularBg regularA sideMenu" style={{right : `${showDiv}`}}>
      
      <CrossBTn title="Shopping Cart"  onClose={handleHide} />     
      
      <div className='columnCenter'>
      {emptyCart && (
      <>
          <p className='highlighter' style={{fontSize : '5rem'}}><BsFillCartXFill /></p>
          <p>Your Cart is empty</p>
          <button className='highLightedBtn'  onClick={handleHide}>Return to Shop</button>
      </>
      )}

        {!emptyCart && 
        <>
        <div className='scrollingDiv '>  
        {smpData.map((product , index) => {
          return(
          <div key={index} className='flexInline align-items-center'>
            <a href=""><img src={product.img} className=' width-100p-Height-Auto shadowOut' alt=""/></a>
              
            <div className='myLabels flexColumn'>
                
              <ProductText  textClass = "productTitle"  text = {product.title}  maxTextLength = {30}  />

              <ProductPrice currency = "$"  discountPrice = {product.discountPrice}  origPrice = {product.origPrice} /> 

            </div>

            <div>
              <button><BsTrash /></button>
            </div>
          </div>
        );
        })}
        </div>
        <hr/>
        <div className='inlineBetween p-2vh-2vw'>
          
          <h4>SubTotal for {smpData.length} items</h4>
          <p>{discountTotal} $</p>
        </div>

        <p>You saved {origTotal - discountTotal}</p>
        
        <button className='highLightedBtn'  >Checkout</button>
        </>
        }


      </div>
    </div>    
  )
}
