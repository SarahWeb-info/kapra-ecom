import React , {useState} from 'react';
import "../components/collectionPg/collection.css";

import FilterBar from '../components/collectionPg/FilterBar';
import productsList from '../backend/getProductList';
import ProductDialog from "../components/collectionPg/ProductDialog";
import CartDiv from '../components/sidemenus/CheckoutSideDiv';
import MiniCart from "../components/collectionPg/MiniCart";
import ProductCardLight from './../components/productCards/ProductCardLight';

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
            let styling = {
              width: `20vw`,
              minWidth: `20vw`,
              height : '40vh',
              marginRight: `10px`,
              marginTop: `10px`,
            };
            
            if (!grid3display) {
              styling = {
                width: `40vw`,
                minWidth: `20vw`,
                height : '40vh',
                marginRight: `10px`,
                marginTop: `10px`,
              };
            }

            let myCard = {
              main: { mainClass: "productCard-Column", style: styling },
              colouredDiv: { additionalClass: "noColour" },
              img: { imgSrc: `${item.img}`, imgBtns: ['cart', 'detail'] },
              para: { para: `${item.title}`, maxlength: 60 },
              prices: { currency: `${item.currency}`, discount: `${item.discount}`, origPrice: `${item.price}`, show: "full" },
            };

            return (
              <ProductCardLight
                key={index}
                myCard={myCard}
                hoverBtn = {false}
                detailFunc = {()=> showDialogFunc( `${item.id}` , `${item.discount}` , `${item.price}`  )}
                miniCartFunc = {()=>showMiniCartFunc( `${item.title}` , `${item.currency}` , `${item.discount}` , `${item.price}` )}
              />
            );
          })}

      </div>

         
      <div className='columnCenter py-2'>
        {lastNumber+showProduct < totalProducts && 
        <button className='customDarkBtn'  onClick={nextBtn}>More Products</button>
        } 
      </div>

    </div>  
  );
}
