import React , {useState , useEffect} from 'react'
import { BsX , BsBellFill } from "react-icons/bs";
import Img from "../../imgs/img1.jpg";
import "./promotions.css";

export default function Promotions() {
    
    const [ showDiv , setShowDiv ] = useState('none');  
    const [ showAd , setShowAd ] = useState(true);    
    
    const [ showDialog , setShowDialog ] = useState();
      
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
        setShowDialog(1);
        
        if(adStatus && parseInt(adStatus) === 0){
            setShowDialog(0);
        }

    }, 10000);

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
        localStorage.setItem("adStatus", x);
    } 

  return (
    <>
    {showDialog &&
    <>
    <div className='fadeBg' onClick={hideFadeBg} style={{zIndex:'104'}}></div>
    
    <div className='centerFixed regularBg dialog'>
        <button onClick={hideFadeBg} className='cross'><BsX /></button>
        
        <div className='dialogBanner'>
            <img src={Img} alt=""  />
            <p>AVAILABLE NOW</p>
        </div>

        <div className='flexColumn  align-content-center  dialogDetail' style={{ justifyContent : 'space-evenly'}}>
        
            <h4>JOIN OUR MAILING LIST TO </h4>
            <p className='text-right'>Be the first one to know about the latest trends and promotions.</p>
            <div className='customInputDiv borderRadius-334'>
                <input type="text" placeholder='Your email address'/>
                <button className='customDarkBtn'>Subscribe</button>
            </div>
            <div className='d-inline-flex'>
                <input type="checkbox" name="" id="adNoRepeat" onChange={(e) => updateAdStatus(e.target.checked ? 0 : 1)}/>
                <label htmlFor="adNoRepeat">Do not show it anymore.</label>
            </div>
        
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
