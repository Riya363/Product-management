import React, { useState } from 'react';

const AddProductPage = () => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Added:', { productName, productImage, productPrice, productCategory });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Image URL:
          <input 
            type="text" 
            value={productImage} 
            onChange={(e) => setProductImage(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Price:
          <input 
            type="number" 
            value={productPrice} 
            onChange={(e) => setProductPrice(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Category:
          <input 
            type="text" 
            value={productCategory} 
            onChange={(e) => setProductCategory(e.target.value)} 
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
