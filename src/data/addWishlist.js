// {"id" , "quantity" , "item"} wishlist object format

const addToWishData = (item ,id ) => {

    let wishStorage = localStorage.getItem("wishStorage");

    if(wishStorage){
        wishStorage = JSON.parse(wishStorage); 
    }else{
        wishStorage = [];
    }

    let matchingObject = null ;

    if (wishStorage.length > 0) {

        matchingObject = wishStorage.find((obj) => parseInt(obj.id) === parseInt(id));

        if(matchingObject){
            // If the current object matches the specified id, delete the object
            wishStorage = wishStorage.filter(obj => parseInt(obj.id) !== parseInt(id));
        }
    }
    
    if(!matchingObject){
        let obj = { 
            id : `${id}` , 
            item : `${JSON.stringify(item)}`
        }
        wishStorage.push(obj);
    }

    localStorage.setItem("wishStorage" , JSON.stringify(wishStorage));
}

export {addToWishData};