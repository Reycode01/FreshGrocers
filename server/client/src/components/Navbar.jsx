import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-link">Products</Link>
      </li>
      <li className="nav-item">
        <Link to="/productlist" className="nav-link">Product List</Link>
      </li>
      <li className="nav-item">
        <Link to="/cart" className="nav-link">Cart</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

