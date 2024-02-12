import {fetchCatData} from './appStartup';

const findAlgorithmCatagory = async (catName) => {
  
  let dataArr = localStorage.getItem('Cat Data');
  
  // Check if the catagory is saved for Cat Data. 
  if (dataArr) {

    dataArr = JSON.parse(dataArr);

    // Find the matching object in the array
    const matchingObject = dataArr.find((obj) => obj.catName === catName);

    // If a matching object is found, assign it to data
    if (matchingObject) {

      return [matchingObject];

    } else {
      // If there is no such category object in the dataArr
      let dataObj = await fetchCatData(catName);

      //only add if the category has data
      if (dataObj) {

        // Add the new dataObj to the beginning of the array
        let obj = { catName: `${catName}`, data: `${JSON.stringify(dataObj.products)}` };    
        dataArr.unshift(obj);

      }else{
        return null ;
      }

      // If the length of dataArr exceeds 3, remove the last element
      if (dataArr.length > 8) {
        dataArr.pop();
      }

      localStorage.setItem('Cat Data' , JSON.stringify(dataArr));

      return dataArr;
    }
  } else {
    // If there is no category algo, make a new one & save in localStorage
    let dataObj = await fetchCatData(catName);

    if (!dataObj) {
      return null ;
    }

    dataArr = [];
    let obj = { catName: `${catName}`, data: `${JSON.stringify(dataObj.products)}` };    
    dataArr.push(obj);

    localStorage.setItem('Cat Data', JSON.stringify(dataArr));

    return dataArr;

  }
};

export {findAlgorithmCatagory };

