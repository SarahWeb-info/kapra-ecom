import React , {useState , useContext} from 'react';
import '../css/productPg.css';
import dialogsDisplayContext from "../context/context";
import productDetail from '../data/getProductDetail';
import ProductText from '../components/productText/ProductText';
import StarRating from '../components/productStarRating/ProductStarRating';
import QuantityDiv from '../components/productQuantityDiv/QuantityDiv';
import AddCartDialog from '../components/AddCartDialog';

export default function Product() {
  const { cartDisplayFunc } = useContext(dialogsDisplayContext);
  const [dispalyImg, setDispalyImg] = useState(productDetail.allImagesArr[0]);

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

  const [attributeDisplay, setAttributeDisplay] = useState(null);
  const [priceDisplay, setPriceDisplay] = useState(null);
  const [currency, setCurrency] = useState("$");
  const [addCart, setAddCart] = useState(false);

  const updateDataFromList = (id , img ) => {
    
    productDetail.priceListing.forEach(element => {

      if (parseInt(element.productId) === parseInt(id)) {
        setPriceDisplay(element.discountPrice);
        setCurrency(element.currency);
        setAttributeDisplay(element.productAttr);
        setDispalyImg(img);
      }

    });
  }

  const showCart =()=>{

    if (priceDisplay === null) {
      // if the priceDisplay is null then show the minicart with attr and quantity selection . 
      setAddCart(true);

    }else{
      // else if priceDisplay != null then set the quantity to 1 and open cart 
      cartDisplayFunc();
    }
  }

  const closeAddCart = () =>{
    setAddCart(false);
  }
  
  const confirmAddCart = () => {
    closeAddCart();
    cartDisplayFunc();
  }

  return (
    <>
    { addCart && <AddCartDialog onClose = {closeAddCart} goToCart={confirmAddCart} propertyName = {productDetail.propertyName} productImgArr={productDetail.propertyListingArr} productPriceArr={productDetail.priceListing}  />}
    
    <div className='pageDiv inlineCenter alignStretch allowWrap ' style={{gap : '1vw'}}>
      
      <div className='productPgImg'>
        <img src={dispalyImg} alt="" />
        <div>
        {productDetail.allImagesArr.map((item, index) => {
            return(
              <img src={item}  key={index} alt="" onMouseEnter={(e)=>updateDisplayImg(e)}/>
              );
            })}
        </div>
      </div>
      
      <div className='productPgDescription'>
        <h1>
          { productDetail.title && <ProductText  textClass = "py-4"  text = {productDetail.title}  maxTextLength = {300}  /> }  
        </h1>

        <div className='inlineBetween'>
          
          <p>{productDetail.displayPriceRange} {productDetail.freeShipping && <span>{productDetail.freeShipping}</span>} </p>
            
          <p>
            {productDetail.inventory > 0 ? (
              <i style={{ color: 'green' }}>In stock</i>
            ) : (
              <i style={{ color: 'red' }}>Sold Out</i>
            )}
          </p>
          <p></p>
          
          </div>

        { productDetail.starRating && <StarRating goldenStars ={productDetail.starRating} /> }

        <div className='inlineBetween'>

          <QuantityDiv handleQuantityChange = {handleQuantityChange} />      
          {productDetail.unitType}   
          <button className='my-2 customDarkBtn' onClick={showCart}> Add to Cart </button>
          <span></span>
        </div>  

        {productDetail.propertyListingArr.length > 0 && 
          <>
          {attributeDisplay && <p>Selected {productDetail.propertyName} : {attributeDisplay}</p>}
          {priceDisplay && <p> price : {currency} {priceDisplay} </p>}
          <div className='inlineList'>
            {productDetail.propertyListingArr.map((item, index) => {
              return(
                <div key={index} className='column' onClick ={()=>updateDataFromList(item.propertyValueId , item.propertyImageMainDesktop )} >
                  <span style={{display : 'block' , width : '100%' , height : '5px' , backgroundColor : `${item.color}`}}></span>
                  <img src={item.propertyImageMainMobile} alt="" width="50px" height="50px" />
                </div>  
              );
            })}             
          </div>      
          </>
        }      

      </div>

    </div>

    <div className='pageDiv flexColumn justify-content-center align-items-start allowWrap ' style={{padding: '2vw' , height : 'auto' , maxHeight : '20vh'}}>
      <b>Additional Features</b>
      {productDetail.additionalFeaturesArr.map((item, index) => {
        return(
          <div key={index}>
            <b>{item.attr} :</b><span>{item.value}</span>
          </div>  
        );
      })}           
    </div>  
        
    <div className='pageDiv allowWrap moreProductDetail'>
        <ul>
          <p>Packaging</p>
          <li><b>Package Size : </b><span>{productDetail.packagingSize}</span></li>
          <li><b>Weight : </b><span>{productDetail.packageWeight}</span></li>
          <li><b>Delivery Option Code : </b><span>{productDetail.deliveryOptionCode}</span></li>
          <li></li>
        </ul>

        <ul>
          <p>Seller</p>
          <li><b>Seller Id : </b><span>{productDetail.sellerId}</span></li>
          <li><b>Seller Name : </b><span>{productDetail.sellerName}</span></li>
          <li><b>Seller Feedback : </b><a href={productDetail.sellerFeedback}>{productDetail.sellerFeedback}</a></li>
          <li><img src={productDetail.sellerLogo} alt="" /></li>
        </ul>

        <ul>
          <p>Warrenty & Tracking </p>
          <li><b>Warenty : </b><span>{productDetail.productWarrenty}</span></li>
          <li><b>Warrenty Code : </b><span>{productDetail.warrantyStr}</span></li>
          <li><b>Tracking Id : </b><span>{productDetail.trackingId}</span></li>
          <li></li>
        </ul>

    </div>
    
    </>
  )
}
