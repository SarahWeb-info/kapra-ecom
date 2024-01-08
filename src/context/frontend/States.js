import { useState } from 'react';
import Context from "./context";

const States =(props)=>{
    const [ fadeBg , setFadeBg ] = useState(false);
    const [cart, setCart] = useState(false);
    const [login, setLogin] = useState(false);
    const [search, setSearch] = useState(false);

    const updateCart =()=>{
        setFadeBg(true);
        setCart(true);
    }

    const updateLogin =()=>{
        setFadeBg(true);
        setLogin(true);
    }

    const updateSearch =()=>{
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
        <Context.Provider value={{fadeBg ,cart , updateCart ,login , updateLogin ,search, updateSearch ,closeBtn}} >
            {props.children}
        </Context.Provider>
    )
}

export default States ;