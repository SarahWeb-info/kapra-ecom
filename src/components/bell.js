import React , {useState , useEffect} from 'react'
import { BsBellFill , BsX } from "react-icons/bs";
import "../css/bell.css";
import Img from "../imgs/img1.jpg";

export default function Bell() {
    
    const [ showDiv , setShowDiv ] = useState('none');  
    const [ showAd , setShowAd ] = useState(true);    
    const [ showDialog , setShowDialog ] = useState(true);  

    const adStatus = localStorage.getItem("adStatus");

  const openBellDiv =()=>{
    setShowDiv('block');
  }

  const hideBellDiv =()=>{
    setShowDiv('none');
  }

  const hideAd =()=>{
    setShowAd(false)
  }

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

        if (adStatus) {
            setShowDialog(true);
        }
    }, 300000);

    // Clear intervals on component unmount
    return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
    };
}, [adStatus]);


    const hideFadeBg =(x)=>{
        setShowDialog(false);
      }
    
    const updateAdStatus =(x) =>{
        console.log(x);
        localStorage.setItem("adStatus", x);
    } 

  return (
    <>
    {showDialog &&
    <>
    <div className='fadeBg' onClick={hideFadeBg} style={{top : '0px' , left :'0px'}}></div>    
    
    <div className='dialogAd'>
        <button onClick={hideFadeBg} ><BsX /></button>
        
        <div className='dialogBanner'>
            <img src={Img} alt=""  />
            <p>AVAILABLE NOW</p>
        </div>
        <div>
            <h4>JOIN OUR MAILING LIST TO </h4>
            <p>Be the first one to know about the latest trends and promotions.</p>
            <span className='dialogAdInput'>
                <input type="text" placeholder='Your email address'/>
                <button>Subscribe</button>
            </span>
            <span>
                <input type="checkbox" name="" id="adNoRepeat" onChange={(e) => updateAdStatus(e.target.checked ? true : false)}/>
                <label htmlFor="adNoRepeat">Do not show it anymore.</label>
            </span>
        </div>
    </div>
    </>
    }

    <div className='bellAd'>
        {showAd && 
            <div className='ad'>
                <img src={Img} alt="" />
                <span className='px-2'>
                    <p>someone bought 4 suits</p>
                    <a href="http://"><b>3 peice Khaddar suit</b></a>    
                </span>
                <button onClick={hideAd}><BsX /></button>
            </div>
        }
        <div className='bell'>
            <span>
                <button className='btnBell' onClick={openBellDiv}><BsBellFill /></button>
                <p style ={{display : `${showDiv}` }} >Get Updates by Subscribing our page</p>
            </span> 
            <span>
                <button style ={{display : `${showDiv}` }}>Subscribe</button>
                <button  onClick={hideBellDiv} style ={{display : `${showDiv}` }}><BsX /></button>
            </span>
        </div>
    </div>
    </>
  )
}
