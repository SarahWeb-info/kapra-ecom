import React from 'react'
import { TfiLayoutColumn2 , TfiLayoutColumn2Alt ,TfiLayoutColumn3 , TfiLayoutColumn3Alt ,TfiPanel} from "react-icons/tfi";

export default function FilterBar({ title = "Collection" , productLength ="16" , grid2display = false , grid3display = true , selectGrid }) {
    
  return (
    <div className='inlineCenter filterBar'>
        
        <div>
          <h1>{title}</h1>
          <small>{productLength} Products</small>
        </div>

        <div>
          <button onClick={()=>selectGrid(2)}>
            {!grid2display ? <TfiLayoutColumn2 /> : <TfiLayoutColumn2Alt />}
          </button>

          <button onClick={()=>selectGrid(4)}>
            {!grid3display ? <TfiLayoutColumn3 /> : <TfiLayoutColumn3Alt />}
          </button>
          
          <button><TfiPanel />Filter & Sort by</button>
        </div>
      </div>
  )
}
