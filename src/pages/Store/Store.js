import React from 'react';
import './Store.css';

function Store() {
  return (
    <div className="store">
      <h1>Welcome to Our Store</h1>
      <p>Find your perfect beauty products!</p>
      <div className="product-list">
        {/* In a real application, the product items would be fetched from an API */}
        <div className="product-item">
          <img src="path-to-product-image.jpg" alt="Product Name" />
          <h3>Product Name 1</h3>
          <p className="product-description">A short description of the product...</p>
          <p className="product-price">$19.99</p>
          <button>Add to Cart</button>
        </div>
        {/* Repeat for each product */}
      </div>
    </div>
  );
}

export default Store;
