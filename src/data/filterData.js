// change object , string into an array
const getData = (data) => { 

  try {
  
    if (Array.isArray(data)) {
      // If data is already an array, return it
      return data;
    } else if (typeof data === 'object') {
      // If data is an object, convert it to an array
      return Object.entries(data);
    } else if (typeof data === 'string') {
      // If data is a string, try parsing it as JSON
      const parsedData = JSON.parse(data);

      if (Array.isArray(parsedData) || typeof parsedData === 'object') {
        // If parsing is successful and the result is an array or object, return it
        return parsedData;
      } else {
        console.log("Invalid JSON string");
        return [];
      }
    }
  }catch (error) {
    console.error('Error in formatting data :', error);
    return [];
  }
  
};

export default getData;