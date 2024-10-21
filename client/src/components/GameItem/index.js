import React from 'react';
import './index.scss';

const GameItem = ({ data }) => {
  const { title, thumb } = data;

  return (
    <div className="game-item">
      <div className="game-item-image">
        {thumb && thumb.url ? (
          <img src={thumb.url} alt={title} />
        ) : (
          // Displaying a fallback message if the thumbnail is not available
          <div>No image available</div>
        )}
      </div>
      <div className="game-item-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default GameItem;
