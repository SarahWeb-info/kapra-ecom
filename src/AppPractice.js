import React  from 'react';
import Navbar from './components/navbar/MyNavbar';
import Home from './tabs/Home' ; 
import Collection from './tabs/Collection';
import ProductDetails from './ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyContext from './context/globalContext/GlobalState';
import './css/App.css';

export default function App() {

  return (
    <MyContext>
    <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home homeData={homeData} />} />
        <Route path="/collection/:param" element={<Collection />} />
        {/* <Route path="/productDetails/:param" element={<ProductDetails />} /> */}
      </Routes>

    </BrowserRouter>
    </MyContext>
  );
}