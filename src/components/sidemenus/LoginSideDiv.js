import React , {useState , useEffect } from 'react';
import CrossBTn from '../crossBtn/CrossBTn';

export default function CheckoutSideDiv({ onClose }) {

  const [ showDiv , setShowDiv ] = useState(' -100%');
  const [loggedIn, setloggedIn] = useState(true);
    
  useEffect(() => {
    return () => {
      setShowDiv('0');
    };
  }, []);

  const handleHide = () => {
    console.log("in handle hide");
    if (onClose) {
      onClose();
    }
  }

  const showInput =(e)=>{
    const inputDiv = e.currentTarget.closest('.inputDiv');
    const input = inputDiv.querySelector('input');
    input.style.display = 'block';
  }
    
  return (
  <div className="regularBg regularA justify-content-between sideMenu" style={{right : `${showDiv}`}}>  
    <div className='loginSideDiv columnCenter' >
    <CrossBTn title="Login"  onClose={handleHide} />     
      {loggedIn && 
        <div>
          <div className='width-100p-Height-Auto flexInline flex-wrap loginSideDivGrid '>
            
            <a className='columnCenter' href=''>
              <span>Wishlist</span>
              <small>21 items</small>
            </a>
            
            <a className='columnCenter'>
              <span>Cart</span>
              <small>21 items</small>
            </a>

            <a className='columnCenter'>
              <span>To Recieve</span>
              <small>21 items</small>
            </a>

            <a className='columnCenter'>
              <span>My Orders</span>
              <small>21 items</small>
            </a>

            <a className='columnCenter'>
              <span>To Reveiw</span>
              <small>21 items</small>
            </a>

          </div>
          <p className='showA'><a href="">Notifications Settings ></a></p>
          <p className='showA'><a href="">Account Settings ></a></p>
        </div>
        }
      
      {!loggedIn && 
      <form action="" className='width-100p-Height-Auto flexColum align-items-stretch p-2vh-2vw'>

        <div onClick={(e)=>showInput(e)} className='inputDiv'>
          <label htmlFor="signInEmail">Email <span className='highlighter'>*</span></label>
          <input type="text" id="signInEmail" />
        </div>

        <div onClick={(e)=>showInput(e)} className='inputDiv'>
          <label htmlFor="signInPassword">Password <span className='highlighter'>*</span></label>
          <input type="text" id="signInPassword" />
        </div>

        <a href="http://" target="_blank" rel="noopener noreferrer">Forgot your password? </a>

        <button type="submit" className='highLightedBtn'>Sign In</button>

        <a href="/signUp" target="_blank" rel="noopener noreferrer">New Customer? Create an account</a>
      </form>
      }
    </div>
  </div>  
  )
}
