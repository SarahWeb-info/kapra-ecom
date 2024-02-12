import React, { useEffect, useState } from 'react';
import getProductDetails from './data/productDetails';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    // Fetch params from the URL path
  const { param } = useParams();
  const [product, setProduct] = useState([]);
  let callOnce = 0;

  useEffect(() => {
    
    const fetchData = async () => {
      setProduct(await getProductDetails(param));
    };

    if (callOnce === 0) {
        fetchData();
        callOnce = 1;
      }
  
    }, []);

  return (
    <div>
      <p>Product ID: {param}</p>
    {
        product ? (
            product.map((item, index) => (
            <div key={index}>
                {item.title}
            </div>
            ))
        ) : (
            <p>Loading ...</p>
        )
    }
    </div>
  )
}
