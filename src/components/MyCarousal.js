import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function MyCarousal({
    class1 = "" ,
    class2="" ,
    classImg="" ,
    classBtn='customDarkBtn' ,
    cusInterval =3000  ,
    customContent
  }) {
         
      // Sample customContent format
    // customContent = [{ 
      //     titleContent: '' , 
      //     btnContent : '' , 
      //     imgContent:'', 
      //     altContent : '' 
      //     }]
  return (
    <>
    <Carousel className={class1}>

        {customContent && customContent.map((item, index) => {return(

            <Carousel.Item key={index} interval = {cusInterval} >
                
                <div className={class2}>
                    
                    {item.titleContent && <p>{item.titleContent}</p>}
                    {item.imgContent && <img className={classImg}  src={require(`../imgs/${item.imgContent}.jpg`)} alt={item.altContent} />}
                    {item.btnContent && <a href={item.link} rel="noopener noreferrer" className={classBtn} >{item.btnContent}</a>}   

                </div>
            </Carousel.Item>
        
        );})}

    </Carousel>
  </> 
  )
}
