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

  const [navbarPosition, setNavbarPosition] = useState('relative');

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const threshold = Math.min(window.innerHeight / 2, 500);

    setNavbarPosition(scrollPosition >= threshold ? 'fixed' : 'relative');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
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

  const toggleDropdown =(e)=>{
    if (mobileSetup) {
  
    const myNavitem = e.currentTarget.closest('.myNavitem');
    const activeDropParent = myNavitem.closest('.dropParent');
    const allDropParents = document.querySelectorAll('.dropParent');
    
    if(myNavitem){

      if(myNavitem.classList.contains('active')){
          myNavitem.classList.remove('active');
          if (myNavitem.classList.contains('dropParent1')) {
            // show all the other dropParent
            allDropParents.forEach(element => {
                element.style.display = 'block';
            });
          }
        }else{
          myNavitem.classList.add('active');
          if (myNavitem.classList.contains('dropParent1')) {
            // hide all the other dropParent
            allDropParents.forEach(element => {
              if (element !== activeDropParent) {
                element.style.display = 'none';
              }
            });
          }
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
  <div className='myNavbar full-X-Block'  style={{ position: navbarPosition }}>

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

    <div className='myNav myLabels' style={{transform: `${showNav}`}}  role='navigation' >
      {mobileSetup && 
        <CrossBTn  onClose={hideNavFunc} />     
      }   
    
    <div className='dropParent'>
      
      <div className='dropParent1 myNavitem'  onClick={(e)=>toggleDropdown(e)}>
        <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
        {mobileSetup && 
          <button className='dropBtn'><BsChevronRight /></button>
        }   
      </div>

      <div className='myDropdown align-content-start dropBox'>
        
          <div className='droplist'>
            <div>
              <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                <a href="http://" className='dropTitle'>Women</a>
                {mobileSetup && 
                  <button className='dropBtn'><BsChevronRight /></button>
                }   
              </div>

              <div className='myDropdown'>

                <div className='droplist'>
                  <a href="http://"  className='myNavitem' >Sweaters</a>
                  <a href="http://"  className='myNavitem'>Coats</a>
                  <a href="http://" className='myNavitem'>Jackets</a>
                </div>

              </div>
            </div>

            <div>
              <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                <a href="http://" className='dropTitle'>Men</a>
                {mobileSetup && 
                  <button className='dropBtn'><BsChevronRight /></button>
                }   
              </div>

              <div className='myDropdown'>
  
                  <div className='droplist'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>
  
              </div>
              
            </div>
    
        </div>

          {!mobileSetup && 
            <img src={smpImg1} alt="Sample Img" className='navImgs' />
          }    
        
      </div>

    </div>
        
    <div className='dropParent'>
      
      <div className='dropParent1 myNavitem'  onClick={(e)=>toggleDropdown(e)}>
        <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
        {mobileSetup && 
          <button className='dropBtn'><BsChevronRight /></button>
        }   
      </div>

      <div className='myDropdown align-content-start dropBox'>
        
          <div className='droplist'>
            <div>
              <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                <a href="http://" className='dropTitle'>Women</a>
                {mobileSetup && 
                  <button className='dropBtn'><BsChevronRight /></button>
                }   
              </div>

              <div className='myDropdown'>

                <div className='droplist'>
                  <a href="http://"  className='myNavitem' >Sweaters</a>
                  <a href="http://"  className='myNavitem'>Coats</a>
                  <a href="http://" className='myNavitem'>Jackets</a>
                </div>

              </div>
            </div>

            <div>
              <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                <a href="http://" className='dropTitle'>Men</a>
                {mobileSetup && 
                  <button className='dropBtn'><BsChevronRight /></button>
                }   
              </div>

              <div className='myDropdown'>
  
                  <div className='droplist'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>
  
              </div>
              
            </div>
    
        </div>

          {!mobileSetup && 
            <img src={smpImg1} alt="Sample Img" className='navImgs' />
          }    
        
      </div>

    </div>
    
      <div className='dropParent'>
      
        <div className='dropParent1 myNavitem'  onClick={(e)=>toggleDropdown(e)}>
          <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
          {mobileSetup && 
            <button className='dropBtn'><BsChevronRight /></button>
          }   
        </div>

        <div className='myDropdown align-content-start dropBox'>
          
            <div className='droplist'>
              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Women</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>

                  <div className='droplist'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>

                </div>
              </div>

              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Men</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>
    
                    <div className='droplist'>
                      <a href="http://"  className='myNavitem' >Sweaters</a>
                      <a href="http://"  className='myNavitem'>Coats</a>
                      <a href="http://" className='myNavitem'>Jackets</a>
                    </div>
    
                </div>
                
              </div>
      
          </div>

            {!mobileSetup && 
              <img src={smpImg1} alt="Sample Img" className='navImgs' />
            }    
          
        </div>

      </div>
      
      <div className='dropParent'>
      
        <div className='dropParent1 myNavitem'  onClick={(e)=>toggleDropdown(e)}>
          <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
          {mobileSetup && 
            <button className='dropBtn'><BsChevronRight /></button>
          }   
        </div>

        <div className='myDropdown align-content-start dropBox'>
          
            <div className='droplist'>
              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Women</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>

                  <div className='droplist'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>

                </div>
              </div>

              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Men</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>
    
                    <div className='droplist'>
                      <a href="http://"  className='myNavitem' >Sweaters</a>
                      <a href="http://"  className='myNavitem'>Coats</a>
                      <a href="http://" className='myNavitem'>Jackets</a>
                    </div>
    
                </div>
                
              </div>
      
          </div>

            {!mobileSetup && 
              <img src={smpImg1} alt="Sample Img" className='navImgs' />
            }    
          
        </div>

      </div>
      
      <div className='dropParent'>
      
        <div className='dropParent1 myNavitem'  onClick={(e)=>toggleDropdown(e)}>
          <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
          {mobileSetup && 
            <button className='dropBtn'><BsChevronRight /></button>
          }   
        </div>

        <div className='myDropdown align-content-start dropBox'>
          
            <div className='droplist'>
              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Women</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>

                  <div className='droplist'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>

                </div>
              </div>

              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Men</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>
    
                    <div className='droplist'>
                      <a href="http://"  className='myNavitem' >Sweaters</a>
                      <a href="http://"  className='myNavitem'>Coats</a>
                      <a href="http://" className='myNavitem'>Jackets</a>
                    </div>
    
                </div>
                
              </div>
      
          </div>

            {!mobileSetup && 
              <img src={smpImg1} alt="Sample Img" className='navImgs' />
            }    
          
        </div>

      </div>
      
      <div className='dropParent'>
      
        <div className='dropParent1 myNavitem'  onClick={(e)=>toggleDropdown(e)}>
          <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
          {mobileSetup && 
            <button className='dropBtn'><BsChevronRight /></button>
          }   
        </div>

        <div className='myDropdown align-content-start dropBox'>
          
            <div className='droplist'>
              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Women</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>

                  <div className='droplist'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>

                </div>
              </div>

              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Men</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>
    
                    <div className='droplist'>
                      <a href="http://"  className='myNavitem' >Sweaters</a>
                      <a href="http://"  className='myNavitem'>Coats</a>
                      <a href="http://" className='myNavitem'>Jackets</a>
                    </div>
    
                </div>
                
              </div>
      
          </div>

            {!mobileSetup && 
              <img src={smpImg1} alt="Sample Img" className='navImgs' />
            }    
          
        </div>

      </div>
      
      <div className='dropParent'>
      
        <div className='dropParent1 myNavitem'  onClick={(e)=>toggleDropdown(e)}>
          <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
          {mobileSetup && 
            <button className='dropBtn'><BsChevronRight /></button>
          }   
        </div>

        <div className='myDropdown align-content-start dropBox'>
          
            <div className='droplist'>
              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Women</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>

                  <div className='droplist'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>

                </div>
              </div>

              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Men</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>
    
                    <div className='droplist'>
                      <a href="http://"  className='myNavitem' >Sweaters</a>
                      <a href="http://"  className='myNavitem'>Coats</a>
                      <a href="http://" className='myNavitem'>Jackets</a>
                    </div>
    
                </div>
                
              </div>
      
          </div>

            {!mobileSetup && 
              <img src={smpImg1} alt="Sample Img" className='navImgs' />
            }    
          
        </div>

      </div>
      
      <div className='dropParent'>
      
        <div className='dropParent1 myNavitem'  onClick={(e)=>toggleDropdown(e)}>
          <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
          {mobileSetup && 
            <button className='dropBtn'><BsChevronRight /></button>
          }   
        </div>

        <div className='myDropdown align-content-start dropBox'>
          
            <div className='droplist'>
              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Women</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>

                  <div className='droplist'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>

                </div>
              </div>

              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Men</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>
    
                    <div className='droplist'>
                      <a href="http://"  className='myNavitem' >Sweaters</a>
                      <a href="http://"  className='myNavitem'>Coats</a>
                      <a href="http://" className='myNavitem'>Jackets</a>
                    </div>
    
                </div>
                
              </div>
      
          </div>

            {!mobileSetup && 
              <img src={smpImg1} alt="Sample Img" className='navImgs' />
            }    
          
        </div>

      </div>
      
      <div className='dropParent'>
      
        <div className='dropParent1 myNavitem'  onClick={(e)=>toggleDropdown(e)}>
          <a href="/collection">Winter 2023<sup className="myBadge alertBg">on Sale</sup></a>
          {mobileSetup && 
            <button className='dropBtn'><BsChevronRight /></button>
          }   
        </div>

        <div className='myDropdown align-content-start dropBox'>
          
            <div className='droplist'>
              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Women</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>

                  <div className='droplist'>
                    <a href="http://"  className='myNavitem' >Sweaters</a>
                    <a href="http://"  className='myNavitem'>Coats</a>
                    <a href="http://" className='myNavitem'>Jackets</a>
                  </div>

                </div>
              </div>

              <div>
                <div className='dropParent2 myNavitem' onClick={(e)=>toggleDropdown(e)}>
                  <a href="http://" className='dropTitle'>Men</a>
                  {mobileSetup && 
                    <button className='dropBtn'><BsChevronRight /></button>
                  }   
                </div>

                <div className='myDropdown'>
    
                    <div className='droplist'>
                      <a href="http://"  className='myNavitem' >Sweaters</a>
                      <a href="http://"  className='myNavitem'>Coats</a>
                      <a href="http://" className='myNavitem'>Jackets</a>
                    </div>
    
                </div>
                
              </div>
      
          </div>

            {!mobileSetup && 
              <img src={smpImg1} alt="Sample Img" className='navImgs' />
            }    
          
        </div>

      </div>
    
    </div>
    
  </div>
  );
}

export default MyNavbar;