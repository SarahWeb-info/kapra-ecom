const setExpiryDate =(addDays)=>{
    // Get the current date
    const currentDate = new Date();

    // Add addDays to the current date
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + parseInt(addDays));

    // Save the future date in localStorage
    localStorage.setItem('dataUpdateDate', futureDate.toISOString());
}

const findExpiryDate =()=>{
    let expiry = localStorage.getItem('dataUpdateDate') || null ;

    if (expiry) {
        let expiryDate = new Date(expiry);

        // Get the current date
        const currentDate = new Date();
        
        if (expiryDate < currentDate) {
            // The expiry date has passed, return false
            return false;
          } else {
            // The expiry date is greater than or equal to the current date, return true
            return true;
          }
    }else {
        return false ;
    }
}

export {setExpiryDate , findExpiryDate};