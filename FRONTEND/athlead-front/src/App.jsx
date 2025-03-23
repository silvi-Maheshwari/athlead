import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ProductDetails from './components/ProductDetails';
import { scrapeProductData } from './api';
import './App.css';

const App = () => {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState('');

  const handleScrape = async (url) => {
    setError('');
    setProductData(null);

    try {
      const data = await scrapeProductData(url);
      setProductData(data);
    } catch (err) {
      setError('Failed to fetch product data. Please check the URL and try again.');
    }
  };

  return (
    <div className="app">
      <h1>Amazon Product Scraper</h1>
      <InputForm onSubmit={handleScrape} />
      {error && <p className="error">{error}</p>}
      <ProductDetails data={productData} />
    </div>
  );
};

export default App;
