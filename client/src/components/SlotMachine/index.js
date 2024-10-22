import React, { useState, useEffect, useContext } from 'react';
import { fetchCoins } from '../../services/api';
import { CoinContext } from '../../contexts/CoinContext';
import './index.scss';

// Icon mapping for slot machine symbols
const iconMap = {
  cherry: '/icons/cherry.png',
  lemon: '/icons/lemon.png',
  apple: '/icons/apple.png',
  banana: '/icons/banana.png',
};

const SlotMachine = ({ spin }) => {
  const [result, setResult] = useState(['lemon', 'lemon', 'lemon']); // Initial result state
  const { coins, setCoins } = useContext(CoinContext); // get coin from context
  const [spinning, setSpinning] = useState(false);

  // Function to handle the spin action
  const handleSpin = async () => {
    setSpinning(true);
    const response = await spin();
    setResult(response.result);
    setCoins(response.coins); // Update coin balance
    setTimeout(() => setSpinning(false), 1500); // Spinning animation duration
  };

  // Get initial coin balance
  useEffect(() => {
    const getCoins = async () => {
      try {
        const data = await fetchCoins();
        setCoins(data.coins);
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    };

    getCoins();
  }, []);

  return (
    <div className="slot-machine">
      <div className="reels">
        {result.map((symbol, index) => (
          <div key={index} className={`reel ${spinning ? 'spinning' : ''}`}>
            <img src={iconMap[symbol]} alt={symbol} className="symbol" />
          </div>
        ))}
      </div>
      <button onClick={handleSpin}>Spin</button>
      <div className="coins">Coins: {coins}</div>
    </div>
  );
};

export default SlotMachine;
