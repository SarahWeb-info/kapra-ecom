import React , { useState , useEffect , useContext , useRef  } from 'react';
import context from '../../context/frontend/context';

import './navbar.css';
import CrossBTn from '../globalHelpers/CrossBTn';
import { BsFilterLeft , BsSearch , BsTruck  ,BsPerson , BsHeart , BsCart ,BsChevronRight} from "react-icons/bs";

import BrandMobile from '../../imgs/smpLogo-Mobile.png';
import BrandDesktop from '../../imgs/smpLogo-desktop.png';
import MyCarousal from "../MyCarousal";
import {categoryList , navCarouselData} from '../../backend/navData';
import handleResize from '../../functions/handleResize';
import TruncateText from '../../functions/TrancateText';

function MyNavbar() {

  const [mobileSetup, setMobileSetup] = useState(handleResize);
  
  const [shortenedNavLength , setShortenedNavLength] = useState(categoryList.length);

  const navResponsiveSetup =()=>{
    for(let i in categoryList){
    
      if (i*150> window.innerWidth) {
        setShortenedNavLength(i);
        break; 
      }
    }
  }

  const [navbarPosition, setNavbarPosition] = useState('relative');
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const threshold = Math.min(window.innerHeight / 2, 500);
    
    setNavbarPosition(scrollPosition >= threshold ? 'fixed' : 'relative');
  };
  
  useEffect(() => {
    window.addEventListener('resize', () => setMobileSetup(handleResize));
    window.addEventListener('scroll', handleScroll);
    
    if (!mobileSetup) {
      navResponsiveSetup();
    }
    
    return () => {
      window.removeEventListener('resize', () => setMobileSetup(handleResize));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.innerWidth]);
    
  const { updateCart , updateLogin , updateSearch } = useContext(context);
  const [ showNav , setShowNav ] = useState();

  const clearNavDisplay =()=>{

    const allDropParent = document.querySelectorAll('.dropParent');

    allDropParent.forEach((element) => {
      element.style.display = 'block';
    });

    const allNavitem = document.querySelectorAll('.myNavitem');

    allNavitem.forEach((element) => {
      element.classList.remove('active');
    });

  }
  
  const showNavFunc =()=>{
    setShowNav('translateX(0)');
    clearNavDisplay();
  }
  const hideNavFunc =()=>{
    setShowNav('translateX(-100%)');
  }

  const toggleDropdown = (e) =>{
    if (mobileSetup) {
  
      const myNavitem = e.currentTarget.closest('.myNavitem');
      const activeNavParent = myNavitem.closest('.dropParent');

      const allDropParents = document.querySelectorAll('.dropParent');

      if(myNavitem){

        if(myNavitem.classList.contains('active')){

          myNavitem.nextElementSibling.style.animation = 'slideOut 0.6s 1';

          setTimeout(() => {

            myNavitem.classList.remove('active');
            // show all the other dropParent
            allDropParents.forEach((element) => {
              element.style.display = 'block';
            });
            
            }, 600);

        }else{
          activeNavParent.style.display = 'block';
          myNavitem.classList.add('active');
          // hide all the other dropParent
          allDropParents.forEach(element => {
            if (element !== activeNavParent) {
              element.style.display = 'none';
            }
          });
        }
      }
    }  
  }


return (
  <div className='myNavbar full-X-Block'  style={{ position: navbarPosition }}>

    <MyCarousal 
        class1 = "navCarousel" 
        cusInterval = {1000}  
        customContent={navCarouselData}
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

   <div className='myNav myLabels' style={{transform: `${showNav}`}}  role='navigation' >
      {mobileSetup && 
        <CrossBTn  onClose={hideNavFunc} />     
      }   
    
    {    
      categoryList && categoryList.slice(0, shortenedNavLength).map((item, index) => {  

        let shortenedName = item.CatagoryName;
        
        if (shortenedName.includes('-')) {
          shortenedName = shortenedName.split('-')[1];
        }

        if (shortenedName.length > 13) {
          shortenedName = TruncateText(shortenedName, 11);
        }

    return (
      <div key={index} className='dropParent'>

        <div className='myNavitem' onClick={(e) => toggleDropdown(e)}>
        
          <a href="/collection" >
            {shortenedName}
          </a>
        
          {mobileSetup && 
            <button className='dropBtn'><BsChevronRight /></button>
          }   
        
        </div>
        
        <div className="myDropdown" >
        
          <div className='droplist'>
            {item.CatagoryList.map((element, subIndex) => (
              <a key={subIndex} href="/product" className='myNavitem'>{element.name}</a>
            ))}
          </div>
        
        </div>

      </div>
    );
  })}

  {!mobileSetup && (
    <div className='dropParent'>

      <div className='myNavitem' onClick={(e) => toggleDropdown(e)}>
        <button className='myLabels'>More<BsChevronRight /></button>
      </div>

      <div className="myDropdown">
        <div className='droplist'>

        {
        categoryList && categoryList.slice(shortenedNavLength, categoryList.length).map((item, index) => (
          <a key={index} href="http://" className='myNavitem'>{item.CatagoryName}jj</a>
        ))
        }

        </div>
      </div>
    </div>
  )}

</div>
    
  </div>
  );
}

export default MyNavbar;