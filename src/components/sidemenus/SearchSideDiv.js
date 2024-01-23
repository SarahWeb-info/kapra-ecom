import React,{useState , useEffect} from 'react';
import { BsSearch } from "react-icons/bs";
import CrossBTn from '../crossBtn/CrossBTn';
import Img from '../../imgs/img1.jpg';

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
  <div className="regularBg regularA sideMenu" style={{right : `${showDiv}`}}>
    <CrossBTn title="search our site"  onClose={handleHide} />     
    
    <div className='sideMenuBody columnEvenly searchSideDiv'>
      
      <div className='columnCenter quickList'>
          <div className='customInputDiv'>
            <input type="text" placeholder='Search' />
            <button className='noBtn' style={{fontSize : '1rem'}}><BsSearch/></button>
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
          
        {smpData.map((product , index) => {
          let priceAfter =parseInt(product.priceBefore, 10) -  (parseInt(product.priceBefore, 10) / parseInt(product.sale, 10));

          return (
            <div key={index}>

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
  </div> 
  )
}
