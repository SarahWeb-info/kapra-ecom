import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function MyCarousal({
    class1 = "" ,
    class2="" ,
    classImg="" ,
    classP ="",
    classBtn='customDarkBtn' ,
    cusInterval =3000  ,
    customContent
  }) {
         
      // Sample customContent format
    //   let homeBanner = [    {
    //     titleContent: null,
    //     btnContent: 'Explore Now',
    //     link : '/collection' ,
    //     imgContent: 'img1',
    //     altContent: 'Get Dynamic Web Apps',
    //   },
    //   {
    //     titleContent: null,
    //     btnContent: 'Explore Now',
    //     link : '/collection' ,
    //     imgContent: 'img2',
    //     altContent: 'Get Dynamic Web Apps',
    //   },
    //   {
    //     titleContent: null,
    //     btnContent: 'Explore Now',
    //     link : '/collection' ,
    //     imgContent: 'img3',
    //     altContent: 'Get Dynamic Web Apps',
    //   },
    // ];
    
      return (
    <>
    <Carousel className={class1}>

        {customContent && customContent.map((item, index) => {return(

            <Carousel.Item key={index} interval = {cusInterval} >
                
                <div className={class2}>
                    
                    {item.titleContent && <p className={`${index === 0 ? 'leftText' : 'rightText'}`}>{item.titleContent}</p>}
                    {item.imgContent && <img className={classImg}  src={require(`../imgs/${item.imgContent}.jpg`)} alt={item.altContent} />}
                    {item.btnContent && <a href={item.link} rel="noopener noreferrer" className={classBtn} >{item.btnContent}</a>}   

                </div>
            </Carousel.Item>
        
        );})}

    </Carousel>
  </> 
  )
}
