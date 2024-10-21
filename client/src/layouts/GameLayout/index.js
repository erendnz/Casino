import React from 'react';
import GameItem from '../../components/GameItem';
import SearchBar from '../../components/SearchBar';
import ProviderButtons from '../../components/ProviderButtons';
import './index.scss';

const GameLayout = ({ games, searchTerm, onSearchChange }) => {
  return (
    <>
      <div className="container">
        {/* Search bar for filtering games */}
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />

        {/* Provider buttons for filtering games by provider */}
        <ProviderButtons />

        <section className="games-container">
          {games.map((game) => (
            // Displaying each game using GameItem component
            <GameItem key={game.id} data={game} />
          ))}
        </section>
      </div>
    </>
  );
};

export default GameLayout;
