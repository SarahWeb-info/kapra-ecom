import data from './sampleData';
import getData from './filterData';
let newData = getData(data);

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

