import React from 'react'
import { TfiLayoutColumn2 , TfiLayoutColumn2Alt ,TfiLayoutColumn3 , TfiLayoutColumn3Alt ,TfiPanel} from "react-icons/tfi";
import { BsSquare , BsFillSquareFill } from "react-icons/bs";
import  './filterBar.css';

export default function FilterBar({ title = "Collection" , productLength ="16" , grid1display = false , grid2display = false , grid3display = true , selectGrid , displayFilterDiv}) {
    
  return (
    <div className='inlineBetween filterBar' >
        
        <div>
          <h1>{title}</h1>
          <small>{productLength} Products</small>
        </div>

        <div className='inlineBetween'>
          <button onClick={()=>selectGrid(1)} className='d-block d-md-none' >
            {!grid1display ? <BsSquare /> : <BsFillSquareFill /> }
          </button>

          <button onClick={()=>selectGrid(2)}>
            {!grid2display ? <TfiLayoutColumn2 /> : <TfiLayoutColumn2Alt />}
          </button>

          <button onClick={()=>selectGrid(4)}  className='d-none d-md-block' >
            {!grid3display ? <TfiLayoutColumn3 /> : <TfiLayoutColumn3Alt />}
          </button>
          
          <button onClick={displayFilterDiv}><TfiPanel /><span className='d-none d-lg-block'> Filter & Sort by</span></button>
        </div>
      </div>
  )
}
