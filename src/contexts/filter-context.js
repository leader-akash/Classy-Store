import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useProduct } from './products-context';
import { useLocation, useNavigate } from 'react-router-dom';

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {

    const [searchItem, setSearchItem] = useState("");

    const { allProducts } = useProduct();

    console.log("eee", searchItem);

    const location = useLocation();
    const navigate = useNavigate();

    const filterSearch = (allProducts, searchItem) => {
        if (searchItem) {
            if (location.pathname !== '/product') {
                navigate("/product")
            }
            else {
                return allProducts?.filter((product) => {
                    console.log("pp", product)
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

    const filteredData = filterSearch(allProducts, searchItem);

    console.log("filterdddd", filteredData)

    return (
        <FilterContext.Provider value={{ searchItem, setSearchItem, filteredData }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };