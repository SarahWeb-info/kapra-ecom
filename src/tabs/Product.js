import React , {useState ,useEffect ,  useContext} from 'react';
import '../css/productPg.css';
import MyContext from '../context/globalContext/globalContext';
import getProductDetails from '../data/productDetails';
import {addToCartData} from '../data/addCart';
import { useParams } from 'react-router-dom';

import ProductText from '../components/productText/ProductText';
import StarRating from '../components/productStarRating/ProductStarRating';
import QuantityDiv from '../components/productQuantityDiv/QuantityDiv';

export default function Product() {

  const { cartDisplayFunc } = useContext(MyContext);
  
  const [dispalyImg, setDispalyImg] = useState();
  
  // Fetch params from the URL path
    const { param } = useParams();
    const [product, setProduct] = useState();
    let callOnce = 0;
  
    useEffect(() => {
      
      const fetchData = async () => {
        setProduct(await getProductDetails(param));
      };
  
      if (callOnce === 0) {
          fetchData();
          callOnce = 1;
        }
    
      }, []);
      
      useEffect(() => {
        
        if(product != undefined || product != null && callOnce === 1){
          setDispalyImg(product[0].images[0]);
          }

      }, [product]);

  const updateDisplayImg = (e) => {
    let allImgs = document.querySelectorAll('.productPgImg>div img');
    allImgs.forEach(element => {
      element.style.border = '0px';
    });

    let targetImg = e.target ;
    targetImg.style.border = '2px solid var(--color)';
    setDispalyImg(e.target.src);
  } 

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange=(x)=>{
    setQuantity(x);
  }

  const showCart =(item ,id )=>{
    addToCartData(item ,id , quantity );
    cartDisplayFunc(item ,id , quantity );
  }

  return (
    <>
    {product && 
      <div className='pageDiv inlineCenter alignStretch allowWrap ' style={{gap : '1vw'}}>
  
      <div className='productPgImg'>
        <img src={dispalyImg} alt="" />
        <div>
        {product[0].images.map((item, index) => {
            return(
              <img src={item}  key={index} alt="" onMouseEnter={(e)=>updateDisplayImg(e)}/>
              );
            })}
        </div>
      </div>

      <div className='productPgDescription'>
        <h1>
          { product[0].title && <ProductText  textClass = "py-4"  text = {product[0].title}  maxTextLength = {300}  /> }  
        </h1>

        <p>
          { product[0].description && <ProductText  textClass = "py-4"  text = {product[0].description}  maxTextLength = {300}  /> }  
        </p>
        <div className='inlineBetween'>
          
          <p>{product[0].discountPercentage}{product[0].price} </p>
            
          <p>
            {product[0].stock > 0 ? (
              <i style={{ color: 'green' }}>In stock {product[0].stock} items </i>
            ) : (
              <i style={{ color: 'red' }}>Sold Out</i>
            )}
          </p>
          <p></p>
          
          </div>

        { product[0].rating && <StarRating goldenStars ={product[0].rating} /> }

        <div className='inlineBetween'>

          <QuantityDiv handleQuantityChange = {handleQuantityChange} />   

          <button className='my-2 customDarkBtn' onClick={() => showCart(product[0], product[0].id)}> Add to Cart </button>

          <span></span>
        </div>             

      </div>

    </div>}
    {!product && <p>This item is out of stock.</p>}
    </>
  )
}
