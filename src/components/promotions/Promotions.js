import React, { useState, useEffect } from 'react';
import { BsX, BsBellFill } from 'react-icons/bs';
import Img from '../../imgs/img1.jpg';
import './promotions.css';

export default function Promotions() {
  const [showDiv, setShowDiv] = useState('none');
  const [showAd, setShowAd] = useState(true);

  const openBellDiv = () => {
    setShowDiv('block');
  };

  const hideBellDiv = () => {
    setShowDiv('none');
  };

  const hideAd = () => {
    setShowAd(false);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      setShowAd(true);
    }, 10000);

    const interval2 = setInterval(() => {
      setShowDiv('block');
    }, 30000);

    const interval3 = setInterval(() => {
      setShowAd(false);
      setShowDiv('none');
    }, 10000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="bellAd">
      {showAd && (
        <div className="ad">
          <img src={Img} alt="" />
          <span className="px-2">
            <p>someone bought 4 suits</p>
            <a href="http://">
              <b>3 peice Khaddar suit</b>
            </a>
          </span>
          <button onClick={hideAd}>
            <BsX />
          </button>
        </div>
      )}
      <div className="bell">
        <span>
          <button className="btnBell" onClick={openBellDiv}>
            <BsBellFill />
          </button>
          <p style={{ display: `${showDiv}` }}>Get Updates by Subscribing our page</p>
        </span>
        <span>
          <button style={{ display: `${showDiv}` }}>Subscribe</button>
          <button onClick={hideBellDiv} style={{ display: `${showDiv}` }}>
            <BsX />
          </button>
        </span>
      </div>
    </div>
  );
}
