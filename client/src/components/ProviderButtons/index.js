import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProvider } from '../../store/gamesSlice';
import gameData from '../../gameData.json';
import './index.scss';

const ProviderButtons = () => {
  const dispatch = useDispatch();
  const selectedProvider = useSelector((state) => state.games.selectedProvider);
  const [providers, setProviders] = useState([]);

  // Extract game providers from gameData
  useEffect(() => {
    const gameProviders = Array.from(
      new Set(gameData.map((game) => game.providerName))
    );
    setProviders(gameProviders);
  }, []);

  return (
    <div className="provider-buttons">
      <button
        onClick={() => dispatch(setProvider(null))}
        className={!selectedProvider ? 'active' : ''}
      >
        All
      </button>
      {providers.map((provider) => (
        <button
          key={provider}
          className={selectedProvider === provider ? 'active' : ''}
          onClick={() => dispatch(setProvider(provider))}
        >
          {provider}
        </button>
      ))}
    </div>
  );
};

export default ProviderButtons;
