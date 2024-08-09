'use client'
import React from 'react';
import './page.css'
import { useRouter } from 'next/navigation';




const Card = ({data, id}) => {
 console.log("card")
  const router = useRouter()

  function handleClick(){
    router.push(`product/${id}`)
  }

    return (
        <div className='card'>
          <img src={data.thumbnail} alt={data.title} className='image' />
          <div className='details'>
          <h3 className='title'>{data.title}</h3>
          <p className='description'>{data.description}</p>
          <div className='footer'>
            <span className='price'>${data.price}</span>
            <button className='button' onClick={handleClick}>Buy Now</button>
          </div>
          </div>
        </div>
      );
}

export default Card
