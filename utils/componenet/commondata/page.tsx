import React from 'react';
import { Common } from '../common/page';


export const Cdata = () => {
  const data = [
    { id: 1, name: "Valorant", launchDate: "19th November" },
    { id: 2, name: "Witcher", launchDate: "11th January" },
    { id: 3, name: "Genshin", launchDate: "30th May" }
  ];

  return (
    <div className='mt-4 flex flex-col gap-8'>
     {data.map((ele) => {
    
    return (<>
    <Common key={ele.id} data={ele} />
    <div className='w-full h-[60px] bg-black'></div>
    </>);
})}

    </div>
  );
};
