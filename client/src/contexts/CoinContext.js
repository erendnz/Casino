import React, { createContext, useState } from 'react';

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState(20); // Initial coin balance set to 20

  return (
    <CoinContext.Provider value={{ coins, setCoins }}>
      {children}
    </CoinContext.Provider>
  );
};
