import data from './productDetailData';
import getData from './filterData';
let newData = getData(data);

const getProductObj = () => {

  newData = newData[1][1];
    
  let id = newData.productInfo.id;
  let title = newData.productInfo.subject;
  let unitType = newData.productInfo.multiUnitName;
  let displayPriceRange = newData.productInfo.multiCurrencyDisplayPrice ;
  let catagoryPaths = newData.productInfo.categoryPaths;
    
  // in a loop of skuPriceList 
  let priceListData = newData.pricing.skuPriceList ; 
  let priceCurrency = priceListData[0].skuVal.skuAmount.currency;
  let priceListing = [];

  for(const i in priceListData){
    let productId = priceListData[i].skuPropIds ; 
    let productAttr = priceListData[i].skuAttr ; 
    let discountpercent = priceListData[i].skuVal.discount;
    let origPrice = priceListData[i].skuVal.skuCalPrice;
    let discountPrice = priceListData[i].skuVal.skuActivityAmount.value;
    let currency = priceListData[i].skuVal.skuActivityAmount.currency;
    
    let obj = { productId , productAttr , discountpercent  , origPrice , discountPrice ,currency };
    priceListing.push(obj);
  }
  
  let propertyName = newData.sku.productSKUPropertyList[0].skuPropertyName ; 
  let productPropertyList = newData.sku.productSKUPropertyList[0].skuPropertyValues;
  let propertyListingArr = [];
  
  for(const i in productPropertyList){
    let color = productPropertyList[i].skuColorValue ; 
    let colorStr = productPropertyList[i].skuPropertyTips ; 
    let propertyValueId = productPropertyList[i].propertyValueId;
    let totalOrders = productPropertyList[i].skuPropertyValueShowOrder;
    let propertyImageMainDesktop = productPropertyList[i].skuPropertyImagePath;
    let propertyImageMainMobile = productPropertyList[i].skuPropertyImageSummPath;
    
    let obj = { color , colorStr , propertyValueId , totalOrders , propertyImageMainDesktop , propertyImageMainMobile };
    propertyListingArr.push(obj);
  }

  let inventory = newData.inventory.totalQuantity;
  let features = newData.listingFeatures;
  let additionalFeaturesArr = [];

  for(let i in features){
    let attr = features[i].attrName;
    let value = features[i].attrValue;
    let obj = { attr , value };
    additionalFeaturesArr.push(obj);
  }

  let allImagesArr = newData.images.imagePathList;

  let packagingSize = `l ${newData.packageInfo.inch_length}*w ${newData.packageInfo.inch_width}*h ${newData.packageInfo.inch_height} inches` ;
  let packageWeight = `${newData.packageInfo.pound_weight} pound`;

  let sellerUrl = newData.sellerInfo.storeURL ; 
  let sellerFeedback = newData.sellerInfo.storeFeedbackURL;
  let sellerName = newData.sellerInfo.storeName;
  let sellerId = newData.sellerInfo.companyId;
  let sellerLogo = newData.sellerInfo.storeLogo;
  let productWarrenty = newData.sellerService.warranty;
  let warrantyStr = newData.sellerPolicy.serviceDetails.details[0].content;
  let starRating = newData.listingFeedback.evarageStarRage;
  let freeShipping =  newData.FreightCalculate.shippingFeeText;
  let deliveryOptionCode = newData.FreightCalculate.originalLayoutResultList[0].bizData.deliveryProviderCode;
  let maxDeliveryTime = newData.FreightCalculate.originalLayoutResultList[0].bizData.deliveryDayMax;
  let trackingId = newData.FreightCalculate.originalLayoutResultList[0].bizData.etaTraceId;
  
    let productDetail = {
      id,
      title,
      unitType,
      displayPriceRange,
      catagoryPaths,
      priceListing ,
      priceCurrency,
      propertyName ,
      propertyListingArr ,
      inventory,
      additionalFeaturesArr,
      allImagesArr,
      packagingSize,
      packageWeight,
      sellerUrl,
      sellerFeedback,
      sellerName,
      sellerId,
      sellerLogo,
      productWarrenty,
      warrantyStr,
      starRating,
      freeShipping,
      deliveryOptionCode,
      maxDeliveryTime,
      trackingId
    }
    return productDetail ;       
}

export default  getProductObj();
