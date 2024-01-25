import { useState , useEffect } from 'react';
import Context from "../context";

const User =(props)=>{
    // login notifications are saved in local storage
    // retrive this data from the database (temp : local storage and save it in context)
    // login contain login(email)* , password* , name  
    // orders will contain all orders with userStatus {to pay , orderStatus(processing,delivering,canceled) , reviews}
    // wishlist will also contain user Algorithm

    const [loggedIn, setLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState(null);
    const [wishlist, setWishlist] = useState(null);
    const [orders, setOrders] = useState(null);
    
    const updateLoginData =()=>{
        setLoginData(localStorage.getItem("loginData"));
    }

    const updateWishlist =()=>{
        setWishlist(localStorage.getItem("wishlist"));
    }

    const updateOrders =()=>{
        setOrders(localStorage.getItem("orders"));
    }

    useEffect(() => {
        setLoginData(localStorage.getItem("loginData"));
        
        if (loginData) {
            setLoggedIn(true);
            updateWishlist();
            updateOrders();
        }

    }, [loginData]);

    return(
    <Context.Provider value={{ loggedIn , loginData , wishlist , orders , updateLoginData , updateWishlist , updateOrders }} >
        {props.children}
    </Context.Provider>
    )
}

export default User ;