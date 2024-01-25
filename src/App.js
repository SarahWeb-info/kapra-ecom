import React from 'react';
import './css/App.css';
import './css/buttons.css';

import MyNavbar from './components/navbar/MyNavbar';
import Promotions from './components/promotions/Promotions';
import SideMenus from './components/sidemenus/SideMenus';
import Footer from './components/footer/Footer';

import Home from './tabs/Home' ; 
import Collection from './tabs/Collection';
import Product from './tabs/Product';
import Wishlist from './tabs/Wishlist';
import OrderDetails from './tabs/OrderDetail';
import ContactUs from './tabs/ContactUs';
import SignUp from './tabs/SignUp' ; 
import FAQs from './tabs/Faqs';
import Docs from './tabs/Docs';
import ErrorPg from './tabs/ErrorPg';

import State from './context/frontend/SideDivStates';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <State>
    <BrowserRouter>
      <MyNavbar />
      <SideMenus />
      <Promotions />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/OrderDetails" element={<OrderDetails />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="*" element={<ErrorPg />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </State>
  );
}