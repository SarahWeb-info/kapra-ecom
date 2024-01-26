const getData = async (data) => { 
    
    try {
  
      if (Array.isArray(data)) {
        // If data is already an array, return it
        return data;
      } else if (typeof data === 'object') {
        // If data is an object, convert it to an array
        return Object.entries(data);
      } else {
        // If data is neither an array nor an object, return an empty array
        console.log("no data found");
        return [];
      }
    } catch (error) {
      console.error('Error parsing data from local storage:', error);
      return [];
    }
  
};

export {getData};