'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Define the types for the fetched data
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  // Add other fields that the products might have
}

interface FetchResponse {
  products: Product[];
}

export const useFetch = (endpoint: string) => {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get<FetchResponse>(endpoint);
      const fetchedData = res.data;

      if (fetchedData && fetchedData.products) {
        setData(fetchedData.products);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      // Any final cleanup or actions
    }
  };

  useEffect(() => {
    if (endpoint) {
      fetchData();
    }
  }, [endpoint]);

  return { data };
};
