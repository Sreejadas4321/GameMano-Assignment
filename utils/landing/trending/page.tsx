import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './page.css'
import { useFetch } from '@/utils/data/page';
import Card from '@/utils/componenet/card/page';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const Trending = () => {
  const { data } = useFetch("https://dummyjson.com/products");
  const newData = data.slice(0, 5);

  return (
    <div className='trending'>
      <h2 className='heading'>Most Trending</h2>
      <a href='/product' className='view'>View All Product</a>
      <Carousel responsive={responsive}>
        {newData.map((ele) => (
          <Card key={ele.id} data={ele} />
        ))}
      </Carousel>
    </div>
  );
};
