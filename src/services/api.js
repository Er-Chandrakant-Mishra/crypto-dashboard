import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3/coins';

/**
 * Fetch current cryptocurrency data
 * @param {string} crypto - The cryptocurrency ID (e.g., 'bitcoin', 'ethereum')
 * @returns {Promise<object>} - The cryptocurrency data
 */
export const fetchCurrentCryptoData = async (crypto) => {
  try {
    const response = await axios.get(`${BASE_URL}/${crypto}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching current crypto data:', error);
    throw error;
  }
};

/**
 * Fetch historical price data for the past 7 days
 * @param {string} crypto - The cryptocurrency ID (e.g., 'bitcoin', 'ethereum')
 * @returns {Promise<object[]>} - Array of historical price data
 */
export const fetchHistoricalData = async (crypto) => {
  try {
    const response = await axios.get(`${BASE_URL}/${crypto}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: 7,
      },
    });
    return response.data.prices.map(([timestamp, price]) => ({
      date: new Date(timestamp).toISOString().split('T')[0],
      price: price.toFixed(2),
    }));
  } catch (error) {
    console.error('Error fetching historical data:', error);
    throw error;
  }
};
