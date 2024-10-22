import { fetchCoins, spin } from '../services/api';

// Mock global fetch function
global.fetch = jest.fn();

beforeAll(() => {
  // Suppress console.error output
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('API Service', () => {
  afterEach(() => {
    // Clear all mocks after each test to ensure isolation
    jest.clearAllMocks();
  });

  it('fetches the current coin balance successfully', async () => {
    // Mocking the fetch response for fetchCoins
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ coins: 20 })
    });

    // Calling fetchCoins and checking the response
    const response = await fetchCoins();
    expect(response.coins).toBe(20); // Ensure the coins value is correct
    expect(fetch).toHaveBeenCalledWith('/api/coins', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  });

  it('handles error when fetching coin balance', async () => {
    // Mocking the fetch response to simulate error
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    // Expecting fetchCoins to throw an error
    await expect(fetchCoins()).rejects.toThrow('HTTP error! status: 500');
    expect(fetch).toHaveBeenCalledWith('/api/coins', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  });

  it('performs a spin and returns the result', async () => {
    // Mocking the fetch response for spin
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ result: ['apple', 'lemon', 'apple'], coins: 19 })
    });

    // Calling spin and checking the response
    const response = await spin();
    expect(response.result).toEqual(['apple', 'lemon', 'apple']); // Ensure the spin result is correct
    expect(response.coins).toBe(19); // Ensure the coins value is correct
    expect(fetch).toHaveBeenCalledWith('/api/spin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  });

  it('handles error during spin', async () => {
    // Mocking the fetch response to simulate error
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    // Expecting spin to throw an error
    await expect(spin()).rejects.toThrow('HTTP error! status: 500');
    expect(fetch).toHaveBeenCalledWith('/api/spin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  });
});
