import React from 'react';
import { Common } from '../common/page';

// Define the shape of the data that the Common component expects
interface GameData {
  id: number;
  name: string;
  launchDate: string;
  description: string;
  platforms: string[];
  rating: number;
  price: number;
}

export const Cdata: React.FC = () => {
  // Define the data array with the type GameData[]
  const data: GameData[] = [
    {
      id: 1,
      name: "Valorant",
      launchDate: "19th November",
      description:  " A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.",
      platforms: ["PC"],
      rating: 4.5,
      price: 0
    },
    {
      id: 2,
      name: "Witcher",
      launchDate: "11th January",
      description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
      platforms: ["PC", "PS4", "Xbox One"],
      rating: 4.5,
      price: 29.99
    },
    {
      id: 3,
      name: "Genshin",
      launchDate: "30th May",
      description: "The game features an anime-style open-world environment and an action-based battle system using elemental magic and character-switching.",
      platforms: ["PC", "PS4", "Mobile"],
      rating: 4.5,
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
