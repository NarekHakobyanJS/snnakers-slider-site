import React from 'react';
import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import axios from "axios"
import Foother from './components/Foother/Foother';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { getProductsAC } from './redux/productsReducer';
import SneakersPage from './pages/SneakersPage/SneakersPage';
//import arr from './data';
function App() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.productsPage.products)
  
  useEffect(() => {
    axios.get('https://6384b0ac3fa7acb14ffd7b94.mockapi.io/items')
      .then(response => dispatch(getProductsAC(response.data)))
  }, [])
  

  return (
    <div className="app">
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/" element={<ProductsPage products={products} />} />
          <Route path="/products/:id" element={<SneakersPage />} />
        </Routes>
      </main>
      <Foother />
    </div>
  );
}

export default App;
