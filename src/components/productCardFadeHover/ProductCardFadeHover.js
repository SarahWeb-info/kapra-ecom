import React from 'react'
import './productCardFadeHover.css';

export default function ProductCardFadeHover({customClass1 = "gridDiv" , img  , catName}) {
  
  return (
    <div className={`fadeAdDiv ${customClass1}`} style={{ backgroundImage: `url(${img})` }}>
            
        <div className='fadeHover'></div>
        <a className='fadeLabel' src = {`/collection/${catName}`} >{catName}</a>
        <div className='fadeLine'></div>

        <a className='fadeHoverBtn' src = {`/collection/${catName}`}>Checknow</a>

    </div>
  )
}
