import React from 'react'
import FallbackImage from './fallbackimage';



type IProductData = {
    imgSrc:string,
    title:string,
    discription:string,
    price:number | string;
    rating:number;
    loading?:boolean
}
const ProductDetailsCard = ({imgSrc,title,discription,price,rating,loading}:IProductData) => {
    let starArr = new Array(Math.floor(rating || 4)).fill(1)
  return (
    <div className='w-[100%] max-h-[450px] bg-[#fff6d1] text-black flex flex-col p-4  gap-2'>
        {
            loading && <div className='text-black'>Loading...</div> 
        }
        {
            !loading && (
                <>
                    <div className='flex justify-center items-center'>
            <FallbackImage
                src={imgSrc}
                alt="product"
                customClass='max-w-[75%] md:max-w-[35%] max-h-[200px]'
                fallbackSrc="https://via.placeholder.com/200"
            />
            
        </div>
        <div className='text-[20px] text-black font-bold'>
            {title}
        </div>
        <div>
            {
                (starArr).map((_,index) => <p key={index} className='inline-block'>⭐</p> )
            }
        </div>
        <div className='text-[16px] text-black truncate'>{discription}</div>
        <div className='flex justify-start items-center gap-4'>
            <div className='text-[20px] text-black font-bold'>{`${price || 0} $`}</div>
            <button className='button' >Buy Now</button>
        </div>
                
                </>
            )
        }
        
    </div>
  )
}


export default ProductDetailsCard