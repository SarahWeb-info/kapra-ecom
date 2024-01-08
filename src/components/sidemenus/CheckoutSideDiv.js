import React , {useState , useEffect } from 'react';
import CrossBTn from '../globalHelpers/CrossBTn';
import {  BsFillCartXFill } from "react-icons/bs";

export default function CheckoutSideDiv({ onClose }) {
    const [ emptyCart , setEmptyCart] = useState(true);
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
      
    return (
    <div className="sideMenu" style={{right : `${showDiv}`}}>
      
      <CrossBTn title="Shopping Cart"  onClose={handleHide} />     
      
      {emptyCart && 
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p className='highlighter' style={{fontSize : '5rem'}}><BsFillCartXFill /></p>
          <p>Your Cart is empty</p>
          <button className='sideMenuBtns'  onClick={handleHide}>Return to Shop</button>
        </div>
      }
      {!emptyCart && 
        <div className='fullCart'>
          something in the cart
          
          <div>
            scrollingY div
            <div>
              products
            </div>

            <div>
              order notes
            </div>

            <div>
              You may also like
              <div>
                carousel
              </div>
            </div>
          
          </div>

          <div>
            <div>
              <h4>SubTotal</h4>
              <p>PKR price</p>
            </div>
            <a href="">View Cart</a>
            <a href="">Checkout</a>
          </div>

        </div>
      }
    </div>
  )
}
