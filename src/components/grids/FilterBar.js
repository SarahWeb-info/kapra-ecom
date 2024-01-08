import React from 'react'
import { TfiLayoutColumn2 , TfiLayoutColumn2Alt ,TfiLayoutColumn3 , TfiLayoutColumn3Alt ,TfiPanel} from "react-icons/tfi";

export default function FilterBar({ title = "Collection" , productLength ="16" , grid2display = false , grid3display = true , selectGrid }) {
    
  return (
    <div className='collectionPgTitle'>
        
        <div>
          <h1>{title}</h1>
          <small>{productLength} Products</small>
        </div>

        <div className='d-inline-flex align-items-end'>
            <p>View</p>
          <button className='noBtn px-2' onClick={()=>selectGrid(2)}>
            {!grid2display ? <TfiLayoutColumn2 /> : <TfiLayoutColumn2Alt />}
          </button>

          <button className='noBtn  px-2' onClick={()=>selectGrid(4)}>
            {!grid3display ? <TfiLayoutColumn3 /> : <TfiLayoutColumn3Alt />}
          </button>
          
          <p><TfiPanel />Filter & Sort by</p>
        </div>
      </div>
  )
}
