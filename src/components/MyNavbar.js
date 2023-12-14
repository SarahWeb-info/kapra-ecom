import React , {useState , useEffect} from 'react';
import '../css/navbar.css';
import Carousel from 'react-bootstrap/Carousel';
import { BsFilterLeft , BsX , BsSearch , BsTruck  ,BsPerson , BsHeart , BsCart } from "react-icons/bs";
import SearchDiv from './SearchSideDiv';
import LoginDiv from './LoginSideDiv';
import CartDiv from './CheckoutSideDiv';

function MyNavbar() {

  const [ activeDiv , setActiveDiv ] = useState("");
  const [ fadeBg , setFadeBg ] = useState('translateY(-100vh)');
  const [ showNav , setShowNav ] = useState();
  const [ showSearch , setShowSearch ] = useState(' -100%');
  const [ showLogin , setShowLogin ] = useState('-100%');
  const [ showCart , setShowCart ] = useState('-100%');

  const openFadeBg =(x)=>{
    setActiveDiv(x);
    console.log(`x is ${x} and show active div : ${activeDiv}`);
    
    setFadeBg('translateY(0)');
    
    if ( x === "nav" || activeDiv === "nav" ) {
      setShowNav('translateX(0%)');
      
    }else if( x === "cart" || activeDiv === "cart" ){
      setShowCart('0%');
      
    }else if( x === "search"  || activeDiv === "search" ){
      setShowSearch('0%');
      
    }else if( x === "login" || activeDiv === "login"  ){
      setShowLogin('0%'); 
    }


  }

  const hideFadeBg =(x)=>{

    console.log(`x is ${x} and hide active div : ${activeDiv}`);
    
    setFadeBg('translateY(-100vh)');
    
    if ( x === "nav"  || activeDiv === "nav" ) {
      setShowNav('translateX(-100%)');
      
    }else if( x === "cart"  || activeDiv === "cart" ){
      setShowCart('-100%');
      
    }else if( x === "search"  || activeDiv === "search" ){
      setShowSearch('-100%');
      
    }else if( x === "login"  || activeDiv === "login" ){
      setShowLogin('-100%'); 
    }
    
    setActiveDiv("");
  }

  return (
    <div className='myNavBar'>
      <div className='fadeBg' onClick={hideFadeBg} style={{transform:`${fadeBg}`}}></div>

      <div className="sideMenu" style={{right : `${showSearch}`}}>
        <SearchDiv onClose={()=>hideFadeBg("search")} />
      </div>

      <div className="sideMenu" style={{right : `${showLogin}`}}>
       <LoginDiv onClose = {()=>hideFadeBg("login")} />
      </div>

      <div className="sideMenu"  style={{right : `${showCart}`}}>
        <CartDiv onClose = {()=>hideFadeBg("cart")}  />
      </div>

      <Carousel className='navCarousel'>
        <Carousel.Item interval={1000}>
          <div className='full-Block d-inline-flex justify-content-center justify-content-md-start align-items-center'>
            <small>Fixed delivery charges,Rs 100/-</small>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <div className='full-Block d-inline-flex justify-content-center justify-content-md-end align-items-center'>
            <small>Best sellers.<a href="">Shop Now!</a></small>
          </div>
        </Carousel.Item>
      </Carousel>

    <div className='py-1 px-3 row align-items-center'>
      <div className='col d-lg-none'>
        <button className='noBtn' onClick={()=>openFadeBg("nav")}><BsFilterLeft /></button>
      </div>
      <div className='col'>
        <div className='full-X-Block d-inline-flex justify-content-center  justify-content-lg-start  align-items-center '>
          logo
        </div>
      </div>
      <div className='col'>
        <div className='full-X-Block d-inline-flex justify-content-end align-items-center '>
          <button className='noBtn' onClick={()=>openFadeBg("search")} ><BsSearch /></button>
          <a href=""  className='noBtn d-lg-block'><BsTruck /></a>
          <button className='noBtn d-lg-block'  onClick={()=>openFadeBg("login")} ><BsPerson /></button>
          <a href="" className='noBtn d-lg-block+'><BsHeart /></a>
          <button className='noBtn'  onClick={()=>openFadeBg("cart")} ><BsCart /></button>
        </div>
      </div>
    </div>

    <div className='d-flex flex-column flex-lg-row navMenu' style={{transform: `${showNav}`}}>
      <div className='noBtn d-inline-flex justify-content-end align-items-center d-lg-none'>
        <BsX onClick={()=>hideFadeBg("nav")} />
      </div>
      
      <div className='navLinks'>
        <a href="http://" className='alertColor'>Sale</a>
      </div>
      
      <div className='navLinks'>
        <a href="http://" className='alertColor'>Flat 30% & 40%</a>
      </div>
      
      <div className='navLinks'>
        <a href="http://">New IN</a>
      </div>
      
      <div className='navLinks'>
        <a href="http://">Winter 2023</a>
        <span className="myBadge alertBg">on Sale</span>
        
        <div className='myNavDropdown'>
          
          <div className='d-inline-flex'>
            
            <div className='px-1 d-flex flex-column justify-content-start align-content-start'>
              <b>Winter</b>
              <a href="http://">Sweaters</a>
              <a href="http://">Coats</a>
              <a href="http://">Jackets</a>
            </div>

            <div className='px-1 d-flex flex-column justify-content-start align-content-start'>
              <b>Winter</b>
              <a href="http://">Sweaters</a>
              <a href="http://">Coats</a>
              <a href="http://">Jackets</a>
            </div>

            <div className='px-1 d-flex flex-column  justify-content-start align-content-start'>
              <img src="../imgs/img1.jpg" alt="Sample Img" />
            </div>
          
          </div>

        </div>

      </div>
      
      <div className='navLinks'>
        <a href="http://">OuterWear</a>
        <span className="myBadge alertBg">on Sale</span>
      </div>
      
      <div className='navLinks'>
        <a href="http://">Unstitched</a>
      </div>
      
      <div className='navLinks'>
        <a href="http://">Mak</a>
      </div>
      
      <div className='navLinks'>
        <a href="http://">Man</a>
      </div>
      
      <div className='navLinks'>
        <a href="http://">home</a>
      </div>
      
      <div className='navLinks'>
        <a href="http://">Handbags</a>
      </div>

    </div>
    
  </div>
  );
}

export default MyNavbar;