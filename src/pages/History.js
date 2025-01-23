import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import CryptoTable from '../components/CryptoTable';

const History = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
        );
        const data = await response.json();
        const prices = data.prices.map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price,
        }));
        setHistoricalData(prices);
      } catch (error) {
        console.error('Failed to fetch historical data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalData();
  }, []);

  if (loading) return <p>Loading...</p>;

  const chartData = {
    labels: historicalData.map((entry) => entry.date),
    datasets: [
      {
        label: 'Price (USD)',
        data: historicalData.map((entry) => entry.price),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Price History</h1>

      
      <div className="mb-6">
        <Line data={chartData} />
      </div>
      <div className="overflow-x-auto">
        <CryptoTable historicalData={historicalData} />
      </div>
    </div>
  );
};

export default History;
