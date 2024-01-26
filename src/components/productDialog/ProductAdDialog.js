import React, { useState, useEffect } from 'react';
import { BsX } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import Img from '../../imgs/img1.jpg';
import './productDialog.css';

export default function ProductAdDialog() {
  const [showDialog, setShowDialog] = useState(true);
  const showAd = localStorage.getItem("showAd");
  const { pathname } = useLocation();

  useEffect(() => {
    if(showAd){
       setShowDialog(false);
    }else{
       setShowDialog(true);
    }
  }, [showAd , pathname]);

  const hideFadeBg = () => {
    setShowDialog(false);
  };

  const updateAdStatus = (isChecked) => {
    localStorage.setItem("showAd", isChecked ? false : true);
  };

  return (
    <>
      {showDialog && (
        <>
          <div className='fadeBg' onClick={hideFadeBg} style={{ zIndex: '104' }}></div>

          <div className='centerFixed regularBg dialog'>
            <button onClick={hideFadeBg} className='cross'>
              <BsX />
            </button>

            <div className='dialogBanner'>
              <img src={Img} alt="" />
              <p>AVAILABLE NOW</p>
            </div>

            <div className='flexColumn align-content-center dialogDetail' style={{ justifyContent: 'space-evenly' }}>

              <h4>JOIN OUR MAILING LIST TO </h4>
              <p className='text-right'>Be the first one to know about the latest trends and promotions.</p>
              <div className='customInputDiv borderRadius-334'>
                <input type="text" placeholder='Your email address' />
                <button className='customDarkBtn'>Subscribe</button>
              </div>
              <div className='d-inline-flex'>
                <input type="checkbox" name="" id="adNoRepeat" onChange={(e) => updateAdStatus(e.target.checked)} />
                <label htmlFor="adNoRepeat">Do not show it anymore.</label>
              </div>

            </div>

          </div>

        </>
      )}
    </>
  );
}
