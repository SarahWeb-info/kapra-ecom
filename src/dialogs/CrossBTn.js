import React from 'react'

export default function CrossBTn({title}) {
  
    
  return (
    <div className='crossBtnParent'>
        {title && <span>{title}</span>}
        <button className='crossBtn' onClick={closeAll} ><BsX/></button>
    </div>
  )
}
