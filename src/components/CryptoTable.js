// import React from 'react';
// const CryptoTable = ({ historicalData }) => {
//   return (
//     <table className="table-auto w-full border">
//       <thead>
//         <tr>
//           <th className="px-4 py-2">Date</th>
//           <th className="px-4 py-2">Price</th>
//           <th className="px-4 py-2">24h Volume</th>
//         </tr>
//       </thead>
//       <tbody>
//         {historicalData.map((entry, index) => (
//           <tr key={index}>
//             <td className="border px-4 py-2">{entry.date}</td>
//             <td className="border px-4 py-2">{entry.price}</td>
//             <td className="border px-4 py-2">{entry.volume}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default CryptoTable;


import React from 'react';

const CryptoTable = ({ historicalData }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-medium text-gray-700">Date</th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">Price</th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">24h Volume</th>
          </tr>
        </thead>
        <tbody>
          {historicalData.map((entry, index) => (
            <tr key={index} className="transition duration-300 ease-in-out hover:bg-gray-50">
              <td className="border px-4 py-2">{entry.date}</td>
              <td className="border px-4 py-2">{entry.price}</td>
              <td className="border px-4 py-2">{entry.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
