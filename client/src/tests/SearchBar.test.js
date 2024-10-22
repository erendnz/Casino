import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

// Test suite for the SearchBar component
describe('SearchBar', () => {
  it('calls onSearchChange with the correct value when user types', () => {
    const mockOnSearchChange = jest.fn();

    render(<SearchBar searchTerm="" onSearchChange={mockOnSearchChange} />);

    const inputElement = screen.getByPlaceholderText(/Search games.../i);

    // Simulating a change event on the input element
    fireEvent.change(inputElement, { target: { value: 'new search term' } });

    // Asserting that the onSearchChange function was called with the correct value
    expect(mockOnSearchChange).toHaveBeenCalledWith('new search term');
  });
});
