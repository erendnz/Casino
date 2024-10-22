import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import GamesPage from '../GamesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { CoinProvider } from '../../contexts/CoinContext';

function App() {
  return (
    <Provider store={store}>
      <CoinProvider>
        <BrowserRouter>
          <MainLayout>
            <div className="App">
              <Routes>
                <Route path="/" element={<GamesPage />} exact />
              </Routes>
            </div>
          </MainLayout>
        </BrowserRouter>
      </CoinProvider>
    </Provider>
  );
}

export default App;
