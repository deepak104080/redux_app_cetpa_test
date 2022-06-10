import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Orders from './components/Orders';
import Login from './components/Login';
import TempList from './components/TempList';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/templist' element={<TempList/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
