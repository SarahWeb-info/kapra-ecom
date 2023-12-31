import React , {useState} from 'react';
import "../css/collection.css";
import { BsHeart , BsCart  } from "react-icons/bs";
import { SiCodereview } from "react-icons/si";
import { TfiLayoutColumn2 , TfiLayoutColumn2Alt ,TfiLayoutColumn3 , TfiLayoutColumn3Alt } from "react-icons/tfi";
import productsList from '../backend/getProductList';
import ProductDialog from "../dialogs/ProductDialog";
import CartDiv from '../dialogs/CheckoutSideDiv';

export default function Collection() {

  const [ grid3display , setGrid3display ] = useState(true);
  const [ grid2display , setGrid2display ] = useState(false);
  // const [ totalProducts , setTotalProducts ] = useState(false);

  const  selectGrid =(x)=>{
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

  const hideFadeBg =()=>{   
    setShowDialog(false);
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

  return (
    <div>
      {showDialog && <ProductDialog  onClose={()=>hideFadeBg()} goToCart={showCart} itemId={productId }  origPrice={origPrice} discountPrice={discount} />}
      <div className='fadeBg' onClick={hideAll} style={{transform:`${fadeBg}`}}></div>
      {cart && <CartDiv onClose = {hideAll}  />}
      <div className='collectionPgTitle'>
        <div>
          <h1>Collection</h1>
          <small>{productsList.length} Products</small>
        </div>
        <div>
          <button className='noBtn px-2' onClick={()=>selectGrid(2)}>
            {!grid2display ? <TfiLayoutColumn2 /> : <TfiLayoutColumn2Alt />}
          </button>

          <button className='noBtn  px-2' onClick={()=>selectGrid(4)}>
            {!grid3display ? <TfiLayoutColumn3 /> : <TfiLayoutColumn3Alt />}
          </button>
        </div>
      </div>
     <div className='collectionVeiw'>
      {productsList &&
        productsList.map((item, index) => {
          
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
                      <button>
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
    </div>
  )
}
