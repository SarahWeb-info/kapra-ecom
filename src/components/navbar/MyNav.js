import React from 'react'

export default function MyNav() {
  return (
    <div className='myNav myLabels' style={{transform: `${showNav}`}}  role='navigation' >
      {mobileSetup && 
        <CrossBTn  onClose={hideNavFunc} />     
      }   
    
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
          
            <div className='droplist'>

              <div className='myNavitem'>
                <a href="http://" className='dropTitle'>Women</a>
                {mobileSetup && 
                  <button className='dropBtn' onClick={(e)=>toggleDropdown(e)}><BsChevronRight /></button>
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

              <div className='myNavitem'>
                <a href="http://" className='dropTitle'>Men</a>
                {mobileSetup && 
                  <button className='dropBtn' onClick={(e)=>toggleDropdown(e)}><BsChevronRight /></button>
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

            {!mobileSetup && 
              <img src={smpImg1} alt="Sample Img" className='navImgs' />
            }    
          
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
  )
}
