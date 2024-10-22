import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import SlotMachine from '../components/SlotMachine';

// Test for rendering the SlotMachine component and handling a spin event
test('renders SlotMachine component and handles spin', async () => {
  // Mocking the spin function to simulate a successful spin
  const mockSpin = jest.fn().mockResolvedValue({
    result: ['lemon', 'lemon', 'lemon'],
    coins: 19,
  });

  render(<SlotMachine spin={mockSpin} />);

  // Simulating a click event on the "Spin" button within an act wrapper
  await act(async () => {
    fireEvent.click(screen.getByText('Spin'));
  });

  // Asserting that the spin function was called exactly once
  expect(mockSpin).toHaveBeenCalledTimes(1);
});
