import React, { useEffect, useState } from 'react';
import { fetchCoins } from '../../services/api';
import './index.scss';

const MainLayout = ({ children }) => {
  const [coins, setCoins] = useState(null);

  // Gets initial coin balance
  useEffect(() => {
    const getInitialCoins = async () => {
      try {
        const data = await fetchCoins();
        setCoins(data.coins);
      } catch (error) {
        console.error('Error fetching initial coins:', error);
      }
    };

    getInitialCoins();
  }, []);

  return (
    <div className="main-layout">
      <header className="main-header">
        <div className="logo">
          <h1>CASINO</h1>
        </div>
        <div className="coins">
          <span>Coins: {coins}</span>
        </div>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default MainLayout;
