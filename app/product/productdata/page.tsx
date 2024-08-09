'use client'


import React from 'react'
import "./page.css"
import { useFetch } from '@/utils/data/page';
import Card from '@/utils/componenet/card/page';

export const ProductData = () => {
    const { data } = useFetch("https://dummyjson.com/products");

    if (!data || data.length === 0) {
        return <p>Loading...</p>;
      }
  return (
    <div className="scrollable-card-container">
        {data.map((ele) => (
          <Card key={ele.id} data={ele} />
        ))}
    </div>
  )
}
