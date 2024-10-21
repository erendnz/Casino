// Function to get the current coin balance from the server
export const fetchCoins = async () => {
  try {
    const response = await fetch('/api/coins', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching coins:', error);
    throw error;
  }
};

// Function to perform a spin on the slot machine
export const spin = async () => {
  try {
    const response = await fetch('/api/spin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error during spin:', error);
    throw error;
  }
};
