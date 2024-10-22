import React, { useEffect, useContext } from 'react';
import { resetCoins } from '../../services/api';
import { CoinContext } from '../../contexts/CoinContext';
import './index.scss';

const MainLayout = ({ children }) => {
  const { coins, setCoins } = useContext(CoinContext);

  // Gets initial coin balance
  useEffect(() => {
    const resetCoinBalance = async () => {
      try {
        const data = await resetCoins();
        setCoins(data.coins);
      } catch (error) {
        console.error('Error fetching initial coins:', error);
      }
    };

    resetCoinBalance();
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
