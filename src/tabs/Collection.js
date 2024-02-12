import React, {useState, useEffect } from 'react';
import  {findAlgorithmCatagory}  from '../data/catagoryAlgorithm';
import { useParams } from 'react-router-dom';
import "../css/collection.css";
import {addToWishData} from '../data/addWishlist';

import FilterBar from '../components/filterBar/FilterBar';
import ProductDialog from "../components/productDialog/ProductDialog";
import CartDiv from '../components/sidemenus/CheckoutSideDiv';
import ProductCard from '../components/productCards/ProductCard';
import FilterDiv from '../components/filterDiv/FilterSortDiv';

export default function Collection() {

    // Fetch params from the URL path
    const { param } = useParams();
    const [collection, setCollection] = useState([]);
    let callOnce = 0;

    useEffect(() => {

        const fetchData = async () => {
        let data = await findAlgorithmCatagory(param);
            if (data) {
                data = data[0].data ; 
                setCollection(JSON.parse(data));
            }
        };
        
        if (callOnce === 0) {
        fetchData();
        callOnce = 1;
        }

    }, []);

    const totalProducts = collection.length;
    const showProduct = 6;
    const [lastNumber,setlastNumber] = useState(showProduct);

    if (totalProducts > showProduct) {
        setlastNumber(showProduct);
    }

    const nextBtn = () => {
        if (lastNumber + showProduct < totalProducts) {
            setlastNumber(lastNumber + showProduct);
        }
    }

    const [grid1display, setGrid1display] = useState(false);
    const [grid2display, setGrid2display] = useState(false);
    const [grid3display, setGrid3display] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 576) {
            setGrid2display(true);
            setGrid3display(false);
        } else {
            setGrid2display(false);
            setGrid3display(true);
        }
    }, []);

    const selectGrid = (x) => {

        setGrid1display(false);
        setGrid2display(false);
        setGrid3display(false);

        if (x === 1) {
            setGrid1display(true);
        } else if (x === 2) {
            setGrid2display(true);
        } else {
            setGrid3display(true);
        }
    }

    const [showDialog, setShowDialog] = useState(false);
    const [productData , setProductData ] = useState(null);

    const showDialogFunc = (item) => {
        setProductData(item);
        setShowDialog(true);
    }

    const hideDialog = () => {
        setShowDialog(false);
    }

    const wishListFunc =( item , id )=>{
        addToWishData(item , id );
    }

    const [fadeBg, setFadeBg] = useState('translateY(-100vh)');
    const [cart, setCart] = useState(false);
    const [showFilterDiv , setShowFilterDiv] = useState(false);

    const hideAll = (x) => {
        setFadeBg('translateY(-100vh)');
        setCart(false);
        setShowFilterDiv(false);
    }

    const displayFilterDiv = () =>{
        setFadeBg('translateY(0)');
        setShowFilterDiv(true);
    }

    const handleFilter =(data)=>{
        console.log('filter the data' , data);
        hideAll();
    }

    return (
        <div>

            {showDialog && 
                <ProductDialog
                    onClose={() => hideDialog()}
                    item={productData}
                }

            {showFilterDiv && <FilterDiv handleFilter={handleFilter}  hideAll={hideAll}/>}    

            <div
                className='fadeBg'
                onClick={hideAll}
                style={{ transform: `${fadeBg}` }}>
            </div>
            
            {cart && <CartDiv onClose={hideAll}/>}

            <FilterBar
                grid1display={grid1display}
                grid2display={grid2display}
                grid3display={grid3display}
                displayFilterDiv={displayFilterDiv} 
                selectGrid={selectGrid}
            />

            <div className='inlineCenter collectionVeiw'>
                {collection.length=== 0 && 
                    <p>
                        This category is currently out of stock. Subscribe for the restocking alert.
                    </p>
                }

                {collection && collection
                    .slice(0, lastNumber)
                    .map((item, index) => {

                        let mainClass = 'productCard-Column productColumn-imgHover';

                        let styling = {
                            width: `20vw`,
                            minWidth: `20vw`,
                            height: '40vh',
                            marginRight: `10px`,
                            marginTop: `10px`
                        };

                        if (grid2display) {
                            styling = {
                                width: `40vw`,
                                minWidth: `20vw`,
                                height: '40vh',
                                marginRight: `10px`,
                                marginTop: `10px`
                            };
                            if (window.innerWidth > 1200) {
                                mainClass = 'productCard-Row';    
                            }
                            
                        } else if (grid3display) {
                            styling = {
                                width: `20vw`,
                                minWidth: `20vw`,
                                height: '40vh',
                                marginRight: `10px`,
                                marginTop: `10px`
                            };
                        } else {
                            styling = {
                                width: `80vw`,
                                minWidth: `80vw`,
                                height: '40vh',
                                marginTop: `10px`
                            };
                        }
                        
                        let myCard = {
                            main: {
                                mainClass: `${mainClass}`,
                                style: styling
                            },
                            colouredDiv: {
                                additionalClass: "noColour"
                            },
                            img: {
                                imgSrc: `${item.images[0]}`,
                                imgBtns: ['detail', 'heart']
                            },
                            id : `${item.id}`,
                            para: {
                                para: `${item.title}`,
                                maxTextLength: 60
                            },
                            prices: {
                                currency: `$`,
                                discount: `${item.discountPercentage}`,
                                origPrice: `${item.price}`,
                                show: "full"
                            }
                        };

                        return (
                            
                            <ProductCard
                                key={index}
                                myCard={myCard}
                                hoverBtn={false}
                                detailFunc=
                                {()=> showDialogFunc( item )}
                                wishListFunc=
                                {()=>wishListFunc( item , item.id)}
                            />
                        );
                    })}
            </div>

            <div className='columnCenter py-2'>
                {lastNumber + showProduct < totalProducts && <button className='customDarkBtn' onClick={nextBtn}>More Products</button>}
            </div>

        </div>
    );
}
