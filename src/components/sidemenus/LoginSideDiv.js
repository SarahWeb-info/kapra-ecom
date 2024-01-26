import React , {useState , useEffect , useContext } from 'react';
import MyContext from '../../context/globalContext/globalContext';
import {validateForm} from '../../formValdation';
import CrossBTn from '../crossBtn/CrossBTn';

export default function CheckoutSideDiv({ onClose }) {

  const { loggedInStatus , updateLoginDataFunc } = useContext( MyContext ) ;   
  const [ showDiv , setShowDiv ] = useState(' -100%');

  useEffect(() => {
    return () => {
      setShowDiv('0');
    };
  }, []);

  const showInput =(e)=>{
    const inputDiv = e.currentTarget.closest('.inputDiv');
    const input = inputDiv.querySelector('input');
    input.style.display = 'block';
  }
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  }; 

  const onLoginSubmit =(e) =>{
    e.preventDefault();
    
    let { valid , newFormErrors } = validateForm(formData);
    //check data validation
    if (valid) {
        // save data in local storage 
        localStorage.setItem("loginData" ,JSON.stringify(formData) );
        // updateLoginDataFunc
        updateLoginDataFunc();
        //clear the form data 
        // setFormData({ email: "", password: "", confirmPassword: "" });
        
    }else{
        console.log("validation failed");
        setFormErrors(newFormErrors);
    }
  }


  return (
  <div className="regularBg regularA justify-content-between sideMenu" style={{right : `${showDiv}`}}>  
    <div className='loginSideDiv columnCenter' >
    <CrossBTn title="Login"  onClose={onClose} />     
      {loggedInStatus && 
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
      
      {!loggedInStatus && 
      <form onSubmit={(e)=>onLoginSubmit(e)} className='width-100p-Height-Auto flexColum align-items-stretch p-2vh-2vw'>

        <div onClick={(e)=>showInput(e)} className='inputDiv'>
          <label htmlFor="email">Email <span className='highlighter'>*</span></label>
          <input type="text" id="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)}/>
        </div>
        {formErrors.email && <p className="error">{formErrors.email}</p>}

        <div onClick={(e)=>showInput(e)} className='inputDiv'>
          <label htmlFor="password">Password <span className='highlighter'>*</span></label>
          <input type="text" id="password" value={formData.password} onChange={(e) => handleInputChange("password", e.target.value)} />
        </div>
        {formErrors.password && <p className="error">{formErrors.password}</p>}

        <a href="http://" rel="noopener noreferrer">Forgot your password? </a>

        <button type="submit" className='highLightedBtn'>Sign In</button>

        <a href="/signUp" rel="noopener noreferrer">New Customer? Create an account</a>
      </form>
      }
    </div>
  </div>  
  )
}
