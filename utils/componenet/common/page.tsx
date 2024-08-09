import React from 'react';
import './page.css';

export const Common = ({ data }) => {
    
  return (
    <div className="home-container">
      <div className="game-title">{data.name}</div>
      <div className="release-date">{data.launchDate}</div>
      <p className="description">
        Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.
      </p>
      <div className="actions">
        <button className="play-button">Play Now</button>
        <div className="price">Buy now for 40$ only</div>
      </div>
      <div className="availability">
        Available on: <span className="platform">iOS</span>{' '}
        <span className="platform">Windows</span>
      </div>
    </div>
  );
};
