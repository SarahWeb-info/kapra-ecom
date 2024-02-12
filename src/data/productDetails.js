import axios from "axios";
import countAPIcalls from './countAPIcalls';

const getProductDetails = async (id)=>{
    try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        
        let data = response.data;
        let dataArr = [data];
        countAPIcalls();
        
        return dataArr;
  
      } catch (error) {

        console.error("Error fetching data for the product ", error);
        return null; // Return null instead of an empty array in case of an error

    }
}

export default getProductDetails ;