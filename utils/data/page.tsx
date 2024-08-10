'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useFetch = (endpoint ) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let res = await axios.get(endpoint);
      let fetchedData = res.data;
      

      if (fetchedData) {
        setData(fetchedData.products);
        // console.log(fetchedData.products);
      }
    } catch (error) {
      console.log("error", error);
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
