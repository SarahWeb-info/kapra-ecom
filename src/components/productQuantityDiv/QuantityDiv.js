import React , {useState} from 'react'
import { BsDashLg , BsPlusLg } from "react-icons/bs";
import './quantity.css';

export default function QuantityDiv({handleQuantityChange , additionalClass =""}) {

    const [quantity, setQuantity] = useState(1);

    const minusQuantity=()=>{
        if (parseInt(quantity)>0) {
            setQuantity(parseInt(quantity)-1);
            handleQuantityChange(quantity);
         }
    }
    
    const plusQuantity=()=>{
        setQuantity(parseInt(quantity)+1);
        handleQuantityChange(quantity);
    }
    
    return (
      <div className = { ` qauntityDiv ${additionalClass}` } >
        <button onClick={minusQuantity}><BsDashLg /></button>
        <p>{quantity}</p>
        <button onClick={plusQuantity}><BsPlusLg /></button>
      </div>
  )
}
