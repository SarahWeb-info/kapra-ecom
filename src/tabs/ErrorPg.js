import React from 'react' ; 
import Img from '../imgs/404-error.png';

export default function ErrorPg() {
  return (
    <div>
        <div className='columnCenter errorPg'>
            <img src={Img} alt="404 page" />
            <p>The page you are looking for not available . </p>
        </div>
    </div>
  )
}
