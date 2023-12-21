import React from 'react';
import {  BsX , BsSearch } from "react-icons/bs";
import Img from '../imgs/img1.jpg';
import '../css/sidedivs.css';

export default function CheckoutSideDiv({ onClose }) {
    const smpData = [
      {
        img : Img ,
        title : "Three peice kurti",
        priceBefore : "4000" ,
        sale : "20%"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        priceBefore : "4000" ,
        sale : "20%"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        priceBefore : "4000" ,
        sale : "20%"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        priceBefore : "4000" ,
        sale : "20%"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        priceBefore : "4000" ,
        sale : "20%"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        priceBefore : "4000" ,
        sale : "20%"
      },
      {
        img : Img ,
        title : "Three peice kurti",
        priceBefore : "4000" ,
        sale : "20%"
      }
    ]

    const handleHide = () => {
        console.log("in handle hide");
        if (onClose) {
          onClose();
        }
      }
  
    return (
    <div className='searchSideDiv'>
      
      <div className='crossBtnParent'>
        <span>search our site</span>
        <button className='crossBtn' onClick={handleHide} ><BsX/></button>
      </div>
      
      <div className='quickList'>
          <div>
            <input type="text" placeholder='Search' />
            <a href="http://"></a>
            <BsSearch/>
          </div>
          <div>
            <span>Quick List :</span>
            <p>            
              <a href="http://">cat 1</a> ,
              <a href="http://">cat 2</a> ,
              <a href="http://">cat 3</a> ,
              <a href="http://">cat 4</a> ,
              <a href="http://">cat 5</a> ,
              <a href="http://">cat 6</a>
            </p>  
          </div>
      </div> 

      <div>
        <div className='sideMenuTitles'>
          Need Some Inspiration ?
        </div>  
        
        <div className='quickProductEg'>
          
        {smpData.map((product) => {
          let priceAfter =parseInt(product.priceBefore, 10) -  (parseInt(product.priceBefore, 10) / parseInt(product.sale, 10));

          return (
            <div key={product.key}>

              <a href=""><img src={product.img} alt="" /></a>
              
              <span>
                <a href="http://">{product.title}</a>
                <p style={{textTransform : 'uppercase'}}>
                  <span style={{ textDecoration: 'line-through' }}>PKR {product.priceBefore} </span>
                  <span style={{ color : 'var(--highlighter)'}}>PKR {priceAfter}</span>
                </p>
              </span>
            </div>
          );
        })}

        </div>

        <div className='sideMenuTitles'>
          <a href="http://" target="_blank" rel="noopener noreferrer">Veiw All  </a>
        </div>
      </div>
       
    </div>
  )
}
