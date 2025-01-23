import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaHistory, FaBitcoin, FaEthereum } from "react-icons/fa";

const Header = ({ onSelectCrypto }) => {
  const cryptocurrencies = [
    { name: "Bitcoin", icon: <FaBitcoin className="text-yellow-400" /> },
    { name: "Ethereum", icon: <FaEthereum className="text-gray-400" /> },
    { name: "Ripple", icon: <FaBitcoin className="text-blue-400" /> },
    { name: "Litecoin", icon: <FaBitcoin className="text-green-400" /> },
  ];

  const handleSelect = (e) => {
    const selectedCrypto = e.target.value;
    onSelectCrypto(selectedCrypto);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <FaBitcoin className="text-yellow-400 mr-2" />
          <span>Crypto Dashboard</span>
        </Link>
        <div className="flex space-x-6 text-sm sm:text-base">
          <Link
            to="/overview"
            className="flex items-center space-x-1 hover:text-gray-200 transition"
          >
            <FaChartLine />
            <span>Overview</span>
          </Link>
          <Link
            to="/history"
            className="flex items-center space-x-1 hover:text-gray-200 transition"
          >
            <FaHistory />
            <span>History</span>
          </Link>

          <div className="relative">
            <select
              onChange={handleSelect}
              className="bg-white text-blue-600 px-4 py-2 rounded shadow focus:outline-none"
            >
              {cryptocurrencies.map((crypto) => (
                <option key={crypto.name} value={crypto.name}>
                  {crypto.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
