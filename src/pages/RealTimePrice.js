import React, { useEffect, useState } from 'react';

const RealTimePrice = ({ symbol }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}usdt@trade`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(data.p);
    };

    return () => {
      ws.close();
    };
  }, [symbol]);

  return (
    <div>
      <h2 className="text-xl font-bold">Real-Time Price</h2>
      {price ? <p>${parseFloat(price).toFixed(2)}</p> : <p>Loading...</p>}
    </div>
  );
};

export default RealTimePrice;
