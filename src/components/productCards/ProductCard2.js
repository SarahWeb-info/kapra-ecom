import React from 'react'
import Img1 from '../../imgs/img1.jpg';

export default function ProductCard2({customClass1 = "gridDiv"}) {
  return (
    <div className={`fadeAdDiv ${customClass1}`} style={{ backgroundImage: `url(${Img1})` }}>
            
        <div className='fadeHover'></div>
        <a className='fadeLabel'>Shop Now</a>
        <div className='fadeLine'></div>

        <a className='fadeHoverBtn'>Checknow</a>

    </div>
  )
}
