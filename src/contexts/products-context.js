import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);

    const getProducts = async () => {
        try {
            const productRes = await axios.get(`/api/products`);
            setAllProducts(productRes.data.products);
        }
        catch (error) {
            console.log("search-err", error)
        }
        
    }



    useEffect(() => {
        getProducts()
    }, []);

    return (
        <ProductContext.Provider value={{ allProducts, setAllProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct }