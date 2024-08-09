'use client'
import axios from 'axios';

import React, { useEffect, useState } from 'react'
import './page.css'

export const Filter = () => {
    const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let res = await axios.get('https://dummyjson.com/products/categories');
      let fetchedData =  await res.data;

      if (fetchedData) {
        setData(fetchedData);
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

 

  return (
    <div className="filter-container">
    <div className="category-box">
        <h3>Categories</h3>
        <ul>
            {data.map((ele,index) => (
                <li key={index}>
                    <input type="checkbox" id={ele.slug} />
                    <label htmlFor={ele.name}>{ele.name}</label>
                </li>
            ))}
        </ul>
        <button className="filter-button">Filter</button>
    </div>
</div>
  )
}
