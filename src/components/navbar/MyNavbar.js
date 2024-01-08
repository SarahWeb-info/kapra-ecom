import React , { useState , useEffect , useContext  } from 'react';
import context from '../../context/frontend/context';

import './navbar.css';
import CrossBTn from '../globalHelpers/CrossBTn';
import { BsFilterLeft , BsSearch , BsTruck  ,BsPerson , BsHeart , BsCart ,BsChevronRight} from "react-icons/bs";

import BrandMobile from '../../imgs/smpLogo-Mobile.png';
import BrandDesktop from '../../imgs/smpLogo-desktop.png';
import smpImg1 from '../../imgs/img1.jpg';
import MyCarousal from "../MyCarousal";

function MyNavbar() {

  const { updateCart , updateLogin , updateSearch } = useContext(context);
  const [ showNav , setShowNav ] = useState();

  const showNavFunc =()=>{
    setShowNav('translateX(0)');
  }
  const hideNavFunc =()=>{
    setShowNav('translateX(-100%)');
  }

  const toggleDropdown =(e)=>{

    const myNavitem = e.currentTarget.closest('.myNavitem');
    const dropBtn = e.currentTarget.closest('.dropBtn');
    
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
            myNavitem.style.flexDirection = 'row';
            myNavitem.style.justifyContent = 'space-between';
            dropBtn.style.transform = 'rotate(0)';
          }, 1000);
          
        }else{
          
          myNavitem.style.backgroundColor = "var(--grayBase)";
          myNavitem.style.flexDirection = 'row-reverse';
          myNavitem.style.justifyContent = 'flex-end';
          dropBtn.style.transform = 'rotate(180deg)';
          myDropdown.style.display = "block";
          myDropdown.style.animation = "slideIn 1s 1";
        }
      }  
    }
}

let windowWidth = window.innerWidth; 
const [mobileSetup, setMobileSetup] = useState(true);

useEffect(() => {
  const screenSettings = () => {
    if (windowWidth < 992) {
      setMobileSetup(true);
    } else {
      setMobileSetup(false);
    }
  }

  screenSettings();

  const handleResize = () => {
    windowWidth = window.innerWidth;
    screenSettings();
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [windowWidth]);

let navCarousalData = [    {
    titleContent: (<small>Fixed delivery charges,Rs 100/-</small>),
  },
  {
    titleContent: (<small>Best sellers.<a href="">Shop Now!</a></small>),
  },
];

return (
  <div className='myNavbar full-X-Block'>

    <MyCarousal 
        class1 = "navCarousel" 
        cusInterval = {1000}  
        customContent={navCarousalData}
    />
  
    <div className='navHeader'>
      {mobileSetup && 
        <button className='noBtn' onClick={showNavFunc}><BsFilterLeft /></button>
      }   

      <div className='navBrand'>
        {mobileSetup && 
          <img src={BrandMobile} alt="Brand logo" />
        }   
        {!mobileSetup && 
          <img src={BrandDesktop} alt="Brand logo" />
        }
      </div>

      <div className='navFilters'>
         
          <div className='tooltip-Parent'>
            <button onClick={updateSearch}><BsSearch /></button>
            <div className='myTooltip'>Search</div>  
          </div>

          {!mobileSetup && 
            <div className='tooltip-Parent'>
              <a href=""><BsTruck /></a>
              <div className='myTooltip'>Order Details</div>  
            </div>
          }   

          {!mobileSetup && 
            <div className='tooltip-Parent'>
              <button onClick={updateLogin} ><BsPerson /></button>
              <div className='myTooltip'>Login</div>  
            </div>
          }   

          {!mobileSetup && 
            <div className='tooltip-Parent'>
              <a href=""><BsHeart /></a>
              <div className='myTooltip'>Wishlist</div>  
            </div>
          }   


          <div className='tooltip-Parent'>
            <button onClick={updateCart} ><BsCart /></button>
            <div className='myTooltip'>Cart</div>  
          </div>

      </div>
    </div>

    <div className='myNav myLabels' style={{transform: `${showNav}`}}>
      {mobileSetup && 
        <CrossBTn  onClose={hideNavFunc} />     
      }   

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
      
        <div className='firstDropParent myNavitem'>
          <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
          {mobileSetup && 
            <button className='dropBtn' onClick={(e)=>toggleDropdown(e)}><BsChevronRight /></button>
          }   
        </div>

        <div className='myDropdown align-content-start dropBox'>
          
            <div className='d-flex flex-column align-items-start'>

              <div className='myNavitem'>
                <a href="http://" className='dropTitle'>Women</a>
                {mobileSetup && 
                  <button className='dropBtn' onClick={(e)=>toggleDropdown(e)}><BsChevronRight /></button>
                }   
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

              <div className='myNavitem'>
                <a href="http://" className='dropTitle'>Men</a>
                {mobileSetup && 
                  <button className='dropBtn' onClick={(e)=>toggleDropdown(e)}><BsChevronRight /></button>
                }   
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
        <a href="/">home</a>
      </div>
      
      <div className='myNavitem dropParent'>
        <a href="/docs">Handbags</a>
      </div>
    </div>
    
  </div>
  );
}

export default MyNavbar;