// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/store">Store</Link></li>
          {/* Remove the Services link if it's not needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

