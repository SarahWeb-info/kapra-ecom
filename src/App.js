import React from 'react';
import './css/App.css';
import MyNavbar from './components/MyNavbar';
import DialogAds from './dialogs/Dialogs';
import Footer from './components/Footer';
import Home from './tabs/Home' ; 
import Collection from './tabs/Collection';
import Product from './tabs/Product';
import Wishlist from './tabs/Wishlist';
import ContactUs from './tabs/ContactUs';
import FAQs from './tabs/Faqs';
import Docs from './tabs/Docs';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <MyNavbar />
      <DialogAds />
      <div className='ghostNav'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}