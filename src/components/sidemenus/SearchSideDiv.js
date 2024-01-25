import React,{useState , useEffect} from 'react';
import { BsSearch } from "react-icons/bs";
import CrossBTn from '../crossBtn/CrossBTn';
import ProductText from '../productText/ProductText';
import ProductPrice from '../productPrice/ProductPrice';

import Img from '../../imgs/img1.jpg';

export default function CheckoutSideDiv({ onClose }) {
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

    const [ showDiv , setShowDiv ] = useState(' -100%');
    
    useEffect(() => {
      return () => {
        setShowDiv('0');
      };
    }, []);

    const handleHide = () => {
        if (onClose) {
          setShowDiv('-100%');
          onClose();
        }
      }
  
   return (
  <div className="regularBg regularA justify-content-between sideMenu" style={{right : `${showDiv}`}}>
    <CrossBTn title="search our site"  onClose={handleHide} />     
    
      <div className='quickList columnCenter'>
          <div className='customInputDiv m-2vh-Auto p-2 borderRadius-334'>
            <input type="text" placeholder='Search' />
            <button className='noBtn' style={{fontSize : '1rem'}}><BsSearch/></button>
          </div>

          <p>Quick List :</p>
          <p>            
            <a href="http://">cat 1</a> ,
            <a href="http://">cat 2</a> ,
            <a href="http://">cat 3</a> ,
            <a href="http://">cat 4</a> ,
            <a href="http://">cat 5</a> ,
            <a href="http://">cat 6</a>
          </p>  
      </div> 

      <div>
        <div className='width-100p-Height-Auto p-2vh-2vw shadowOut'>
            Need Some Inspiration ?
        </div>
        
        <div className='scrollingDiv '>  
        {smpData.map((product , index) => {

          return (
            <div key={index} className='flexInline align-items-center' >

              <a href=""><img src={product.img} className=' width-100p-Height-Auto shadowOut' alt=""/></a>
              
              <div className='myLabels flexColumn'>
                
                <ProductText  textClass = "productTitle"  text = {product.title}  maxTextLength = {30}  />

                <ProductPrice currency = "$"  discountPrice = {product.discountPrice}  origPrice = {product.origPrice} /> 

              </div>
            </div>
          );
        })}
        </div>

        <h5 className='p-2vh-2vw shadowOut'>
        <a href="http://" style={{textDecoration : 'underline' , color : 'var(--highlighter)'}} rel="noopener noreferrer">Veiw All  </a>
        </h5>

      </div>
       
    </div>
  )
}
