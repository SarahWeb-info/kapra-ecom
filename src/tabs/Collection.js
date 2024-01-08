import React , {useState} from 'react';
import "../components/grids/collection.css";
import { BsHeart , BsCart  } from "react-icons/bs";
import { SiCodereview } from "react-icons/si";

import FilterBar from '../components/grids/FilterBar';
import productsList from '../backend/getProductList';
import ProductDialog from "../components/grids/ProductDialog";
import CartDiv from '../components/sidemenus/CheckoutSideDiv';
import MiniCart from "../components/grids/MiniCart";

export default function Collection() {

  const totalProducts  = productsList.length;
  const [ grid3display , setGrid3display ] = useState(true);
  const [ grid2display , setGrid2display ] = useState(false);
  
  const selectGrid =(x)=>{
    if(x===2){
      setGrid2display(true);
      setGrid3display(false);
    }else{
      setGrid2display(false);
      setGrid3display(true);
    }
  }
  
  const [showDialog, setShowDialog] = useState(false);
  const [ productId , setProductId ] = useState(0);
  const [origPrice, setOrigPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const showDialogFunc =(id , origPrice , discountPrice)=>{
    setProductId(id );
    setOrigPrice(origPrice);
    setDiscount(discountPrice);
    setShowDialog(true);
  }
  
  const hideDialog =()=>{   
    setShowDialog(false);
  }

  const [ showMiniCart, setShowMiniCart] = useState(false);
  const [ productTitle , setProductTitle ] = useState(0);
  
  const showMiniCartFunc =(title ,currency , origPrice , discountPrice)=>{
    setProductTitle(title);
    setOrigPrice(currency + origPrice);
    setDiscount(currency + discountPrice);
    setShowMiniCart(true);
  }
  
  const hideMiniCart =()=>{   
    setShowMiniCart(false);
  }
  
  const [ fadeBg , setFadeBg ] = useState('translateY(-100vh)');
  const [cart, setCart] = useState(false);
  
  const showCart =()=>{
    setShowDialog(false);
    setFadeBg('translateY(0)');
    setCart(true);
  }
  const hideAll =(x)=>{
    setFadeBg('translateY(-100vh)');
    setCart(false);
  }
  
  const showProduct = 6;
  const [lastNumber, setlastNumber] = useState(showProduct);

  const nextBtn =()=>{
    if(lastNumber+showProduct < totalProducts){
      setlastNumber(lastNumber+showProduct);
    }
  }

  return (
    <div>

      {showDialog && <ProductDialog  onClose={()=>hideDialog()} goToCart={showCart} itemId={productId }  origPrice={origPrice} discountPrice={discount} />}
      {showMiniCart && <MiniCart  onClose={()=>hideMiniCart()} goToCart={showCart} propTitle = {productTitle} origPrice={origPrice} discountPrice={discount} />}
      
      <div className='fadeBg' onClick={hideAll} style={{transform:`${fadeBg}`}}></div>
      {cart && <CartDiv onClose = {hideAll}  />}

      <FilterBar grid2display={grid2display} grid3display={grid3display} selectGrid={selectGrid} />    
    
    <div className='collectionVeiw'>
      
      {productsList &&
        productsList.slice(0, lastNumber).map((item, index) => {
          
          let productStyle = "product";

          if (!grid3display) {
            if ((index + 1) % 4 === 0) {
              productStyle = "productRow";
            } else if ((index + 1) % 4 === 2) {
              productStyle = "product";
            } else if ((index + 1) % 4 === 3) {
              productStyle = "productReverse";
            }
          }else{
            productStyle = "regular";
          }
          return (
            <div key={index} className={`productDiv resizeImgHover ${productStyle}`}>
                <div>
                  <a href="http://">
                    <img src={item.img} alt="" />
                  </a>
                  <span className='productDivBtns'>
                    <button>
                      <BsHeart />
                    </button>
                    <span>
                      <button onClick={()=>showDialogFunc(item.id ,item.discount ,item.price  )}>
                        <SiCodereview />
                      </button>
                      <button onClick={()=>showMiniCartFunc(item.title ,item.currency ,item.discount ,item.price  )}>
                        <BsCart />
                      </button>
                    </span>
                  </span>
                </div>
                <span >
                  <a href="http://">{item.title}</a>
                  <p className='py-1 text-muted'>
                    <span style={{ textDecoration: 'line-through' }}>
                      {item.currency} {item.discount}
                    </span>
                    <span style={{ color: 'var(--highlighter)' }}>
                      {item.currency} {item.price}
                    </span>
                  </p>
                </span>
              </div>
              
          );
        })}
    </div>
      
      <div className='inlineCenter py-2'>
        {lastNumber+showProduct < totalProducts && 
        <button className='customDarkBtn'  onClick={nextBtn}>More Products</button>
        }
      </div>

    </div>
  )
}
