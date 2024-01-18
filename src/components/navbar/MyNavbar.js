import React , { useState , useEffect , useContext  } from 'react';
import menuContext from '../../context/frontend/context';

import './navbar.css';
import CrossBTn from '../globalHelpers/CrossBTn';
import { BsFilterLeft , BsSearch , BsTruck  ,BsPerson , BsHeart , BsCart ,BsChevronRight} from "react-icons/bs";

import MyCarousal from "../MyCarousal";
import {categoryList , navCarouselData} from '../../backend/navData';
import TruncateText from '../../frontendFunc/TrancateText';

function MyNavbar() {
  const [shortenedNavLength , setShortenedNavLength] = useState(categoryList.length);
  
  const navResponsiveSetup =()=>{
    for(let i in categoryList){
    
      if (i*150> window.innerWidth) {
        setShortenedNavLength(i);
        break; 
      }
    }
  }

  const [mobileSetup, setMobileSetup] = useState(false);
  const detectingResize = () => {
    let windowWidth = window.innerWidth;

    if (windowWidth < 992) {
      setMobileSetup(true);
    } else {
      setMobileSetup(false);
    }
  }

  useEffect(() => {
    detectingResize(); // Initial setup

    const handleResize = () => {
      detectingResize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const [navbarPosition, setNavbarPosition] = useState('relative');
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const threshold = Math.min(window.innerHeight / 2, 500);
    
    setNavbarPosition(scrollPosition >= threshold ? 'fixed' : 'relative');
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    if (!mobileSetup) {
      navResponsiveSetup();
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.innerWidth]);
  
  const { updateCart , updateLogin , updateSearch } = useContext(menuContext);
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

  const hoverDropdown =(e , mouseEvent )=>{
    if(!mobileSetup){
      const timeouts = [];

      const dropParent = e.currentTarget.closest('.dropParent');
      const activeDropdown = dropParent.querySelector('.myDropdown');
      const activeDropdownLinks = activeDropdown.querySelectorAll('a');
      
      if (mouseEvent === "enter") {
        activeDropdown.style.display = "inline-flex";

        activeDropdownLinks.forEach((element, index) => {
          const timeoutId = setTimeout(() => {
            element.style.opacity = '1';
          }, 100 * index); 
          timeouts.push(timeoutId);
        });
      
        // Check if the dropdown overflows the window's inner width
        const dropdownPos = activeDropdown.getBoundingClientRect();
        const windowInnerWidth = window.innerWidth;
        
        if (dropdownPos.left < 0) {
          activeDropdown.style.left = '0px';
          activeDropdown.style.transform = 'translateX(0)';

        }

        if (dropdownPos.right > windowInnerWidth) {
          // Adjust the position of the dropdown to fit within the window
          activeDropdown.style.left = windowInnerWidth - dropdownPos.right + 'px';
          console.log("overflowing dropdown");
        }  

      }else{
        activeDropdown.style.display = "none";

        activeDropdownLinks.forEach((element, index) => {
          const timeoutId = setTimeout(() => {
            element.style.opacity = '0';
          }, 100 * index); 
          timeouts.push(timeoutId);
        });

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
  
    <div className='inlineCenter navHeader'>
      {mobileSetup && 
        <button className='noBtn' onClick={showNavFunc}><BsFilterLeft /></button>
      }   

      <a className='navBrand' href='/'>
        {mobileSetup && 
          <img src={require(`../../imgs/smpLogo-Mobile.png`)} alt="Brand logo" />
        }   
        {!mobileSetup && 
          <img src={require(`../../imgs/smpLogo-desktop.png`)} alt="Brand logo" />
        }
      </a>

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
      <div key={index} className='dropParent' onMouseEnter={(e) => hoverDropdown(e , "enter")} onMouseLeave={(e) => hoverDropdown(e , "leave")}>

        <div className='inlineCenter myNavitem' onClick={(e) => toggleDropdown(e)}>
        
          <a href="/collection" >
            {shortenedName}
          </a>
        
          {mobileSetup && 
            <button className='dropBtn'><BsChevronRight /></button>
          }   
        
        </div>
        
        <div className="myDropdown glassBg" >
        
          <div className='droplist'>
            {item.CatagoryList.map((element, subIndex) => {
              
              let dropNames = element.name;
        
              if (dropNames.includes('-')) {
                dropNames = dropNames.split('-')[1];
              }
      
              if (dropNames.length > 25) {
                dropNames = TruncateText(dropNames, 25);
              }
              return(
                <a key={subIndex} href="/collection" className='myNavitem'>{dropNames}</a>
              ) 
            })}
          </div>
        
        </div>

      </div>
    );
  })}

  {!mobileSetup && (
    <div className='dropParent'  onMouseEnter={(e) => hoverDropdown(e , "enter")} onMouseLeave={(e) => hoverDropdown(e , "leave")}>

      <div className='inlineCenter myNavitem' onClick={(e) => toggleDropdown(e)}>
        <button className='myLabels'>More<BsChevronRight /></button>
      </div>

      <div className="myDropdown  glassBg">
        <div className='droplist'>

        {
          categoryList && 
            categoryList
              .slice(shortenedNavLength, categoryList.length)
              .map((item, index) => {

                let shortenedName = item.CatagoryName;
        
                if (shortenedName.includes('-')) {
                  shortenedName = shortenedName.split('-')[1];
                }
        
                if (shortenedName.length > 25) {
                  shortenedName = TruncateText(shortenedName, 25);
                }
        
                return(
                  <a key={index} href="http://" className='myNavitem'>{shortenedName}</a>
                )
              })
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