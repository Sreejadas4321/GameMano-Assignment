import React from 'react';
import { Common } from '../common/page';

// Define the shape of the data that the Common component expects
interface GameData {
  id: number;
  name: string;
  launchDate: string;
  description: string;
  platforms: string[];
  price: number;
}

export const Cdata: React.FC = () => {
  // Define the data array with the type GameData[]
  const data: GameData[] = [
    {
      id: 1,
      name: "Valorant",
      launchDate: "19th November",
      description: "A tactical shooter game developed by Riot Games.",
      platforms: ["PC"],
      price: 0
    },
    {
      id: 2,
      name: "Witcher",
      launchDate: "11th January",
      description: "An action role-playing game based on the book series by Andrzej Sapkowski.",
      platforms: ["PC", "PS4", "Xbox One"],
      price: 29.99
    },
    {
      id: 3,
      name: "Genshin",
      launchDate: "30th May",
      description: "An open-world action RPG developed by miHoYo.",
      platforms: ["PC", "PS4", "Mobile"],
      price: 0
    }
  ];

  return (
    <div className='mt-4 flex flex-col gap-8'>
      {data.map((ele) => (
        // Use React.Fragment to wrap the elements
        <React.Fragment key={ele.id}>
          {/* Pass the data to the Common component */}
          <Common data={ele} />
          <div className='w-full h-[60px] bg-black'></div>
        </React.Fragment>
      ))}
    </div>
  );
};
