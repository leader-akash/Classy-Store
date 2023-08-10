import axios from 'axios';
import React, { createContext, useContext, useReducer, useState } from 'react'
import { useProduct } from './products-context';
import { useLocation, useNavigate } from 'react-router-dom';
import { getNumberFromStringPrice } from 'utils/functions/getNumberFromStringPrice';
import { HIGH_TO_LOW, LOW_TO_HIGH } from 'utils/constants/constants';
import { products } from 'backend/db/products';

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {

   const [searchItem, setSearchItem] = useState("");
   const [categoryItem, setCategoryItem] = useState([]);

   const { allProducts } = useProduct();



   const location = useLocation();
   const navigate = useNavigate();

   const reducerFunction = (state, action) => {
      switch (action.type) {
         case "SET_CATEGORY":
            return {
               ...state, showCategory: [...state.showCategory, action.payload]
            };
         case "UNSET_CATEGORY":
            return {
               ...state, showCategory: state.showCategory.filter((category) => category !== action.payload)
            }
         case "PRICE_SORT":
            return {
               ...state, sortByPrice: action.payload
            }
         case "RANGE":
            return {
               ...state, sortByPriceRange: action.payload
            }
         case "RATING":
            return {
               ...state, sortByRating: action.payload
            }
         case "RESET_FILTER":
            return {
               showCategory: [],
               sortByPriceRange: 0,
               sortByPrice: null,
               sortByRating: 0,
            }
         default:
            return state;
      }
   }

   const initialState = {
      showCategory: [],
      sortByPriceRange: 0,
      sortByPrice: null,
      sortByRating: 0,

   }


   const [state, dispatch] = useReducer(reducerFunction, initialState);


   // debugging 
   const filterSearch = (allProducts, searchItem) => {

      if (searchItem) {
         if (location.pathname !== '/products') {
            setSearchItem("")
         }
         else {
            return allProducts?.filter((product) => {
               return (
                  product.category?.toLowerCase()?.includes(searchItem?.toLowerCase()) ||
                  product.description?.toLowerCase()?.includes(searchItem?.toLowerCase())
               )
            })
         }
      } else {
         return allProducts;
      }
   }


   const filteredSearchData = filterSearch(allProducts, searchItem);

   const filterCategories = (filteredSearchData) => {
      const selectedCategories = state?.showCategory
      if (selectedCategories?.length === 0) {
         return filteredSearchData;
      }
      else {
         return (
            filteredSearchData.filter((product, i) => {
               return selectedCategories?.some((category) => category.toLowerCase()?.includes(product.category.toLowerCase()))
            })

         )
      }
   }
   const filteredCategoryData = filterCategories(filteredSearchData)



   const filterSortPrice = (filteredCategoryData) => {
      const selectedPrice = state.sortByPrice;
      if (selectedPrice === HIGH_TO_LOW) {
         return filteredCategoryData.sort((a, b) => {
            return getNumberFromStringPrice(b.price) - getNumberFromStringPrice(a.price)
         })
      }
      else if (selectedPrice === LOW_TO_HIGH) {
         return filteredCategoryData.sort((a, b) => {
            return getNumberFromStringPrice(a.price) - getNumberFromStringPrice(b.price)
         })
      }
      else {
         return filteredCategoryData;
      }

   }

   const sortedPriceData = filterSortPrice(filteredCategoryData);


   const filterPriceRange = (sortedPriceData) => {
      const selectedRange = state.sortByPriceRange;

      if (selectedRange > 0) {
         return sortedPriceData.filter((product) => {
            return getNumberFromStringPrice(product.price) <= selectedRange
         })
      }
      return sortedPriceData
   }

   const filteredPriceRangeData = filterPriceRange(sortedPriceData);


   const filterRating = (filteredPriceRangeData) => {
      const selectedRating = state.sortByRating;

      if (selectedRating > 0) {
         return filteredPriceRangeData.filter((product) => {
            return product?.rating >= selectedRating;
         })
      }
      return filteredPriceRangeData
   }

   const filteredData = filterRating(filteredPriceRangeData);




   return (
      <FilterContext.Provider value={{ searchItem, setSearchItem, categoryItem, setCategoryItem, state, dispatch, filteredData }}>
         {children}
      </FilterContext.Provider>
   )
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };