import { useState , useEffect } from 'react';
import Context from "./globalContext";

const GlobalState =(props)=>{
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

    // login notifications are saved in local storage
    // retrive this data from the database (temp : local storage and save it in context)
    // login contain login(email)* , password* , name  
    // ordersData will contain all ordersData with userStatus {to pay , orderStatus(processing,delivering,canceled) , reviews}
    // wishlistData will also contain user Algorithm(with max-size)

    const [loggedInStatus, setLoggedInStatus] = useState(false);
    const [loginData, setLoginData] = useState(null);
    const [wishlistData, setWishlistData] = useState(null);
    const [ordersData, setOrdersData] = useState(null);
    
    const updateLoginDataFunc =()=>{
        setLoginData(localStorage.getItem("loginData"));
        
        if (loginData) {
            setLoggedInStatus(true);
        }else{
            setLoggedInStatus(false);
        }
    }

    const updateWishlistFunc =()=>{
        setWishlistData(localStorage.getItem("wishlistData"));
    }

    const updateOrdersFunc =()=>{
        setOrdersData(localStorage.getItem("ordersData"));
    }

    const signInFunc =()=>{
        setLoginData(localStorage.getItem("loginData"));
        
        if (loginData) {
            setLoggedInStatus(true);
            updateWishlistFunc();
            updateOrdersFunc();
        }    
    }

    const signOutFunc =()=>{
        setLoggedInStatus(false);
        localStorage.removeItem("loggedInStatus");
        localStorage.removeItem("wishlistData");
        localStorage.removeItem("ordersData");
        localStorage.removeItem("loginData");
    }

    useEffect(() => {
        
        if (localStorage.getItem("loginData")) {
            signInFunc();
        }else{
            signOutFunc();
        }

    }, [loginData]);

    return(
        <Context.Provider value={{ fadeBg ,cartDisplay , cartDisplayFunc ,loginDisplay , loginDisplayFunc ,searchDisplay, searchDisplayFunc , closeBtnFunc , loginData ,loggedInStatus , wishlistData , ordersData , updateLoginDataFunc , updateWishlistFunc , updateOrdersFunc , signInFunc , signOutFunc }} >
            {props.children}
        </Context.Provider>
    )
}

export default GlobalState ;