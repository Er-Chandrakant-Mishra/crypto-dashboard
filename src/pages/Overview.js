// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCryptoData } from '../redux/cryptoSlice';

// const Overview = () => {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.crypto);

//   useEffect(() => {
//     dispatch(fetchCryptoData());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Cryptocurrency Overview</h1>
//       <table className="table-auto w-full border-collapse border border-gray-200">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Symbol</th>
//             <th className="border px-4 py-2">Current Price</th>
//             <th className="border px-4 py-2">Market Cap</th>
//             <th className="border px-4 py-2">24h Volume</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((coin) => (
//             <tr key={coin.id}>
//               <td className="border px-4 py-2">{coin.name}</td>
//               <td className="border px-4 py-2">{coin.symbol.toUpperCase()}</td>
//               <td className="border px-4 py-2">${coin.current_price.toLocaleString()}</td>
//               <td className="border px-4 py-2">${coin.market_cap.toLocaleString()}</td>
//               <td className="border px-4 py-2">${coin.total_volume.toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Overview;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from '../redux/cryptoSlice';

const Overview = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.crypto);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cryptocurrency Overview</h1>

      {/* Cryptocurrency table */}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Symbol</th>
            <th className="border px-4 py-2">Current Price</th>
            <th className="border px-4 py-2">Market Cap</th>
            <th className="border px-4 py-2">24h Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr
              key={coin.id}
              onClick={() => handleSelectCoin(coin)}
              className="cursor-pointer hover:bg-gray-50"
            >
              <td className="border px-4 py-2">{coin.name}</td>
              <td className="border px-4 py-2">{coin.symbol.toUpperCase()}</td>
              <td className="border px-4 py-2">${coin.current_price.toLocaleString()}</td>
              <td className="border px-4 py-2">${coin.market_cap.toLocaleString()}</td>
              <td className="border px-4 py-2">${coin.total_volume.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display selected coin details */}
      {selectedCoin && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold">{selectedCoin.name} Details</h2>
          <p><strong>Symbol:</strong> {selectedCoin.symbol.toUpperCase()}</p>
          <p><strong>Current Price:</strong> ${selectedCoin.current_price.toLocaleString()}</p>
          <p><strong>Market Cap:</strong> ${selectedCoin.market_cap.toLocaleString()}</p>
          <p><strong>Total Supply:</strong> {selectedCoin.total_supply ? selectedCoin.total_supply.toLocaleString() : 'N/A'}</p>
          <p><strong>Circulating Supply:</strong> {selectedCoin.circulating_supply ? selectedCoin.circulating_supply.toLocaleString() : 'N/A'}</p>
          <p><strong>Rank:</strong> {selectedCoin.market_cap_rank}</p>
          <p><strong>Description:</strong> {selectedCoin.description ? selectedCoin.description : 'No description available'}</p>
        </div>
      )}
    </div>
  );
};

export default Overview;

