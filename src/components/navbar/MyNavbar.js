import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../../context/globalContext/globalContext';
import {navCarouselData } from '../../data/navData';
import './navbar.css';
import { BsFilterLeft, BsSearch, BsTruck, BsPerson, BsHeart, BsCart } from 'react-icons/bs';
import MyCarousal from '../MyCarousal';
import NavMenu from './NavMenu';

function MyNavbar() {
  const { cartDisplayFunc, loginDisplayFunc, searchDisplayFunc } = useContext(MyContext);

  const [mobileSetup, setMobileSetup] = useState(false);
  const [navbarPosition, setNavbarPosition] = useState('relative');
  const [navMenu, setNavMenu] = useState(false);

  // Function to detect window resize and update mobile setup
  const handleResize = () => {
    let windowWidth = window.innerWidth;

    if (windowWidth < 992) {
      setMobileSetup(true);
    } else {
      setMobileSetup(false);
      setNavMenu(true);
    }
  };

  // Function to handle scroll and update navbar position
  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const threshold = Math.min(window.innerHeight / 2, 500);
    setNavbarPosition(scrollPosition >= threshold ? 'fixed' : 'relative');
  };

  // Event listener for window resize and navbar fix position
  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to show nav menu
  const showNav = () => {
    setNavMenu(true);
  };

  // Function to hide nav menu
  const hideNav = () => {
    setNavMenu(false);
  };

  return (
    <div className="myNavbar" style={{ position: navbarPosition }}>
      <MyCarousal class1="navCarousel" cusInterval={1000} customContent={navCarouselData} />

      <div className="inlineBetween navHeader">
        {mobileSetup && (
          <button className="noBtn" onClick={showNav}>
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

      {navMenu && 
        <NavMenu mobileSetup={mobileSetup} hideNav={hideNav} />
      }

    </div>
  );
}

export default MyNavbar;