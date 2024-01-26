import { useState } from 'react';
import Context from "./frontendContext";

const Frontend =(props)=>{
    const [ fadeBg , setFadeBg ] = useState(false);
    const [ cartDisplay , setCartDisplay ] = useState(false);
    const [ loginDisplay , setLoginDisplay ] = useState(false);
    const [ searchDisplay , setSearchDisplay ] = useState(false);

    const cartDisplayFunc =()=>{
        setFadeBg(true);
        setCartDisplay(true);
    }

    const loginDisplayFunc =()=>{
        setFadeBg(true);
        setLoginDisplay(true);
    }

    const searchDisplayFunc =()=>{
        setFadeBg(true);
        setSearchDisplay(true);
    }

    const closeBtnFunc = ()=>{
        setFadeBg(false);
        setSearchDisplay(false);
        setLoginDisplay(false);
        setCartDisplay(false);
    }

    return(
        <Context.Provider value={{fadeBg ,cartDisplay , cartDisplayFunc ,loginDisplay , loginDisplayFunc ,searchDisplay, searchDisplayFunc , closeBtnFunc }} >
            {props.children}
        </Context.Provider>
    )
}

export default Frontend ;