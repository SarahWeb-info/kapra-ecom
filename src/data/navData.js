import axios from "axios";
import countAPIcalls from "./countAPIcalls";
import  {setExpiryDate , findExpiryDate} from './setExpiryDate';

// this data is for nav carousal
const navCarouselData = [
  {
    titleContent: (<small>Fixed delivery charges, Rs 100/-</small>),
  },
  {
    titleContent: (<small>Best sellers. <a href="">Shop Now!</a></small>),
  },
];

const collectNavData = async () =>{
  try {
      const isExpired = findExpiryDate();
      let data = localStorage.getItem('Nav Data');
  
      if (isExpired && data){
          data = JSON.parse(data);

      }else if (!isExpired && !data) {
  
        try {
          const response = await axios.get('https://dummyjson.com/products/categories');
          console.log("call from nav");
          // Update 'data' variable
          data = response.data;
  
          // Save data to localStorage
          localStorage.setItem('Nav Data', JSON.stringify(data));
          // Set data date
          setExpiryDate(15);
  
        } catch (error) {
          // Handle any errors that occurred during the request
          console.error('Error fetching data:', error);
        
        } finally {
          countAPIcalls();
        }
      }
  
      return data;

    } catch (error) {
      console.error('Error finding category data:', error);
      return [];
    }
}

export {navCarouselData , collectNavData };