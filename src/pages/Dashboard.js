// src/pages/Dashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from '../redux/cryptoSlice';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Footer from '../components/Footer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoData()); 
  }, [dispatch]);

  // Loading or error handling
  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error: {error}</p>;

  
  const chartData = {
    labels: data.map((coin) => coin.name), 
    datasets: [
      {
        label: 'Price in USD',
        data: data.map((coin) => coin.current_price), 
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
     

      {/* Cryptocurrency Price Trend Chart */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Cryptocurrency Price Trend</h2>
        <div className="w-full h-80">
          <Line data={chartData} />
        </div>
      </div>

      {/* Cryptocurrency Data Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Crypto Market Data</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left bg-gray-100">Name</th>
              <th className="border px-4 py-2 text-left bg-gray-100">Symbol</th>
              <th className="border px-4 py-2 text-left bg-gray-100">Price (USD)</th>
              <th className="border px-4 py-2 text-left bg-gray-100">Market Cap</th>
              <th className="border px-4 py-2 text-left bg-gray-100">Volume</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr key={coin.id}>
                <td className="border px-4 py-2 text-gray-700">{coin.name}</td>
                <td className="border px-4 py-2 text-gray-500">{coin.symbol.toUpperCase()}</td>
                <td className="border px-4 py-2 text-gray-700">${coin.current_price}</td>
                <td className="border px-4 py-2 text-gray-700">${coin.market_cap}</td>
                <td className="border px-4 py-2 text-gray-700">${coin.total_volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<Footer />
    </div>
    
  );
};

export default Dashboard;
