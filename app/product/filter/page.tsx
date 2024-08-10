
'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './page.css';
import { useFetch } from '@/utils/data/page';
import Card from '@/utils/componenet/card/page';

 const Filter = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('');
   
  const [totalProducts, setTotalProducts] = useState<number>(0);


  const { data : allProducts  } = useFetch("https://dummyjson.com/products");
  
  const fetchCategories = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products/categories');
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  

  useEffect(() => {
    fetchCategories();
    
  }, []);

  useEffect(() => {
    // If no categories are selected, show all products
    if (selectedCategories.length === 0 && allProducts) {
      setFilteredProducts(allProducts);
    }
  }, [allProducts, selectedCategories]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(value)
        ? prevSelectedCategories.filter((category) => category !== value)
        : [...prevSelectedCategories, value]
    );
  };

  // Handle filtering by selected categories
  const handleFilter = async () => {
    if (selectedCategories.length > 0) {
      try {
        const filterPromises = selectedCategories.map(category =>
          axios.get(`https://dummyjson.com/products/category/${category}`)
        );

        const results = await Promise.all(filterPromises);
        const allFilteredProducts = results.flatMap(res => res.data.products);
        setFilteredProducts(allFilteredProducts);
        setTotalProducts(allFilteredProducts.length);
      } catch (error) {
        console.error("Error fetching filtered products", error);
      }
    } else {
      setFilteredProducts(allProducts)
      setTotalProducts(allProducts ? allProducts.length : 0);;
    }
  };

  // Handle sorting selection
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  // Sort products based on selected sorting option
  const getSortedProducts = (products: any[]) => {
    if (sortOrder === 'low-to-high') {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-to-low') {
      return products.sort((a, b) => b.price - a.price);
    }
    return products; // Return unsorted if no sort order is selected
  };

  const sortedProducts = getSortedProducts(filteredProducts);

  return (
    <>
      <div className="product-controls flex justify-between">
        <div>Search result for selected categories:</div>
        <select onChange={handleSortChange} value={sortOrder}>
          <option value="">Sort By</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      <div className="results-found">
        <p>{sortedProducts.length} products found</p>
      </div>
      <div className="side-by-side-container flex-col md:flex-row">
        <div className="filter-container">
          <div className="category-box">
            <h3>Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={category.id}
                    value={category.name}
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor={category.name}>{category.name}</label>
                </li>
              ))}
            </ul>
            <button className="filter-button" onClick={handleFilter}>Filter</button>
          </div>
        </div>
        <div className="scrollable-card-container">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <Card id={product.id} data={product} key={product.id} />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter