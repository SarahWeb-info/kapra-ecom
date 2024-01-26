import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../../context/globalContext/globalContext';
import {navCarouselData} from '../../data/navData';
import { useLocation } from 'react-router-dom';
import './navbar.css';
import CrossBTn from '../crossBtn/CrossBTn';
import { BsFilterLeft, BsSearch, BsTruck, BsPerson, BsHeart, BsCart, BsChevronRight } from 'react-icons/bs';
import MyCarousal from '../MyCarousal';
import TruncateText from '../productText/TrancateText';

function MyNavbar() {

  const { pathname } = useLocation();

  const { catagoryData , cartDisplayFunc, loginDisplayFunc, searchDisplayFunc } = useContext( MyContext ) ;
  const [ shortenedNavLength , setShortenedNavLength ] = useState( catagoryData.length ) ;
  const [ mobileSetup , setMobileSetup ] = useState( false ) ;
  const [ showNav , setShowNav ] = useState();
  const [ navbarPosition , setNavbarPosition ] = useState( 'relative' );

  // Function to handle responsive setup of navigation items in desktop Setup (the rest of the categories will be in the More Dropdown)
  const navResponsiveSetup = () => {
    if (window.innerWidth > 992) {
      for (let i in catagoryData) {
        if (i * 180 > window.innerWidth) {
          setShortenedNavLength(i);
          break;
        }
      }
    }
  };

  // Function to detect window resize and update mobile setup
  const handleResize = () => {
    let windowWidth = window.innerWidth;

    if (windowWidth < 992) {
      setMobileSetup(true);
    } else {
      setMobileSetup(false);
    }
  };

  // Event listener for window resize
  useEffect(() => {
    handleResize();

    const handleResizeEvent = () => {
      handleResize();
    };

    window.addEventListener('resize', handleResizeEvent);

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, []);

  // Function to handle scroll and update navbar position
  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const threshold = Math.min(window.innerHeight / 2, 500);
    setNavbarPosition(scrollPosition >= threshold ? 'fixed' : 'relative');
  };

  // Event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (!mobileSetup) {
      navResponsiveSetup();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.innerWidth]);

  // Function to clear navigation display state
  const clearNavDisplay = () => {
    const allDropParent = document.querySelectorAll('.dropParent');

    allDropParent.forEach((element) => {
      element.style.display = 'block';
    });

    const allNavitem = document.querySelectorAll('.myNavitem');

    allNavitem.forEach((element) => {
      element.classList.remove('active');
    });
  };

  // Function to show and hide the mobile navigation
  const showNavFunc = () => {
    setShowNav('translateX(0)');
    clearNavDisplay();
  };

  const hideNavFunc = () => {
    setShowNav('translateX(-100%)');
  };

  // Function to toggle dropdown for mobile
  const toggleDropdown = (e) => {
    if (mobileSetup) {
      const myNavitem = e.currentTarget.closest('.myNavitem');
      const activeNavParent = myNavitem.closest('.dropParent');
      const allDropParents = document.querySelectorAll('.dropParent');

      if (myNavitem) {
        if (myNavitem.classList.contains('active')) {
          myNavitem.nextElementSibling.style.animation = 'slideOut 0.6s 1';

          setTimeout(() => {
            myNavitem.classList.remove('active');
            // Show all the other dropParent
            allDropParents.forEach((element) => {
              element.style.display = 'block';
            });
          }, 600);
        } else {
          activeNavParent.style.display = 'block';
          myNavitem.classList.add('active');
          // Hide all the other dropParent
          allDropParents.forEach((element) => {
            if (element !== activeNavParent) {
              element.style.display = 'none';
            }
          });
        }
      }
    }
  };

  // Function to handle dropdown hover effect for desktop
  const hoverDropdown = (e, mouseEvent) => {
    if (!mobileSetup) {
      const timeouts = [];

      const dropParent = e.currentTarget.closest('.dropParent');
      const activeDropdown = dropParent.querySelector('.myDropdown');
      const activeDropdownLinks = activeDropdown.querySelectorAll('a');

      if (mouseEvent === 'enter') {
        activeDropdown.style.display = 'inline-flex';

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
          console.log('Overflowing dropdown');
        }
      } else {
        activeDropdown.style.display = 'none';

        activeDropdownLinks.forEach((element, index) => {
          const timeoutId = setTimeout(() => {
            element.style.opacity = '0';
          }, 100 * index);
          timeouts.push(timeoutId);
        });
      }
    }
  };

  return (
    <div className="myNavbar" style={{ position: `${navbarPosition}` }}>
      
      <MyCarousal class1="navCarousel" cusInterval={1000} customContent={navCarouselData} />

      <div className="inlineBetween navHeader">

        {mobileSetup && (
          <button className="noBtn" onClick={ showNavFunc }>
            <BsFilterLeft />
          </button>
        )}

        <a className="navBrand" href="/">
          <img src={mobileSetup ? require(`../../imgs/smpLogo-Mobile.png`) : require(`../../imgs/smpLogo-desktop.png`)} alt="Brand logo" />
        </a>

        <div className="flexInline align-items-end justify-content-end navFilters">
          <div className="tooltip-Parent">
            <button onClick={searchDisplayFunc}>
              <BsSearch />
            </button>
            <div className="myTooltip invertBg">Search</div>
          </div>

          {!mobileSetup && (
            <div className="tooltip-Parent">
              <a href="/OrderDetails">
                <BsTruck />
              </a>
              <div className="myTooltip invertBg">Order Details</div>
            </div>
          )}

          {!mobileSetup && (
            <div className="tooltip-Parent">
              <button onClick={loginDisplayFunc}>
                <BsPerson />
              </button>
              <div className="myTooltip invertBg">Login</div>
            </div>
          )}

          {!mobileSetup && (
            <div className="tooltip-Parent">
              <a href="/wishlist">
                <BsHeart />
              </a>
              <div className="myTooltip invertBg">Wishlist</div>
            </div>
          )}

          <div className="tooltip-Parent">
            <button onClick={cartDisplayFunc}>
              <BsCart />
            </button>
            <div className="myTooltip invertBg">Cart</div>
          </div>
        </div>
      </div>

      <div className="myNav myLabels" style={{ transform: `${showNav}` }} role="navigation">
        {mobileSetup && <CrossBTn onClose={hideNavFunc} />}

        <div className="inlineBetween myNavitem">
          <a href="/" className={pathname === "/" ? 'myNavActive' : ''}>Home</a>
        </div>

        {catagoryData &&
          catagoryData.slice(0, shortenedNavLength).map((item, index) => {
            let shortenedName = item.CatagoryName;

            if (shortenedName.length > 13) {
              shortenedName = TruncateText(shortenedName, 11);
            }

            return (
              <div
                key={index}
                className="dropParent"
                onMouseEnter={(e) => hoverDropdown(e, 'enter')}
                onMouseLeave={(e) => hoverDropdown(e, 'leave')}
              >
                <div className="inlineBetween myNavitem" onClick={(e) => toggleDropdown(e)}>
                  <a href="/collection">{shortenedName}</a>
                  
                  {mobileSetup && <button className="dropBtn"><BsChevronRight /></button>}
                </div>

                <div className="myDropdown glassBg">
                  <div className="flexColumn align-items-start droplist">
                    {item.CatagoryList.map((element, subIndex) => {
                      let dropNames = element.name;

                      if (dropNames.length > 25) {
                        dropNames = TruncateText(dropNames, 25);
                      }

                      return <a key={subIndex} href="/collection" className="myNavitem">{dropNames}</a>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}

        {!mobileSetup && (
          <div
            className="dropParent"
            onMouseEnter={(e) => hoverDropdown(e, 'enter')}
            onMouseLeave={(e) => hoverDropdown(e, 'leave')}
          >
            <div className="inlineBetween myNavitem" onClick={(e) => toggleDropdown(e)}>
              <button className="myLabels">
                More<BsChevronRight />
              </button>
            </div>

            <div className="myDropdown glassBg">
              <div className="flexColumn align-items-start droplist">
                {catagoryData &&
                  catagoryData
                    .slice(shortenedNavLength, catagoryData.length)
                    .map((item, index) => {
                      let shortenedName = item.CatagoryName;

                      if (shortenedName.includes('-')) {
                        shortenedName = shortenedName.split('-')[1];
                      }

                      if (shortenedName.length > 25) {
                        shortenedName = TruncateText(shortenedName, 25);
                      }

                      return <a key={index} href="http://" className="myNavitem">{shortenedName}</a>;
                    })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyNavbar;
