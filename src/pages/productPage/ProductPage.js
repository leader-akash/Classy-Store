import React, { useState } from 'react';
import "./ProductPage.css";
import Sidebar from '../../components/sidebar/Sidebar';
import Card from '../../components/cards/card/Card';
import { cardData } from '../../data/card.data';
 
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
        {products.map((el, i) => {
          return (
            <Card
              key={i}
              image={el.image}
              description={el.description}
              price={el.price}
              marketPrice={el.marketPrice}
              label={el.label}
              labelStyle={el.labelStyle}
              rating={el.rating}
              category={el.category}
            />
          );
        })}
      </div>
    </div>
  );
};
 
export default ProductPage;
 