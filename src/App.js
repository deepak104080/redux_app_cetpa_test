import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
     <Header/>
     <Routes>
       <Route path='/' element={<ProductList/>}/>
       <Route path='/product/:id' element={<ProductDetail/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
