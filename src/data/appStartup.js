// Make 9 calls 
// 1 call for nav bar (save this navData for less API calls)
// 8 calls for category data (for home page )
// if any of these  category data obj has no data -- make more call untile the category data arr has length of 4 with populated objects 
// save these category data arr in catData algo (for fast browsing and API call reducing)


//on clicks on category link -> goes to collection page
// but if the category link has no data , "show sorry msg of out of stock "
// also update category algo if the category data is populated
import axios from "axios";
import countAPIcalls from "./countAPIcalls";
import  {setExpiryDate , findExpiryDate} from './setExpiryDate';

const collectNavData = async () =>{
    try {
        const isExpired = findExpiryDate();
        let data = localStorage.getItem('Nav Data');
    
        if (isExpired && data){
            data = JSON.parse(data);

        }else if (!isExpired && !data) {
    
          try {
            const response = await axios.get('https://dummyjson.com/products/categories');
    
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

const fetchCatData = async (catName) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/category/${catName}`);
        // Update 'data' variable
        let data = response.data;
        
        //check if the category data is null 
        if (data.products.length === 0) {
            return null ;
        }
          
        // Save data to localStorage
        localStorage.setItem('Cat Data', JSON.stringify(data));
        return data;

    } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error finding category data:', error);
        return [];
        
    } finally {
        countAPIcalls();
    }
    
}

const dataCollection = async () => {
    let catList = await collectNavData(); 

    let dataArr = localStorage.getItem('Cat Data');
  
    if(!dataArr){
        dataArr = [];
    }else{
        dataArr = JSON.parse(dataArr);
    }

    // populate dataArr
    if(dataArr.length < 8){
        
        let i = 0 ;

        while (dataArr.length < 8) {
            let dataObj = await fetchCatData(catList[i]);

            if (dataObj) {
                let obj = { catName: `${catList[i]}`, data: `${JSON.stringify(dataObj.products)}` };    
                dataArr.unshift(obj);
            }
            i++;
        }

        localStorage.setItem('Cat Data' , JSON.stringify(dataArr));
    }

    return { dataArr , catList };
}

export default dataCollection ;
export {fetchCatData};