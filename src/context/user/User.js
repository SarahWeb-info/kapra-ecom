import { useState , useEffect } from 'react';
import Context from "./userContext";

const User =(props)=>{
    // login notifications are saved in local storage
    // retrive this data from the database (temp : local storage and save it in context)
    // login contain login(email)* , password* , name  
    // ordersData will contain all ordersData with userStatus {to pay , orderStatus(processing,delivering,canceled) , reviews}
    // wishlistData will also contain user Algorithm

    const [loginData, setLoginData] = useState(null);
    const [wishlistData, setWishlistData] = useState(null);
    const [ordersData, setOrdersData] = useState(null);
    
    const updateLoginDataFunc =()=>{
        setLoginData(localStorage.getItem("loginData"));
        if (loginData) {
            localStorage.setItem("loggedIn", true);
        }else{
            localStorage.setItem("loggedIn", false);
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
            localStorage.setItem("loggedIn", true);
            updateWishlistFunc();
            updateOrdersFunc();
        }    
    }

    const signOutFunc =()=>{
        localStorage.removeItem("loggedIn");
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
    <Context.Provider value={{ loginData , wishlistData , ordersData , updateLoginDataFunc , updateWishlistFunc , updateOrdersFunc , signInFunc , signOutFunc }} >
        {props.children}
    </Context.Provider>
    )
}

export default User ;