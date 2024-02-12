// {"id" , "quantity" , "item"} cart object format

const addToCartData = (item ,id , quantity ) => {

    let cartStorage = localStorage.getItem("cartStorage");

    if(cartStorage){
        cartStorage = JSON.parse(cartStorage); 
    }else{
        cartStorage = [];
    }

    let objAdded = false;

    if (cartStorage.length > 0) {

        // Find if the item is already in the cart
        const matchingObject = cartStorage.find((obj) => parseInt(obj.id) === parseInt(id));

        // go to that matched item and set the value of obj.quantity++
        if (matchingObject) {
            matchingObject.quantity = parseInt(matchingObject.quantity) + parseInt(quantity) ;
            
            cartStorage = cartStorage.map((obj) => {
                if (obj.id === id) {
                    // If the current object matches the specified id, replace it with the updated matchingObject
                    return matchingObject;
                }
                return obj; 
            });

            objAdded = true;
        }
    }
    
    if (objAdded === false) {
        
        let obj = { 
            id : `${id}` , 
            quantity : `${quantity}` , 
            item : `${JSON.stringify(item)}`
        }
        cartStorage.push(obj);
    }

    localStorage.setItem("cartStorage" , JSON.stringify(cartStorage));
}

export {addToCartData};