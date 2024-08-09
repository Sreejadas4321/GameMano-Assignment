'use client'
import axios from 'axios';

import React, { useEffect, useState } from 'react'
import './page.css'
import { useFetch } from '@/utils/data/page';
import Card from '@/utils/componenet/card/page';

export const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState('');
  const [endpoint, setEndpoint] = useState("https://dummyjson.com/products"); 
  const [sortOrder, setSortOrder] = useState('');
  const [totalProducts, setTotalProducts] = useState(0);
  
  

    const { data: allProducts } = useFetch(endpoint);
   
   
   
    // const { data  } = useFetch("https://dummyjson.com/products");


  const fetchData = async () => {
    try {
      let res = await axios.get('https://dummyjson.com/products/categories');
      let fetchedData =  await res.data;

      if (fetchedData) {
        setCategories(fetchedData);
         console.log(fetchedData,'data');
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      // Any final cleanup or actions
    }
  };

  useEffect(() => {
    fetchData();
}, []);
useEffect(() => {
  if (allProducts) {
    setTotalProducts(allProducts.length);
  }
}, [allProducts]);

const handleCategoryChange = (e) => {
  setSelectedCategories(e.target.value);
};
const handleFilter = () => {
  if (selectedCategories) {
      setEndpoint(`https://dummyjson.com/products/${"category"}/${selectedCategories}`);
  } else {
      setEndpoint("https://dummyjson.com/products"); 
  }
};
 

const handleSortChange = (e) => {
  const selectedSort = e.target.value;
  setSortOrder(selectedSort);
};
const getSortedProducts = (products) => {
  if (sortOrder === 'low-to-high') {
    return products.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-to-low') {
    return products.sort((a, b) => b.price - a.price);
  }
  return products; // Return unsorted if no sort order is selected
};

const sortedProducts = getSortedProducts(allProducts);


  return (
    <>
    
    <div className="product-controls">
        <select onChange={handleSortChange} value={sortOrder}>
          <option value="">Sort By</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      <div className="results-found">
            <p>{totalProducts} products found</p>
          </div>
    <div className="side-by-side-container">
      
    <div className="filter-container">
    <div className="category-box">
        <h3>Categories</h3>
        <ul>
            {categories.map((ele,index) => (
                <li key={index}>
                    <input
                     type="checkbox" 
                     id={ele.name}
                      value={ele.name} 
                      onChange={handleCategoryChange}/>
                    <label htmlFor={ele.name}>{ele.name}</label>
                </li>
            ))}
        </ul>
        <button  className="filter-button" onClick={handleFilter}>Filter</button>
    </div>
</div>
<div className="scrollable-card-container">
{sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <Card id={product.id} data={product}  />
            ))
          ) : (
            <p>No products available.</p>
          )}
</div>
</div>
</>
  )
}
