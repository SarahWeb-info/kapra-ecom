import axios from "axios";
import countAPIcalls from "./countAPIcalls";

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

  let catList = localStorage.getItem('Nav Data');
  catList = JSON.parse(catList);

  let dataArr = localStorage.getItem('Cat Data');

  if(!dataArr){
      dataArr = [];
  }else{
      dataArr = JSON.parse(dataArr);
  }

  // populate dataArr upto 8 
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

  let homeBanner = [];

  for (let i = 0; i < 8 ; i++) {
    let catName = dataArr[i].catName;
    let productObj = JSON.parse(dataArr[i].data) ;
    let img = productObj[0].images[0];
    
    let obj = {
      titleContent: catName,
      btnContent: "Explore Now",
      link : `/collection/${catName}` ,
      imgContent: img || [],
      altContent: catName,
    };

    homeBanner.push(obj);
  }

  return { dataArr , homeBanner };
}


export { dataCollection };

