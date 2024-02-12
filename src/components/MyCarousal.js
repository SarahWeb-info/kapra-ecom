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
         
    let totalSlide = customContent.length ;
    
    if (totalSlide > 5) {
        totalSlide = 5 ;
    }

    return (
    <>
    <Carousel className={class1}>

        {customContent && customContent.slice(0 , totalSlide).map((item, index) => {return(

            <Carousel.Item key={index} interval = {cusInterval} >
                
                <div className={class2}>
                    
                    {item.titleContent && <p className={`${index === 0 ? 'leftText' : 'rightText'}`}>{item.titleContent}</p>}
                    {item.imgContent && <img className={classImg} src={item.imgContent} alt={item.altContent} />}
                    {item.btnContent && <a href={item.link} rel="noopener noreferrer" className={classBtn} >{item.btnContent}</a>}   

                </div>
            </Carousel.Item>
        
        );})}

    </Carousel>
  </> 
  )
}
