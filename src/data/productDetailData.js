import { getData } from "./filterData";

const productListDataApi =()=>{
  let result ={
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://devAPI.ai",
    "product_id": "1005005939875273"
  },
  "body": {
    "productInfo": {
      "idStr": "3256805753560521",
      "oddUnitName": "piece",
      "taobaoSellerName": "10",
      "src": "approved",
      "categoryPaths": "320/32005",
      "subject": "YOLANMY Boat Neck Chiffon Exquisite Appliques Belt Floor-Length Bow Full Sleeve Button Illusion Floral Print Personalised",
      "numberPerLot": 1,
      "adminSeq": 2667648216,
      "fromTaobao": false,
      "lot": false,
      "multiCurrencyDisplayPrice": "CN￥1,090.00",
      "openOfferPriceRule": true,
      "minPrice": 1090,
      "id": 3256805753560521,
      "maxPrice": 1090,
      "multiUnitName": "Pieces",
      "categoryId": 32005
    },
    "listingStatus": {
      "status": 0
    },
    "isblacklist": {
      "inBlackList": false
    },
    "pricing": {
      "skuJson": "[{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011855\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:151;200007763:201336100\",\"skuId\":12000034943011855,\"skuIdStr\":\"12000034943011855\",\"skuPropIds\":\"200001951,151,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011854\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:202952848;200007763:201336100\",\"skuId\":12000034943011854,\"skuIdStr\":\"12000034943011854\",\"skuPropIds\":\"200002130,202952848,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011853\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:200000947;200007763:201336100\",\"skuId\":12000034943011853,\"skuIdStr\":\"12000034943011853\",\"skuPropIds\":\"200002130,200000947,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011852\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:200000946;200007763:201336100\",\"skuId\":12000034943011852,\"skuIdStr\":\"12000034943011852\",\"skuPropIds\":\"200002130,200000946,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011851\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:200000945;200007763:201336100\",\"skuId\":12000034943011851,\"skuIdStr\":\"12000034943011851\",\"skuPropIds\":\"200002130,200000945,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011850\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:5880;200007763:201336100\",\"skuId\":12000034943011850,\"skuIdStr\":\"12000034943011850\",\"skuPropIds\":\"200002130,5880,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011849\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:200000298;200007763:201336100\",\"skuId\":12000034943011849,\"skuIdStr\":\"12000034943011849\",\"skuPropIds\":\"200002130,200000298,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011848\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:1663;200007763:201336100\",\"skuId\":12000034943011848,\"skuIdStr\":\"12000034943011848\",\"skuPropIds\":\"200002130,1663,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011847\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:1583;200007763:201336100\",\"skuId\":12000034943011847,\"skuIdStr\":\"12000034943011847\",\"skuPropIds\":\"200002130,1583,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011846\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:699;200007763:201336100\",\"skuId\":12000034943011846,\"skuIdStr\":\"12000034943011846\",\"skuPropIds\":\"200002130,699,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011845\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:1394;200007763:201336100\",\"skuId\":12000034943011845,\"skuIdStr\":\"12000034943011845\",\"skuPropIds\":\"200002130,1394,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011844\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:153;200007763:201336100\",\"skuId\":12000034943011844,\"skuIdStr\":\"12000034943011844\",\"skuPropIds\":\"200002130,153,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011843\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200002130;200000443:151;200007763:201336100\",\"skuId\":12000034943011843,\"skuIdStr\":\"12000034943011843\",\"skuPropIds\":\"200002130,151,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011842\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:202952848;200007763:201336100\",\"skuId\":12000034943011842,\"skuIdStr\":\"12000034943011842\",\"skuPropIds\":\"29,202952848,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011841\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:200000947;200007763:201336100\",\"skuId\":12000034943011841,\"skuIdStr\":\"12000034943011841\",\"skuPropIds\":\"29,200000947,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011840\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:200000946;200007763:201336100\",\"skuId\":12000034943011840,\"skuIdStr\":\"12000034943011840\",\"skuPropIds\":\"29,200000946,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011866\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:202952848;200007763:201336100\",\"skuId\":12000034943011866,\"skuIdStr\":\"12000034943011866\",\"skuPropIds\":\"200001951,202952848,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011865\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:200000947;200007763:201336100\",\"skuId\":12000034943011865,\"skuIdStr\":\"12000034943011865\",\"skuPropIds\":\"200001951,200000947,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011864\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:200000946;200007763:201336100\",\"skuId\":12000034943011864,\"skuIdStr\":\"12000034943011864\",\"skuPropIds\":\"200001951,200000946,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011863\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:200000945;200007763:201336100\",\"skuId\":12000034943011863,\"skuIdStr\":\"12000034943011863\",\"skuPropIds\":\"200001951,200000945,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011862\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:5880;200007763:201336100\",\"skuId\":12000034943011862,\"skuIdStr\":\"12000034943011862\",\"skuPropIds\":\"200001951,5880,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011861\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:200000298;200007763:201336100\",\"skuId\":12000034943011861,\"skuIdStr\":\"12000034943011861\",\"skuPropIds\":\"200001951,200000298,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011860\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:1663;200007763:201336100\",\"skuId\":12000034943011860,\"skuIdStr\":\"12000034943011860\",\"skuPropIds\":\"200001951,1663,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011859\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:1583;200007763:201336100\",\"skuId\":12000034943011859,\"skuIdStr\":\"12000034943011859\",\"skuPropIds\":\"200001951,1583,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011858\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:699;200007763:201336100\",\"skuId\":12000034943011858,\"skuIdStr\":\"12000034943011858\",\"skuPropIds\":\"200001951,699,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011857\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:1394;200007763:201336100\",\"skuId\":12000034943011857,\"skuIdStr\":\"12000034943011857\",\"skuPropIds\":\"200001951,1394,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011856\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:200001951;200000443:153;200007763:201336100\",\"skuId\":12000034943011856,\"skuIdStr\":\"12000034943011856\",\"skuPropIds\":\"200001951,153,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011839\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:200000945;200007763:201336100\",\"skuId\":12000034943011839,\"skuIdStr\":\"12000034943011839\",\"skuPropIds\":\"29,200000945,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011838\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:5880;200007763:201336100\",\"skuId\":12000034943011838,\"skuIdStr\":\"12000034943011838\",\"skuPropIds\":\"29,5880,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011837\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:200000298;200007763:201336100\",\"skuId\":12000034943011837,\"skuIdStr\":\"12000034943011837\",\"skuPropIds\":\"29,200000298,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011836\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:1663;200007763:201336100\",\"skuId\":12000034943011836,\"skuIdStr\":\"12000034943011836\",\"skuPropIds\":\"29,1663,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011835\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:1583;200007763:201336100\",\"skuId\":12000034943011835,\"skuIdStr\":\"12000034943011835\",\"skuPropIds\":\"29,1583,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011834\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:699;200007763:201336100\",\"skuId\":12000034943011834,\"skuIdStr\":\"12000034943011834\",\"skuPropIds\":\"29,699,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011833\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:1394;200007763:201336100\",\"skuId\":12000034943011833,\"skuIdStr\":\"12000034943011833\",\"skuPropIds\":\"29,1394,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011832\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:153;200007763:201336100\",\"skuId\":12000034943011832,\"skuIdStr\":\"12000034943011832\",\"skuPropIds\":\"29,153,201336100\",\"skuVal\":{\"availQuantity\":10,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":10,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}},{\"freightExt\":\"{\\\"d0\\\":\\\"763.00\\\",\\\"d1\\\":\\\"CNY\\\",\\\"itemScene\\\":\\\"newGlobal\\\",\\\"p0\\\":\\\"12000034943011831\\\",\\\"p1\\\":\\\"763.00\\\",\\\"p10\\\":[218307,218119,273138,111478,84809,299658],\\\"p16\\\":true,\\\"p18\\\":\\\"default\\\",\\\"p3\\\":\\\"CNY\\\",\\\"p4\\\":\\\"990000\\\",\\\"p5\\\":\\\"0\\\",\\\"p6\\\":\\\"null\\\",\\\"p7\\\":\\\"{}\\\",\\\"p8\\\":\\\"CN\\\",\\\"p9\\\":\\\"CN￥ 763.00\\\"}\",\"salable\":true,\"skuAttr\":\"14:29;200000443:151;200007763:201336100\",\"skuId\":12000034943011831,\"skuIdStr\":\"12000034943011831\",\"skuPropIds\":\"29,151,201336100\",\"skuVal\":{\"availQuantity\":9,\"discount\":\"30\",\"discountTips\":\"-30%\",\"hideOriPrice\":false,\"inventory\":9,\"isActivity\":true,\"optionalWarrantyPrice\":[],\"skuActivityAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$104.76\",\"value\":104.76},\"skuActivityAmountLocal\":\"$104.76|104|76\",\"skuAmount\":{\"currency\":\"USD\",\"formatedAmount\":\"$149.66\",\"value\":149.66},\"skuAmountLocal\":\"$149.66|149|66\",\"skuCalPrice\":\"1,090.00\"}}]",
      "vatDesc": "",
      "displayBulkInfo": false,
      "skuPriceList": [
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,151,201336100",
          "skuIdStr": "12000034943011855",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011855\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:151;200007763:201336100",
          "skuId": 12000034943011856
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,202952848,201336100",
          "skuIdStr": "12000034943011854",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011854\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:202952848;200007763:201336100",
          "skuId": 12000034943011854
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,200000947,201336100",
          "skuIdStr": "12000034943011853",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011853\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:200000947;200007763:201336100",
          "skuId": 12000034943011852
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,200000946,201336100",
          "skuIdStr": "12000034943011852",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011852\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:200000946;200007763:201336100",
          "skuId": 12000034943011852
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,200000945,201336100",
          "skuIdStr": "12000034943011851",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011851\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:200000945;200007763:201336100",
          "skuId": 12000034943011852
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,5880,201336100",
          "skuIdStr": "12000034943011850",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011850\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:5880;200007763:201336100",
          "skuId": 12000034943011850
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,200000298,201336100",
          "skuIdStr": "12000034943011849",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011849\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:200000298;200007763:201336100",
          "skuId": 12000034943011848
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,1663,201336100",
          "skuIdStr": "12000034943011848",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011848\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:1663;200007763:201336100",
          "skuId": 12000034943011848
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,1583,201336100",
          "skuIdStr": "12000034943011847",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011847\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:1583;200007763:201336100",
          "skuId": 12000034943011848
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,699,201336100",
          "skuIdStr": "12000034943011846",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011846\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:699;200007763:201336100",
          "skuId": 12000034943011846
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,1394,201336100",
          "skuIdStr": "12000034943011845",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011845\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:1394;200007763:201336100",
          "skuId": 12000034943011844
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,153,201336100",
          "skuIdStr": "12000034943011844",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011844\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:153;200007763:201336100",
          "skuId": 12000034943011844
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200002130,151,201336100",
          "skuIdStr": "12000034943011843",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011843\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200002130;200000443:151;200007763:201336100",
          "skuId": 12000034943011844
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,202952848,201336100",
          "skuIdStr": "12000034943011842",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011842\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:202952848;200007763:201336100",
          "skuId": 12000034943011842
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,200000947,201336100",
          "skuIdStr": "12000034943011841",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011841\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:200000947;200007763:201336100",
          "skuId": 12000034943011840
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,200000946,201336100",
          "skuIdStr": "12000034943011840",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011840\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:200000946;200007763:201336100",
          "skuId": 12000034943011840
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,202952848,201336100",
          "skuIdStr": "12000034943011866",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011866\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:202952848;200007763:201336100",
          "skuId": 12000034943011866
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,200000947,201336100",
          "skuIdStr": "12000034943011865",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011865\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:200000947;200007763:201336100",
          "skuId": 12000034943011864
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,200000946,201336100",
          "skuIdStr": "12000034943011864",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011864\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:200000946;200007763:201336100",
          "skuId": 12000034943011864
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,200000945,201336100",
          "skuIdStr": "12000034943011863",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011863\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:200000945;200007763:201336100",
          "skuId": 12000034943011864
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,5880,201336100",
          "skuIdStr": "12000034943011862",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011862\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:5880;200007763:201336100",
          "skuId": 12000034943011862
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,200000298,201336100",
          "skuIdStr": "12000034943011861",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011861\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:200000298;200007763:201336100",
          "skuId": 12000034943011860
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,1663,201336100",
          "skuIdStr": "12000034943011860",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011860\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:1663;200007763:201336100",
          "skuId": 12000034943011860
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,1583,201336100",
          "skuIdStr": "12000034943011859",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011859\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:1583;200007763:201336100",
          "skuId": 12000034943011860
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,699,201336100",
          "skuIdStr": "12000034943011858",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011858\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:699;200007763:201336100",
          "skuId": 12000034943011858
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,1394,201336100",
          "skuIdStr": "12000034943011857",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011857\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:1394;200007763:201336100",
          "skuId": 12000034943011856
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "200001951,153,201336100",
          "skuIdStr": "12000034943011856",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011856\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:200001951;200000443:153;200007763:201336100",
          "skuId": 12000034943011856
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,200000945,201336100",
          "skuIdStr": "12000034943011839",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011839\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:200000945;200007763:201336100",
          "skuId": 12000034943011840
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,5880,201336100",
          "skuIdStr": "12000034943011838",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011838\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:5880;200007763:201336100",
          "skuId": 12000034943011838
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,200000298,201336100",
          "skuIdStr": "12000034943011837",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011837\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:200000298;200007763:201336100",
          "skuId": 12000034943011836
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,1663,201336100",
          "skuIdStr": "12000034943011836",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011836\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:1663;200007763:201336100",
          "skuId": 12000034943011836
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,1583,201336100",
          "skuIdStr": "12000034943011835",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011835\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:1583;200007763:201336100",
          "skuId": 12000034943011836
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,699,201336100",
          "skuIdStr": "12000034943011834",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011834\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:699;200007763:201336100",
          "skuId": 12000034943011834
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,1394,201336100",
          "skuIdStr": "12000034943011833",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011833\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:1394;200007763:201336100",
          "skuId": 12000034943011832
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 10,
            "inventory": 10,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,153,201336100",
          "skuIdStr": "12000034943011832",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011832\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:153;200007763:201336100",
          "skuId": 12000034943011832
        },
        {
          "skuVal": {
            "optionalWarrantyPrice": [],
            "skuAmount": {
              "currency": "USD",
              "formatedAmount": "$149.66",
              "value": 149.66
            },
            "discount": "30",
            "availQuantity": 9,
            "inventory": 9,
            "hideOriPrice": false,
            "skuCalPrice": "1,090.00",
            "skuAmountLocal": "$149.66|149|66",
            "skuActivityAmountLocal": "$104.76|104|76",
            "discountTips": "-30%",
            "isActivity": true,
            "skuActivityAmount": {
              "currency": "USD",
              "formatedAmount": "$104.76",
              "value": 104.76
            }
          },
          "skuPropIds": "29,151,201336100",
          "skuIdStr": "12000034943011831",
          "freightExt": "{\"d0\":\"763.00\",\"d1\":\"CNY\",\"itemScene\":\"newGlobal\",\"p0\":\"12000034943011831\",\"p1\":\"763.00\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"p18\":\"default\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\"}",
          "salable": true,
          "skuAttr": "14:29;200000443:151;200007763:201336100",
          "skuId": 12000034943011832
        }
      ],
      "discountPrice": {
        "actMinPrice": 763,
        "actCurrencyFormatPrice": "$104.76",
        "minActivityAmount": {
          "currency": "USD",
          "formatedAmount": "$104.76",
          "value": 104.76
        },
        "actMultiCurrencyMinPrice": "104.76",
        "minActMultiCurrencyPrice": 104.76,
        "maxActivityAmount": {
          "currency": "USD",
          "formatedAmount": "$104.76",
          "value": 104.76
        },
        "actMinDisplayPrice": "763.00",
        "actMaxPrice": 763,
        "actMultiCurrencyDisplayPrice": "104.76"
      },
      "origPrice": {
        "minAmount": {
          "currency": "USD",
          "formatedAmount": "$149.66",
          "value": 149.66
        },
        "minMultiCurrencyPrice": 149.66,
        "minPrice": 1090,
        "maxPrice": 1090,
        "multiCurrencyFormatPrice": "$149.66",
        "maxAmount": {
          "currency": "USD",
          "formatedAmount": "$149.66",
          "value": 149.66
        },
        "currencyFormatPrice": "CN￥1,090.00"
      },
      "priceLocalConfig": "{\"from\":{\"currencySymbol\":\"$\",\"currencySymbolPosition\":\"front\",\"decimalPointChar\":\".\",\"showDecimal\":true,\"thousandsChar\":\",\"},\"separatorStr\":\" - \",\"single\":{\"currencySymbol\":\"$\",\"currencySymbolPosition\":\"front\",\"decimalPointChar\":\".\",\"showDecimal\":true,\"thousandsChar\":\",\"},\"to\":{\"currencySymbol\":\"$\",\"currencySymbolPosition\":\"front\",\"decimalPointChar\":\".\",\"showDecimal\":true,\"thousandsChar\":\",\"},\"useful\":true,\"version\":\"v1\"}"
    },
    "priceRules": [],
    "sku": {
      "selectedSkuAttr": "14:200001951;200000443:151;200007763:201336100",
      "hasSkuProperty": true,
      "productSKUPropertyList": [
        {
          "showTypeColor": true,
          "sizeProperty": false,
          "skuPropertyValues": [
            {
              "skuColorValue": "#FFFFFF",
              "skuPropertyTips": "White",
              "propertyValueName": "White",
              "propertyValueId": 29,
              "skuPropertyImagePath": "https://ae01.alicdn.com/kf/Sb47eb8d8e1c842bc81ba6888d634ef518/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_640x640.jpg",
              "skuPropertyValueTips": "White",
              "skuPropertyValueShowOrder": 1,
              "propertyValueIdLong": 29,
              "skuPropertyImageSummPath": "https://ae01.alicdn.com/kf/Sb47eb8d8e1c842bc81ba6888d634ef518/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_80x80.jpg",
              "propertyValueDisplayName": "White"
            },
            {
              "skuColorValue": "#FDFDE8",
              "skuPropertyTips": "Ivory",
              "propertyValueName": "Ivory",
              "propertyValueId": 200002130,
              "skuPropertyImagePath": "https://ae01.alicdn.com/kf/Sd4243fe23de64e87a8ba6d0c3c3bae65q/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_640x640.jpg",
              "skuPropertyValueTips": "Ivory",
              "skuPropertyValueShowOrder": 1,
              "propertyValueIdLong": 200002130,
              "skuPropertyImageSummPath": "https://ae01.alicdn.com/kf/Sd4243fe23de64e87a8ba6d0c3c3bae65q/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_80x80.jpg",
              "propertyValueDisplayName": "Ivory"
            },
            {
              "skuColorValue": "#D5B489",
              "skuPropertyTips": "champagne",
              "propertyValueName": "champagne",
              "propertyValueId": 200001951,
              "skuPropertyImagePath": "https://ae01.alicdn.com/kf/S2906368ea45143a7a35ce82ae63091b22/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_640x640.jpg",
              "skuPropertyValueTips": "champagne",
              "skuPropertyValueShowOrder": 1,
              "propertyValueIdLong": 200001951,
              "skuPropertyImageSummPath": "https://ae01.alicdn.com/kf/S2906368ea45143a7a35ce82ae63091b22/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_80x80.jpg",
              "propertyValueDisplayName": "champagne"
            }
          ],
          "showType": "colour_atla",
          "skuPropertyName": "Color",
          "skuPropertyId": 14,
          "order": 1
        },
        {
          "showTypeColor": false,
          "sizeProperty": true,
          "skuPropertyValues": [
            {
              "skuPropertyTips": "2",
              "propertyValueName": "2",
              "propertyValueId": 151,
              "skuPropertyValueTips": "2",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "83cm"
                },
                {
                  "name": "Waist",
                  "value": "65cm"
                },
                {
                  "name": "Hip",
                  "value": "91cm"
                }
              ],
              "propertyValueIdLong": 151,
              "propertyValueDisplayName": "2"
            },
            {
              "skuPropertyTips": "4",
              "propertyValueName": "4",
              "propertyValueId": 153,
              "skuPropertyValueTips": "4",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "84cm"
                },
                {
                  "name": "Waist",
                  "value": "68cm"
                },
                {
                  "name": "Hip",
                  "value": "92cm"
                }
              ],
              "propertyValueIdLong": 153,
              "propertyValueDisplayName": "4"
            },
            {
              "skuPropertyTips": "6",
              "propertyValueName": "6",
              "propertyValueId": 1394,
              "skuPropertyValueTips": "6",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "88cm"
                },
                {
                  "name": "Waist",
                  "value": "70cm"
                },
                {
                  "name": "Hip",
                  "value": "96cm"
                }
              ],
              "propertyValueIdLong": 1394,
              "propertyValueDisplayName": "6"
            },
            {
              "skuPropertyTips": "8",
              "propertyValueName": "8",
              "propertyValueId": 699,
              "skuPropertyValueTips": "8",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "90cm"
                },
                {
                  "name": "Waist",
                  "value": "72cm"
                },
                {
                  "name": "Hip",
                  "value": "98cm"
                }
              ],
              "propertyValueIdLong": 699,
              "propertyValueDisplayName": "8"
            },
            {
              "skuPropertyTips": "10",
              "propertyValueName": "10",
              "propertyValueId": 1583,
              "skuPropertyValueTips": "10",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "93cm"
                },
                {
                  "name": "Waist",
                  "value": "75cm"
                },
                {
                  "name": "Hip",
                  "value": "101cm"
                }
              ],
              "propertyValueIdLong": 1583,
              "propertyValueDisplayName": "10"
            },
            {
              "skuPropertyTips": "12",
              "propertyValueName": "12",
              "propertyValueId": 1663,
              "skuPropertyValueTips": "12",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "97cm"
                },
                {
                  "name": "Waist",
                  "value": "79cm"
                },
                {
                  "name": "Hip",
                  "value": "105cm"
                }
              ],
              "propertyValueIdLong": 1663,
              "propertyValueDisplayName": "12"
            },
            {
              "skuPropertyTips": "14",
              "propertyValueName": "14",
              "propertyValueId": 200000298,
              "skuPropertyValueTips": "14",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "100cm"
                },
                {
                  "name": "Waist",
                  "value": "83cm"
                },
                {
                  "name": "Hip",
                  "value": "109cm"
                }
              ],
              "propertyValueIdLong": 200000298,
              "propertyValueDisplayName": "14"
            },
            {
              "skuPropertyTips": "16",
              "propertyValueName": "16",
              "propertyValueId": 5880,
              "skuPropertyValueTips": "16",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "104cm"
                },
                {
                  "name": "Waist",
                  "value": "86cm"
                },
                {
                  "name": "Hip",
                  "value": "112cm"
                }
              ],
              "propertyValueIdLong": 5880,
              "propertyValueDisplayName": "16"
            },
            {
              "skuPropertyTips": "16W",
              "propertyValueName": "16W",
              "propertyValueId": 200000945,
              "skuPropertyValueTips": "16W",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "109cm"
                },
                {
                  "name": "Waist",
                  "value": "92cm"
                },
                {
                  "name": "Hip",
                  "value": "116cm"
                }
              ],
              "propertyValueIdLong": 200000945,
              "propertyValueDisplayName": "16W"
            },
            {
              "skuPropertyTips": "18W",
              "propertyValueName": "18W",
              "propertyValueId": 200000946,
              "skuPropertyValueTips": "18W",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "114cm"
                },
                {
                  "name": "Waist",
                  "value": "98cm"
                },
                {
                  "name": "Hip",
                  "value": "121cm"
                }
              ],
              "propertyValueIdLong": 200000946,
              "propertyValueDisplayName": "18W"
            },
            {
              "skuPropertyTips": "20W",
              "propertyValueName": "20W",
              "propertyValueId": 200000947,
              "skuPropertyValueTips": "20W",
              "skuPropertyValueShowOrder": 2,
              "propertySizeChartInfo": [
                {
                  "name": "Bust",
                  "value": "119cm"
                },
                {
                  "name": "Waist",
                  "value": "104cm"
                },
                {
                  "name": "Hip",
                  "value": "126cm"
                }
              ],
              "propertyValueIdLong": 200000947,
              "propertyValueDisplayName": "20W"
            },
            {
              "skuPropertyTips": "Custom Size",
              "propertyValueName": "Custom Size",
              "propertyValueId": 202952848,
              "skuPropertyValueTips": "Custom Size",
              "skuPropertyValueShowOrder": 2,
              "propertyValueIdLong": 202952848,
              "propertyValueDisplayName": "Custom Size"
            }
          ],
          "showType": "none",
          "skuPropertyName": "US Size",
          "skuPropertyId": 200000443,
          "order": 2
        },
        {
          "showTypeColor": false,
          "sizeProperty": false,
          "skuPropertyValues": [
            {
              "skuPropertyTips": "China",
              "propertyValueName": "China",
              "propertyValueId": 201336100,
              "skuPropertyValueTips": "China",
              "skuPropertyValueShowOrder": 2,
              "propertyValueIdLong": 201336100,
              "propertyValueDisplayName": "China",
              "skuPropertySendGoodsCountryCode": "CN"
            }
          ],
          "showType": "none",
          "skuPropertyName": "Ships From",
          "skuPropertyId": 200007763,
          "order": 3
        }
      ],
      "skuPropertyJson": "[[29,200002130,200001951],[151,153,1394,699,1583,1663,200000298,5880,200000945,200000946,200000947,202952848],[201336100]]"
    },
    "category": {
      "topCategoryId": 320,
      "kidBaby": false,
      "secondLevelCategoryId": 32005
    },
    "inventory": {
      "totalQuantity": 359,
      "totalAvailQuantity": 359
    },
    "description": {
      "productId": "1005005939875273",
      "key": "S1af182b91f204fc58495734fb90fbe82W.zip",
      "token": "4799b399f21ce879ab3943412eba3511"
    },
    "listingFeatures": [
      {
        "attrValue": "Exquisite",
        "attrName": "Style"
      },
      {
        "attrValue": "Floral Print",
        "attrName": "Fashion Element"
      },
      {
        "attrValue": "Yes",
        "attrName": "Built-in Bra"
      },
      {
        "attrValue": "Yes",
        "attrName": "is_customized"
      },
      {
        "attrValue": "Natural Factors",
        "attrName": "Waistline"
      },
      {
        "attrValue": "Regular",
        "attrName": "Sleeve Style"
      },
      {
        "attrValue": "Appliques,BOW,Button,Belt,Pleat",
        "attrName": "Decoration"
      },
      {
        "attrValue": "A-LINE",
        "attrName": "Silhouette"
      },
      {
        "attrValue": "No",
        "attrName": "For Pregnant Women"
      },
      {
        "attrValue": "Yes",
        "attrName": "Actual Images"
      },
      {
        "attrValue": "zipper",
        "attrName": "Back Design"
      },
      {
        "attrValue": "Floor-Length",
        "attrName": "Dresses Length"
      },
      {
        "attrValue": "Court Train",
        "attrName": "Train"
      },
      {
        "attrValue": "Boat Neck",
        "attrName": "Neckline"
      },
      {
        "attrValue": "Chiffon",
        "attrName": "Wedding Dress Fabric"
      },
      {
        "attrValue": "Sleeveless",
        "attrName": "Sleeve Length(cm)"
      },
      {
        "attrValue": "SUFEIDI-LADY",
        "attrName": "Brand Name"
      },
      {
        "attrValue": "Mainland China",
        "attrName": "Origin"
      },
      {
        "attrValue": "Anhui",
        "attrName": "CN"
      },
      {
        "attrValue": "Wedding Dresses",
        "attrName": "Item Type"
      },
      {
        "attrValue": "YOLANMY Boat Neck Chiffon Exquisite Appliques Belt Floor-Length Bow Full Sleeve Button Illusion Floral Print Personalised",
        "attrName": "KEYWORDS"
      },
      {
        "attrValue": "US2-US 28",
        "attrName": "SIZE"
      },
      {
        "attrValue": "Within 24 Hours after Proceed",
        "attrName": "ORDER CANCEL"
      },
      {
        "attrValue": "Wedding Dresses",
        "attrName": "TYPE"
      },
      {
        "attrValue": "Wedding Dresses For Women",
        "attrName": "Wedding Dresses For Women"
      },
      {
        "attrValue": "Vestidos De Novia",
        "attrName": "Robe De Mariée"
      },
      {
        "attrValue": "Wedding Dresses For Women Bride",
        "attrName": "Wedding Dresses For Bride"
      },
      {
        "attrValue": "Wedding Dresses For Mariages",
        "attrName": "Robe De Soirée De Mariage"
      },
      {
        "attrValue": "Vestido De Casamento",
        "attrName": "Wedding Party Gown"
      }
    ],
    "images": {
      "image250PathList": [
        "https://ae01.alicdn.com/kf/S3a662d09cdcb433db61a6974c9d25d2a3/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_250x250.jpg",
        "https://ae01.alicdn.com/kf/S1bd00f443c904b8fbb0bb79cd0e9316ar/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_250x250.jpg",
        "https://ae01.alicdn.com/kf/Sa106cd0ec1b94c32988de359beffadb8z/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_250x250.jpg",
        "https://ae01.alicdn.com/kf/S6d52455dbb79488aa1764770d32e670ch/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_250x250.jpg"
      ],
      "imagePathList": [
        "https://ae01.alicdn.com/kf/S3a662d09cdcb433db61a6974c9d25d2a3/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg",
        "https://ae01.alicdn.com/kf/S1bd00f443c904b8fbb0bb79cd0e9316ar/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg",
        "https://ae01.alicdn.com/kf/Sa106cd0ec1b94c32988de359beffadb8z/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg",
        "https://ae01.alicdn.com/kf/S6d52455dbb79488aa1764770d32e670ch/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg"
      ],
      "image640PathList": [
        "https://ae01.alicdn.com/kf/S3a662d09cdcb433db61a6974c9d25d2a3/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_640x640.jpg",
        "https://ae01.alicdn.com/kf/S1bd00f443c904b8fbb0bb79cd0e9316ar/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_640x640.jpg",
        "https://ae01.alicdn.com/kf/Sa106cd0ec1b94c32988de359beffadb8z/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_640x640.jpg",
        "https://ae01.alicdn.com/kf/S6d52455dbb79488aa1764770d32e670ch/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_640x640.jpg"
      ],
      "imageExist": true,
      "imageServer": "https://ae01.alicdn.com",
      "summImagePathList": [
        "https://ae01.alicdn.com/kf/S3a662d09cdcb433db61a6974c9d25d2a3/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_80x80.jpg",
        "https://ae01.alicdn.com/kf/S1bd00f443c904b8fbb0bb79cd0e9316ar/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_80x80.jpg",
        "https://ae01.alicdn.com/kf/Sa106cd0ec1b94c32988de359beffadb8z/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_80x80.jpg",
        "https://ae01.alicdn.com/kf/S6d52455dbb79488aa1764770d32e670ch/YOLANMY-Boat-Neck-Chiffon-Exquisite-Appliques-Belt-Floor-Length-Bow-Full-Sleeve-Button-Illusion-Floral-Print.jpg_80x80.jpg"
      ]
    },
    "packageInfo": {
      "inch_length": "7.09",
      "lot": false,
      "unitType": "piece",
      "length": 18,
      "lotNum": "1",
      "width": 15,
      "inch_height": "3.94",
      "weight": 1,
      "pound_weight": "2.20",
      "packageType": "sell_by_piece",
      "height": 10,
      "inch_width": "5.91"
    },
    "currency": {
      "baseCurrencyCode": "CNY",
      "enableTransaction": true,
      "currencySymbol": "US $",
      "symbolFront": false,
      "currencyRate": 0.1373,
      "baseSymbolFront": false,
      "currencyCode": "USD",
      "baseCurrencySymbol": "CN￥",
      "multiCurrency": true
    },
    "promotion": {
      "discountPromotion": true,
      "activity": true,
      "fixedPromotionLeftHours": 0,
      "discount": 30,
      "fixedFreeShipping": false,
      "regularPriceActivity": false,
      "fixedPromotionLeftSecs": 0,
      "promotionLeftMinutes": 0,
      "promotionLeftSecs": 0,
      "discountTips": "-30%",
      "fixedPromotionLeftMinutes": 0,
      "coinsEnough": false,
      "fireDeals": false,
      "superDeals": false,
      "fixedPromotionLeftDays": 0,
      "promotionLeftHours": 0,
      "hbaFreeShipping": false,
      "showStockPrompt": false,
      "enableMultiDiscount": false,
      "purchaseLimitNumMax": 0,
      "discountRatioTips": "-30%",
      "displayIcon": false,
      "preSale": false,
      "promotionLeftDays": 0,
      "availableGroupShareActivity": false,
      "coinPreSale": false,
      "fixedDiscountPromotion": false,
      "comingSoon": false,
      "allProduct": false,
      "memberPriceActivity": false
    },
    "tags": {
      "topItem": false,
      "invalidBuyNow": false,
      "switchInfo": {
        "showPropOuter": false,
        "deliveryMigrate": true,
        "skuUnavailableRevision": true,
        "allowUSVisitorCart": true,
        "showPropGroups": false
      },
      "rechargeProduct": false,
      "x3MoneyBack": false,
      "f1Scene": false,
      "hideMessage": false,
      "otherPCTagMap": [],
      "boutique": false,
      "hideBuyNow": false,
      "madeInItaly": false,
      "installment": false,
      "ruHidePruduct": false,
      "frMall": false,
      "choiceProduct": false
    },
    "multiLanguageUrl": [],
    "coupons": {
      "usingNewCouponApi": true,
      "couponList": [
        {
          "copy": "2 off",
          "title": "Buy 5 pieces",
          "order": 0
        },
        {
          "copy": "$6.86 off",
          "title": "On orders over $274.60",
          "order": 0
        }
      ],
      "promotionPanelDTO": {
        "storeDiscount": [
          {
            "promotionPanelDetailDTOList": [
              {
                "acquirable": false,
                "promotionDetailList": [
                  "Buy 5 get 2% off",
                  "Buy 10 get 4% off",
                  "Buy 20 get 8% off"
                ],
                "actionTips": "Shop more",
                "displayType": "storeDiscount",
                "toolCode": "fullPiece",
                "teasingStartTime": -1,
                "collectLink": "https://m.aliexpress.com/search.htm?priceBreak=1&campId=5000000114184338&campBannerText=Buy 5 get 2% off,Buy 10 get 4% off,Buy 20 get 8% off&",
                "attributes": {
                  "couponCampaignStyle": "new"
                },
                "startTime": 1696143600000,
                "endTime": 1698821999000
              },
              {
                "acquirable": false,
                "promotionDetailList": [
                  "Get $1.37 off orders over $68.65",
                  "Get $2.75 off orders over $137.30",
                  "Get $6.86 off orders over $274.60"
                ],
                "actionTips": "Shop more",
                "displayType": "storeDiscount",
                "toolCode": "fixedDiscount",
                "teasingStartTime": -1,
                "collectLink": "https://m.aliexpress.com/search.htm?priceBreak=1&campId=5000000114169448&campBannerText=$1.37 off per $68.65,$2.75 off per $137.30,$6.86 off per $274.60&marginPrice=6865&",
                "attributes": {
                  "couponCampaignStyle": "new"
                },
                "startTime": 1696143600000,
                "endTime": 1698821999000
              }
            ],
            "displayType": "storeDiscount",
            "promotionGroupTitle": "Store Discount"
          }
        ]
      },
      "couponAttributes": {
        "couponPackageText": "Check your coupon in our <a href=\"https://www.aliexpress.com/p/my-coupons/index.html\">My coupons</a>",
        "hasPlatformShippingFeeCoupon": "false"
      }
    },
    "sellerInfo": {
      "boutiqueSeller": false,
      "topRatedSeller": false,
      "formatOpenTime": "Jun 30, 2022",
      "spanishPlaza": false,
      "ruConsignmentAndMarketPlace": false,
      "esRetailOrConsignment": false,
      "openedYear": 1,
      "plazaElectronicSeller": false,
      "ruSelfOperation": false,
      "storeURL": "//www.aliexpress.com/store/1102163452",
      "storeFeedbackURL": "//www.aliexpress.com/store/feedback-score/1102163452.html",
      "storeName": "YOLANMY Store",
      "hasStore": true,
      "openTime": 1656602074000,
      "localSellerTag": "CN",
      "aeRuSelfOperation": false,
      "showPlazaHeader": false,
      "localSeller": false,
      "adminSeq": 2667648216,
      "encryptOwnerMemberId": "8pctgRBMALMa7LcyrlnqLqe9b8kVCUapuGhPdsuzqbU=",
      "countryCompleteName": "China",
      "companyId": 1126826206,
      "storeLogo": "https://ae01.alicdn.com/kf/S7f770946de0d4e8c80e7d06d15f6009d7.png",
      "storeNum": 1102163452,
      "payPalAccount": false
    },
    "sellerService": {
      "warranty": [],
      "hasWarrantyInfo": false
    },
    "listingFeedback": {
      "positiveRate": "0.0",
      "fiveStarNum": 0,
      "threeStarNum": 0,
      "twoStarRate": 0,
      "display": false,
      "oneStarRate": 0,
      "fourStarNum": 0,
      "evarageStar": "0.0",
      "fiveStarRate": 0,
      "threeStarRate": 0,
      "totalValidNum": 0,
      "evarageStarRage": "0.0",
      "twoStarNum": 0,
      "trialReviewNum": 0,
      "oneStarNum": 0,
      "fourStarRate": 0
    },
    "sellerFeedback": {
      "sellerScore": 106,
      "sellerTotalNum": 118,
      "sellerLevel": "14-s",
      "sellerPositiveRate": "96.5",
      "sellerPositiveNum": 117
    },
    "FreightCalculate": {
      "hideShipFrom": true,
      "allowArouseLayer": false,
      "shippingFeeText": "Shipping fee: $23.12",
      "originalLayoutResultList": [
        {
          "contentLayout": [
            [
              {
                "displayCondition": "existEtaMinTime!=yes&&existEtaMaxTime!=yes",
                "componentId": "23418",
                "distance": 1,
                "blockType": "deliveryTime",
                "type": "htmlText",
                "blockGroup": "deliveryTime-0",
                "content": "<span style=\"color: #666666;\">Estimated delivery on </span><span style=\"color: #222222;\">Nov 26</span>",
                "useInDeliveryOptionPanel": true,
                "useInDetailFirstScreen": true,
                "medusaKey": "estimated_delivery_on@deliveryTime",
                "useInSkuSwitch": true,
                "order": 7
              },
              {
                "displayCondition": "default=visible",
                "componentId": "23419",
                "distance": 1,
                "blockType": "deliveryTime",
                "type": "htmlText",
                "blockGroup": "deliveryTime-0",
                "content": "<span style=\"color: #666666;\">,item ships within 10 days</span>",
                "useInDeliveryOptionPanel": true,
                "useInDetailFirstScreen": true,
                "medusaKey": "LongStockPeriod@deliveryTime",
                "useInSkuSwitch": true,
                "order": 8
              }
            ],
            [
              {
                "displayCondition": "default=visible",
                "componentId": "23404",
                "distance": 1,
                "blockType": "freight",
                "type": "htmlText",
                "blockGroup": "freight-0",
                "content": "<span style=\"color: #222222;\">From </span><span style=\"color: #222222;\"><strong>China</strong></span><span style=\"color: #222222;\"> to </span><span style=\"color: #222222;\"><strong>United States</strong></span><span style=\"color: #222222;\"> via AliExpress Standard Shipping</span>",
                "useInDeliveryOptionPanel": true,
                "medusaKey": "ship_from_to_via_detail@freight",
                "useInSkuSwitch": true,
                "order": 2
              }
            ]
          ],
          "deliveryOptionPanelDisplayList": [
            "23404",
            "23407",
            "23409",
            "23418",
            "23419"
          ],
          "additionLayout": [
            {
              "displayCondition": "tracking=visible",
              "componentId": "23409",
              "distance": 1,
              "blockType": "others",
              "type": "textWithMark",
              "blockGroup": "others-1",
              "content": "Tracking Available",
              "useInDeliveryOptionPanel": true,
              "useInDetailFirstScreen": false,
              "medusaKey": "tracking_available@others",
              "useInSkuSwitch": false,
              "order": 1
            }
          ],
          "titleLayout": [
            [
              {
                "displayCondition": "previewAmount=invisible",
                "componentId": "23407",
                "distance": 1,
                "blockType": "title",
                "type": "htmlText",
                "blockGroup": "title-0",
                "content": "<span style=\"font-size: 15px; color: #222222;\"><strong>Shipping: $23.12</strong></span>",
                "useInDeliveryOptionPanel": true,
                "useInDetailFirstScreen": true,
                "medusaKey": "shippingfee@freightCost",
                "useInSkuSwitch": true,
                "order": 2
              }
            ]
          ],
          "finalPatternId": 1496001,
          "bizData": {
            "deliveryOptionCode": "CAINIAO_STANDARD",
            "leadTimeSort": [
              9999
            ],
            "deliveryProviderName": "AliExpress Standard Shipping",
            "patternId": 1496001,
            "discount": 0,
            "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2023-11-26\",\"deliveryDayMax\":28,\"deliveryDayMin\":22,\"fAmount\":23.12,\"fCurrency\":\"USD\",\"itemId\":1005005939875273,\"preOrder\":false,\"productId\":1005005939875273,\"provider\":\"cainiao\",\"serviceName\":\"CAINIAO_STANDARD\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"23.12\",\"traceId\":\"2103241d16986043415473712ef473\",\"trackingAvailable\":true}",
            "tracking": "visible",
            "workDayOneFourBeforeCutTime": "no",
            "provider": "cainiao",
            "itemShipFromType": "same",
            "displayTomorrow": "no",
            "itemScene": "newGlobal",
            "shipToCode": "US",
            "thresholdOverZero": "yes",
            "currency": "CNY",
            "company": "AliExpress Standard Shipping",
            "deliveryDate": "Nov 26",
            "formattedAmount": "$23.12",
            "shipFrom": "China",
            "deliveryDayMax": 28,
            "guaranteedDeliveryTime": 60,
            "freightCommitDay": "75",
            "etaTraceId": "ORDER-f-1-228-1900798000-2419198000-1700505139700-1701023539700-CAINIAO_STANDARD-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY--RESOURCE_CODE#DEF-864000000-864000000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY--DIVISION_ID#228-777600000-1296000000---OPERATING-3123,3124|1698604341700",
            "workDayOneFiveBeforeCutTime": "no",
            "itemId": 1005005939875273,
            "solutionBusinessType": "Default",
            "displayAmount": 23.12,
            "shippingFee": "charge",
            "solutionBusinessXDays": 0,
            "deliveryDayMin": 22,
            "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
            "showXDayDeliveryTips": "yes",
            "shipFromCode": "CN",
            "solutionId": 268001,
            "displayCurrency": "USD",
            "deliveryProviderCode": "CAINIAO_STANDARD",
            "shipTo": "United States"
          },
          "dxTemplateInfo": [],
          "detailFirstScreenDisplayList": [
            "23407",
            "23418",
            "23419"
          ],
          "skuSwitchDisplayList": [
            "23404",
            "23407",
            "23418",
            "23419"
          ]
        },
        {
          "contentLayout": [
            [
              {
                "displayCondition": "existEtaMinTime!=yes&&existEtaMaxTime!=yes",
                "componentId": "23418",
                "distance": 1,
                "blockType": "deliveryTime",
                "type": "htmlText",
                "blockGroup": "deliveryTime-0",
                "content": "<span style=\"color: #666666;\">Estimated delivery on </span><span style=\"color: #222222;\">Nov 19</span>",
                "useInDeliveryOptionPanel": true,
                "useInDetailFirstScreen": true,
                "medusaKey": "estimated_delivery_on@deliveryTime",
                "useInSkuSwitch": true,
                "order": 7
              },
              {
                "displayCondition": "default=visible",
                "componentId": "23419",
                "distance": 1,
                "blockType": "deliveryTime",
                "type": "htmlText",
                "blockGroup": "deliveryTime-0",
                "content": "<span style=\"color: #666666;\">,item ships within 10 days</span>",
                "useInDeliveryOptionPanel": true,
                "useInDetailFirstScreen": true,
                "medusaKey": "LongStockPeriod@deliveryTime",
                "useInSkuSwitch": true,
                "order": 8
              }
            ],
            [
              {
                "displayCondition": "default=visible",
                "componentId": "23404",
                "distance": 1,
                "blockType": "freight",
                "type": "htmlText",
                "blockGroup": "freight-0",
                "content": "<span style=\"color: #222222;\">From </span><span style=\"color: #222222;\"><strong>China</strong></span><span style=\"color: #222222;\"> to </span><span style=\"color: #222222;\"><strong>United States</strong></span><span style=\"color: #222222;\"> via DHL</span>",
                "useInDeliveryOptionPanel": true,
                "medusaKey": "ship_from_to_via_detail@freight",
                "useInSkuSwitch": true,
                "order": 2
              }
            ]
          ],
          "deliveryOptionPanelDisplayList": [
            "23404",
            "23407",
            "23409",
            "23418",
            "23419"
          ],
          "additionLayout": [
            {
              "displayCondition": "tracking=visible",
              "componentId": "23409",
              "distance": 1,
              "blockType": "others",
              "type": "textWithMark",
              "blockGroup": "others-1",
              "content": "Tracking Available",
              "useInDeliveryOptionPanel": true,
              "useInDetailFirstScreen": false,
              "medusaKey": "tracking_available@others",
              "useInSkuSwitch": false,
              "order": 1
            }
          ],
          "titleLayout": [
            [
              {
                "displayCondition": "previewAmount=invisible",
                "componentId": "23407",
                "distance": 1,
                "blockType": "title",
                "type": "htmlText",
                "blockGroup": "title-0",
                "content": "<span style=\"font-size: 15px; color: #222222;\"><strong>Shipping: $42.37</strong></span>",
                "useInDeliveryOptionPanel": true,
                "useInDetailFirstScreen": true,
                "medusaKey": "shippingfee@freightCost",
                "useInSkuSwitch": true,
                "order": 2
              }
            ]
          ],
          "finalPatternId": 1496001,
          "bizData": {
            "deliveryOptionCode": "DHL",
            "leadTimeSort": [
              9999
            ],
            "deliveryProviderName": "DHL",
            "patternId": 1496001,
            "discount": 36,
            "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2023-11-19\",\"deliveryDayMax\":21,\"deliveryDayMin\":21,\"fAmount\":42.37,\"fCurrency\":\"USD\",\"itemId\":1005005939875273,\"preOrder\":false,\"productId\":1005005939875273,\"provider\":\"cainiao\",\"serviceName\":\"DHL\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"42.37\",\"traceId\":\"2103241d16986043415473712ef473\",\"trackingAvailable\":true}",
            "tracking": "visible",
            "workDayOneFourBeforeCutTime": "no",
            "provider": "cainiao",
            "itemShipFromType": "same",
            "displayTomorrow": "no",
            "itemScene": "newGlobal",
            "shipToCode": "US",
            "thresholdOverZero": "yes",
            "currency": "CNY",
            "company": "DHL",
            "deliveryDate": "Nov 19",
            "formattedAmount": "$42.37",
            "shipFrom": "China",
            "deliveryDayMax": 21,
            "guaranteedDeliveryTime": 35,
            "freightCommitDay": "75",
            "etaTraceId": "ORDER-f-1-228-1814400000-1814400000-1700418741700-1700418741700-DHL-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY--RESOURCE_CODE#DEF-864000000-864000000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY--DIVISION_ID#228-950400000-950400000---OPERATING-|1698604341700",
            "workDayOneFiveBeforeCutTime": "no",
            "itemId": 1005005939875273,
            "solutionBusinessType": "Default",
            "displayAmount": 42.37,
            "shippingFee": "charge",
            "solutionBusinessXDays": 0,
            "deliveryDayMin": 21,
            "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
            "showXDayDeliveryTips": "yes",
            "shipFromCode": "CN",
            "solutionId": 268001,
            "displayCurrency": "USD",
            "deliveryProviderCode": "DHL",
            "shipTo": "United States"
          },
          "dxTemplateInfo": [],
          "detailFirstScreenDisplayList": [
            "23407",
            "23418",
            "23419"
          ],
          "skuSwitchDisplayList": [
            "23404",
            "23407",
            "23418",
            "23419"
          ]
        },
        {
          "contentLayout": [
            [
              {
                "displayCondition": "existEtaMinTime!=yes&&existEtaMaxTime!=yes",
                "componentId": "23418",
                "distance": 1,
                "blockType": "deliveryTime",
                "type": "htmlText",
                "blockGroup": "deliveryTime-0",
                "content": "<span style=\"color: #666666;\">Estimated delivery on </span><span style=\"color: #222222;\">Nov 14</span>",
                "useInDeliveryOptionPanel": true,
                "useInDetailFirstScreen": true,
                "medusaKey": "estimated_delivery_on@deliveryTime",
                "useInSkuSwitch": true,
                "order": 7
              },
              {
                "displayCondition": "default=visible",
                "componentId": "23419",
                "distance": 1,
                "blockType": "deliveryTime",
                "type": "htmlText",
                "blockGroup": "deliveryTime-0",
                "content": "<span style=\"color: #666666;\">,item ships within 10 days</span>",
                "useInDeliveryOptionPanel": true,
                "useInDetailFirstScreen": true,
                "medusaKey": "LongStockPeriod@deliveryTime",
                "useInSkuSwitch": true,
                "order": 8
              }
            ],
            [
              {
                "displayCondition": "default=visible",
                "componentId": "23404",
                "distance": 1,
                "blockType": "freight",
                "type": "htmlText",
                "blockGroup": "freight-0",
                "content": "<span style=\"color: #222222;\">From </span><span style=\"color: #222222;\"><strong>China</strong></span><span style=\"color: #222222;\"> to </span><span style=\"color: #222222;\"><strong>United States</strong></span><span style=\"color: #222222;\"> via UPS Express Saver</span>",
                "useInDeliveryOptionPanel": true,
                "medusaKey": "ship_from_to_via_detail@freight",
                "useInSkuSwitch": true,
                "order": 2
              }
            ]
          ],
          "deliveryOptionPanelDisplayList": [
            "23404",
            "23407",
            "23409",
            "23418",
            "23419"
          ],
          "additionLayout": [
            {
              "displayCondition": "tracking=visible",
              "componentId": "23409",
              "distance": 1,
              "blockType": "others",
              "type": "textWithMark",
              "blockGroup": "others-1",
              "content": "Tracking Available",
              "useInDeliveryOptionPanel": true,
              "useInDetailFirstScreen": false,
              "medusaKey": "tracking_available@others",
              "useInSkuSwitch": false,
              "order": 1
            }
          ],
          "titleLayout": [
            [
              {
                "displayCondition": "previewAmount=invisible",
                "componentId": "23407",
                "distance": 1,
                "blockType": "title",
                "type": "htmlText",
                "blockGroup": "title-0",
                "content": "<span style=\"font-size: 15px; color: #222222;\"><strong>Shipping: $42.43</strong></span>",
                "useInDeliveryOptionPanel": true,
                "useInDetailFirstScreen": true,
                "medusaKey": "shippingfee@freightCost",
                "useInSkuSwitch": true,
                "order": 2
              }
            ]
          ],
          "finalPatternId": 1496001,
          "bizData": {
            "deliveryOptionCode": "UPS",
            "leadTimeSort": [
              9999
            ],
            "deliveryProviderName": "UPS Express Saver",
            "patternId": 1496001,
            "discount": 36,
            "utParams": "{\"cmd\":false,\"currency\":\"USD\",\"deliveryDate\":\"2023-11-14\",\"deliveryDayMax\":16,\"deliveryDayMin\":16,\"fAmount\":42.43,\"fCurrency\":\"USD\",\"itemId\":1005005939875273,\"preOrder\":false,\"productId\":1005005939875273,\"provider\":\"cainiao\",\"serviceName\":\"UPS\",\"shipFrom\":\"CN\",\"shipToCountry\":\"US\",\"shippingFee\":\"42.43\",\"traceId\":\"2103241d16986043415473712ef473\",\"trackingAvailable\":true}",
            "tracking": "visible",
            "workDayOneFourBeforeCutTime": "no",
            "provider": "cainiao",
            "itemShipFromType": "same",
            "displayTomorrow": "no",
            "itemScene": "newGlobal",
            "shipToCode": "US",
            "thresholdOverZero": "yes",
            "currency": "CNY",
            "company": "UPS Express Saver",
            "deliveryDate": "Nov 14",
            "formattedAmount": "$42.43",
            "shipFrom": "China",
            "deliveryDayMax": 16,
            "guaranteedDeliveryTime": 35,
            "freightCommitDay": "75",
            "etaTraceId": "ORDER-f-1-228-1382400000-1382400000-1699986741700-1699986741700-UPS-DOOR_DELIVERY-OPERATING-DEF|SELLER_STOCK_UP-CALENDAR_DAY--RESOURCE_CODE#DEF-864000000-864000000---OPERATING-@DELIVERY_FULFIL-CALENDAR_DAY--DIVISION_ID#228-518400000-518400000---OPERATING-|1698604341700",
            "workDayOneFiveBeforeCutTime": "no",
            "itemId": 1005005939875273,
            "solutionBusinessType": "Default",
            "displayAmount": 42.43,
            "shippingFee": "charge",
            "solutionBusinessXDays": 0,
            "deliveryDayMin": 16,
            "guaranteedDeliveryTimeProviderName": "cainiao_committed_time",
            "showXDayDeliveryTips": "yes",
            "shipFromCode": "CN",
            "solutionId": 268001,
            "displayCurrency": "USD",
            "deliveryProviderCode": "UPS",
            "shipTo": "United States"
          },
          "dxTemplateInfo": [],
          "detailFirstScreenDisplayList": [
            "23407",
            "23418",
            "23419"
          ],
          "skuSwitchDisplayList": [
            "23404",
            "23407",
            "23418",
            "23419"
          ]
        }
      ],
      "deliveryExtraInfoMap": {
        "CAINIAO_STANDARD": {
          "expressionExt": "{\"d0\":168.42,\"d1\":\"Default\",\"d5\":\"{\\\"choice3\\\":\\\"false\\\",\\\"freeShippingTextAB\\\":\\\"true\\\"}\"}",
          "allowBuyNowArouseLayer": false,
          "allowArouseLayer": false,
          "discountExt": "{\"p0\":\"Default\",\"p1\":\"CAINIAO_STANDARD\"}",
          "shippingFeeText": "Shipping fee: $23.12",
          "xdays": false,
          "serviceDetails": {
            "details": [
              {
                "viewMoreText": "Learn more",
                "actionTarget": "https://www.aliexpress.com/p/buyerprotection/index.html",
                "title": "Buyer protection",
                "content": "Get a refund if the item arrives late or not as described. "
              }
            ],
            "title": "Service"
          }
        }
      },
      "freightExt": "[{\"p0\":\"12000034943011855\",\"p1\":\"763.00\",\"p3\":\"CNY\",\"p4\":\"990000\",\"p5\":\"0\",\"p6\":\"null\",\"p7\":\"{}\",\"p8\":\"CN\",\"p9\":\"CN￥ 763.00\",\"d0\":\"763.00\",\"d1\":\"CNY\",\"p10\":[218307,218119,273138,111478,84809,299658],\"p16\":true,\"itemScene\":\"newGlobal\",\"p18\":\"default\"}]",
      "styleCode": "default",
      "usingNewFreight": true
    },
    "sellerPolicy": {
      "returnPolicyGuarantees": [],
      "hasOverseaWarehouse": false,
      "hasNoReasonFreeReturn": false,
      "warranyDetailMap": [],
      "serviceDetails": {
        "details": [
          {
            "viewMoreText": "Learn more",
            "actionTarget": "https://www.aliexpress.com/p/buyerprotection/index.html",
            "title": "Buyer protection",
            "content": "Get a refund if the item arrives late or not as described. "
          }
        ],
        "title": "Service"
      },
      "sellerGuaranteePromiseList": [],
      "returnPromise": {
        "brief": "returns1_bp@content",
        "detailDescription": "returns_details1_bp_tab@content ",
        "oldPromiseId": "2",
        "description": "returns1_bp@content",
        "type": 1,
        "descriptionForSeller": "returns1seller_bp@content ",
        "isValuable": false,
        "descriptionPretty": "returns1_bp@content  ",
        "name": "servicename@return",
        "id": 2
      }
    },
    "site": {
      "wholesaleSubServer": "www.aliexpress.us",
      "crawler": false,
      "siteType": "usa"
    }
  }
  }
  return result = getData(result); // filtering data in using format  
}

// const productListDataApi = async () => {
  
//   const url = 'https://aliexpress-ecommerce.p.rapidapi.com/v1/aliexpress/product-details?productId=1005005939875273';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '10a4ba1cd4msh1ea4162312a54efp1c67bdjsnec864ab7b06e',
//       'X-RapidAPI-Host': 'aliexpress-ecommerce.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await fetch(url, options);
//     let result = await response.json(); 
    
//     if (response.status === 200) {
//       result = getData(result); // filtering data in using format 
//     }
//     return result;
  
//   } catch (error) {
//     return error;
//   }
// };

export {productListDataApi} ;

