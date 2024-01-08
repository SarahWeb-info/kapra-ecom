import React , {useState , useEffect } from 'react';
import CrossBTn from '../globalHelpers/CrossBTn';

export default function CheckoutSideDiv({ onClose }) {

  const [ showDiv , setShowDiv ] = useState(' -100%');
    
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
  <div className="sideMenu" style={{right : `${showDiv}`}}>  
    <div className='loginSideDiv' >
    <CrossBTn title="Login"  onClose={handleHide} />     

      <form action="">

        <div onClick={(e)=>showInput(e)} className='inputDiv'>
          <label htmlFor="signInEmail">Email <span className='highlighter'>*</span></label>
          <input type="text" id="signInEmail" />
        </div>

        <div onClick={(e)=>showInput(e)} className='inputDiv'>
          <label htmlFor="signInPassword">Password <span className='highlighter'>*</span></label>
          <input type="text" id="signInPassword" />
        </div>


        <a href="http://" target="_blank" rel="noopener noreferrer">Forgot your password? </a>

        <button type="submit" className='sideMenuBtns'>Sign In</button>

        <a href="http://" target="_blank" rel="noopener noreferrer">New Customer? Create an account</a>
      </form>
    </div>
  </div>  
  )
}
