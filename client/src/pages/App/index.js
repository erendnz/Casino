import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import GamesPage from '../GamesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout'; // MainLayout bileşenini ekliyoruz

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <div className="App">
            <Routes>
              <Route path="/" element={<GamesPage />} exact />
            </Routes>
          </div>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
