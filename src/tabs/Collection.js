import React, {useState, useEffect} from 'react';
import "../css/collection.css";

import FilterBar from '../components/filterBar/FilterBar';
import productsList from '../data/getProductList';
import ProductDialog from "../components/productDialog/ProductDialog";
import CartDiv from '../components/sidemenus/CheckoutSideDiv';
import MiniCart from "../components/miniCart/MiniCart";
import ProductCard from '../components/productCards/ProductCard';
import FilterDiv from '../components/filterDiv/FilterSortDiv';

export default function Collection() {

    const totalProducts = productsList.length;
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
    const [productId, setProductId] = useState(0);
    const [currency, setCurrency] = useState("$");
    const [origPrice, setOrigPrice] = useState("");
    const [discount, setDiscount] = useState("");

    const showDialogFunc = (id, origPrice, discountPrice) => {
        setProductId(id);
        setOrigPrice(origPrice);
        setDiscount(discountPrice);
        setShowDialog(true);
    }

    const hideDialog = () => {
        setShowDialog(false);
    }

    const [showMiniCart,
        setShowMiniCart] = useState(false);
    const [productTitle,
        setProductTitle] = useState(0);

    const showMiniCartFunc = (id, title, currency, origPrice, discountPrice) => {
        setProductId(id);
        setProductTitle(title);
        setCurrency(currency);
        setOrigPrice(origPrice);
        setDiscount(discountPrice);
        setShowMiniCart(true);
    }

    const hideMiniCart = () => {
        setShowMiniCart(false);
    }

    const [fadeBg,
        setFadeBg] = useState('translateY(-100vh)');
    const [cart,
        setCart] = useState(false);
    const [showFilterDiv , setShowFilterDiv] = useState(false);

    const showCart = () => {
        setShowDialog(false);
        setFadeBg('translateY(0)');
        setCart(true);
    }
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

    const showProduct = 6;
    const [lastNumber,
        setlastNumber] = useState(showProduct);

    const nextBtn = () => {
        if (lastNumber + showProduct < totalProducts) {
            setlastNumber(lastNumber + showProduct);
        }
    }


    return (
        <div>

            {showDialog && <ProductDialog
                onClose={() => hideDialog()}
                goToCart={showCart}
                itemId={productId}
                origPrice={origPrice}
                discountPrice={discount}/>}

            {showMiniCart && 
                <MiniCart
                    onClose={() => hideMiniCart()}
                    goToCart={showCart}
                    productId = {productId}
                    propTitle={productTitle}
                    currency = {currency}
                    origPrice={origPrice}
                    discountPrice={discount}
                />
            }

            {showFilterDiv && <FilterDiv handleFilter={handleFilter}  hideAll={hideAll}/>}    

            <div
                className='fadeBg'
                onClick={hideAll}
                style={{
                transform: `${fadeBg}`
            }}></div>
            {cart && <CartDiv onClose={hideAll}/>}

            <FilterBar
                grid1display={grid1display}
                grid2display={grid2display}
                grid3display={grid3display}
                displayFilterDiv={displayFilterDiv} 
                selectGrid={selectGrid}/>

            <div className='inlineCenter collectionVeiw'>

                {productsList && productsList
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
                                mainClass = 'productCard-Row  productColumn-imgHover';    
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
                                imgSrc: `${item.img}`,
                                imgBtns: ['cart', 'detail']
                            },
                            para: {
                                para: `${item.title}`,
                                maxTextLength: 60
                            },
                            prices: {
                                currency: `${item.currency}`,
                                discount: `${item.discount}`,
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
                            {()=> showDialogFunc( `${item.id}` , `${item.discount}` , `${item.price}` )}
                            miniCartFunc=
                            {()=>showMiniCartFunc( `${item.title}` , `${item.currency}` , `${item.discount}` , `${item.price}` )}
                        />);
                    })}

            </div>

            <div className='columnCenter py-2'>
                {lastNumber + showProduct < totalProducts && <button className='customDarkBtn' onClick={nextBtn}>More Products</button>
}
            </div>

        </div>
    );
}
