import data from './sampleData';

const getData = () => { 
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
  
let newData = getData();

const getDataObj = () => {
    newData = newData[1][1];
    let productsArr = [];
  
    for(let i in newData){
        let id = newData[i].productId || "noId" ;
        let title = newData[i].title || "noTitle" ;

        let price = newData[i].prices.salePrice.minPrice || "noprice";
        let discount = newData[i].prices.salePrice.discount || "no discount ";
        let currency = newData[i].prices.salePrice.currencyCode || "no currency";
        
        let sold = null ;
        
        if (newData[i].sales) {
            sold = newData[i].sales.value;
        }
        let img = newData[i].image.imgUrl  || "no img"  ;

        let tags = newData[i].sellingPoints[0].tagContent.tagText;
        let tagColor = newData[i].sellingPoints[0].tagContent.tagStyle.color || "no tag color";
        let searchPriority = newData[i].sellingPoints[0].resourcePriority || "no search priority";
        
        const product = {
            id ,
            title ,
            price , 
            discount ,
            currency ,
            sold , 
            img ,
            tags ,
            tagColor ,
            searchPriority
        }


        productsArr.push(product);
    }
    return productsArr ;       
}

let productsList = getDataObj();

export default  productsList;

