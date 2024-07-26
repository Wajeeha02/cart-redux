import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const items=useSelector((state)=>state.cart);
  return (
    <div className="navbar">
      <span>REDUX STORE</span>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span className="cart-items">Cart Items: {items.length}</span>
      </div>
    </div>
  );
}
