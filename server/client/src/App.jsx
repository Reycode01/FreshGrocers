import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar'; // Import Navbar component
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>We Deliver Fresh, High-Quality Groceries Across Eldoret and Beyond</h1>
        <Navbar /> {/* Use Navbar component here */}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  </Router>
);

export default App;







