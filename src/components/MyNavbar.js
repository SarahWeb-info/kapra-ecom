import React , {useState } from 'react';
import '../css/navbar.css';
import { BsFilterLeft , BsX , BsSearch , BsTruck  ,BsPerson , BsHeart , BsCart ,BsChevronRight} from "react-icons/bs";
import SearchDiv from '../dialogs/SearchSideDiv';
import LoginDiv from '../dialogs/LoginSideDiv';
import CartDiv from '../dialogs/CheckoutSideDiv';

import BrandMobile from '../imgs/smpLogo-Mobile.png';
import BrandDesktop from '../imgs/smpLogo-desktop.png';
import smpImg1 from '../imgs/img1.jpg';
import MyCarousal from "./MyCarousal";

function MyNavbar() {

  const [ fadeBg , setFadeBg ] = useState('translateY(-100vh)');
  const [ showNav , setShowNav ] = useState();
  const [cart, setCart] = useState(false);
  const [login, setLogin] = useState(false);
  const [search, setSearch] = useState(false);

  const showNavFunc =()=>{
    setShowNav('translateX(0)');
  }
  const hideAll =(x)=>{
    setFadeBg('translateY(-100vh)');
    setShowNav('translateX(-100%)');
    setCart(false);
    setLogin(false);
    setSearch(false);
  }

  const openCart =()=>{
    setFadeBg('translateY(0)');
    setCart(true);
  }

  const openLogin =()=>{
    setFadeBg('translateY(0)');
    setLogin(true);
  }
  
  const openSearch =()=>{
    setFadeBg('translateY(0)');
    setSearch(true);
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

let navCarousalData = [    {
    titleContent: (<small>Fixed delivery charges,Rs 100/-</small>),
  },
  {
    titleContent: (<small>Best sellers.<a href="">Shop Now!</a></small>),
  },
];

return (
    <div className='fixed-top'  style={{zIndex : '102'}}>
      <div className='fadeBg' onClick={hideAll} style={{transform:`${fadeBg}`}}></div>
      
      {search && <SearchDiv onClose={hideAll}  />}
      {login && <LoginDiv onClose = {hideAll} />}
      {cart && <CartDiv onClose = {hideAll}  />}

      <MyCarousal 
          class1 = "navCarousel" 
          cusInterval = {1000}  
          customContent={navCarousalData}
      />
  
    <div className='navBg py-1 px-3 row align-items-center'>
      <div className='col d-lg-none'>
        <button className='noBtn' onClick={showNavFunc}><BsFilterLeft /></button>
      </div>
      <div className='col'>
        <div className='full-X-Block d-inline-flex justify-content-center  justify-content-lg-start  align-items-center '>
          <img className='d-lg-none' src={BrandMobile} alt="Brand logo" />
          <img className='d-none d-lg-block' src={BrandDesktop} alt="Brand logo" />
        </div>
      </div>
      <div className='col'>
        <div className='full-X-Block d-inline-flex justify-content-end align-items-center '>
          
          <div className='tooltip-Parent'>
            <button className='noBtn' onClick={openSearch}><BsSearch /></button>
            <div className='myTooltip'>Search</div>  
          </div>

          <div className='tooltip-Parent'>
            <a href=""  className='noBtn d-none d-lg-block'><BsTruck /></a>
            <div className='myTooltip'>Order Details</div>  
          </div>

          <div className='tooltip-Parent'>
            <button className='noBtn d-none d-lg-block' onClick={openLogin} ><BsPerson /></button>
            <div className='myTooltip'>Login</div>  
          </div>

          <div className='tooltip-Parent'>
            <a href="" className='noBtn d-none d-lg-block'><BsHeart /></a>
            <div className='myTooltip'>Wishlist</div>  
          </div>

          <div className='tooltip-Parent'>
            <button className='noBtn'  onClick={openCart} ><BsCart /></button>
            <div className='myTooltip'>Cart</div>  
          </div>

        </div>
      </div>
    </div>

    <div className='myNav' style={{transform: `${showNav}`}}>
           
      <div className='crossBtnParent d-lg-none'>
        <span></span>
        <button className='crossBtn'  onClick={hideAll} ><BsX/></button>
      </div>

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
          <a href="/collection">Winter 2023</a>
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