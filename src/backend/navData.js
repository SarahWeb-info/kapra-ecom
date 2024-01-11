import data from './catagoryData';
import getData from './filterData';
let newData = getData(data);

let navCarouselData = [    {
    titleContent: (<small>Fixed delivery charges,Rs 100/-</small>),
  },
  {
    titleContent: (<small>Best sellers.<a href="">Shop Now!</a></small>),
  },
];
  
const getDataObj = () => {
    newData = newData[1][1];
    let catArr = [];

    for (let i in newData) {
        let catName = i;
        let catData = newData[i];

        let catObj = {
            CatagoryName: catName,
            CatagoryList: catData.map(item => ({ name: item.name, id: item.id }))
        };

        catArr.push(catObj);
    }
    return catArr;
}

const categoryList = getDataObj();

export {categoryList , navCarouselData};