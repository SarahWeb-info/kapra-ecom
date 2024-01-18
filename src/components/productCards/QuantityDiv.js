import React , {useState} from 'react'
import { BsDashLg , BsPlusLg } from "react-icons/bs";
import './quantity.css';

export default function QuantityDiv() {

    const [quantity, setQuantity] = useState(1);

    const minusQuantity=()=>{
        if (parseInt(quantity)>0) {
            setQuantity(parseInt(quantity)-1);
         }
    }
    
    const plusQuantity=()=>{
        setQuantity(parseInt(quantity)+1);
    }
    
    return (
      <div className='qauntityDiv'>
        <button onClick={minusQuantity}><BsDashLg /></button>
        <p>{quantity}</p>
        <button onClick={plusQuantity}><BsPlusLg /></button>
      </div>
  )
}
