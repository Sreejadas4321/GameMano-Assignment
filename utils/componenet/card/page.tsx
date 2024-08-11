'use client'
import React from 'react';
import './page.css'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import FallbackImage from './fallbackimage';



const Card = ({data, id}:{data:any, id:any}) => {

  const router = useRouter()
  const path = usePathname()
  const regex = /^\/product\/\d+$/

  function handleClick(){
    router.push(`product/${id}`)
  }


    return (
        <div className='card'>
          <FallbackImage
                src={`${data?.thumbnail}/xyz`}
                alt={data?.title}
                customClass='image'
                fallbackSrc="https://via.placeholder.com/200"
            />
          <div className='details'>
          <h3 className='title'>{data.title}</h3>
          <p className='description' style={{color:'black'}}>{data.description}</p>
          <div className='footer'>
            <span className='text-[black]'>${data.price}</span>
            <button disabled={regex.test(path)} className='button' onClick={handleClick}>Buy Now</button>
          </div>
          </div>
        </div>
      );
}

export default Card
