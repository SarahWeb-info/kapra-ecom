import React , { useContext  } from 'react';
import context from '../../context/context';
import FadeBg from '../FadeBg';
import SearchDiv from './SearchSideDiv';
import LoginDiv from './LoginSideDiv';
import CartDiv from './CheckoutSideDiv';
import './sidedivs.css';

export default function SideMenus() {
    const {fadeBg , cart , login  ,search ,closeBtn} = useContext(context);

    return (
    <>
     {fadeBg && <FadeBg onClose ={closeBtn} />} 
     {cart && <CartDiv  onClose ={closeBtn} />}
     {login && <LoginDiv  onClose ={closeBtn} />}
     {search && <SearchDiv  onClose ={closeBtn} />}
    </>
  )
}
