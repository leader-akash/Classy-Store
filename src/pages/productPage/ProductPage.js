import React, { useState } from 'react';
import "./ProductPage.css";
import Sidebar from '../../components/sidebar/Sidebar';
import Card from '../../components/cards/card/Card';
import { cardData } from '../../data/card.data';
import ProductsItems from './sub-components/ProductItems';
 
const ProductPage = () => {

  const [products, setProducts] = useState(cardData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState('');
 
  const filterProducts = (selectedCategories) => {
    let filteredProducts = cardData;
 
    // Apply category filter
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
 
    // Apply rating filter if needed
    if (selectedRating) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= parseInt(selectedRating)
      );
    }
 
    setProducts(filteredProducts);
  };

  const filterRatings = (rating) => {
    if (rating === selectedRating) {
      setSelectedRating('');
      setProducts(cardData);
    } else {
      setSelectedRating(rating);
      const filteredProducts = cardData.filter((product) => product.rating >= parseInt(rating, 10));
      setProducts(filteredProducts);
    }
  };
 
  return (
    <div className='flex'>
      <Sidebar
        selectedCategories={selectedCategories}
        selectedRating={selectedRating}
        filterProducts={filterProducts}
        filterRatings={filterRatings}
      />
      <div className='flex products-container'>
        <ProductsItems />
      </div>
    </div>
  );
};
 
export default ProductPage;
 