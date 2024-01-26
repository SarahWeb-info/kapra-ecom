import React , { useContext  } from 'react';
import MyContext from '../../context/globalContext/globalContext';

import FadeBg from '../FadeBg';
import SearchDiv from './SearchSideDiv';
import LoginDiv from './LoginSideDiv';
import CartDiv from './CheckoutSideDiv';
import './sidedivs.css';

export default function SideMenus() {
    const {fadeBg , cartDisplay , loginDisplay  ,searchDisplay ,closeBtnFunc } = useContext(MyContext);

    return (
    <>
     {fadeBg && <FadeBg onClose ={closeBtnFunc} />} 
     {cartDisplay && <CartDiv  onClose ={closeBtnFunc} />}
     {loginDisplay && <LoginDiv  onClose ={closeBtnFunc} />}
     {searchDisplay && <SearchDiv  onClose ={closeBtnFunc} />}
    </>
  )
}
