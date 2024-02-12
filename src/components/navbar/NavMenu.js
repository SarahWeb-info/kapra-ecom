import React, { useEffect, useState } from 'react';
import { collectNavData } from '../../data/navData';

import CrossBTn from '../crossBtn/CrossBTn';
import TruncateText from '../productText/TrancateText';
import { BsChevronRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

function NavMenu({ mobileSetup, hideNav }) {
  const { pathname } = useLocation();
  const [navData, setNavData] = useState([]);

  let callOnce = 0 ;

  useEffect(() => {
    
    const fetchData = async () => {

      try {
          setNavData(await collectNavData());

      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error as needed
      }
    }
    
    if (callOnce === 0) {
      fetchData();
      callOnce = 1 ;
    }
    
  }, []);

  const [showNav, setShowNav] = useState('translateX(-100%)');
  const [shortenedNavLength, setShortenedNavLength] = useState(navData.length);

  // Function to show and hide the mobile navigation
  const showNavFunc = () => {
    setShowNav('translateX(0)');
    clearNavDisplay();
  };

  // Function to handle responsive setup of navigation items in desktop Setup (the rest of the categories will be in the More Dropdown)
  const navResponsiveSetup = () => {
    if (!mobileSetup) {
      for (let i in navData) {
        if (i * 180 > window.innerWidth) {
          setShortenedNavLength(i);
          break;
        }
      }
    }
  };

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

  const hideNavFunc = () => {
    setShowNav('translateX(-100%)');
    hideNav();
  };

  // Function to toggle dropdown for mobile
  const toggleDropdown = (e) => {
    console.log("in toggle dropdown");
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

  useEffect(() => {
    showNavFunc();

    if (!mobileSetup) {
      setShortenedNavLength(navData.length);
      navResponsiveSetup();
    }
  }, [navData]);

  return (
    <div className="myNav myLabels" style={{ transform: `${showNav}` }} role="navigation">
      {mobileSetup && <CrossBTn onClose={hideNavFunc} />}

        <div className='dropParent'>
          <div className="inlineBetween myNavitem">
              <a href="/" className={pathname === '/' ? 'myNavActive' : ''}>
              Home
              </a>
          </div>
        </div>

      {navData &&
        navData.slice(0, shortenedNavLength).map((item, index) => {
          let shortenedName = item;

          if (shortenedName.length > 13) {
            shortenedName = TruncateText(shortenedName, 11);
          }

          return (
            <div
              key={index}
              className="dropParent"
            >
              <div className="inlineBetween myNavitem" >
                <a href={`/collection/${item}`}>{shortenedName}</a>
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
              {navData &&
                navData.slice(shortenedNavLength, navData.length).map((item, index) => {
                  let shortenedName = item;

                  if (shortenedName.includes('-')) {
                    shortenedName = shortenedName.split('-')[1];
                  }

                  if (shortenedName.length > 25) {
                    shortenedName = TruncateText(shortenedName, 25);
                  }

                  return <a key={index}  href={`/collection/${item}`} className="myNavitem" >{shortenedName}</a>;
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavMenu;