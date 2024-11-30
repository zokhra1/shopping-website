/* eslint-disable react-refresh/only-export-components */

import { useState, useContext, useEffect, createContext } from "react";

const Base_Url = "https://fakestoreapi.com/products";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
function ProductProvider({ children }) {
  const [products, setProducts] = useState([]); // To store the fetched data
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // To show a loading state
  const [error, setError] = useState(null); // To store error messages

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      setIsLoading(true); // Start loading
      setError(null); // Reset any previous errors
      const response = await fetch(`${Base_Url}`); // Fetch data
      if (!response.ok) {
        throw new Error("Failed to fetch products"); // Handle non-200 responses
      }
      const data = await response.json(); // Parse JSON

      setProducts(data); // Set fetched data to state
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      setIsLoading(true); // Start loading
      setError(null); // Reset any previous errors
      const response = await fetch(`${Base_Url}/categories`); // Fetch data
      if (!response.ok) {
        throw new Error("Failed to fetch products"); // Handle non-200 responses
      }
      const data = await response.json(); // Parse JSON
      console.log(data);
      setCategory(data); // Set fetched data to state
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Fetch products when component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, error, category }}>
      {children}
    </ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("ProductContext was used outside the ProductProvider");
  return context;
}

export { ProductProvider, useProducts };
