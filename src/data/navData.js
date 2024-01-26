const navCarouselData = [
  {
    titleContent: (<small>Fixed delivery charges, Rs 100/-</small>),
  },
  {
    titleContent: (<small>Best sellers. <a href="">Shop Now!</a></small>),
  },
];

const getDataObj = (newData) => {
  let catArr = [];

  for (let i in newData[1][1]) {
    let catName = i;
    let catData = newData[1][1][i];

    let catObj = {
      CatagoryName: catName,
      CatagoryList: catData.map(item => ({ name: item.name, id: item.id }))
    };

    catArr.push(catObj);
  }
  return catArr;
}

export { getDataObj, navCarouselData };
