import React from 'react';
import SmpLogo from '../../imgs/smpLogo-desktop.png';
import './footer.css';
import { BsWhatsapp  , BsInstagram } from "react-icons/bs";
import { TiSocialFacebook ,TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {

  const handleAccordianDisplay =(e)=>{
    if (window.innerWidth < 768) {

      let accordianItem = e.currentTarget.closest('.accordianItem');
      let accordianBtn = accordianItem.querySelector('.accordianBtn');
      let accordianBody = accordianItem.querySelector('.accordianBody');

      if(accordianBody.style.display === 'none' || accordianBody.style.display.length === 0){
        accordianBody.style.display = "flex";
        accordianBtn.style.transform= 'rotate(180deg)';
        accordianBtn.innerHTML = '-';
      }else{
        accordianBody.style.display = "none";
        accordianBtn.style.transform= 'rotate(-180deg)';
        accordianBtn.innerHTML = '+';
      }      
    }
  }

  return (
    <div className='footer'>

      <div className='firstFooter' >
        <p>Simply return it within 7 days for an exchange</p>
        <p>Flat shipping rate Rs. 100/-</p>

        <div>
          <p>Subscribe to our newsletter</p>
          <div className='customInputDiv'>
            <input type="text" placeholder='Your email address' />
            <button  className='customDarkBtn'>Subscribe</button>
          </div>
        </div>
      
      </div>

      <div className='regularA secondFooter d-flex flex-column flex-md-row '>

        <div className='accordianItem' onClick={(e)=>handleAccordianDisplay(e)}>
          <div className='accordianBtnDiv'>
            <p className='myLabels'>INFORMATION</p>
            <div>
              <span className='accordianBtn'>+</span>
            </div>
          </div>
          
          <div className='accordianBody'>
            <a href="http://">About Us</a>
            <a href="http://">Shipping and Handling</a>
            <a href="http://">Track Order</a>
            <a href="http://">Store Locator</a>
            <a href="http://">Blogs</a>
            <a href="http://">Catalogs</a>
          </div>
        </div>
      
        <div className='accordianItem' onClick={(e)=>handleAccordianDisplay(e)}>
          <div className='accordianBtnDiv'>
            <p className='myLabels'>Customer Care</p>
            <div>
              <span className='accordianBtn'>+</span>
            </div>
          </div>

          <div  className='accordianBody'>
            <a href="http://">Contact Us</a>
            <a href="http://">Privacy Policy</a>
            <a href="http://">Return & Exchange</a>
            <a href="http://">FAQ's</a>
            <a href="http://">Disclaimer</a>
          </div>
        </div>
      
        <div className='accordianItem' onClick={(e)=>handleAccordianDisplay(e)}>
          <div className='accordianBtnDiv'>
            <p className='myLabels'>Contact Us</p>
            <div>
              <span className='accordianBtn'>+</span>
            </div>
          </div>
          
          <div  className='accordianBody'>
            <p>Phone : 000-111-1234</p>
            <a href="http://">Email : SarahWeb@gmail.com</a>
            <p>Customer Care : Monday - Saturday | 09:00 AM - 06:00 PM </p>
            
          </div>
        </div>

    </div>

    <div className='socialDiv'>
      
      <img src={SmpLogo} alt="" />
      
      <div className='social'>
        
        <div className='tooltip-Parent'>
          <TiSocialFacebook/>
          <div className='myTooltip toolUp'>Follow us on WhatsApp</div>  
        </div>
        
        <div className='tooltip-Parent'>
          <BsInstagram/>
          <div className='myTooltip toolUp'>Follow us on WhatsApp</div>  
        </div>
        
        <div className='tooltip-Parent'>
          <TiSocialLinkedin/>
          <div className='myTooltip toolUp'>Follow us on WhatsApp</div>  
        </div>

        <div className='tooltip-Parent'>
          <BsWhatsapp />
          <div className='myTooltip toolUp'>Follow us on WhatsApp</div>  
        </div>

      </div>
    </div>


    <p className='copyright'>Copyright © 2023 SarahWeb - All rights reserved.</p>

    </div>
  )
}
