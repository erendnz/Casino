import { createSlice } from '@reduxjs/toolkit';
import gameData from '../gameData.json';

// Initial state of the games slice
const initialState = {
  games: gameData,
  filteredGames: gameData,
  searchTerm: '',
  selectedProvider: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    // Set the search term and filter games based on the search term and selected provider
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredGames = state.games;

      // If a provider is selected, filter games by provider
      if (state.selectedProvider) {
        state.filteredGames = state.filteredGames.filter(
          (game) => game.providerName === state.selectedProvider
        );
      }

      // Filter games by search term
      state.filteredGames = state.filteredGames.filter((game) =>
        game.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },

    // Set the selected provider and filter games based on the selected provider and search term
    setProvider(state, action) {
      state.selectedProvider = action.payload;
      state.filteredGames = state.games;

      // If a provider is selected, filter games by provider
      if (state.selectedProvider) {
        state.filteredGames = state.filteredGames.filter(
          (game) => game.providerName === state.selectedProvider
        );
      }

      // If a search term is set, filter games by search term
      if (state.searchTerm) {
        state.filteredGames = state.filteredGames.filter((game) =>
          game.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }
    },
  },
});

export const { setSearchTerm, setProvider } = gamesSlice.actions;
export default gamesSlice.reducer;
