import React , {useContext , useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/globalContext/globalContext';
import {validateForm} from '../formValdation';
import '../css/signUpForm.css';

export default function SignUp() {
    const navigate = useNavigate();
    const { updateLoginDataFunc , loggedInStatus } = useContext( MyContext ) ;   
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
      });
      
      const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
      });
      
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
        setFormData({ email: "", password: "", confirmPassword: "" });
        //go to home page
        navigate('/');
    }else{
        console.log("validation failed");
        setFormErrors(newFormErrors);
    }
  }

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className='columnCenter pageDiv'>

        {!loggedInStatus && 
        <div className='signUpForm'>
            <h1>SignUp</h1>
            <small>Signing Up will help save your data from being lost .</small>
            <form className='columnCenter' onSubmit={(e)=>onLoginSubmit(e)}>

                <div className='inlineBetween'>
                    <label htmlFor="signInEmail">Email </label>
                    <input
                        type="text"
                        id="signInEmail"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                </div>
                {formErrors.email && <p className="error">{formErrors.email}</p>}

                <div className='inlineBetween'>
                    <label htmlFor="signInPassword">Password </label>
                    <input
                        type="password"
                        id="signInPassword"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        />
                </div>
                {formErrors.password && <p className="error">{formErrors.password}</p>}

                <div className='inlineBetween'>
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    />
                </div>
                {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}

                <button type="submit" className='highLightedBtn'>Sign Up</button>

                <div className='d-flex flex-inline' style={{width : '100%'}}>
                    <input type="checkbox" id="saveLogin"  style={{width : 'fit-content'}} />
                    <label htmlFor="saveLogin"> Save password for next time ?</label>
                </div>

                <div className='inlineCenter justify-content-start' style={{width : '100%'}}>
                    <input type="checkbox" id="subscribe" style={{width : 'fit-content'}} />
                    <label htmlFor="subscribe"> Subscribe for email notifications</label>
                </div>

            </form>
        </div>
        }
        {loggedInStatus && <h2>You have successfully logged in</h2>}
    </div>
  )
}
