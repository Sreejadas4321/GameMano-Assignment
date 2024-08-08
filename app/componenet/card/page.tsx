import React from 'react';
import './page.css'

export const Card = ({ data }) => {
  return (
    <div className='card'>
      <img src={data.thumbnail} alt={data.title} className='image' />
      <h3 className='title'>{data.title}</h3>
      <p className='description'>{data.description}</p>
      <div className='footer'>
        <span className='price'>${data.price}</span>
        <button className='button'>Buy Now</button>
      </div>
    </div>
  );
};
