import React , {useState } from 'react';
import '../css/navbar.css';
import Carousel from 'react-bootstrap/Carousel';
import { BsFilterLeft , BsX , BsSearch , BsTruck  ,BsPerson , BsHeart , BsCart ,BsChevronRight} from "react-icons/bs";
import SearchDiv from './SearchSideDiv';
import LoginDiv from './LoginSideDiv';
import CartDiv from './CheckoutSideDiv';

import BrandMobile from '../imgs/smpLogo-Mobile.png';
import BrandDesktop from '../imgs/smpLogo-desktop.png';
import smpImg1 from '../imgs/img1.jpg';

function MyNavbar() {

  const [ activeDiv , setActiveDiv ] = useState("");
  const [ fadeBg , setFadeBg ] = useState('translateY(-100vh)');
  const [ showNav , setShowNav ] = useState();
  const [ showSearch , setShowSearch ] = useState(' -100%');
  const [ showLogin , setShowLogin ] = useState('-100%');
  const [ showCart , setShowCart ] = useState('-100%');

  const openFadeBg =(x)=>{
    setActiveDiv(x);
    
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

  const toggleDropdown =(e)=>{

    const myNavitem = e.currentTarget.closest('.myNavitem');
    
    if(myNavitem){
      
      // for styling parent divs of navitems
      if(myNavitem && myNavitem.classList.contains('firstDropParent')){
      
        const allNavItems = document.querySelectorAll('.dropParent');
        
        const activeParent = myNavitem.closest('.dropParent');
        if(activeParent && activeParent.classList.contains('active')){
          activeParent.classList.remove('active');

          allNavItems.forEach((allDivs) => {
            allDivs.style.display = 'block';
            
          });
        }else{
          activeParent.classList.add('active');

          allNavItems.forEach((allDivs) => {
            if (allDivs !== activeParent) {
              allDivs.style.display = 'none';
            }
          });
          
        }
      }  
      
      //for collapse/expand of dropdowns
      const myDropdown = myNavitem.nextElementSibling;
      if (myDropdown && myDropdown.classList.contains('myDropdown')) {
        
        if(myDropdown.style.display === "block"){
          
          myDropdown.style.animation = "slideOut 1s 1";  
          setTimeout(() => {
            myDropdown.style.display = "none";
            myNavitem.style.backgroundColor = "transparent";
          }, 1000);
          
        }else{
          
          myNavitem.style.backgroundColor = "var(--grayBase)";
          myDropdown.style.display = "block";
          myDropdown.style.animation = "slideIn 1s 1";
        }
      }  
    }
}


  return (
    <div className='fixed-top'>
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
          <img className='d-lg-none' src={BrandMobile} alt="Brand logo" />
          <img className='d-none d-lg-block' src={BrandDesktop} alt="Brand logo" />
        </div>
      </div>
      <div className='col'>
        <div className='full-X-Block d-inline-flex justify-content-end align-items-center '>
          <button className='noBtn' onClick={()=>openFadeBg("search")} ><BsSearch /></button>
          <a href=""  className='noBtn d-none d-lg-block'><BsTruck /></a>
          <button className='noBtn d-none d-lg-block'  onClick={()=>openFadeBg("login")} ><BsPerson /></button>
          <a href="" className='noBtn d-none d-lg-block'><BsHeart /></a>
          <button className='noBtn'  onClick={()=>openFadeBg("cart")} ><BsCart /></button>
        </div>
      </div>
    </div>

    <div className='myNav' style={{transform: `${showNav}`}}>
      
      <button className='crossBtn d-lg-none' >
        <BsX onClick={()=>hideFadeBg("nav")} />
      </button>
      
      <div className='myNavitem dropParent'>
        <a href="http://" className='alertColor'>Sale</a>
      </div>
      
      <div className='myNavitem dropParent'>
        <a href="http://" className='alertColor'>Flat 30% & 40%</a>
      </div>
      
      <div className='myNavitem dropParent'>
        <a href="http://">New IN</a>
      </div>
      
      <div className='dropParent'>
      
        <div className='firstDropParent myNavitem d-inline-flex justify-content-between align-items-center'>
          <a href="http://">Winter 2023</a>
          <sup className="myBadge alertBg">on Sale</sup>
          <button className='d-lg-none dropBtn' onClick={(e)=>toggleDropdown(e)}><BsChevronRight /></button>
        </div>

        <div className='myDropdown align-content-start dropBox'>
          
            <div className='d-flex flex-column align-items-start'>

              <div className='myNavitem  d-inline-flex justify-content-between align-items-center'>
                <a href="http://" className='dropTitle'>Women</a>
                <button className='d-lg-none dropBtn' onClick={(e)=>toggleDropdown(e)}><BsChevronRight /></button>
              </div>

              <div className='myDropdown'>

                <div className='d-flex flex-column align-items-start'>
                  <a href="http://"  className='myNavitem' >Sweaters</a>
                  <a href="http://"  className='myNavitem'>Coats</a>
                  <a href="http://" className='myNavitem'>Jackets</a>
                </div>

              </div>

            </div>

            <div>

              <div className='myNavitem  d-inline-flex justify-content-between align-items-center'>
                <a href="http://" className='dropTitle'>Men</a>
                <button className='d-lg-none dropBtn' onClick={(e)=>toggleDropdown(e)}><BsChevronRight /></button>
              </div>

              <div className='myDropdown'>
  
                  <div className='d-flex flex-column align-items-start'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>
  
              </div>
            </div>

            <img src={smpImg1} alt="Sample Img" className='navImgs' />
          
        </div>

      </div>
      
      <div className='myNavitem dropParent'>
        <a href="http://">OuterWear<sup className="myBadge alertBg">on Sale</sup></a>
      </div>
      
      <div className='myNavitem dropParent'>
        <a href="http://">Unstitched</a>
      </div>
      
      <div className='myNavitem dropParent'>
        <a href="http://">Mak</a>
      </div>
      
      <div className='myNavitem dropParent'>
        <a href="http://">Man</a>
      </div>
      
      <div className='myNavitem dropParent'>
        <a href="http://">home</a>
      </div>
      
      <div className='myNavitem dropParent'>
        <a href="http://">Handbags</a>
      </div>

    </div>
    
  </div>
  );
}

export default MyNavbar;