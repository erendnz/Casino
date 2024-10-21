import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/gamesSlice';
import GameLayout from '../../layouts/GameLayout';
import SlotMachine from '../../components/SlotMachine';
import { spin } from '../../services/api';
import './index.scss';

const GamesPage = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.filteredGames);
  const searchTerm = useSelector((state) => state.games.searchTerm);
  const [showSlotMachine, setShowSlotMachine] = useState(false);

  const handleSearchChange = (term) => {
    dispatch(setSearchTerm(term));
  };

  const toggleSlotMachine = () => {
    setShowSlotMachine(!showSlotMachine);
  };

  const closeSlotMachine = () => {
    setShowSlotMachine(false);
  };

  return (
    <>
      <GameLayout
        games={games}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      {/* Sticky icon to toggle SlotMachine */}
      <div className="sticky-icon" onClick={toggleSlotMachine}>
        <img src="/icons/slotMachine.png" alt="Slot Machine" />
      </div>
      {showSlotMachine && (
        <div className="slot-machine-overlay" onClick={closeSlotMachine}>
          <div
            className="slot-machine-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeSlotMachine}>
              X
            </button>
            <SlotMachine spin={spin} />
          </div>
        </div>
      )}
    </>
  );
};

export default GamesPage;
