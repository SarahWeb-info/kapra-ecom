import { useState } from 'react';
import Context from "./context";

const SideDivStates =(props)=>{
    const [ fadeBg , setFadeBg ] = useState(false);
    const [cart, setCart] = useState(false);
    const [login, setLogin] = useState(false);
    const [search, setSearch] = useState(false);

    const cartDisplayFunc =()=>{
        setFadeBg(true);
        setCart(true);
    }

    const loginDisplayFunc =()=>{
        setFadeBg(true);
        setLogin(true);
    }

    const searchDisplayFunc =()=>{
        setFadeBg(true);
        setSearch(true);
    }

    const closeBtn = ()=>{
        setFadeBg(false);
        setSearch(false);
        setLogin(false);
        setCart(false);
    }

    return(
        <Context.Provider value={{fadeBg ,cart , cartDisplayFunc ,login , loginDisplayFunc ,search, searchDisplayFunc , closeBtn }} >
            {props.children}
        </Context.Provider>
    )
}

export default SideDivStates ;