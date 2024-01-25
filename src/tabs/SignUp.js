import React from 'react'
import '../css/signUpForm.css';

export default function SignUp() {

  return (
    <div className='columnCenter pageDiv'>
        <div className='signUpForm'>
            <h1>SignUp</h1>
            <small>Signing Up will help save your data from being lost .</small>
            <form action="" className=' columnCenter'>

                <div className='inlineBetween'>
                <label htmlFor="signInEmail">Email </label>
                <input type="text" id="signInEmail" />
                </div>

                <div className='inlineBetween'>
                <label htmlFor="signInPassword">Password </label>
                <input type="text" id="signInPassword" />
                </div>

                <div className='inlineBetween'>
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input type="text" id="confirmPassword" />
                </div>

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
    </div>
  )
}
