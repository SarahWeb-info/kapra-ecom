import React , {useContext} from 'react'
import MyContext from '../context/globalContext/GlobalState';

import ProductImg from '../components/productImg/ProductImg';
import ProductText from '../components/productText/ProductText';
import ProductPrice from '../components/productPrice/ProductPrice';

export default function Wishlist() {
  
  let styling = {
    width: `50vw`,
    minWidth: `1000px`,
    marginRight: `10px`,
  };
  
  const { cartDisplayFunc } = useContext(MyContext);

  return (
    <div className='pageDiv'>
      <h1 className='columnCenter'>Your Order Status </h1>
      <div className='columnCenter'>
        <div className={`productCard productCard-Row`} style={styling} >

          <ProductImg imgObj={ {imgSrc: `https://uk.images.search.yahoo.com/search/images;_ylt=AwrgNzDHkLBlzzMGO0IM34lQ;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=some+image&type=E210GB91215G0&ei=UTF-8&fr=mcafee&th=95.2&tw=143.3&imgurl=http%3A%2F%2Fallhdwallpapers.com%2Fwp-content%2Fuploads%2F2016%2F06%2FSummer-5.jpg&rurl=https%3A%2F%2Fallhdwallpapers.com%2Fsome-beautiful-hd-summer-wallpapers-high-quality%2F&size=1479KB&name=Some+Beautiful+HD+Summer+Wallpapers+%28High+Quality%29+-+All+HD+Wallpapers&oid=7&h=4324&w=6500&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hAAH8AEdVEbGGJg1AkEA4QHaE7%26pid%3DApi%26rs%3D1%26c%3D1%26qlt%3D95%26w%3D143%26h%3D95&tt=Some+Beautiful+HD+Summer+Wallpapers+%28High+Quality%29+-+All+HD+Wallpapers&sigr=JoxHHLMCnOtD&sigit=2MCsDTmllNeP&sigi=vvs4pB3UmdFC&sign=6dmz0F8zyKis&sigt=6dmz0F8zyKis` }} />

          <ProductText  textClass = "productTitle"  text = "Get this Product"  maxTextLength = {60}  /> 

          <div className='flexColumn justify-content-center align-items-start productPara'>
            <p>Product Id :<b>1223</b> </p>
            <p>Product Quantity : <b>2 peice</b></p>
            <p>Product Detail : <b>Golden Metallic</b></p>
          </div>  

          <ProductPrice currency = "$"  discountPrice = {28}  origPrice = {30} />

          <span className='inlineBetwwen cartBtn'>
            <a className='customDarkBtn' href='/product' >Explore</a>
            <button className='customDarkBtn' onClick={cartDisplayFunc} >Add to Cart</button>
          </span>

          </div>
      
      </div>

    <div className='inlineBetween'>
        <p>Status : <i>Processing</i></p>
        <p>Total Price : <i>including Shipping </i><b> $ 28</b></p>
        <p>Tracking Id :</p>
        <p>Estimated Time : </p>
    </div>
        <hr/>
    </div>
  )
}
