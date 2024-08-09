import React from 'react';
import { Common } from '../common/page';


export const Cdata = () => {
  const data = [
    { id: 1, name: "Valorant", launchDate: "19th November" },
    { id: 2, name: "Witcher", launchDate: "11th January" },
    { id: 3, name: "Genshin", launchDate: "30th May" }
  ];

  return (
    <div>
     {data.map((ele) => {
    console.log(ele);  // This will log each item in the data array
    return <Common key={ele.id} data={ele} />;
})}

    </div>
  );
};
